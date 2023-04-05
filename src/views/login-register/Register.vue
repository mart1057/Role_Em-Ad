<template>
    <div class="mr-[55px] m-[35px]">
        <div>
            <img class="w-[85px] h-[27px] mb-[32px]  " :src="logoClicksBiz" alt="">
        </div>
        <div class="flex flex-col  items-center">
            <div>
                <div class="mb-[30px] text-center text-[24px] font-[700]">Sign up</div>
                <div class="flex justify-between mb-[18px]">
                    <div class="flex flex-col">
                    <span class="mb-[5px] text-[#2D3349] text-[12px]">First Name</span>
                    <input class="border-[#D2D2D2] border-[1px] w-[198px] h-[40px] rounded-[6px]"
                        placeholder="Sharon" value="" type="text" />
                </div>
                <div class="flex flex-col">
                    <span class="mb-[5px] text-[#2D3349] text-[12px]">Last Name</span>
                    <input class="border-[#D2D2D2] border-[1px] w-[198px] h-[40px] rounded-[6px]"
                        placeholder="Carr" value="" type="text" />
                </div>
                </div>
                <div class="flex flex-col">
                    <span class="mb-[5px] text-[#2D3349] text-[12px]">Email</span>
                    <input class="border-[#D2D2D2] border-[1px] w-[421px] h-[40px] rounded-[6px]"
                        placeholder="Sharon.c@gmail.com" value="" type="text" />
                </div>
                <div class="flex flex-col">
                    <div class="flex justify-between mt-[18px]">
                    <div class="flex flex-col">
                    <span class="mb-[5px] text-[#2D3349] text-[12px]">Password</span>
                    <input class="border-[#D2D2D2] border-[1px] w-[198px] h-[40px] rounded-[6px]"
                        placeholder="********" value="" type="password" />
                </div>
                <div class="flex flex-col">
                    <span class="mb-[5px] text-[#2D3349] text-[12px]">Confirm Password</span>
                    <input class="border-[#D2D2D2] border-[1px] w-[198px] h-[40px] rounded-[6px]"
                        placeholder="********" value="" type="password" />
                </div>
                </div>
                </div>
                <div class="flex flex-col">
                    <button class="bg-[#4FBD9E] text-[15px] w-[421px] h-[45px] rounded-[8px] mt-[25px] text-white">Sign up</button>
                    <span class="text-center text-[12px] mt-[18px] text-[#9E9FA0]"> Don’t have an account? <a href="" class=" text-[#4FBD9E]">Sign up for free</a> </span>
                </div>
                <div class="flex justify-between mt-[18px] items-center">
                    <hr width="193px">
                    <div class="text-[14px] font-bold text-[#9E9FA0]">or</div>
                    <hr width="193px">
                </div>
                <div class="flex justify-between mt-[18px]">
                    <button class="border-[1px] rounded-[4px] w-[200px] h-[40px] text-[#6B7490] font-bold  flex justify-center items-center">
                        <div class="flex items-center">
                            <img class="mr-[8px] w-[18px] h-[18px] text-center" :src="logo_google" />
                            <span class="text-[12px]"> Sing up With Google</span>
                        </div>
                    </button>
                    <button class="border-[1px] rounded-[4px] w-[200px] h-[40px] text-[#6B7490] font-bold bg-[#4776D0] flex justify-center items-center">
                        <div class="flex items-center">
                            <img class="mr-[8px] w-[18px] h-[18px] text-center" :src="logo_facebook" />
                            <span class="text-[12px] text-white"> Sing up With Google</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import logoClicksBiz from '../../assets/image/logo-clicksBiz.png'
import logo_facebook from '@/assets/image/logo_facebook.png'
import logo_google from '@/assets/image/logo_google.png'
export default {
    data() {
        return {
            logoClicksBiz,
            logo_google,
            logo_facebook
        }
    }
}
</script>
<style scoped>
input[type=text],[type=password] {
    font-family: 'IBM Plex Sans Thai', sans-serif;
    padding: 12px 20px;
    margin: 8px 0;
}



</style>