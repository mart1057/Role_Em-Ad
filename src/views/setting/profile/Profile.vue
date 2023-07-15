<template>
    <div class="h-[100%] bg-white m-[10px] rounded-[10px]">
        <div class="p-[20px]">
            <div>
                <div class="text-[20px] font-bold">My Profile</div>
                <div class="flex mt-[14px]">
                    <div class="flex justify-between w-[100%]">
                        <div class="flex">
                            <div @click="tab = true"
                                class="cursor-pointer text-[#6B7490] text-[18px] h-[38px]  flex justify-center items-end"
                                :class="tab ? 'changeTab' : ''">My Profile</div>
                            <div class="ml-[14px] cursor-pointer h-[38px] text-[#6B7490] text-[18px] flex justify-center items-end"
                                :class="tab ? '' : 'changeTab'" @click="tab = false">
                                Singnature</div>
                        </div>
                    </div>

                </div>
                <div class="border-b-2 w-[100%]"></div>
            </div>
            <div class="mt-[18px]" v-if="tab == true">
                <div class="flex flex-col justify-center items-center">
                    <div class="flex flex-col justify-center items-center">
                        <input type="file" ref="file" id="upload" hidden @change="showImagePreview($event)"
                            accept="image/*" />
                        <label class="flex cursor-pointer" for="upload">
                            <div v-if="preview != null" class="w-[110px] h-[110px] rounded-[100px] overflow-hidden flex justify-center items-center">
                                <img  :src="preview"
                                    alt="">
                            </div>
                            <div v-else
                                class="w-[110px] h-[110px] rounded-[100px] bg-[#7C94D2] text-white flex justify-center items-center font-bold">
                                Company</div>
                        </label>
                    </div>
                    <div
                        class="w-[auto] rounded-[100px] pl-[5px] pr-[5px] text-center flex justify-center items-center h-[20px] font-medium bg-[#3C7CFC] text-[12px] text-white mt-[15px]">
                        Owner</div>
                </div>
                <div class="grid grid-cols-4 w-[100%] gap-4 mt-[25px]">
                    <div>
                        <div class="text-[12px] font-bold">First name</div>
                        <div class="mt-[8px]"><input class="w-[100%] h-[38px]" v-model="dataProfile.first_name" /></div>
                    </div>
                    <div>
                        <div class="text-[12px] font-bold">Last name</div>
                        <div class="mt-[8px]"><input class="w-[100%] h-[38px]" v-model="dataProfile.last_name" /></div>
                    </div>
                    <div>
                        <div class="text-[12px] font-bold">Email address</div>
                        <div class="mt-[8px]"><input class="w-[100%] h-[38px]" v-model="dataProfile.email" /></div>
                    </div>
                    <div>
                        <div class="text-[12px] font-bold">Phone number</div>
                        <div class="mt-[8px]"><input class="w-[100%] h-[38px]" v-model="dataProfile.phone" /></div>
                    </div>
                    <div class="col-span-2">
                        <div class="text-[12px] font-bold">Organization name</div>
                        <select class="mt-[8px] select-opt w-[100%] h-[38px] rounded-[6px]"
                            v-model="dataProfile.organization">
                            <option disabled value="">Select...</option>
                            <option v-for="(data, i) in org" :value="data.id">{{ data.attributes.orgName }}</option>
                        </select>
                    </div>
                    <div>
                        <div class="text-[12px] font-bold">Role</div>
                        <div class="mt-[8px]">
                            <select class=" select-opt w-[100%] h-[38px] rounded-[6px]" v-model="dataProfile.role">
                                <option disabled value="">Select...</option>
                                <option v-for="(data, i) in role" :value="data.id">{{ data.attributes.orgRoleName }}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div class="text-[12px] font-bold">Team</div>
                        <div class="mt-[8px]">
                            <select class=" select-opt w-[100%] h-[38px] rounded-[6px]" v-model="dataProfile.team">
                                <option disabled value="">Select...</option>
                                <option v-for="(data, i) in team" :value="data.id">{{ data.attributes.teamName }}</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-span-3">
                        <div class="text-[12px] font-bold">Address</div>
                        <div class="mt-[8px]"><input class="w-[100%] h-[38px]" v-model="dataProfile.address" /></div>
                    </div>
                </div>
                <div class="flex justify-end"><vs-button :loading="loading " @click="editProfile()">Save</vs-button></div>
                <hr />
                <div>
                    <div class="text-[12px] font-bold">Connect your account</div>
                    <div class="grid grid-cols-4 w-[100%] mt-[23px]">
                        <div class="flex justify-between w-[70%] ">
                            <div class="flex">
                                <!-- <img class="mr-[8px] w-[22px] h-[22px] text-center" :src="logo_google" /> -->
                                <div>Google</div>
                            </div>
                            <div
                                class="w-[70px] h-[28px] bg-[#3C7CFC] flex justify-center items-center rounded-[5px] text-white">
                                Connect</div>
                            <div class="border-l-2 h-[35px] mr-[-35px]"></div>
                        </div>

                        <div class="flex justify-between w-[70%] ">
                            <div class="flex">
                                <!-- <img class="mr-[8px] w-[30px] h-[18px] text-center" :src="logo_facebook" /> -->
                                <div>Facebook</div>
                            </div>
                            <div
                                class="w-[70px] h-[28px] bg-[#3C7CFC] flex justify-center items-center rounded-[5px] text-white">
                                Connect</div>
                            <div class="border-l-2 h-[35px] mr-[-35px]"></div>
                        </div>
                        <div class="flex justify-between w-[70%] ">
                            <div class="flex">
                                <!-- <img class="mr-[8px] w-[22px] h-[22px] text-center" :src="logo_google" /> -->
                                <div>Line</div>
                            </div>
                            <div
                                class="w-[70px] h-[28px] bg-[#3C7CFC] flex justify-center items-center rounded-[5px] text-white">
                                Connect</div>

                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div v-else class="mt-[18px]">
                <div class="flex">
                    <div><button class="w-[138px] h-[38px] bg-[#3C7CFC] rounded-[5px] text-[12px] font-bold text-white">Draw
                            your signature</button></div>
                    <vs-tooltip bottom shadow not-hover v-model="UploadSignal">
                        <div><button @click="UploadSignal = true"
                                class="w-[138px] h-[38px] bg-[#3C7CFC] rounded-[5px] text-[12px] font-bold text-white ml-[10px]">
                                <div class="flex justify-between ml-[8px] mr-[8px]">
                                    <div class="flex justify-center items-center">Upload</div>
                                    <div><md-icon style="color: white;">expand_more</md-icon></div>
                                </div>
                            </button></div>
                        <template #tooltip>
                            <div class="m-[10px]">
                                <div class="flex ">
                                    <input type="file" ref="file" id="upload" hidden @change="uploadFile"
                                        accept="image/*" /><label class="flex cursor-pointer" for="upload">
                                        <div><md-icon>upload</md-icon></div>
                                        <div class="flex items-center justify-center ml-[10px]">Upload From Driver
                                        </div>
                                    </label>
                                </div>
                                <div class="flex mt-[10px] cursor-pointer">
                                    <div><md-icon>document_scanner</md-icon></div>
                                    <div class="flex items-center justify-center  ml-[10px]">Upload With Scan </div>
                                </div>
                            </div>
                        </template>
                    </vs-tooltip>
                </div>
                <div>
                    <div class="w-[250px] h-[120px] border-[1px] rounded-[5px] mt-[15px] " v-for="(file, i) in filePng"
                        :key="i" :class="picked == i ? 'border-[#3C7CFC]' : 'border-[#E5EAF6]'">
                        <div class="flex justify-end mt-[8px]">
                            <spn class="flex justify-center items-center mt-[-3px] mr-[4px] text-[12px] text-[#3C7CFC]">{{
                                picked == i ? 'Default' : 'Set to default' }}</spn>
                            <vs-radio color="#3C7CFC" v-model="picked" @click="setDefulatSignal(tr.id, i)"
                                :val="i"></vs-radio>
                        </div>
                        <div class="mt-[10px] text-[12px] font-semibold text-[#3C7CFC] ml-[10px]">{{
                            file.attributes.signatureName }}</div>
                        <div class="text-[10px] text-[#6B7490] mt-[2px] ml-[10px]">{{ file.attributes.fileSize }} KB</div>
                        <div class="flex justify-between mt-[8px] ml-[8px] mr-[8px]">
                            <div class="flex">
                                <div><md-icon>download</md-icon></div>
                                <div class="text-[10px] text-[#6B7490] flex justify-center items-center">Download</div>
                            </div>
                            <div class="flex cursor-pointer" @click="deleteSignature(file.id)">
                                <div><md-icon>delete_outline</md-icon></div>
                                <div class="text-[10px] text-[#6B7490] flex justify-center items-center">Delete file</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import logo_facebook from '@/assets/image/facebook2.png'
import logo_google from '@/assets/image/logo_google.png'
import axios from 'axios'
export default {
    data() {
        return {
            logo_google,
            tab: true,
            logo_facebook,
            UploadSignal: false,
            popupInvite: false,
            allCheck: false,
            filePng: [],
            selected: [],
            picked: 1,
            page: 1,
            max: 10,
            org: [],
            team: [],
            role: [],
            dataProfile: {
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                organization: '',
                role: '',
                role_name: '',
                team: '',
                address: ''
            },
            imgTest: '',
            preview: null,
            imgInput: null,
            loading : false
        }

    },
    mounted() {
        this.getProfile()
        this.getTeam()
        this.getOrg()
        this.getRole()
        this.getSignalLits()
    },
    methods: {
        uploadFile() {
            this.file = this.$refs.file.files[0];
            let formData = new FormData();
            formData.append('files', this.file);
            axios.post('http://27.254.144.88:1337/api' + '/upload',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then((resp) => {
                console.log(resp.data[0].url);
                axios.post('http://27.254.144.88:1337/api' + '/signatures', {
                    "data": {
                        "signatureName": resp.data[0].name,
                        "id_user": this.$store.state.userInfo.id,
                        "filePath": 'http://27.254.144.88:1337' + resp.data[0].url,
                        "default": true,
                        "fileSize": resp.data[0].size
                    }
                })
                setTimeout(() => {
                    this.getSignalLits()
                }, 500)
            })
                .catch(function () {
                    console.log('FAILURE!!');
                });
        },
        getSignalLits() {
            this.filePng = []
            fetch('http://27.254.144.88:1337/api' + '/signatures?filters[id_user][$eq]='+ this.$store.state.userInfo.id)
                .then(response => response.json())
                .then((resp) => {
                    console.log(resp);
                    const arr = []
                    arr.push(resp.data)
                    this.filePng = arr[0]
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
        getOrg() {
            fetch('http://27.254.144.88:1337/api' + '/organizations?filters[id][$eq]=' + this.$store.state.userDetail.organization.id + '&populate=*')
                .then(response => response.json())
                .then((resp) => {
                    const arr = []
                    arr.push(resp.data)
                    this.org = arr[0]
                })
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
        getProfile() {
            // api ยังไม่ส่งรูปมา
            fetch('http://27.254.144.88:1337/api' + '/users/' + this.$store.state.userInfo.id + '?populate=*')
                .then(response => response.json())
                .then((resp) => {
                    console.log(resp);
                    this.dataProfile.first_name = resp.firstName
                    this.dataProfile.last_name = resp.lastName
                    this.dataProfile.email = resp.email
                    this.dataProfile.organization = resp.organization?.id
                    this.dataProfile.role = resp.org_role?.id
                    this.dataProfile.role_name = resp.org_role?.orgRoleName
                    this.dataProfile.phone = resp.phone
                    this.dataProfile.team = resp.team?.id
                    this.dataProfile.address = resp.address
                    this.preview = resp.filePath
                    console.log(this.dataProfile.team);
                })
        },
        editProfile() {
            this.loading = true
            let formData = new FormData();
            formData.append('files', this.imgInput);
            axios.post('http://27.254.144.88:1337/api' + '/upload',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }).then((resp) => {
                    axios.put('http://27.254.144.88:1337/api' + '/users/' + this.$store.state.userInfo.id, {
                        "filePath": 'http://27.254.144.88:1337' + resp.data[0].url,
                        
                    })
                    this.$store.state.userInfo.filePath  = 'http://27.254.144.88:1337' + resp.data[0].url
                }).finally(() => {
                    axios.put('http://27.254.144.88:1337/api' + '/users/' + this.$store.state.userInfo.id, {
                        "email": this.dataProfile.email,
                        "firstName": this.dataProfile.first_name,
                        "lastName": this.dataProfile.last_name,
                        "phone": this.dataProfile.phone,
                        "address": this.dataProfile.address,
                        "org_role": this.dataProfile.role,
                        "organization": this.dataProfile.organization,
                        "team": this.dataProfile.team
                    })
                   
                    setTimeout(() => {
                        this.loading = false
                    }, 500)
                })
            // axios.put('http://27.254.144.88:1337/api' + '/users/'+this.$store.state.userInfo.id, {
            //         "email": this.dataProfile.email,
            //         "firstName": this.dataProfile.first_name,
            //         "lastName": this.dataProfile.last_name,
            //         "phone": this.dataProfile.phone,
            //         "address": this.dataProfile.address,
            //         "role": this.dataProfile.role,
            //         "organization": this.dataProfile.organization,
            //         "team": this.dataProfile.team
            // })
        },
        setDefulatSignal(id) {
            axios.put('http://27.254.144.88:1337/api' + '/signatures/' + id, {
                "data": {
                    "default": this.picked,
                }
            })
        },
        deleteSignature(id) {
            axios.delete('http://27.254.144.88:1337/api' + '/signatures/' + id)
            setTimeout(() => {
                this.getSignalLits()
            }, 500)
        },
        showImagePreview(event) {
            this.input = event.target;
            if (this.input.files && this.input.files[0]) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.preview = e.target.result;
                };
                reader.readAsDataURL(this.input.files[0]);
            }
            this.imgInput = this.input.files[0]
            console.log(this.imgInput);
        },

    }
}
</script>
<style scoped>
.changeTab {
    font-weight: bold;
    color: #3C7CFC !important;
}

input[type="search"] {
    padding-left: 32px;
}

input {
    border: solid 1px #E5EAF6;
    border-radius: 6px;
}

.hotfix {
    position: absolute;
    top: 8.3rem;
}
</style>