<template>
    <div class="w-[100%] bg-white rounded-[10px]">
        <div class="flex flex-col justify-center items-center">
            <div class="w-[220px] h-[188px] rounded-[5px]  bg-white test2 flex flex-col justify-between items-center">
                <div
                    class="w-[106px] mt-[14px] h-[106px] bg-[#7C94D2] rounded-[100%] text-[14px] font-bold text-[white] flex justify-center items-center">
                    COMPANY
                </div>
                <div
                    class="bg-[#F3F6F9] w-[100%] h-[55px] flex justify-center items-center rounded-b-[5px] text-[#2D3349] text-[16px] font-bold">
                    Company Name</div>
            </div>
            <div class="w-[220px]  h-[145px] bg-white test2 rounded-[5px] mt-[20px] flex flex-col justify-between items-center">
                <div class="flex justify-between mt-[10px]">
                    <div>
                        <vs-avatar circle>
                            <template #text>
                                Joel
                            </template>
                        </vs-avatar>
                    </div>
                    <div class="flex justify-center items-center ml-[4px]">Chatchapon Boon</div>
                </div>
                <div class="w-[90%] h-[30px] text-white bg-[#3C7CFC] rounded-[5px] flex justify-center items-center ">Chief Executive Officer</div>
                <div class="w-[90%] h-[30px] mb-[10px] bg-[white] border-[#3C7CFC] border-[1px] rounded-[5px] flex justify-center items-center text-[#6B7490] ">Owner</div>

            </div>
        </div>
    </div>
</template>

<style>
.test2 {
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.12);
}
</style>