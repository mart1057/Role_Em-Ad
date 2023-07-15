<template>
    <div class="w-[100%] h-[100%] bg-white rounded-[10px] flex flex-col p-[15px] ">
        <div class="flex justify-between">
            <div class="text-[14px] font-bold ">Notification</div>
        </div>
        <div class="mt-[10px]">
            <!-- <div class="flex justify-center items-center hover:bg-sky-100 cursor-pointer">
                <div class="w-[32px] h-[32px] bg-slate-400 rounded-[100px] "></div>
                <div class="flex flex-col justify-between ml-[8px]">
                    <div>
                        <span class="font-bold text-[12px]">Edward Welch </span>
                        <span class="text-[#4FBD9E] text-[12px]">Add you </span>
                        <span class="text-[12px]">DITS Project</span>
                    </div>
                    <div class="text-[12px] text-[#9E9FA0]">
                        1m
                    </div>
                </div>
            </div> -->
            <div class="flex justify-center items-center cursor-pointer mt-[4px] rounded-[5px]  hover:bg-sky-100"
                v-for="data in items" :class="data.attributes.read ? '' : 'bg-sky-100'">
                <div class="w-[10%] mr-[5px]">
                    <vs-avatar circle>
                        <template #text>
                            {{ data.attributes.from_user.data.attributes.firstName }} {{
                                data.attributes.from_user.data.attributes.lastName }}
                        </template>
                    </vs-avatar>
                </div>
                <div class="flex flex-col justify-between ml-[16px] w-[90%]">
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
            <!-- <div class="flex justify-center items-center cursor-pointer mt-[4px] rounded-[5px]  hover:bg-sky-100">
                <div class="w-[10%]" >
                    <div class="w-[32px] h-[32px] bg-slate-400 rounded-[100px]"></div>
                </div>
                <div class="flex flex-col justify-between ml-[16px] w-[90%]">
                    <div>
                        <span class="font-bold text-[12px]">Edward Welch </span>
                        <span class="text-[#4FBD9E] text-[12px]">Add you  </span>
                        <span class="text-[12px]">DITS Project</span>
                    </div>
                    <div class="text-[12px] text-[#9E9FA0]">
                        1d
                    </div>
                </div>
            </div>
            <div class="flex justify-center items-center cursor-pointer mt-[4px] rounded-[5px]  hover:bg-sky-100">
                <div class="w-[10%]" >
                    <div class="w-[32px] h-[32px] bg-slate-400 rounded-[100px]"></div>
                </div>
                <div class="flex flex-col justify-between ml-[16px] w-[90%]">
                    <div>
                        <span class="font-bold text-[12px]">Isaac Wilkinson </span>
                        <span class="text-[#4FBD9E] text-[12px]">Approve document  </span>
                        <span class="text-[12px]">on you’re project</span>
                    </div>
                    <div class="text-[12px] text-[#9E9FA0]">
                        1d
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            checkTypeOrder: false,
            page: 1,
            max: 3,
            items: [],
            lengthPage: '',
            changeTab: 2,
        }
    },
    mounted() {
        this.getNotiList()
    },
    methods: {
        covertDate(val) {
            const dateCovert = (new Date(val).toISOString().split("T")[0]).split('-');
            return (dateCovert[2].toString()) + '/' + (dateCovert[1].toString()) + '/' + (dateCovert[0].toString())
        },
        getNotiList() {
            this.items = []
            fetch('http://27.254.144.88:1337/api' + '/notification-logs?populate=*&filters[toUser][id][$containsi]=' + this.$store.state.userInfo.id)
                .then(response => response.json())
                .then((resp) => {
                    this.lengthPage = resp.meta.pagination.pageCount
                    const arr = []
                    arr.push(resp.data)
                    this.items = arr[0]
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