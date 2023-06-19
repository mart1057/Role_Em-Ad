<template>
    <div class="w-[100%] h-[100%] flex flex-col justify-between">
        <div class="flex flex-col justify-center items-center">
            <div class=" flex items-center w-[100%] h-[46px] bg-[#4FBD9E] rounded-[10px] justify-between">
                <div class="text-white ml-[10px] text-[14px] font-bold">Number of Userp <span
                        class="text-[10px] font-normal">(Jan, Week 1)</span></div>
                <div class="mr-[10px] text-[20px] text-white font-bold">{{ numberWithCommas(1000) }}</div>
            </div>

        </div>
        <div class="grid grid-cols-3 w-[100%] gap-4 ">
            <div class="w-[100%] rounded-[10px] h-[auto] bg-white flex  flex-col">
                <div class="flex justify-center">
                    <div
                        class="w-[50px] rounded-[100px]  text-center h-[20px] font-medium bg-[#42DF6E] text-[12px] mt-[18px] text-white">
                        Active</div>
                </div>
                <div class=" flex flex-col justify-center items-center mt-[15px]">
                    <div class="mr-[15px] ml-[15px] text-[#6B7490] text-[12px] font-bold">Active Employee</div>
                    <div class="mr-[15px] ml-[15px] font-bold text-[#2D3349] text-[20px] mt-[15px]">20</div>
                </div>

                <div class="flex justify-center">
                    <button
                        class="w-[82px] rounded-[100px] text-center h-[26px] font-medium bg-[#79ACF9] text-[12px] mt-[15px] text-white">View
                        More</button>
                </div>
            </div>
            <div class="w-[100%] rounded-[10px] h-[177px] bg-white flex  flex-col">
                <div class="flex justify-center">
                    <div
                        class="w-[83px] rounded-[100px]  text-center h-[20px] font-medium bg-[#C4C7D3] text-[12px] mt-[18px] text-[#6B7490]">
                        Disable</div>
                </div>
                <div class=" flex flex-col justify-center items-center mt-[15px]">
                    <div class="mr-[15px] ml-[15px] text-[#6B7490] text-[12px] font-bold">Disable Employee</div>
                    <div class="mr-[15px] ml-[15px] font-bold text-[#2D3349] text-[20px] mt-[15px]">20</div>
                </div>
                <div class="flex justify-center">
                    <button
                        class="w-[82px] rounded-[100px]  text-center h-[26px] font-medium bg-[#79ACF9] text-[12px] mt-[15px] text-white">View
                        More</button>
                </div>
            </div>
            <div class="w-[100%] rounded-[10px] h-[177px] bg-white flex  flex-col">
                <div class="flex justify-center">
                    <div
                        class="w-[83px] rounded-[100px]  text-center h-[20px] font-medium bg-[#EFEFEF] text-[12px] mt-[18px] text-[#929292]">
                        Remaining</div>
                </div>
                <div class=" flex flex-col justify-center items-center mt-[15px]">
                    <div class="mr-[15px] ml-[15px] text-[#6B7490] text-[12px] font-bold">Remaining Slot</div>
                    <div class="mr-[15px] ml-[15px] text-[#2D3349] text-[20px] font-bold mt-[15px]">20</div>
                </div>
                <div class="flex justify-center">
                    <button
                        class="w-[82px] rounded-[100px]  text-center h-[26px] font-medium bg-[#79ACF9] text-[12px] mt-[15px] text-white">View
                        More</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        numberWithCommas(x) {
            x = x.toString();
            var pattern = /(-?\d+)(\d{3})/;
            while (pattern.test(x))
                x = x.replace(pattern, "$1,$2");
            return x;
        }

    }
}
</script>