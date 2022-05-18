<script setup>
import { ref, defineExpose, onBeforeUnmount, } from "vue"
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
import Collaboration from '@tiptap/extension-collaboration'
import CollaborationCursor from '@tiptap/extension-collaboration-cursor'
import CharacterCount from '@tiptap/extension-character-count'
import * as Y from 'yjs'
import { HocuspocusProvider } from '@hocuspocus/provider'

import Underline from '@/plugins/tiptap/underline'
import Serif from '@/plugins/tiptap/serif'
import { ColorHighlighter } from '@/plugins/tiptap/colorHighlighter'
import { SmilieReplacer } from '@/plugins/tiptap/smilieReplacer'

import MenuBar from './MenuBar'

const getRandomElement = list => list[Math.floor(Math.random() * list.length)]
const getRandomRoom = () => getRandomElement(['rooms.30','rooms.31','rooms.32',])
const getRandomColor = () => getRandomElement(['#958DF1','#F98181','#FBBC88','#FAF594','#70CFF8','#94FADB','#B9F18D',])
const getRandomName = ()  => getRandomElement(['임시이름1','임시이름2','임시이름3'])

let currentUser = ref(JSON.parse(localStorage.getItem('currentUser')) || {
  name: getRandomName(),
  color: getRandomColor(),
})
let status = ref('offline') // connecting
let room = ref(getRandomRoom())

const yDoc = new Y.Doc()

const setName = () => {
  const name = (window.prompt('Name') || '').trim().substring(0, 32)
  if (name) updateCurrentUser({name})
}

const updateCurrentUser = (attributes) => {
  currentUser.value = { ...(currentUser.value), ...attributes }
  if (currentUser.value) {
    editor.chain().focus().updateUser(currentUser.value).run()
    localStorage.setItem('currentUser', JSON.stringify(currentUser.value))
  }
}

const provider = new HocuspocusProvider({
  url: 'wss://connect.gethocuspocus.com',
  parameters: {
    key: 'write_bqgvQ3Zwl34V4Nxt43zR',
  },
  name: room.value,
  document: yDoc,
})

provider.on('status', event => status.value = event.status)
localStorage.setItem('currentUser', JSON.stringify(currentUser.value))

// const CustomDocument = Document.extend({
//   content: 'heading block*',
// })

let editor = new Editor({
  extensions: [
    // StarterKit,
    StarterKit.configure({
      document: false,
      history: false,
    }),
    // Placeholder.configure({
    //   placeholder: ({ node }) => {
    //     if (node.type.name === 'heading') {
    //       return 'What’s the title?'
    //     }
    //     return 'Can you add some further context?'
    //   },
    // }),
    Underline,
    Serif,
    TextStyle,
    Color,
    Image,
    TextAlign.configure({
      types: ['heading', 'paragraph'],
    }),
    Highlight,
    Document, // CustomDocument,
    Typography,
    ColorHighlighter,
    SmilieReplacer,
    Collaboration.configure({
      document: yDoc,
    }),
    CollaborationCursor.configure({
      provider: provider,
      user: currentUser.value,
    }),
    CharacterCount.configure({
      limit: 10000,
    }),
  ],
})

onBeforeUnmount(() => {
  editor.destroy()
  provider.destroy()
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
    <div class="editor-collaboration">
      <div :class="`status status-${status}`">
        <template v-if="status === 'connected'">
          {{ editor.storage.collaborationCursor.users.length }} user{{ editor.storage.collaborationCursor.users.length === 1 ? '' : 's' }} online in {{ room }}
        </template>
        <template v-else>
          offline
        </template>
      </div>
      <div class="name">
        <button @click="setName">{{ currentUser.name }}</button>
      </div>
    </div>
    <editor-content ref="editorContents" :editor="editor" class="editor-content" />
</div>
</template>