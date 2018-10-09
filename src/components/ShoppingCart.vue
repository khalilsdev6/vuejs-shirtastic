<template>
    <div class="shopping_cart" v-bind:style="showShoppingCart ? {right: 0} : ''">
        <b-row align-h="end">
            <b-col sm="12" md="8" lg="8" xl="8">
                <h3 class="shopping_cart--header">Shopping Cart</h3>
            </b-col>
            <b-col align-self="end">
                <b-img class="shopping_cart--cart-image" :src="require('../assets/icon-basket.svg')" fluid alt="cart"/>
                <b-badge href="#" variant="primary" pill class="shopping_cart--cart-badge">{{ cartItems.length }}</b-badge>
            </b-col>
        </b-row>
        <ShoppingItem
        v-show="!!cartItems.length"
        v-for="(cartItem, index) of cartItems"
        :key="cartItem.id" :shirt="cartItem"
        :currentIndex="index + 1"
        :lastIndex="cartItems.length"
        @remove="$emit('remove-item', $event);"
        />
        <b-row class="shopping_cart--empty-cart" v-show="!cartItems.length">
          <b-col>
            <h5>No items added to cart</h5>
          </b-col>
        </b-row>
        <b-row class="shopping_cart--subtotal" v-show="cartItems.length">
          <b-col>
            <h4 class="shopping_cart--subtotal-header">Subtotal:</h4><h3 class="shopping_cart--subtotal-header">$ {{ subtotal }}</h3>
          </b-col>
        </b-row>
    </div>
</template>
<script>
import ShoppingItem from "@/components/ShoppingItem.vue";
export default {
  name: "shopping-cart",
  props: ["cartItems", "showShoppingCart"],
  components: { ShoppingItem },
  computed: {
    subtotal: function() {
      let subtotal = 0;
      this.cartItems.forEach(cartItem => {
          subtotal+=cartItem.price * cartItem.quantity;
      })
      return subtotal;
    }
  }
};
</script>
<style lang="scss" scoped>
.shopping_cart {
  position: absolute;
  right: -25%;
  top: 0;
  bottom: 0;
  width: 25%;
  padding: 20px;
  z-index: 30;
  background-color: #eee;
  box-shadow: 0 0 5px 0 #ccc;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  overflow-y: scroll;
  &--header {
    color: #274686;
  }
  &--cart-image {
    width: 30px;
    height: auto;
  }
  &--cart-badge {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 0 0 0 10px;
    background-color: #11a2dc;
    padding: 10px 0;
    transition: 0.2s all linear;
    &:hover {
      background-color: #0b83b3;
    }
  }
  &--empty-cart {
    text-align: center;
    padding: 50px 0;
  }
  &--subtotal {
    text-align: right;
  }
  &--subtotal-header {
    display: inline-block;
    padding: 0 10px;
  }
}
</style>

