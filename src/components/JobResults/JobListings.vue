<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>
        <div class="items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Previous
          </router-link>

          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Next
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from 'pinia'
import JobListing from '@/components/JobResults/JobListing.vue'
import { useJobsStore } from '@/stores/jobs'

export default {
  name: 'JobListings',
  components: { JobListing },
  computed: {
    currentPage() {
      return Number.parseInt(this.$route.query.page || '1')
    },
    previousPage() {
      const prevPage = this.currentPage - 1
      return prevPage >= 1 ? prevPage : undefined
    },
    ...mapState(useJobsStore, {
      jobs: 'jobs',
      nextPage() {
        const nextPage = this.currentPage + 1
        const maxPage = this.jobs.length / 10
        return nextPage <= maxPage ? nextPage : undefined
      },
      displayedJobs() {
        const page = this.currentPage
        return this.jobs.slice(10 * (page - 1), 10 * page)
      }
    })
  },
  async mounted() {
    this.fetchJobs()
  },
  methods: {
    ...mapActions(useJobsStore, ['fetchJobs'])
  }
}
</script>
