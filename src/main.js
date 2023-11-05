import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown, faAngleUp, faSearch } from '@fortawesome/free-solid-svg-icons'
// Import icon libraries
import '@quasar/extras/material-icons/material-icons.css'
// Import Quasar css
import 'quasar/src/css/index.sass'
import '@/index.css'

import router from '@/router'
import App from '@/App.vue'

library.add(faAngleDown)
library.add(faAngleUp)
library.add(faSearch)

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(pinia)
  .use(Quasar)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')
