import { Decoration, DecorationSet } from 'prosemirror-view'

export default function (doc) {
  const hexColor = /(#[0-9a-f]{3,6})\b/ig
  const decorations = []

  doc.descendants((node, position) => {
    if (!node.text) {
      return
    }

    Array
      .from(node.text.matchAll(hexColor))
      .forEach(match => {
        const color = match[0]
        const index = match.index || 0
        const from = position + index
        const to = from + color.length
        const decoration = Decoration.inline(from, to, {
          class: 'color',
          style: `--color: ${color}`,
        })

        decorations.push(decoration)
      })
  })

  return DecorationSet.create(doc, decorations)
}