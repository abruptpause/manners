<template>
  <div class="col-md-4 col-md-offset-0 col-xs-10 col-xs-offset-1 ratio-3-2 service-card" :class="backgroundColorClass" data-aos="fade-up" :data-aos-delay="delayTime">
		<div class="services-box">
      
      <!-- card image -->
      <div class="ratio-1-1 service-card-image" :style="{ 'background-image': `url('${backgroundImage}')` }">
        <dot-loader v-show="!backgroundImage" />
      </div>

      <!-- title and description -->
			<h4>{{title}}</h4>
			<p>{{description}}</p>

      <!-- read more/less button -->
      <span v-if="content" class="toggle-btn hover-shadow hover-shadow-dark" style="display: inline-block; padding-left: 1px; padding-bottom: 4px; padding-right: 1px; margin-bottom: 10px;" @click="toggle">{{toggleBtnText}}</span>

      <!-- content -->
      <!-- <div v-if="content" v-show="showContent" v-html="content" :class="contentClass" /> -->
      <div v-if="content" class="content-container" :style="contentContainer">
        <div v-html="content" ref="contentDiv" />
      </div>
      
		</div>
	</div>
</template>

<style scoped lang="scss">

.content-container {
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease-out;
}

</style>

<script>
import dotLoader from './dotLoader.vue'

export default {
  name: 'serviceCard',
  props: ['title', 'description', 'content', 'image', 'gray', 'delay'],
  components: {dotLoader},
  data() {
    return {
      backgroundImage: null,
      showContent: false,
      contentContainer: {
        height: 0
      }
    }
  },
  computed: {
    toggleBtnText() {
      return this.showContent ? `Show less` : `Show more`
    },
    // backgroundImage() {
      // if (this.image) return require(`@/assets/images/${this.image}`)
    // },
    backgroundColorClass() {
      return this.gray ? 'services-box-gray' : 'services-box-lightgray'
    },
    delayTime() {
      return this.delay ? this.delay : 0
    }
  },
  methods: {
    toggle() {
      this.showContent = !this.showContent
      let contentHeight = this.$refs.contentDiv.clientHeight

      if (this.showContent) {
        this.contentContainer = {
          height: `${contentHeight}px`
        }
      } else {
        this.contentContainer = {
          height: 0
        }
      }
    }
  },
  mounted() {
    if (this.image) {

      let cardImage = new Image()

      cardImage.onload = () => {
        this.backgroundImage = cardImage.src
      }

      cardImage.src =  require(`@/assets/images/${this.image}`) /* path to the image */
      
    }
  }

}
</script>
