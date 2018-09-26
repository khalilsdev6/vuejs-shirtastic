<template>
<b-col v-bind:class="['signup-container', step === 2 ? 'expanded': '']">
  <b-container>
    <div v-if="step === 1">
      <h1>Sign up</h1>
      <div class="steps-container">
        <div v-bind:class="[step === 1 ? 'selected' : '']">Step 1</div>
        <div v-bind:class="[step === 2 ? 'selected' : '']">Step 2</div>
      </div>
      <div id='signup-form'>
        <label>Email Address</label>
        <input v-model="email" type="text" placeholder="Your email address">
        
        <label>Password</label>
        <input v-model="password" type="password">

        <label>Confirm Password</label>
        <input v-model="confirmPassword" type="password">
      </div>
      
      <p>By clicking the Sign Up button below, you agree to our
        <u>Terms of Service</u> and <u>Privacy Policy</u>.
      </p>

      <div v-if="errors.length !== 0">
        <ul class="errors-list">
          <li 
            v-for="(error, key) of errors"
            :key="key">
            {{ error }}
          </li>
        </ul>
      </div>

      <button 
        @click="advance" 
        class="btn btn-primary">
          Sign up
      </button>
    </div>
    <div v-if="step === 2">
      <b-container fluid>
        <div class="steps-container">
          <div v-bind:class="[step === 1 ? 'selected' : '']">Step 1</div>
          <div v-bind:class="[step === 2 ? 'selected' : '']">Step 2</div>
        </div>
        <h2>Awesome</h2>
        <p>Welcome to the club, where can we ship your shirts to? You can 
          always provide this information at checkout.
        </p>
        <b-row>
          <b-col sm="12">
            <BaseInput title="Name">
              <input 
                v-model="name" 
                type="text" 
                placeholder="Johnny Appleseed">
            </BaseInput>  
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <BaseInput title="Address 1">
              <input 
                v-model="address1"
                type="text" 
                placeholder="123 Anywhere Ave">
            </BaseInput>            
          </b-col>
          <b-col>
            <BaseInput title="Address 2">
              <input 
                v-model="address2"
                type="text" 
                placeholder="Suite 101">
            </BaseInput>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <BaseInput title="Phone number">
              <input 
                v-model="phoneNumber"
                type="text" 
                placeholder="555-123-4567">
            </BaseInput>
          </b-col>
          <b-col>
            <BaseInput title="City">
              <input 
                v-model="city"
                type="text" 
                placeholder="Toronto">
            </BaseInput>
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <BaseInput title="Country">
              <select v-model="country">
                <option disabled value="">Select an option</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
              </select>
            </BaseInput>
          </b-col>
          <b-col>
            <b-row>
              <b-col sm="6">
                <BaseInput title="Province">
                  <select v-model="province">
                    <option disabled value="">Select an option</option>
                    <option>A</option>
                    <option>B</option>
                    <option>C</option>
                  </select>
                </BaseInput>                
              </b-col>
              <b-col sm="6">
                <BaseInput title="Postal code">
                  <input 
                    v-model="postalCode"
                    type="text" 
                    placeholder="L5N 2N5">
                </BaseInput>                 
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </b-container>
</b-col>
</template>
<script>
export default {
  data: function () {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      name: '',
      address1: '',
      address2: '',
      phoneNumber: '',
      city: '',
      country: '',
      province: '',
      postalCode: '',
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
        if (this.step === 1) {
          this.$emit('signing-up');
          this.step = 2;
        } 
        else {
          console.log('submit')
        }
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

.steps-container {
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: solid 1px white;
  margin-bottom: 10px;
}

.steps-container > div {
  padding-bottom: 1em;
  font-weight: bold;
  transition: 0.2s ease-in;
  padding-left: 5px;
  padding-right: 5px;
}

.steps-container > div {
  opacity: 0.5;
}

.steps-container > div.selected {
  border-bottom: solid 2px white;
  opacity: 1;
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
