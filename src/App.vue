<template>
  <div>
    <div :style="{ 'margin-left': sidebarWidth }"><Toolbar/></div>
    <Sidebar />
    <div class=" border-[#E9EEF6]" :style="{ 'margin-left': sidebarWidth}">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Toolbar from './components/Toolbar.vue';
import { sidebarWidth,toolbarHeight } from '@/components/state'
export default {
  components: { Sidebar,Toolbar },
  setup() {
    return { sidebarWidth,toolbarHeight }
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
body{
  background-color: #E9EEF6 !important;
}
</style>
