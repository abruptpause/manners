
<template>

<!-- Navigation -->
<navbar v-on:open="openForm" />

<!-- Main image -->
<hero-image />

<!-- Services section -->
<services />

<!-- "Did you know..." Carousel -->
<div class="call-action-bg" style="
    padding-top: 36px;
    margin-top: 36px;
    padding-bottom: 72px;
    margin-bottom: 0px;">
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

    <!-- carousel -->
    <carousel :content="didYouKnow" duration="5000" />

	</div>
</div>

<!-- Price Table + Contact Form button -->
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

<!-- "Testimonials" Carousel -->
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

    <!-- carousel -->
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
// const wowJS = require('@/assets/scripts/wow.js')
import carousel from './carousel.vue'
import contactForm from './contactForm.vue'
import navbar from './navBar.vue'
import services from './services.vue'
import prices from './prices.vue'
import dotLoader from './dotLoader.vue'
import HeroImage from './heroImage.vue'

export default {
  name: 'mainPage',
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
      testimonials: [
        `<p>So my friend Heather Manners is starting her own business offering end of life doula services. (Don't worry; while I could make a good guess, I didn't quite know all the things that entailed when she first mentioned it, either. Usually I think of doulas as the nice, well-informed,  probably pretty hippie-vibes lady who helps expectant mothers deliver their kiddos. Turns out, some doulas help people leave this world as well as coming into it.) The thing is, when she and I were colleagues, I watched her deal with the slow passing of her mother over the span of several years due to serious illness. She faced a gutwrenching situation with more love, compassion, patience, and strength than I think I could ever muster, and it's exactly those sorts of qualities that combine into what we call grace. While I really hope you don't need her services? If you're in similarly difficult circumstances regarding the care of a loved one, she is exactly the sort of person you want on your side and you should consider reaching out when she has her new site all set up.</p> <h4>~ Melanie</h4>`,
        `<p>I have known Heather for over fifteen years; we met while we we both employed by a large corporation, and we became friends. Heather and her mom were best friends, and traveling companions. Heather totally rearranged her life, and work schedule to care for her mom She visited her every day in hospice care for hours. When Heather lost her mom, it was heartbreaking. But, out of that, she developed the empathy, training and knowledge to help others going through the same circumstances. I’d want Heather with me at my time. She’s loving, caring, while still realistic-she’s the perfect person for this role.</p> <h4>~ Jean</h4>`,
        `<p>Hi. My friend Heather Manners has been a friend of mine for nearly 14 years. Heather is starting a new journey as an end of life Doula. Being a nurse for 41 years and working many years in Hospice Care I know the amount of compassion, empathy and care that is needed for those facing their end of life. I have seen Heather take care of her mom who was passing from this world to the next, and Heather did so with love, empathy, care, compassion and patience. I saw her moms eyes light up when Heather entered into the room and the peace that instantly came over her. I have a daughter with autism and epilepsy whom Heather has met several times over the  years. My daughter is not comfortable around a lot of people but with heather it’s always different. She treats my daughter with dignity, respect, love and compassion. My daughter lights up when she sees Heather. Heather will make an awesome Doula. Her unique way of comfort, grace empathy and compassion will be an ease for those transitioning into their new journey.</p> <h4>~ Donna</h4>`,
        `<p>Heather Manners is one of the most compassionate people I know. She will be a comforting presence for anyone who needs this service.</p> <h4>~ Loretta</h4>`,
        `<p>I can't think of anyone who would be more well equipped to be a doula. Heather is strong, kind, loving, giving, patient, and the most empathetic person I've ever known. And her laugh and smile lights up the room! Pure sunshine on a stormy day!</p> <h4>~ Meg</h4>`,
        `<p>I've known Heather for 15 years. She is the kindest, nicest and most caring person that I know. When she told me that she was training to be an endof-life doula I thought it was the perfect fit. She cared for her mother for 30+ years and she  taught me to track procedures and create a medical history, which helped me when I cared for my own mother. I know Heather as a teacher and have seen her patience with even the most difficult students. Her goal in life is to help others and I think she can help you too.</p> <h4>~ Anne</h4>`,
        `<p>I have known Heather just over 20 years, and she has been a caring, supportive confidante to me throughout our friendship. I struggled with migraines when we worked together, and she suggested we enroll in a yoga class together to help relieve our stress. Heather has a very gentle, calming nature and I saw her guide her Mom through the struggles and fear of a serious illness. Her commitment and patience as she navigated both the physical and mental care for her mom was amazing. She has an inner strength that enables her to listen and be present in the most stressful situations. If you are looking for someone to have the utmost patience and strength to help you or a loved one through the difficult time of caring for your loved one, reach out to Heather.</p> <h4>~Pamela</h4>`,
        `<p>The second that I learned that Heather Manners' new vocation was to be an end-of-life doula I knew she had found her calling.  There is no one more better suited for such a compassionate vocation. I personally observed Heather's love, strength, humor, and brilliance when she navigated her own mother's years of illness. I'm thrilled and inspired that she is now able to bring her skills to others to offer caring service and comfort during a family member's final days on this earth.</p> <h4>~Carol</h4>`,
        `<p>Heather Manners is a good friend and colleague that I have known for over 20 years. I truly believe that she possesses all the qualities to become a most wonderful end of life doula. She is a caring woman who is always willing and available to help me when I need a favor or just someone to be an active listener. She is the person I call when I need to calm down and ask for support and guidance. She is a compassionate and confident person who has the knowledge to open the conversation about death to help you and your loved ones with peace and closure.</p> <h4>~ Kathy</h4>`,
        `<p>Heather is one of the most kind and compassionate people I know. She has retired from corporate America and is following her heart. Heather is a  person that always succeeds at everything she pursues. I cannot imagine anyone else that would be better at guiding you and/or your family with end-oflife doula services. You will be Heather’s main focus and she will be there to guide you through everything. Heather is the epitome of grace.</p> <h4>~ Andrea</h4>`,
        `<p>I have known Heather for over 20 years and she is one of the most compassionate, kind, and patient people I have ever met. Watching Heather go through the long process of her mother’s death with such strength and grace was inspiring. I have no doubt that Heather will make the perfect doula because she is always present in the moment, cares about others, and has empathy. I believe her experience with her mother’s death helped her realize her passion for helping people in the same situation. Heather has a heart of gold and all the qualities you would want or need in a doula.</p> <h4>~ Mo</h4>`
      ],
      didYouKnow: [
        "There are 78 Million	people over	the	age	of 65	in the US <sup>1</sup>",
        "20% of the 78 Million elders do not have any children. <sup>1</sup>",
        "9/10 people say that they want to be cared for at home at the end of life <sup>1</sup>",
        "Death is the 2nd leading fear in the US <sup>1</sup>",
        "90% of people say that talking to their family about their end of life care is important - Yet, only 27% have actually done it. <sup>2</sup>",
        "60%	of	people	say	they do not want their family to be burdened by making tough decisions. <sup>2</sup>",
        "56%	have	not	communicated their end of life wishes. They don't want their families to be burndened, but they are not sharing with them what they would want, we're not communicating our wishes. <sup>2</sup>",
        "82%	of	people	say	that it is important to put their end of life wish in writing - Yet only 23% have actually done it. Out of the 23%, only half of those people know where it is. <sup>2</sup>",
        "Researchers have found about 8% of African Americans, compared to 43% of whites, hace an advance directive or will <sup>3</sup>",
        "80% of people say that if seriously ill, they would want to talk to their doctor about wishes for medical treatment toward the end of their life. 7% report having had this conversation with their doctor. <sup>4</sup>",
        "And about half (52%) say they would ask their doctors to stop treatment if they had an incurable disease and were totally dependent on someone  else for their care. But about a third of adults (35%) say they would tell their doctors to do everything possible to keep them alive – even in dire circumstances, such as having a disease with no hope of improvement and experiencing a great deal of pain <sup>5</sup>"
      ]
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