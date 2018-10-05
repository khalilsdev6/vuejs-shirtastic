<template>
    <div class="shirts-container">
        <b-row>
            <Shirt v-for="shirt of shirts" v-bind:key="shirt.id" v-bind:shirt="shirt"></Shirt>
        </b-row>
    </div>
</template>
<script>
import ShirtsData from '../../mock-server/shirts.json';
import Shirt from '@/components/Shirt.vue';
export default {
    data: function() {
        return {
            shirts: ShirtsData.shirts,
        }
    },
    components: { Shirt }
}
</script>
<style lang="scss" scoped>
.shirts-container {
    padding:  0 100px;
}
</style>

