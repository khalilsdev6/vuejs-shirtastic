<template>
  <div class="steps-container">
    <div v-bind:class="[step === 1 ? 'selected' : '']">Step 1</div>
    <div v-bind:class="[step === 2 ? 'selected' : '']">Step 2</div>
  </div>
</template>
<script>
export default {
  props: {
    step: Number
  }
}
</script>
<style scoped>
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
</style>