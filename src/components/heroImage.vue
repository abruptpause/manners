<template>
  <div class="fade-in-image" :class="loaderState" :style="{ 'background-image': `url('${backgroundImage}')` }">
    <div class="header-logo" />
    <div v-show="!backgroundImage" class="loader-container">
      <dot-loader />
    </div>
  </div>
</template>



<style scoped lang="scss">

$purple: #7467ae;
$darkpurple: #544a82;
$offwhite: rgba(248,248,255, 1);

.loader-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  user-select: none;
  pointer-events: none;
  div {
    transform: scale(2);
  }
}

.fade-in-image {
  position: relative;
  width: 100%;
  height: 66.66vw;
  max-height: calc(100vh - 60px);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  z-index: -1;
  &::after {
    content: ' ';
    position: absolute;
    height: 100%;
    width: 100%;
    background: $offwhite;
    z-index: 99;
    user-select: none;
    pointer-events: none;
  }
}

.fade-in-image-inactive {
  &::after {
    opacity: 0;
    transition: all 0.8s ease;
  }
}

.header-logo {
  position: absolute;
  top: 0;
  left: -12px;
  width: 25vw;
  // width: 50vw;
  min-width: 180px;
  height: 25vw;
  max-height: 100%;
  background-image: url('../assets/images/main-logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top left;
  filter: drop-shadow(-1px 1px 0px $darkpurple);
  // @media screen and (max-width: 768px) {
  // filter: drop-shadow(-1px 1px 0px $darkpurple);
  // }
}

</style>



<script>

import dotLoader from './dotLoader.vue'

export default {
  name: 'heroImage',
  components: {dotLoader},
  data () {
    return {
      backgroundImage: null,
      loaderState: null
    }
  },
  mounted() {

      let cardImage = new Image()

      cardImage.onload = () => {
        // alert('ready')
        this.backgroundImage = cardImage.src
        this.loaderState = 'fade-in-image-inactive'
      }

      cardImage.src =  require(`@/assets/images/HomePage-_PB300222.png`)
      
  }
}


</script>
