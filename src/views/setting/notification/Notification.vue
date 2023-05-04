<template>
    <div class="h-[100%] bg-white m-[10px] rounded-[10px]">
        <div class="p-[20px]">
            <div class="text-[20px] font-bold">Notification</div>
            <div class="flex justify-between">
                <div>
                    <div class="flex justify-between w-[430px] mt-[30px]">
                        <div class="text-[16px] font-bold">Line Notification</div>
                        <div> <vs-switch success v-model="lineNoti" /></div>
                    </div>
                    <hr>
                    <div class="flex justify-between">
                        <div class="text-[16px] font-bold">Email Notification</div>
                        <div> <vs-switch success v-model="emailNoti" /></div>
                    </div>
                </div>
                <div>
                    <button class="btn-create text-[12px] text-[#6B7490] font-bold hover:bg-sky-100 rounded-[5px] " @click="lineNoti = false , emailNoti = false">Reset to Default</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            lineNoti:true,
            emailNoti:true

        }
    }
}
</script>

<style>
.btn-create {
    width: 147px;
    height: 38px;
    text-align: center;
    border: solid 1px #b5c4e9;


}
</style>