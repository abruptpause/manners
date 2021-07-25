<template>
  <mainPage />
</template>

<script>
import mainPage from './components/mainPage.vue'

export default {
  name: 'App',
  components: {
    mainPage
  },
  async created() {
    await require('@/assets/styles/roboto.scss')
  }
}
</script>