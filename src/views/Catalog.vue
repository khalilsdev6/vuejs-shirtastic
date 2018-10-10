<template>
    <div id="catalog">
      <Header
        @show-shopping-cart="showShoppingCart = true"
        :cartItems="cartItems"
      />
      <Tabs
        v-bind:tabs="tabs"
        :currentTab="currentTab"
        @tab-change="currentTab=$event"
        :totalDesigns="totalDesigns"
      />
      <Shirts
        :currentSelection="currentTab"
        @total-designs="totalDesigns = $event"
        @add-shirt="addItemToCart"
      />
      <div
        v-show="showShoppingCart"
        class="overlay"
        @click="resetScreen"
      />
      <ShoppingCart
        :cartItems="cartItems"
        :showShoppingCart="showShoppingCart"
        :showShipping="showShipping"
        :showPayments="showPayments"
        @show-shopping-cart="toggleShoppingCart"
        @remove-item="removeItemFromCart"
        @show-shipping="toggleShipping"
      />
      <Shipping
        :showShoppingCart="showShoppingCart"
        :showShipping="showShipping"
        :showPayments="showPayments"
        @goto-shipping="toggleShipping"
        @show-payments="togglePayments"
      />
      <Payments
        :showShoppingCart="showShoppingCart"
        :showShipping="showShipping"
        :showPayments="showPayments"
        :subtotal="subtotal"
        @show-order-complete="showOrderComplete = true"
      />
      <OrderComplete
        :showOrderComplete="showOrderComplete"
        @reset-order="resetOrder"
      />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Tabs from "@/components/Tabs.vue";
import Shirts from "@/components/Shirts.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
import Shipping from "@/components/Shipping.vue";
import Payments from "@/components/Payment.vue";
import OrderComplete from '@/components/OrderComplete.vue';

export default {
  name: "catalog",
  data: function() {
    return {
      cartItem: 0,
      subtotal: 0,
      showShoppingCart: false,
      showShipping: false,
      showPayments: false,
      showOrderComplete: false,
      tabs: [
        { id: 1, text: "All Designs", gender: "N" },
        { id: 2, text: "Men", gender: "M" },
        { id: 3, text: "Women", gender: "W" }
      ],
      currentTab: "N",
      totalDesigns: 8,
      cartItems: []
    };
  },
  components: { Header, Tabs, Shirts, ShoppingCart, Shipping, Payments, OrderComplete },
  methods: {
    addItemToCart: function(newShirt) {
      let shirtIndexIfExist = this.cartItems.findIndex(
        cartItem => cartItem.id === newShirt.id
      );
      // increase quantity if shirt exist
      if (shirtIndexIfExist > -1) {
        this.$set(newShirt, "quantity", newShirt.quantity + 1);
        this.$set(this.cartItems, shirtIndexIfExist, newShirt);
      }
      // add new shirt if doesn't exist
      else {
        this.$set(newShirt, "quantity", 1);
        this.cartItems.push(newShirt);
      }
    },
    removeItemFromCart: function(shirtId) {
      let shirtIndex = this.cartItems.findIndex(
        cartItem => cartItem.id === shirtId
      );
      this.cartItems.splice(shirtIndex, 1);
    },
    resetScreen: function() {
      this.showShoppingCart = false;
      this.showShipping = false;
      this.showPayments = false;
      this.showOrderComplete = false;
    },
    toggleShoppingCart: function() {
      this.showShoppingCart = true;
      this.showShipping = false;
      this.showPayments = false;
    },
    toggleShipping: function(subtotal) {
      console.log(subtotal);
      
      this.showShoppingCart = true;
      this.showShipping = true;
      this.showPayments = false;
      this.subtotal = subtotal;
    },
    togglePayments: function() {
      this.showShoppingCart = true;
      this.showShipping = true;
      this.showPayments = true;
    },
    resetOrder: function() {
      this.showShoppingCart = false;
      this.showShipping = false;
      this.showPayments = false;
      this.showOrderComplete = false;
      this.cartItems.splice(0);
    }
  }
};
</script>

<style lang="scss">
#catalog {
  background-color: inherit;
  .overlay {
    position: absolute;
    z-index: 25;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .shopping-cart {
    position: relative;
  }
}
</style>
