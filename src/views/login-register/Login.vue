<template>
    <div class="mr-[55px]" id="login">
        <div class="p-[35px]">
            <img class="w-[85px] h-[27px] mb-[32px]  " :src="logoClicksBiz" alt="">
        </div>
        <div class="flex flex-col  items-center">
            <div>
                <div class="mb-[30px] text-center text-[24px] font-[700]">Sign in</div>
                <div class="flex flex-col">
                    <span class="mb-[5px] text-[#2D3349] text-[12px]">Email</span>
                    <input class="border-[#D2D2D2] border-[1px] w-[421px] h-[40px] rounded-[6px]"
                        placeholder="Sharon.c@gmail.com" v-model="dataLogin.email" type="email" />
                </div>
                <div class="flex flex-col">
                    <span class="mb-[5px] text-[#2D3349] mt-[20px] text-[12px]">Password</span>
                    <input class="border-[#D2D2D2] border-[1px] w-[421px] h-[40px] rounded-[6px]" 
                        type="password" placeholder="********" v-model="dataLogin.password"/>
                </div>
                <div class="flex justify-between mt-[18px]">
                    <div class="flex">
                        <vs-checkbox v-model="dataLogin.remember"></vs-checkbox>
                        <span class="ml-[10px] text-[12px] flex items-center text-[#9E9FA0]">Remember me</span>
                    </div>
                    <div class="text-[12px] text-[#4FBD9E]">Forgot your password?</div>
                </div>
                <div class="flex flex-col">
                    <button class="bg-[#4FBD9E] text-[15px] w-[421px] h-[45px] rounded-[8px] mt-[25px] text-white" @click="submitLogin">Sign in</button>
                    <span class="text-center text-[12px] mt-[18px] text-[#9E9FA0]"> Don’t have an account? <a href="/register" class=" text-[#4FBD9E]">Sign up for free</a> </span>
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
                            <span class="text-[12px]"> Sing in With Google</span>
                        </div>
                    </button>
                    <button class="border-[1px] rounded-[4px] w-[200px] h-[40px] text-[#6B7490] font-bold bg-[#4776D0] flex justify-center items-center">
                        <div class="flex items-center">
                            <img class="mr-[8px] w-[18px] h-[18px] text-center" :src="logo_facebook" />
                            <span class="text-[12px] text-white"> Sing in With Google</span>
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
            logo_facebook,
            dataLogin:{
                email:'',
                password:'',
                remember:false
            }
        }
    },
    methods:{
        submitLogin(){
            console.log(this.dataLogin)
        }
    }
}
</script>
<style scoped>
#login{
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255) !important;
}
input[type=text],[type=email],
[type=password] {
    font-family: 'IBM Plex Sans Thai', sans-serif;
    padding: 12px 20px;
    margin: 8px 0;
}
</style>

