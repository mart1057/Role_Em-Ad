<template>
    <div class="w-[100%] h-[184px] bg-white rounded-[10px]">
        <div class="p-[20px]">
            <div class="text-[20px] font-bold">User</div>
            <div>
                <div class="flex mt-[20px]">
                    <div @click="changeTab(true), checkTab = true" class="cursor-pointer"
                        :class="checkTab ? 'selectTab' : ''">
                        Employee</div>
                    <div class="ml-[10px] cursor-pointer" :class="checkTab ? '' : 'selectTab'"
                        @click="changeTab(false), checkTab = false">Organization</div>
                </div>
                <div class="border-t-2"></div>
                <div class="flex justify-between mt-[10px]">
                    <div class="flex">
                        <div class="mr-[20px]">
                            <div class="font-bold text-[14px] mb-[4px]">Team</div>
                            <select class=" select-opt w-[321px] h-[38px] rounded-[6px]" @input="filterUser()"
                                v-model="filterTeam">
                                <option value="">All</option>
                                <option v-for="data in team" :value="data.id">{{ data.attributes.teamName }}</option>
                            </select>
                        </div>
                        <div class="mr-[20px]">
                            <div class="font-bold text-[14px] mb-[4px]">Role</div>
                            <select class=" select-opt w-[321px] h-[38px] rounded-[6px]" @input="filterUser()"
                                v-model="filterRole">
                                <option value="">All</option>
                                <option v-for="data in role" :value="data.id">{{ data.attributes.orgRoleName }}</option>
                            </select>
                        </div>
                        <div class="flex justify-center items-end "><vs-button relief active
                                @click="createTeamPopup = true">
                                Create Team
                            </vs-button></div>
                    </div>
                    <div>
                        <input type="search" class="input_br w-[230px] h-[38px] rounded-[6px]" placeholder="Search"
                            v-model="filterSearch" @input="handleSearch">
                        <div class="flex hotfix">
                            <div class="mt-[-2px]"><md-icon>search</md-icon> </div>
                            <div class="border-l-2 h-[21px] border-[#6B7490] "></div>
                        </div>
                    </div>
                </div>
                <vs-dialog width="300px" v-model="createTeamPopup" not-close>
                    <template #header>
                        <h4 class="not-margin">
                            Create Team
                        </h4>
                    </template>
                    <div class="flex justify-center items-center">
                        <input class=" border-2  w-[100%] h-[40px] rounded-[10px] " v-model="nameTeam"
                            placeholder="Name team" />
                    </div>
                    <div class="flex  items-center mt-[20px] justify-between ">
                        <button class="bg-[#f34814] w-[80px] h-[40px] text-white rounded-[10px]"
                            @click="createTeamPopup = !createTeamPopup">Cancle</button>
                        <button class="bg-[#2a18d1] w-[80px] h-[40px] text-white rounded-[10px] "
                            @click="createTeam()">Save</button>
                    </div>
                </vs-dialog>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            nameTeam: '',
            createTeamPopup: false,
            checkTab: true,
            team: [],
            role: [],
            filterRole: '',
            filterTeam: '',
            filterSearch: '',
            timer: null
        }
    },
    mounted() {
        this.getTeam()
        this.getRole()
        this.filterUser(this.filterSearch)
    },
    methods: {
        changeTab(a) {
            this.$emit('changeTab', a)
        },

        getTeam() {
            fetch('http://27.254.144.88:1337/api' + '/teams?populate=*&filters[organization][id][$eq]=' + this.$store.state.userDetail.organization.id)
                .then(response => response.json())
                .then((resp) => {
                    const arr = []
                    arr.push(resp.data)
                    this.team = arr[0]
                })
        },
        getRole() {
            fetch('http://27.254.144.88:1337/api' + '/org-roles?filters[organization][id][$eq]=' + this.$store.state.userDetail.organization.id + '&populate=*')
                .then(response => response.json())
                .then((resp) => {
                    const arr = []
                    arr.push(resp.data)
                    this.role = arr[0]
                })
        },
        filterUser(search) {
            setTimeout(() => {
                console.log('role', this.filterRole);
                console.log('team', this.filterTeam);
                this.$emit('filterUser', this.filterRole, this.filterTeam, search)
            }, 200)

        },
        handleSearch() {
            clearTimeout(this.timer); // Clear the previous timer if it exists
            this.timer = setTimeout(() => {
                this.filterUser(this.filterSearch);
            }, 200);
        },
        createTeam() {
            if (this.nameTeam != '') {
                axios.post('http://27.254.144.88:1337/api' + '/teams', {
                    "data": {
                        "teamName": this.nameTeam,
                        "organization": this.$store.state.userDetail.organization.id,
                    }
                })
                    .then(() => {
                        this.getTeam()
                        this.createTeamPopup = false
                    })
                    .catch(function (error) {

                    });
                this.nameTeam = ''

            }

        }
    },
    watch: {
        filterSearch(newTerm) {
            clearTimeout(this.timer); // Clear the previous timer if it exists
            this.timer = setTimeout(() => {
                this.filterUser(newTerm);
            }, 200);
        }
    },
}
</script>
<style scoped>
.hotfix {
    position: absolute;
    top: 11.4rem;
}

input[type="search"] {
    padding-left: 32px;
}

input {
    border: solid 1px #E5EAF6;
    border-radius: 6px;
}

.select-opt,
textarea {
    border: solid 1px #E5EAF6;
}

.selectTab {
    font-size: 18px;
    font-weight: bold;


}
</style>