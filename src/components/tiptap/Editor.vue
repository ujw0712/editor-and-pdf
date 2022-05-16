<template>

  <div class="editor-box">
    <div class="editor-header">
      <div class="editor-btn-img" @click="addImage">
        <div class="icon-img icon-editor-img">이미지</div>
<!--        <input type="file" accept="image/gif, image/jpg, image/jpeg, image/png" ref="imageInput" multiple-->
<!--               @change="uploadEditorImage($event, commands.image)" style="display:none">-->
      </div>

      <div class="link-bar"></div>

      <div class="editor-btn-text "
           @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
           :class="{ 'on': editor.isActive('heading', { level: 1 }) }">
        <div class="fw-medium">H1</div>
      </div>
      <div class="editor-btn-text "
           @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
           :class="{ 'on': editor.isActive('heading', { level: 2 }) }">
        <div class="fw-medium">H2</div>
      </div>
      <div class="editor-btn-text "
           @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
           :class="{ 'on': editor.isActive('heading', { level: 3 }) }">
        <div class="fw-medium">H3</div>
      </div>
      <div class="editor-btn-text "
           @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
           :class="{ 'on': editor.isActive('heading', { level: 4 }) }">
        <div class="fw-medium">H4</div>
      </div>
<!--      <div class="editor-btn-text "-->
<!--              @click="editor.chain().focus().setParagraph().run()"-->
<!--              :class="{ 'on': editor.isActive('paragraph') }">-->
<!--        <div class="">본문</div>-->
<!--      </div>-->

      <div class="link-bar"></div>

      <div class="editor-btn-font"
           @click="editor.chain().focus().toggleBold().run()"
           :class="{ 'on': editor.isActive('bold') }">
        <div class="icon-img icon-editor-bold">볼드</div>
      </div>
      <div class="editor-btn-font"
           @click="editor.chain().focus().toggleItalic().run()"
           :class="{ 'on': editor.isActive('italic') }">
        <div class="icon-img icon-editor-italic">기울임</div>
      </div>
      <div class="editor-btn-font"
           @click="editor.chain().focus().toggleStrike().run()"
           :class="{ 'on': editor.isActive('strike') }">
        <div class="icon-img icon-editor-strike">취소선</div>
      </div>
      <div class="editor-btn-font"
           @click="editor.chain().focus().toggleUnderline().run()"
           :class="{ 'on': editor.isActive('underline') }">
        <div class="icon-img icon-editor-under">밑줄</div>
      </div>

      <div class="link-bar"></div>

      <div class="editor-btn-color"
           @click="editor.chain().focus().setColor('#272727').run()"
           :class="{ 'on': editor.isActive('textStyle', { color: '#272727' })}">
        <div class="color-box" style="background: #272727">검정</div>
      </div>
      <div class="editor-btn-color"
           @click="editor.chain().focus().setColor('#FF693A').run()"
           :class="{ 'on': editor.isActive('textStyle', { color: '#FF693A' })}">
        <div class="color-box" style="background: #FF693A">주황</div>
      </div>
      <div class="editor-btn-color"
           @click="editor.chain().focus().setColor('#643BFF').run()"
           :class="{ 'on': editor.isActive('textStyle', { color: '#643BFF' })}">
        <div class="color-box" style="background: #643BFF">보라</div>
      </div>

      <div class="link-bar"></div>

      <div class="editor-btn-font"
           @click="editor.chain().focus().toggleHighlight().run()"
           :class="{ 'on': editor.isActive('highlight') }">
        <div class="icon-img icon-editor-highlight">highlight</div>
      </div>

      <div class="link-bar"></div>

      <div class="editor-btn-font"
           @click="editor.chain().focus().setTextAlign('left').run()"
           :class="{ 'on': editor.isActive({ textAlign: 'left' }) }">
        <div class="icon-img icon-editor-left">left</div>
      </div>
      <div class="editor-btn-font"
           @click="editor.chain().focus().setTextAlign('center').run()"
           :class="{ 'on': editor.isActive({ textAlign: 'center' }) }">
        <div class="icon-img icon-editor-center">center</div>
      </div>
      <div class="editor-btn-font"
           @click="editor.chain().focus().setTextAlign('right').run()"
           :class="{ 'on': editor.isActive({ textAlign: 'right' }) }">
        <div class="icon-img icon-editor-right">right</div>
      </div>
      <div class="editor-btn-font"
           @click="editor.chain().focus().setTextAlign('justify').run()"
           :class="{ 'on': editor.isActive({ textAlign: 'justify' }) }">
        <div class="icon-img icon-editor-justify">highlight</div>
      </div>

<!--      <div class="editor-btn-link" @click="toggleLinkPopup('open', getMarkAttrs('link'))" v-click-outside="toggleLinkPopup">-->
<!--        <div class="icon-img icon-editor-link">링크</div>-->
<!--        <div v-if="isOpenLinkPopup" class="popupBox editor-link-input w-400">-->
<!--          <div class="popupBox-body">-->
<!--            <div><input type="text" placeholder="http:// 포함한 URL을 입력하세요." v-model="linkUrl" v-focus @keypress.enter="setLink(commands.link, linkUrl)"></div>-->
<!--          </div>-->
<!--          <div class="popupBox-bottom">-->
<!--            <button v-if="isActive.link()" @click="setLink(commands.link, null)" class="w-90 mr-10 btn btn-sm btn-outline color-6" >링크해제</button>-->
<!--            <button class="w-90 btn btn-sm" :class="isLinkActive ? 'color-1' : 'color-6 btn-outline'" @click="setLink(commands.link, linkUrl)">확인</button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
    </div>

    <div class="writeP-content-box editor-content-box">
      <editor-content :editor="editor" />
    </div>
</div>
  
</template>

<script setup>
import { onBeforeUnmount, ref} from "vue";
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

const addImage = () => {
  // const url = window.prompt('URL')
  const url = 'https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg'
  if (url) {
    editor.chain().focus().setImage({ src: url }).run()
  }
}

onBeforeUnmount(() => {
  editor.destroy()
})


</script>