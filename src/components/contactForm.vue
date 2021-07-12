<template>

<!-- <div class="underlay" v-show="getFormState" :class="underlayClass"> -->
<div class="underlay" :class="underlayClass">
<div class="contact-form" :class="contactFormClass">
  
  <p class="close-contact-form" @click="closeForm">Close</p>

  <div class="contact-form-border-container">
    <form @submit="submitForm">

      <!-- logo here -->
      <div class="col-md-12 contact-form-logo" style="
      height: 165px;
      margin-top: 18px;
      "></div>
      
      <div class="col-md-10 col-md-offset-1 form-input">
        <input type="text" id="name" name="name" required placeholder=" " />
        <label for="name">My name is</label>
      </div>

      <div class="col-md-10 col-md-offset-1 form-input">
        <input type="email" id="email" name="email" required placeholder=" " />
        <label for="email">my email is</label>
      </div>

      <div class="col-md-10 col-md-offset-1 form-input">
        <input type="text" id="number" name="number" placeholder=" " />
        <label for="name">My number is</label>
      </div>

      <div class="col-md-10 col-md-offset-1 form-textarea">
        <textarea
        id="message"
        name="message"
        required
        ></textarea>
        <label for="message">I'd like to chat about</label>
      </div>

      <div class="col-md-5 col-md-offset-1 form-input">
        <button type="submit">Send Message</button>
      </div>

    </form>
  </div>

</div>
</div>
</template>

<style scoped lang="scss">

  // colors copied from global.scss
  $purple: #7467ae;
  $darkpurple: #544a82;
  $gray: #f8f8f8;
  $lightgray: rgba(238, 238, 238, 0.85);
  $offwhite: rgba(248,248,255, 1);

  // colors only used here.
  $form-white: #F2F3EB;
  $form-grey: #888888;


  // form underlay.
  .underlay {
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    margin-top: 0px !important;
    width: 100%;
    height: 100%;
    z-index: 9999;
    transition: all 1s ease;
    &.underlay-visible {
      opacity: 1;
    }
    &.underlay-hidden {
      user-select: none;
      pointer-events: none;
      opacity: 0;
    }
  }

  // top level container.
  .contact-form {
    position: fixed;
    top:0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 800px;
    max-width: 100vw;
    height: 760px;
    max-height: 100vh;
    background: $form-white;
    z-index: 99999;
    box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.15);
    transition: all 0.25s ease-in-out;
    transition-delay: 0.65s;
    opacity: 0;

    &.contact-form-visible {
      opacity: 1;
    }
    
    // input + label component.
    .form-input {
      position: relative;
      margin-top: 24px;

      label {
        position: absolute;
        white-space: nowrap;
        top: 0;
        left: 0;
        padding-left: 15px;
        padding-right: 15px;
        pointer-events: none;
        user-select: none;
        transition: all 0.45s ease;
        transform-origin: bottom right;
      }

      input::placeholder {
        visibility: hidden;
      }

      input:not(:placeholder-shown) + label {
        left: 100%;
        transform: translateX(calc(-100% - 15px)) translateY(2px) scale(0.75);
        background-color: $form-grey;
      }

      input:not(:placeholder-shown):focus + label {
        color: white;
        background-color: $purple;
      }

      input:focus {
        border-bottom-color: $purple;
        + label {
          color: $purple;
        }
      }

    }

    .close-contact-form {
      position: absolute; top: 0; right: 0; margin-top: 48px; margin-right: 48px; z-index: 4; text-align: right; cursor: pointer
    }

    // textarea + label component.
    .form-textarea {
      position: relative;
      margin-top: 24px;
      label {
        position: absolute;
        top: 0;
        left: 15px;
      }
      textarea {
        position: relative;
        margin-top: 24px;
      }

      textarea:focus {
        border-bottom-color: $purple;
        + label {
          color: $purple;
          background-color: initial;
        }
      }
    }

    form {
      position: relative;
      max-width: 100%;
      max-height: 100%;
    }

    @media (max-width: 991px) {
      height: 100%;
    }

  }

  // black border around the form.
  // nested inside outermost container element (.contact-form class)
  // the actual <form> is nested inside this element. may want to change this.
  .contact-form-border-container {
    position: absolute;
    box-sizing: border-box;
    width: calc(100% - 48px);
    height: calc(100% - 48px);
    border: 2px solid black;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    padding: 0px !important;
    overflow-y: scroll;
  }


  // these should be nested inside the .contact-form class...

  *:focus{
    outline: none;
  }

  input, button, textarea {
    position: relative;
    box-sizing: border-box;
    width: 100%;
  }

  input, textarea {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid black;
    background-color: transparent;
  }

  textarea {
    height: 150px;
    resize: none;
  }


  // submit <form> button

  button {
    border: 2px solid black;
    font-weight: bold;
    padding: 12px;
    background-color: transparent;
    transition: all 0.4s ease;
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: -2px;
      width: calc(100% + 4px);
      height: 2px;
      // background-color: $darkpurple;
      background-color: black;
      opacity: 0;
      user-select: none;
      pointer-events: none;
      transition: all 0.4s ease;

    }
    &:hover {
      // border-color: transparent;
      // border-bottom-color: $darkpurple;
      text-shadow: 0px 0px 0.5px $form-grey;
      // color: white;
      // background-color: $purple;
      transform: translateY(-4px);
      box-shadow: 0px 2px 0px 0px $form-grey;
      // &::after {


      //   opacity: 1;
      // }
    }
  }

</style>

<script>
import axios from 'axios';

export default {
  name: 'contactForm',
  props: ['formstate'],
  // data() {
  //   underlayState: null
  // },
  computed: {
    underlayClass() {
      // console.log('from underlay', this.formstate, this.underlayClass)
      // setTimeout(function() {
        return this.formstate ? 'underlay-visible' : 'underlay-hidden'
      // }, 2000)
    },
    contactFormClass() {
      return this.formstate ? 'contact-form-visible' : null
    },
    getFormState() {
      return this.formstate
    }
  },
  methods: {
    // https://submit-form.com/ONumxfDj
    submitForm(e) {
      e.preventDefault()
      alert("submitted")
    },
    closeForm() {
      this.$emit('close')
    }
  }
}
</script>
