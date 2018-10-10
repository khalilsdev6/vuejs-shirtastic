<template>
    <div class="payments" v-bind:style="alignPayments">
        <b-row>
            <b-col>
                <h3 class="payments--header">Payments Info</h3>
            </b-col>
        </b-row>
        <hr>
        <b-row>
            <b-col>
                <b-form @submit="onSubmit">
                    <b-form-group id="creditCardNumber"
                                    label="Credit Card Number"
                                    label-for="creditCardNumber">
                        <b-form-input id="creditCardNumber"
                                    type="number"
                                    v-model.number.trim="form.creditCardNumber"
                                    required
                                    placeholder="•••• •••• •••• 1234">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="expiration"
                                    label="Expiration"
                                    label-for="expiration">
                        <b-form-input id="expiration"
                                    type="text"
                                    v-model.trim="form.expiration"
                                    required
                                    placeholder="MM/YY">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group id="ccv"
                                    label="CCV"
                                    label-for="ccv">
                        <b-form-input id="ccv"
                                    type="text"
                                    v-model.number.trim="form.ccv"
                                    required
                                    placeholder="123">
                        </b-form-input>
                    </b-form-group>
                    
                    <b-row>
                        <b-col>
                            <p>Subtotal:</p>
                        </b-col>
                        <b-col class="text-right">
                            <h4>${{ subtotal }}</h4>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <p>Tax:</p>
                        </b-col>
                        <b-col class="text-right">
                            <h4>${{ tax }}</h4>
                        </b-col>
                    </b-row>
                    <b-row>
                        <b-col>
                            <p>Shipping:</p>
                        </b-col>
                        <b-col class="text-right">
                            <h4>${{ shipping }}</h4>
                        </b-col>
                    </b-row>
                    <hr>
                    <b-row>
                        <b-col>
                            <p>Total:</p>
                        </b-col>
                        <b-col class="text-right">
                            <h4 class="payments--total">${{ total }}</h4>
                        </b-col>
                    </b-row>

                    <b-row>
                        <b-col class="text-right py-3">
                            <b-button class="payments--btn" @click="$emit('show-order-complete')">Checkout <span class="payments--right-arrow">&#10003;</span></b-button>
                        </b-col>
                    </b-row>
                    
                </b-form>
            </b-col>
        </b-row>
        
    </div>
</template>
<script>
export default {
  name: "payments",
  props: ["showShoppingCart", "showShipping", "showPayments", "subtotal"],
  data: function() {
    return {
      form: {
        creditCardNumber: 1234123412341234,
        expiration: '10/20',
        ccv: '123',
      },
      shipping: 9.99,
    };
  },
  methods: {
    onSubmit: function() {}
  },
  computed: {
    alignPayments: function() {
      if (!this.showShipping && !this.showShoppingCart && !this.showPayments) {
        return { right: "-25%" };
      }
      if (this.showShoppingCart && this.showShipping && this.showPayments) {
        return { right: 0 };
      } 
    },
    tax: function() {
        return (this.subtotal * 0.13).toFixed(2);
    },
    total: function() {
        return (parseFloat(this.subtotal, 2) + parseFloat(this.tax, 2) + this.shipping).toFixed(2);
    }
  }
};
</script>
<style lang="scss" scoped>
.payments {
  position: absolute;
  right: -25%;
  top: 0;
  bottom: 0;
  width: 25%;
  padding: 20px;
  z-index: 30;
  background-color: #eee;
  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.08);
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  overflow-y: scroll;
  border-left: 1px solid rgb(156, 156, 156);
  &--overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 35;
    background-color: rgba(0, 0, 0, 0.45);
  }
  &--header {
    color: #274686;
  }
  &--btn {
    font-size: 12px;
    position: relative;
    padding-right: 20px !important;
  }
  &--right-arrow {
    position: absolute;
    right: 20px;
    top: 0;
    font-size: 20px;
  }
  .custom-select {
    color: #11a2dc;
  }
  #creditCardNumber {
      font-size: 18px;
  }
}
</style>

