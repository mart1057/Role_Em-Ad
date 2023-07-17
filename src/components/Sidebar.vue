<template>
  <div class="sidebar items-center justify-between" :style="{ width: sidebarWidth }">
    <div class="flex flex-col items-center ">
      <div class="w-[26px] h-[26px] mb-[8px] rounded-[100px] overflow-hidden flex justify-center items-center">
        <img :src="$store.state.userInfo.filePath" alt="">
      </div>
      <div
        class="w-[auto] rounded-[100px] pl-[5px] pr-[5px] text-center flex justify-center items-center h-[20px] font-medium bg-[#3C7CFC] text-[12px]">
        {{ $store.state.userDetail.role.name }}</div>
      <div>
        <ItemMenu to="/register">
          <div class="mb-[28px] mt-[24px] flex justify-between ">
            <!-- <div class="w-[3px] h-[30px] bg-[#4FBD9E] flex justify-start"></div> -->
            <ItemMenu to="/">
              <md-icon>grid_view</md-icon>
            </ItemMenu>
          </div>

        </ItemMenu>

        <div v-if="$store.state.userDetail.role.name == 'Employee'">
          <vs-tooltip shadow not-hover bottom v-model="openCreateProject">
          <div class="mb-[28px] flex cursor-pointer"
            @click="$store.state.role_perrmission.projectView == true ? openCreateProject = !openCreateProject : null, getProject()">
            <md-icon>description</md-icon>
            
          </div>
          <template #tooltip>
            <div class="w-[200px]">
              <div class="flex justify-between items-center  mt-[16px]">
                <div class="text-[16px] font-bold flex justify-center items-center text-[#6B7490]">Project</div>
              </div>
              <div @click="$store.state.role_perrmission.projectCreate == true ? routToCreateProject() : null"
                class="flex w-[100%] h-[100%] border-[1px] border-[#E5EAF6] rounded-[6px] mt-[10px] hover:bg-sky-100 cursor-pointer ">
                <div class="ml-[6px]"><md-icon>folder</md-icon></div>
                <div class="flex justify-center items-center ml-[4px] text-[#6B7490] ">Create Project</div>
              </div>
              <!-- <div
                class="flex w-[100%] h-[100%] border-[1px] border-[#E5EAF6] rounded-[6px] mt-[10px] hover:bg-sky-100 cursor-pointer ">
                <div class="ml-[6px]"><md-icon>folder</md-icon></div>
                <div class="flex justify-center items-center ml-[4px] text-[#6B7490] ">Filter</div>
              </div>
              <div
                class="flex w-[100%] h-[100%] border-[1px] border-[#E5EAF6] rounded-[6px] mt-[10px] hover:bg-sky-100  cursor-pointer">
                <div class="ml-[6px]"><md-icon>folder</md-icon></div>
                <div class="flex justify-center items-center ml-[4px] text-[#6B7490] ">Search</div>
              </div> -->
              <div>
                <hr>
              </div>
              <div>
                <div class="flex hover:bg-sky-100 cursor-pointer rounded-[6px] mb-[10px]" @click="routTo()">
                  <div><md-icon>star_outline</md-icon></div>
                  <div class="flex justify-center items-center ml-[4px] text-[#6B7490] ">Favorite Document</div>
                </div>
                <div>
                  <div class="flex justify-between hover:bg-sky-100 cursor-pointer rounded-[6px] mb-[10px]"
                    v-for="data in projects">
                    <div @click="reloadRout(data.id, data.attributes.projectName)">
                      <div class="flex">
                        <div><md-icon>description</md-icon></div>
                        <div class="flex justify-center items-center ml-[4px] text-[#6B7490]">{{
                          data.attributes.projectName }}</div>
                      </div>
                    </div>
                    <vs-tooltip right shadow not-hover>
                      <div class="cursor-pointer" @click="$store.state.role_perrmission.projectDelete ? activeTooltip1 = true : null">
                        <md-icon>more_vert</md-icon>
                      </div>
                      <template #tooltip>
                        <div class="flex m-[10px] hover:bg-sky-100 cursor-pointer">
                          <div><md-icon>delete</md-icon></div>
                          <div class="flex justify-center items-center ml-[4px] text-[#6B7490] font-bold">Delete</div>
                        </div>
                      </template>
                    </vs-tooltip>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </vs-tooltip>
        <!-- <ItemMenu to="/dashboard">
          <div class="mb-[28px] flex">
            <ItemMenu to="/document">
              <md-icon>description</md-icon>
            </ItemMenu>
          </div>
        </ItemMenu> -->
        <ItemMenu to="/folder">
          <div class="mb-[28px] flex">
            <ItemMenu :to="$store.state.role_perrmission.folderView ? '/folder' : ''">
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
    </div>
    <div class="flex flex-col items-center">
      <vs-tooltip shadow not-hover bottom v-model="openSetting">
        <div class="mb-[18px] flex cursor-pointer" @click="openSetting = !openSetting">
          <md-icon>settings</md-icon>
        </div>
        <template #tooltip>
          <div class="w-[200px]">
            <div class="flex justify-between items-center  mt-[16px]">
              <div class="text-[16px] font-bold flex justify-center items-center text-[#6B7490]">Setting</div>
              <div
                class="w-[auto] rounded-[100px] flex justify-center items-center pl-[10px] pr-[10px] h-[20px] font-medium bg-[#3C7CFC] text-[12px] text-white">
                {{ $store.state.userDetail.role.name }}</div>
            </div>
            <div>
              <hr>
            </div>
            <div>
              <div class="flex hover:bg-sky-100 cursor-pointer rounded-[5px]" @click="routToPage('/setting/profile')">
                <div><md-icon>person</md-icon></div>
                <div class="flex justify-center items-center ml-[8px] text-[#6B7490]">Profile</div>
              </div>
              <div class="flex mt-[16px] hover:bg-sky-100 cursor-pointer rounded-[5px] "
                @click="routToPage('/setting/plan-editor')" v-if="$store.state.userDetail.role.name == 'Admin'">
                <div><md-icon>article</md-icon></div>
                <div class="flex justify-center items-center ml-[8px] text-[#6B7490] ">Plan Editor</div>
              </div>
              <div class="flex mt-[16px] hover:bg-sky-100 rounded-[5px] cursor-pointer"
                v-if="$store.state.userDetail.role.name == 'Admin'" @click="routToPage('/setting/user-manage')">
                <div><md-icon>manage_accounts</md-icon></div>
                <div class="flex justify-center items-center ml-[8px]  text-[#6B7490]">User Management</div>
              </div>
              <div class="flex mt-[16px] mb-[16px] hover:bg-sky-100 cursor-pointer rounded-[5px]"
                @click="$store.state.userDetail.role.name == 'Admin' ? routToPage('/setting/notification') : routToPage('/setting/notificationEmployee')">
                <div><md-icon>notifications</md-icon></div>
                <div class="flex justify-center items-center ml-[8px] text-[#6B7490]">Notification</div>
              </div>
              <div class="flex mt-[16px] mb-[16px] hover:bg-sky-100 rounded-[5px] cursor-pointer"
                v-if="$store.state.userDetail.role.name != 'Admin'" @click="routToPage('/setting/document-type')">
                <div><md-icon>text_snippet</md-icon></div>
                <div class="flex justify-center items-center ml-[8px]  text-[#6B7490]">Document Type</div>
              </div>
            </div>
          </div>
        </template>
      </vs-tooltip>
      <div class="mb-[18px] flex cursor-pointer" @click="logoutTo()">
        <md-icon>logout</md-icon>
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
  mounted() {
    this.getProject()
  },
  data() {
    return {
      sidebarWidth,
      openSetting: false,
      openCreateProject: true,
      activeTooltip1: false,
      projects: []
    }
  },
  methods: {
    routToPage(Url) {
      this.$router.push({ path: Url });
      this.openSetting = false
    },
    clearLocalDtorage() {
      localStorage.clear()
    },
    reload() {
      window.location.reload()
    },
    async logoutTo() {
      await this.clearLocalDtorage()
      await this.reload()
      setTimeout(() => {
        router.push('/')
      }, 500)


    },
    routTo() {
      router.push({
        path: '/document',
        query: { favorte: true, name: 'Favorite Documents' },

      })
      window.location.reload()
    },
    routToCreateProject() {
      router.push({
        path: '/document',
        query: { create: true },
      })
      window.location.reload()
    },
    getProject() {
      fetch('http://27.254.144.88:1337/api' + '/projects?populate=*')
        .then(response => response.json())
        .then((resp) => {
          const arr = []
          arr.push(resp.data)
          this.projects = arr[0]
        })
    },
    reloadRout(id, nameProject) {
      router.push({
        path: '/document',
        query: { project: id, name: nameProject },
      })
      window.location.reload()
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
