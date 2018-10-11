<template>
  <b-col class="login">
    <b-container class="login--spinner" v-if="isSubmitting">
      <double-bounce></double-bounce>
    </b-container>
    <b-container v-else>
      <h1>Log in</h1>
      <b-button @click="doSocialLogin" class="login--facebook">
        <b-img :src="require('../assets/facebook.svg')" fluid/>
        <span class="login--facebook-text">With Facebook</span>
      </b-button>
      <b-button @click="doSocialLogin" class="login--twitter">
        <b-img :src="require('../assets/twitter.svg')" fluid/>
        <span class="login--twitter-text">With Twitter</span>
      </b-button>
      <div class="login--divider">
        <div class="login--divider-block"></div>
        <h4>OR</h4>
        <div class="login--divider-block"></div>
      </div>
      <form ref="form" id="login-form" @submit.prevent="onSubmit">
        <label for="login-email">Email Address</label>
        <input id="login-email" v-model="email" type="text">
        <label for="login-password">Password</label>
        <input id="login-password" v-model="password" type="password">
        <div v-if="errors.length !== 0">
          <ul class="errors-list">
            <li v-for="(error, key) of errors" :key="key">{{ error }}</li>
          </ul>
        </div>
        <div class="text-center">
          <b-button class="mt-4" type="submit">Log in</b-button>
        </div>
      </form>
    </b-container>
  </b-col>
</template>
<script>
import UserApiService from "@/common/user-api.service";
import { DoubleBounce } from "vue-loading-spinner";
import Router from "@/router";
export default {
  components: {
    DoubleBounce
  },
  data: function() {
    return {
      email: "",
      password: "",
      errors: [],
      isSubmitting: false
    };
  },
  created: function() {
    this.UserApiService = UserApiService;
    this.validateEmail = () => {
      const email = this.email;
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    };
    this.validatePassword = () => {
      const password = this.password;
      if (password.length < 8) {
        return false;
      }
      return true;
    };
  },
  methods: {
    checkForm: function() {
      this.errors = [];
      if (!this.validateEmail()) {
        this.errors.push("Please enter a valid email");
      }
      if (!this.validatePassword()) {
        this.errors.push("Please enter a password of at least 8 characters");
      }
      if (this.errors.length === 0) {
        return true;
      }
      return false;
    },
    onSubmit: async function(e) {
      e.preventDefault();
      if (this.checkForm()) {
        const { email, password } = this;
        this.isSubmitting = true;
        try {
          await this.UserApiService.login(email, password);
          this.isSubmitting = false;
          Router.push({ name: "catalog" });
        } catch (err) {
          console.log(err);
          this.isSubmitting = false;
        }
      }
    },
    doSocialLogin: function(e) {
      e.preventDefault();
      // Normally, we would utilize a package such as
      // passport.js and implement an authentication
      // strategy, but for the scope of this application,
      // we will just mock the request.
      this.isSubmitting = true;
      setTimeout(() => {
        this.isSubmitting = false;
        Router.push({ name: "catalog" });
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  background: url("../assets/Fractal.png");
  background-position: center;
  background-repeat: no-repeat;
  background-position-x: left;
  background-position-y: center;
  background-size: cover;
  display: flex;
  flex-direction: row;
  align-items: center;

  &--spinner {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: blue !important;
  }
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    max-width: 300px;
    justify-content: space-around;
    max-height: 500px;
    min-height: 400px;
  }

  h1,
  h2 {
    text-shadow: 1px 1px 6px #080808;
  }

  h1,
  label,
  h4 {
    color: white;
  }
  &--divider {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    &-block {
      width: 40%;
      height: 1px;
      background: white;
    }
    h4 {
      padding-left: 1em;
      padding-right: 1em;
      font-size: 16px;
    }
  }

  &--facebook {
    &-text {
      font-size: 11px;
    }
  }
  &--twitter {
    &-text {
      font-size: 11px;
    }
  }

  #login-form {
    width: 100%;
    input {
      display: block;
      width: 100%;
      margin-bottom: 1em !important;
    }
    label {
      display: block;
      width: 100%;
      font-weight: bold;
      font-size: 12px;
    }
  }
  .errors-list li {
    color: #b6b6b6;
  }
}
</style>