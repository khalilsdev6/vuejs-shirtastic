<template>
<b-col 
  v-bind:class="['signup-container', step === 2 ? 'expanded': '']"
  v-bind:sm="step === 2 ? '8' : '4'"
  >
  <b-container v-if="step === 1">
    <div>
      <h1>Sign up</h1>
      <SignupSteps v-bind:step="Number(1)"/>
      <div id='signup-form'>
        <label>Email Address</label>
        <input 
          v-model="email" 
          type="text" 
          placeholder="Your email address"
          @keyup.enter="advance">
        <label>Password</label>
        <input 
          v-model="password" 
          type="password"
          @keyup.enter="advance">

        <label>Confirm Password</label>
        <input 
          v-model="confirmPassword" 
          type="password"
          @keyup.enter="advance">
      </div>
      <p>By clicking the Sign Up button below, you agree to our
        <u>Terms of Service</u> and <u>Privacy Policy</u>.
      </p>
      <SignupErrors v-bind:errors="errors"/>
      <button 
        @click="advance" 
        class="btn btn-primary">
          Sign up
      </button>
    </div>
  </b-container>
  <SignupShippingForm 
    v-else
  />
</b-col>
</template>
<script>
import SignupSteps from './SignupSteps'
import SignupErrors from './SignupErrors'
import SignupShippingForm from './SignupShippingForm'

export default {
  components: {
    SignupSteps,
    SignupErrors,
    SignupShippingForm
  },
  data: function () {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      step: 1,
      errors: [],
      isSubmitting: false
    };
  },
  created: function () {
    
    /**
     * validateEmail
     * @desc This function returns a boolean result
     * if the email is valid or invalid.
     * @return {Boolean}
     */

    this.validateEmail = () => {
      const email = this.email;
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    /**
     * validatePasswords
     * @desc This function will ensure that both passwords
     * are populated and also ensure that they are the same.
     * @return {String | Boolean} the error message or true if passed
     */

    this.validatePasswords = () => {
      const { password, confirmPassword } = this;
      if (password.length < 8) {
        return "Password must be at least 8 characters"
      }
      if (password !== confirmPassword) {
        return "Passwords don't match"
      }
      return true;
    }

    /**
     * checkPageOne
     * @desc Determines if there are any errors on page one.
     * If so, it will add the errors to this' errors array
     * and return false.
     * @return {Boolean} was page one ok 
     */

    this.checkPageOne = () => {
      this.errors = [];
      if (!this.validateEmail()) {
        this.errors.push('Please enter a valid email');
      }

      const passwordValidationResult = this.validatePasswords();
      if (typeof passwordValidationResult === "string") {
        this.errors.push(passwordValidationResult)
      }

      if (this.errors.length === 0) return true;
      return false;
    }
  },
  methods: {
    advance: function () {
      if(this.checkPageOne()) {
        this.$emit('signing-up');
        this.step = 2;
      }
    }
  }
}
</script>
<style scoped>
.signup-container {
  background: url("../assets/Fractal.png");
  background-position: center;
  background-repeat: no-repeat;
  background-position-y: center;
  color: white;
  background-position-x: right;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.signup-container > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-width: 300px;
  height: 72vh;
  justify-content: space-evenly;
  max-height: 540px;
  min-height: 400px;
}

.signup-container.expanded > div {
  max-width: unset;
  height: unset;
}

.signup-container h1,
.signup-container h2 {
  text-shadow: 1px 1px 6px #080808;
}

.signup-container h1,
.signup-container label,
.signup-container h4 {
  color: white;
}

#signup-form {
  width: 100%;
}

#signup-form label,
#signup-form input {
  display: block;
  width: 100%;
}

#signup-form label {
  font-weight: bold;
  font-size: 12px;
}

#signup-form input {
  margin-bottom: 1em !important;
}
</style>
