<template>
  <div class="row price-row">
  <div class="container" id="Price">

  <!-- Title -->
	<div class="row">
		<div class="col-md-12">
			<div class="main_heading">
				<h1>Price Table</h1>
				<div  class="text-center"><span class="underline"></span></div>
			</div>
		</div>
	</div>

  <!-- Prices and description -->
	<div class="row">

    <!-- Price card 1 -->
		<div class="col-md-4 col-md-offset-0 col-xs-10 col-xs-offset-1 price-card" data-aos="fade-up" data-aos-delay="0">
			<div class="pricing-box">
				<div class="pricing-box-price"><span>$ </span><strong>200</strong><span> / hour</span></div>
			    <h3>Care Consultant</h3>
			    <h4>(Minimum of 2 hours)</h4>
			    <div class="pricing-box-features">
			    	<ul>
			    		<li>4	hours - $775 - savings of $25</li>
			    		<li>6	hours - $1150 - savings of $50</li>
              <li>This includes all	paperwork documented,	checked	and signed/notarized in the Peace of Mind	Planner and final family meeting.</li>
			    	</ul>
			    </div>
			    <!-- <div class="pricing-box-sign-up"> -->
			    	<!-- <a class="btn btn-link-1 scroll-link" href="#top-content" @click="openForm">Sign up</a> -->
			    <!-- </div> -->
			</div>
		</div>

    <!-- Price card 2 -->
		<div class="col-md-4 col-md-offset-0 col-xs-10 col-xs-offset-1 pricing-box-best price-card" data-aos="fade-up" data-aos-delay="50">
			<div class="pricing-box">
            	<div class="pricing-box-price">
            		<span>$ </span><strong>30</strong><span> / hour</span>
            	</div>
                <h3>Elder Care</h3>
                <h4>(Minimum of 2 hours)</h4>
                <div class="pricing-box-features">
                	<ul>
                		<li>10 hours - $275 - savings of $25</li>
                		<li>25 hours - $700 - savings of $50</li>
                		<li>50 hours - $1,400 - savings of $100</li>
                	</ul>
                </div>
                <!-- <div class="pricing-box-sign-up"> -->
                	<!-- <a class="btn btn-link-1 scroll-link" href="#top-content" @click="openForm">Sign up</a> -->
                <!-- </div> -->
            </div>
		</div>

    <!-- Price card 3 -->
		<div class="col-md-4 col-md-offset-0 col-xs-10 col-xs-offset-1 price-card" data-aos="fade-up" data-aos-delay="100">
			<div class="pricing-box">
            	<div class="pricing-box-price"><span>$ </span><strong>30</strong><span> / hour</span></div>
                <h3>End of Life Doula</h3>
	      		    <h4>(Minimum of 2 hours)</h4>
                <div class="pricing-box-features">
                	<ul>
                		<li>10 hours - $275 - savings of $25</li>
                		<li>25 hours - $700 - savings of $50</li>
                		<li>50 hours - $1,400 - savings of $100</li>
                	</ul>
                </div>
                <!-- <div class="pricing-box-sign-up"> -->
                	<!-- <a class="btn btn-link-1 scroll-link" href="#top-content" @click="openForm">Sign up</a> -->
                <!-- </div> -->
            </div>
		</div>


	</div>


  <div class="row contact-button-row">
    <div class="col-md-4 col-md-offset-4" style="
    padding-top: 0px;
    padding-bottom: 0px;
    ">
      <div class="btn contact-me-button" @click="emitOpenForm">
      Contact Me</div>
    </div>
  </div>

  <div class="row social-media-icons-row">
    <div class="col-md-4 col-md-offset-4 social-media-icons-large">
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/>
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/>
      <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"/>
    </div>
  </div>

    <div class="row price-info-row">
		<div class="col-xs-10 col-xs-offset-1">
      <p>*Purchasing bulk hours provides additional savings. Sliding scale also available in certain cases.</p>
      <p>I don’t want payments to be a deterrent to getting the care families need. We will customize a payment plan that will work.</p>
    </div>
  </div>


</div>
</div>
</template>

<script>
export default {
  name: 'prices',
  methods: {
    emitOpenForm() {
      this.$emit('open')
    }
  }
}
</script>