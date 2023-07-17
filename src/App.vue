<template>
  <div>
    <div v-if="$store.state.is_login" id="app">
      <div v-if="$store.state.userDetail.role.name == 'Admin'">
        <div :style="{ 'margin-left': sidebarWidth }">
          <Toolbar />
        </div>
        <Sidebar />
        <div class=" border-[#E9EEF6]" :style="{ 'margin-left': sidebarWidth }">
          <router-view />
        </div>
      </div>
      <div v-else>
        <div v-if="$store.state.userDetail.expStatus == true">
          <div :style="{ 'margin-left': sidebarWidth }">
            <Toolbar />
          </div>
          <Sidebar />
          <div class=" border-[#E9EEF6]" :style="{ 'margin-left': sidebarWidth }">
            <router-view />
          </div>
        </div>
        <div v-else>
          <Plan />
        </div>
      </div>
    </div>
    <div v-if="!$store.state.is_login">
      <Login />
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';
import Toolbar from './components/Toolbar.vue';
import { sidebarWidth, toolbarHeight } from '@/components/state'
import Login from '@/views/login-register/Login.vue'
import Plan from './views/setting/plans/Plan.vue';
export default {
  components: { Sidebar, Toolbar, Login, Plan },
  setup() {
    return { sidebarWidth, toolbarHeight, }
  },
  data() {

  },
  created() {
    console.log(this.$store.state.userDetail);
    if (this.$store.state.userDetail.org_role.id) {
      this.$store.dispatch('rolePerrmission', this.$store.state.userDetail.org_role.id)
    }

    // if(this.$store.state.token == ''){
    //   window.location.replace("/")

    // }
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
  min-height: 100vh;
  background-color: #E9EEF6;
}

body {}
</style>
