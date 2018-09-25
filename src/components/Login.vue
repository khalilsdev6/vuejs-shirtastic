<template>
<b-col class="login-container">

  <b-container>
    <h1>Log in</h1>
    <button class="btn btn-primary">
      <img src="../assets/facebook.svg"/>
      With Facebook
    </button>

    <button class="btn btn-primary">
      <img src="../assets/twitter.svg"/>
      With Twitter
    </button>

    <div class="login-container-divider">
      <div class="divider"></div>
      <h4>OR</h4>
      <div class="divider"></div>
    </div>

    <div id='login-form'>
      <input v-model="email" type="text" id="email" placeholder="Enter your best email address">
      <label for="email">Email Address</label>
      <input v-model="password" type="password" id="password" placeholder="Enter a password">
      <label for="password">Password</label>
    </div>
  </b-container>
</b-col>
</template>
<script>
export default {
  data: function () {
    return {
      email: "khalilstemmler@gmail.com",
      password: ""
    }
  }
};
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
  height: 44vh;
  justify-content: space-evenly;
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
</style>