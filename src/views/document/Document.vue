<template>
    <div class="h-[100%] bg-white m-[10px] rounded-[10px]">
        <div class="p-[20px]">
            <div class="text-[20px] font-bold">DITS Project</div>
            <div class="flex justify-between items-center mt-[24px]">
                <div class="flex ">
                    <button class="btn-create text-[12px] text-[#6B7490] font-bold" @click="dailogCreateDoc = !dailogCreateDoc">Create
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
                                                    '#BCC7D6' : tr.status === 'Pending [Serial] 2/3' ? '#79ACF9' : tr.status === 'Approved' ? '#369C7B' : '#6B7490'
                                            }">
                                            {{ tr.status }}</div>
                                    </div>
                                </vs-td>
                                <vs-td>
                                    <div
                                        class="w-[26px] h-[26px] mt-[8px] bg-[#5dcbec] flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white">
                                        A</div>
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
        <vs-dialog not-close overflow-hidden auto-width v-model="dailogCreateDoc">
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
                                                    class="flex justify-center items-center w-[6px] h-[6px] cursor-pointer">
                                            </div>
                                        </template>
                                    </vs-avatar>
                                </div>
                                <div class="flex justify-center items-center"><md-icon
                                        style=" color:#3C7CFC;">arrow_right_alt</md-icon></div>
                            </div>
                            <div>
                                <vs-tooltip bottom shadow not-hover v-model="actionAddMember">
                                    <div class="w-[44px] h-[44px] mt-[8px] bg-[#5dcbec] cursor-pointer flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white"
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
                        <div><input class="w-[370px] h-[30px] rounded-[6px]" /></div>
                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Document Type</div>
                        <div>
                            <select class=" select-opt w-[370px] h-[30px] rounded-[6px]">
                                <option disabled value="">Select...</option>
                                <option>A</option>
                                <option>B</option>
                                <option>C</option>
                            </select>
                        </div>
                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Due Date</div>
                        <div>
                            <select class=" select-opt w-[370px] h-[30px] rounded-[6px]">
                                <option disabled value="">Select...</option>
                                <option>3 Days</option>
                                <option>7 Days</option>
                                <option>10 Days</option>
                            </select>
                        </div>
                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Note</div>
                        <div>
                            <textarea class="w-[370px] h-[50px] rounded-[6px]"></textarea>
                        </div>
                    </div>
                    <div class=" flex mt-[10px] mr-[10px]">
                        <div>
                            <div class="flex mb-[8px] text-[#2D3349] font-bold text-[12px]">
                                <div>Sequential Order</div>
                                <div class="flex justify-center items-center">
                                    <vs-tooltip>
                                        <md-icon class="icon-desc" style=" color:#79ACF9;">info_outline</md-icon>
                                        <template #tooltip>
                                            อิอิ
                                        </template>
                                    </vs-tooltip>
                                </div>
                            </div>
                            <div class="flex">
                                <template>
                                    <div class="center flex">
                                        <vs-radio v-model="sequentialType" val="true">
                                            <div class="text-[10px]">Parallel</div>
                                        </vs-radio>
                                        <vs-radio v-model="sequentialType" val="false">
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
                                    <vs-switch success style="height: 22px;" v-model="onApproval"> </vs-switch>
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
                            <div class="flex justify-center items-center ] ml-[10px] text-center" v-if="tagArr.length != 0">
                                <div class="h-[20px] pl-[10px] pr-[10px]  flex justify-center text-center bg-[#6B7490] text-[white] rounded-[100px] mr-[10px]"
                                    v-for="(tag, i) in tagArr" :key="i">
                                    <div class="flex items-center justify-between">
                                        <div class="text-[10px] flex justify-center items-center">{{ tag }}</div>
                                        <div class="mr-[-5px] hover" @click="deleteTag(i)"><md-icon class="icon-deleteTag"
                                                style=" color:#ffffff;">close</md-icon></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-l-2 h-[500px] ml-[250px] border-[#E5EAF6]"></div>
                <div class="ml-[46px] mt-[10px] flex">
                    <div>
                        <div class="flex w-[550px]">
                            <div class="mb-[8px] text-[#2D3349] font-bold text-[12px] w-[70%]">Approval Document<span
                                    v-if="allFile.length != 0"> ({{ allFile.length }})</span></div>
                            <div class="text-[#2D3349] font-bold text-[12px] w-[30%]">Signature</div>
                        </div>
                        <div v-if="allFile.length != 0" class="flex w-[550px]">
                            <div class="w-[70%] ">
                                <div class="test w-[307px] h-[32px] mb-[10px] pl-[10px] pr-[10px] flex justify-between items-center"
                                    v-for="(file, i) in allFile" :key="i">

                                    <div>
                                        <span class="text-[#3C7CFC] font-bold">{{ file.name }}</span>
                                        <span class="text-[#3C7CFC] ml-[10px]">
                                            {{ file.size }} MB
                                        </span>
                                    </div>
                                    <div>
                                        <md-icon>close</md-icon>
                                    </div>

                                </div>

                            </div>
                            <div class="w-[30%]">
                                <div class="mb-[8px]" v-for="(file, i) in allFile" :key="i">
                                    <vs-checkbox>
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
                            <div class="mb-[8px] text-[#2D3349] font-bold text-[12px] ">Related Files</div>
                            <vs-tooltip bottom shadow not-hover v-model="actionRelatedFile">
                                <div class="w-[128px]">
                                    <img class="w-[128px] h-[32px] cursor-pointer" :src="imgUpload"
                                        @click="actionRelatedFile = !actionRelatedFile">
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
                    </div>
                </div>
            </div>
            <div class="border-b-2  border-[#E5EAF6] ml-[-16px] mr-[-16px] "></div>
            <div class="flex mt-[5px] justify-between">
                <div>
                    <button
                        class="h-[38px]text-[center] rounded-[6px] bg-[#6B7490] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]">
                        Draft
                    </button>
                </div>
                <div>
                    <button
                        class="h-[38px]text-[center] rounded-[6px] bg-[#3C7CFC] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]"
                        @click="dailogStep2 = !dailogStep2">Create
                        and start the workflow
                    </button>
                </div>
            </div>

        </vs-dialog>

  
        

        <!-- //////////////////////////////////////// Start Workflow ///////////////////////////////////////////////////// -->

        <vs-dialog not-close overflow-hidden full-screen v-model="dailogStep2">
            <div class="flex justify-end">
                <div @click="dailogStep2 = !dailogStep2" class="cursor-pointer"><md-icon>close</md-icon></div>
            </div>
            <div class="text-[12px] font-bold text-[#6B7490]">DITS Project</div>
            <div class="flex mb-[10px]">
                <div class="flex justify-start items-center">
                    <div class="flex justify-start items-center">
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
                </div>
            </div>
            <div class="border-b-2  border-[#E5EAF6] ml-[-16px] mr-[-16px]"></div>
            <div class="flex">
                <div class="ml-[30px]">
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Document Name</div>
                        <div class="text-[12px]">00000001</div>
                    </div>
                    <div class="mt-[10px] mr-[10px]">
                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Document Type</div>
                        <div class="text-[12px]">Purchase_001_Factory</div>
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
                            Invoice Date 31/12/23 purchase for MKT
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
                                        <vs-radio v-model="sequentialType" val="true">
                                            <div class="text-[10px]">Parallel</div>
                                        </vs-radio>
                                        <vs-radio v-model="sequentialType" val="false">
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
                                    <vs-switch success style="height: 22px;" v-model="onApproval"> </vs-switch>
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
                                    <vs-avatar circle badge-color="#EFEFEF" badge-position="bottom-left" history
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
                        <div class="flex text-center" v-if="tagArr.length != 0">
                            <div class="h-[20px] pl-[10px] pr-[10px]  flex justify-center text-center bg-[#6B7490] text-[white] rounded-[100px] mr-[10px]"
                                v-for="(tag, i) in tagArr" :key="i">
                                <div class="flex items-center justify-between">
                                    <div class="text-[10px] flex justify-center items-center">{{ tag }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="border-l-2 h-[500px] ml-[250px] border-[#E5EAF6]"></div>
                <div class="flex w-[100%]">
                    <div class="ml-[46px] mt-[10px] flex ">
                        <div>
                            <div class="flex justify-between w-[307px]">
                                <div class="mb-[8px] text-[#2D3349] font-bold text-[12px] w-[70%]">Approval Document<span
                                        v-if="allFile.length != 0"> ({{ allFile.length }})</span></div>
                                <div class="mb-[8px] text-[#79ACF9] font-bold text-[10px]">Download All</div>
                            </div>
                            <div v-if="allFile.length != 0" class="flex">
                                <div>
                                    <div class="test w-[307px] h-[32px] mb-[10px] pl-[10px] pr-[10px] flex justify-between items-center"
                                        v-for="(file, i) in allFile" :key="i">

                                        <div>
                                            <span class="text-[#3C7CFC] font-bold">{{ file.name }}</span>
                                            <span class="text-[#3C7CFC] ml-[10px]">
                                                {{ file.size }} MB
                                            </span>
                                        </div>
                                        <div>
                                            <md-icon style=" color:#369C7B;">edit</md-icon>
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
                                <div class="mb-[8px] text-[#2D3349] font-bold text-[12px] ">Related Files(0)</div>
                                <div class="mb-[8px]  text-[12px] ">None</div>
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
                            
                            <div class="flex mt-[-5px] ml-[-5px] " v-for="(file, i) in allFile" :key="i">
                                <vs-button border color="#369C7B" :active="activeType == 0" @click="activeType = 0">
                                    Active
                                </vs-button>
                                <vs-button border color="#F8AB0D" :active="activeType == 1" @click="activeType = 1">
                                    Default
                                </vs-button>
                                <div class="flex items-center justify-center mt-[-3px] cursor-pointer" v-if="activeType == 1"  @click="OpenNote = !OpenNote"><md-icon
                                        style=" color:#F8AB0D;">maps_ugc</md-icon></div>

                                <vs-dialog width="550px" not-center not-close v-model="OpenNote">
                                    <div class="p-[10px]">
                                        <div class="flex justify-between ">
                                            <div class="text-[20px] font-bold">Comment</div>
                                            <div  @click="OpenNote = !OpenNote" class="cursor-pointer"><md-icon>close</md-icon></div>
                                        </div>
                                        <div class="mt-[12px] font-bold">Note to creator</div>
                                        <div><textarea class="w-[100%] min-h-[100px] mt-[12px]"></textarea></div>
                                        <div class="border-b-2  border-[#E5EAF6] ml-[-25px] mr-[-25px] mt-[20px] mb-[20px]"></div>
                                        <div class="flex justify-between">
                                            <button class="text-[#6B7490]" @click="OpenNote = !OpenNote">Cancle</button>
                                            <button class="bg-[#F8AB0D] p-[10px] text-white rounded-[10px] "  @click="OpenNote = !OpenNote">Confirm</button>
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
                        class="h-[38px]text-[center] rounded-[6px] bg-[red] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]">
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
                        class="h-[38px]text-[center] rounded-[6px] bg-[#3C7CFC] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]">Confirm
                    </button>
                </div>
            </div>
        </vs-dialog>
        <div>
        </div>
    </div>
</template>


<script>
import imgUpload from '@/assets/image/test-upload.png'
import ImgClose from '@/assets/image/close.png'


export default {
    data() {
        return {
            selectAll: false,
            selected: [],
            msg: '',
            imgUpload,
            ImgClose,
            file: null,
            activeType: null,
            OpenNote:false,
            allFile: [],
            sequentialType : true,
            onApproval: false,
            tag: '',
            actionAddMember: false,
            actionUploadFile: false,
            actionFilter: false,
            actionRelatedFile: false,
            tagArr: [],
            dataMember: [{ id: 1, name: 'Chatchapon Boonpan', color: '#FFB51E' }, { id: 2, name: 'Sasithron Maksai', color: '#79ACF9' }, { id: 3, name: 'Nara Komsan', color: '#369C7B' }],
            addMember: [],
            dailogCreateDoc: false,
            dailogStep2: false,
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
                }
            ]

        }

    },
    methods: {
        onEnter() {
            this.msg = this.tag;
            this.tagArr.push(this.tag)
            this.tag = ''
        },

        addDataMember(member) {
            this.addMember.push(member)
            console.log(this.addMember);

        },
        uploadFile() {
            this.file = this.$refs.file.files[0];
            console.log(this.file);
            this.allFile.push(this.file)

        },

        deleteTag(i) {
            delete this.tagArr[i];
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
    top: 8.6rem;
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
    top: 34.1rem;
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

}</style>