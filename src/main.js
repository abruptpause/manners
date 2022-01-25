
import { createApp } from 'vue'
import { VueperSlides, VueperSlide } from 'vueperslides'
import VueScrollTo from 'vue-scrollto'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import AOS from 'aos'
import App from './App.vue'

import '@/assets/styles/bootstrap.3.7.scss'
import '@/assets/styles/animate.scss'
import '@/assets/styles/global.scss'
import 'vueperslides/dist/vueperslides.css'
import 'aos/dist/aos.css'

/*
  + font awesome icons (social media links)
  + vueper slides (carousels)
  + vue-scrollto (smooth scrolling from navbar)
*/

// https://vue-scrollto.netlify.app/docs/#easing-detailed
const scrollToSettings = {
  container: "body",
  duration: 850,
  easing: [0.485, 0.360, 0.570, 0.940],
  offset: -60,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
}

const aosSettings = {
  disable: 'phone',
  once: true,
  duration: 700
}

library.add(faFacebook, faLinkedin, faInstagram)

const app = createApp(App)
app.AOS = new AOS.init(aosSettings)
app.use(VueScrollTo, scrollToSettings)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('vueper-slide', VueperSlide)
app.component('vueper-slides', VueperSlides)
app.mount('#app')
