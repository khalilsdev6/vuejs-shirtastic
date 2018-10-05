<template>
    <div class="tabs-container">
        <div class="tabs-wrapper">
            <ul class="tabs">
                <li
                  :class="[{active: tab.id == currentTab}, 'genderTab']"
                  v-for="tab of tabs" v-bind:key="tab.id"
                  @click="$emit('handleTabChange', tab.id)"
                >
                    {{ tab.text }}
                </li>
            </ul>
            <div class="total-shirt">
                <p>Showing {{ totalDesigns }} Designs</p>
            </div>
        </div>

    </div>
</template>

<script>
export default {
  name: "tabs",
  props: ["tabs", "currentTab", "totalDesigns"],
};
</script>

<style lang="scss">
.tabs-container {
  padding: 50px 100px 0 100px;
  .tabs-wrapper {
    border-bottom: 2px solid #ccc;
    .tabs {
      display: inline-block;
      margin-bottom: 0;
      padding-left: 0;
      .genderTab {
        display: inline-block;
        margin: 0 25px -2px 0;
        padding: 0 0 15px;
        font-weight: 600;
        color: #ccc;
        min-height: 40px;
        cursor: pointer;
        &.active {
          color: #274686;
          border-bottom:2px solid #274686;
          transition: 0.1s all ease-in-out;
        }
      }
    }
    .total-shirt {
      float: right;
      font-weight: 600;
      color: #555;
    }
  }
}
</style>
