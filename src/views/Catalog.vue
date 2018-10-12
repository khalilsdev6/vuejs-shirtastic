<template>
  <div id="catalog">
    <Header @show-shopping-cart="showShoppingCart = true" :cartItemsNumber="cartItems.length"/>
    <Tabs
      v-bind:tabs="tabs"
      :currentTab="currentTab"
      @tab-change="currentTab=$event"
      :totalDesigns="totalDesigns"
    />
    <Shirts
      v-if="!isLoading && shirts.length > 0"
      :currentSelection="currentTab"
      @total-designs="totalDesigns = $event"
      @add-shirt="addItemToCart"
      :shirts="shirts"
    />
    <div class="px-100 my-4" v-else-if="!isLoading && shirts.length <= 0">
      <b-row>
        <b-col>
          <h4>Unable to load shirts. Please check the shirt service.</h4>
        </b-col>
      </b-row>
    </div>
    <div class="flex-center" v-else>
      <double-bounce></double-bounce>
    </div>
    <div v-show="showShoppingCart" class="overlay" @click="resetScreen"></div>
    <ShoppingCart
      :cartItems="cartItems"
      :showShoppingCart="showShoppingCart"
      :showShipping="showShipping"
      :showPayments="showPayments"
      @show-shopping-cart="toggleShoppingCart"
      @remove-item="removeItemFromCart"
      @show-shipping="toggleShipping"
      @update-quantity="updateShirtQuantity"
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
    <OrderComplete :showOrderComplete="showOrderComplete" @reset-order="resetOrder"/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Tabs from "@/components/Tabs.vue";
import Shirts from "@/components/Shirts.vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
import Shipping from "@/components/Shipping.vue";
import Payments from "@/components/Payment.vue";
import OrderComplete from "@/components/OrderComplete.vue";
import ShirtsApiService from "@/common/shirts-api.service";
import { DoubleBounce } from "vue-loading-spinner";

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
      shirts: [],
      isLoading: true,
      tabs: [
        { id: 1, text: "All Designs", gender: "N" },
        { id: 2, text: "Men", gender: "M" },
        { id: 3, text: "Women", gender: "W" }
      ],
      currentTab: "N",
      totalDesigns: 0,
      cartItems: []
    };
  },
  components: {
    Header,
    Tabs,
    Shirts,
    ShoppingCart,
    Shipping,
    Payments,
    OrderComplete,
    DoubleBounce
  },
  created: function() {
    setTimeout(() => {
      ShirtsApiService.getShirts()
        .then(result => {
          this.isLoading = false;
          this.shirts = result;
        })
        .catch(err => {
          this.isLoading = false;
          console.log(err);
        });
    }, 2000);
  },
  methods: {
    addItemToCart: function(newShirt) {
      let shirtIndexIfExist = this.cartItems.findIndex(
        cartItem => cartItem.size === newShirt.size
      );
      let cartItem = this.cartItems.find(
        cartItem => cartItem.size === newShirt.size
      );
      console.log(cartItem);
      console.log(shirtIndexIfExist);
      // increase quantity if shirt exist
      if (shirtIndexIfExist > -1 && cartItem) {
        cartItem.quantity+=1;
      }
      // add new shirt if doesn't exist
      else {
        newShirt.quantity+=1;
        this.cartItems.push(newShirt);
      }
    },
    removeItemFromCart: function(shirtId) {
      let shirtIndex = this.cartItems.findIndex(
        cartItem => cartItem.id === shirtId
      );
      this.cartItems.splice(shirtIndex, 1);
    },
    updateShirtQuantity: function(quantity, shirtId) {
      let updatedShirt = this.cartItems.find(
        cartItem => cartItem.id === shirtId
      );
      this.$set(updatedShirt, "quantity", quantity);
      let shirtIndex = this.cartItems.findIndex(
        cartItem => cartItem.id === shirtId
      );
      this.$set(this.cartItems, shirtIndex, updatedShirt);
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
  padding-bottom: 20px;
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
  .flex-center {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
  }
  .shopping-cart {
    position: relative;
  }
  .px-100 {
    padding: 0 100px;
  }
}
</style>
