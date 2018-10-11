<template>
    <div class="order_complete" v-bind:style="alignOrderComplete">
        <div class="order_complete--content">
            <div class="order_complete--shirt-container">
                <b-img class="order_complete--shirt" :src="require('../assets/ShirtIcon.svg')" alt="Shirt Image"></b-img>
            </div>
            <h3 class="order_complete--header">Your order is complete.</h3>
            <b-button @click="$emit('reset-order')">Show some more</b-button>
        </div>
    </div>
</template>
<script>
export default {
  name: "order-complete",
  props: ["showOrderComplete"],
  methods: {
    showSomeMore: function() {

    }
  },
  computed: {
    alignOrderComplete: function() {
      if (!this.showOrderComplete) {
        return { right: "-75%" };
      }
      if (this.showOrderComplete) {
        return { right: 0 };
      } 
    }
  }
};
</script>
<style lang="scss" scoped>
.order_complete {
  position: absolute;
  right: -75%;
  top: 0;
  bottom: 0;
  width: 75%;
  padding: 20px;
  z-index: 100;
  background-color: #eee;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  overflow-y: scroll;
  &--content {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
  }
  &--shirt-container {
      background-color: #11a2dc;
      width: 120px;
      height: 120px;
      border-radius: 50%;
      padding: 18px 23px;
      margin: 10px 0;
  }
  &--shirt {
      width: 75px;
      height: auto;
  }
  &--header {
    color: #274686;
    margin: 10px 0;
  }
  .btn-secondary {
      margin: 10px 0;
      font-size: 11px !important;
      border: none !important;
      border-color: transparent !important;
  }
}
</style>

