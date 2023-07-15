<template>
    <div class="bg-[#ffffff] flex items-center justify-between" :style="{ height: toolbarHeight }">
        <div class="flex justify-center items-center">
            <div class="ml-[30px] flex "> <img :src="logoClicksBiz" alt=""></div>
            <div class="border-l-2 h-[47px] mt-[10px] mb-[10px] mr-[15px] ml-[15px] border-[#E9EEF6] "></div>
            <div class="flex flex-col">
                <div class="font-medium">{{ $route.meta.desc? $route.meta.desc:$route.meta.title  }}</div>
                <div class="flex items-center">
                    <div :class="$route.meta.desc? 'text-[#6B7490]':''">Home</div> <span v-if="$route.meta.title"
                        class="bg-[#4FBD9E] w-[12px] h-[6px] mt-[-1px] ml-[4px] mr-[4px] rounded-[10px]"></span>
                    <div :class="$route.meta.desc? 'text-[#6B7490]':''">{{$route.meta.title }}</div> 
                    <span v-if="$route.meta.desc"
                        class="bg-[#4FBD9E] w-[12px] h-[6px] mt-[-1px] ml-[4px] mr-[4px] rounded-[10px] "></span>
                    <div>{{ $route.meta.desc }}</div>
                </div>
            </div>
        </div>
        <vs-tooltip bottom shadow not-hover v-model="activeTooltip1">
            <div class="w-[7px] h-[7px] bg-[red] rounded-[100%] hotfixNotify" v-if="checkNewNotify"></div>
            <div class="mr-[30px] cursor-pointer" @click="activeTooltip1 = true"><md-icon>notifications</md-icon></div>
            <template #tooltip>
                <div>
                    <!-- <div class="flex justify-end">
                        <vs-tooltip bottom shadow v-model="activeTooltip2">
                            <div @click="activeTooltip2 = true"><md-icon class="cursor-pointer">more_horiz</md-icon></div>
                            <template #tooltip>
                                <div class="m-10px">
                                    <div class="flex mb-[4px] rounded-[5px] cursor-pointer hover:bg-sky-100">
                                        <div><md-icon class="" style=" color:#6B7490;">close</md-icon></div>
                                        <div class="w-[100px] text-start  ml-[6px] text-[#6B7490] text-[12px]">Mark as read
                                        </div>
                                    </div>
                                    <div class="flex mb-[4px] rounded-[5px] cursor-pointer hover:bg-sky-100">
                                        <div><md-icon class="" style=" color:#6B7490;">delete</md-icon></div>
                                        <div class="w-[100px] text-start  ml-[6px] text-[#6B7490] text-[12px]">Delete All
                                        </div>
                                    </div>
                                    <div class="flex mb-[4px] rounded-[5px] cursor-pointer hover:bg-sky-100">
                                        <div><md-icon class="" style=" color:#6B7490;">settings</md-icon></div>
                                        <div class="w-[100px] text-start ml-[6px] text-[#6B7490] text-[12px]">Setting</div>
                                    </div>
                                </div>
                            </template>
                        </vs-tooltip>

                        <div @click="activeTooltip1 = false"><md-icon class="cursor-pointer">close</md-icon></div>
                    </div> -->
                    <div class="flex justify-between">
                        <div class="text-[14px] font-bold ">Notification</div>
                    </div>
                    <div class="mt-[10px] justify-start">
                        <div class="flex justify-center items-center   cursor-pointer mt-[8px] rounded-[5px]  hover:bg-sky-100"
                            :class="data.attributes.read ? '' : 'bg-sky-100'" v-for="data in items"
                            @click="readNotify(data.id), data.attributes.read = true">
                            <div class="w-[10%] mr-[5px]">
                                <vs-avatar circle>
                                    <template #text>
                                        {{ data.attributes.from_user.data.attributes.firstName }} {{
                                            data.attributes.from_user.data.attributes.lastName }}
                                    </template>
                                </vs-avatar>
                            </div>
                            <div class="flex flex-col text-start justify-between ml-[16px] w-[90%]">
                                <div>
                                    <span class="font-bold text-[12px]">{{
                                        data.attributes.from_user.data.attributes.firstName }} {{
        data.attributes.from_user.data.attributes.lastName }} </span>
                                    <span class="text-[12px]">to you </span>
                                    <span class="text-[#4FBD9E] text-[12px]">{{ data.attributes.notificationTitle }}
                                    </span>
                                </div>
                                <div class="text-[12px] text-start text-[#9E9FA0]">
                                    {{ timeDiff(data.attributes.createdAt) }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </vs-tooltip>
    </div>
</template>

<script>
import axios from 'axios'
import { toolbarHeight } from './state'
import logoClicksBiz from '@/assets/image/logo-clicksBiz.png'

export default {
    props: {},
    components: {
    },
    data() {
        return {
            checkNewNotify: false,
            toolbarHeight,
            logoClicksBiz,
            activeTooltip1: false,
            activeTooltip2: false,
            items: [],
        }
    },
    mounted() {
        this.getNotiList()
        console.log('ads');
        console.log(this.$route.meta.title); 
    },
    methods: {
        getNotiList() {
            this.items = []
            fetch('http://27.254.144.88:1337/api' + '/notification-logs?populate=*&filters[toUser][id][$containsi]=' + this.$store.state.userInfo.id)
                .then(response => response.json())
                .then((resp) => {
                    this.lengthPage = resp.meta.pagination.pageCount
                    const arr = []
                    arr.push(resp.data)
                    this.items = arr[0]
                    console.log(this.items);
                    this.checkNewNotify = this.items.some(notification => !notification.attributes.read);
                    console.log(this.checkNewNotify);
                })
        },
        readNotify(id) {
            axios.put('http://27.254.144.88:1337/api' + '/notification-logs/' + id, {
                "data": {
                    "read": true,
                }
            }).then(() => {
                this.getNotiList()
            })
        },
        timeDiff(timeCreate) {
            var currentDate = new Date();
            // Convert the given date string to a Date object
            var givenDate = new Date(timeCreate);
            // Calculate the time difference in milliseconds
            var timeDiff = currentDate - givenDate;
            // Calculate the time difference in seconds, minutes, hours, and days
            var secondsDiff = Math.floor(timeDiff / 1000);
            var minutesDiff = Math.floor(secondsDiff / 60);
            var hoursDiff = Math.floor(minutesDiff / 60);
            var daysDiff = Math.floor(hoursDiff / 24);
            // Output the result
            if (daysDiff > 0) {
                return daysDiff + " d";
            } else if (hoursDiff > 0) {
                return hoursDiff + " h ago";
            } else if (minutesDiff > 0) {
                return minutesDiff + " m ago";
            } else {
                return secondsDiff + " s ago";
            }

        }
    }
}

</script>

<style>
.hotfixNotify {
    position: absolute;
    right: 1.7rem;

}
</style>
