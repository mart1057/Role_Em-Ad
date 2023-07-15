<template>
    <div>
        <b-modal centered v-model="createMainProject" size="xl" hide-backdrop hide-header-close hide-header hide-footer
            hidden-footer>
            <div class="m-20px">
                <div class="flex justify-between">
                    <div class="text-[20px] font-medium">Create Project</div>
                    <div class="cursor-pointer" @click="closePopup()"><md-icon>close</md-icon></div>
                </div>
                <div class="grid grid-cols-2 w-[100%] gap-2 mt-[30px]">
                    <div class="flex">
                        <div>
                            <div class="text-[18px] font-medium">Project Name</div>
                            <div><input class="mt-[8px] w-[424px] h-[38px] rounded-[6px]" v-model="formData.name" /></div>
                            <div v-if="this.errName != ''" class="text-[red] text-[12px]">Please input Project Name</div>
                        </div>
                    </div>
                    <div>
                        <div class="ml-[30px]">
                            <div class="text-[18px] font-medium">Default Document Type</div>
                            <div><select class="mt-[8px] w-[424px] h-[38px] rounded-[6px] select-opt"
                                    v-model="formData.defaultType">
                                    <option disabled value="">Select...</option>
                                    <option v-for="(type, i) in doc_type" :value="type.id">{{
                                        type.attributes.documentTypeName
                                    }}
                                    </option>
                                </select>
                                <div v-if="errDocType" class="text-[red] text-[12px]">{{ errDocType }} </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 w-[100%] gap-2 mt-[30px]">
                    <div class="flex justify-between">
                        <div class="flex justify-center items-center">
                            <div class="text-[18px] font-medium ">Project Members</div>
                        </div>
                        <div class="flex">
                            <div class="flex">
                                <vs-tooltip bottom shadow not-hover v-model="actionAddMember">
                                    <div class="flex">
                                        <div @click="dataMember.length > 0 ? actionAddMember = !actionAddMember : actionAddMember = false"
                                            class="w-[32px]  h-[32px] mt-[8px] bg-[#369C7B] cursor-pointer flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white text-[20px]">
                                            +</div>
                                        <div class="flex justify-center items-center ml-[4px]">Add a member</div>
                                    </div>
                                    <template #tooltip v-if="dataMember.length > 0">
                                        <div v-for="(member, i) in dataMember" :key="i" class="w-[100%]">
                                            <div class="flex cursor-pointer mb-[10px]" @click="addDataMember(member)">
                                                <!-- <div
                                                    class="w-[26px] h-[26px] mt-[8px] bg-[#5dcbec] flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white">
                                                    {{ member.name }}</div> -->
                                                <vs-avatar circle badge-color="green" badge-position="bottom-left"
                                                    v-if="member.img == ''">
                                                    <template #text>
                                                        {{ member.name }}
                                                    </template>
                                                </vs-avatar>
                                                <vs-avatar v-else circle badge-position="bottom-left">
                                                    <img :src="member.img" />
                                                </vs-avatar>
                                                <div class="flex justify-center items-center ml-[12px]">{{ member.name
                                                }}
                                                </div>
                                            </div>
                                            <!-- <div class="border-b-2  border-[#E5EAF6] mr-[10px] "></div> -->
                                        </div>
                                    </template>
                                </vs-tooltip>
                            </div>
                            <div class="border-l-2 h-[45px] ml-[8px] mr-[8px]"></div>
                            <div class="flex">
                                <vs-tooltip bottom shadow not-hover v-model="actionAddMTeam">
                                    <div class="flex">
                                        <div @click="dataTeam.length > 0 ? actionAddMTeam = !actionAddMTeam : actionAddMTeam = false"
                                            class="w-[32px]  h-[32px] mt-[8px] bg-[#369C7B] cursor-pointer flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white text-[20px]">
                                            +</div>
                                        <div class="flex justify-center items-center ml-[4px]">Add a team</div>
                                    </div>
                                    <template #tooltip v-if="dataTeam.length > 0">
                                        <div v-for="(member, i) in dataTeam" :key="i" class="w-[100%]">
                                            <div class="flex cursor-pointer mb-[10px]" @click="addDataTeam(member)">
                                                <!-- <div
                                                    class="w-[26px] h-[26px] mt-[8px] bg-[#5dcbec] flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white">
                                                    {{ member.name }}</div> -->
                                                <!-- <vs-avatar circle badge-color="green" badge-position="bottom-left"
                                                    v-if="member.img == ''">
                                                    <template #text>
                                                        {{ member.name }}
                                                    </template>
                                                </vs-avatar> -->
                                                <!-- <vs-avatar v-else circle badge-position="bottom-left">
                                                    <img :src="member.img" />
                                                </vs-avatar> -->
                                                <div class="flex justify-center items-center ml-[12px]">{{ member.name
                                                }}
                                                </div>
                                            </div>
                                            <!-- <div class="border-b-2  border-[#E5EAF6] mr-[10px] "></div> -->
                                        </div>
                                    </template>
                                </vs-tooltip>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="ml-[30px]">
                            <div class="text-[18px]  font-medium">View Permissions</div>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 w-[100%] gap-2">
                    <div>
                        <div class="pl-[4px] pr-[4px] border-[2px] mb-[8px] border-[#E5EAF6] rounded-[6px] h-[42px]"
                            v-for="(data, i) in formData.addMember">
                            <div class="flex justify-between items-center h-[100%]">
                                <div class="flex">
                                    <img :src="data.img"
                                        class="w-[32px] fix-h flex justify-between items-center  bg-slate-500 rounded-[100%]" />

                                    <div class="flex justify-between items-center ml-[12px]">{{ data.email }}</div>
                                    <div class="flex justify-between items-center ml-[12px]">{{ data.role }} | {{ data.team
                                    }}
                                    </div>
                                    <div class="flex justify-between items-center ml-[12px]"><md-icon>home</md-icon></div>
                                </div>

                                <div class="flex justify-between items-center cursor-pointer"
                                    @click="removeMember(data, i)"><md-icon>close</md-icon></div>
                            </div>
                        </div>
                        <div class="pl-[4px] pr-[4px] border-[2px] mb-[8px] border-[#E5EAF6] rounded-[6px] h-[42px]"
                            v-for="(data, i) in formData.addTeam">
                            <div class="flex justify-between items-center h-[100%]">
                                <div class="flex">
                                    <!-- <div 
                                        class="w-[32px] fix-h flex justify-between items-center  bg-slate-500 rounded-[100%]">Team</div> -->

                                    <div class="flex justify-between items-center ml-[12px] font-medium">Team {{ data.name
                                    }}</div>
                                    <!-- <div class="flex justify-between items-center ml-[12px]">Chief Executive Officer | MKT
                                    </div>
                                    <div class="flex justify-between items-center ml-[12px]"><md-icon>home</md-icon></div> -->
                                </div>

                                <div class="flex justify-between items-center cursor-pointer" @click="removeTeam(data, i)">
                                    <md-icon>close</md-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="ml-[30px] flex justify-start">
                            <vs-radio v-model="formData.viewPermission" :val="true">
                                <div class="text-[12px] font-semibold">View all documents on the project</div>
                            </vs-radio>
                        </div>
                        <div class="ml-[30px] flex justify-start mt-[8px]">
                            <vs-radio v-model="formData.viewPermission" :val="false">
                                <div class="text-[12px] font-semibold">View only documents that are related to users</div>
                            </vs-radio>
                        </div>
                    </div>
                </div>
                <div class="mt-[50px] flex justify-end"><button
                        class="w-[70px] h-[38px] bg-[#3C7CFC] rounded-[5px] text-[12px] font-bold text-white"
                        @click="createProject()">Save</button>
                </div>
            </div>
        </b-modal>
    </div>
</template>
<script>
import router from '@/router'
import axios from 'axios'
export default {
    props: {
        openPopup: { type: Boolean }
    },
    data() {
        return {
            errName:'',
            errDocType:'' ,
            picked: false,
            model: '',
            id_project: '',
            name_project: '',
            createMainProject: false,
            dataMember: [],
            dataTeam: [],
            doc_type: [],
            actionAddMember: false,
            actionAddMTeam: false,
            formData: {
                addMember: [],
                addTeam: [],
                name: '',
                defaultType: '',
                viewPermission: true,
            },
        }
    },
    mounted() {
        this.createMainProject = this.openPopup
        this.getUsers()
        this.getTeam()
        this.fetchDocType()
    },
    methods: {
        closePopup() {
            this.createMainProject = false
            router.push({
                path: '/document?favorte=true&name=Favorite%20Documents',
            })
        },
        fetchDocType() {
            fetch('http://27.254.144.88:1337/api' + '/document-types?populate=*&filters[organization][id][$eq]=' + this.$store.state.userDetail.organization.id)
                .then(response => response.json())
                .then((resp) => {
                    const arr = []
                    arr.push(resp.data)
                    this.doc_type = arr[0]
                })
        },
        getUsers() {
            fetch('http://27.254.144.88:1337/api' + '/users?filters[organization][id][$eq]=' + this.$store.state.userDetail.organization.id + '&populate=*')
                .then(response => response.json())
                .then((resp) => {
                    console.log(resp);
                    resp.forEach((data, i) => {
                        this.dataMember.push({
                            role: data.role.name,
                            name: data.firstName + ' ' + data.lastName,
                            img: data.profilePic == null ? '' : 'http://27.254.144.88:1337' + data.profilePic.url,
                            id: data.id,
                            email: data.email,
                            index: i + 1,
                            team: data.team?.teamName
                        })
                    })
                    console.log(this.dataMember);
                })
        },
        addDataMember(member) {
            this.formData.addMember.push({
                index: this.formData.addMember.length + 1,
                id: member.id,
                name: member.name,
                email: member.email,
                role: member.role,
                img: member.img,
                team: member.team
            })
            this.actionAddMember = false
            this.dataMember = this.dataMember.filter((m) => {
                return m.id != member.id
            })

        },
        removeMember(data, i) {
            this.formData.addMember.splice(i, 1)
            this.dataMember.push(data)
        },
        getTeam() {
            fetch('http://27.254.144.88:1337/api' + '/teams?filters[organization][id][$eq]=' + this.$store.state.userDetail.organization.id + '&populate=*')
                .then(response => response.json())
                .then((resp) => {
                    resp.data.forEach((data, i) => {
                        this.dataTeam.push({
                            name: data.attributes.teamName,
                            id: data.id,
                            index: i + 1,
                        })
                    })
                })
        },
        addDataTeam(member) {
            this.formData.addTeam.push({
                index: this.formData.addTeam.length + 1,
                id: member.id,
                name: member.name,
                email: member.email,
                img: member.img,
            })
            this.actionAddTeam = false
            this.dataTeam = this.dataTeam.filter((m) => {
                return m.id != member.id
            })

        },
        removeTeam(data, i) {
            this.formData.addTeam.splice(i, 1)
            this.dataTeam.push(data)
        },
        createProject() {
            this.errName = ''
            this.errDocType = this.formData.defaultType == ''?'Please select Document Type':''
            const team = this.formData.addTeam.map(item => item.id);
            const member = this.formData.addMember.map(item => item.id)
            team.forEach((team) => {
                fetch('http://27.254.144.88:1337/api' + '/users?filters[organization][id][$eq]=' + this.$store.state.userDetail.organization.id + '&filters[team][id][$eq]=' + team + '&populate=*')
                    .then(response => response.json())
                    .then((resp) => {
                        resp.forEach((data, i) => {
                            console.log(data.id);
                            member.push(
                                data.id,
                            )
                        })
                    })
            })
            setTimeout(() => {
                axios.post('http://27.254.144.88:1337/api' + '/projects', {
                    "data": {
                        "projectName": this.formData.name,
                        "organization": this.$store.state.userDetail.organization.id,
                        // "owner": 1,
                        "member": member,
                        "createBy": this.$store.state.userInfo.id,
                        "teamMember": team,
                        "defaultType": this.formData.defaultType,
                        "viewPermission": this.formData.viewPermission
                    }
                }).then((resp) => {
                    console.log(resp.data.data.id);
                    this.createMainProject = false
                    router.push({
                        path: '/document',
                        query: { project: resp.data.data.id, name: resp.data.data.attributes.projectName },
                    })
                    window.location.reload()
                }).catch((err)=>{
                    this.errName = err.message

                }).finally(() => {
                    this.formData.addMember = [],
                        this.formData.addTeam = [],
                        this.formData.name = '',
                        this.formData.defaultType = '',
                        this.formData.viewPermission = true
                })
            }, 500)

        }
    }
}
</script>
<style>
.fix-h {
    height: 32px !important;
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