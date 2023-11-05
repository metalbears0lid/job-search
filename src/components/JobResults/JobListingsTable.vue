<template>
  <div class="q-pa-md">
    <q-table
      v-model:selected="selected"
      flat
      bordered
      title="Job Listings"
      :rows="jobs"
      :columns="columns"
      row-key="id"
      selection="multiple"
      dark
      color="amber"
    >
      <template #top-right>
        <q-btn
          color="primary"
          icon-right="content_copy"
          label="Copy selection"
          no-caps
          @click="copySelection"
        />

        <q-btn
          class="ml-4"
          color="primary"
          icon-right="archive"
          label="Export to csv"
          no-caps
          @click="exportTable"
        />
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useJobsStore } from '@/stores/jobs'
import { exportFile, useQuasar, copyToClipboard } from 'quasar'

const jobsStore = useJobsStore()
const { jobs } = storeToRefs(jobsStore)
const selected = ref()

const columns = [
  { name: 'title', label: 'Title', field: 'title', sortable: true },
  { name: 'organization', label: 'Organization', field: 'organization', sortable: true },
  { name: 'degree', label: 'Degree', field: 'degree', sortable: true },
  { name: 'jobType', label: 'Job Type', field: 'jobType', sortable: true },
  { name: 'locations', label: 'Locations', field: (row) => row.locations.join(', ') }
]

function copySelection() {
  console.log(selected.value)
  copyToClipboard(selected.value.join(', '))
}

function wrapCsvValue(val, formatFn, row) {
  let formatted = formatFn !== void 0 ? formatFn(val, row) : val

  formatted = formatted === void 0 || formatted === null ? '' : String(formatted)

  formatted = formatted.split('"').join('""')
  /**
   * Excel accepts \n and \r in strings, but some other CSV parsers do not
   * Uncomment the next two lines to escape new lines
   */
  // .split('\n').join('\\n')
  // .split('\r').join('\\r')

  return `"${formatted}"`
}

const $q = useQuasar()

function exportTable() {
  // naive encoding to csv format
  const content = [columns.map((col) => wrapCsvValue(col.label))]
    .concat(
      jobs.value.map((row) =>
        columns
          .map((col) =>
            wrapCsvValue(
              typeof col.field === 'function'
                ? col.field(row)
                : row[col.field === void 0 ? col.name : col.field],
              col.format,
              row
            )
          )
          .join(',')
      )
    )
    .join('\r\n')

  const status = exportFile('table-export.csv', content, 'text/csv')

  if (status !== true) {
    $q.notify({
      message: 'Browser denied file download...',
      color: 'negative',
      icon: 'warning'
    })
  }
}
</script>
