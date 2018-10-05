<template>
    <div>
        <b-navbar class="navbar-container" toggleable="md" type="light" variant="light">
        <!-- <b-navbar-toggle target="nav_collapse"></b-navbar-toggle> -->
            <b-navbar-brand href="#">
                <b-img class="navbar-image" :src="require('../assets/navlogo.png')" fluid alt="Logo" />  
            </b-navbar-brand>
            <!-- <b-collapse is-nav id="nav_collapse"> -->
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-img class="cart-image" :src="require('../assets/icon-basket.svg')" fluid alt="cart"/>
                <b-badge href="#" variant="primary" pill class="cart-badge">{{ cartItem }}</b-badge>
            </b-navbar-nav>
        <!-- </b-collapse> -->
        </b-navbar>
    </div>
</template>

<script>
export default {
  name: 'app-header',
  props: {
      cartItem: 0,
  }
};
</script>

<style scoped lang="scss">
  .navbar-container {
    box-shadow: 0 0 10px 2px #ccc;
  }
  .navbar-image {
    width: 250px;
    height: auto;
  }
  .cart-image {
    width: 30px;
    height: auto;
  }
  .cart-badge {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 0 10px;
    background-color: #11a2dc;
    padding: 10px 0;
    transition: 0.2s all linear;
    &:hover {
    background-color: #0b83b3;
    } 
  }
</style>
