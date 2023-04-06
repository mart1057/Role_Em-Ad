<template>
  <div class="sidebar items-center justify-between" :style="{ width: sidebarWidth }">
    <div class="flex flex-col items-center ">
      <div class="w-[26px] h-[26px] mt-[8px] bg-[#5dcbec] rounded-[100%] mb-[8px] text-center">A</div>
      <div class="w-[50px] rounded-[100px] text-center h-[20px] font-medium bg-[#3C7CFC] text-[12px]">Owner</div>
      <div>
        <ItemMenu to="/register">
          <div class="mb-[28px] mt-[24px] flex">
            <ItemMenu to="/dashboard">
              <md-icon>grid_view</md-icon>
            </ItemMenu>
          </div>
        </ItemMenu>
        <ItemMenu to="/dashboard">
          <div class="mb-[28px] flex">
            <ItemMenu to="/dashboard">
              <md-icon>description</md-icon>
            </ItemMenu>
          </div>
        </ItemMenu>
        <ItemMenu to="/dashboard">
          <div class="mb-[28px] flex">
            <ItemMenu to="/dashboard">
              <md-icon>folder_open</md-icon>
            </ItemMenu>
          </div>
        </ItemMenu>
        <ItemMenu to="/dashboard">
          <div class="mb-[28px] flex">
            <ItemMenu to="/dashboard">
              <md-icon>group</md-icon>
            </ItemMenu>
          </div>
        </ItemMenu>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="mb-[18px] flex">
        <ItemMenu to="/dashboard">
          <md-icon>settings</md-icon>
        </ItemMenu>
      </div>
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

export default {
  props: {},
  components: {
    ItemMenu,

  },
  setup() {
    return {
      sidebarWidth,
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
