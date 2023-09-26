<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  props: ['text', 'type'],
  computed: {
    buttonClass() {
      return { [this.type]: true }
    }
  }
}
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply rounded text-white bg-brand-blue-1 hover:shadow-blue;
}

.secondary {
  @apply text-brand-blue-2 bg-transparent hover:text-white hover:bg-brand-blue-2;
}
</style>
