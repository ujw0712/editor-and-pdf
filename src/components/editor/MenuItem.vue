<script setup>
import {defineProps} from "vue"
import remixiconUrl from 'remixicon/fonts/remixicon.symbol.svg'

const props = defineProps(['icon', 'color', 'title', 'action', 'isActive'])
</script>

<template>
  <button
    class="menu-item"
    :class="{ 'is-active': props.isActive ? props.isActive(): null }"
    @click="props.action"
    :title="props.title"
  >
    <svg v-if="props.icon" class="remix"><use :xlink:href="`${remixiconUrl}#ri-${props.icon}`" /></svg>
    <div v-if="props.color" class="color-box" :style="`background: ${props.color}`">{{ props.title }}</div>
  </button>
</template>