
<template>

<!-- Navigation -->
<navbar v-on:open="openForm" />
<hero-image />

<services />

<!-- did you know carousel -->
<div class="call-action-bg" style="
    padding-top: 36px;
    margin-top: 36px;
    padding-bottom: 72px;
    margin-bottom: 0px;"
>
	<div class="container">
    <!-- title -->
		<div class="row">
			<div class="col-md-12">
				<div class="main_heading">
					<h1>Did you know:</h1>
					<div  class="text-center"><span class="underline"></span></div>
				</div>
			</div>
		</div>
    <!-- the actual carousel -->
    <carousel :content="didYouKnow" duration="5000" />
	</div>
</div>

<prices v-on:open="openForm" />

<!-- About Me section -->
<div class="row" style="background-color: rgba(238, 238, 238, 0.85); padding-top: 12px; padding-bottom: 72px;">
  <div class="container" id="About" style="overflow: hidden;">
    <!-- title -->
    <div class="row">
      <div class="col-md-12">
        <div class="main_heading">
          <h1>About Me</h1>
          <div  class="text-center"><span class="underline"></span></div>
        </div>
      </div>
    </div>
    <!-- photo -->
    <div class="row" data-aos="fade-up">
      <div class="col-md-2 col-md-offset-5 col-xs-4 col-xs-offset-4">
        <div class="about-me-photo">
          <div class="about-me-underline"></div>
        </div>
      </div>
    </div>
    <!-- content -->
    <div class="row">
      <div class="col-md-10 col-md-offset-1 col-xs-10 col-xs-offset-1 about-us-box" style="opacity: 0.95;">
          <h2 class="about-me-h2" data-aos="fade-up">Heather Manners</h2>
          <br />
          <div data-aos="fade-up">
          <p style="font-weight: 350">Why did I want to become an End-of-Life Doula? The fact is, I’ve been one for most of my life. My mom had a massive heart attack when I was twelve years old. She survived the heart attack but was limited on what she was able to do. Over the years, I documented twelve pages of health issues, doctor appointments, specialists, medications, and notes while caring for her until her end of life.</p>
          <p>When mom passed away, I realized the natural talent I had for  caring for people and helping them during difficult times. I searched to see if there was an opportunity for me to make a career out of taking care of people and an End-ofLife Doula is what I found. As my mom and I went through her life, one of the things that I noticed was that we were always making decisions in the middle of a crisis, which is never the best time to make a decision. Even when things were planned, I always felt like I wasn’t getting all the information to make the right decisions, didn’t always know the right questions to ask, the agencies to go through, or the resources that would have helped along the way. There should have been easier ways to get answers or someone that could help me get the answers.</p>
          <p>In August of 2020, I found Doulagivers and signed up to take the Doulagivers Specialist Courses. This included the End-of-Life Doula care (CEOLD), Elderly Care, and Care Consultant classes. I’ve passed the courses and am also certified through the National End of Life Doula Alliance (NEDA). Prior to Doulagivers, I had a 22 year career at Vanguard as a Project Manager and Graphic Designer. I managed the creation of top-quality print and electronic communications from start to finish within Vanguard’s Institutional and Retail Marketing arena. Worked closely with in-house creative teams and external vendors, I ensured projects were completed on time and within specifications.</p>
          <p>At my current position at the Lansdale School of Business, as the Program Chair of Graphic Design and Web Programs and Instructor, I develop and revise curriculum and instructional  materials, train faculty to ensure effective delivery of curriculum, and maintain learning environments that exceed requirements at two locations. I actively participate in advisory committee and advisory board meetings, promote enrollment and retention initiatives, and represent the school at campus and community events. To maintain subject matter expertise in accordance with standards, I regularly complete professional development coursework and activities.</p>
          <p>As an Instructor, I teach courses such as Advertising, Typography, Photoshop, Illustrator, InDesign, Video Editing, Principles of Design and HTML. I encourage students to use their talents to create individual projects with an eye toward creating a meaningful portfolio that will help them attain employment. Instruction  includes how to create advertising brochures, newspaper ads, reports, invitations, newsletters, and other printed and digital materials.</p>
          <p>Along with what I learned through Doulagivers, my background in Marketing Communications, graphic design, and teaching, I am able to offer other opportunities to help with planning and enhancing different aspects of my business and supporting the families and patients I help. Hosting monthly Death Cafes is another way I plan to help the community to understand that everyone can have a peaceful death and to not be afraid to talk about what they want when they are coming to the end of their life.</p>
          </div>
      </div>
    </div>
  </div>
</div>

<!-- testimonials -->
<div class="call-action-color" id="Testimonial" style="padding-top: 36px; margin-top: 0px; padding-bottom: 78px;">
	<div class="container">
    <!-- title -->
		<div class="row">
			<div class="col-md-12">
				<div class="main_heading">
					<h1>Testimonials</h1>
					<div class="text-center"><span class="underline"></span></div>
				</div>
			</div>
		</div>
    <carousel :content="testimonials" duration="15000" />
	</div>	
</div>

<!-- Citations -->
<div class="container">
  <div class="row">
    <div class="col-md-12" style="margin-top: 18px; margin-bottom: 4px; text-align: center; color: #333; opacity: 0.95">
      <p><sup>1</sup> <cite>Data from Institute of Medicine of the National Academies, 2015</cite></p>
      <p><sup>2</sup> <cite>Data from the NHPCO - National Hospice and Palliative Care Organization, 2018</cite></p>
      <p><sup>3</sup> <cite>Source: 2014 NHPCO African-American Outreach Guide</cite></p>
      <p><sup>4</sup> <cite>Source: Survey of Californians by the California HealthCare Foundation (2012)</cite></p>
      <p><sup>5</sup> <cite>Source: Pew Research Center (2015)</cite></p>
    </div>
  </div>
</div>

<!-- Footer -->
<footer>
    <div class="container">
    	<div class="row">
        <div class="col-sm-12 social-media-icons">
          <a :href="socialMedia.facebook" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"/></a>
          <a :href="socialMedia.instagram" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'instagram' }"/></a>
          <a :href="socialMedia.linkedin" target="_blank"><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'linkedin' }"/></a>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 footer-copyright">
          © 2021 Your Path Home with Manners
        </div>
      </div>
    </div>
</footer>

<!-- Contact Form (Popup) -->
<contact-form :formstate="formState" v-on:close="closeForm" />
</template>

<script>

// import testimonials here
import textContent from '../assets/content/textContent.js'
import carousel from './carousel.vue'
import contactForm from './contactForm.vue'
import navbar from './navBar.vue'
import services from './services.vue'
import prices from './prices.vue'
import dotLoader from './dotLoader.vue'
import HeroImage from './heroImage.vue'

const { testimonials, didYouKnow } = textContent

export default {
  components: { carousel, contactForm, navbar, services, prices, dotLoader, HeroImage },
  data () {
    return {
      socialMedia: {
        facebook: 'https://www.facebook.com/YourPathHWM',
        linkedin: 'https://www.linkedin.com/in/heather-manners',
        instagram: 'https://www.instagram.com/your_path_hwm/',
        email: 'yourpathhwm@gmail.com'
      },
      formState: false,
      testimonials,
      didYouKnow
    }
  },
  methods: {
    openForm() {
      this.formState = true;
    },
    closeForm() {
      this.formState = false;
    }
  },
  mounted() {
	  // new wowJS.WOW().init();
  }
}
</script>
