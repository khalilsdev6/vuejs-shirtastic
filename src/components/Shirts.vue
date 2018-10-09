<template>
    <div class="shirts-container">
        <b-row>
            <Shirt
            v-for="shirt of shirts"
            v-bind:key="shirt.id"
            v-bind:shirt="shirt"
            @add-shirt="$emit('add-shirt', $event)"
            />
        </b-row>
    </div>
</template>
<script>
import ShirtsData from "../../mock-server/shirts.json";
import Shirt from "@/components/Shirt.vue";
export default {
  props: ["currentSelection"],
  data: function() {
    return {
      shirts: ShirtsData.shirts
    };
  },
  watch: {
    currentSelection: function(newGender) {
      if (newGender === "N") {
        this.shirts = ShirtsData.shirts;
      } else {
        this.shirts = ShirtsData.shirts.filter(
          shirt => shirt.gender === newGender
        );
      }
      this.$emit("total-designs", this.shirts.length);
    }
  },
  components: { Shirt }
};
</script>
<style lang="scss" scoped>
.shirts-container {
  padding: 0 100px;
}
</style>

