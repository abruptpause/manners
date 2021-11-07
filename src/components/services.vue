<template>
  <div class="container" id="Services" style="padding-top: 12px; padding-bottom: 24px;">
  
  <!-- header -->
  <div class="row">
		<div class="col-md-12">
			<div class="main_heading">
				<h1>Services</h1>
				<div  class="text-center"><span class="underline"></span></div>
			</div>
		</div><!-- End col-md-12 -->
	</div>

  <!-- top row -->
  <div class="row row-flex">

    <service-card :="freeConsultation" />
    <service-card :="consultantCare" gray="true" delay="50" />
    <service-card :="elderCare" delay="100" />

  </div>

  <!-- bottom row -->
  <div class="row row-flex">

    <service-card :="endOfLifeDuolaCare" gray="true" />
    <service-card :="hostingMonthlyDeathCafes" delay="50" />
    <service-card :="reikiHealing" gray="true" delay="100" />

  </div>

</div>
</template>


<script>
import serviceCard from './serviceCard.vue'
import serviceCardsContent from '../assets/content/serviceCardsContent'

export default {
  components: { serviceCard },
  name: 'services',
  data() {
    return serviceCardsContent
  }
}
</script>
