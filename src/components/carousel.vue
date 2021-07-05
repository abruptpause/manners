<template>
  <div class="row">
    
    <vueper-slides arrows-outside bullets-outside :touchable="true" autoplay="true" pause-on-hover="true" :duration="duration" class="no-shadow">
      <vueper-slide v-for="(testimonial, i) in content" :key="i" :content="testimonial" />
    </vueper-slides>

  </div>
</template>

<script>
export default {
  name: 'carousel',
  props: ['content', 'duration']
}

</script>



