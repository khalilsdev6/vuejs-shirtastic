<template>
    <div class="shipping" v-bind:style="alignShipping">
        <div class="shipping--overlay" v-show="showPayments" @click="$emit('goto-shipping')"></div>
        <b-row>
            <b-col>
                <h3 class="shipping--header">Shipping Info</h3>
            </b-col>
        </b-row>
        <hr>
        <b-row>
            <b-col>
                <b-form @submit.prevent="onSubmit">
                    <b-form-group id="name" label="Name" label-for="name">
                        <b-form-input
                            id="name"
                            type="text"
                            v-model.trim="form.name"
                            required
                            :value="form.name"
                            placeholder="Johnny Appleseed"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group id="email" label="Email" label-for="email">
                        <b-form-input
                            id="email"
                            type="email"
                            v-model.trim="form.email"
                            required
                            :value="form.email"
                            placeholder="johnny5@nova-industries.com"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group id="phoneNumber" label="Phone Numbre" label-for="phoneNumber">
                        <b-form-input
                            id="phoneNumber"
                            type="text"
                            v-model.number.trim="form.phoneNumber"
                            required
                            :value="form.phoneNumber"
                            placeholder="555-123-1234"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group id="address1" label="Address 1" label-for="address1">
                        <b-form-input
                            id="address1"
                            type="text"
                            v-model.trim="form.address1"
                            required
                            :value="form.address1"
                            placeholder="123 Anywhere Ave."
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group id="address2" label="Address 2" label-for="address2">
                        <b-form-input
                            id="address2"
                            type="text"
                            v-model.trim="form.address2"
                            placeholder="Suite 101"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group id="city" label="City" label-for="city">
                        <b-form-input
                            id="city"
                            type="text"
                            v-model.trim="form.city"
                            required
                            :value="form.city"
                            placeholder="Toronto"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group id="country" label="Country" label-for="country">
                        <b-form-select
                            id="country"
                            text-field="name"
                            value-field="id"
                            required
                            v-model="form.country"
                            @change="$event === '' ? form.province = '' : ''"
                        >
                            <option value="">Select Country</option>
                            <option
                                :value="country.id"
                                :key="country.id"
                                v-for="country of countries"
                            >{{ country.name }}</option>
                        </b-form-select>
                    </b-form-group>
                    <b-form-row>
                        <b-col>
                            <b-form-group id="province" label="Province" label-for="province">
                                <b-form-select id="province" required v-model="form.province">
                                    <option value="">Select Province</option>
                                    <option
                                        :value="province"
                                        :key="province"
                                        v-for="province of provinces[form.country]"
                                    >{{ province }}</option>
                                </b-form-select>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group
                                id="postalCode"
                                label="Postal Code"
                                label-for="postalCode"
                            >
                                <b-form-input
                                    id="postalCode"
                                    required
                                    :value="form.postalCode"
                                    v-model.trim="form.postalCode"
                                    placeholder="L5N 2N5"
                                ></b-form-input>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                    <b-form-row>
                        <b-col class="text-right py-3">
                            <b-button type="submit" class="shipping--btn">
                                Go to Payment
                                <span class="shipping--right-arrow">
                                    <b-img
                                        :src="require('../assets/icon-arrow-right.svg')"
                                        alt="right arrow"
                                        fluid
                                    />
                                </span>
                            </b-button>
                        </b-col>
                    </b-form-row>
                </b-form>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import country from "@/models/countries";
import regions from "@/models/regions";
export default {
  name: "shipping",
  props: ["showShoppingCart", "showShipping", "showPayments"],
  data: function() {
    return {
      form: {
        name: "",
        email: "",
        phoneNumber: "",
        address1: "",
        address2: "",
        city: "",
        country: "",
        province: "",
        postalCode: ""
      },
      countries: country,
      provinces: regions
    };
  },
  methods: {
    onSubmit: function($event) {
      this.$emit("show-payments");
    }
  },
  computed: {
    alignShipping: function() {
      if (!this.showShipping && !this.showShoppingCart && !this.showPayments) {
        return { right: "-25%" };
      } else if (
        this.showShoppingCart &&
        this.showShipping &&
        !this.showPayments
      ) {
        return { right: 0 };
      } else if (
        this.showShoppingCart &&
        this.showShipping &&
        this.showPayments
      ) {
        return { right: "25%" };
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.shipping {
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
    background-color: rgba(0, 0, 0, 0.26);
  }
  &--header {
    color: #274686;
  }
  &--btn {
    font-size: 12px;
    position: relative;
    padding-right: 30px !important;
  }
  &--right-arrow {
    position: absolute;
    right: 10px;
    top: 0;
    font-size: 20px;
  }
  .custom-select {
    color: #11a2dc;
  }
}
</style>

