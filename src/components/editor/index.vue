<script setup>
import { ref, defineExpose} from "vue"
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Document from '@tiptap/extension-document'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'
import Highlight from '@tiptap/extension-highlight'
import Typography from '@tiptap/extension-typography'
import Placeholder from '@tiptap/extension-placeholder'

import Underline from '@/plugins/tiptap/underline'
import Serif from '@/plugins/tiptap/serif'
import { ColorHighlighter } from '@/plugins/tiptap/colorHighlighter'
import { SmilieReplacer } from '@/plugins/tiptap/smilieReplacer'

import MenuBar from './MenuBar'


const CustomDocument = Document.extend({
  content: 'heading block*',
})

let content = ""
let editor = new Editor({
  content,
  extensions: [
    // StarterKit,
    StarterKit.configure({
      document: false,
    }),
    Placeholder.configure({
      placeholder: ({ node }) => {
        if (node.type.name === 'heading') {
          return 'What’s the title?'
        }
        return 'Can you add some further context?'
      },
    }),
    Underline,
    Serif,
    TextStyle,
    Color,
    Image,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Highlight,
    CustomDocument,
    Typography,
    ColorHighlighter,
    SmilieReplacer,
  ],
})

const editorContents = ref()
const getEditorHtml = () => editorContents.value.$el

defineExpose({
  getEditorHtml
})
</script>

<template>
  <div class="editor-box">
    <menu-bar class="editor-header" :editor="editor" />
    <editor-content ref="editorContents" :editor="editor" class="writeP-content-box editor-content-box" />
</div>
</template>