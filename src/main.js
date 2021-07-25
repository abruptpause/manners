
import { createApp } from 'vue'
import App from './App.vue'

// import styles.

// import '@/assets/styles/roboto.scss'
import '@/assets/styles/bootstrap.3.7.scss'
import '@/assets/styles/animate.scss'
import '@/assets/styles/global.scss'
import 'vueperslides/dist/vueperslides.css'

// import scripts.

// import '@/assets/scripts/wow.js'

/* import:
   + font awesome icons (social media links)
   + vueper slides (carousels)
   + vue-scrollto (smooth scrolling from navbar)
*/

// plugins:

import VueScrollTo from 'vue-scrollto'
// import VueAgile from 'vue-agile'

const scrollToSettings = {
  container: "body",
  duration: 850,
  easing: [0.485, 0.360, 0.570, 0.940], /* see https://vue-scrollto.netlify.app/docs/#easing-detailed */
  offset: -60,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
}

import AOS from 'aos'
import 'aos/dist/aos.css'

const aosSettings = {
  disable: 'phone',
  once: true,
  duration: 700
}


// components:

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { VueperSlides, VueperSlide } from 'vueperslides'

library.add(faFacebook, faLinkedin, faInstagram)

// register all and launch app.

const app = createApp(App)

app.AOS = new AOS.init(aosSettings)
app.use(VueScrollTo, scrollToSettings)

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('vueper-slide', VueperSlide)
app.component('vueper-slides', VueperSlides)

app.mount('#app')
