<template>
  <b-container fluid class="home-container">
    <b-row>
      <Login/>
      <b-col sm="4" class="image-container">
        <img alt="Vue logo" src="../assets/logo.png">
      </b-col>
      <Signup/>
    </b-row>
  </b-container>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Login from '@/components/Login.vue'
import Signup from '@/components/Signup.vue'

export default {
  name: 'home',
  components: {
    Login,
    Signup
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
</style>

