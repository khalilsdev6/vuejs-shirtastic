<template>
  <b-container class="signup-shipping-form-container">
    <SignupSteps v-bind:step="Number(2)"/>
    <h2>Awesome</h2>
    <p>Welcome to the club, where can we ship your shirts to? You can 
      always provide this information at checkout.
    </p>
    <b-container>
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
              <option 
                :key="index" 
                v-bind:value="country.id"
                v-for="(country, index) of countries">{{ country.name}}
                </option>
            </select>
          </BaseInput>
        </b-col>
        <b-col>
          <b-row>
            <b-col sm="6">
              <BaseInput title="Province">
                <select v-model="province">
                  <option disabled value="">Select an option</option>
                  <option 
                    :key="index"
                    v-bind:value="region"
                    v-for="(region, index) of regions[country]">{{ region }}
                  </option>
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
      <b-row class="justify-content-between">
        <b-col sm="6">
          <button 
            @click="submitLater" 
            class="btn btn-primary">
            Do this later
          </button>
        </b-col>
        <b-col class="text-right" sm="6">
          <button 
            @click="submit" 
            class="btn btn-primary">
            Save
          </button>
        </b-col>
      </b-row>
    </b-container>
    <SignupErrors v-bind:errors="errors"/>
  </b-container>
</template>
<script>

import SignupSteps from './SignupSteps'
import SignupErrors from './SignupErrors'
import countries from '../models/countries'
import regions from '../models/regions'
import Router from '@/router'

export default {
  components: {
    SignupSteps,
    SignupErrors
  },
  data: function () {
    return {
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
    this.countries = countries;
    this.regions = regions;
    
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
    submitLater: function () {
      Router.push({ name: "catalog" })
    },
    submit: function () {
      Router.push({ name: "catalog" })
    }

  }
}
</script>
<style scoped>
.signup-shipping-form-container {
  max-height: 100% !important;
}
</style>