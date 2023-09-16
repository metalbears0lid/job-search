<template>
  <button
    class="border-0 rounded px-5 py-2 font-medium text-white bg-brand-blue-1 hover:shadow-blue"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton', 
  props: ['text']
}
</script>
