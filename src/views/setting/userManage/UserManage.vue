<template>
    <div class="h-[100%] bg-white m-[10px] rounded-[10px]">
        <div class="p-[20px]">
            <div class="text-[20px] font-bold">User Management</div>
            <div class="flex mt-[14px]">
                <div>
                    <button @click="filterAll()">
                        <div class="flex justify-between w-[170px] h-[72px]  text-[#6B7490]  border-[1px] rounded-[5px] pl-[20px] pr-[20px]"
                            :class="active == 1 ? 'bg-[#3C7CFC]  border-[#3C7CFC] text-white' : 'border-[#6B7490]'">
                            <div class="flex justify-center items-center"><md-icon class="md-size-2x"
                                    :style="{ color: active == 1 ? '#ffffff' : '' }">person_outline</md-icon></div>
                            <div class="flex flex-col justify-center items-center">
                                <div class="text-[12px]">Total Member</div>
                                <!-- <div :class="active == 1 ? ' ' : 'text-[#2D3349]'">{{ user_owner.length }}</div> -->
                            </div>
                        </div>
                    </button>
                </div>
                <div>
                    <button @click="filterExpring()">
                        <div class="ml-[14px] flex flex-col justify-center items-center w-[124px] h-[72px]  border-[1px] text-[#6B7490] rounded-[5px] p-[5px]"
                            :class="active == 2 ? 'bg-[#FFB51E]  border-[#FFB51E] text-white' : 'border-[#6B7490]'">
                            <div class="text-[12px]">Expiring Member</div>
                            <!-- <div :class="active == 2 ? ' ' : 'text-[#2D3349]'">380</div> -->
                        </div>
                    </button>
                </div>
                <div>
                    <button @click="filterExpired()">
                        <div class="ml-[14px] flex flex-col justify-center items-center w-[124px] h-[72px] text-[#6B7490] border-[1px] rounded-[5px] p-[5px]"
                            :class="active == 3 ? 'bg-[#FF2C2C]  border-[#FF2C2C] text-white' : 'border-[#6B7490]'">
                            <div class="text-[12px]">Expired Member</div>
                            <!-- <div :class="active == 3 ? 'text-white ' : 'text-[#2D3349]'">380</div> -->
                        </div>
                    </button>
                </div>
                <div>
                    <button @click="filterActive()">
                        <div class="ml-[14px] flex flex-col justify-center items-center w-[93px] h-[72px] text-[#6B7490] border-[1px] rounded-[5px] p-[5px]"
                            :class="active == 4 ? 'bg-[#42DF6E]  border-[#42DF6E] text-white' : 'border-[#6B7490]'">
                            <div class="text-[12px]">Active Now</div>
                            <!-- <div :class="active == 4 ? 'text-white ' : 'text-[#2D3349]'">380</div> -->
                        </div>
                    </button>
                </div>
            </div>
            <div class="flex justify-between">
                <div class="w-[130px] h-[30px] mt-[28px]">
                    <vs-tooltip bottom shadow not-hover not-arrow v-model="actionFilter">
                        <div>
                            <button class="btn-filter text-[12px] rounded-[5px] text-[#6B7490] font-bold hover:bg-sky-100"
                                @click="actionFilter = !actionFilter">Filter</button>
                        </div>
                        <template #tooltip>
                            <div>
                                <div class="flex ml-[10px] mr-[10px] mt-[10px]">
                                    <div class="flex">
                                        <div class="mr-[20px]">
                                            <div class=" w-[100%] h-[50px]">
                                                <div class="flex justify-between  w-[156px]">
                                                    <div class="flex justify-center items-center mr-[20px]">Silver mumber
                                                    </div>
                                                    <div><vs-checkbox v-model="filter.silver"></vs-checkbox></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex  ml-[10px] mr-[10px]">
                                    <div class="flex">
                                        <div class="mr-[20px]">
                                            <div class=" w-[100%] h-[50px]">
                                                <div class="flex justify-between  w-[156px]">
                                                    <div class="flex justify-center items-center mr-[20px]">Gold mumber
                                                    </div>
                                                    <div><vs-checkbox v-model="filter.gold"></vs-checkbox></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex  ml-[10px] mr-[10px]">
                                    <div class="flex">
                                        <div class="mr-[20px]">
                                            <div class=" w-[100%] h-[50px]">
                                                <div class="flex justify-between  w-[156px]">
                                                    <div class="flex justify-center items-center mr-[20px]">Platnum member
                                                    </div>
                                                    <div><vs-checkbox v-model="filter.platinum"></vs-checkbox></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- <hr class="mt-[-10px]">
                            <div>
                                <div class="flex ml-[10px] mr-[10px]">
                                    <div class="flex">
                                        <div class="mr-[20px]">
                                            <div class=" w-[100%] h-[50px]">
                                                <div class="flex justify-between  w-[156px]">
                                                    <div class="flex justify-center items-center mr-[20px]">Expired member
                                                    </div>
                                                    <div><vs-checkbox></vs-checkbox></div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex ml-[10px] mr-[10px]">
                                    <div class="flex">
                                        <div class="mr-[20px]">
                                            <div class=" w-[100%] h-[50px]">
                                                <div class="flex justify-between w-[156px]">
                                                    <div class="flex justify-center items-center mr-[20px]">Expiring member
                                                    </div>
                                                    <div><vs-checkbox></vs-checkbox></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex ml-[10px] mr-[10px]">
                                    <div class="flex">
                                        <div class="mr-[20px]">
                                            <div class=" w-[100%] h-[50px]">
                                                <div class="flex justify-between w-[156px]">
                                                    <div class="flex justify-center items-center mr-[20px]">Active member
                                                    </div>
                                                    <div><vs-checkbox></vs-checkbox></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> -->
                            <div class="flex justify-end mt-[-10px] mb-[10px]">
                                <vs-button type="filled" @click="getUserOwner('','',filterSearch)">Save Filter</vs-button>
                            </div>
                        </template>
                    </vs-tooltip>

                </div>
                <div class="mt-[28px]">
                    <input type="search" class="input_br w-[230px] h-[38px] rounded-[6px]" placeholder="Search"  v-model="filterSearch" @input="handleSearch">
                    <div class="flex hotfix">
                        <div class="mt-[-2px]"><md-icon>search</md-icon> </div>
                        <div class="border-l-2 h-[21px] border-[#6B7490] "></div>
                    </div>
                </div>

            </div>

            <div class="mt-[18px]">
                <template>
                    <div>
                        <vs-table v-model="selected">
                            <template #thead>
                                <vs-tr>
                                    <vs-th>
                                        Customer
                                    </vs-th>
                                    <vs-th>
                                        Organization
                                    </vs-th>
                                    <vs-th>
                                        Plan
                                    </vs-th>
                                    <vs-th>
                                        Date added
                                    </vs-th>
                                    <vs-th>
                                        Billing date
                                    </vs-th>
                                    <vs-th>
                                        Status
                                    </vs-th>
                                    <!-- <vs-th>
                                        Total member
                                    </vs-th> -->
                                    <vs-th>
                                        Account Enable/Disable
                                    </vs-th>
                                </vs-tr>
                            </template>
                            <template #tbody>
                                <vs-tr :key="i" v-for="(tr, i) in user_owner"
                                    @click="showDataEmployee(tr.id, tr.organization.id)">
                                    <vs-td>
                                        <div class="flex">
                                            <div class="">
                                                <vs-avatar circle>
                                                    <template #text>
                                                        {{ tr.firstName }}
                                                    </template>
                                                </vs-avatar>
                                            </div>
                                            <div>
                                                <div
                                                    class="flex justify-start items-center ml-[8px] text-[#2D3349] font-medium">
                                                    {{
                                                        tr.firstName }} {{ tr.lastName }}
                                                </div>
                                                <div class="flex justify-start items-center ml-[8px] text-[#6B7490]">{{
                                                    tr.email }}
                                                </div>
                                            </div>
                                        </div>
                                    </vs-td>
                                    <vs-td>
                                        {{ tr.organization.orgName }}
                                    </vs-td>
                                    <vs-td>
                                        <div class="flex">
                                            <div class="w-[auto] text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px]"
                                                :style="{ background: tr.package.packageName == 'GOLD' ? '#FFB927' : tr.package.packageName == 'SILVER' ? '#BCC7D6' : tr.package.packageName == 'PLATINUM' ? '#64859F' : '' }">
                                                {{ tr.package.packageName }}</div>
                                        </div>
                                    </vs-td>
                                    <vs-td>
                                        {{ covertDate(tr.createdAt) }}
                                    </vs-td>
                                    <vs-td>
                                        {{ tr.expDate ? covertDate(tr.expDate) : '-' }}
                                    </vs-td>
                                    <vs-td>
                                        <div class="flex">
                                            <!-- <div class=" text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px]"
                                                :style="{ background: tr.action ? '#C4C7D3' : tr.status == 'Active' ? '#2CD67A' : '#FFB51E' }">
                                                {{ tr.action ? "Disbled" : tr.status }}</div> -->
                                            <div class="flex">
                                                <div class=" text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px]"
                                                    :style="{ background: tr.expStatus?'#2CD67A':'red'}">
                                                    {{ tr.expStatus? 'Expiring':'Expired'
                                                    }}
                                                </div>
                                            </div>
                                        </div>
                                    </vs-td>
                                    <!-- <vs-td>
                                        {{ tr.total }}
                                    </vs-td> -->
                                    <vs-td>
                                        <div class="w-[50px]">
                                            <vs-switch success v-model="tr.blocked"
                                                @change="changeStatus(tr.id, tr.blocked)" />
                                        </div>
                                    </vs-td>
                                </vs-tr>
                            </template>
                            <template #footer>
                                <div class="center con-pagination flex justify-end mt-[20px] mb-[20px]">
                                    <vs-pagination not-margin v-model="page1" :length="length1" />
                                </div>
                            </template>
                        </vs-table>
                    </div>
                </template>
            </div>
            <div>
                <b-modal centered size="xl" hide-backdrop hide-header-close hide-header hide-footer v-model="dialogEmplyee">
                    <div class="m-[20px]">
                        <div class="flex justify-between">
                            <div class="text-[20px] font-bold">User Information</div>
                            <div @click="dialogEmplyee = false" class="cursor-pointer"><md-icon>close</md-icon></div>
                        </div>
                        <div class="flex w-[250px] h-[31px] border-[2px] justify-between p-[10px] rounded-[5px] mt-[12px]"
                            :class="action ? 'border-[#42DF6E]' : 'border-[#C4C7D3]'">
                            <div class="flex justify-center items-center">Account<span class="ml-[4px]"
                                    :class="infoUser.status ? 'text-[#C4C7D3]':'text-[#42DF6E]' ">{{ infoUser.status ?
                                        'Disabled':'Enabled' 
                                    }}</span></div>
                            <div class="flex justify-center items-center mt-[1px]"><vs-switch style="height: 22px;" success
                                    v-model="infoUser.status"
                                    @change="changeStatus(infoUser.id, infoUser.status)"></vs-switch></div>
                        </div>
                        <div class="flex mt-[60px]">
                            <div class="w-[30%] flex justify-center items-center">
                                <div class=" w-[160px] h-[160px] rounded-[100%] bg-[#f8f5f5] flex justify-center items-center">No Image</div>
                            </div>

                            <div class="w-[60%] h-[200px] flex flex-col justify-between">
                                <div class="flex">
                                    <div class="w-[auto]  text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px]"
                                        :style="{ background: infoUser.plan == 'GOLD' ? '#FFB927' : infoUser.plan == 'SILVER' ? '#BCC7D6' : infoUser.plan == 'PLATINUM' ? '#64859F' : '' }">
                                        {{ infoUser.plan }}
                                    </div>
                                    <div
                                        class="w-[auto] ml-[8px] bg-[#3C7CFC] text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px]">
                                        {{ infoUser.role }}
                                    </div>
                                    <div class="w-[auto] ml-[8px]  text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px]"
                                        :class="infoUser.status ? 'bg-[#C4C7D3]':'bg-[#42DF6E]'">
                                        {{ infoUser.status ? 'Disabled': 'Active' }}
                                    </div>
                                </div>
                                <div class="grid grid-cols-4 w-[100%] gap-4 mt-[10px] ">
                                    <div>
                                        <div class="text-[12px] font-bold">Name</div>
                                        <div class="text-[#2D3349] text-[12px]">{{ infoUser.name }}</div>
                                    </div>
                                    <div class="">
                                        <div class="text-[12px] font-bold">Email address</div>
                                        <div class="text-[#2D3349] text-[12px]">{{ infoUser.email }}</div>
                                    </div>
                                    <div>
                                        <div class="text-[12px] font-bold">Phone number</div>
                                        <div class="text-[#2D3349] text-[12px]">{{ infoUser.phone }}</div>
                                    </div>
                                    <div>
                                        <div class="text-[12px] font-bold">Organization</div>
                                        <div class="text-[#2D3349] text-[12px]">{{ infoUser.org }}</div>
                                    </div>
                                </div>
                                <div class="grid grid-cols-4 w-[100%] gap-4 mt-[10px] ">
                                    <div>
                                        <div class="text-[12px] font-bold">Date Added</div>
                                        <div class="text-[#2D3349] text-[12px]">{{ infoUser.dateAt ?
                                            covertDate(infoUser.dateAt) : '-' }}</div>
                                    </div>
                                    <div>
                                        <div class="text-[12px] font-bold">Billing Date</div>
                                        <div class="text-[#2D3349] text-[12px]">{{ infoUser.billingDate ?
                                            covertDate(infoUser.billingDate) : '-' }}</div>
                                    </div>
                                    <div class="col-span-2">
                                        <div class="text-[12px] font-bold">Address</div>
                                        <div class="text-[#2D3349] text-[12px]">{{ infoUser.address }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr class="mt-[40px]">
                        <div class="text-[16px] font-medium">Member</div>
                        <div class="mt-[18px]">
                            <template>
                                <div>
                                    <vs-table v-model="selected">
                                        <template #thead>
                                            <vs-tr>
                                                <vs-th>
                                                    Customer
                                                </vs-th>
                                                <vs-th>
                                                    Organization
                                                </vs-th>
                                                <vs-th>
                                                    Type of User
                                                </vs-th>
                                                <vs-th>
                                                    Date added
                                                </vs-th>
                                                <vs-th>
                                                    Status
                                                </vs-th>
                                                <!-- <vs-th>
                                        Total member
                                    </vs-th> -->
                                                <vs-th>
                                                    Account Enable/Disable
                                                </vs-th>
                                            </vs-tr>
                                        </template>
                                        <template #tbody>
                                            <vs-tr :key="i" v-for="(tr, i) in user_employee">
                                                <vs-td>
                                                    <div class="flex">
                                                        <div class="">
                                                            <vs-avatar circle>
                                                                <template #text>
                                                                    {{ tr.firstName }}
                                                                </template>
                                                            </vs-avatar>
                                                        </div>
                                                        <div>
                                                            <div
                                                                class="flex justify-start items-center ml-[8px] text-[#2D3349] font-medium">
                                                                {{
                                                                    tr.firstName }} {{ tr.lastName }}
                                                            </div>
                                                            <div
                                                                class="flex justify-start items-center ml-[8px] text-[#6B7490]">
                                                                {{
                                                                    tr.email }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </vs-td>
                                                <vs-td>
                                                    {{ tr.organization.orgName }}
                                                </vs-td>
                                                <vs-td>
                                                    <div class="flex">
                                                        <div
                                                            class="w-[auto] text-white text-center rounded-[20px] pl-[8px] bg-[#3C7CFC]  pr-[8px]  pt-[2px] pb-[2px]">
                                                            {{ tr.role.name }}</div>
                                                    </div>
                                                </vs-td>
                                                <vs-td>
                                                    {{ covertDate(tr.createdAt) }}
                                                </vs-td>
                                                <vs-td>
                                                    <div class="flex">
                                                        <!-- <div class=" text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px]"
                                                :style="{ background: tr.action ? '#C4C7D3' : tr.status == 'Active' ? '#2CD67A' : '#FFB51E' }">
                                                {{ tr.action ? "Disbled" : tr.status }}</div> -->
                                                        <div class="flex">
                                                            <div class=" text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px]"
                                                                :style="{ background: tr.expStatus == false ? 'red' : tr.blocked ? '#64859F' : '#2CD67A' }">
                                                                {{ tr.expStatus == false ? 'Expired' : tr.blocked ?
                                                                    'Disbled'
                                                                    : 'Active' }}</div>
                                                        </div>
                                                    </div>
                                                </vs-td>
                                                <!-- <vs-td>
                                        {{ tr.total }}
                                    </vs-td> -->
                                                <vs-td>
                                                    <div class="w-[50px]">
                                                        <vs-switch success v-model="tr.blocked"
                                                            @change="changeStatus(tr.id, tr.blocked)" />
                                                    </div>
                                                </vs-td>
                                            </vs-tr>
                                        </template>

                                    </vs-table>
                                    <div class="center con-pagination mt-[-5px]" v-if="length > 1">
                                        <vs-pagination buttons-dotted v-model="page" :length="length" />
                                    </div>
                                </div>
                            </template>
                        </div>
                    </div>
                </b-modal>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            filter:{
                text:'',
                expired:'',
                active:'',
                silver:false,
                gold:false,
                platinum:false
            },
            actionFilter: false,
            allCheck: false,
            dialogEmplyee: false,
            action: false,
            selected: [],
            page: 1,
            active: 1,
            max: 5,
            page1: 1,
            max1: 10,
            length: 0,
            length1: 0,
            filterSearch: '',
            user_owner: [],
            user_employee: [],
            infoUser: {
                id: '',
                name: '',
                email: '',
                phone: '',
                org: '',
                dateAt: '',
                billingDate: '',
                address: '',
                plan: '',
                role: '',
                status: ''
            }
        }
    }, mounted() {
        this.getUserOwner('','','')
    },
    methods: {
        covertDate(val) {
            const dateCovert = (new Date(val).toISOString().split("T")[0]).split('-');
            return (dateCovert[2].toString()) + '/' + (dateCovert[1].toString()) + '/' + (dateCovert[0].toString())
        },
        getUserOwner(expired,blocked,name) {
            this.user_owner  = []
            const platinum = this.filter.platinum? '&filters[package][id][$containsi]=3':''
            const gold =  this.filter.gold? '&filters[package][id][$containsi]=2':''
            const silver = this.filter.silver? '&filters[package][id][$containsi]=1':''
            fetch('http://27.254.144.88:1337/api/users?populate=*&filters[role][id][$containsi]=4&filters[expStatus][$containsi]='+expired
            +'&filters[blocked][$containsi]='+blocked+platinum+silver+gold+'&filters[firstName][$containsi]='+name)
                .then(response => response.json())
                .then((resp) => {
                    this.user_owner = resp
                    this.length1 = this.user_owner.length / max1
                })
        },
        showDataEmployee(id, idOrg) {
            fetch('http://27.254.144.88:1337/api/users/' + id + '?populate=*')
                .then(response => response.json())
                .then((resp) => {
                    this.infoUser.id = resp.id
                    this.infoUser.name = resp.firstName + '' + resp.lastName
                    this.infoUser.email = resp.email
                    this.infoUser.phone = resp.phone ? resp.phone : ''
                    this.infoUser.org = resp.organization.orgName
                    this.infoUser.dateAt = resp.createdAt
                    this.infoUser.billingDate = resp.expDate ? resp.expDate : ''
                    this.infoUser.address = resp.address ? resp.address : ''
                    this.infoUser.status = resp.blocked
                    this.infoUser.plan = resp.package.packageName
                    this.infoUser.role = resp.role.name
                    this.user_employee = []
                    fetch('http://27.254.144.88:1337/api/users?populate=*&filters[organization][id][$containsi]=' + idOrg + '&filters[role][id][$containsi]=5')
                        .then(response => response.json())
                        .then((resp) => {
                            this.user_employee = resp
                            this.length = resp.length / 5
                            this.dialogEmplyee = true
                        })
                })
        },
        changeStatus(id, status) {
            axios.put('http://27.254.144.88:1337/api/users/' + id, {
                "blocked": status
            })
        },
        filterAll(){
            this.expired = '',
            this.active = ''
            this.getUserOwner('','',this.filterSearch)
            this.active = 1
        },
        filterExpring(){
            this.expired = true,
            this.active = ''
            this.getUserOwner(true,'',this.filterSearch)
            this.active = 2
        },
        filterExpired(){
            this.expired = false,
            this.active = ''
            this.getUserOwner(false,'',this.filterSearch)
            this.active = 3
        },
        filterActive(){
            this.expiring = '',
            this.expired = '',
            this.active = false
            this.getUserOwner('',false,this.filterSearch)
            this.active = 4
        },
        handleSearch() {
            clearTimeout(this.timer); // Clear the previous timer if it exists
            this.timer = setTimeout(() => {
                this.getUserOwner('','',this.filterSearch);
            }, 200);
        }
    },
    watch: {
        filterSearch(newTerm) {
            clearTimeout(this.timer); // Clear the previous timer if it exists
            this.timer = setTimeout(() => {
                this.getUserOwner('','',newTerm);
            }, 200);
        }
    },
}
</script>
<style scoped>
.btn-filter {
    width: 147px;
    height: 38px;
    text-align: center;
    border: solid 1px #E5EAF6;
}

.hotfix {
    position: absolute;
    top: 14.9rem;
}

input[type="search"] {
    padding-left: 32px;
}

input {
    border: solid 1px #E5EAF6;
    border-radius: 6px;
}
</style>