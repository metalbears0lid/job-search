<template>
  <div class="border-b border-solid border-brand-gray-2 py-5">
    <div class="flex flex-wrap items-center justify-between cursor-pointer" @click="open">
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="caretIcon" />
    </div>

    <div v-if="isOpen" class="mt-5 w-full">
      <slot> Fallback content </slot>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  header: {
    type: String,
    required: true
  }
})

const isOpen = ref(false)

const caretIcon = computed(() => {
  return isOpen.value ? ['fas', 'angle-up'] : ['fas', 'angle-down']
})

function open() {
  isOpen.value = !isOpen.value
}
</script>
