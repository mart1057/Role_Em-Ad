<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Login from '@/views/login-register/Login'
export default {
  components:{
    Login,
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
