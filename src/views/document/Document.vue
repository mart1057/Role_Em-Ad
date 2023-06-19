<template>
    <div>
        <div class="h-[100%] bg-white m-[10px] rounded-[10px]">
            <div class="p-[20px]">
                <div class="text-[20px] font-bold">{{ $route.query.name }}</div>
                <div class="flex justify-between items-center mt-[24px]">

                    <div class="flex">
                        <button class="btn-create text-[12px] text-[#6B7490] font-bold hover:bg-sky-100"
                            @click="createDoc()">Create
                            Document</button>
                        <div>
                            <vs-tooltip bottom shadow not-hover not-arrow v-model="actionFilter">
                                <div>
                                    <button class="btn-filter text-[12px] text-[#6B7490] font-bold hover:bg-sky-100"
                                        @click="actionFilter = !actionFilter">Filter</button>
                                </div>
                                <template #tooltip>
                                    <div>
                                        <div class="flex m-[20px]">
                                            <div class="mr-[20px]">
                                                <select class=" select-opt w-[130px] h-[30px] rounded-[6px]"
                                                    v-model="filterList.assigned">
                                                    <option disabled value="">Assigned...</option>
                                                    <!-- <option val="">Darft</option>
                                                    <option>Resive</option>
                                                    <option>Peding</option> -->
                                                </select>

                                            </div>
                                            <div>
                                                <select class=" select-opt w-[130px] h-[30px] rounded-[6px]"
                                                    v-model="filterList.project">
                                                    <option disabled value="">Project...</option>
                                                    <option v-for="data in projects" :value="data.id">
                                                        {{ data.attributes.projectName }}</option>
                                                    <!-- <option :value="1">Darft</option>
                                                    <option :value="3">Resive</option>
                                                    <option :value="2">Peding</option>
                                                    <option :value="4">Approved</option>
                                                    <option :value="5">Reject</option> -->
                                                </select>
                                            </div>
                                        </div>
                                        <div class="flex m-[20px]">
                                            <div class="flex">
                                                <div class="mr-[20px]">
                                                    <select class=" select-opt w-[130px] h-[30px] rounded-[6px]"
                                                        v-model="filterList.tag">
                                                        <option disabled value=''>Tag...</option>
                                                        <option v-for="(tag, i) in tags" :value="tag.id">{{
                                                            tag.attributes.tagName }}</option>
                                                    </select>
                                                </div>
                                                <div>
                                                    <select class=" select-opt w-[130px] h-[30px] rounded-[6px]"
                                                        v-model="filterList.status">
                                                        <option disabled value="">Status...</option>
                                                        <option value="">All</option>
                                                        <option value="1">Darft</option>
                                                        <option value="3">Resive</option>
                                                        <option value="2">Peding</option>
                                                        <option value="4">Approved</option>
                                                        <option value="5">Reject</option>
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
                                                            <vs-checkbox v-model="filterList.favorite"></vs-checkbox>
                                                        </div>

                                                    </div>
                                                    <!-- <select class=" select-opt w-[130px] h-[30px] rounded-[6px]">
                                                    <option disabled value="">Select...</option>
                                                    <option>Favorite Document</option>
                                                </select> -->

                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex justify-end">
                                            <div class="flex justify-end mt-[-20px] mb-[10px]">
                                                <vs-button type="filled" flat
                                                    @click="clearfilter(), actionFilter = false">Clear</vs-button>
                                            </div>
                                            <div class="flex justify-end mt-[-20px] mb-[10px]">
                                                <vs-button type="filled" @click="getDocList(), actionFilter = false">Save
                                                    Filter</vs-button>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </vs-tooltip>
                        </div>
                    </div>
                    <div>
                        <input type="search" class="input_br w-[230px] h-[38px] rounded-[6px]" v-model="filterList.text"
                            placeholder="Search">
                        <div class="flex hotfix">
                            <div class="mt-[-2px]"><md-icon>search</md-icon> </div>
                            <div class="border-l-2 h-[21px] border-[#6B7490] "></div>
                        </div>
                    </div>
                </div>
                <div class="mt-[24px]">
                    <div class="center">
                        <vs-table>
                            <template #thead>
                                <vs-tr>
                                    <!-- <vs-th>
                                </vs-th> -->
                                    <vs-th>
                                        <div class="flex justify-center items-center ml-[40px]">Document Name</div>
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
                                <vs-tr :key="i" v-for="(tr, i) in items" :data="tr">
                                    <!-- <vs-td>
                                    
                                </vs-td> -->
                                    <vs-td>
                                        <div class="flex">
                                            <div class="flex justify-center items-center"><vs-checkbox :val="tr.id"
                                                    v-model="selected" /></div>
                                            <div @click="fetchDetail(tr.id)"
                                                class="flex justify-satrt items-center ml-[20px]  w-[100%]">{{
                                                    tr.attributes.docName
                                                }}
                                            </div>
                                        </div>

                                    </vs-td>
                                    <vs-td>
                                        {{ tr.attributes.project.data.attributes.projectName }}
                                    </vs-td>
                                    <vs-td>
                                        <div v-if="tr.attributes.tags.data.length > 2">
                                            <div class="flex">
                                                <div
                                                    class="h-[25px] mb-[5px] bg-[#6B7490] flex items-center justify-center rounded-[100px] p-[10px] text-[white]">
                                                    {{ tr.attributes.tags.data[0].attributes.tagName }}</div>
                                            </div>
                                            <div class="flex">
                                                <div
                                                    class="h-[25px] mb-[5px] bg-[#6B7490] flex items-center justify-center rounded-[100px] p-[10px] text-[white]">
                                                    {{ tr.attributes.tags.data[1].attributes.tagName }}</div>
                                            </div>
                                            <div class="text-[#6B7490] text-[10px]">+ {{ tr.attributes.tags.data.length - 2
                                            }}
                                                more</div>
                                        </div>
                                        <div v-if="tr.attributes.tags.data.length <= 2"
                                            v-for=" (tag, i) in tr.attributes.tags.data" :key="i">
                                            <div class="flex">
                                                <div
                                                    class="h-[25px] mb-[5px] bg-[#6B7490] flex items-center justify-center rounded-[100px] p-[10px] text-[white]">
                                                    {{ tag.attributes.tagName }}
                                                </div>
                                            </div>
                                        </div>
                                    </vs-td>
                                    <vs-td>
                                        {{ covertDate(tr.attributes.createdAt) }}
                                    </vs-td>
                                    <vs-td>
                                        {{ covertDate(tr.attributes.dueDate) }}
                                    </vs-td>
                                    <vs-td>
                                        <div class=" flex w-[150px]">
                                            <div class="text-[white] h-[25px] w-[auto] flex justify-center items-center rounded-[100px] p-[14px]"
                                                :style="{
                                                    background: tr.attributes.status == 1 ?
                                                        '#BCC7D6' : tr.attributes.status === 2 ? '#79ACF9' : tr.attributes.status == 3 ? '#FFB927' : tr.attributes.status === 4 ? '#369C7B' : tr.attributes.status === 5 ? 'red' : '#6B7490'
                                                }">
                                                {{ tr.attributes.status == 1 ?
                                                    'Draft' : tr.attributes.status === 2 ? 'Pending [Serial] 2/3' :
                                                        tr.attributes.status ===
                                                            4 ? 'Approved' : tr.attributes.status === 5 ? 'Reject' : 'Revise' }}
                                            </div>
                                        </div>
                                    </vs-td>
                                    <vs-td class="flex">
                                        <div>
                                            <div class="flex">
                                                <div class="center con-avatars flex">
                                                    <vs-avatar-group max="4">
                                                        <div v-for="(member, i) in tr.attributes.relatedUser.data" :key="i">
                                                            <!-- <div v-if="member.img == ''"> -->
                                                            <vs-avatar circle>
                                                                <template #text>
                                                                    {{ member.attributes.firstName }}
                                                                    {{ member.attributes.lastName }}
                                                                </template>
                                                            </vs-avatar>
                                                            <!-- </div> -->
                                                            <!-- <div v-else>
                                                            <vs-avatar circle>
                                                                <img :src="member.img" class="w-[100%] h-[100%]" alt="">
                                                            </vs-avatar>
                                                        </div> -->
                                                        </div>
                                                    </vs-avatar-group>
                                                </div>
                                                <!-- <div
                                                class="w-[32px] h-[32px] mt-[8px] bg-[#5dcbec] mr-[3px] flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white">
                                                <img :src="tr.member[0].img" />
                                            </div>
                                            <div
                                                class="w-[32px] h-[32px] mt-[8px] bg-[#5dcbec]  mr-[3px] flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white">
                                                <img :src="tr.member[1].img" />
                                            </div>
                                            <div
                                                class="w-[32px] h-[32px] mt-[8px] bg-[#5dcbec] mr-[3px] flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white">
                                                <img :src="tr.member[2].img" />
                                            </div>
                                            <div
                                                class="w-[32px] h-[32px] mt-[8px] bg-[#5dcbec]  mr-[3px] flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white">
                                                +{{ tr.member.length - 3 }}</div> -->
                                            </div>
                                            <!-- <div v-if="tr.member.length <= 3" class="flex">
                                            <div v-for="(member, i) in tr.member" :key="i"
                                                class="w-[32px] h-[32px] mt-[8px] bg-[#5dcbec]  flex rounded-[100%] mb-[8px] text-center text-white mr-[3px]">
                                                <img :src="member.img" />
                                            </div>

                                        </div> -->
                                            <!-- <div
                                        class="w-[26px] h-[26px] mt-[8px] bg-[#5dcbec] flex rounded-[100%] mb-[8px] text-center justify-center items-center text-white">
                                        <img src="https://en.pimg.jp/047/504/290/1/47504290.jpg"/></div> -->
                                        </div>
                                    </vs-td>
                                    <vs-td>
                                        <div class="flex">
                                            <div><md-icon style=" color:#79ACF9;">share</md-icon></div>
                                            <div
                                                @click="tr.attributes.favoriteDoc = !tr.attributes.favoriteDoc, changeFavorite(tr.attributes.favoriteDoc, tr.id)">
                                                <md-icon
                                                    :style="{ color: tr.attributes.favoriteDoc == true ? '#FFB927' : '#79ACF9' }">star_outline</md-icon>
                                            </div>
                                        </div>
                                    </vs-td>
                                </vs-tr>
                            </template>
                            <template #footer>
                                <div @click="getDocList()" class="cursor-pointer" v-if="lengthPage != 0">
                                    <vs-pagination v-model="page" :length="lengthPage" />
                                </div>
                            </template>
                        </vs-table>
                    </div>
                </div>
            </div>

            <!-- //////////////////////////////////////// Create Workflow ///////////////////////////////////////////////////// -->
            <b-modal centered v-model="dailogCreateDoc" size="xl" hide-backdrop hide-header-close hide-header hide-footer
                hidden-footer>
                <div class="flex justify-end">
                    <div @click="closeDialog()" class="cursor-pointer"><md-icon>close</md-icon></div>
                </div>
                <div class="text-[12px] font-bold text-[#6B7490]">DITS Project</div>
                <div class="flex mb-[10px]">
                    <div class="flex justify-start items-center">
                        <div class="flex justify-start items-center">
                            <div class="text-[18px] font-bold text-[black] mr-[10px]">Create Document</div>
                            <div class="flex">
                                <div
                                    class="text-[white] h-[25px] flex justify-center items-center rounded-[100px] p-[14px] bg-[#BCC7D6] mr-[10px]">
                                    Draft</div>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center items-center">
                        <div class="border-l-2 h-[60px] border-[#E5EAF6] mr-[10px]"></div>
                        <div class="flex flex-col justify-between">
                            <div class="text-[12px] font-[700] text-[#2D3349]">Add Members to workflow</div>
                            <div class="flex">
                                <div v-if="formDataDoc.addMember.length != 0" v-for="(member, i) in formDataDoc.addMember "
                                    :key="i" class="flex">
                                    <div class="flex justify-center items-center">
                                        <vs-avatar circle badge-color="#EFEFEF" badge-position="bottom-left"
                                            v-if="member.img == ''">
                                            <template #text>
                                                {{ member.name }}
                                            </template>
                                            <template #badge>
                                                <div><img :src="ImgClose"
                                                        class="flex justify-center items-center w-[6px] h-[6px] cursor-pointer"
                                                        @click="removeMember(member, i)">
                                                </div>
                                            </template>
                                        </vs-avatar>
                                        <vs-avatar v-else circle badge-color="#EFEFEF" badge-position="bottom-left">
                                            <img :src="member.img" />
                                            <template #badge>
                                                <div><img :src="ImgClose"
                                                        class="flex justify-center items-center w-[6px] h-[6px] cursor-pointer"
                                                        @click="removeMember(member, i)">
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
                                            @click="dataMember.length > 0 ? actionAddMember = !actionAddMember : actionAddMember = false">
                                            +</div>
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
                                    <option v-for="(type, i) in doc_type" :value="type.id">{{
                                        type.attributes.documentTypeName
                                    }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="mt-[10px] mr-[10px]">
                            <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Due Date</div>
                            <div>
                                <div><input class="w-[370px] h-[30px] rounded-[6px]" placeholder="dd-mm-yyyy" type="date"
                                        v-model="formDataDoc.date" /></div>
                                <!-- <select class=" select-opt w-[370px] h-[30px] rounded-[6px]" v-model="formDataDoc.date">
                                <option disabled value="">Select...</option>
                                <option value="3">3 Days</option>
                                <option value="7">7 Days</option>
                                <option value="10">10 Days</option>
                            </select> -->
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
                                            <vs-radio v-model="formDataDoc.seq_order" :val="true">
                                                <div class="text-[10px]">Parallel</div>
                                            </vs-radio>
                                            <vs-radio v-model="formDataDoc.seq_order" :val="false">
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
                                    <div class="flex justify-center items-center text-[10px] ml-[8px]">Move to approved
                                        Folder
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-[10px] mr-[10px]">
                            <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Tag</div>
                            <div class="flex">
                                <!-- <div >
                                <Select2 v-model="myValue" :options="myOptions" @change="myChangeEvent($event)"
                                    @select="mySelectEvent($event)" />
                                <h4>Value: {{ myValue }}</h4>
                            </div> -->
                                <select class=" select-opt w-[147px] h-[30px] rounded-[6px]" v-model="tag"
                                    @change="onEnter">
                                    <option v-for="(tag, i) in tags" :value="tag">{{ tag.attributes.tagName
                                    }}
                                    </option>
                                </select>
                                <div class="icon-tag"><md-icon>sell</md-icon></div>
                                <div class="flex justify-center items-center  ml-[10px] text-center"
                                    v-if="formDataDoc.tagArr.length != 0">
                                    <div class="h-[20px] pl-[10px] pr-[10px]  flex justify-center text-center bg-[#6B7490] text-[white] rounded-[100px] mr-[10px]"
                                        v-for="(tag, i) in formDataDoc.tagArr" :key="i">
                                        <div class="flex items-center justify-between">
                                            <div class="text-[10px] flex justify-center items-center font-bold">{{ tag.name
                                            }}
                                            </div>
                                            <div class="mr-[-5px] hover" @click="removeTag(i)"><md-icon
                                                    class="icon-deleteTag" style=" color:#ffffff;">close</md-icon></div>
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
                                        v-if="formDataDoc.allFile.length != 0"> ({{ formDataDoc.allFile.length }})</span>
                                </div>
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
                                        <div @click="removeFile(file.id, i)" class="cursor-pointer">
                                            <md-icon>close</md-icon>
                                        </div>

                                    </div>

                                </div>
                                <div class="w-[30%]">
                                    <div class="mb-[8px]" v-for="(file, i) in formDataDoc.allFile" :key="i">
                                        <vs-checkbox v-model="formDataDoc.requiredFile">
                                            Required
                                        </vs-checkbox>
                                        <!-- <div class="flex items-center" >
                                        <div class="flex items-center justify-center">
                                            <input class="w-[23px] h-[23px] " type="checkbox" id="checkbox"
                                                :disabled="file.type != 'application/pdf'"
                                                v-model="formDataDoc.requiredFile" />
                                        </div>
                                        <div class="flex items-center justify-center"> Required</div>
                                    </div> -->
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
                                                <input type="file" ref="file" id="upload" hidden
                                                    @change="uploadFile" /><label class="flex cursor-pointer" for="upload">
                                                    <div><md-icon>upload</md-icon></div>
                                                    <div class="flex items-center justify-center ml-[10px]">Upload From
                                                        Driver
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="flex mt-[10px] cursor-pointer">
                                                <div><md-icon>document_scanner</md-icon></div>
                                                <div class="flex items-center justify-center  ml-[10px]">Upload With Scan
                                                </div>
                                            </div>
                                        </div>
                                    </template>
                                </vs-tooltip>
                            </div>
                            <div class="mt-[50px]">
                                <div class="mb-[8px] text-[#2D3349] font-bold text-[12px] ">Related Files <span
                                        v-if="formDataDoc.allRelated.length != 0"> ({{ formDataDoc.allRelated.length
                                        }})</span>
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
                                            <div @click="removeFileRelated(i)" class="cursor-pointer">
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
                                                    <div class="flex items-center justify-center ml-[10px]">Upload From
                                                        Driver
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="flex mt-[10px] cursor-pointer">
                                                <div><md-icon>document_scanner</md-icon></div>
                                                <div class="flex items-center justify-center  ml-[10px]">Upload With Scan
                                                </div>
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
                            @click="submitDarft()">
                            Draft
                        </button>
                    </div>
                    <div>
                        <button
                            class="h-[38px]text-[center] rounded-[6px] bg-[#3C7CFC] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]"
                            @click="saveOrEdit()">Create
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
                        <div @click="formDataDoc.favoriteDoc = !formDataDoc.favoriteDoc"><md-icon
                                :style="{ color: formDataDoc.favoriteDoc == true ? '#FFB927' : '#79ACF9' }">star_outline</md-icon>
                        </div>
                        <!-- <div><md-icon>star_outline</md-icon></div> -->
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
                                        <vs-switch success style="height: 22px;" v-model="formDataDoc.after_approval"
                                            disabled>
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
                                <div v-if="formDataDoc.addMember.length != 0" v-for="(data, i) in formDataDoc.addMember "
                                    :key="i" class="flex">
                                    <div class="flex justify-center items-center">
                                        <vs-avatar circle :badge-color="data.status === true ? '#4FBD9E' : '#FFCB14'"
                                            badge-position="bottom-right" :color="data.color">
                                            <template #text>
                                                {{ data.name }}
                                            </template>

                                            <template #badge v-if="data.status != null">
                                                <div>
                                                    <div v-if="data.status == true">
                                                        <img src="../../assets/image/vertify.png"
                                                            class="flex justify-center items-center w-[15px] h-[15px] cursor-pointer">
                                                    </div>
                                                    <div v-else
                                                        class="flex justify-center items-center w-[15px] h-[15px] cursor-pointer">
                                                        !
                                                    </div>

                                                </div>
                                            </template>

                                        </vs-avatar>
                                    </div>
                                    <div class="flex justify-center items-center"
                                        v-if="i != formDataDoc.addMember.length - 1">
                                        <md-icon style=" color:#3C7CFC;">arrow_right_alt</md-icon>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="mt-[10px] mr-[10px]">
                            <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Tag</div>
                            <div class="flex text-center" v-if="formDataDoc.tagArr.length != 0">
                                <div class="h-[20px] pl-[10px] pr-[10px]  flex justify-center text-center bg-[#6B7490] text-[white] rounded-[100px] mr-[10px]"
                                    v-for="(tag, i) in  formDataDoc.tagArr" :key="i">
                                    <div class="flex items-center justify-between">
                                        <div class="text-[10px] flex justify-center items-center font-bold">{{ tag.name }}
                                        </div>
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
                                    <div class="mb-[8px] text-[#2D3349] font-bold text-[12px] w-[70%]">Approval
                                        Document<span v-if="formDataDoc.allFile.length != 0"> ({{ formDataDoc.allFile.length
                                        }})</span>
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
                                                <md-icon style=" color:#369C7B;">{{ file.checkSignal == true ? 'done' :
                                                    'edit'
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
                                        <div class="mb-[8px] text-[#F8AB0D] font-bold text-[12px] ml-[10px]">Revise all
                                        </div>
                                    </div>
                                </div>

                                <div class="flex mt-[-5px] ml-[-5px] " v-for="(file, i) in formDataDoc.allFile" :key="i">
                                    <vs-button border color="#369C7B" :active="file.type == true" @click="file.type = true">
                                        Approve
                                    </vs-button>
                                    <vs-button border color="#F8AB0D" :active="file.type == false"
                                        @click="file.type = false">
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
                                            <div><textarea class="w-[100%] min-h-[100px] mt-[12px]"
                                                    v-model="note"></textarea>
                                            </div>
                                            <div
                                                class="border-b-2  border-[#E5EAF6] ml-[-25px] mr-[-25px] mt-[20px] mb-[20px]">
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
                                @click="dailogReject = !dailogReject">
                                Reject
                            </button>
                            <button
                                class="h-[38px]text-[center] rounded-[6px] ml-[10px] bg-[#6B7490] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]"
                                @click="dailogActLog = !dailogActLog">
                                Activity Log
                            </button>
                        </div>

                    </div>
                    <div>
                        <button
                            class="h-[38px]text-[center] rounded-[6px] bg-[#3C7CFC] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]"
                            @click="startFlow">Confirm
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
                                        <vs-switch success style="height: 22px;" v-model="formDataDoc.after_approval"
                                            disabled>
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
                                <div v-if="formDataDoc.addMember.length != 0" v-for="(data, i) in formDataDoc.addMember "
                                    :key="i" class="flex">
                                    <div class="flex justify-center items-center">
                                        <vs-avatar circle :badge-color="data.status === true ? '#4FBD9E' : '#FFCB14'"
                                            badge-position="bottom-right" :color="data.color">
                                            <template #text>
                                                {{ data.name }}
                                            </template>

                                            <template #badge v-if="data.status != null">
                                                <div>
                                                    <div v-if="data.status == true">
                                                        <img src="../../assets/image/vertify.png"
                                                            class="flex justify-center items-center w-[15px] h-[15px] cursor-pointer">
                                                    </div>
                                                    <div v-else
                                                        class="flex justify-center items-center w-[15px] h-[15px] cursor-pointer">
                                                        !
                                                    </div>

                                                </div>
                                            </template>

                                        </vs-avatar>
                                    </div>
                                    <div class="flex justify-center items-center"
                                        v-if="i != formDataDoc.addMember.length - 1">
                                        <md-icon style=" color:#3C7CFC;">arrow_right_alt</md-icon>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="mt-[10px] mr-[10px]">
                            <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Tag</div>
                            <div class="flex text-center" v-if="formDataDoc.tagArr.length != 0">
                                <div class="h-[20px] pl-[10px] pr-[10px]  flex justify-center text-center bg-[#6B7490] text-[white] rounded-[100px] mr-[10px]"
                                    v-for="(tag, i) in  formDataDoc.tagArr" :key="i">
                                    <div class="flex items-center justify-between">
                                        <div class="text-[10px] flex justify-center items-center font-bold">{{ tag.name }}
                                        </div>
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
                                    <div class="mb-[8px] text-[#2D3349] font-bold text-[12px] w-[70%]">Approval
                                        Document<span v-if="formDataDoc.allFile.length != 0"> ({{ formDataDoc.allFile.length
                                        }})</span>
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
                                                <md-icon style=" color:#369C7B;">{{ file.checkSignal == true ? 'done' :
                                                    'edit'
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
                                                <div
                                                    class="flex items-center justify-center cursor-pointer w-[30px] h-[30px] mr-[10px]">
                                                    <md-icon style=" color:#F8AB0D;" v-if="file.type == false"
                                                        @click="OpenNote = !OpenNote">maps_ugc</md-icon>
                                                </div>
                                            </div>

                                            <!-- <div class="w-[128px] ">
                                            <img class="w-[128px] h-[32px]  mt-[-8px] ml-[13px] cursor-pointer"
                                                :src="reUpload" @click="actionUploadFile = !actionUploadFile">
                                        </div> -->
                                            <div>
                                                <vs-tooltip bottom shadow not-hover v-model="actionReUploadFile">
                                                    <div class="w-[128px]">
                                                        <img class="w-[128px] h-[32px] mt-[-8px] ml-[12px] mr-[6px] cursor-pointer"
                                                            :src="reUpload"
                                                            @click="actionReUploadFile = !actionReUploadFile">
                                                    </div>
                                                    <template #tooltip>
                                                        <div class="m-[10px]">
                                                            <div class="flex ">
                                                                <input type="file" ref="aaa" id="upload" hidden
                                                                    @change="reUploadFile($event.target.files, file)" /><label
                                                                    class="flex cursor-pointer" for="upload">
                                                                    <div><md-icon>upload</md-icon></div>
                                                                    <div
                                                                        classfil="flex items-center justify-center ml-[10px]">
                                                                        Upload From Driver
                                                                    </div>
                                                                </label>
                                                            </div>
                                                            <div class="flex mt-[10px] cursor-pointer">
                                                                <div><md-icon>document_scanner</md-icon></div>
                                                                <div class="flex items-center justify-center  ml-[10px]">
                                                                    Upload
                                                                    With Scan </div>
                                                            </div>
                                                        </div>
                                                    </template>
                                                </vs-tooltip>
                                            </div>
                                            <div class="w-[128px]">
                                                <img class="w-[24px] h-[24px]  mt-[-8px] ml-[13px] cursor-pointer"
                                                    :src="deleteFile" @click="removeFile(i)">
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
                            class="h-[38px]text-[center] rounded-[6px] bg-[#3C7CFC] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]"
                            @click="startComfirm">Revise
                        </button>
                    </div>
                </div>
            </b-modal>

            <!-- //////////////////////////// Activity Log //////////////////////// -->
            <b-modal centered v-model="dailogActLog" size="l" scrollable>
                <template #modal-header>
                    <div>
                        <div class="text-[12px] font-bold text-[#6B7490] mb-[10px]">DITS Project</div>
                        <div class="flex mt-[12px]">
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
                    <div>
                        <div @click="dailogActLog = !dailogActLog" class="cursor-pointer text-right">
                            <md-icon>close</md-icon>
                        </div>
                        <div class="flex mt-[12px]">
                            <div><md-icon style=" color:#79ACF9;">share</md-icon></div>
                            <!-- <div @click="tr.action = !tr.action"><md-icon
                                    :style="{ color: tr.action == true ? '#FFB927' : '#79ACF9' }">star_outline</md-icon>
                            </div> -->
                            <div><md-icon>star_outline</md-icon>
                            </div>
                        </div>
                    </div>
                </template>
                <div>
                    <div class="flex mb-[10px]">
                        <div class="w-[30px] h-[30px] bg-black rounded-[100px]"></div>
                        <div class="ml-[10px]">
                            <div class="text-[10px] text-black font-bold">20/11/2022 21:40</div>
                            <div class="text-[10px] text-black font-bold">Ask for Revise and Comment <span
                                    class="text-[10px] font-normal"> on IV110823_supplierBKK02.pdf</span></div>
                        </div>
                    </div>
                </div>
                <template #modal-footer>
                    <div class="w-100">
                        <button class="bg-[#6B7490] text-white pl-[12px] pr-[12px] pt-[6px] pb-[6px] rounded-[6px]"
                            @click="dailogActLog = !dailogActLog">Black</button>
                    </div>
                </template>
            </b-modal>

            <!-- //////////////////////////// Revise //////////////////////// -->
            <b-modal centered v-model="dailogRevis" size="l" hide-header>
                <div class="flex justify-between">
                    <div class="font-bold text-[20px] text-[#000000]">Revise</div>
                    <div @click="dailogRevis = !dailogRevis" class="cursor-pointer"><md-icon>close</md-icon></div>
                </div>
                <div>
                    <div class="text-[16px] font-bold text-[#2D3349]">Note to members</div>
                    <div class="w-[100%] h-[97px] border rounded-[6px] mt-[8px] pl-[8px] pr-[8px]">Test</div>
                </div>
                <div class="w-[100%] flex justify-between mt-[18px] " v-if="formDataDoc.allFile.length != 0">
                    <div class="w-[70%] mt-[26px] flex flex-col justify-between items-cente">
                        <div class="test w-[307px] h-[32px] mb-[10px] pl-[10px] pr-[10px] flex justify-between items-center"
                            v-for="(file, i) in formDataDoc.allFile" :key="i">
                            <div>
                                <span class="text-[#3C7CFC] font-bold">{{ file.name }}</span>
                                <span class="text-[#3C7CFC] ml-[10px]">
                                    {{ file.size }} MB
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <div>
                            <div class="text-[#2D3349] font-bold text-[12px] w-[20%] mb-[8px]">Signature</div>
                            <div>
                                <div class="mb-[10px]" v-for="(file, i) in formDataDoc.allFile" :key="i">
                                    <vs-checkbox v-model="file.requiredFile">
                                        Required
                                    </vs-checkbox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-[100%] flex justify-between mt-[18px]" v-if="hideRevise">
                    <div class="w-[70%]">
                        <div class="font-bold text-[#6B7490]">Old file</div>
                        <div class="text-[#3C7CFC] mt-[8px]">IV110823_supplierBKK01.pdf</div>
                        <div class="text-[#3C7CFC]">IV110823_supplierBKK01.pdf</div>
                    </div>
                    <div class="w-[30%] ">
                        <div class="font-bold text-[#6B7490]">Date</div>
                        <div class="text-[#6B7490] mt-[8px]">17/02/2023 9:02</div>
                        <div class="text-[#6B7490]">17/02/2023 9:02</div>
                    </div>
                </div>
                <div class="flex flex-col items-center mt-[14px]" @click="hideRevise = !hideRevise">
                    <div class="font-bold text-[#6B7490] text-[12px]">{{ hideRevise == true ? 'Hide' : 'Show Old File' }}
                    </div>
                    <div><md-icon>{{ hideRevise == true ? 'expand_less' : 'expand_more' }}</md-icon></div>

                </div>
                <template #modal-footer>
                    <div class="w-100 flex justify-between">
                        <div>
                            <button class=" text-[#6B7490]  font-bold pl-[12px] pr-[12px] pt-[6px] pb-[6px] rounded-[6px]"
                                @click="dailogRevis = !dailogRevis">Cancle</button>
                        </div>
                        <div>
                            <button
                                class="h-[38px]text-[center] rounded-[6px] bg-[#3C7CFC] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]"
                                @click="startRevis">Send for re-approve
                            </button>
                        </div>
                    </div>
                </template>
            </b-modal>

            <!-- //////////////////////////// Reject //////////////////////// -->
            <b-modal centered v-model="dailogReject" size="l" hide-header>
                <div class="flex justify-between">
                    <div class="font-bold text-[20px] text-[#000000]">Reject</div>
                    <div @click="dailogReject = !dailogReject" class="cursor-pointer"><md-icon>close</md-icon></div>
                </div>
                <div>
                    <div class="text-[16px] font-bold text-[#2D3349]">Note to members</div>
                    <div class="w-[100%] h-[97px] border rounded-[6px] mt-[8px] pl-[8px] pr-[8px]">Test</div>
                </div>
                <template #modal-footer>
                    <div class="w-100 flex justify-between">
                        <div>
                            <button class=" text-[#6B7490]  font-bold pl-[12px] pr-[12px] pt-[6px] pb-[6px] rounded-[6px]"
                                @click="dailogReject = !dailogReject">Cancle</button>
                        </div>
                        <div>
                            <button
                                class="h-[38px]text-[center] rounded-[6px] bg-[red] font-bold text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]"
                                @click="submitReject">Confrim reject
                            </button>
                        </div>
                    </div>
                </template>
            </b-modal>

            <!-- /////////////////////// Success ///////////////// -->
            <b-modal centered v-model="dialogSuccess" size="xl" hide-backdrop hide-header-close hide-header hide-footer
                hidden-footer>
                <div class="flex justify-end">
                    <div @click="dialogSuccess = !dialogSuccess" class="cursor-pointer"><md-icon>close</md-icon></div>
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
                                class="text-[white] h-[25px] flex justify-center items-center rounded-[100px] p-[14px] bg-[#FF5300] mr-[10px]">
                                Reject</div>
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
                                        <vs-switch success style="height: 22px;" v-model="formDataDoc.after_approval"
                                            disabled>
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
                                <div v-if="formDataDoc.addMember.length != 0" v-for="(data, i) in formDataDoc.addMember "
                                    :key="i" class="flex">
                                    <div class="flex justify-center items-center">
                                        <vs-avatar circle :badge-color="data.status === true ? '#4FBD9E' : '#FFCB14'"
                                            badge-position="bottom-right" :color="data.color">
                                            <template #text>
                                                {{ data.name }}
                                            </template>

                                            <template #badge v-if="data.status != null">
                                                <div>
                                                    <div v-if="data.status == true">
                                                        <img src="../../assets/image/vertify.png"
                                                            class="flex justify-center items-center w-[15px] h-[15px] cursor-pointer">
                                                    </div>
                                                    <div v-else
                                                        class="flex justify-center items-center w-[15px] h-[15px] cursor-pointer">
                                                        !
                                                    </div>

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
                                        <div class="text-[10px] flex justify-center items-center font-bold">{{ tag.name }}
                                        </div>
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
                                    <div class="mb-[8px] text-[#2D3349] font-bold text-[12px] w-[70%]">Approval
                                        Document<span v-if="formDataDoc.allFile.length != 0"> ({{ formDataDoc.allFile.length
                                        }})</span>
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
                                                <md-icon style=" color:#369C7B;">{{ file.checkSignal == true ? 'done' :
                                                    'edit'
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
                                                <div
                                                    class="flex items-center justify-center cursor-pointer w-[30px] h-[30px]">
                                                    <md-icon style=" color:#F8AB0D;" v-if="file.type == false"
                                                        @click="OpenNote = !OpenNote">maps_ugc</md-icon>
                                                </div>
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
                                class="h-[38px]text-[center] rounded-[6px] ml-[10px] bg-[#6B7490] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]"
                                @click="dailogActLog = !dailogActLog">
                                Activity Log
                            </button>
                        </div>

                    </div>
                </div>
            </b-modal>
        </div>

        <!-- /////////////////////// createMainProject ///////////////// -->
        <CreateProject :openPopup="$route.query.create" />

        <div v-if="selected.length != 0" class="sticky">
            <div class="flex justify-center items-center">
                <div class="w-[565px] h-[50px] rounded-[10px] bg-[#E9EEF6] shadow-2xl">
                    <div class="flex justify-between">
                        <div class="flex">
                            <div
                                class="flex justify-center items-center w-[55px] h-[50px] rounded-[10px] bg-[#3C7CFC] text-[20px] text-white">
                                {{ selected.length }}</div>
                            <div class="flex justify-center items-center text-[#2D3349] font-medium ml-[10px]"> Document
                                Selected
                            </div>
                        </div>
                        <div class="flex">
                            <div class="flex mr-[30px] hover:bg-sky-100 cursor-pointer">
                                <div class="flex justify-center items-center"><md-icon
                                        style=" color:#FF5300;">delete</md-icon></div>
                                <div @click="deleteDoc()"
                                    class="flex justify-center items-center  font-medium ml-[10px] mt-[3px] text-[#FF5300]">
                                    Delete</div>
                                <div class="border-l-2 border-[#C4C7D3] ml-[20px]"></div>
                            </div>
                            <hr />
                            <div class="flex justify-center items-center mr-[20px] hover:bg-sky-100 cursor-pointer"
                                @click="selected = []">
                                <md-icon>close</md-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import deleteFile from '@/assets/image/deleteFile.png';
import imgUpload from '@/assets/image/test-upload.png';
import ImgClose from '@/assets/image/close.png';
import reUpload from '@/assets/image/re-Upload.png';
import CreateProject from '@/views/document/CreateProject.vue'
import axios from 'axios'

export default {
    components: { CreateProject },
    data() {
        return {
            page: 1,
            max: 10,
            lengthPage: '',
            myValue: '',
            myOptions: [{ id: 1, text: '55' }, { id: 2, text: '5588' }],// or [{id: key, text: value}, {id: key, text: value}]
            selectAll: false,
            selected: [],
            msg: '',
            imgUpload,
            reUpload,
            createMainProject: false,
            ImgClose,
            deleteFile,
            file: null,
            reFile: {},
            fileRelated: null,
            activeType: null,
            OpenNote: false,
            note: '',
            tag: '',
            is_edit: false,
            hideRevise: true,
            actionAddMember: false,
            actionUploadFile: false,
            actionReUploadFile: false,
            actionFilter: false,
            actionRelatedFile: false,
            checkFile: [],
            dataMember: [
                // { id: 1, name: 'Chatchapon Boonpan', color: '#FFB51E', img: 'https://en.pimg.jp/047/504/290/1/47504290.jpg', status: true },
                // { id: 2, name: 'Sasithron Maksai', color: '#79ACF9', img: '', status: true },
                // { id: 3, name: 'Nara Komsan', color: '#369C7B', img: '', status: null },
                // { id: 4, name: 'Zeesa Kewart', color: '#FFB962Q', img: 'https://en.pimg.jp/047/504/290/1/47504290.jpg', status: false }
            ],

            dailogCreateDoc: false,
            dailogStep2: false,
            dailogStep3: false,
            dailogActLog: false,
            dailogRevis: false,
            dialogSuccess: false,
            dailogReject: false,
            formDataDoc: {
                id: '',
                doc_name: '',
                doc_type: '',
                date: '',
                note: '',
                status: '',
                seq_order: null,
                after_approval: false,
                tagArr: [],
                allFile: [],
                allRelated: [],
                requiredFile: false,
                addMember: [],
                favoriteDoc: false,
            },
            filterList: {
                tag: '',
                project: '',
                status: '',
                assigned: '',
                favorite: false,
            },
            DocList: [
                {
                    id: 1,
                    name: "IV110823_supplierBKK01.pdf",
                    type: '',
                    note: '',
                    allFile: [],
                    allRelated: [],
                    seq_order: null,
                    requiredFile: false,
                    after_approval: false,
                    project: "DITS Project",
                    tag: [{ name: 'Suppiler_A' }, { name: 'Invoice' }, { name: 'Suppiler_B' },],
                    create: "8/01/2023 12:45",
                    due_date: "17/02/2023 12:45",
                    status: "Draft",
                    member: [{ id: 1, name: 'Chatchapon Boonpan', color: '#FFB51E', img: 'https://en.pimg.jp/047/504/290/1/47504290.jpg', status: true }, { id: 2, name: 'Sasithron Maksai', color: '#79ACF9', img: '', status: true }, { id: 3, name: 'Nara Komsan', color: '#369C7B', img: '', status: true }],
                    action: false
                },
            ],
            items: [],
            tags: [],
            doc_type: [],
            users: [],
            projects: []
        }
    },
    mounted() {
        this.getDocList()
        this.fetchTag()
        this.fetchDocType()
        this.getUsers()
        this.getProject()
        this.createMainProject = this.$route.query.create
        console.log(this.createMainProject);
    },
    methods: {
        myChangeEvent(val) {
        },
        mySelectEvent({ id, text }) {
        },
        onEnter() {
            this.msg = this.tag;
            this.formDataDoc.tagArr.push({
                name: this.tag.attributes.tagName,
                id: this.tag.id
            }
            )
            this.tag = ''
        },
        covertDate(val) {
            const dateCovert = (new Date(val).toISOString().split("T")[0]).split('-');
            return (dateCovert[2].toString()) + '/' + (dateCovert[1].toString()) + '/' + (dateCovert[0].toString())
        },
        async deleteDoc() {
            await this.selected.forEach(id => {
                axios.delete('http://27.254.144.88:1337/api' + '/documents/' + id)

            });
            setTimeout(() => {
                this.getDocList()
            }, 500);

            this.selected = []

        },
        addDataMember(member) {
            this.formDataDoc.addMember.push({
                index: this.formDataDoc.addMember.length + 1,
                id: member.id,
                name: member.name,
                img: member.img,
            })
            this.actionAddMember = false
            this.dataMember = this.dataMember.filter((m) => {
                return m.id != member.id
            })

        },
        uploadFile() {
            this.file = this.$refs.file.files[0];
            // console.log(this.$refs.file.files[0]);
            // console.log(this.file.type);
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
                this.formDataDoc.allFile.push({
                    id: this.formDataDoc.allFile.length,
                    name: resp.data[0].name,
                    size: resp.data[0].size,
                    type: resp.data[0].mime,
                    id: resp.data[0].id,
                    url: resp.data[0].url
                })
            })
                .catch(function () {
                    console.log('FAILURE!!');
                });
        },
        reUploadFile(file, oldFile) {
            this.reFile.name = file[0].name;
            this.reFile.size = file[0].size
            this.reFile.id = oldFile.id
            this.reFile.type = oldFile.type
            this.reFile.checkSignal = oldFile.checkSignal
            this.formDataDoc.allFile.fill(this.reFile, oldFile.id, 2)
            // console.log(this.reFile);
            // this.formDataDoc.allFile.push({
            //     name: this.file.name,
            //     size: this.file.size,
            //     type: null, //true คือ Approve false คือ Revise all
            //     checkSignal: false
            // })

        },
        uploadFileRelated() {
            this.fileRelated = this.$refs.fileaa.files[0];
            this.formDataDoc.allRelated.push(this.fileRelated)
        },
        submitDraft() {
            this.DocList.push({
                id: 1,
                name: this.formDataDoc.doc_name,
                type: this.formDataDoc.doc_type,
                note: this.formDataDoc.note,
                allFile: this.formDataDoc.allFile,
                allRelated: this.formDataDoc.allRelated,
                seq_order: this.formDataDoc.seq_order,
                requiredFile: this.formDataDoc.requiredFile,
                after_approval: this.formDataDoc.after_approval,
                project: "DITS Project",
                tag: this.formDataDoc.tagArr,
                create: "8/01/2023 12:45",
                due_date: "17/02/2023 12:45",
                status: "Draft",
                member: this.formDataDoc.addMember,
                action: false

            })
            this.dailogCreateDoc = false
        },
        submitReject() {
            this.DocList.push({
                id: 1,
                name: this.formDataDoc.doc_name,
                type: this.formDataDoc.doc_type,
                note: this.formDataDoc.note,
                allFile: this.formDataDoc.allFile,
                allRelated: this.formDataDoc.allRelated,
                seq_order: this.formDataDoc.seq_order,
                requiredFile: this.formDataDoc.requiredFile,
                after_approval: this.formDataDoc.after_approval,
                project: "DITS Project",
                tag: this.formDataDoc.tagArr,
                create: "8/01/2023 12:45",
                due_date: "17/02/2023 12:45",
                status: "Reject",
                member: this.formDataDoc.addMember,
                action: false
            })
            this.dailogStep2 = false
            this.dailogReject = false
        },
        createStartFlow() {
            this.dailogStep2 = true
            this.dailogCreateDoc = false
        },
        createDoc() {
            this.is_edit = false
            this.formDataDoc.doc_name = '',
                this.formDataDoc.doc_type = '',
                this.formDataDoc.date = '',
                this.formDataDoc.note = '',
                this.formDataDoc.status = '',
                this.formDataDoc.seq_order = null,
                this.formDataDoc.after_approval = false,
                this.formDataDoc.tagArr = [],
                this.formDataDoc.allFile = [],
                this.formDataDoc.allRelated = [],
                this.formDataDoc.requiredFile = false,
                this.formDataDoc.addMember = []
            this.dailogCreateDoc = true
        },
        startFlow() {
            this.dailogStep2 = false
            this.dailogStep3 = true

        },
        closeDialog() {
            this.dailogCreateDoc = false
            this.formDataDoc.doc_name = '',
                this.formDataDoc.doc_type = '',
                this.formDataDoc.date = '',
                this.formDataDoc.note = '',
                this.formDataDoc.status = '',
                this.formDataDoc.seq_order = null,
                this.formDataDoc.after_approval = false,
                this.formDataDoc.tagArr = [],
                this.formDataDoc.allFile = [],
                this.formDataDoc.allRelated = [],
                this.formDataDoc.requiredFile = false,
                this.formDataDoc.addMember = []
        },
        startComfirm() {

            this.dailogRevis = true
        },
        startRevis() {
            this.DocList.push({
                id: 1,
                name: this.formDataDoc.doc_name,
                type: this.formDataDoc.doc_type,
                note: this.formDataDoc.note,
                allFile: this.formDataDoc.allFile,
                allRelated: this.formDataDoc.allRelated,
                seq_order: this.formDataDoc.seq_order,
                requiredFile: this.formDataDoc.requiredFile,
                after_approval: this.formDataDoc.after_approval,
                project: "DITS Project",
                tag: this.formDataDoc.tagArr,
                create: "8/01/2023 12:45",
                due_date: "17/02/2023 12:45",
                status: "Draft",
                member: this.formDataDoc.addMember,
                action: false
            })
            this.dialogSuccess = true
            this.dailogRevis = false
            this.dailogStep3 = false
        },
        statusSuccess() {

        },

        removeTag(i) {
            this.formDataDoc.tagArr.splice(i, 1)
        },
        removeMember(data, i) {
            this.formDataDoc.addMember.splice(i, 1)
            this.dataMember.push(data)
        },
        removeFile(id, i) {
            if (this.is_edit == true) {
                axios.delete('http://27.254.144.88:1337/api' + '/document-files/' + id)
                this.formDataDoc.allFile.splice(i, 1)
            }
            else {
                axios.delete('http://27.254.144.88:1337/api' + '/upload/files/' + id)
                this.formDataDoc.allFile.splice(i, 1)
            }


        },
        removeFileRelated(i) {
            this.formDataDoc.allRelated.splice(i, 1)
        },

        getDocList() {
            // console.log(this.$route?.query.approve);
            this.items = []
            const checkSequen = this.$route.query.seq ? this.$route.query.seq : ''
            this.filterList.status = this.$route.query.approve ? this.$route.query.approve : this.filterList.status
            this.filterList.project = this.$route.query.project ? this.$route.query.project : this.filterList.project
            const checkFav = this.$route.query.favorte ? this.$route.query.favorte : this.filterList.favorite ? 'true' : ''
            fetch('http://27.254.144.88:1337/api' + '/documents?populate=*&pagination[page]='+this.page+
                '&filters[status][$containsi]='+this.filterList.status+'&pagination[pageSize]=10&filters[favoriteDoc][$containsi]='
                +checkFav+'&filters[project][id][$containsi]='+this.filterList.project+'&filters[sequentialOrder][$containsi]='+checkSequen)
            // fetch('http://27.254.144.88:1337/api' +'/documents?populate=*&pagination[page]=1&filters[status][$containsi]='+this.filterList.status+'&pagination[pageSize]=10&filters[favoriteDoc][$containsi]=&filters[project][id][$containsi]=&filters[sequentialOrder][$containsi]=')
                .then(response => response.json())
                .then((resp) => {
                    this.lengthPage = resp.meta.pagination.pageCount
                    const arr = []
                    arr.push(resp.data)
                    this.items = arr[0]
                })
        },
        covertDate2(val) {
            const dateCovert = (new Date(val).toISOString().split("T")[0]).split('-');
            return (dateCovert[0].toString()) + '-' + (dateCovert[1].toString()) + '-' + (dateCovert[2].toString())
        },
        getUsers() {
            fetch('http://27.254.144.88:1337/api' + '/users?populate=*')
                .then(response => response.json())
                .then((resp) => {
                    resp.forEach((data, i) => {
                        this.dataMember.push({
                            name: data.firstName + ' ' + data.lastName,
                            img: data.profilePic == null ? '' : 'http://27.254.144.88:1337' + data.profilePic.url,
                            id: data.id,
                            index: i + 1,
                        })
                    })

                })
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
        getFiles() {
            fetch('http://27.254.144.88:1337/api' + '/document-files?populate=*&filters[document][id][$eq]=' + this.formDataDoc.id)
                .then(response => response.json())
                .then((resp) => {
                    resp.data.forEach(data => {
                        this.formDataDoc.allFile.push({
                            id: data.id,
                            name: data.attributes.fileName,
                            size: data.attributes.fileSize,
                            type: true, //true คือ Approve false คือ Revise all
                            checkSignal: false

                        })

                    });
                    resp.data.forEach(data => {
                        this.checkFile.push({
                            id: data.id,
                            name: data.attributes.fileName,
                            size: data.attributes.fileSize,
                            type: true, //true คือ Approve false คือ Revise all
                            checkSignal: false

                        })

                    });
                })

        },

        fetchTag() {
            fetch('http://27.254.144.88:1337/api' + '/tags?populate=*')
                .then(response => response.json())
                .then((resp) => {
                    const arr = []
                    arr.push(resp.data)
                    this.tags = arr[0]
                })
        },
        fetchDocType() {
            fetch('http://27.254.144.88:1337/api' + '/document-types?populate=*')
                .then(response => response.json())
                .then((resp) => {
                    const arr = []
                    arr.push(resp.data)
                    this.doc_type = arr[0]
                })
        },
        fetchDetail(id) {
            this.is_edit = true
            this.formDataDoc.allFile = [],
                this.formDataDoc.tagArr = []
            this.formDataDoc.addMember = []
            fetch('http://27.254.144.88:1337/api' + '/documents/' + id + '?populate=*')
                .then(response => response.json())
                .then((resp) => {
                    if (resp.data.attributes.status === 1) {
                        this.formDataDoc.id = resp.data.id
                        this.dailogCreateDoc = true
                        this.formDataDoc.doc_name = resp.data.attributes.docName
                        this.formDataDoc.status = resp.data.attributes.status
                        this.formDataDoc.seq_order = resp.data.attributes.sequentialOrder
                        this.formDataDoc.date = this.covertDate2(resp.data.attributes.dueDate)
                        resp.data.attributes.tags.data.forEach((data, i) => {
                            this.formDataDoc.tagArr.push({
                                name: data.attributes.tagName,
                                id: data.id
                            });

                        })
                        resp.data.attributes.relatedUser.data.forEach((data, i) => {

                            this.formDataDoc.addMember.push({
                                id: data.id,
                                name: data.attributes.firstName + ' ' + data.attributes.laststName,
                                img: '',
                            });

                        })
                        this.formDataDoc.note = resp.data.attributes.note
                        this.formDataDoc.doc_type = resp.data.attributes.document_type.data?.id
                        this.getFiles()
                    }

                })
            // if (data.status == "Draft") {
            //     console.log(data);
            //     this.dailogCreateDoc = true
            //     this.formDataDoc.doc_name = data.name,
            //         this.formDataDoc.doc_type = data.type,
            //         this.formDataDoc.date = '',
            //         this.formDataDoc.status = data.staus
            //    
            //         this.formDataDoc.seq_order = data.seq_order,
            //         this.formDataDoc.after_approval = data.after_approval,
            //         
            //         this.formDataDoc.allFile = data.allFile,
            //         this.formDataDoc.allRelated = data.allRelated,
            //         this.formDataDoc.requiredFile = false
            // }
            // else if (data.status == "Reject") {
            //     console.log(data);
            //     this.dialogSuccess = true
            //     this.formDataDoc.doc_name = data.name,
            //         this.formDataDoc.doc_type = data.type,
            //         this.formDataDoc.date = '',
            //         this.formDataDoc.note = data.note,
            //         this.formDataDoc.seq_order = data.seq_order,
            //         this.formDataDoc.after_approval = data.after_approval,
            //         this.formDataDoc.tagArr = data.tag,
            //         this.formDataDoc.allFile = data.allFile,
            //         this.formDataDoc.allRelated = data.allRelated,
            //         this.formDataDoc.requiredFile = false

            // }

        },
        saveOrEdit() {
            const tags = this.formDataDoc.tagArr.map(item => item.id);
            const member = this.formDataDoc.addMember.map(item => item.id)
            axios.post('http://27.254.144.88:1337/api' + '/documents', {
                "data": {
                    "docName": this.formDataDoc.doc_name,
                    "document_type": this.formDataDoc.doc_type,
                    "document_folder": 1,
                    "tags": tags,
                    "dueDate": this.formDataDoc.date,
                    "note": this.formDataDoc.note,
                    "sequentialOrder": this.formDataDoc.seq_order,
                    "project": 1,
                    "relatedUser": member,
                    "status": 1
                }
            })
                .then((resp2) => {
                    this.dailogCreateDoc = false
                    this.getDocList()
                    this.formDataDoc.allFile.forEach(data => {
                        axios.post('http://27.254.144.88:1337/api' + '/document-files', {
                            "data": {
                                "fileName": data.name,
                                "filePath": 'http://27.254.144.88:1337' + data.url,
                                "fileSize": data.size,
                                "document_folder": null,
                                "fileContent": null,
                                "document": resp2.data.data.id
                            }
                        })
                    })

                })
                .catch(function (error) {

                });


        },
        submitDarft() {
            if (this.is_edit == true) {
                console.log(this.checkFile);
                const tags = this.formDataDoc.tagArr.map(item => item.id);
                const member = this.formDataDoc.addMember.map(item => item.id)
                axios.put('http://27.254.144.88:1337/api' + '/documents/' + this.formDataDoc.id, {
                    "data": {
                        "docName": this.formDataDoc.doc_name,
                        "document_type": this.formDataDoc.doc_type,
                        "dSocument_folder": 1,
                        "tags": tags,
                        "dueDate": this.formDataDoc.date,
                        "note": this.formDataDoc.note,
                        "sequentialOrder": this.formDataDoc.seq_order,
                        "relatedUser": member,
                        "status": 1
                    }
                })
                    .then((resp2) => {
                        this.dailogCreateDoc = false
                        const mergedArray = [...this.formDataDoc.allFile, ...this.checkFile];
                        const countMap = mergedArray.reduce((acc, obj) => {
                            if (!acc[obj.name]) {
                                acc[obj.name] = 0;
                            }
                            acc[obj.name]++;
                            return acc;
                        }, {});
                        const result = mergedArray.filter(obj => countMap[obj.name] === 1);
                        console.log(this.checkFile);
                        result.forEach(data => {
                            axios.post('http://27.254.144.88:1337/api' + '/document-files', {
                                "data": {
                                    "fileName": data.name,
                                    "filePath": 'http://27.254.144.88:1337' + data.url,
                                    "fileSize": data.size,
                                    "document_folder": null,
                                    "fileContent": null,
                                    "document": resp2.data.data.id
                                }
                            })

                        })
                        this.getDocList()
                    })
                    .catch(function (error) {

                    });

            }
            else {
                const tags = this.formDataDoc.tagArr.map(item => item.id);
                const member = this.formDataDoc.addMember.map(item => item.id)
                axios.post('http://27.254.144.88:1337/api' + '/documents', {
                    "data": {
                        "docName": this.formDataDoc.doc_name,
                        "document_type": this.formDataDoc.doc_type,
                        "document_folder": 1,
                        "tags": tags,
                        "dueDate": this.formDataDoc.date,
                        "note": this.formDataDoc.note,
                        "sequentialOrder": this.formDataDoc.seq_order,
                        "project":   parseInt(this.$route.query.project),
                        "relatedUser": member,
                        "favoriteDoc": false,
                        "status": 1
                    }
                })
                    .then((resp2) => {
                        this.dailogCreateDoc = false
                        this.getDocList()
                        this.formDataDoc.allFile.forEach(data => {
                            axios.post('http://27.254.144.88:1337/api' + '/document-files', {
                                "data": {
                                    "fileName": data.name,
                                    "filePath": 'http://27.254.144.88:1337' + data.url,
                                    "fileSize": data.size,
                                    "document_folder": null,
                                    "fileContent": null,
                                    "document": resp2.data.data.id
                                }
                            })
                        })

                    })
                    .catch(function (error) {

                    });
            }

        },
        changeFavorite(status, id) {
            console.log(status);
            axios.put('http://27.254.144.88:1337/api' + '/documents/' + id, {
                "data": {
                    "favoriteDoc": status
                }
            })

        },
        clearfilter() {
            this.$route.query.approve = ''
            this.$route.query.seq = ''
            this.$route.query.favorite = false
            this.filterList.assigned = ''
            this.filterList.favorite = false
            this.filterList.project = ''
            this.filterList.status = ''
            this.filterList.tag = ''
            this.getDocList()
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

.sticky {
    position: -webkit-sticky;
    position: sticky;
    bottom: 20px;
}
</style>