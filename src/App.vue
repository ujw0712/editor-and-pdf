<template>
  <div class="app">
    <div class="layout-container">
      <div class="layout-contents">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script setup>
import {computed, getCurrentInstance, inject} from "vue"
import { useRoute, useRouter } from 'vue-router'
import { useStore } from "vuex"

const router = useRouter()
const route = useRoute()

const app = getCurrentInstance()
const api = inject('api')

const { getters, dispatch } = useStore()

</script>
<style lang="scss">
@import './assets/scss/_index.scss';
</style>