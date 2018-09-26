<template>
<b-col class="signup-container">
  <b-container>
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

    <button class="btn btn-primary">
      Sign up
    </button>
  </b-container>
</b-col>
</template>
<script>
export default {
  data: function() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
      step: 1
    };
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
  height: 65vh;
  justify-content: space-evenly;
  max-height: 500px;
  min-height: 400px;
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
