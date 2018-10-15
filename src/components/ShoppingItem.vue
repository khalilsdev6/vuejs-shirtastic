<template>
    <div class="shopping_item">
        <hr>
        <b-row>
            <b-col sm="12" md="auto" lg="auto" xl="auto">
                <b-img
                    class="shopping_item--thumbnail"
                    :src="require('../assets/'+shirt.shirtDesign)"
                    alt=""
                />
            </b-col>
            <b-col>
                <b-row no-gutters>
                    <b-col>
                        <h4 class="shopping_item--name">{{ shirt.name }}</h4>
                        <p class="shopping_item--description">{{ shirt.description }}</p>
                    </b-col>
                    <b-col cols="auto">
                        <div class="shopping_item--delete">
                            <b-img
                                @click="$emit('remove', shirt)"
                                :src="require('../assets/icon-times.svg')"
                            />
                        </div>
                    </b-col>
                </b-row>
                <b-row no-gutters>
                    <b-col>
                        <b-form-group id="shirt-size" label-for="shirt-size">
                            <b-form-select
                                name="sizeShirt"
                                class="shopping_item--size"
                                id="shirt-size"
                                required
                                v-model="sizeShirt"
                            >
                                <option value="">Select Size</option>
                                <option
                                    :value="shirtSize.value"
                                    :key="shirtSize.value"
                                    v-for="shirtSize of shirtSizes"
                                >{{ shirtSize.text }}</option>
                            </b-form-select>
                        </b-form-group>
                    </b-col>
                </b-row>
                <b-row no-gutters>
                    <b-col>
                        <b-input
                            type="text"
                            v-model.number.trim="shirt.quantity"
                            class="shopping_item--quantity"
                            @input="$emit('update-quantity', parseInt($event, 10), shirt)"
                        />
                        <span class="shopping_item--price">@ {{ shirt.price }}</span>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
        <div v-if="lastIndex === currentIndex">
            <hr>
        </div>
    </div>
</template>
<script>
export default {
  name: "shopping-item",
  props: ["shirt", "lastIndex", "currentIndex"],
  data: function() {
    return {
      shirtSizes: [
        { text: "Extra Large", value: "XL" },
        { text: "Large", value: "L" },
        { text: "Medium", value: "M" },
        { text: "Small", value: "S" },
        { text: "Extra Small", value: "XS" }
      ],
      sizeShirt: this.shirt.size,
    };
  },
  watch: {
    shirt: function() {
      this.sizeShirt = this.shirt.size;
    }
  }
};
</script>
<style lang="scss" scoped>
.shopping_item {
  &--thumbnail {
    width: 100px;
    height: auto;
  }
  &--name {
    font-size: 14px;
  }
  &--description {
    font-size: 9px;
  }
  &--delete {
    display: inline-block;
    background: transparent;
    border-radius: 50%;
    border: none;
    width: 23px;
    height: 23px;
    background-color: #11a2dc;
    color: #fff;
    cursor: pointer;
    opacity: 1;
    min-width: auto;
    box-shadow: none;
    text-align: center;
  }
  &--size {
    width: 150px;
    margin: 10px 0 0;
    font-weight: 600;
    color: #11a2dc;
  }
  &--quantity {
    display: inline-block;
    width: 50px;
    font-weight: 600;
  }
  &--price {
    padding: 5px;
    font-weight: 600;
  }
}
</style>

