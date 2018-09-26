<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
button {
  background-color: #10A2DC !important;
  font-weight: bold !important;
  text-transform: uppercase !important;
  border-radius: 20px !important;
  padding: 8px 12px 8px 12px !important;
  font-size: 12px;
  transition: 0.2s ease-in-out;
  min-width: 155px;
  box-shadow: 1px 4px 10px 0.2px rgba(0, 0, 0, 0.3);
}
button:hover {
  background-color: #00B7FF !important;
  box-shadow: 1px 4px 10px 0.2px rgba(0, 0, 0, 0.3) !important;
}

button > img {
  height: 20px;
  margin-right: 10px;
}

h1, h2, h3, h4 {
  font-weight: 800 !important;
}

input {
  border: solid 1px #949494;
  padding: 10px;
  border-radius: 4px;
  color: #111;
}

select {
  border: solid 1px #949494;
  padding: 10px;
  border-radius: 4px;
  color: #111;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  color: #11a2dc;
}

</style>
