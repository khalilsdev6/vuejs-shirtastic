<template>
  <b-col class="shirt" sm="12" md="3" lg="3" xl="3">
    <b-card :style="{ fontFamily: shirt.font }">
      <!-- <div :style="{ 'background-image': 'url(' + require('../assets/'+ shirt.image +'.jpg') + ')', backgroundPosition: 'center center', backgroundSize: 'contain', height: '350px', overflow: 'hidden', position: 'relative', backgroundRepeat: 'no-repeat' }">
        <b-img :src="require('../assets/'+ shirt.graphic)" fluid class="shirt-graphic" />
        <p :style="{ color: shirt.textColor.color }" class="shirt-text">{{ shirt.text }}</p>
      </div> -->
      <b-img class="shirt-design" :src="require('../assets/'+shirt.shirtDesign)"></b-img>
      <h4 class="shirt-name">{{ shirt.name }}</h4>
      <p>{{ shirt.description }}</p>
      <b-row>
        <b-col>
          <b-img class="add-cart" @click="$emit('add-shirt', shirt)" :src="require('../assets/icon-basket.svg')" width="30" alt="Add to cart" />
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
export default {
  name: "shirt",
  props: ["shirt"]
};
</script>

<style lang="scss">
.shirt {
  text-align: center;
  margin: 20px 0;
  .shirt-image {
    width: 300px;
  }
  .shirt-design {
    width: 200px;
  }
  .shirt-graphic {
    position: absolute;
    width: 80px;
    top: 22%;
    left: 33%;
  }
  .shirt-text {
    position: absolute;
    width: 100px;
    top: 50%;
    left: 30%;
    font-size: 12px;
  }
  .shirt-name {
    color: #10a2dc;
  }
  .add-cart {
    &:active {
      transform: scale(0.9);
    }
    cursor: pointer;
  }
}
</style>
