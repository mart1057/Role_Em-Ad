<template>
    <div class="h-[100%] bg-white m-[10px] rounded-[10px]">
        <div class="p-[20px]">
            <div class="text-[20px] font-bold">DITS Project</div>
            <div class="flex justify-between items-center mt-[24px]">
                <div class="flex ">
                    <button class="btn-create text-[12px] text-[#6B7490] font-bold"
                        @click="dailogCreateDoc = !dailogCreateDoc">Create
                        Document</button>
                    <div>
                        <vs-tooltip bottom shadow not-hover not-arrow v-model="actionFilter">
                            <div>
                                <button class="btn-filter text-[12px] text-[#6B7490] font-bold"
                                    @click="actionFilter = !actionFilter">Filter</button>
                            </div>
                            <template #tooltip>
                                <div>
                                    <div class="flex m-[20px]">
                                        <div class="mr-[20px]">
                                            <select class=" select-opt w-[130px] h-[30px] rounded-[6px]">
                                                <option disabled value="">Select...</option>
                                                <option>Assigned </option>
                                            </select>

                                        </div>
                                        <div>
                                            <select class=" select-opt w-[130px] h-[30px] rounded-[6px]">
                                                <option disabled value="">Select...</option>
                                                <option>Project</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="flex m-[20px]">
                                        <div class="flex">
                                            <div class="mr-[20px]">
                                                <select class=" select-opt w-[130px] h-[30px] rounded-[6px]">
                                                    <option disabled value="">Select...</option>
                                                    <option>Tag</option>
                                                </select>

                                            </div>
                                            <div>
                                                <select class=" select-opt w-[130px] h-[30px] rounded-[6px]">
                                                    <option disabled value="">Select...</option>
                                                    <option>Status</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex m-[20px]">
                                        <div class="flex">
                                            <div class="mr-[20px]">
                                                <div class=" w-[100%] h-[50px]">
                                                    <div class="flex">
                                                        <div class="flex justify-center items-center mr-[20px]">Favorite
                                                            Document</div>
                                                        <vs-checkbox></vs-checkbox>
                                                    </div>

                                                </div>
                                                <!-- <select class=" select-opt w-[130px] h-[30px] rounded-[6px]">
                                                    <option disabled value="">Select...</option>
                                                    <option>Favorite Document</option>
                                                </select> -->

                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex justify-end mt-[-20px] mb-[10px]">
                                        <vs-button type="filled" @click="actionFilter = false">Save Filter</vs-button>
                                    </div>

                                </div>
                            </template>
                        </vs-tooltip>
                    </div>
                </div>
                <div>
                    <input type="search" class="input_br w-[230px] h-[38px] rounded-[6px]" placeholder="Search">
                    <div class="flex hotfix">
                        <div class="mt-[-2px]"><md-icon>search</md-icon> </div>
                        <div class="border-l-2 h-[21px] border-[#6B7490] "></div>
                    </div>
                </div>
            </div>
            <div class="mt-[24px]">
                <div class="center">
                    <vs-table v-model="selected">
                        <template #thead>
                            <vs-tr>
                                <vs-th>
                                    <vs-checkbox :indeterminate="selected.length == users.length" v-model="selectAll"
                                        @change="selected = $vs.checkAll(selected, users)" />
                                </vs-th>
                                <vs-th>
                                    Document Name
                                </vs-th>
                                <vs-th>
                                    Project
                                </vs-th>
                                <vs-th>
                                    Tag
                                </vs-th>
                                <vs-th>
                                    Created
                                </vs-th>
                                <vs-th>
                                    Due Date
                                </vs-th>
                                <vs-th>
                                    Status
                                </vs-th>
                                <vs-th>
                                    Members
                                </vs-th>
                                <vs-th>

                                </vs-th>
                            </vs-tr>
                        </template>
                        <template #tbody>
                            <vs-tr :key="i" v-for="(tr, i) in users" :data="tr" :is-selected="!!selected.includes(tr)">
                                <vs-td checkbox>
                                    <vs-checkbox :val="tr" v-model="selected" />
                                </vs-td>
                                <vs-td>
                                    {{ tr.name }}
                                </vs-td>
                                <vs-td>
                                    {{ tr.project }}
                                </vs-td>
                                <vs-td>
                                    <div v-if="tr.tag.length > 2">
                                        <div class="flex">
                                            <div
                                                class="h-[25px] mb-[5px] bg-[#6B7490] flex items-center justify-center rounded-[100px] p-[10px] text-[white]">
                                                {{ tr.tag[0].name }}</div>
                                        </div>
                                        <div class="flex">
                                            <div
                                                class="h-[25px] mb-[5px] bg-[#6B7490] flex items-center justify-center rounded-[100px] p-[10px] text-[white]">
                                                {{ tr.tag[0].name }}</div>
                                        </div>
                                        <div class="text-[#6B7490] text-[10px]">+ {{ tr.tag.length - 2 }} more</div>
                                    </div>
                                    <div v-else v-for=" (tag, i) in tr.tag " :key="i">
                                        <div class="flex">
                                            <div
                                                class="h-[25px] mb-[5px] bg-[#6B7490] flex items-center justify-center rounded-[100px] p-[10px] text-[white]">
                                                {{ tag.name }}</div>
                                        </div>
                                    </div>
                                </vs-td>
                                <vs-td>
                                    {{ tr.create }}
                                </vs-td>
                                <vs-td>
                                    {{ tr.due_date }}
                                </vs-td>
                                <vs-td>
                                    <div class=" flex">
                                        <div class="text-[white] h-[25px] flex justify-center items-center rounded-[100px] p-[14px]"
                                            :style="{
                                                background: tr.status == 'Draft' ?
                                                    '#BCC7D6' : tr.status === 'Pending [Serial] 2/3' ? '#79ACF9' : tr.status === 'Approved' ? '#369C7B' : tr.status === 'Reject' ? 'red' : '#6B7490'
                                            }">
                                            {{ tr.status }}</div>
                                    </div>
                                </vs-td>
                                <vs-td class="flex">
                                    <div v-if="tr.member.length > 3" class="flex">
                                        <div
                                            class="w-[26px] h-[26px] mt-[8px] bg-[#5dcbec] flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white">
                                            <img :src="tr.member[0].img" />
                                        </div>
                                        <div
                                            class="w-[26px] h-[26px] mt-[8px] bg-[#5dcbec] flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white">
                                            <img :src="tr.member[1].img" />
                                        </div>
                                        <div
                                            class="w-[26px] h-[26px] mt-[8px] bg-[#5dcbec] flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white">
                                            <img :src="tr.member[2].img" />
                                        </div>
                                        <div
                                            class="w-[26px] h-[26px] mt-[8px] bg-[#5dcbec] flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white">
                                            +{{ tr.member.length - 3 }}</div>


                                        <!-- <div
                                            class="w-[26px] h-[26px] mt-[8px] bg-[#5dcbec] flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white">
                                            <img :src="tr.member[0].img" />
                                            <img :src="tr.member[1].img" />
                                            <img :src="tr.member[2].img" />
                                            <div class="w-[26px] h-[26px] mt-[8px] bg-[#5dcbec] flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white">+ {{ tr.member.length-3 }}</div>
                                        </div> -->
                                    </div>
                                    <div v-for="(member, i) in tr.member" :key="i" class="flex"
                                        v-if="tr.member.length <= 3">
                                        <div
                                            class="w-[26px] h-[26px] mt-[8px] bg-[#5dcbec] flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white">
                                            <img :src="member.img" />
                                        </div>
                                    </div>
                                    <!-- <div
                                        class="w-[26px] h-[26px] mt-[8px] bg-[#5dcbec] flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white">
                                        <img src="https://en.pimg.jp/047/504/290/1/47504290.jpg"/></div> -->
                                </vs-td>
                                <vs-td>
                                    <div class="flex">
                                        <div><md-icon style=" color:#79ACF9;">share</md-icon></div>
                                        <div @click="tr.action = !tr.action"><md-icon
                                                :style="{ color: tr.action == true ? '#FFB927' : '#79ACF9' }">star_outline</md-icon>
                                        </div>
                                    </div>
                                </vs-td>
                            </vs-tr>
                        </template>
                    </vs-table>
                    <!-- <span class="data">
                        <pre>
              {{ selected.length > 0 ? selected : 'Select an item in the table' }}
                    </pre>
                    </span> -->
                </div>
            </div>
        </div>

        <!-- //////////////////////////////////////// Create Workflow ///////////////////////////////////////////////////// -->
        <b-modal centered v-model="dailogCreateDoc" size="xl" hide-backdrop hide-header-close hide-header hide-footer
            hidden-footer>
            <div class="flex justify-end">
                <div @click="dailogCreateDoc = !dailogCreateDoc" class="cursor-pointer"><md-icon>close</md-icon></div>
            </div>
            <div class="text-[12px] font-bold text-[#6B7490]">DITS Project</div>
            <div class="flex mb-[10px]">
                <div class="flex justify-start items-center">
                    <div class="flex justify-start items-center">
                        <div class="text-[18px] font-bold text-[black] mr-[10px]">Create Document</div>
                        <div class="flex">
                            <div
                                class="text-[white] h-[25px] flex justify-center items-center rounded-[100px] p-[14px] bg-[#BCC7D6] mr-[10px]">
                                Darft</div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-center items-center">
                    <div class="border-l-2 h-[60px] border-[#E5EAF6] mr-[10px]"></div>
                    <div class="flex flex-col justify-between">
                        <div class="text-[12px] font-[700] text-[#2D3349]">Add Members to workflow</div>
                        <div class="flex">
                            <div v-if="addMember.length != 0" v-for="(data, i) in addMember " :key="i" class="flex">
                                <div class="flex justify-center items-center">
                                    <vs-avatar circle badge-color="#EFEFEF" badge-position="bottom-left"
                                        :color="data.color">
                                        <template #text>
                                            {{ data.name }}
                                        </template>
                                        <template #badge>
                                            <div><img :src="ImgClose"
                                                    class="flex justify-center items-center w-[6px] h-[6px] cursor-pointer"
                                                    @click="deleteMember(i)">
                                            </div>
                                        </template>
                                    </vs-avatar>
                                </div>
                                <div class="flex justify-center items-center"><md-icon
                                        style=" color:#3C7CFC;">arrow_right_alt</md-icon></div>
                            </div>
                            <div>
                                <vs-tooltip bottom shadow not-hover v-model="actionAddMember">
                                    <div class="w-[44px] h-[44px] mt-[8px] bg-[#369C7B] cursor-pointer flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white text-[20px]"
                                        @click="actionAddMember = !actionAddMember">
                                        +</div>
                                    <template #tooltip>
                                        <div v-for="(member, i) in dataMember" :key="i" class="w-[100%]">
                                            <di class="flex cursor-pointer mb-[10px]" @click="addDataMember(member)">
                                                <!-- <div
                                                    class="w-[26px] h-[26px] mt-[8px] bg-[#5dcbec] flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white">
                                                    {{ member.name }}</div> -->
                                                <vs-avatar circle badge-color="#EFEFEF" badge-position="bottom-left"
                                                    :color="member.color">
                                                    <template #text>
                                                        {{ member.name }}
                                                    </template>
                                                </vs-avatar>
                                                <div class="flex justify-center items-center ml-[12px]">{{ member.name }}
                                                </div>
                                            </di>
                                            <!-- <div class="border-b-2  border-[#E5EAF6] mr-[10px] "></div> -->
                                        </div>
                                    </template>
                                </vs-tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="border-b-2  border-[#E5EAF6] ml-[-16px] mr-[-16px]"></div>
            <div class="flex">
                <div class="ml-[30px]">
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Document Name</div>
                        <div><input class="w-[370px] h-[30px] rounded-[6px]" v-model="formDataDoc.doc_name" /></div>
                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Document Type</div>
                        <div>
                            <select class=" select-opt w-[370px] h-[30px] rounded-[6px]" v-model="formDataDoc.doc_type">
                                <option disabled value="">Select...</option>
                                <option value="a">A</option>
                                <option value="b">B</option>
                                <option value="c">C</option>
                            </select>
                        </div>
                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Due Date</div>
                        <div>
                            <select class=" select-opt w-[370px] h-[30px] rounded-[6px]" v-model="formDataDoc.date">
                                <option disabled value="">Select...</option>
                                <option value="3">3 Days</option>
                                <option value="7">7 Days</option>
                                <option value="10">10 Days</option>
                            </select>
                        </div>
                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Note</div>
                        <div>
                            <textarea class="w-[370px] h-[50px] rounded-[6px]" v-model="formDataDoc.note"></textarea>
                        </div>
                    </div>
                    <div class=" flex mt-[10px] mr-[10px]">
                        <div>
                            <div class="flex mb-[8px] text-[#2D3349] font-bold text-[12px]">
                                <div>Sequential Order</div>
                                <!-- <div class="flex justify-center items-center">
                                    <vs-tooltip >
                                        <md-icon class="icon-desc" style=" color:#79ACF9;">info_outline</md-icon>
                                        <template #tooltip>
                                            อิอิ
                                        </template>
                                    </vs-tooltip>
                                </div> -->
                            </div>
                            <div class="flex">
                                <template>
                                    <div class="center flex">
                                        <vs-radio v-model="formDataDoc.seq_order" val="true">
                                            <div class="text-[10px]">Parallel</div>
                                        </vs-radio>
                                        <vs-radio v-model="formDataDoc.seq_order" val="false">
                                            <div class="text-[10px]">Serial</div>
                                        </vs-radio>
                                    </div>
                                </template>
                            </div>
                        </div>
                        <div class="ml-[20px]">
                            <div class="flex mb-[8px] text-[#2D3349] font-bold text-[12px]">
                                <div>After Approval</div>
                                <!-- <div class="flex justify-center items-center">
                                    <vs-tooltip>
                                        <md-icon class="icon-desc" style=" color:#79ACF9;">info_outline</md-icon>
                                        <template #tooltip>
                                            อิอิ
                                        </template>
                                    </vs-tooltip>
                                </div> -->
                            </div>
                            <div class="flex justify-center items-center">
                                <div>
                                    <vs-switch success style="height: 22px;" v-model="formDataDoc.after_approval">
                                    </vs-switch>
                                </div>
                                <div class="flex justify-center items-center text-[10px] ml-[8px]">Move to approved Folder
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Tag</div>
                        <div class="flex">
                            <div><input type="tag" class="w-[147px] h-[30px]" v-model="tag" placeholder="Add a Tag..."
                                    v-on:keyup.enter="onEnter" />
                            </div>
                            <div class="icon-tag"><md-icon>sell</md-icon></div>
                            <div class="flex justify-center items-center ] ml-[10px] text-center"
                                v-if="formDataDoc.tagArr.length != 0">
                                <div class="h-[20px] pl-[10px] pr-[10px]  flex justify-center text-center bg-[#6B7490] text-[white] rounded-[100px] mr-[10px]"
                                    v-for="(tag, i) in formDataDoc.tagArr" :key="i">
                                    <div class="flex items-center justify-between">
                                        <div class="text-[10px] flex justify-center items-center font-bold">{{ tag.name }}
                                        </div>
                                        <div class="mr-[-5px] hover" @click="deleteTag(i)"><md-icon class="icon-deleteTag"
                                                style=" color:#ffffff;">close</md-icon></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-l-2 h-[500px] ml-[120px] border-[#E5EAF6]"></div>
                <div class="ml-[46px] mt-[10px] flex">
                    <div>
                        <div class="flex w-[550px]">
                            <div class="mb-[8px] text-[#2D3349] font-bold text-[12px] w-[70%]">Approval Document<span
                                    v-if="formDataDoc.allFile.length != 0"> ({{ formDataDoc.allFile.length }})</span></div>
                            <div class="text-[#2D3349] font-bold text-[12px] w-[20%]">Signature</div>
                        </div>
                        <div v-if="formDataDoc.allFile.length != 0" class="flex w-[550px]">
                            <div class="w-[70%] ">
                                <div class="test w-[307px] h-[32px] mb-[10px] pl-[10px] pr-[10px] flex justify-between items-center"
                                    v-for="(file, i) in formDataDoc.allFile" :key="i">

                                    <div>
                                        <span class="text-[#3C7CFC] font-bold">{{ file.name }}</span>
                                        <span class="text-[#3C7CFC] ml-[10px]">
                                            {{ file.size }} MB
                                        </span>
                                    </div>
                                    <div @click="deleteFile(i)" class="cursor-pointer">
                                        <md-icon>close</md-icon>
                                    </div>

                                </div>

                            </div>
                            <div class="w-[30%]">
                                <div class="mb-[8px]" v-for="(file, i) in formDataDoc.allFile" :key="i">
                                    <vs-checkbox v-model="formDataDoc.requiredFile"
                                        :disabled="file.type != 'application/pdf'">
                                        Required
                                    </vs-checkbox>
                                </div>

                            </div>
                        </div>

                        <div>
                            <vs-tooltip bottom shadow not-hover v-model="actionUploadFile">
                                <div class="w-[128px]">
                                    <img class="w-[128px] h-[32px] cursor-pointer" :src="imgUpload"
                                        @click="actionUploadFile = !actionUploadFile">
                                </div>
                                <template #tooltip>
                                    <div class="m-[10px]">
                                        <div class="flex ">
                                            <input type="file" ref="file" id="upload" hidden @change="uploadFile" /><label
                                                class="flex cursor-pointer" for="upload">
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
                        <div class="mt-[50px]">
                            <div class="mb-[8px] text-[#2D3349] font-bold text-[12px] ">Related Files <span
                                    v-if="formDataDoc.allRelated.length != 0"> ({{ formDataDoc.allRelated.length }})</span>
                            </div>
                            <div v-if="formDataDoc.allRelated.length != 0" class="flex w-[550px]">
                                <div class="w-[70%] ">
                                    <div class="test w-[307px] h-[32px] mb-[10px] pl-[10px] pr-[10px] flex justify-between items-center"
                                        v-for="(file, i) in formDataDoc.allRelated" :key="i">

                                        <div>
                                            <span class="text-[#3C7CFC] font-bold">{{ file.name }}</span>
                                            <span class="text-[#3C7CFC] ml-[10px]">
                                                {{ file.size }} MB
                                            </span>
                                        </div>
                                        <div @click="deleteFileRelated(i)" class="cursor-pointer">
                                            <md-icon>close</md-icon>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <vs-tooltip bottom shadow not-hover v-model="actionRelatedFile">
                                <div class="w-[128px]">
                                    <img class="w-[128px] h-[32px] cursor-pointer" :src="imgUpload"
                                        @click="actionRelatedFile = !actionRelatedFile">
                                </div>

                                <template #tooltip>
                                    <div class="m-[10px]">
                                        <div class="flex ">
                                            <input type="file" ref="fileaa" id="upload" hidden
                                                @change="uploadFileRelated" /><label class="flex cursor-pointer"
                                                for="upload">
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
                    </div>
                </div>
            </div>
            <div class="border-b-2  border-[#E5EAF6] ml-[-16px] mr-[-16px] "></div>
            <div class="flex mt-[5px] justify-between">
                <div>
                    <button
                        class="h-[38px]text-[center] rounded-[6px] bg-[#6B7490] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px] "
                        @click="submitDraft">
                        Draft
                    </button>
                </div>
                <div>
                    <button
                        class="h-[38px]text-[center] rounded-[6px] bg-[#3C7CFC] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]"
                        @click="createStartFlow">Create
                        and start the workflow
                    </button>
                </div>
            </div>

        </b-modal>



        <!-- //////////////////////////////////////// Start Workflow ///////////////////////////////////////////////////// -->

        <b-modal centered v-model="dailogStep2" size="xl" hide-backdrop hide-header-close hide-header hide-footer
            hidden-footer>
            <div class="flex justify-end">
                <div @click="dailogStep2 = !dailogStep2" class="cursor-pointer"><md-icon>close</md-icon></div>
            </div>
            <div class="text-[12px] font-bold text-[#6B7490] mb-[10px]">DITS Project</div>

            <div class="flex mb-[10px] justify-between">
                <div class="flex">
                    <div class="text-[18px] font-bold text-[black] mr-[10px]">IV110823_supplierBKK02.pdf</div>
                    <!-- <div class=" flex">
                            <div class="text-[white] h-[25px] flex justify-center items-center rounded-[100px] p-[14px]"
                                :style="{
                                    background: tr.status == 'Draft' ?
                                        '#BCC7D6' : tr.status === 'Pending [Serial] 2/3' ? '#79ACF9' : tr.status === 'Approved' ? '#369C7B' : '#6B7490'
                                }">
                                {{ tr.status }}</div>
                        </div> -->
                    <div class="flex">
                        <div
                            class="text-[white] h-[25px] flex justify-center items-center rounded-[100px] p-[14px] bg-[#BCC7D6] mr-[10px]">
                            Darft</div>
                    </div>
                </div>
                <div class="flex">
                    <div><md-icon style=" color:#79ACF9;">share</md-icon></div>
                    <!-- <div @click="tr.action = !tr.action"><md-icon
                                    :style="{ color: tr.action == true ? '#FFB927' : '#79ACF9' }">star_outline</md-icon>
                            </div> -->
                    <div><md-icon>star_outline</md-icon>
                    </div>
                </div>
            </div>
            <div class="border-b-2  border-[#E5EAF6] ml-[-16px] mr-[-16px]"></div>
            <div class="flex">
                <div class="ml-[30px]">
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Document Name</div>
                        <div class="text-[12px]">{{ formDataDoc.doc_name }}</div>
                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Document Type</div>
                        <div class="text-[12px]">{{ formDataDoc.doc_type }}</div>
                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="flex justify-between">
                            <div class="flex justify-between">
                                <div>
                                    <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Created Date</div>
                                    <div class="text-[12px]">22 Dec 2023 by</div>
                                </div>
                                <div class="flex items-center justify-center ml-[8px]">
                                    <vs-avatar circle>
                                        <template #text>
                                            Test
                                        </template>
                                    </vs-avatar>
                                </div>
                            </div>
                            <div>
                                <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Due Date</div>
                                <div class="text-[12px]">31 Dec 2023</div>
                            </div>
                        </div>

                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Note</div>
                        <div class="text-[12px]">
                            {{ formDataDoc.note }}
                        </div>
                    </div>
                    <div class=" flex mt-[10px] mr-[10px]">
                        <div>
                            <div class="flex mb-[8px] text-[#2D3349] font-bold text-[12px]">
                                <div>Sequential Order</div>
                            </div>
                            <div class="flex">
                                <template>
                                    <div class="center flex">
                                        <vs-radio v-model="formDataDoc.seq_order" val="true" disabled>
                                            <div class="text-[10px]">Parallel</div>
                                        </vs-radio>
                                        <vs-radio v-model="formDataDoc.seq_order" val="false" disabled>
                                            <div class="text-[10px]">Serial</div>
                                        </vs-radio>
                                    </div>
                                </template>
                            </div>
                        </div>
                        <div class="ml-[20px]">
                            <div class="flex mb-[8px] text-[#2D3349] font-bold text-[12px]">
                                <div>After Approval</div>
                            </div>
                            <div class="flex justify-center items-center">
                                <div>
                                    <vs-switch success style="height: 22px;" v-model="formDataDoc.after_approval" disabled>
                                    </vs-switch>
                                </div>
                                <div class="flex  text-[10px] ml-[8px] w-[200px]">Move to approved Folder
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Member</div>
                        <div class="flex">
                            <div v-if="addMember.length != 0" v-for="(data, i) in addMember " :key="i" class="flex">
                                <div class="flex justify-center items-center">
                                    <vs-avatar circle badge-color="#EFEFEF" badge-position="bottom-right" history
                                        :color="data.color">
                                        <template #text>
                                            {{ data.name }}
                                        </template>
                                        <template #badge>
                                            <div><img src="../../assets/image/vertify.png"
                                                    class="flex justify-center items-center w-[15px] h-[15px] cursor-pointer">
                                            </div>
                                        </template>
                                    </vs-avatar>
                                </div>
                                <div class="flex justify-center items-center"><md-icon
                                        style=" color:#3C7CFC;">arrow_right_alt</md-icon></div>
                            </div>
                        </div>

                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Tag</div>
                        <div class="flex text-center" v-if="formDataDoc.tagArr.length != 0">
                            <div class="h-[20px] pl-[10px] pr-[10px]  flex justify-center text-center bg-[#6B7490] text-[white] rounded-[100px] mr-[10px]"
                                v-for="(tag, i) in  formDataDoc.tagArr" :key="i">
                                <div class="flex items-center justify-between">
                                    <div class="text-[10px] flex justify-center items-center font-bold">{{ tag.name }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-l-2 h-[500px] ml-[100px] border-[#E5EAF6]"></div>
                <div class="flex w-[100%]">
                    <div class="ml-[46px] mt-[10px] flex ">
                        <div>
                            <div class="flex justify-between w-[307px]">
                                <div class="mb-[8px] text-[#2D3349] font-bold text-[12px] w-[70%]">Approval Document<span
                                        v-if="formDataDoc.allFile.length != 0"> ({{ formDataDoc.allFile.length }})</span>
                                </div>
                                <div class="mb-[8px] text-[#79ACF9] font-bold text-[10px]">Download All</div>
                            </div>
                            <div v-if="formDataDoc.allFile.length != 0" class="flex">
                                <div>
                                    <div class="test w-[307px] h-[32px] mb-[10px] pl-[10px] pr-[10px] flex justify-between items-center"
                                        v-for="(file, i) in formDataDoc.allFile" :key="i">

                                        <div>
                                            <span class="text-[#3C7CFC] font-bold">{{ file.name }}</span>
                                            <span class="text-[#3C7CFC] ml-[10px]">
                                                {{ file.size }} MB
                                            </span>
                                        </div>
                                        <div>
                                            <md-icon style=" color:#369C7B;">{{ file.checkSignal == true ? 'done' : 'edit'
                                            }}</md-icon>
                                            <md-icon style=" color:#79ACF9;">download</md-icon>
                                        </div>
                                    </div>
                                </div>
                                <!-- <div>
                            <div class="flex">
                                <vs-button border :active="active == 0" @click="active = 0">
                                    Active
                                </vs-button>
                                <vs-button border :active="active == 1" @click="active = 1">
                                    Default
                                </vs-button>
                            </div>
                        </div> -->
                            </div>
                            <div class="mt-[50px]">
                                <div class="mb-[8px] text-[#2D3349] font-bold text-[12px] ">Related Files <span
                                        v-if="formDataDoc.allRelated.length != 0"> ({{ formDataDoc.allRelated.length
                                        }})</span></div>
                                <div class="mb-[8px]  text-[12px] " v-if="formDataDoc.allRelated.length == 0">None</div>
                                <div v-else>
                                    <div>
                                        <div class="test w-[307px] h-[32px] mb-[10px] pl-[10px] pr-[10px] flex justify-between items-center"
                                            v-for="(file, i) in formDataDoc.allRelated" :key="i">
                                            <div>
                                                <span class="text-[#3C7CFC] font-bold">{{ file.name }}</span>
                                                <span class="text-[#3C7CFC] ml-[10px]">
                                                    {{ file.size }} MB
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-[10px] flex ml-[30px]">
                        <div>
                            <div>
                                <div class="flex ">
                                    <div class="mb-[8px] text-[#369C7B] font-bold text-[12px] text-center ">Approve all
                                    </div>
                                    <div class="mb-[8px] text-[#F8AB0D] font-bold text-[12px] ml-[10px]">Revise all</div>
                                </div>
                            </div>

                            <div class="flex mt-[-5px] ml-[-5px] " v-for="(file, i) in formDataDoc.allFile" :key="i">
                                <vs-button border color="#369C7B" :active="file.type == true" @click="file.type = true">
                                    Approve
                                </vs-button>
                                <vs-button border color="#F8AB0D" :active="file.type == false" @click="file.type = false">
                                    Revise
                                </vs-button>
                                <div class="flex items-center justify-center mt-[-3px] cursor-pointer"
                                    v-if="file.type == false" @click="OpenNote = !OpenNote"><md-icon
                                        style=" color:#F8AB0D;">maps_ugc</md-icon></div>

                                <vs-dialog width="550px" not-center not-close v-model="OpenNote">
                                    <div class="p-[10px]">
                                        <div class="flex justify-between ">
                                            <div class="text-[20px] font-bold">Comment</div>
                                            <div @click="OpenNote = !OpenNote" class="cursor-pointer">
                                                <md-icon>close</md-icon>
                                            </div>
                                        </div>
                                        <div class="mt-[12px] font-bold">Note to creator</div>
                                        <div><textarea class="w-[100%] min-h-[100px] mt-[12px]" v-model="note"></textarea>
                                        </div>
                                        <div class="border-b-2  border-[#E5EAF6] ml-[-25px] mr-[-25px] mt-[20px] mb-[20px]">
                                        </div>
                                        <div class="flex justify-between">
                                            <button class="text-[#6B7490]" @click="OpenNote = !OpenNote">Cancle</button>
                                            <button class="bg-[#F8AB0D] p-[10px] text-white rounded-[10px] "
                                                @click="OpenNote = !OpenNote">Confirm</button>
                                        </div>
                                    </div>

                                </vs-dialog>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div class="border-b-2  border-[#E5EAF6] ml-[-16px] mr-[-16px] "></div>
            <div class="flex justify-between mt-[5px]">
                <div>
                    <div>
                        <button
                            class="h-[38px]text-[center] rounded-[6px] bg-[red] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]"
                            @click="submitReject">
                            Reject
                        </button>
                        <button
                            class="h-[38px]text-[center] rounded-[6px] ml-[10px] bg-[#6B7490] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]">
                            Activity Log
                        </button>
                    </div>

                </div>
                <div>
                    <button
                        class="h-[38px]text-[center] rounded-[6px] bg-[#3C7CFC] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]"
                        @click="dailogStep3 = !dailogStep3">Confirm
                    </button>
                </div>
            </div>
        </b-modal>


        <!-- //////////////////////////////////////// Start Confirm ///////////////////////////////////////////////////// -->

        <b-modal centered v-model="dailogStep3" size="xl" hide-backdrop hide-header-close hide-header hide-footer
            hidden-footer>
            <div class="flex justify-end">
                <div @click="dailogStep3 = !dailogStep3" class="cursor-pointer"><md-icon>close</md-icon></div>
            </div>
            <div class="text-[12px] font-bold text-[#6B7490] mb-[10px]">DITS Project</div>

            <div class="flex mb-[10px] justify-between">
                <div class="flex">
                    <div class="text-[18px] font-bold text-[black] mr-[10px]">IV110823_supplierBKK02.pdf</div>
                    <!-- <div class=" flex">
                            <div class="text-[white] h-[25px] flex justify-center items-center rounded-[100px] p-[14px]"
                                :style="{
                                    background: tr.status == 'Draft' ?
                                        '#BCC7D6' : tr.status === 'Pending [Serial] 2/3' ? '#79ACF9' : tr.status === 'Approved' ? '#369C7B' : '#6B7490'
                                }">
                                {{ tr.status }}</div>
                        </div> -->
                    <div class="flex">
                        <div
                            class="text-[white] h-[25px] flex justify-center items-center rounded-[100px] p-[14px] bg-[#BCC7D6] mr-[10px]">
                            Darft</div>
                    </div>
                </div>
                <div class="flex">
                    <div><md-icon style=" color:#79ACF9;">share</md-icon></div>
                    <!-- <div @click="tr.action = !tr.action"><md-icon
                                    :style="{ color: tr.action == true ? '#FFB927' : '#79ACF9' }">star_outline</md-icon>
                            </div> -->
                    <div><md-icon>star_outline</md-icon>
                    </div>
                </div>
            </div>

            <div class="border-b-2  border-[#E5EAF6] ml-[-16px] mr-[-16px]"></div>
            <div class="flex">
                <div class="ml-[30px]">
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Document Name</div>
                        <div class="text-[12px]">{{ formDataDoc.doc_name }}</div>
                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Document Type</div>
                        <div class="text-[12px]">{{ formDataDoc.doc_type }}</div>
                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="flex justify-between">
                            <div class="flex justify-between">
                                <div>
                                    <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Created Date</div>
                                    <div class="text-[12px]">22 Dec 2023 by</div>
                                </div>
                                <div class="flex items-center justify-center ml-[8px]">
                                    <vs-avatar circle>
                                        <template #text>
                                            Test
                                        </template>
                                    </vs-avatar>
                                </div>
                            </div>
                            <div>
                                <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Due Date</div>
                                <div class="text-[12px]">31 Dec 2023</div>
                            </div>
                        </div>

                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Note</div>
                        <div class="text-[12px]">
                            {{ formDataDoc.note }}
                        </div>
                    </div>
                    <div class=" flex mt-[10px] mr-[10px]">
                        <div>
                            <div class="flex mb-[8px] text-[#2D3349] font-bold text-[12px]">
                                <div>Sequential Order</div>
                            </div>
                            <div class="flex">
                                <template>
                                    <div class="center flex">
                                        <vs-radio v-model="formDataDoc.seq_order" val="true" disabled>
                                            <div class="text-[10px]">Parallel</div>
                                        </vs-radio>
                                        <vs-radio v-model="formDataDoc.seq_order" val="false" disabled>
                                            <div class="text-[10px]">Serial</div>
                                        </vs-radio>
                                    </div>
                                </template>
                            </div>
                        </div>
                        <div class="ml-[20px]">
                            <div class="flex mb-[8px] text-[#2D3349] font-bold text-[12px]">
                                <div>After Approval</div>
                            </div>
                            <div class="flex justify-center items-center">
                                <div>
                                    <vs-switch success style="height: 22px;" v-model="formDataDoc.after_approval" disabled>
                                    </vs-switch>
                                </div>
                                <div class="flex  text-[10px] ml-[8px] w-[200px]">Move to approved Folder
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Member</div>
                        <div class="flex">
                            <div v-if="addMember.length != 0" v-for="(data, i) in addMember " :key="i" class="flex">
                                <div class="flex justify-center items-center">
                                    <vs-avatar circle badge-color="#EFEFEF" badge-position="bottom-right" history
                                        :color="data.color">
                                        <template #text>
                                            {{ data.name }}
                                        </template>
                                        <template #badge>
                                            <div><img src="../../assets/image/vertify.png"
                                                    class="flex justify-center items-center w-[15px] h-[15px] cursor-pointer">
                                            </div>
                                        </template>
                                    </vs-avatar>
                                </div>
                                <div class="flex justify-center items-center"><md-icon
                                        style=" color:#3C7CFC;">arrow_right_alt</md-icon></div>
                            </div>
                        </div>

                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Tag</div>
                        <div class="flex text-center" v-if="formDataDoc.tagArr.length != 0">
                            <div class="h-[20px] pl-[10px] pr-[10px]  flex justify-center text-center bg-[#6B7490] text-[white] rounded-[100px] mr-[10px]"
                                v-for="(tag, i) in  formDataDoc.tagArr" :key="i">
                                <div class="flex items-center justify-between">
                                    <div class="text-[10px] flex justify-center items-center font-bold">{{ tag.name }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-l-2 h-[500px] ml-[70px] border-[#E5EAF6]"></div>
                <div class="flex w-[100%]">
                    <div class="ml-[46px] mt-[10px] flex ">
                        <div>
                            <div class="flex justify-between w-[307px]">
                                <div class="mb-[8px] text-[#2D3349] font-bold text-[12px] w-[70%]">Approval Document<span
                                        v-if="formDataDoc.allFile.length != 0"> ({{ formDataDoc.allFile.length }})</span>
                                </div>
                                <div class="mb-[8px] text-[#79ACF9] font-bold text-[10px]">Download All</div>
                            </div>
                            <div v-if="formDataDoc.allFile.length != 0" class="flex">
                                <div>
                                    <div class="test w-[307px] h-[32px] mb-[10px] pl-[10px] pr-[10px] flex justify-between items-center"
                                        v-for="(file, i) in formDataDoc.allFile" :key="i">

                                        <div>
                                            <span class="text-[#3C7CFC] font-bold">{{ file.name }}</span>
                                            <span class="text-[#3C7CFC] ml-[10px]">
                                                {{ file.size }} MB
                                            </span>
                                        </div>
                                        <div>
                                            <md-icon style=" color:#369C7B;">{{ file.checkSignal == true ? 'done' : 'edit'
                                            }}</md-icon>
                                            <md-icon style=" color:#79ACF9;">download</md-icon>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div class="flex items-center" v-for="(file, i) in formDataDoc.allFile" :key="i">
                                        <div class="flex  ml-[12px] mb-[10px] w-[65px] ">
                                            <div class="rounded-[12px] text-white pb-[8px] pt-[8px] pl-[12px] pr-[12px] text-[10px] flex justify-center items-center"
                                                :style="{ background: file.type == true ? '#369C7B' : '#F8AB0D' }">{{
                                                    file.type
                                                    == true ? 'Approve' : 'Revise' }}
                                            </div>
                                            <div class="flex items-center justify-center cursor-pointer w-[30px] h-[30px]">
                                                <md-icon style=" color:#F8AB0D;" v-if="file.type == false"
                                                    @click="OpenNote = !OpenNote">maps_ugc</md-icon>
                                            </div>
                                        </div>

                                        <div class="w-[128px]">
                                            <img class="w-[128px] h-[32px]  mt-[-8px] ml-[13px] cursor-pointer"
                                                :src="reUpload" @click="actionUploadFile = !actionUploadFile">
                                        </div>
                                        <div class="w-[128px]">
                                            <img class="w-[24px] h-[24px]  mt-[-8px] ml-[13px] cursor-pointer"
                                                :src="deleteFile">
                                        </div>
                                        <vs-dialog width="550px" not-center not-close v-model="OpenNote">
                                            <div class="p-[10px]">
                                                <div class="flex justify-between ">
                                                    <div class="text-[20px] font-bold">Comment</div>
                                                    <div @click="OpenNote = !OpenNote" class="cursor-pointer">
                                                        <md-icon>close</md-icon>
                                                    </div>
                                                </div>
                                                <div class="mt-[12px] font-bold">Note to creator</div>
                                                <div><textarea class="w-[100%] min-h-[100px] mt-[12px]"
                                                        v-model="note"></textarea>
                                                </div>
                                                <div
                                                    class="border-b-2  border-[#E5EAF6] ml-[-25px] mr-[-25px] mt-[20px] mb-[20px]">
                                                </div>
                                                <div class="flex justify-between">
                                                    <button class="text-[#6B7490]"
                                                        @click="OpenNote = !OpenNote">Cancle</button>
                                                    <button class="bg-[#F8AB0D] p-[10px] text-white rounded-[10px] "
                                                        @click="OpenNote = !OpenNote">Confirm</button>
                                                </div>
                                            </div>
                                        </vs-dialog>
                                    </div>
                                </div>
                                <!-- <div>
                            <div class="flex">
                                <vs-button border :active="active == 0" @click="active = 0">
                                    Active
                                </vs-button>
                                <vs-button border :active="active == 1" @click="active = 1">
                                    Default
                                </vs-button>
                            </div>
                        </div> -->
                            </div>
                            <div class="mt-[50px]">
                                <div class="mb-[8px] text-[#2D3349] font-bold text-[12px] ">Related Files <span
                                        v-if="formDataDoc.allRelated.length != 0"> ({{ formDataDoc.allRelated.length
                                        }})</span></div>
                                <div class="mb-[8px]  text-[12px] " v-if="formDataDoc.allRelated.length == 0">None</div>
                                <div v-else>
                                    <div>
                                        <div class="test w-[307px] h-[32px] mb-[10px] pl-[10px] pr-[10px] flex justify-between items-center"
                                            v-for="(file, i) in formDataDoc.allRelated" :key="i">
                                            <div>
                                                <span class="text-[#3C7CFC] font-bold">{{ file.name }}</span>
                                                <span class="text-[#3C7CFC] ml-[10px]">
                                                    {{ file.size }} MB
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="mt-[10px] flex ml-[30px]">
                    </div>
                </div>
            </div>
            <div class="border-b-2  border-[#E5EAF6] ml-[-16px] mr-[-16px] "></div>
            <div class="flex justify-between mt-[5px]">
                <div>
                    <div>
                        <button
                            class="h-[38px]text-[center] rounded-[6px] ml-[10px] bg-[#6B7490] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]">
                            Activity Log
                        </button>
                    </div>

                </div>
                <div>
                    <button
                        class="h-[38px]text-[center] rounded-[6px] bg-[#3C7CFC] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]">Revise
                    </button>
                </div>
            </div>
        </b-modal>
        <div>
        </div>
    </div>
</template>


<script>
import deleteFile from '@/assets/image/deleteFile.png';
import imgUpload from '@/assets/image/test-upload.png';
import ImgClose from '@/assets/image/close.png';
import reUpload from '@/assets/image/re-Upload.png';



export default {
    data() {
        return {
            selectAll: false,
            selected: [],
            msg: '',
            imgUpload,
            reUpload,
            ImgClose,
            deleteFile,
            file: null,
            fileRelated: null,
            activeType: null,
            OpenNote: false,
            note: '',
            tag: '',
            actionAddMember: false,
            actionUploadFile: false,
            actionFilter: false,
            actionRelatedFile: false,
            dataMember: [{ id: 1, name: 'Chatchapon Boonpan', color: '#FFB51E', img: 'https://en.pimg.jp/047/504/290/1/47504290.jpg' }, { id: 2, name: 'Sasithron Maksai', color: '#79ACF9', img: '', }, { id: 3, name: 'Nara Komsan', color: '#369C7B', img: '', }],
            addMember: [],
            dailogCreateDoc: false,
            dailogStep2: false,
            dailogStep3: false,
            formDataDoc: {
                doc_name: '',
                doc_type: '',
                date: '',
                note: '',
                seq_order: null,
                after_approval: false,
                tagArr: [],
                allFile: [],
                allRelated: [],
                requiredFile: false
            },
            users: [
                {
                    id: 1,
                    name: "IV110823_supplierBKK01.pdf",
                    project: "DITS Project",
                    tag: [{ name: 'Suppiler_A' }, { name: 'Invoice' }, { name: 'Suppiler_B' },],
                    create: "8/01/2023 12:45",
                    due_date: "17/02/2023 12:45",
                    status: "Draft",
                    member: [],
                    action: false
                },
                {
                    id: 1,
                    name: "IV110823_supplierBKK01.pdf",
                    project: "DITS Project",
                    tag: [{ name: 'Suppiler_A' }, { name: 'Suppiler_B' }, { name: 'Invoice' },],
                    create: "8/01/2023 12:45",
                    due_date: "17/02/2023 12:45",
                    status: "Approved",
                    member: [],
                    action: false
                },
                {
                    id: 1,
                    name: "IV110823_supplierBKK01.pdf",
                    project: "DITS Project",
                    tag: [{ name: 'Invoice' }, { name: 'Suppiler_B' }, { name: 'Suppiler_A' }],
                    create: "8/01/2023 12:45",
                    due_date: "17/02/2023 12:45",
                    status: "Pending [Serial] 2/3",
                    member: [],
                    action: false
                },
                {
                    id: 1,
                    name: "IV110823_supplierBKK01.pdf",
                    project: "DITS Project",
                    tag: [{ name: 'Suppiler_A' }, { name: 'Suppiler_B' }, { name: 'Invoice' }, { name: 'Suppiler_B' }, { name: 'Invoice' }],
                    create: "8/01/2023 12:45",
                    due_date: "17/02/2023 12:45",
                    status: "Expired",
                    member: [],
                    action: false
                },
                {
                    id: 1,
                    name: "IV110823_supplierBKK01.pdf",
                    project: "DITS Project",
                    tag: [{ name: 'Suppiler_A' }, { name: 'Suppiler_B' }, { name: 'Invoice' }],
                    create: "8/01/2023 12:45",
                    due_date: "17/02/2023 12:45",
                    status: "Draft",
                    member: [],
                    action: false
                },
                {
                    id: 1,
                    name: "IV110823_supplierBKK01.pdf",
                    project: "DITS Project",
                    tag: [{ name: 'Suppiler_B' }, { name: 'Invoice' }],
                    create: "8/01/2023 12:45",
                    due_date: "17/02/2023 12:45",
                    status: "Draft",
                    member: [],
                    action: false
                },
                {
                    id: 1,
                    name: "IV110823_supplierBKK01.pdf",
                    project: "DITS Project",
                    tag: [{ name: 'Suppiler_B' }, { name: 'Invoice' }],
                    create: "8/01/2023 12:45",
                    due_date: "17/02/2023 12:45",
                    status: "Draft",
                    member: [],
                    action: false
                },
                {
                    id: 1,
                    name: "IV110823_supplierBKK01.pdf",
                    project: "DITS Project",
                    tag: [{ name: 'Suppiler_B' }, { name: 'Invoice' }],
                    create: "8/01/2023 12:45",
                    due_date: "17/02/2023 12:45",
                    status: "Draft",
                    member: [],
                    action: false
                },
                {
                    id: 1,
                    name: "IV110823_supplierBKK01.pdf",
                    project: "DITS Project",
                    tag: [{ name: 'Suppiler_B' }, { name: 'Invoice' }, { name: 'Suppiler_B' }, { name: 'Invoice' }],
                    create: "8/01/2023 12:45",
                    due_date: "17/02/2023 12:45",
                    status: "Draft",
                    member: [],
                    action: false
                },
            ]

        }
    },
    methods: {
        onEnter() {
            this.msg = this.tag;
            this.formDataDoc.tagArr.push({
                name: this.tag
            }
            )
            this.tag = ''
        },

        addDataMember(member) {
            this.addMember.push(member)
            console.log(this.addMember);

        },
        uploadFile() {
            this.file = this.$refs.file.files[0];
            this.formDataDoc.allFile.push({
                name: this.file.name,
                size: this.file.size,
                type: null, //true คือ Approve false คือ Revise all
                checkSignal: false
            })

        },
        uploadFileRelated() {
            this.fileRelated = this.$refs.fileaa.files[0];
            this.formDataDoc.allRelated.push(this.fileRelated)
        },
        submitDraft() {
            this.users.push({
                id: 1,
                name: this.formDataDoc.doc_name,
                project: "DITS Project",
                tag: this.formDataDoc.tagArr,
                create: "8/01/2023 12:45",
                due_date: "17/02/2023 12:45",
                status: "Draft",
                member: this.addMember,
                action: false
            })
            this.dailogCreateDoc = false
        },
        submitReject() {
            this.users.push({
                id: 1,
                name: this.formDataDoc.doc_name,
                project: "DITS Project",
                tag: this.formDataDoc.tagArr,
                create: "8/01/2023 12:45",
                due_date: "17/02/2023 12:45",
                status: "Reject",
                member: this.addMember,
                action: false
            })
            this.dailogStep2 = false
        },
        createStartFlow() {
            this.dailogStep2 = true
            this.dailogCreateDoc = false
        },

        deleteTag(i) {
            this.formDataDoc.tagArr.splice(i, 1)
        },
        deleteMember(i) {
            this.addMember.splice(i, 1)
        },
        deleteFile(i) {
            this.formDataDoc.allFile.splice(i, 1)

        },
        deleteFileRelated(i) {
            this.formDataDoc.allRelated.splice(i, 1)

        }
    }

}
</script>

<style scoped>
.btn-create {
    width: 147px;
    height: 38px;
    text-align: center;
    border: solid 1px #E5EAF6;


}

.btn-filter {
    width: 86px;
    height: 38px;
    text-align: center;
    border: solid 1px #E5EAF6;
    margin-left: 14px;

}

input {
    border: solid 1px #E5EAF6;
    border-radius: 6px;
}

.hotfix {
    position: absolute;
    top: 9.2rem;
}

.vs-tooltip-content {
    width: 128px !important;
}

input[type="search"] {
    padding-left: 32px;
}

.select-opt,
textarea {
    border: solid 1px #E5EAF6;

}

.icon-desc {
    font-size: 13px !important;
    margin-top: -3px;
}

.icon-deleteTag {
    font-size: 10px !important;
}

.icon5 {
    font-size: 300px !important;

}

.icon-tag {
    position: absolute;
    top: 33.4rem;
    left: 50px;
}

input[type="tag"] {
    padding-left: 32px;
}


.test {
    border: 1px solid #E5EAF7;
    border-radius: 5px;
}

.vs-avatar__badge {
    background: #EFEFEF !important;
}

.vs-avatar__badge.isSlot,
.vs-avatar__badge.writing {
    width: 12px !important;
    height: 12px !important;
    border-radius: 100% !important;

}
</style>