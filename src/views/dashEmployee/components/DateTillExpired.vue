<template>
    <div class="w-[100%] h-[100%] bg-white rounded-[10px] flex flex-col p-[15px] ">
        <div class="flex justify-between">
            <div class="text-[14px] font-bold ">Date till Expired</div>
        </div>
        <div class="flex justify-between mt-[8px]">
            <div class="flex">
                <div><md-icon>schedule</md-icon></div>
                <div class="text-[12px] text-[#3C7CFC] flex justify-center items-center ml-[4px]">Apr. 7, 2023</div>
            </div>
            <div class="">
                <button
                    class="w-[82px] rounded-[100px] text-center h-[26px] font-medium bg-[#79ACF9] text-[12px] text-white">View
                    More</button>
            </div>
        </div>
        <hr>
        <div class="text-[12px] font-medium">Billing History</div>
        <div class="flex justify-between mt-[6px]">
            <div class="text-[12px] font-medium">Invoice Date</div>
            <div class="text-[12px] font-medium">Status</div>
        </div>
        <div class="border-b-2  border-[#E5EAF6]"></div>
        <div class="flex justify-between  mt-[4px] mb-[4px]">
            <div class="text-[12px] text-[#2CD67A]">Feb. 1,2023</div>
            <div
                class="w-[auto] text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[1px] pb-[1px] bg-[#32C4F2] text-[12px]">
                Unpaid</div>
        </div>
        <div class="border-b-2  border-[#E5EAF6] "></div>
        <div class="flex justify-between mt-[4px] mb-[4px]">
            <div class="text-[12px] text-[#2CD67A]">Jan. 1,2023</div>
            <div
                class="w-[auto] text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[1px] pb-[1px] bg-[#2CD67A] text-[12px]">
                Paid</div>
        </div>
        <div class="border-b-2  border-[#E5EAF6] "></div>
        <div class="flex justify-between  mt-[4px] mb-[4px]">
            <div class="text-[12px] text-[#2CD67A]">Jan. 1,2023</div>
            <div
            class="w-[auto] text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[1px] pb-[1px] bg-[#2CD67A] text-[12px]">
            Paid</div>
    </div>
</div>
</template>