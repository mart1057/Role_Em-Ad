<template>
    <div class="h-[100%] bg-white m-[10px] rounded-[10px]">
        <div class="p-[20px]">
            <div>
                <div class="text-[20px] font-bold">My Profile</div>
                <div class="flex mt-[14px]">
                    <div class="flex justify-between w-[100%]">
                        <div class="flex">
                            <div @click="tab = true"
                                class="cursor-pointer text-[20px] h-[38px] text-[#6B7490] flex justify-center items-end"
                                :class="tab ? 'changeTab' : ''">My Profile</div>
                            <div class="ml-[10px] cursor-pointer h-[38px] text-[20px] flex justify-center items-end"
                                :class="tab ? '' : 'changeTab'" @click="tab = false">
                                Admin Team</div>
                        </div>
                        <div class="flex mt-[-6px]" v-if="!tab">
                            <div class="mr-[18px]">
                                <button class="w-[100px] h-[38px] border-[#6B7490] border-[1px] rounded-[6px]">
                                    <div class="flex justify-center items-center" @click="popupInvite = true">
                                        <div class="mr-[4px]"><md-icon>person_add</md-icon></div>
                                        <div class="text-[#6B7490] font-bold">Invite</div>
                                    </div>
                                </button>
                            </div>
                            <div>
                                <input type="search" class="w-[230px] h-[38px] rounded-[6px]" placeholder="Search">
                                <div class="flex hotfix">
                                    <div class="mt-[-3px]"><md-icon>search</md-icon> </div>
                                    <div class="border-l-2 h-[21px] border-[#6B7490] "></div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div class="border-b-2 w-[100%]"></div>
            </div>
            <div class="mt-[18px]" v-if="tab == true">
                <div class="flex flex-col justify-center items-center">
                    <div class="w-[110px] h-[110px] rounded-[100px] bg-black"></div>
                    <div
                        class="w-[50px] rounded-[100px] flex justify-center items-center h-[20px] font-medium bg-[#3C7CFC] text-[12px] text-white mt-[15px]">
                        Admin</div>
                </div>
                <div class="grid grid-cols-4 w-[100%] gap-4 mt-[25px]">
                    <div>
                        <div class="text-[12px] font-bold">First name</div>
                        <div class="mt-[8px]"><input class="w-[100%] h-[38px]" /></div>
                    </div>
                    <div>
                        <div class="text-[12px] font-bold">Last name</div>
                        <div class="mt-[8px]"><input class="w-[100%] h-[38px]" /></div>
                    </div>
                    <div>
                        <div class="text-[12px] font-bold">Email address</div>
                        <div class="mt-[8px]"><input class="w-[100%] h-[38px]" /></div>
                    </div>
                    <div>
                        <div class="text-[12px] font-bold">Phone number</div>
                        <div class="mt-[8px]"><input class="w-[100%] h-[38px]" /></div>
                    </div>
                    <div class="col-span-2">
                        <div class="text-[12px] font-bold">Organization name</div>
                        <div class="mt-[8px]"><input class="w-[100%] h-[38px]" /></div>
                    </div>
                    <div>
                        <div class="text-[12px] font-bold">Role</div>
                        <div class="mt-[8px]">
                            <select class=" select-opt w-[100%] h-[38px] rounded-[6px]">
                                <option disabled value="">Select...</option>
                                <option>Chatchapon Boonpan</option>
                                <option>Beerina Kawel</option>
                                <option>Cicogo Yiweyi</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div class="text-[12px] font-bold">Team</div>
                        <div class="mt-[8px]">
                            <select class=" select-opt w-[100%] h-[38px] rounded-[6px]">
                                <option disabled value="">Select...</option>
                                <option>Chatchapon Boonpan</option>
                                <option>Beerina Kawel</option>
                                <option>Cicogo Yiweyi</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-span-3">
                        <div class="text-[12px] font-bold">Address</div>
                        <div class="mt-[8px]"><input class="w-[100%] h-[38px]" /></div>
                    </div>
                </div>
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
                                        Name
                                    </vs-th>
                                    <vs-th>
                                        Email
                                    </vs-th>
                                    <vs-th>
                                        Phone
                                    </vs-th>
                                    <vs-th>
                                        Data added
                                    </vs-th>
                                    <vs-th>
                                    </vs-th>
                                </vs-tr>
                            </template>
                            <template #tbody>
                                <vs-tr :key="i" v-for="(tr, i) in $vs.getPage(users, page, max)"
                                    :is-selected="!!selected.includes(tr)">
                                    <vs-td checkbox>
                                        <vs-checkbox :val="tr" v-model="selected" />
                                    </vs-td>
                                    <vs-td>
                                        <div class="flex">
                                            <div class="">
                                                <vs-avatar circle>
                                                    <template #text>
                                                        Joel
                                                    </template>
                                                </vs-avatar>
                                            </div>
                                            <div class="flex justify-center items-center ml-[8px]">{{ tr.name }}</div>
                                        </div>
                                    </vs-td>
                                    <vs-td>
                                        {{ tr.email }}
                                    </vs-td>
                                    <vs-td>
                                        {{ tr.id }}
                                    </vs-td>
                                    <vs-td>
                                        {{ tr.id }}
                                    </vs-td>
                                    <vs-td>
                                        <div><md-icon>delete</md-icon></div>
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
            <vs-dialog width="550px" not-center not-close v-model="popupInvite">
                <div>
                    <div class="flex justify-between">
                        <div class="text-[20px] font-bold">Invite to Team</div>
                        <div @click="popupInvite = false" class="cursor-pointer"><md-icon>close</md-icon></div>
                    </div>
                    <div class="mt-[18px]">
                        <div class="font-bold">Invite with email</div>
                        <input class="w-[100%] h-[38px] rounded-[10px]  mt-[8px]" >
                    </div>
                    <div class="grid grid-cols-2 w-[100%] gap-4 mt-[8px]">
                        <div>
                            <div class="font-bold">Role</div>
                            <select class=" select-opt w-[100%] h-[38px] rounded-[10px]  mt-[8px]">
                                <option disabled value="">Select...</option>
                                <option>Admin</option>
                                <option>Empolyee</option>
                            </select>
                            
                        </div>
                        <div>
                            <div class="font-bold">Team</div>
                            <input class="w-[100%] h-[38px] rounded-[10px]  mt-[8px]" />
                        </div>
                    </div>
                    <div class="flex justify-end mt-[38px]">
                        <vs-button flat :active="true" @click="popupInvite = false">
                            Invite
                        </vs-button>
                    </div>
                </div>

            </vs-dialog>
        </div>
    </div>
</template>
<script>
import logo_facebook from '@/assets/image/facebook2.png'
import logo_google from '@/assets/image/logo_google.png'
export default {
    data() {
        return {
            logo_google,
            tab: true,
            logo_facebook,
            popupInvite: false,
            allCheck: false,
            selected: [],
            page: 1,
            max: 10,
            users: [
                {
                    "id": 1,
                    "name": "Leanne Graham",
                    "username": "Bret",
                    "email": "Sincere@april.biz",
                    "website": "hildegard.org",
                },
                {
                    "id": 2,
                    "name": "Ervin Howell",
                    "username": "Antonette",
                    "email": "Shanna@melissa.tv",
                    "website": "anastasia.net",
                },
                {
                    "id": 3,
                    "name": "Clementine Bauch",
                    "username": "Samantha",
                    "email": "Nathan@yesenia.net",
                    "website": "ramiro.info",
                },
                {
                    "id": 4,
                    "name": "Patricia Lebsack",
                    "username": "Karianne",
                    "email": "Julianne.OConner@kory.org",
                    "website": "kale.biz",
                },
                {
                    "id": 5,
                    "name": "Chelsey Dietrich",
                    "username": "Kamren",
                    "email": "Lucio_Hettinger@annie.ca",
                    "website": "demarco.info",
                },
                {
                    "id": 6,
                    "name": "Mrs. Dennis Schulist",
                    "username": "Leopoldo_Corkery",
                    "email": "Karley_Dach@jasper.info",
                    "website": "ola.org",
                },
                {
                    "id": 7,
                    "name": "Kurtis Weissnat",
                    "username": "Elwyn.Skiles",
                    "email": "Telly.Hoeger@billy.biz",
                    "website": "elvis.io",
                },
                {
                    "id": 8,
                    "name": "Nicholas Runolfsdottir V",
                    "username": "Maxime_Nienow",
                    "email": "Sherwood@rosamond.me",
                    "website": "jacynthe.com",
                },
                {
                    "id": 9,
                    "name": "Glenna Reichert",
                    "username": "Delphine",
                    "email": "Chaim_McDermott@dana.io",
                    "website": "conrad.com",
                },
                {
                    "id": 10,
                    "name": "Clementina DuBuque",
                    "username": "Moriah.Stanton",
                    "email": "Rey.Padberg@karina.biz",
                    "website": "ambrose.net",
                }
            ]
        }
    },
    methods: {

    }
}
</script>
<style scoped>
.changeTab {
    font-weight: bold;
    color: #2D3349 !important;
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