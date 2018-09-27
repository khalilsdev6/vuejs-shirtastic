<template>
 <div v-if="errors.length !== 0">
    <ul class="errors-list">
      <li 
        v-for="(error, key) of errors"
        :key="key">
        {{ error }}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: {
      errors: Array
    }
  }
</script>
<style scoped>
  .errors-list li {
    color: #b6b6b6;
  }
</style>