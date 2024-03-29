// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { VSkeletonLoader } from 'vuetify/labs/VSkeletonLoader'

export default createVuetify({
    icons: {
    defaultSet: 'mdi',
  },
   components: {
    ...components,
    VSkeletonLoader,
  },
  directives
})
