<template>
  <div class="page-title-box">
    <div class="page-title">AAA</div>
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