<template>
    <div class="shopping_cart" v-bind:style="alignShoppingCart">
        <div class="shopping_cart--overlay" v-show="showShipping" @click="$emit('show-shopping-cart')"></div>

        <b-form @submit.prevent="goToShipping">

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
          @update-quantity="updateQuantity"
          @remove="removeShirt"
          />

          <b-row class="shopping_cart--empty-cart" v-show="!cartItems.length">
            <b-col>
              <h5>No items added to cart</h5>
            </b-col>
          </b-row>

          <div v-show="cartItems.length">
            <b-row class="shopping_cart--subtotal py-4">
              <b-col>
                <h4 class="shopping_cart--subtotal-header">Subtotal:</h4><h3 class="shopping_cart--subtotal-header">&nbsp;${{ subtotal }}</h3>
              </b-col>
            </b-row>
            <b-row class="pb-5">
              <b-col class="text-right">
                <b-button class="shopping_cart--btn" type="submit">Go to Shipping <span class="shopping_cart--right-arrow">&#8594;</span></b-button>
              </b-col>
            </b-row>
          </div>

        </b-form>

    </div>
</template>
<script>
import ShoppingItem from "@/components/ShoppingItem.vue";
export default {
  name: "shopping-cart",
  props: ["cartItems", "showShoppingCart", "showShipping", "showPayments"],
  components: { ShoppingItem },
  data: function() {
    return {
      quantity: 0,
      shirtId: 0
    };
  },
  methods: {
    goToShipping: function() {
      this.$emit("show-shipping", this.subtotal);
    },
    updateQuantity: function(quantity, shirtId) {
      if (quantity && shirtId) {
        this.quantity = quantity;
        this.shirtId = shirtId;
        this.$emit("update-quantity", this.quantity, this.shirtId);
      }
    },
    removeShirt: function(shirtId) {
      this.$emit("remove-item", shirtId);
      this.$el.getElementsByClassName(
        "shopping_cart--cart-badge"
      )[0].style.transform = "scale(1.3)";
      setTimeout(() => {
        this.$el.getElementsByClassName(
          "shopping_cart--cart-badge"
        )[0].style.transform = "scale(1)";
      }, 100);
    }
  },
  computed: {
    subtotal: function() {
      let subtotal = 0;
      this.cartItems.forEach(cartItem => {
        subtotal += cartItem.price * cartItem.quantity;
      });
      return subtotal.toFixed(2);
    },
    alignShoppingCart: function() {
      if (!this.showShoppingCart && !this.showShipping && !this.showPayments) {
        return { right: "-25%" };
      } else if (
        this.showShoppingCart &&
        !this.showShipping &&
        !this.showPayments
      ) {
        return { right: 0 };
      } else if (
        this.showShoppingCart &&
        this.showShipping &&
        !this.showPayments
      ) {
        return { right: "25%" };
      } else if (
        this.showShoppingCart &&
        this.showShipping &&
        this.showPayments
      ) {
        return { right: "50%" };
      }
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
  height: 100%;
  padding: 20px 20px 50px;
  z-index: 30;
  background-color: #eee;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.4);
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  overflow-y: scroll;
  border-left: 1px solid rgb(156, 156, 156);
  &--overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 35;
    background-color: rgba(0, 0, 0, 0.25);
  }
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
    transition: 0.1s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
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
  }
  &--btn {
    font-size: 12px;
    position: relative;
    padding-right: 20px !important;
  }
  &--right-arrow {
    position: absolute;
    right: 5px;
    top: 0;
    font-size: 20px;
  }
  .btn-secondary {
    border: none !important;
    border-color: transparent !important;
  }
}
</style>
