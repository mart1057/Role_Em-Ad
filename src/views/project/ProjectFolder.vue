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
                        <div class="flex cursor-pointer hover:bg-sky-100 rounded-[5px]" @click="createFolderPopup = !createFolderPopup">
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
                <div class="flex mb-[10px] items-center cursor-pointer hover:bg-sky-100 rounded-[5px]" v-for="(folder, i) in myFolder" :key="folder.id"
                    @click="selectFolder(folder.id)">
                    <div><md-icon>folder_open</md-icon></div>
                    <div class="ml-[4px]">{{ folder.name }}</div>
                </div>
            </div>
        </div>
        <div class="w-[85%] h-[100%] test2">
            <div class="flex h-[60px] bg-[#E9EEF6] items-center pl-[20px]">
                <div class="cursor-pointer"><md-icon>arrow_back_ios</md-icon></div>
                <div class="cursor-pointer"><md-icon>arrow_forward_ios</md-icon></div>
                <div class="ml-[14px] text-[16px] font-bold">จัดซื้อจ้าง</div>
            </div>
            <div class="w-[100%] flex">
                <div class="w-[25%] h-[60vw] bg-[white] test">
                    <div class="flex items-center justify-between m-[14px] cursor-pointer hover:bg-sky-100 rounded-[5px]"
                        v-for="subFolder in typeFloder == 1 ? subFolder : subFolder2 " :key="subFolder.id">
                        <div class="flex">
                            <div class="flex items-center justify-center"><md-icon>folder_open</md-icon></div>
                            <div class="flex items-center justify-center ml-[4px]">{{ subFolder.name }}</div>
                        </div>
                        <div class="flex items-center justify-center">
                            <md-icon>chevron_right</md-icon>
                        </div>
                    </div>
                </div>
                <div class="w-[25%] bg-[white] test">
                    <div class="flex items-center  m-[14px] cursor-pointer">
                        <div class="flex">
                            <div class="flex items-center justify-center"><md-icon>picture_as_pdf</md-icon></div>
                            <div class="flex items-center justify-center ml-[4px]">จัดซื้อจัดจ้าง01.pdf</div>
                        </div>
                    </div>
                    <div class="flex items-center  m-[14px] cursor-pointer">
                        <div class="flex">
                            <div class="flex items-center justify-center"><md-icon>picture_as_pdf</md-icon></div>
                            <div class="flex items-center justify-center ml-[4px]">จัดซื้อจัดจ้าง02.pdf</div>
                        </div>
                    </div>
                </div>
                <div class="w-[50%] bg-[white]">
                    <div class="w-[auto] h-[301px] m-[10px] rounded-[10px] border-2"></div>
                    <div class="m-[10px]">
                        <div class="text-[16px] font-bold">Document_Approve-01.pdf </div>
                        <div class="test-[12px] text-[#6B7490]">PDF Document - 50 KB</div>
                        <div class="test-[12px] text-[#6B7490]">Created - 8/01/2023 12:45</div>
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
                <button class="bg-[#f34814] w-[80px] h-[40px] text-white rounded-[10px]"  @click="createFolderPopup = !createFolderPopup">Cancle</button>
                <button class="bg-[#2a18d1] w-[80px] h-[40px] text-white rounded-[10px] "  @click="createFolder()">Save</button>
                
            </div>
        </vs-dialog>
    </div>
</template>



<script>
export default {
    data() {
        return {
            createFolderPopup: false,
            openCreateFolder: false,
            nameFolder:'',
            typeFloder: null,
            myFolder: [{ id: 1, name: 'จัดซื้อจ้าง' }, { id: 2, name: 'DITS Project' }],
            subFolder2: [{ id: 2, idFolder: 1, name: 'DITS Project1' }, { id: 4, idFolder: 1, name: 'DITS Project2' }],
            subFolder: [{ id: 1, idFolder: 2, name: 'จัดซื้อจ้าง1' }, { id: 3, idFolder: 2, name: 'จัดซื้อจ้าง2' }, { id: 5, idFolder: 2, name: 'จัดซื้อจ้าง3' }]
        }
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
        createFolder(){
            this.myFolder.push({
                id: this.myFolder.length+1,
                name:this.nameFolder
            })
            this.nameFolder = ''
            this.createFolderPopup = false

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
</style>