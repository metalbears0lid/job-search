<template>
  <collapsible-accordion header="Organization">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-wrap">
          <li class="h-8 w-1/2">
            <input id="VueTube" type="checkbox" class="mr-3" />
            <label for="VueTube">VueTube</label>
          </li>

          <li class="h-8 w-1/2">
            <input id="Between Vue and Me" type="checkbox" class="mr-3" />
            <label for="Between Vue and Me">Between Vue</label>
          </li>

          <li class="h-8 w-1/2">
            <input id="Et Vue Brute" type="checkbox" class="mr-3" />
            <label for="Et Vue Brute">Et Vue Brute</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script setup>
import CollapsibleAccordion from '@/components/Shared/CollapsibleAccordion.vue'
</script>
