<template>
    <div class="bg-[#ffffff] flex items-center justify-between" :style="{ height: toolbarHeight }">
        <div class="flex justify-center items-center">
            <div class="ml-[30px] flex "> <img :src="logoClicksBiz" alt=""></div>
            <div class="border-l-2 h-[47px] mt-[10px] mb-[10px] mr-[15px] ml-[15px] border-[#E9EEF6] "></div>
            <div class="flex flex-col">
                <div class="font-medium">Favorite Documents</div>
                <div class="flex items-center">
                    <div class="text-[#6B7490]">Home</div> <span
                        class="bg-[#4FBD9E] w-[12px] h-[6px] mt-[2px] ml-[4px] mr-[4px] rounded-[10px] "></span>
                    <div class="text-[#6B7490]">Project</div> <span
                        class="bg-[#4FBD9E] w-[12px] h-[6px] mt-[2px] ml-[4px] mr-[4px] rounded-[10px] "></span>
                    <div>Favorite Documents</div>
                </div>
            </div>
        </div>
        <div class="mr-[30px]"><md-icon>notifications</md-icon></div>
    </div>
</template>

<script>
import { toolbarHeight } from './state'
import logoClicksBiz from '@/assets/image/logo-clicksBiz.png'

export default {
    props: {},
    components: {
    },
    setup() {
        return {
            toolbarHeight,
            logoClicksBiz
        }
    }
}

</script>
