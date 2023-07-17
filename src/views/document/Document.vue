<template>
    <div>
        <div class="h-[100%] bg-white m-[10px] rounded-[10px]">
            <div class="p-[20px]">
                <div class="text-[20px] font-bold">{{ $route.query.name }}</div>
                <div class="flex justify-between items-center mt-[24px]">

                    <div class="flex">
                        <button class="btn-create text-[12px] text-[#6B7490] font-bold hover:bg-sky-100"
                            @click="$store.state.role_perrmission.documentCreate ? createDoc() : null">Create
                            Document</button>
                        <div>
                            <vs-tooltip bottom shadow not-hover not-arrow v-model="actionFilter">
                                <div>
                                    <button class="btn-filter text-[12px] text-[#6B7490] font-bold hover:bg-sky-100"
                                        @click="getUsers(), actionFilter = !actionFilter">Filter</button>
                                </div>
                                <template #tooltip>
                                    <div>
                                        <div class="flex m-[20px]">
                                            <div class="mr-[20px]">
                                                <select class=" select-opt w-[130px] h-[30px] rounded-[6px]"
                                                    v-model="filterList.assigned">
                                                    <option disabled value="">Assigned...</option>
                                                    <option value="">All</option>
                                                    <option v-for="data in dataMember" :value="data.id">
                                                        {{ data.name }}</option>
                                                    <!-- <option val="">Darft</option>
                                                    <option>Resive</option>
                                                    <option>Peding</option> -->
                                                </select>

                                            </div>
                                            <div>
                                                <select class=" select-opt w-[130px] h-[30px] rounded-[6px]"
                                                    v-model="filterList.project">
                                                    <option disabled value="">Project...</option>
                                                    <!-- <option value="">All</option> -->
                                                    <option v-for="data in projects" :value="data.id">
                                                        {{ data.attributes.projectName }}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="flex m-[20px]">
                                            <div class="flex">
                                                <div class="mr-[20px]">
                                                    <select class=" select-opt w-[130px] h-[30px] rounded-[6px]"
                                                        v-model="filterList.tag">
                                                        <option disabled value=''>Tag...</option>
                                                        <option value="">All</option>
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
                                                <vs-button type="filled" @click="getDocList(filterSearch), actionFilter = false">Save
                                                    Filter</vs-button>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                            </vs-tooltip>
                        </div>
                    </div>
                    <div>
                        <input type="search" class="input_br w-[230px] h-[38px] rounded-[6px]" @input="handleSearch"
                            v-model="filterSearch" placeholder="Search">
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
                                        <div class="flex cursor-pointer">
                                            <div class="flex justify-center items-center"><vs-checkbox :val="tr.id"
                                                    v-model="selected" /></div>
                                            <div @click="$store.state.role_perrmission.documentView ? fetchDetail(tr.id) : null"
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
                                                    {{ tr.attributes.tags.data[0]?.attributes.tagName }}</div>
                                            </div>
                                            <div class="flex">
                                                <div
                                                    class="h-[25px] mb-[5px] bg-[#6B7490] flex items-center justify-center rounded-[100px] p-[10px] text-[white]">
                                                    {{ tr.attributes.tags.data[1]?.attributes.tagName }}</div>
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
                                                    'Draft' : tr.attributes.status === 2 ? tr.attributes.sequentialOrder? 'Pending [Serial]':'Pending [Paralell]' :
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
                                <div @click="getDocList(this.filterSearch)" class="cursor-pointer" v-if="lengthPage != 0">
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
                <div class="text-[12px] font-bold text-[#6B7490]">{{ $route.query.name }}</div>
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
                            <div><input class="w-[370px] h-[30px] rounded-[6px]" v-model="formDataDoc.doc_name" readonly />
                            </div>
                        </div>
                        <div class="mt-[10px] mr-[10px]">
                            <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Document Type</div>
                            <div>
                                <select class=" select-opt w-[370px] h-[30px] rounded-[6px]" v-model="formDataDoc.doc_type"
                                    @change="changeDocType(formDataDoc.doc_type)">
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
                                            <vs-radio v-model="formDataDoc.seq_order" :val="false">
                                                <div class="text-[10px]">Parallel</div>
                                            </vs-radio>
                                            <vs-radio v-model="formDataDoc.seq_order" :val="true">
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
                                        <vs-checkbox v-model="file.requireFile">
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
                            @click=" is_edit ? $store.state.role_perrmission.documentEdit ? submitDarft() : null : submitDarft()">
                            Draft
                        </button>
                    </div>
                    <div>
                        <button
                            class="h-[38px]text-[center] rounded-[6px] bg-[#3C7CFC] text-[white] text-[12px] pl-[12px] pb-[6px] pr-[12px] pt-[6px]"
                            @click="  is_edit ? $store.state.role_perrmission.documentEdit ? saveOrEdit() : null : saveOrEdit()">Create
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
                <div class="text-[12px] font-bold text-[#6B7490] mb-[10px]">{{ $route.query.name }}</div>

                <div class="flex mb-[10px] justify-between">
                    <div class="flex">
                        <div class="text-[18px] font-bold text-[black] mr-[10px]">{{ formDataDoc.doc_name }}</div>
                        <!-- <div class=" flex">
                            <div class="text-[white] h-[25px] flex justify-center items-center rounded-[100px] p-[14px]"
                                :style="{
                                    background: tr.status == 'Draft' ?
                                        '#BCC7D6' : tr.status === 'Pending [Serial] 2/3' ? '#79ACF9' : tr.status === 'Approved' ? '#369C7B' : '#6B7490'
                                }">
                                {{ tr.status }}</div>
                        </div> -->
                        <div class="flex">
                            <div class="text-[white] h-[25px] flex justify-center items-center rounded-[100px] p-[14px] bg-[#BCC7D6] mr-[10px]"
                                :style="{
                                    background: formDataDoc.status == 1 ?
                                        '#BCC7D6' : formDataDoc.status === 2 ? '#79ACF9' : formDataDoc.status == 3 ? '#FFB927' : formDataDoc.status === 4 ? '#369C7B' : formDataDoc.status === 5 ? 'red' : '#6B7490'
                                }">
                                {{ formDataDoc.status == 1 ?
                                    'Draft' : formDataDoc.status === 2 ? formDataDoc.seq_order ? 'Pending [Serial] ' + '' + test() +
                                '/' + formDataDoc.addMember.length : 'Pending [Parallel] ' + '' + test() +
                                '/' + formDataDoc.addMember.length :
                                formDataDoc.status === 4 ? 'Approved' : formDataDoc.status === 5 ? 'Reject' : 'Revise' }}
                            </div>
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
                                        <div class="text-[12px]">{{ covertDay(formDataDoc.createAt) }} by</div>
                                    </div>
                                    <div class="flex items-center justify-center ml-[8px]">
                                        <vs-avatar circle>
                                            <template #text>
                                                {{ formDataDoc.createBy.attributes.firstName }} {{
                                                    formDataDoc.createBy.attributes.lastName }}
                                            </template>
                                        </vs-avatar>
                                    </div>
                                </div>
                                <div>
                                    <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Due Date</div>
                                    <div class="text-[12px]">{{ covertDay(formDataDoc.date) }}</div>
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
                                            <vs-radio v-model="formDataDoc.seq_order" :val="false" disabled>
                                                <div class="text-[10px]">Parallel</div>
                                            </vs-radio>
                                            <vs-radio v-model="formDataDoc.seq_order" :val="true" disabled>
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
                                    <div v-if="data.revise == true">
                                        <vs-avatar circle badge-color="#4FBD9E" badge-position="bottom-right"
                                            :color="data.color">
                                            <template #text>
                                                {{ data.name }}
                                            </template>
                                            <template #badge>
                                                <div>
                                                    <div
                                                        class="flex justify-center items-center w-[15px] h-[15px] cursor-pointer">
                                                        !
                                                    </div>
                                                </div>
                                            </template>
                                        </vs-avatar>
                                    </div>
                                    <div v-else>
                                        <div v-if="data.approved === true" class="flex justify-center items-center">
                                            <vs-avatar circle :badge-color="data.approved === true ? '#4FBD9E' : ''"
                                                badge-position="bottom-right" :color="data.color">
                                                <template #text>
                                                    {{ data.name }}
                                                </template>
                                                <template #badge v-if="data.approved != null">
                                                    <div>
                                                        <div v-if="data.approved == true">
                                                            <img src="../../assets/image/vertify.png"
                                                                class="flex justify-center items-center w-[15px] h-[15px] cursor-pointer">
                                                        </div>
                                                        <!-- <div v-else
                                                        class="flex justify-center items-center w-[15px] h-[15px] cursor-pointer">
                                                        !
                                                    </div> -->
                                                    </div>
                                                </template>
                                            </vs-avatar>
                                        </div>
                                        <div v-else class="flex justify-center items-center">
                                            <vs-avatar circle :color="data.color">
                                                <template #text>
                                                    {{ data.name }}
                                                </template>
                                            </vs-avatar>
                                        </div>
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
                                            <div class="flex">
                                                <div v-if="formDataDoc.seq_order">
                                                    <div class="cursor-pointer" v-if="file.signature == true"
                                                        @click="checkRoleSingnal(file.path, file.id, file.idApprovalResponsibilities)">
                                                        <md-icon style=" color:#369C7B;">{{ file.checkSignal == true ?
                                                            'done' :
                                                            'edit'
                                                        }}</md-icon>
                                                    </div>
                                                </div>
                                                <div v-else>
                                                    <div class="cursor-pointer" v-if="file.signature == true"
                                                        @click="openPupupPDF(file.path, file.id, file.idApprovalResponsibilities)">
                                                        <md-icon style=" color:#369C7B;">{{ file.checkSignal == true ?
                                                            'done' :
                                                            'edit'
                                                        }}</md-icon>
                                                    </div>
                                                </div>
                                                <div class="cursor-pointer" @click="downloadPDF(file.path, file.name)">
                                                    <md-icon style=" color:#79ACF9;">download </md-icon>
                                                </div>
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
                                    <vs-button border color="#369C7B" :active="file.checkSignal == true"
                                        @click="file.checkSignal = true">
                                        Approve
                                    </vs-button>
                                    <vs-button border color="#F8AB0D" :active="file.revise == true"
                                        @click="file.revise = !file.revise, changeRvise(file.revise, file.idApprovalResponsibilities, file.id)">
                                        Revise
                                    </vs-button>
                                    <!-- <vs-button border color="#F8AB0D" :active="file.checkSignal == false"
                                        @click="file.checkSignal = false">
                                        Revise
                                    </vs-button> -->
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
                            @click="startFlow()">Confirm
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
                <div class="text-[12px] font-bold text-[#6B7490] mb-[10px]">{{ $route.query.name }}</div>

                <div class="flex mb-[10px] justify-between">
                    <div class="flex">
                        <div class="text-[18px] font-bold text-[black] mr-[10px]">{{ formDataDoc.doc_name }}</div>
                        <!-- <div class=" flex">
                            <div class="text-[white] h-[25px] flex justify-center items-center rounded-[100px] p-[14px]"
                                :style="{
                                    background: tr.status == 'Draft' ?
                                        '#BCC7D6' : tr.status === 'Pending [Serial] 2/3' ? '#79ACF9' : tr.status === 'Approved' ? '#369C7B' : '#6B7490'
                                }">
                                {{ tr.status }}</div>
                        </div> -->
                        <div class="flex">
                            <div class="text-[white] h-[25px] flex justify-center items-center rounded-[100px] p-[14px] bg-[#BCC7D6] mr-[10px]"
                                :style="{
                                    background: formDataDoc.status == 1 ?
                                        '#BCC7D6' : formDataDoc.status === 2 ? '#79ACF9' : formDataDoc.status == 3 ? '#FFB927' : formDataDoc.status === 4 ? '#369C7B' : formDataDoc.status === 5 ? 'red' : '#6B7490'
                                }">
                                {{ formDataDoc.status == 1 ?
                                    'Draft' : formDataDoc.status === 2 ? 'Pending [Serial]' + ' ' + test() +
                                        '/' + formDataDoc.addMember.length :
                                        formDataDoc.status === 4 ? 'Approved' : formDataDoc.status === 5 ? 'Reject' : 'Revise' }}
                            </div>
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
                                        <div class="text-[12px]">{{ covertDay(formDataDoc.createAt) }} by</div>
                                    </div>
                                    <div class="flex items-center justify-center ml-[8px]">
                                        <vs-avatar circle>
                                            <template #text>
                                                {{ formDataDoc.createBy.attributes.firstName }} {{
                                                    formDataDoc.createBy.attributes.lastName }}
                                            </template>
                                        </vs-avatar>
                                    </div>
                                </div>
                                <div>
                                    <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Due Date</div>
                                    <div class="text-[12px]">{{ covertDay(formDataDoc.date) }}</div>
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
                                            <vs-radio v-model="formDataDoc.seq_order" :val="false" disabled>
                                                <div class="text-[10px]">Parallel</div>
                                            </vs-radio>
                                            <vs-radio v-model="formDataDoc.seq_order" :val="true" disabled>
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
                                    <div v-if="data.revise == true">
                                        <vs-avatar circle badge-color="#4FBD9E" badge-position="bottom-right"
                                            :color="data.color">
                                            <template #text>
                                                {{ data.name }}
                                            </template>
                                            <template #badge>
                                                <div>
                                                    <div
                                                        class="flex justify-center items-center w-[15px] h-[15px] cursor-pointer">
                                                        !
                                                    </div>
                                                </div>
                                            </template>
                                        </vs-avatar>
                                    </div>
                                    <div v-else>
                                        <div v-if="data.approved === true" class="flex justify-center items-center">
                                            <vs-avatar circle :badge-color="data.approved === true ? '#4FBD9E' : ''"
                                                badge-position="bottom-right" :color="data.color">
                                                <template #text>
                                                    {{ data.name }}
                                                </template>
                                                <template #badge v-if="data.approved != null">
                                                    <div>
                                                        <div v-if="data.approved == true">
                                                            <img src="../../assets/image/vertify.png"
                                                                class="flex justify-center items-center w-[15px] h-[15px] cursor-pointer">
                                                        </div>
                                                        <!-- <div v-else
                                                        class="flex justify-center items-center w-[15px] h-[15px] cursor-pointer">
                                                        !
                                                    </div> -->
                                                    </div>
                                                </template>
                                            </vs-avatar>
                                        </div>
                                        <div v-else class="flex justify-center items-center">
                                            <vs-avatar circle :color="data.color">
                                                <template #text>
                                                    {{ data.name }}
                                                </template>
                                            </vs-avatar>
                                        </div>
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
                                            <div class="flex">
                                                <div v-if="!file.revise">
                                                    <md-icon style=" color:#369C7B;">{{ file.checkSignal == true ? 'done' :
                                                        'edit'
                                                    }}</md-icon>
                                                </div>
                                                <div class="cursor-pointer" @click="downloadPDF(file.path, file.name)">
                                                    <md-icon style=" color:#79ACF9;">download</md-icon>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex items-center" v-for="(file, i) in formDataDoc.allFile" :key="i">
                                            <div class="flex  ml-[12px] mb-[10px] w-[65px] ">
                                                <div class="h-[30px] rounded-[12px] text-white pb-[8px] pt-[8px] pl-[12px] pr-[12px] text-[10px] flex justify-center items-center"
                                                    :style="{ background: file.revise == true ? '#F8AB0D' : '' }">{{
                                                        file.revise == true ? 'Revise' : '' }}
                                                </div>
                                                <div v-if="file.revise == true">
                                                    <vs-tooltip bottom shadow not-hover v-model="file.popup">
                                                        <div class="w-[128px] flex justify-center item-start">
                                                            <img class="w-[128px] h-[32px]  ml-[30px] mr-[6px] cursor-pointer"
                                                                :src="reUpload" @click="toggleTooltip(file)">
                                                        </div>
                                                        <template #tooltip>
                                                            <div class="m-[10px]">
                                                                <div class="flex ">
                                                                    <input type="file" ref="test" id="upload" hidden
                                                                        @change="reUploadFile($event, file.revise, file.idApprovalResponsibilities, file.id)" /><label
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
                                                                    <div
                                                                        class="flex items-center justify-center  ml-[10px]">
                                                                        Upload
                                                                        With Scan </div>
                                                                </div>
                                                            </div>
                                                        </template>
                                                    </vs-tooltip>
                                                </div>
                                                <!-- <div
                                                    class="flex items-center justify-center cursor-pointer w-[30px] h-[30px] mr-[10px]">
                                                    <md-icon style=" color:#F8AB0D;" v-if="file.revise== true"
                                                        @click="OpenNote = !OpenNote">maps_ugc</md-icon>
                                                </div> -->
                                            </div>

                                            <!-- <div class="w-[128px] ">
                                            <img class="w-[128px] h-[32px]  mt-[-8px] ml-[13px] cursor-pointer"
                                                :src="reUpload" @click="actionUploadFile = !actionUploadFile">
                                        </div> -->

                                            <div class="w-[128px] ml-[120px]" v-if="file.revise == true">
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
                                    <vs-checkbox v-model="formDataDoc.allFile.required">
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
                    <input class="w-[100%] h-[97px] border rounded-[6px] mt-[8px] pl-[8px] pr-[8px]" v-model="formDataDoc.noteSpecial" />
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
                <div class="text-[12px] font-bold text-[#6B7490] mb-[10px]">{{ $route.query.name }}</div>

                <div class="flex mb-[10px] justify-between">
                    <div class="flex">
                        <div class="text-[18px] font-bold text-[black] mr-[10px]">{{ formDataDoc.doc_name }}f</div>
                        <!-- <div class=" flex">
                            <div class="text-[white] h-[25px] flex justify-center items-center rounded-[100px] p-[14px]"
                                :style="{
                                    background: tr.status == 'Draft' ?
                                        '#BCC7D6' : tr.status === 'Pending [Serial] 2/3' ? '#79ACF9' : tr.status === 'Approved' ? '#369C7B' : '#6B7490'
                                }">
                                {{ tr.status }}</div>
                        </div> -->
                        <div class="flex">
                            <div class="text-[white] h-[25px] flex justify-center items-center rounded-[100px] p-[14px] bg-[#BCC7D6] mr-[10px]"
                                :style="{
                                    background: formDataDoc.status == 1 ?
                                        '#BCC7D6' : formDataDoc.status === 2 ? '#79ACF9' : formDataDoc.status == 3 ? '#FFB927' : formDataDoc.status === 4 ? '#369C7B' : formDataDoc.status === 5 ? 'red' : '#6B7490'
                                }">
                                {{ formDataDoc.status == 1 ?
                                    'Draft' : formDataDoc.status === 2 ? 'Pending [Serial] 2/3' :
                                        formDataDoc.status ===
                                            4 ? 'Approved' : formDataDoc.status === 5 ? 'Reject' : 'Revise' }}
                            </div>
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
                                        <div class="text-[12px]">{{ covertDay(formDataDoc.createAt) }} by</div>
                                    </div>
                                    <div class="flex items-center justify-center ml-[8px]">
                                        <vs-avatar circle>
                                            <template #text>
                                                {{ formDataDoc.createBy.attributes.firstName }} {{
                                                    formDataDoc.createBy.attributes.lastName }}
                                            </template>
                                        </vs-avatar>
                                    </div>
                                </div>
                                <div>
                                    <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Due Date</div>
                                    <div class="text-[12px]">{{ covertDay(formDataDoc.date) }}</div>
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
                                            <vs-radio v-model="formDataDoc.seq_order" :val="false" disabled>
                                                <div class="text-[10px]">Parallel</div>
                                            </vs-radio>
                                            <vs-radio v-model="formDataDoc.seq_order" :val="true" disabled>
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
                                    <div v-if="data.approved === true" class="flex justify-center items-center">

                                        <vs-avatar circle :badge-color="data.approved === true ? '#4FBD9E' : ''"
                                            badge-position="bottom-right" :color="data.color">
                                            <template #text>
                                                {{ data.name }}
                                            </template>
                                            <template #badge v-if="data.approved != null">
                                                <div>
                                                    <div v-if="data.approved == true">
                                                        <img src="../../assets/image/vertify.png"
                                                            class="flex justify-center items-center w-[15px] h-[15px] cursor-pointer">
                                                    </div>
                                                    <!-- <div v-else
                                                        class="flex justify-center items-center w-[15px] h-[15px] cursor-pointer">
                                                        !
                                                    </div> -->
                                                </div>
                                            </template>
                                        </vs-avatar>

                                    </div>
                                    <div v-else class="flex justify-center items-center">
                                        <vs-avatar circle :color="data.color">
                                            <template #text>
                                                {{ data.name }}
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
                                                <!-- <md-icon style=" color:#369C7B;">{{ file.checkSignal == true ? 'done' :
                                                    'edit'
                                                }}</md-icon> -->
                                                <div class="cursor-pointer" @click="downloadPDF(file.path, file.name)">
                                                    <md-icon style=" color:#79ACF9;">download</md-icon>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex items-center" v-for="(file, i) in formDataDoc.allFile" :key="i">
                                            <div class="flex  ml-[12px] mb-[10px] w-[65px] ">
                                                <!-- <div class="rounded-[12px] text-white pb-[8px] pt-[8px] pl-[12px] pr-[12px] text-[10px] flex justify-center items-center"
                                                    :style="{ background: file.type == true ? '#369C7B' : '#F8AB0D' }">{{
                                                        file.type
                                                        == true ? 'Approve' : 'Revise' }}
                                                </div> -->
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
                                <div v-if="formDataDoc.status === 5">
                                    <div class="mt-[20px]">
                                        <div class="mb-[8px] text-[#2D3349] font-bold text-[12px]">Note to members</div>
                                        <input class="w-[100%] h-[97px] border rounded-[6px] mt-[8px] pl-[8px] pr-[8px] text-[#2D3349] text-[12px]" readonly v-model="formDataDoc.noteSpecial" />
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
        <div v-if="openPDF">
            <WebViewer :initialDoc="pathPDF" :idFile="idFile" :open="true" :getFiles="getFiles"
                :idApprovalResponsibilities="idApprovalResponsibilities" />
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
                                <div @click=" $store.state.role_perrmission.documentDelete ? deleteDoc() : null"
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
// import Select2 from 'v-select2-component';
import CreateProject from '@/views/document/CreateProject.vue'
import WebViewer from './WebViewer.vue';
import axios from 'axios'
// import jsPDF from "jspdf";

export default {
    components: {  CreateProject, WebViewer },
    data() {
        return {
            timer: null,
            reFile: null,
            checkRevise: false,
            page: 1,
            max: 10,
            lengthPage: '',
            nextNumbering: '',
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
            pathPDF: '',
            idFile: '',
            idApprovalResponsibilities: '',
            is_edit: false,
            hideRevise: true,
            actionAddMember: false,
            actionUploadFile: false,
            actionReUploadFile: false,
            actionFilter: false,
            actionRelatedFile: false,
            checkApprove: null,
            switchStates: [],
            checkViewPermission: null,
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
            openPDF: false,
            formDataDoc: {
                id: '',
                doc_name: '',
                doc_type: '',
                date: '',
                noteSpecial:'',
                note: '',
                doc_folder:'',
                status: '',
                seq_order: false,
                after_approval: false,
                tagArr: [],
                allFile: [],
                allRelated: [],
                requiredFile: false,
                addMember: [],
                favoriteDoc: false,
                createBy: {}
            },
            filterList: {
                tag: '',
                project: '',
                status: '',
                assigned: '',
                favorite: false,
            },
            filterSearch: '',
            items: [],
            tags: [],
            doc_type: [],
            users: [],
            projects: []
        }
    },
    mounted() {
        this.filterList.project = this.$route.query.project
        this.getUsers()
        this.getDocList(this.filterSearch)
        this.fetchTag()
        this.getPorjectDetail()
        this.fetchDocType()

        this.getProject()
        this.createMainProject = this.$route.query.create
    },
    methods: {
        toggleTooltip(file) {
            // console.log(file);
            file.popup = !file.popup;
        },
        openPupupPDF(path, idFile, idApprovalResponsibilities) {
            this.idFile = idFile
            this.pathPDF = path
            this.openPDF = true
            this.idApprovalResponsibilities = idApprovalResponsibilities
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
                this.getDocList(this.filterSearch)
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
            // console.log(this.formDataDoc.addMember)
            this.actionAddMember = false
            this.dataMember = this.dataMember.filter((m) => {
                return m.id != member.id
            })

        },
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
                this.formDataDoc.allFile.push({
                    id: this.formDataDoc.allFile.length,
                    required: true,
                    popup: false,
                    requireFile:false,
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
        reUploadFile(event, data, id, idFile,) {
            this.reFile = event.target.files[0];
            // console.log(id)
            // axios.put('http://27.254.144.88:1337/api' + '/approval-responsibilities/' + id, {
            //     "data": {
            //         "revise": false,
            //     }
            // })
            // axios.put('http://27.254.144.88:1337/api' + '/document-files/' + idFile, {
            //     "data": {
            //         "revise": false,
            //     }
            // })
            // axios.put('http://27.254.144.88:1337/api' + '/documents/' +this.formDataDoc.id, {
            //     "data": {
            //         "status": 2,
            //     }
            // })
            let formData = new FormData();
            formData.append('files', this.reFile);
            axios.post('http://27.254.144.88:1337/api' + '/upload',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
            ).then((resp) => {
                console.log(resp.data[0].url)
                axios.put('http://27.254.144.88:1337/api' + '/document-files/' + idFile, {
                    "data": {
                        "fileName": resp.data[0].name,
                        "fileSize": resp.data[0].size,
                        "filePath": 'http://27.254.144.88:1337' + resp.data[0].url,
                        "revise": false,
                    }
                })
                fetch('http://27.254.144.88:1337/api' + '/approval-responsibilities?populate=*&filters[document_file][id][$eq]=' + idFile)
                    .then(response => response.json())
                    .then((resp) => {
                        resp.data.forEach((data) => {
                            axios.put('http://27.254.144.88:1337/api' + '/approval-responsibilities/' + data.id, {
                                "data": {
                                    "revise": false,
                                    "approved": false
                                }
                            })
                        })
                    })
            }).catch(function () {
                console.log('FAILURE!!');
            })
                .finally(() => {
                    this.getFiles()
                })

        },
        uploadFileRelated() {
            this.fileRelated = this.$refs.fileaa.files[0];
            this.formDataDoc.allRelated.push(this.fileRelated)
        },
        submitReject() {
            // const tags = this.formDataDoc.tagArr.map(item => item.id);
            // const member = this.formDataDoc.addMember.map(item => item.id)
            axios.put('http://27.254.144.88:1337/api' + '/documents/' + this.formDataDoc.id, {
                "data": {
                    // "docName": this.formDataDoc.doc_name,
                    // "document_type": this.formDataDoc.doc_type,
                    // "tags": tags,
                    // "dueDate": this.formDataDoc.date,
                    // "note": this.formDataDoc.note,
                    // "sequentialOrder": this.formDataDoc.seq_order,
                    // "relatedUser": member,
                    "noteSpecial":this.formDataDoc.noteSpecial,
                    "status": 5
                }
            }).then(() => {
                this.getDocList(this.filterSearch)
            })
            // this.DocList.push({
            //     id: 1,
            //     name: this.formDataDoc.doc_name,
            //     type: this.formDataDoc.doc_type,
            //     note: this.formDataDoc.note,
            //     allFile: this.formDataDoc.allFile,
            //     allRelated: this.formDataDoc.allRelated,
            //     seq_order: this.formDataDoc.seq_order,
            //     requiredFile: this.formDataDoc.requiredFile,
            //     after_approval: this.formDataDoc.after_approval,
            //     project: "DITS Project",
            //     tag: this.formDataDoc.tagArr,
            //     create: "8/01/2023 12:45",
            //     due_date: "17/02/2023 12:45",
            //     status: "Reject",
            //     member: this.formDataDoc.addMember,
            //     action: false
            // })
            this.dailogStep2 = false
            this.dailogReject = false
        },
        createStartFlow() {
            this.dailogStep2 = true
            this.dailogCreateDoc = false
        },
        createDoc() {
            this.is_edit = false
            this.getUsers()
            this.getPorjectDetail()
            // this.formDataDoc.doc_name = '',
            //     this.formDataDoc.doc_type = '',
            this.formDataDoc.date = '',
                this.formDataDoc.note = '',
                this.formDataDoc.status = '',
                this.formDataDoc.seq_order = false,
                this.formDataDoc.after_approval = false,
                this.formDataDoc.tagArr = [],
                this.formDataDoc.allFile = [],
                this.formDataDoc.allRelated = [],
                this.formDataDoc.requiredFile = false,
                this.formDataDoc.addMember = []
            this.dailogCreateDoc = true
        },
        startFlow() {
            // console.log(this.checkRevise);
            const allApproved = this.formDataDoc.addMember.every((item) => item.approved === true);
            axios.put('http://27.254.144.88:1337/api' + '/documents/' + this.formDataDoc.id, {
                "data": {
                    "status": this.checkRevise == true ? 3 : allApproved == true ? 4 : 2
                }
            }).then(() => {
                this.formDataDoc.status = 4,
                    this.getDocList(this.filterSearch)
                this.dailogStep2 = false
                // this.dialogSuccess = true
            })
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
            axios.put('http://27.254.144.88:1337/api' + '/documents/' + this.formDataDoc.id, {
                "data": {
                    "status": 2,
                }
            })
            setTimeout(() => {
                this.getDocList(this.filterSearch)
            }, 200)
            this.dailogStep3 = false
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

        getDocList(seaech) {
            this.items = []
            const checkSequen = this.$route.query.seq ? this.$route.query.seq : ''
            this.filterList.status = this.$route.query.approve ? this.$route.query.approve : this.filterList.status
            // this.filterList.project = this.$route.query.project ? this.$route.query.project : this.filterList.project
            const checkFav = this.$route.query.favorte ? this.$route.query.favorte : this.filterList.favorite ? 'true' : ''
            fetch('http://27.254.144.88:1337/api' + '/documents?populate=*&pagination[page]=' + this.page +
                '&filters[status][$containsi]=' + this.filterList.status + '&pagination[pageSize]=10&filters[favoriteDoc][$containsi]='
                + checkFav + '&filters[project][id][$containsi]=' + this.filterList.project + '&filters[sequentialOrder][$containsi]=' + checkSequen + '&filters[tags][id][$containsi]=' + this.filterList.tag
                + '&filters[relatedUser][id][$containsi]=' + this.filterList.assigned + '&filters[docName][$containsi]='+seaech)
                // fetch('http://27.254.144.88:1337/api' +'/documents?populate=*&pagination[page]=1&filters[status][$containsi]='+this.filterList.status+'&pagination[pageSize]=10&filters[favoriteDoc][$containsi]=&filters[project][id][$containsi]=&filters[sequentialOrder][$containsi]=')
                .then(response => response.json())
                .then((resp) => {
                    // console.log(this.checkViewPermission)
                    if (this.checkViewPermission == false) {
                        resp.data.forEach((data) => {
                            // console.log(data.attributes.relatedUser);
                            data.attributes.relatedUser.data.forEach((data2) => {
                                if (this.$store.state.userInfo.id == data2.id) {
                                    this.items.push(data)
                                }
                            })
                            // console.log(data)
                        })
                    }
                    else {
                        this.lengthPage = resp.meta.pagination.pageCount
                        const arr = []
                        arr.push(resp.data)
                        this.items = arr[0]
                    }

                })
        },
        covertDate2(val) {
            const dateCovert = (new Date(val).toISOString().split("T")[0]).split('-');
            return (dateCovert[0].toString()) + '-' + (dateCovert[1].toString()) + '-' + (dateCovert[2].toString())
        },
        getUsers() {
            this.dataMember = []
            fetch('http://27.254.144.88:1337/api' + '/projects/' + this.$route.query.project + '?populate=*')
                .then(response => response.json())
                .then((resp) => {
                    this.checkViewPermission = resp.data.attributes.viewPermission
                    resp.data.attributes.member.data.forEach((data, i) => {
                        this.dataMember.push({
                            name: data.attributes.firstName + ' ' + data.attributes.lastName,
                            // img: data.profilePic == null ? '' : 'http://27.254.144.88:1337' + data.profilePic.url,
                            img: '',
                            id: data.id,
                            index: i + 1,
                        })
                    })
                })
        },
        getProject() {
            fetch('http://27.254.144.88:1337/api' + '/projects?populate=*&filters[organization][id][$eq]=' + this.$store.state.userDetail.organization.id)
                .then(response => response.json())
                .then((resp) => {
                    const arr = []
                    arr.push(resp.data)
                    this.projects = arr[0]
                })
        },
        getFiles() {
            this.formDataDoc.allFile = []
            this.formDataDoc.addMember = []
            fetch('http://27.254.144.88:1337/api' + '/approval-responsibilities?populate=*&filters[id_document][id][$eq]=' + this.formDataDoc.id + '&filters[user][id][$eq]=' + this.$store.state.userInfo.id)
                .then(response => response.json())
                .then((resp) => {
                    resp.data.forEach(data => {
                        if (data.attributes.document_file.data) {
                            this.formDataDoc.allFile.push({
                                idApprovalResponsibilities: data.id,
                                id: data.attributes.document_file.data?.id,
                                name: data.attributes.document_file.data?.attributes.fileName,
                                size: data.attributes.document_file.data?.attributes.fileSize,
                                path: data.attributes.document_file.data?.attributes.filePath,
                                revise: data.attributes.revise,
                                popup: false,
                                type: null, //true คือ Approve false คือ Revise all
                                checkSignal: data.attributes.approved,
                                signature: data.attributes.document_file.data?.attributes.signature
                            })
                        }
                    })
                    resp.data.forEach(data => {
                        if (data.attributes.document_file.data) {
                            this.checkFile.push({
                                id: data.attributes.document_file.data?.id,
                                name: data.attributes.document_file.data?.attributes.fileName,
                                size: data.attributes.document_file.data?.attributes.fileSize,
                                path: data.attributes.document_file.data?.attributes.filePath,
                                type: true, //true คือ Approve false คือ Revise all
                                checkSignal: data.attributes.approved,
                                signature: data.attributes.document_file.data?.attributes.signature
                            })
                        }
                    });
                    let value = null;
                    let allCheckSignalsTrue = true;
                    for (const item of this.formDataDoc.allFile) {
                        if (!item.checkSignal) {
                            allCheckSignalsTrue = false;
                            break;
                        }
                    }
                    if (allCheckSignalsTrue) {
                        // fetch('http://27.254.144.88:1337/api' + '/approval-responsibilities?populate=*&filters[id_document][id][$eq]=' + this.formDataDoc.id + '&filters[user][id][$eq]=' + this.$store.state.userInfo.id)
                        //     .then(response => response.json())
                        //     .then((resp) => {
                        //         const data = resp.data.map(item => item.id)
                        //         data.forEach(element => {
                        //             axios.put('http://27.254.144.88:1337/api/approval-responsibilities/'+element,{
                        //                 "data":{
                        //                     "approved": this.checkApprove,
                        //                 }
                        //             })
                        //         });
                        //     })
                        this.checkApprove = true;
                    }

                    // console.log(this.checkApprove);

                    fetch('http://27.254.144.88:1337/api' + '/approval-responsibilities?populate=*&filters[id_document][id][$eq]=' + this.formDataDoc.id+'&filters[document_file][signature][$eq]=true')
                        .then(response => response.json())
                        .then((resp) => {
                            const dataMem = []
                            resp.data.forEach(data => {
                                dataMem.push({
                                    id: data.attributes.user.data.id,
                                    name: data.attributes.user.data.attributes.firstName + '' + data.attributes.user.data.attributes.lastName,
                                    img: '',
                                    revise: data.attributes.revise,
                                    sequenceOrder: data.attributes.sequenceOrder,
                                    approved: data.attributes.approved
                                });
                            })
                            console.log(dataMem);
                            const resultMap = new Map();
                            for (const item of dataMem) {
                                const { id, approved, revise } = item;
                                if (!resultMap.has(id)) {
                                    resultMap.set(id, { id, name: item.name, revise: null, img: item.img, sequenceOrder: item.sequenceOrder, approved: null });
                                }
                                const storedItem = resultMap.get(id);
                                if (approved === true && storedItem.approved !== false) {
                                    storedItem.approved = true;
                                } else if (approved === false) {
                                    storedItem.approved = false;
                                }
                                if (revise === false && storedItem.revise !== true) {
                                    storedItem.revise = false;
                                } else if (revise === true) {
                                    storedItem.revise = true;
                                }
                            }
                            this.formDataDoc.addMember = Array.from(resultMap.values());
                            console.log(this.formDataDoc.addMember);
                            // console.log(result);
                            // var uniqueIds = new Set();
                            // // Filter out the duplicate IDs
                            // this.formDataDoc.addMember = dataMem.filter(function (member) {
                            //     var id = member.id;
                            //     // If the ID is not already present in the Set, add it and keep the member
                            //     if (!uniqueIds.has(id)) {
                            //         uniqueIds.add(id);
                            //         return true;
                            //     }
                            //     // If the ID is already present, discard the member
                            //     return false;
                            // });
                        })
                })
                .finally(() => {
                    this.openPDF = false
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
        covertDay(data) {
            const date = new Date(data);
            const options = { day: 'numeric', month: 'short', year: 'numeric' };
            const formattedDate = date.toLocaleDateString('en-GB', options);
            return formattedDate
        },
        fetchDetail(id) {
            this.is_edit = true
            const status = ''
            this.formDataDoc.allFile = [],
                this.formDataDoc.tagArr = []
            this.formDataDoc.addMember = []
            fetch('http://27.254.144.88:1337/api' + '/documents/' + id + '?populate=*')
                .then(response => response.json())
                .then((resp) => {
                    this.status = resp.data.attributes.status
                    this.formDataDoc.createAt = this.covertDate2(resp.data.attributes.createdAt)
                    this.formDataDoc.id = resp.data.id
                    this.formDataDoc.note = resp.data.attributes.note
                    this.formDataDoc.noteSpecial = resp.data.attributes.noteSpecial
                    this.formDataDoc.createBy = resp.data.attributes.createBy.data
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
                    this.formDataDoc.note = resp.data.attributes.note
                    this.formDataDoc.doc_type = resp.data.attributes.document_type.data?.attributes.documentTypeName
                    setTimeout(() => {
                        this.getFiles()
                    }, 200);
                }).finally(() => {
                    if (this.status === 1) {
                        this.dailogCreateDoc = true
                    }
                    else if (this.status === 2) {
                        this.dailogStep2 = true
                    }
                    else if (this.status === 5 || this.status === 4) {
                        this.dialogSuccess = true
                    }
                    else if (this.status === 3) {
                        if (this.$store.state.userInfo.id == this.formDataDoc.createBy.id) {
                            this.dailogStep3 = true
                        }
                    }
                })
        },
        saveOrEdit() {
            const tags = this.formDataDoc.tagArr.map(item => item.id);
            const member = this.formDataDoc.addMember.map(item => item.id)
            if (this.is_edit == true) {
                axios.put('http://27.254.144.88:1337/api' + '/documents/' + this.formDataDoc.id, {
                    "data": {
                        "docName": this.formDataDoc.doc_name,
                        "document_type": this.formDataDoc.doc_type,
                        "tags": tags,
                        "favoriteDoc": false,
                        "dueDate": this.formDataDoc.date,
                        "note": this.formDataDoc.note,
                        "sequentialOrder": this.formDataDoc.seq_order,
                        "relatedUser": member,
                        "status": 2
                    }
                })
                    .then((resp2) => {
                        this.dailogCreateDoc = false
                        this.getDocList(this.filterSearch)
                        const mergedArray = [...this.formDataDoc.allFile, ...this.checkFile];
                        const countMap = mergedArray.reduce((acc, obj) => {
                            if (!acc[obj.name]) {
                                acc[obj.name] = 0;
                            }
                            acc[obj.name]++;
                            return acc;
                        }, {});
                        const result = mergedArray.filter(obj => countMap[obj.name] === 1);
                        result.forEach(data => {
                            axios.post('http://27.254.144.88:1337/api' + '/document-files', {
                                "data": {
                                    "fileName": data.name,
                                    "filePath": 'http://27.254.144.88:1337' + data.url,
                                    "fileSize": data.size,
                                    "document_folder": this.formDataDoc.doc_folder,
                                    "revise": false,
                                    "fileContent": null,
                                    "document": resp2.data.data.id
                                }
                            })

                        })
                        this.fetchDetail(resp2.data.data.id)
                        this.dailogStep2 = true
                    })
                    .catch(function (error) {
                    });
            }
            else if (this.is_edit == false) {
                axios.post('http://27.254.144.88:1337/api' + '/documents/', {
                    "data": {
                        "docName": this.formDataDoc.doc_name,
                        "document_type": this.formDataDoc.doc_type,
                        "tags": tags,
                        "document_folder":this.formDataDoc.doc_folder,
                        "favoriteDoc": false,
                        "dueDate": this.formDataDoc.date,
                        "note": this.formDataDoc.note,
                        "sequentialOrder": this.formDataDoc.seq_order,
                        "project": parseInt(this.$route.query.project),
                        "createBy": this.$store.state.userInfo.id,
                        "relatedUser": member,
                        "status": 2
                    }
                })
                    .then((resp2) => {
                        axios.put('http://27.254.144.88:1337/api' + '/document-types/' + this.formDataDoc.doc_type, {
                            "data": {
                                "nextNumber": this.nextNumbering,
                            }
                        })
                        this.getDocList(this.filterSearch)
                        this.dailogCreateDoc = false
                        this.formDataDoc.allFile.forEach(data => {
                            // console.log(data.required);
                            axios.post('http://27.254.144.88:1337/api' + '/document-files', {
                                "data": {
                                    "fileName": data.name,
                                    "filePath": 'http://27.254.144.88:1337' + data.url,
                                    "fileSize": data.size,
                                    "document_folder": this.formDataDoc.doc_folder,
                                    "revise": false,
                                    "signature": data.requireFile,
                                    "fileContent": null,
                                    // "signature" : this.switchStates[index] ? true : false,
                                    "document": resp2.data.data.id
                                }
                            }).then((resp3) => {
                                member.forEach((data, i) => {
                                    axios.post('http://27.254.144.88:1337/api' + '/approval-responsibilities', {
                                        "data": {
                                            "approved": false,
                                            "document_file": resp3.data.data.id,
                                            "user": data,
                                            "revise": false,
                                            "sequenceOrder": resp2.data.data.attributes.sequentialOrder ? i + 1 : null,
                                            "id_document": resp2.data.data.id
                                        }
                                    })
                                })
                            })
                        })
                        this.fetchDetail(resp2.data.data.id)
                        this.dailogStep2 = true
                    })
                    .catch(function (error) {
                    });
            }
        },
        submitDarft() {
            if (this.is_edit == true) {
                const tags = this.formDataDoc.tagArr.map(item => item.id);
                const member = this.formDataDoc.addMember.map(item => item.id)
                axios.put('http://27.254.144.88:1337/api' + '/documents/' + this.formDataDoc.id, {
                    "data": {
                        "docName": this.formDataDoc.doc_name,
                        "document_type": this.formDataDoc.doc_type,
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
                        result.forEach(data => {
                            axios.post('http://27.254.144.88:1337/api' + '/document-files', {
                                "data": {
                                    "fileName": data.name,
                                    "filePath": 'http://27.254.144.88:1337' + data.url,
                                    "fileSize": data.size,
                                    "document_folder": this.formDataDoc.doc_folder,
                                    "revise": false,
                                    "signature" : data.requireFile,
                                    "fileContent": null,
                                    "document": resp2.data.data.id
                                }
                            }).then((resp3) => {
                                member.forEach((data, i) => {
                                    axios.post('http://27.254.144.88:1337/api' + '/approval-responsibilities', {
                                        "data": {
                                            "approved": false,
                                            "document_file": resp3.data.data.id,
                                            "user": data,
                                            "sequenceOrder": resp2.data.data.attributes.sequentialOrder ? i + 1 : null,
                                            "id_document": resp2.data.data.id
                                        }
                                    })
                                })
                            })
                        })
                        this.getDocList(this.filterSearch)
                    })
                    .catch(function (error) {
                    });

            }
            else {
                let idFile = '';
                const sequentialOrder = null;
                const idDoc = '';
                const tags = this.formDataDoc.tagArr.map(item => item.id);
                const member = this.formDataDoc.addMember.map(item => item.id)
                axios.post('http://27.254.144.88:1337/api' + '/documents', {
                    "data": {
                        "docName": this.formDataDoc.doc_name,
                        "document_type": this.formDataDoc.doc_type,
                        "document_folder":this.formDataDoc.doc_folder,
                        "tags": tags,
                        "dueDate": this.formDataDoc.date,
                        "note": this.formDataDoc.note,
                        "sequentialOrder": this.formDataDoc.seq_order,
                        "project": parseInt(this.$route.query.project),
                        "relatedUser": member,
                        "createBy": this.$store.state.userInfo.id,
                        "favoriteDoc": false,
                        "status": 1
                    }
                })
                    .then((resp2) => {
                        axios.put('http://27.254.144.88:1337/api' + '/document-types/' + this.formDataDoc.doc_type, {
                            "data": {
                                "nextNumber": this.nextNumbering,
                            }
                        })
                        this.idDoc = resp2.data.data.id
                        this.sequentialOrder = resp2.data.data.attributes.sequentialOrder
                        this.dailogCreateDoc = false
                        this.getDocList(this.filterSearch)
                        this.formDataDoc.allFile.forEach(data => {
                            axios.post('http://27.254.144.88:1337/api' + '/document-files', {
                                "data": {
                                    "fileName": data.name,
                                    "filePath": 'http://27.254.144.88:1337' + data.url,
                                    "fileSize": data.size,
                                    "document_folder": this.formDataDoc.doc_folder,
                                    "signature": data.requireFile,
                                    "revise": false,
                                    "fileContent": null,
                                    "document": resp2.data.data.id
                                }
                            }).then((resp3) => {
                                member.forEach((data, i) => {
                                    axios.post('http://27.254.144.88:1337/api' + '/approval-responsibilities', {
                                        "data": {
                                            "approved": false,
                                            "document_file": resp3.data.data.id,
                                            "user": data,
                                            "sequenceOrder": this.sequentialOrder == false ? i + 1 : null,
                                            "id_document": this.idDoc
                                        }
                                    })
                                })
                            })
                        })

                    }).finally(() => {

                    })
                    .catch(function (error) {
                    });
            }
        },
        changeFavorite(status, id) {
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
            this.filterList.project = this.$route.query.project
            this.filterList.status = ''
            this.filterList.tag = ''
            this.getDocList(this.filterSearch)
        },
        downloadPDF(url, name) {
            axios({
                url: url,
                method: 'GET',
                responseType: 'blob',
            }).then((response) => {
                var fileURL = window.URL.createObjectURL(new Blob([response.data]));
                var fileLink = document.createElement('a');
                fileLink.href = fileURL;
                fileLink.setAttribute('download', name);
                document.body.appendChild(fileLink);
                fileLink.click();
            });
        },
        checkRoleSingnal(path, id, idApprovalResponsibilities) {
            const foundMember = this.formDataDoc.addMember.find(member => member.id === this.$store.state.userInfo.id);
            if (foundMember) {
                if (foundMember.sequenceOrder == 1) {
                    this.openPupupPDF(path, id, idApprovalResponsibilities)
                    console.log('ถึงคิวแล้ว คิวแรก');
                }
                else {
                    if (this.formDataDoc.addMember[foundMember.sequenceOrder - 2].approved == true) {
                        this.openPupupPDF(path, id, idApprovalResponsibilities)
                        console.log("ถึงคิวแล้ว")
                    }
                    else {
                        console.log('ยังไม่ถึงคิว');
                    }
                }
                // else{
                //     console.log("")
                // }
                console.log('Found member:', foundMember);
            } else {
                console.log('idUser does not exist in the member array.');
            }
        },
        test() {
            const r = this.formDataDoc.addMember.filter(item => item.approved);
            return r.length

        },
        getPorjectDetail() {
            fetch('http://27.254.144.88:1337/api' + '/projects/' + parseInt(this.$route.query.project) + '?populate=*')
                .then(response => response.json())
                .then((resp) => {
                    console.log(resp);
                    this.formDataDoc.doc_type = resp.data.attributes.defaultType.data.id
                    axios.post('http://27.254.144.88:1337/api/generateId?docType=' + resp.data.attributes.defaultType.data.id, {
                        "pattern": resp.data.attributes.defaultType.data.attributes.pattern
                    }).then((resp2) => {
                        fetch('http://27.254.144.88:1337/api' + '/document-types/'+resp.data.attributes.defaultType.data.id+ '?populate=*')
                        .then(response => response.json())
                        .then((resp3)=>{
                            this.formDataDoc.doc_folder = resp3.data.attributes.createFolder.data.id
                        })
                        this.nextNumbering = resp2.data.arr.nextNumber - 1
                        this.formDataDoc.doc_name = resp2.data.arr.reslt
                    })
                })
        },
        changeDocType(id) {
            setTimeout(() => {
                fetch('http://27.254.144.88:1337/api' + '/document-types/' + id + '?populate=*')
                    .then(response => response.json())
                    .then((resp) => {
                        this.formDataDoc.doc_folder = resp.data.attributes.createFolder.data.id
                        // this.formDataDoc.doc_type = resp.data.attributes.defaultType.data.id  
                        // console.log(this.formDataDoc.doc_type);
                        axios.post('http://27.254.144.88:1337/api/generateId?docType=' + this.formDataDoc.doc_type, {
                            "pattern": resp.data.attributes.pattern
                        }).then((resp2) => {
                            this.nextNumbering = resp2.data.arr.nextNumber - 1
                            this.formDataDoc.doc_name = resp2.data.arr.reslt
                        })
                    })
            }, 500)
        }, changeRvise(data, id, idFile,) {
            this.checkRevise = data
            fetch('http://27.254.144.88:1337/api/' + 'approval-responsibilities?populate=*&filters[document_file][id][$eq]=' + idFile)
                .then(response => response.json())
                .then((resp) => {
                    resp.data.forEach((data2) => {
                        console.log(data2);
                        axios.put('http://27.254.144.88:1337/api' + '/approval-responsibilities/' + data2.id, {
                            "data": {
                                "revise": true,
                            }
                        })
                    })
                })
            axios.put('http://27.254.144.88:1337/api' + '/approval-responsibilities/' + id, {
                "data": {
                    "revise": data,
                }
            })
            axios.put('http://27.254.144.88:1337/api' + '/document-files/' + idFile, {
                "data": {
                    "revise": data,
                }
            })
            axios.put('http://27.254.144.88:1337/api' + '/documents/' + this.formDataDoc.id, {
                "data": {
                    "status": data == true ? 3 : 2,
                }
            })
        },
        // filterSearchText() {
        //     console.log('df');
        //     this.filterSearch = this.filterList.text
        //     setTimeout(() => {
        //         this.getDocList()
        //     }, 500)
        // },
        handleSearch() {
            clearTimeout(this.timer); // Clear the previous timer if it exists
            this.timer = setTimeout(() => {
                this.getDocList(this.filterSearch);
            }, 200);
        }
    },
    watch: {
        filterSearch(newTerm) {
            clearTimeout(this.timer); // Clear the previous timer if it exists
            this.timer = setTimeout(() => {
                this.getDocList(newTerm);
            }, 200);
        }
    },


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