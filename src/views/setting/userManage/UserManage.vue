<template>
    <div class="h-[100%] bg-white m-[10px] rounded-[10px]">
        <div class="p-[20px]">
            <div class="text-[20px] font-bold">User Management</div>
            <div class="flex mt-[14px]">
                <div>
                    <button @click="active = 1">
                        <div class="flex justify-between w-[170px] h-[72px]  text-[#6B7490]  border-[1px] rounded-[5px] pl-[20px] pr-[20px]"
                            :class="active == 1 ? 'bg-[#3C7CFC]  border-[#3C7CFC] text-white' : 'border-[#6B7490]'">
                            <div class="flex justify-center items-center"><md-icon class="md-size-2x"
                                    :style="{ color: active == 1 ? '#ffffff' : '' }">person_outline</md-icon></div>
                            <div class="flex flex-col justify-center items-center">
                                <div class="text-[12px]">Total Member</div>
                                <div :class="active == 1 ? ' ' : 'text-[#2D3349]'">1,300</div>
                            </div>
                        </div>
                    </button>
                </div>
                <div>
                    <button @click="active = 2">
                        <div class="ml-[14px] flex flex-col justify-center items-center w-[124px] h-[72px]  border-[1px] text-[#6B7490] rounded-[5px] p-[5px]"
                            :class="active == 2 ? 'bg-[#FFB51E]  border-[#FFB51E] text-white' : 'border-[#6B7490]'">
                            <div class="text-[12px]">Expiring Member</div>
                            <div :class="active == 2 ? ' ' : 'text-[#2D3349]'">380</div>
                        </div>
                    </button>
                </div>
                <div>
                    <button @click="active = 3">
                        <div class="ml-[14px] flex flex-col justify-center items-center w-[124px] h-[72px] text-[#6B7490] border-[1px] rounded-[5px] p-[5px]"
                            :class="active == 3 ? 'bg-[#FF2C2C]  border-[#FF2C2C] text-white' : 'border-[#6B7490]'">
                            <div class="text-[12px]">Expired Member</div>
                            <div :class="active == 3 ? 'text-white ' : 'text-[#2D3349]'">380</div>
                        </div>
                    </button>
                </div>
                <div>
                    <button @click="active = 4">
                        <div class="ml-[14px] flex flex-col justify-center items-center w-[93px] h-[72px] text-[#6B7490] border-[1px] rounded-[5px] p-[5px]"
                            :class="active == 4 ? 'bg-[#42DF6E]  border-[#42DF6E] text-white' : 'border-[#6B7490]'">
                            <div class="text-[12px]">Active Now</div>
                            <div :class="active == 4 ? 'text-white ' : 'text-[#2D3349]'">380</div>
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
                                                    <div><vs-checkbox></vs-checkbox></div>
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
                                                    <div><vs-checkbox></vs-checkbox></div>
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
                                                    <div><vs-checkbox></vs-checkbox></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="mt-[-10px]">
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
                            </div>
                            <div class="flex justify-end mt-[-10px] mb-[10px]">
                                <vs-button type="filled" @click="actionFilter = false">Save Filter</vs-button>
                            </div>
                        </template>
                    </vs-tooltip>

                </div>
                <div class="mt-[28px]">
                    <input type="search" class="input_br w-[230px] h-[38px] rounded-[6px]" placeholder="Search">
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
                                        <vs-checkbox :indeterminate="selected.length == users.length" v-model="allCheck"
                                            @change="selected = $vs.checkAll(selected, users)" />
                                    </vs-th>
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
                                    <vs-th>
                                        Total member
                                    </vs-th>
                                    <vs-th>
                                        Account Enable/Disable
                                    </vs-th>
                                </vs-tr>
                            </template>
                            <template #tbody>
                                <vs-tr :key="i" v-for="(tr, i) in $vs.getPage(users, page, max)"
                                    :is-selected="!!selected.includes(tr)" @click="dialogEmplyee = true">
                                    <vs-td checkbox>
                                        <vs-checkbox :val="tr" v-model="selected" />
                                    </vs-td>
                                    <vs-td>
                                        <div class="flex">
                                            <div class="">
                                                <vs-avatar circle>
                                                    <template #text>
                                                        {{ tr.name }}
                                                    </template>
                                                </vs-avatar>
                                            </div>
                                            <div>
                                                <div
                                                    class="flex justify-start items-center ml-[8px] text-[#2D3349] font-medium">
                                                    {{
                                                        tr.name }}
                                                </div>
                                                <div class="flex justify-start items-center ml-[8px] text-[#6B7490]">{{
                                                    tr.email }}
                                                </div>
                                            </div>
                                        </div>
                                    </vs-td>
                                    <vs-td>
                                        {{ tr.organization }}
                                    </vs-td>
                                    <vs-td>
                                        <div class="flex">
                                            <div class="w-[auto] text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px]"
                                                :style="{ background: tr.plan == 'Gold' ? '#FFB927' : tr.plan == 'Silver' ? '#BCC7D6' : tr.plan == 'Platinum' ? '#64859F' : '' }">
                                                {{ tr.plan }}</div>
                                        </div>
                                    </vs-td>
                                    <vs-td>
                                        {{ tr.date }}
                                    </vs-td>
                                    <vs-td>
                                        {{ tr.billing }}
                                    </vs-td>
                                    <vs-td>
                                        <div class="flex">
                                            <div class=" text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px]"
                                                :style="{ background: tr.action ? '#C4C7D3' : tr.status == 'Active' ? '#2CD67A' : '#FFB51E' }">
                                                {{ tr.action ? "Disbled" : tr.status }}</div>
                                        </div>
                                    </vs-td>
                                    <vs-td>
                                        {{ tr.total }}
                                    </vs-td>
                                    <vs-td>
                                        <div class="w-[50px]">
                                            <vs-switch success v-model="tr.action" />
                                        </div>

                                    </vs-td>
                                </vs-tr>
                            </template>
                            <template #footer>
                                <div class="center con-pagination flex justify-end mt-[20px] mb-[20px]">
                                    <vs-pagination not-margin v-model="page" :length="$vs.getLength(users, max)" />
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
                                    :class="action ? 'text-[#42DF6E]' : 'text-[#C4C7D3]'">{{ action ? 'Enabled' : 'Disabled'
                                    }}</span></div>
                            <div class="flex justify-center items-center mt-[1px]"><vs-switch style="height: 22px;" success
                                    v-model="action"></vs-switch></div>
                        </div>
                        <div class="flex mt-[60px]">
                            <div class="w-[30%] flex justify-center items-center">
                                <div class=" w-[160px] h-[160px] rounded-[100%] bg-[red] "></div>
                            </div>

                            <div class="w-[60%] h-[200px] flex flex-col justify-between">
                                <div class="flex">
                                    <div
                                        class="w-[auto] bg-[#64859F] text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px]">
                                        Platinum
                                    </div>
                                    <div
                                        class="w-[auto] ml-[8px] bg-[#3C7CFC] text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px]">
                                        Owner
                                    </div>
                                    <div
                                        class="w-[auto] ml-[8px]  bg-[#C4C7D3] text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px]">
                                        Disable
                                    </div>
                                </div>
                                <div class="grid grid-cols-4 w-[100%] gap-4 mt-[10px] ">
                                    <div>
                                        <div class="text-[12px] font-bold">Name</div>
                                        <div class="text-[#2D3349] text-[12px]">Chatchapon Boonpan</div>
                                    </div>
                                    <div class="">
                                        <div class="text-[12px] font-bold">Email address</div>
                                        <div class="text-[#2D3349] text-[12px]">william.m@mail.com</div>
                                    </div>
                                    <div>
                                        <div class="text-[12px] font-bold">Phone number</div>
                                        <div class="text-[#2D3349] text-[12px]">068 104 6899</div>
                                    </div>
                                    <div>
                                        <div class="text-[12px] font-bold">Organization</div>
                                        <div class="text-[#2D3349] text-[12px]">Perception</div>
                                    </div>
                                </div>
                                <div class="grid grid-cols-4 w-[100%] gap-4 mt-[10px] ">
                                    <div>
                                        <div class="text-[12px] font-bold">Date Added</div>
                                        <div class="text-[#2D3349] text-[12px]">8/01/2023 12:45</div>
                                    </div>
                                    <div>
                                        <div class="text-[12px] font-bold">Billing Date</div>
                                        <div class="text-[#2D3349] text-[12px]">17/02/2023 9:02</div>
                                    </div>
                                    <div class="col-span-2">
                                        <div class="text-[12px] font-bold">Address</div>
                                        <div class="text-[#2D3349] text-[12px]">43/2 Sansuk Village, Soi Phatthana, Sawasdee Road,
                                            Bangrak, Bangkok 10500 Thailand</div>
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
                                                    <vs-checkbox :indeterminate="selected.length == users.length"
                                                        v-model="allCheck"
                                                        @change="selected = $vs.checkAll(selected, users)" />
                                                </vs-th>
                                                <vs-th>
                                                    Name
                                                </vs-th>
                                                <vs-th>
                                                    Organization
                                                </vs-th>
                                                <vs-th>
                                                    Type of User
                                                </vs-th>
                                                <vs-th>
                                                    Status
                                                </vs-th>
                                                <vs-th>
                                                    Date added
                                                </vs-th>
                                                <vs-th>
                                                    Account Enable/Disable
                                                </vs-th>
                                            </vs-tr>
                                        </template>
                                        <template #tbody>
                                            <vs-tr :key="i" v-for="(tr, i) in $vs.getPage(users, page, max)"
                                                :is-selected="!!selected.includes(tr)" @click="">
                                                <vs-td checkbox>
                                                    <vs-checkbox :val="tr" v-model="selected" />
                                                </vs-td>
                                                <vs-td>
                                                    <div class="flex">
                                                        <div class="">
                                                            <vs-avatar circle>
                                                                <template #text>
                                                                    {{ tr.name }}
                                                                </template>
                                                            </vs-avatar>
                                                        </div>
                                                        <div>
                                                            <div
                                                                class="flex justify-start items-center ml-[8px] text-[#2D3349] font-medium">
                                                                {{
                                                                    tr.name }}
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
                                                    {{ tr.organization }}
                                                </vs-td>
                                                <vs-td>
                                                    <div class="flex">
                                                        <div class="w-[auto] text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px]"
                                                            :style="{ background: tr.plan == 'Gold' ? '#FFB927' : tr.plan == 'Silver' ? '#BCC7D6' : tr.plan == 'Platinum' ? '#64859F' : '' }">
                                                            {{ tr.plan }}</div>
                                                    </div>
                                                </vs-td>
                                                <vs-td>
                                                    <div class="flex">
                                                        <div class=" text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px]"
                                                            :style="{ background: tr.action ? '#C4C7D3' : tr.status == 'Active' ? '#2CD67A' : '#FFB51E' }">
                                                            {{ tr.action ? "Disbled" : tr.status }}</div>
                                                    </div>
                                                </vs-td>
                                                <vs-td>
                                                    {{ tr.date }}
                                                </vs-td>
                                                <vs-td>
                                                    <div class="w-[50px]">
                                                        <vs-switch success v-model="tr.action" />
                                                    </div>

                                                </vs-td>
                                            </vs-tr>
                                        </template>
                                        <!-- <template #footer>
                                            <div class="center con-pagination flex justify-end mt-[20px] mb-[20px]">
                                                <vs-pagination not-margin v-model="page"
                                                    :length="$vs.getLength(users, max)" />
                                            </div>
                                        </template> -->
                                    </vs-table>
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
export default {
    data() {
        return {
            actionFilter: false,
            allCheck: false,
            dialogEmplyee: false,
            action: false,
            selected: [],
            page: 1,
            active: 1,
            max: 10,
            users: [
                {
                    id: 1,
                    name: "Leanne Graham",
                    organization: "Bret",
                    email: "Sincere@april.biz",
                    plan: "Gold",
                    date: '8/01/2023 12:45',
                    billing: '8/01/2023 12:45',
                    status: 'Active',
                    total: '100',
                    c: false
                },
                {
                    id: 2,
                    name: "Leanne Graham",
                    organization: "Bret",
                    email: "Sincere@april.biz",
                    plan: "Platinum",
                    date: '8/01/2023 12:45',
                    billing: '8/01/2023 12:45',
                    status: 'Active',
                    total: '100',
                    action: false
                },
                {
                    id: 3,
                    name: "Leanne Graham",
                    organization: "Bret",
                    email: "Sincere@april.biz",
                    plan: "Platinum",
                    date: '8/01/2023 12:45',
                    billing: '8/01/2023 12:45',
                    status: 'Nearly Expired',
                    total: '100',
                    action: false
                },
                {
                    id: 4,
                    name: "Leanne Graham",
                    organization: "Bret",
                    email: "Sincere@april.biz",
                    plan: "Silver",
                    date: '8/01/2023 12:45',
                    billing: '8/01/2023 12:45',
                    status: 'Active',
                    total: '100',
                    action: false
                },
                {
                    id: 5,
                    name: "Leanne Graham",
                    organization: "Bret",
                    email: "Sincere@april.biz",
                    plan: "Silver",
                    date: '8/01/2023 12:45',
                    billing: '8/01/2023 12:45',
                    status: 'Active',
                    total: '100',
                    action: true
                },
                {
                    id: 6,
                    name: "Leanne Graham",
                    organization: "Bret",
                    email: "Sincere@april.biz",
                    plan: "Silver",
                    date: '8/01/2023 12:45',
                    billing: '8/01/2023 12:45',
                    status: 'Active',
                    total: '100',
                    action: false
                },
                {
                    id: 7,
                    name: "Leanne Graham",
                    organization: "Bret",
                    email: "Sincere@april.biz",
                    plan: "Silver",
                    date: '8/01/2023 12:45',
                    billing: '8/01/2023 12:45',
                    status: 'Active',
                    total: '100',
                    action: false
                },
            ]
        }
    }
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