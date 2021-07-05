
<template>
  
<!-- Navigation -->
<div id="TopOfPage">
<nav class="navbar navbar-default" style="position: fixed; z-index: 1; width: 100%; border-radius: 0px;">
  <div class="container">


    <!-- Menu title and hamburger icon -->
    <div class="navbar-header logo-div">
      <!-- <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false"> -->
      <button class="navbar-toggle">
        <!-- <span class="sr-only">Toggle navigation</span> -->
        <!-- <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span> -->
        <hamburger v-on:clicked="toggleMobileNav" :toggleClass="hamburgerToggleClass" />
      </button>
      <a class="navbar-brand show-left" href v-scroll-to="'#TopOfPage'">Your Path Home with Manners</a>
    </div>


    <!-- Menu list -->
    <div class="collapse navbar-collapse top-right-menu-ul show-right" :class="mobileNavClass">
      <ul class="nav navbar-nav navbar-right">

        <li><a href v-scroll-to="'#Services'" class="hover-shadow" @click="closeMobileNav">Services</a></li>
        
        <li><a href v-scroll-to="'#Price'" class="hover-shadow" @click="closeMobileNav">Price</a></li>

        <li><a href v-scroll-to="'#About'" class="hover-shadow" @click="closeMobileNav">About</a></li>

        <li><a href v-scroll-to="'#Testimonial'" class="hover-shadow" @click="closeMobileNav">Testimonials</a></li>

        <li><a href v-scroll-to="'#Price'" class="hover-shadow" @click="closeMobileNav">Contact</a></li>

      </ul>
    </div><!-- End navbar-collapse -->


  </div><!-- End container -->
</nav>
</div>

</template>


<style scoped lang="scss">

  #TopOfPage {
    position: relative;
    height: 60px;
    z-index: 3;
  }

  @keyframes show-left {
    from {
      opacity: 0;
      transform: translateX(-100%)
    }
  }

  .show-left {
    animation-name: show-left;
    animation-duration: 1s;
    animation-timing-function: ease-out;
  }

  @keyframes show-right {
    from {
      opacity: 0;
      transform: translateX(50%)
    }
  }

  .show-right {
    animation-name: show-right;
    animation-duration: 1s;
    animation-timing-function: ease-out;
  }
  

</style>

<script>

import hamburger from './hamburger.vue'

export default {
  name: 'navbar',
  components: {hamburger},
  data() {
    return {
      mobileNavClass: null,
      hamburgerToggleClass: null
    }
  },
  methods: {
    toggleMobileNav() {
      this.mobileNavClass = !this.mobileNavClass ? 'in' : null
      this.hamburgerToggleClass = !this.hamburgerToggleClass ? 'is-active' : null
    },
    closeMobileNav() {
      this.mobileNavClass = null
      this.hamburgerToggleClass = null
    }
  }
}
</script>
