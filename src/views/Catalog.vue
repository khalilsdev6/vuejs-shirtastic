<template>
    <div id="catalog">
      <Header v-bind:cartItem="cartItem"></Header>
      <Tabs v-bind:tabs="tabs" :currentTab="currentTab" @handleTabChange="currentTab=$event" :totalDesigns="totalDesigns"/>
      <Shirts :currentSelection="currentTab"/>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Tabs from '@/components/Tabs.vue';
import Shirts from '@/components/Shirts.vue';

export default {
  name: 'catalog',
  data: function() {
    return {
      cartItem: 0,
      tabs: [
        { id: 1, text: 'All Designs'},
        { id: 2, text: 'Men'},
        { id: 3, text: 'Women'},
      ],
      currentTab: 1,
      totalDesigns: 8,
    }
  },
  components: { Header, Tabs, Shirts  }
};
</script>

<style lang="scss">
  
  #catalog {
    background-color: inherit;
  }
</style>
