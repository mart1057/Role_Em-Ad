<template>
    <div class="h-[100%] bg-white m-[10px] rounded-[10px]">
        <div class="p-[20px]">
            <div>
                <div class="text-[20px] font-bold">Document Type</div>
                <div class="mt-[30px]"><button
                        class="w-[160px] h-[38px] bg-[#3C7CFC] rounded-[5px] text-[12px] font-bold text-white"
                        @click="craeteDocType()">Create
                        Document Type</button></div>
                <div class="grid grid-cols-3 w-[100%] gap-4 mt-[20px]">
                    <div class="text-[#6B7490] text-[14px] font-semibold">No.</div>
                    <div class="text-[#6B7490] text-[14px] font-semibold ml-[-200px]">Document Type</div>
                </div>
                <div v-for="(data, i) in dataDoc_type" :key="i">
                    <hr class="mt-[8px] w-[71%]">
                    <div class="grid grid-cols-3 w-[100%] gap-4 mt-[20px] mb-[16px]">
                        <div class=" text-[14px] font-semibold">{{ i + 1 }}</div>
                        <div class=" text-[14px] font-semibold ml-[-200px]">{{ data.attributes.documentTypeName }}</div>
                        <div class="flex">
                            <div class="cursor-pointer" @click="getDocTypeDetail(data.id)"><md-icon
                                    style=" color:#79ACF9;">edit_square</md-icon></div>
                            <div class="ml-[8px] cursor-pointer" @click="deleteDocType(data.id)"><md-icon
                                    style=" color:#79ACF9;">delete</md-icon></div>
                        </div>
                    </div>
                </div>
            </div>
            <vs-dialog width="550px" not-close v-model="dailogCreate">
                <div class="m-[10px]">
                    <div class="flex justify-between">
                        <div class="text-[20px] font-bold">Document Type</div>
                        <div @click="dailogCreate = false" class="cursor-pointer"><md-icon>close</md-icon></div>
                    </div>
                    <div class="mt-[20px]">
                        <div>
                            <div class="text-[12px] font-medium">You can set up a numbering scheme for files in this folder
                            </div>
                            <div class="flex mt-[8px]">
                                <vs-radio v-model="dataListDoc.active" :val="true">
                                    <div class="text-[12px] font-semibold">Active</div>
                                </vs-radio>
                                <vs-radio v-model="dataListDoc.active" :val:="false">
                                    <div class="text-[12px] font-semibold">Inactive</div>
                                </vs-radio>
                            </div>
                            <div class="mt-[30px]">
                                <div class="text-[12px] font-medium">Name</div>
                                <div class="mt-[8px]"><input class="w-[100%] h-[38px]" v-model="dataListDoc.name" /></div>
                            </div>
                            <div class="mt-[14px]">
                                <div class="text-[12px] font-medium">Scheme</div>
                                <div class="mt-[8px]">
                                    <div class="select-opt rounded-[6px] w-[100%] min-h-[60px] p-[8px]">
                                        <div class="flex">
                                            <div class="text-[12px] flex justify-center items-center mr-[2px]">
                                                1.หนังซื้อจัดจ้าง/
                                                <div class="flex justify-start"
                                                    v-for="(data, i) in dataListDoc.settingScheme" :key="i">
                                                    <span
                                                        class="border-[1px] border-[#E5EAF6] rounded-[10px] pt-[4px] pb-[4px] pr-[8px] pl-[8px] ml-[2px] mr-[2px]">
                                                        {{ data.text }}
                                                    </span>
                                                    <span
                                                        class="flex justify-center items-center ml-[2px] mr-[2px]">/</span>
                                                </div>
                                            </div>
                                            <div>
                                                <vs-tooltip bottom shadow not-hover v-model="addScheme">
                                                    <div @click="addScheme = !addScheme" class="cursor-pointer"><md-icon
                                                            style="color:#3C7CFC ;">add_circle</md-icon></div>
                                                    <template #tooltip>
                                                        <div class="m-[10px]">
                                                            <div class="flex justify-start mt-[5px]"
                                                                v-for="(data, i) in fomartScheme" :key="i"
                                                                @click="addSchemeSetting(data)"><span
                                                                    class="border-[1px] border-[#E5EAF6] rounded-[10px] pt-[4px] pb-[4px] pr-[8px] pl-[8px]">{{
                                                                        data.text }}
                                                                    <span class="text-[#3C7CFC]">></span></span></div>
                                                        </div>
                                                    </template>
                                                </vs-tooltip>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 w-[100%] gap-4 mt-[14px]">
                                <div>
                                    <div class="text-[12px] font-medium">Next Numbering</div>
                                    <div class="mt-[8px]"><input class="w-[100%] h-[38px]" type="number" min="1"
                                            v-model="dataListDoc.numbering" /></div>
                                </div>
                                <div>
                                    <div class="text-[12px] font-medium">Preview</div>
                                    <div class="mt-[8px]">
                                        <div class="select-opt rounded-[6px] w-[100%]  p-[8px]">
                                            <div class="text-[12px]">1.หนังซื้อจัดจ้าง<spn
                                                    v-for="(data, i) in dataListDoc.settingScheme " :key="i"> {{ data.val }}
                                                    <span v-if="i != dataListDoc.settingScheme.length - 1">/</span>
                                                </spn>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid grid-cols-2 w-[100%] gap-4 mt-[14px]">
                                <div>
                                    <div class="text-[12px] font-medium">Reset Frequency</div>
                                    <select class=" mt-[8px] select-opt w-[100%] h-[38px] rounded-[6px]"
                                        v-model="dataListDoc.frequency">
                                        <option disabled value="">Select...</option>
                                        <option value="Never">Never</option>
                                        <option value="Daily">Daily</option>
                                        <option value="Weekly">Weekly</option>
                                        <option value="Monthly">Montly</option>
                                        <option value="Yearly">Yearly</option>

                                    </select>
                                </div>
                                <div>
                                    <div>
                                        <div class="text-[12px] font-medium">Create Folder</div>
                                        <select class=" mt-[8px] select-opt w-[100%] h-[38px] rounded-[6px]"
                                            v-model="dataListDoc.create_folder">
                                            <option disabled value="">Select...</option>
                                            <option v-for="data in docFolder" :value="data.id">{{ data.attributes.folderName
                                            }}</option>
                                        </select>
                                    </div>
                                    <div class="mt-[14px]">
                                        <div class="text-[12px] font-medium">Approved Folder</div>
                                        <select class=" mt-[8px] select-opt w-[100%] h-[38px] rounded-[6px]"
                                            v-model="dataListDoc.approved_folder">
                                            <option disabled value="">Select...</option>
                                            <option v-for="data in docFolder" :value="data.id">{{ data.attributes.folderName
                                            }}</option>
                                        </select>
                                    </div>
                                </div>

                            </div>
                            <div class="mt-[50px] flex justify-end"><button
                                    class="w-[70px] h-[38px] bg-[#3C7CFC] rounded-[5px] text-[12px] font-bold text-white"
                                    @click="saveOrEdit()">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </vs-dialog>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import { testEiEi } from '@/Backend/module'
export default {
    data() {
        return {
            is_edit: false,
            dailogCreate: false,
            addScheme: false,
            day_without0: '',
            day_with0: '',
            mouth_with0: '',
            mouth_without0: '',
            year2: '',
            year4: '',
            dataListDoc: {
                id: '',
                name: '',
                numbering: 0,
                settingScheme: [],
                active: true,
                frequency: '',
                approved_folder: '',
                create_folder: ''
            },
            fomartScheme: [

            ],
            dataDoc_type: [],
            docFolder: []
        }
    },
    methods: {
        addSchemeSetting(data) {
            this.dataListDoc.settingScheme.push(data)
        },
        craeteDocType() {
            this.dataListDoc.id = ''
            this.dataListDoc.active = true
            this.dataListDoc.approved_folder = ''
            this.dataListDoc.create_folder = ''
            this.dataListDoc.frequency = ''
            this.dataListDoc.name = ''
            this.dataListDoc.numbering = 0
            this.dailogCreate = true
            this.is_edit = false
        },
        getDocType() {
            fetch('http://27.254.144.88:1337/api' + '/document-types?populate=*')
                .then(response => response.json())
                .then((resp) => {
                    const arr = []
                    arr.push(resp.data)
                    this.dataDoc_type = arr[0]
                })
        },
        getDocTypeDetail(id) {
            this.dailogCreate = true
            this.is_edit = true
            fetch('http://27.254.144.88:1337/api' + '/document-types/' + id + '?populate=*')
                .then(response => response.json())
                .then((resp) => {
                    console.log(resp);
                    this.dataListDoc.id = resp.data.id
                    this.dataListDoc.active = resp.data.attributes.documentActive
                    this.dataListDoc.approved_folder = resp.data.attributes.approveFolder.data.id
                    this.dataListDoc.create_folder = resp.data.attributes.createFolder.data.id
                    this.dataListDoc.frequency = resp.data.attributes.resetFrequency
                    this.dataListDoc.name = resp.data.attributes.documentTypeName
                    this.dataListDoc.numbering = resp.data.attributes.nextNumber
                })
        },
        deleteDocType(id) {
            axios.delete('http://27.254.144.88:1337/api' + '/document-types/' + id)
            setTimeout(() => {
                this.getDocType()
            }, 500)

        },
        getDocFloder() {
            fetch('http://27.254.144.88:1337/api' + '/document-folders?populate=*')
                .then(response => response.json())
                .then((resp) => {
                    const arr = []
                    arr.push(resp.data)
                    this.docFolder = arr[0]
                })

        },
        saveOrEdit() {
            if (this.is_edit == true) {
                axios.put('http://27.254.144.88:1337/api' + '/document-types/' + this.dataListDoc.id, {
                    "data": {
                        "documentTypeName": this.dataListDoc.name,
                        "documentActive": this.dataListDoc.active,
                        "nextNumber": this.dataListDoc.numbering,
                        "resetFrequency": this.dataListDoc.frequency,
                        "createFolder": this.dataListDoc.create_folder,
                        "approveFolder": this.dataListDoc.approved_folder
                    }
                })
                    .then(() => {
                        this.dailogCreate = false
                        this.getDocType()
                    })

            }
            else {
                axios.post('http://27.254.144.88:1337/api' + '/document-types', {
                    "data": {
                        "documentTypeName": this.dataListDoc.name,
                        "documentActive": this.dataListDoc.active,
                        "nextNumber": this.dataListDoc.numbering,
                        "resetFrequency": this.dataListDoc.frequency,
                        "createFolder": this.dataListDoc.create_folder,
                        "approveFolder": this.dataListDoc.approved_folder
                    }
                })
                    .then(() => {
                        this.dailogCreate = false
                        this.getDocType()
                    })
            }
        }
    },
    mounted() {
        this.getDocType()
        this.getDocFloder()
    },
    beforeMount() {
        testEiEi();
        const day_now = new Date("May 3, 2020 11:28:00");
        ///////////////////////// day ////////////////////////
        this.day_without0 = day_now.getDate()
        if (day_now.getDate() > 9) {
            this.day_with0 = day_now.getDate()
        }
        else {
            this.day_with0 = '0' + day_now.getDate()

        }
        ///////////////////////// mouth ////////////////////////
        this.mouth_without0 = day_now.getMonth() + 1
        if (day_now.getMonth() > 9) {
            this.mouth_with0 = day_now.getMonth() + 1
        }
        else {
            this.mouth_with0 = '0' + (day_now.getMonth() + 1)

        }

        ///////////////////////// year ////////////////////////
        this.year4 = day_now.getFullYear()
        let Year2 = day_now.getFullYear()
        this.year2 = Year2.toString().slice(2, 4)

        this.fomartScheme.push(
            {
                val: this.day_with0,
                text: 'Day of month (with 0)'
            },
            {
                val: this.day_without0,
                text: 'Day of month (without 0)'
            },
            {
                val: this.mouth_with0,
                text: 'Mount (with 0)'
            },
            {
                val: this.mouth_without0,
                text: 'Mount (without 0)'

            },
            {
                val: this.year4,
                text: 'Year (4 digits)'
            },
            {
                val: this.year2,
                text: 'Year (1 digits)'
            },

        )
        console.log("วันที่มี 0: " + this.day_with0);
        console.log("วันที่ไม่มี 0: " + this.day_without0);
        console.log("เดือนที่มี 0: " + this.mouth_with0);
        console.log("เดือนที่ไม่มี 0: " + this.mouth_without0);
        console.log("ปี 4 หลัก: " + this.year4);
        console.log("ปี 2 หลัก: " + this.year2);
    }

}

</script>