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
      <label>Email Address</label>
      <input v-model="email" type="text" placeholder="Enter your best email address">
      
      <label>Password</label>
      <input v-model="password" type="password" placeholder="Enter a password">
    </div>

    <button class="btn btn-primary">
      Log in
    </button>
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
</style>