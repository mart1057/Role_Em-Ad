<template>
    <div class="w-[100%] h-[238px] flex flex-col justify-between">
        <div class="flex flex-col justify-center items-center">
            <div class=" flex items-center w-[100%] h-[46px] bg-[#4FBD9E] rounded-[10px] justify-between">
                <div class="text-white ml-[10px] text-[14px] font-bold">Number of User <span
                        class="text-[10px] font-normal">(Jan, Week 1)</span></div>
                <div class="mr-[10px] text-[20px] text-white font-bold">{{ numberWithCommas(NumberOfUser) }}</div>
            </div>

        </div>
        <div class="flex justify-between">
            <div class="w-[48%] rounded-[10px] h-[177px] bg-white flex  flex-col">
                <div class="flex justify-center">
                    <div
                        class="w-[50px] rounded-[100px]  text-center h-[20px] flex justify-center items-center font-medium bg-[#3C7CFC] text-[12px] mt-[18px] text-white">
                        Owner</div>
                </div>
                <div class=" flex justify-between mt-[15px]">
                    <div class="mr-[15px] ml-[15px] text-[#42DF6E] font-bold">Active</div>
                    <div class="mr-[15px] ml-[15px] font-bold">{{ ActiveOwnerUser }}</div>
                </div>
                <div class=" flex justify-between mt-[10px]">
                    <div class="mr-[15px] ml-[15px] text-[#6B7490] font-bold">Disable</div>
                    <div class="mr-[15px] ml-[15px] font-bold">{{ InactiveOwnerUser }}</div>
                </div>
                <div class="flex justify-center">
                    <button
                        class="w-[82px] rounded-[100px] text-center h-[26px] font-medium bg-[#79ACF9] text-[12px] mt-[30px] text-white">View
                        More</button>
                </div>
            </div>
            <div class="w-[48%] rounded-[10px] h-[177px] bg-white flex  flex-col">
                <div class="flex justify-center">
                    <div
                        class="w-[83px] rounded-[100px]  flex justify-center items-center text-center h-[20px] font-medium bg-[#3C7CFC] text-[12px] mt-[18px] text-white">
                        Empolyee</div>
                </div>
                <div class=" flex justify-between mt-[15px]">
                    <div class="mr-[15px] ml-[15px] text-[#42DF6E] font-bold">Active</div>
                    <div class="mr-[15px] ml-[15px] font-bold">{{ ActiveEmployeeUser }}</div>
                </div>
                <div class=" flex justify-between mt-[10px]">
                    <div class="mr-[15px] ml-[15px] text-[#6B7490] font-bold">Disable</div>
                    <div class="mr-[15px] ml-[15px] font-bold">{{ InactiveEmployeeUser }}</div>
                </div>
                <div class="flex justify-center">
                    <button
                        class="w-[82px] rounded-[100px]  text-center h-[26px] font-medium bg-[#79ACF9] text-[12px] mt-[30px] text-white">View
                        More</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            ActiveEmployeeUser: 0,
            ActiveOwnerUser: 0,
            InactiveEmployeeUser: 0,
            InactiveOwnerUser: 0,
            NumberOfUser:0
        }
    },
    mounted() {
        this.getCountUser()
    },
    methods: {
        numberWithCommas(x) {
            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
            return x;
        },
        getCountUser() {
            fetch('http://27.254.144.88:1337' + '/api/dashboard?id=' + this.$store.state.userInfo.id)
                .then(response => response.json())
                .then((resp) => {
                    this.ActiveEmployeeUser = resp.ActiveEmployeeUser,
                    this.ActiveOwnerUser = resp.ActiveOwnerUser,
                    this.InactiveEmployeeUser = resp.InactiveEmployeeUser,
                    this.InactiveOwnerUser = resp.InactiveOwnerUser
                    this.NumberOfUser = resp.NumberOfUser
                })
        },
    }
}
</script>