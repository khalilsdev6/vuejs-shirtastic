<template>
  <b-container :class="{ 'px-0': step === 1}">
    <b-row>
      <b-col>
        <div class="steps">
          <div class="steps--step" v-bind:class="[step === 1 ? 'steps--step-selected' : '']">Step 1</div>
          <div class="steps--step" v-bind:class="[step === 2 ? 'steps--step-selected' : '']">Step 2</div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  props: {
    step: Number
  }
};
</script>
<style lang="scss" scoped>
.steps {
  display: flex;
  width: 100%;
  justify-content: center;
  border-bottom: solid 1px rgba(255, 255, 255, 0.5);
  margin-bottom: 10px;
  &--step {
    padding-bottom: 1em;
    font-weight: bold;
    transition: 0.2s ease-in;
    padding-left: 5px;
    padding-right: 5px;
    opacity: 0.5;
    &-selected {
      border-bottom: solid 2px white;
      opacity: 1;
      margin-bottom: -1px;
    }
  }
}
</style>