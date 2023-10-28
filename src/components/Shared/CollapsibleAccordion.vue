<template>
  <div class="border-b border-solid border-brand-gray-2 py-5">
    <div class="flex flex-wrap items-center justify-between cursor-pointer" @click="open">asdf</div>
    <div v-if="isOpen">Child</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)

function open() {
  isOpen.value = !isOpen.value
}
</script>
