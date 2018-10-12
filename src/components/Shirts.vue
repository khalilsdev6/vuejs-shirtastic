<template>
  <div class="shirts-container">
    <b-row v-if="!!shirtsData.length">
      <Shirt
        v-for="shirt of shirtsData"
        v-bind:key="shirt.id"
        v-bind:shirt="shirt"
        @add-shirt="$emit('add-shirt', $event)"
      />
    </b-row>
  </div>
</template>
<script>
import Shirt from "@/components/Shirt.vue";

export default {
  props: ["currentSelection", "shirts"],
  data: function() {
    return {
      shirtsData: this.shirts
    };
  },
  mounted: function() {
    this.$emit('total-designs', this.shirtsData.length);
  },
  watch: {
    currentSelection: function(newGender) {
      if (newGender === "N") {
        this.shirtsData = this.shirts;
      } else {
        this.shirtsData = this.shirts.filter(
          shirt => shirt.gender === newGender
        );
      }
      this.$emit("total-designs", this.shirtsData.length);
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