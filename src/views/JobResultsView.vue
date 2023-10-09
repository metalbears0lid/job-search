<template>
  <job-filters-sidebar />
</template>

<script>
import JobFiltersSidebar from '@/components/JobResults/JobFiltersSidebar/JobFiltersSidebar.vue'

export default {
  name: 'JobResultsView',
  components: {
    JobFiltersSidebar
  },
  methods: {
    goToHome() {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
