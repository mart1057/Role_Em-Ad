<template>
    <div class="flex w-[100%] h-[100%]">
        <div class="w-[15%] flex flex-col bg-[#F3F6FB] h-[50vw]">
            <vs-tooltip bottom shadow not-hover v-model="openCreateFolder">
                <div class="flex h-[60px] justify-center items-center" @click="openCreateFolder = !openCreateFolder">
                    <div class="ml-[14px] text-[16px] font-bold cursor-pointer">My Folder</div>
                    <div><md-icon>expand_more</md-icon></div>
                </div>
                <template #tooltip>
                    <div class="m-[15px]">
                        <div class="flex cursor-pointer hover:bg-sky-100 rounded-[5px]"
                            @click="$store.state.role_perrmission.folderCreate ? createFolderPopup = !createFolderPopup : null">
                            <div><md-icon>create_new_folder</md-icon></div>
                            <div class="flex justify-center items-center ml-[8px] ">Create Folder</div>
                        </div>
                        <div class="border-b-2 w-[100%] mt-[8px] mb-[8px]"></div>
                        <div class="flex cursor-pointer hover:bg-sky-100 rounded-[5px]">
                            <div><md-icon>drive_folder_upload</md-icon></div>
                            <div class="flex justify-center items-center ml-[8px]">Upload Folder</div>
                        </div>
                        <div class="flex mt-[8px] cursor-pointer hover:bg-sky-100 rounded-[5px]">
                            <div><md-icon>upload_file</md-icon></div>
                            <div class="flex justify-center items-center ml-[8px]">Upload Document</div>
                        </div>
                    </div>
                </template>
            </vs-tooltip>
            <div class="flex flex-col justify-center m-[14px]">
                <div class="flex mb-[10px] items-center cursor-pointer hover:bg-sky-100 rounded-[5px]" :class="i == tabFolder ? 'bg-sky-100':'' "
                    v-for="(folder, i) in myFolder" :key="folder.id" @click="getDocList(folder.id,folder.attributes.folderName ),tabFolder = i">
                    <div><md-icon>folder_open</md-icon></div>
                    <div class="ml-[4px]">{{ folder.attributes.folderName }}</div>
                </div>
            </div>
        </div>
        <div class="w-[85%] h-[100%] test2">
            <div class="flex h-[60px] bg-[#E9EEF6] items-center pl-[20px]">
                <div class="cursor-pointer"><md-icon>arrow_back_ios</md-icon></div>
                <div class="cursor-pointer"><md-icon>arrow_forward_ios</md-icon></div>
                <div class="ml-[14px] text-[16px] font-bold">{{ showNameFolder  }}</div>
            </div>
            <div class="w-[100%] flex">
                <div class="w-[25%] h-[60vw] bg-[white] test">
                    <div class="flex items-center justify-between m-[14px] cursor-pointer hover:bg-sky-100 rounded-[5px]" :class="i == tabDoc? 'bg-sky-100':'' "
                        v-for="(tr, i) in items" :data="tr" @click="getFileList(tr.id),tabDoc = i">
                        <div class="flex">
                            <div class="flex items-center justify-center"><md-icon>folder_open</md-icon></div>
                            <div class="flex items-center justify-center ml-[4px]">{{ tr.attributes.docName }}</div>
                        </div>
                        <div class="flex items-center justify-center">
                            <md-icon>chevron_right</md-icon>
                        </div>
                    </div>
                </div>
                <div class="w-[25%] bg-[white] test">
                    <div class="flex items-center  m-[14px] cursor-pointer rounded-[5px]" v-for="(tr, i) in files" :data="tr" :class="i == tabFile ? 'bg-sky-100':'' "
                        @click="getFileDetail(tr.id),tabFile = i">
                        <div class="flex">
                            <div class="flex items-center justify-center"><md-icon>picture_as_pdf</md-icon></div>
                            <div class="flex items-center justify-center ml-[4px]">{{ tr.attributes.fileName }}</div>
                        </div>
                    </div>
                </div>
                <div class="w-[50%] bg-[white]">
                    <div class="w-[auto] h-[auto] m-[10px] rounded-[10px] border-2" v-if="fileDetail != null">
                        <div class="flex justify-center items-center w-[100%]">
                            <vue-pdf-embed :source="fileDetail.attributes.filePath" />
                            <!-- <img :src="fileDetail.attributes.filePath" class="w-[50%] fix-img pt-[10px]
                            pb-[10px]"/> -->
                        </div>
                    </div>
                    <div class="m-[10px]" v-if="fileDetail != null">
                        <div class="text-[16px] font-bold">{{ fileDetail.attributes.fileName }}</div>
                        <div class="test-[12px] text-[#6B7490]">PDF Document - {{ fileDetail.attributes.fileSize }} KB</div>
                        <div class="test-[12px] text-[#6B7490]">Created - {{ covertDate(fileDetail.attributes.createdAt) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <vs-dialog width="300px" v-model="createFolderPopup" not-close>
            <template #header>
                <h4 class="not-margin">
                    Create Folder
                </h4>
            </template>
            <div class="flex justify-center items-center">
                <input class=" border-2  w-[100%] h-[40px] rounded-[10px] " v-model="nameFolder" placeholder="name" />
            </div>
            <div class="flex  items-center mt-[20px] justify-between ">
                <button class="bg-[#f34814] w-[80px] h-[40px] text-white rounded-[10px]"
                    @click="createFolderPopup = !createFolderPopup">Cancle</button>
                <button class="bg-[#2a18d1] w-[80px] h-[40px] text-white rounded-[10px] "
                    @click="createFolder()">Save</button>

            </div>
        </vs-dialog>
    </div>
</template>



<script>
import axios from 'axios'
import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'
export default {
    components: {
        VuePdfEmbed,
    },
    data() {
        return {
            tabFolder:null,
            tabDoc:null,
            tabFile:null,
            showNameFolder:'',
            source1: 'http://27.254.144.88:1337/uploads/Juthathong_I_Tresume_J_maprang_1_e2078a34f9.pdf',
            createFolderPopup: false,
            openCreateFolder: false,
            nameFolder: '',
            typeFloder: null,
            myFolder: [],
            items: [],
            fileDetail: null,
            files: [],
            subFolder2: [{ id: 2, idFolder: 1, name: 'DITS Project1' }, { id: 4, idFolder: 1, name: 'DITS Project2' }],
            subFolder: [{ id: 1, idFolder: 2, name: 'จัดซื้อจ้าง1' }, { id: 3, idFolder: 2, name: 'จัดซื้อจ้าง2' }, { id: 5, idFolder: 2, name: 'จัดซื้อจ้าง3' }]
        }
    },
    mounted() {
        this.getFolderLits()
    },
    methods: {
        selectFolder(i) {
            console.log(i);
            if (i == 1) {
                this.typeFloder = i
            }
            else if (i == 2) {
                this.typeFloder = i
            }

        },
        covertDate(val) {
            const dateCovert = (new Date(val).toISOString().split("T")[0]).split('-');
            return (dateCovert[2].toString()) + '/' + (dateCovert[1].toString()) + '/' + (dateCovert[0].toString())
        },
        getFolderLits() {
            this.myFolder = []
            fetch('http://27.254.144.88:1337/api' + '/document-folders?populate=*&filters[organization][id][$eq]=' + this.$store.state.userDetail.organization.id)
                .then(response => response.json())
                .then((resp) => {
                    this.lengthPage = resp.meta.pagination.pageCount
                    const arr = []
                    arr.push(resp.data)
                    this.myFolder = arr[0]
                })
        },
        getDocList(id,name) {
            this.fileDetail = null
            this.showNameFolder = name
            this.tabDoc = null
            this.items = []
            this.files  = []
            fetch('http://27.254.144.88:1337/api' + '/documents?populate=*&filters[document_folder][id][$eq]=' + id)
                .then(response => response.json())
                .then((resp) => {
                    this.lengthPage = resp.meta.pagination.pageCount
                    const arr = []
                    arr.push(resp.data)
                    this.items = arr[0]
                })
        },
        getFileList(id) {
            this.fileDetail = null
            this.tabFile = null
            fetch('http:/ /27.254.144.88:1337/api' + '/document-files?populate=*&filters[document][id][$eq]=' + id)
                .then(response => response.json())
                .then((resp) => {
                    this.lengthPage = resp.meta.pagination.pageCount
                    const arr = []
                    arr.push(resp.data)
                    this.files = arr[0]
                })
        },
        getFileDetail(id) {
            fetch('http://27.254.144.88:1337/api' + '/document-files/' + id)
                .then(response => response.json())
                .then((resp) => {
                    console.log(resp);
                    this.fileDetail = resp.data
                    // this.lengthPage = resp.meta.pagination.pageCount
                    // const arr = []
                    // arr.push(resp.data)
                    // this.fileDetail = arr[0]
                })
        },
        createFolder() {
            if (this.nameFolder != '') {
                axios.post('http://27.254.144.88:1337/api' + '/document-folders', {
                    "data": {
                        "folderName": this.nameFolder,
                        "organization": this.$store.state.userDetail.organization.id,
                        "creator": this.$store.state.userInfo.id
                    }
                })
                    .then(() => {
                        this.getFolderLits()
                        this.createFolderPopup = false
                    })
                    .catch(function (error) {

                    });
                this.nameFolder = ''
            }

        }
    }
}
</script>

<style>
.test {
    border-right: solid #E5EAF6;

}

.test2 {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.12);
}

.fix-img {
    height: 301px !important;

}</style>