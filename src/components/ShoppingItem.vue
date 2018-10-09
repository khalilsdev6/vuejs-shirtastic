<template>
    <div class="shopping_item">
        <hr>
        <b-row>
            <b-col sm="12" md="auto" lg="auto" xl="auto">
                <b-img class="shopping_item--thumbnail" :src="require('../assets/'+shirt.shirtDesign)" alt="" />
            </b-col>
            <b-col>
                <b-row no-gutters="">
                    <b-col>
                        <h4 class="shopping_item--name">
                            {{ shirt.name }}
                        </h4>
                        <p class="shopping_item--description">{{ shirt.description }}</p>
                    </b-col>
                    <b-col cols="auto">
                        <b-button @click="$emit('remove', shirt.id)" class="shopping_item--delete">&#x2715;</b-button>
                    </b-col>
                </b-row>
                <b-row no-gutters="">
                    <b-col>
                        <b-select name="shopping_item--size" id="shirt-size" value="">
                            <option value="">Select size</option>
                            <option value="XS">Extra Small</option>
                            <option value="S">Small</option>
                            <option value="M">Medium</option>
                            <option value="L">Large</option>
                            <option value="XL">Extra Large</option>
                        </b-select>
                    </b-col>
                </b-row>
                <b-row no-gutters="">
                    <b-col>
                        <b-input
                        type="text"
                        :value="shirt.quantity"
                        class="shopping_item--quantity"
                        @change="$emit('update-quantity', $event)"
                        />
                        <span class="shopping_item--price"> @ {{ shirt.price }}</span>
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
  props: ["shirt", "lastIndex", "currentIndex"]
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
    width: 20px;
    height: 20px;
    background-color: #11a2dc;
    padding: 0;
    color: #FFF;
    cursor: pointer;
    opacity: 1;
    min-width: auto;
    box-shadow: none;
    padding: 0 !important;
  }
  &--size {
      width: 150px;
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

