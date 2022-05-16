<template>
  <div class="page-title-box">
    <div class="page-title">Editor And Pdf
      <button @click="pdf">PDF 다운로드</button>
      <div class="contents-box-sub-title">에디터로 작성한 내용을 PDF파일로 다운로드하세요!</div>
    </div>
  </div>

  <editor />
</template>
<script setup>
import { computed, getCurrentInstance, inject, ref } from "vue"
import { useRoute, useRouter } from 'vue-router'
import { useStore } from "vuex"
import Editor from '@/components/tiptap/Editor.vue'

const app = getCurrentInstance()
const api = inject('api')
const util = inject('util')
const msg = inject('msg')

const router = useRouter()
const route = useRoute()

const { getters } = useStore()

</script>