<template>
  <b-col class="shirt" sm="12" md="3" lg="3" xl="3">
    <b-card :style="{ fontFamily: shirt.font }">
      <div :class="{'shirt--overlay': addShirtWithSize}" @mouseout="addShirtWithSize=false"></div>
      <div class="shirt--sizes" v-show="addShirtWithSize" @mouseover="addShirtWithSize=true">
        <div class="shirt--sizes-block">
          <div @click="addShirt('XL')" class="shirt--size">XL</div>
          <div @click="addShirt('L')" class="shirt--size">L</div>
          <div @click="addShirt('M')" class="shirt--size">M</div>
          <div @click="addShirt('S')" class="shirt--size">S</div>
          <div @click="addShirt('XS')" class="shirt--size">XS</div>
          <b-img
            class="shirt--add-cart"
            :src="require('../assets/icon-add-to-basket.svg')"
            alt="Add to cart"
            fluid
          />
        </div>
      </div>
      <b-img class="shirt--design" :src="require('../assets/'+shirt.shirtDesign)"></b-img>
      <h4 class="shirt--name">{{ shirt.name }}</h4>
      <p>{{ shirt.description }}</p>
      <b-row>
        <b-col>
          <div class="shirt-cart">
            <b-img
              v-show="!addShirtWithSize"
              @click="$emit('add-shirt', shirt)"
              :src="require('../assets/icon-basket.svg')"
              width="30"
              alt="Cart"
              @mouseover="addShirtWithSize = true"
            />
          </div>
        </b-col>
        <b-col>
          <h4>${{ shirt.price }}</h4>
        </b-col>
        <!-- Edit Icon -->
        <b-col>
          <b-img :src="require('../assets/icon-edit.svg')" width="25" alt="Add to cart"/>
        </b-col>
      </b-row>
    </b-card>
  </b-col>
</template>

<script>
import deepclone from "lodash.clonedeep";
export default {
  name: "shirt",
  props: ["shirt"],
  data: function() {
    return {
      addShirtWithSize: false
    };
  },
  methods: {
    addShirt: function(size) {
      let addShirt = deepclone(this.shirt);
      addShirt.size = size;
      this.$emit("add-shirt", addShirt);
    }
  }
};
</script>

<style lang="scss">
.shirt {
  text-align: center;
  margin: 20px 0;
  &--design {
    width: 200px;
  }
  &--name {
    color: #10a2dc;
  }
  &--overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 35;
    background-color: rgba(255, 255, 255, 0.6);
  }
  &--sizes {
    z-index: 35;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
    &-block {
      position: absolute;
      bottom: 20px;
      left: 27px;
    }
  }
  &--size {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #10a2dc;
    color: #fff;
    font-size: 11px;
    font-weight: 600;
    margin: 10px 0;
    padding-top: 3px;
    &:active {
      transform: scale(0.9);
    }
  }
  &--add-cart,
  &--cart {
    cursor: pointer;
  }
  &--cart {
    min-height: 27px;
  }
  &--add-cart {
    width: 30px;
  }
}
</style>
