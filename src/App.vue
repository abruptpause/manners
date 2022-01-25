<template>
  <home />
</template>

<script>
import home from './components/home.vue'

export default {
  name: 'App',
  components: {
    home
  },
  async created() {
    await require('@/assets/styles/roboto.scss')
  }
}
</script>
