<template>
<b-col class="login-container">
  <b-container class="spinner" v-if="isSubmitting">
    <double-bounce></double-bounce>
  </b-container>
  <b-container v-else>
    <h1>Log in</h1>
    <button class="btn btn-primary">
      <img src="../assets/facebook.svg"/>With Facebook
    </button>
    <button class="btn btn-primary">
      <img src="../assets/twitter.svg"/>With Twitter
    </button>
    <div class="login-container-divider">
      <div class="divider"></div>
      <h4>OR</h4>
      <div class="divider"></div>
    </div>
    <form 
      ref="form"
      id='login-form'>
      <label 
        for="login-email">Email Address
      </label>
      <input 
        id="login-email"
        v-model="email" 
        type="text" 
        placeholder="Enter your best email address">
      <label 
        for="login-password">Password
      </label>
      <input 
        id="login-password"
        v-model="password" 
        type="password" 
        placeholder="Enter a password">
    </form>
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
      @click="onSubmit($event)" 
      class="btn btn-primary">
      Log in
    </button>
  </b-container>
</b-col>
</template>
<script>
import UserApiService from '@/common/user-api.service'
import {DoubleBounce} from 'vue-loading-spinner'
export default {
  components: {
    DoubleBounce
  },
  data: function () {
    return {
      email: "",
      password: "",
      errors: [],
      isSubmitting: false
    }
  },
  created: function () {
    this.UserApiService = UserApiService;
    this.validateEmail = () => {
      const email = this.email;
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }
    this.validatePassword = () => {
      const password = this.password;
      if (password.length < 8) {
        return false;
      }
      return true;
    }
  },
  methods: {
    checkForm: function() {
      this.errors = [];
      if (!this.validateEmail()) {
        this.errors.push('Please enter a valid email')
      }
      if (!this.validatePassword()) {
        this.errors.push('Please enter a password of at least 8 characters')
      }
      if (this.errors.length === 0) {
        return true;
      }
      return false;
    },
    onSubmit: async function (e) {
      e.preventDefault();
      if (this.checkForm()) {
        const { email, password } = this;
        this.isSubmitting = true;
        try {
          await this.UserApiService.login(email, password)
          this.isSubmitting = false;
        } catch (err) {
          console.log(err)
          this.isSubmitting = false

        }   
      }
    }
  }
}
</script>
<style scoped>
.login-container {
  background: url("../assets/Fractal.png");
  background-position: center;
  background-repeat: no-repeat;
  background-position-x: left;
  background-position-y: center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.login-container > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  max-width: 300px;
  height: 65vh;
  justify-content: space-evenly;
  max-height: 500px;
  min-height: 400px;
}

.login-container h1, .login-container h2 {
  text-shadow: 1px 1px 6px #080808;
}

.login-container h1, 
.login-container label,
.login-container h4 {
  color: white;
}

.login-container-divider {
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
}

.login-container-divider .divider {
  width: 40%;
  height: 1px;
  background: white;
}

.login-container-divider h4 {
  padding-left: 1em;
  padding-right: 1em;
}

#login-form {
  width: 100%;
}

#login-form label, #login-form input {
  display: block;
  width: 100%;
}

#login-form label {
  font-weight: bold;
  font-size: 12px;
}

#login-form input {
  margin-bottom: 1em !important;
}

.errors-list li {
  color: #b6b6b6;
}

.spinner {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: center;
  color: blue !important;
}
</style>