<template>
    <div id="catalog">
      <Header @show-shopping-cart="showShoppingCart = true" :cartItems="cartItems"></Header>
      <Tabs v-bind:tabs="tabs" :currentTab="currentTab" @tab-change="currentTab=$event" :totalDesigns="totalDesigns"/>
      <Shirts :currentSelection="currentTab" @total-designs="totalDesigns = $event" @add-shirt="addItemToCart"/>
      <div v-show="showShoppingCart" class="overlay" @click="showShoppingCart = false"></div>
      <ShoppingCart :cartItems="cartItems" :showShoppingCart="showShoppingCart" @remove-item="removeItemFromCart" />
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Tabs from "@/components/Tabs.vue";
import Shirts from "@/components/Shirts.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";

export default {
  name: "catalog",
  data: function() {
    return {
      cartItem: 0,
      newShirt: {},
      showShoppingCart: false,
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
  components: { Header, Tabs, Shirts, ShoppingCart },
  methods: {
    addItemToCart: function(newShirt) {
      let shirtIndexIfExist = this.cartItems.findIndex(
        cartItem => cartItem.id === newShirt.id
      );
      // increase quantity if shirt exist
      if (shirtIndexIfExist > -1) {
        this.$set(newShirt, 'quantity', newShirt.quantity + 1);
        this.$set(this.cartItems, shirtIndexIfExist, newShirt);
      }
      // add new shirt if doesn't exist
      else {
        this.$set(newShirt, 'quantity', 1);
        this.cartItems.push(newShirt);
      }
    },
    removeItemFromCart: function(shirtId) {
      let shirtIndex = this.cartItems.findIndex(
        cartItem => cartItem.id === shirtId
      );
      this.cartItems.splice(shirtIndex, 1);
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
}
</style>
