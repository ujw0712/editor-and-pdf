<script setup>
import { defineProps, ref } from 'vue'
import MenuItem from './MenuItem.vue'

const props = defineProps(['editor'])

const items = ref([
  // {
  //   icon: 'italic',
  //   title: 'Italic',
  //   action: () => props.editor.chain().focus().toggleItalic().run(),
  //   // uploadEditorImage($event, commands.image)
  //   // @click="addImage"
  // },
  // {
  //   type: 'divider',
  // },
  {
    icon: 'h-1',
    title: 'Heading 1',
    action: () => props.editor.chain().focus().toggleHeading({ level: 1 }).run(),
    isActive: () => props.editor.isActive('heading', { level: 1 }),
  },
  {
    icon: 'h-2',
    title: 'Heading 2',
    action: () => props.editor.chain().focus().toggleHeading({ level: 2 }).run(),
    isActive: () => props.editor.isActive('heading', { level: 2 }),
  },
  {
    icon: 'h-3',
    title: 'Heading 3',
    action: () => props.editor.chain().focus().toggleHeading({ level: 3 }).run(),
    isActive: () => props.editor.isActive('heading', { level: 3 }),
  },
  {
    icon: 'h-4',
    title: 'Heading 4',
    action: () => props.editor.chain().focus().toggleHeading({ level: 4 }).run(),
    isActive: () => props.editor.isActive('heading', { level: 4 }),
  },
  // {
  //   icon: 'paragraph',
  //   title: 'Paragraph',
  //   action: () => props.editor.chain().focus().setParagraph().run(),
  //   isActive: () => props.editor.isActive('paragraph'),
  // },
  {
    type: 'divider',
  },
  {
    icon: 'bold',
    title: 'Bold',
    action: () => props.editor.chain().focus().toggleBold().run(),
    isActive: () => props.editor.isActive('bold'),
  },
  {
    icon: 'italic',
    title: 'Italic',
    action: () => props.editor.chain().focus().toggleItalic().run(),
    isActive: () => props.editor.isActive('italic'),
  },
  {
    icon: 'strikethrough',
    title: 'Strike',
    action: () => props.editor.chain().focus().toggleStrike().run(),
    isActive: () => props.editor.isActive('strike'),
  },
  {
    icon: 'underline',
    title: 'UnderLine',
    action: () => props.editor.chain().focus().toggleUnderline().run(),
    isActive: () => props.editor.isActive('underline'),
  },
  {
    icon: 'code-view',
    title: 'Code',
    action: () => props.editor.chain().focus().toggleCode().run(),
    isActive: () => props.editor.isActive('code'),
  },
  {
    icon: 'mark-pen-line',
    title: 'Highlight',
    action: () => props.editor.chain().focus().toggleHighlight().run(),
    isActive: () => props.editor.isActive('highlight'),
  },
  {
    type: 'divider',
  },
  {
    color: '#272727',
    title: 'black',
    action: () => props.editor.chain().focus().setColor('#272727').run(),
    isActive: () => props.editor.isActive('textStyle', { color: '#272727' }),
  },
  {
    color: '#FF693A',
    title: 'orange',
    action: () => props.editor.chain().focus().setColor('#FF693A').run(),
    isActive: () => props.editor.isActive('textStyle', { color: '#FF693A' }),
  },
  {
    color: '#643BFF',
    title: 'blue',
    action: () => props.editor.chain().focus().setColor('#643BFF').run(),
    isActive: () => props.editor.isActive('textStyle', { color: '#643BFF' }),
  },
  {
    type: 'divider',
  },
  // {
  //   icon: 'list-unordered',
  //   title: 'Bullet List',
  //   action: () => props.editor.chain().focus().toggleBulletList().run(),
  //   isActive: () => props.editor.isActive('bulletList'),
  // },
  // {
  //   icon: 'list-ordered',
  //   title: 'Ordered List',
  //   action: () => props.editor.chain().focus().toggleOrderedList().run(),
  //   isActive: () => props.editor.isActive('orderedList'),
  // },
  // {
  //   icon: 'list-check-2',
  //   title: 'Task List',
  //   action: () => props.editor.chain().focus().toggleTaskList().run(),
  //   isActive: () => props.editor.isActive('taskList'),
  // },
  {
    icon: 'code-box-line',
    title: 'Code Block',
    action: () => props.editor.chain().focus().toggleCodeBlock().run(),
    isActive: () => props.editor.isActive('codeBlock'),
  },
  {
    type: 'divider',
  },
  {
    icon: 'align-left',
    title: 'Align Left',
    action: () => props.editor.chain().focus().setTextAlign('left').run(),
    isActive: () => props.editor.isActive({ textAlign: 'left' }),
  },
  {
    icon: 'align-center',
    title: 'Align Center',
    action: () => props.editor.chain().focus().setTextAlign('center').run(),
    isActive: () => props.editor.isActive({ textAlign: 'center' }),
  },
  {
    icon: 'align-right',
    title: 'Align Right',
    action: () => props.editor.chain().focus().setTextAlign('right').run(),
    isActive: () => props.editor.isActive({ textAlign: 'right' }),
  },
  {
    icon: 'align-justify',
    title: 'Align Justify',
    action: () => props.editor.chain().focus().setTextAlign('justify').run(),
    isActive: () => props.editor.isActive({ textAlign: 'justify' }),
  },
  {
    type: 'divider',
  },
  {
    icon: 'double-quotes-l',
    title: 'Blockquote',
    action: () => props.editor.chain().focus().toggleBlockquote().run(),
    isActive: () => props.editor.isActive('blockquote'),
  },
  {
    icon: 'separator',
    title: 'Horizontal Rule',
    action: () => props.editor.chain().focus().setHorizontalRule().run(),
  },
  // {
  //   type: 'divider',
  // },
  // {
  //   icon: 'link',
  //   title: 'Link',
  //   action: () => props.editor.chain().focus().setHorizontalRule().run()
  //   isActive: () => props.editor.isActive.link(),
  //   setLink(commands.link, null)
  //   setLink(commands.link, linkUrl)
  //   toggleLinkPopup('open', getMarkAttrs('link'))
  // },
  {
    type: 'divider',
  },
  {
    icon: 'text-wrap',
    title: 'Hard Break',
    action: () => props.editor.chain().focus().setHardBreak().run(),
  },
  {
    icon: 'format-clear',
    title: 'Clear Format',
    action: () => props.editor.chain().focus().clearNodes().unsetAllMarks().run(),
  },
  {
    type: 'divider',
  },
  {
    icon: 'arrow-go-back-line',
    title: 'Undo',
    action: () => props.editor.chain().focus().undo().run(),
  },
  {
    icon: 'arrow-go-forward-line',
    title: 'Redo',
    action: () => props.editor.chain().focus().redo().run(),
  },
])

// const addImage = () => {
//   // const url = window.prompt('URL')
//   const url = 'https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg'
//   if (url) {
//     editor.chain().focus().setImage({ src: url }).run()
//   }
// }
</script>

<template>
  <div>
    <template v-for="(item, index) in items">
      <div class="divider" v-if="item.type === 'divider'" :key="`divider${index}`" />
      <menu-item v-else :key="index" v-bind="item" />
    </template>
  </div>
</template>