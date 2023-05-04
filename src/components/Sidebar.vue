<template>
  <div class="sidebar items-center justify-between" :style="{ width: sidebarWidth }">
    <div class="flex flex-col items-center ">
      <div
        class="w-[26px] h-[26px] mt-[8px] bg-[#5dcbec] flex rounded-[100%] mb-[8px] text-center justify-center items-center">
        A</div>
      <div class="w-[50px] rounded-[100px] text-center h-[20px] font-medium bg-[#3C7CFC] text-[12px]">Admin</div>

      <div>

        <ItemMenu to="/register">
          <div class="mb-[28px] mt-[24px] flex justify-between ">
            <!-- <div class="w-[3px] h-[30px] bg-[#4FBD9E] flex justify-start"></div> -->
            <ItemMenu to="/">
              <md-icon>grid_view</md-icon>
            </ItemMenu>
          </div>
        </ItemMenu>
        <ItemMenu to="/dashboard">
          <div class="mb-[28px] flex">
            <ItemMenu to="/document">
              <md-icon>description</md-icon>
            </ItemMenu>
          </div>
        </ItemMenu>
        <ItemMenu to="/folder">
          <div class="mb-[28px] flex">
            <ItemMenu to="/folder">
              <md-icon>folder_open</md-icon>
            </ItemMenu>
          </div>
        </ItemMenu>
        <ItemMenu to="/team">
          <div class="mb-[28px] flex">
            <ItemMenu to="/team">
              <md-icon>group</md-icon>
            </ItemMenu>
          </div>
        </ItemMenu>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <vs-tooltip shadow not-hover bottom v-model="activeTooltip1">
        <div class="mb-[18px] flex cursor-pointer" @click="activeTooltip1 = !activeTooltip1">
          <md-icon>settings</md-icon>
        </div>
        <template #tooltip>
          <div class="w-[200px]">
            <div class="flex justify-between items-center  mt-[16px]">
              <div class="text-[16px] font-bold flex justify-center items-center text-[#6B7490]">Setting</div>
              <div
                class="w-[50px] rounded-[100px] flex justify-center items-center h-[20px] font-medium bg-[#3C7CFC] text-[12px] text-white">
                Admin</div>
            </div>
            <div>
              <hr>
            </div>
            <div>
                <div class="flex hover:bg-sky-100 cursor-pointer rounded-[5px]" @click="routToPage('/setting/profile')">
                  <div><md-icon>person</md-icon></div>
                  <div class="flex justify-center items-center ml-[8px] text-[#6B7490]">Profile</div>
                </div>
              <div class="flex mt-[16px] hover:bg-sky-100 cursor-pointer rounded-[5px] " @click="routToPage('/setting/plan-editor')">
                <div><md-icon>article</md-icon></div>
                <div class="flex justify-center items-center ml-[8px] text-[#6B7490] " >Plan Editor</div>
              </div>
              <div class="flex mt-[16px] hover:bg-sky-100 rounded-[5px] cursor-pointer" @click="routToPage('/setting/user-manage')">
                <div><md-icon>manage_accounts</md-icon></div>
                <div class="flex justify-center items-center ml-[8px]  text-[#6B7490]">User Management</div>
              </div>
              <div class="flex mt-[16px] mb-[16px] hover:bg-sky-100 cursor-pointer rounded-[5px]" @click="routToPage('/setting/notification')">
                <div><md-icon>notifications</md-icon></div>
                <div class="flex justify-center items-center ml-[8px] text-[#6B7490]">Notification</div>
              </div>
            </div>
          </div>
        </template>
      </vs-tooltip>
      <div class="mb-[18px] flex">
        <ItemMenu to="/login">
          <md-icon>logout</md-icon>
        </ItemMenu>
      </div>
    </div>
  </div>
</template>

<script>
import ItemMenu from './ItemMenu'
import { sidebarWidth } from './state'
import router from '@/router'

export default {
  props: {},
  components: {
    ItemMenu,

  },
  data() {
    return {
      sidebarWidth,
      activeTooltip1: false
    }
  },
  methods: {
    routToPage(Url) {
      this.$router.push({path: Url});
      this.activeTooltip1 = false
    }  
    
  }
}
</script>

<style>
:root {
  --sidebar-item-hover: #38a169;
  --sidebar-item-active: #276749;
}
</style>

<style scoped>
.sidebar {
  color: #F8F8F8;
  background-color: #F8F8F8;
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
}
</style>
