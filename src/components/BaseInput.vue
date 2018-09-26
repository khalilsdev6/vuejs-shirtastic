<template>
  <div class="base-input-container">
    <label>{{ title }}</label>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: String
  }
}
</script>
<style>
.base-input-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}

.base-input-container label {
  font-weight: bold;
}
</style>