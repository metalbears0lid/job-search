<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing
        v-for="job in jobs"
        :title="job.title"
        :organization="job.organization"
        :locations="job.locations"
        :qualifications="job.qualifications"
      />
    </ol>
  </main>
</template>

<script>
import axios from 'axios'
import JobListing from '@/components/JobResults/JobListing.vue'

export default {
  name: 'JobListings',
  components: { JobListing },
  data() {
    return {
      jobs: []
    }
  },
  async beforeMount() {
    const response = await axios.get('http://localhost:3000/jobs')
    this.jobs = response.data
    console.log('Received jobs data from backend', this.jobs)
  }
}
</script>
