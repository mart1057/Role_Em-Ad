<template>
  <div id="app">
    <nav>
      <HeaderBar></HeaderBar>
      <Navbar></Navbar>
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
    </nav>
    <router-view/>
  </div>
</template>

<script>
import Login from '@/views/login-register/Login'
import Navbar from './components/Navbar.vue';
import HeaderBar from '@/components/HeaderBar'
export default {
  components:{
    Login,
    Navbar,
    HeaderBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai');
#app {
  font-family: 'IBM Plex Sans Thai', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
