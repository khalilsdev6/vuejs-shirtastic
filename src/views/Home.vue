<template>
  <b-container fluid class="home-container">
    <b-row>
      <TheLoginPane 
        v-bind:class="[isSigningUp ? 'hidden' : '' , 'login']"/>
      <b-col sm="4" class="image-container">
        <img alt="Vue logo" src="../assets/logo.png">
      </b-col>
      <TheSignupPane 
        v-on:signing-up="handleSignupStarted"
      />
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import TheLoginPane from '@/components/TheLoginPane.vue'
import TheSignupPane from '@/components/TheSignupPane.vue'

export default {
  name: 'home',
  components: {
    TheLoginPane,
    TheSignupPane
  },
  data: function () {
    return {
      isSigningUp: false
    }
  },
  methods: {
    handleSignupStarted: function () {
      this.isSigningUp = true;
    }
  }
}
</script>
<style scoped>
  .home-container, .home-container > .row {
    height: 100%;
  }
  .image-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .image-container > img {
    width: 100%;
  }

  /* 
    When the signup flow has been started, we 
    want to hide the login options... but we 
    want to do it nicely, not abruptly.
   */
  .login.hidden {
    max-width: 0px; 
    overflow:hidden; 
    padding: 0px;
  }
</style>

