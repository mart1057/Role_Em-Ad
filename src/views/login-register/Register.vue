<template>
    <div class="mr-[55px] p-[35px]" id="register">
        <div>
            <img class="w-[85px] h-[27px] mb-[32px]  " :src="logoClicksBiz" alt="">
        </div>
        <form @submit.prevent="submitRegister">
            <!-- <li v-for="error in errors">{{ error }}</li> -->
            <div class="flex flex-col  items-center">
                <div>
                    <div class="mb-[30px] text-center text-[24px] font-[700]">Sign up</div>
                    <div class="flex justify-between mb-[18px]">
                        <div class="flex flex-col">
                            <span class="mb-[5px] text-[#2D3349] text-[12px]">First Name</span>
                            <input class="border-[#D2D2D2] border-[1px] w-[198px] h-[40px] rounded-[6px]"
                                placeholder="Sharon" v-model="dataRegister.name" type="text" />
                        </div>
                        <div class="flex flex-col">
                            <span class="mb-[5px] text-[#2D3349] text-[12px]">Last Name</span>
                            <input class="border-[#D2D2D2] border-[1px] w-[198px] h-[40px] rounded-[6px]" placeholder="Carr"
                                v-model="dataRegister.last_name" type="text" />
                        </div>
                    </div>
                    <div class="flex flex-col">
                        <span class="mb-[5px] text-[#2D3349] text-[12px]">Email</span>
                        <input class="border-[#D2D2D2] border-[1px] w-[421px] h-[40px] rounded-[6px]"
                            placeholder="Sharon.c@gmail.com" v-model="dataRegister.email" type="email" />
                        <!-- <span v-if="errors == 'Email or Username are already taken'" class="text-[12px] text-[red]">{{ errors }}</span> -->
                    </div>
                    <div class="flex flex-col">
                        <div class="flex justify-between mt-[18px]">
                            <div class="flex flex-col">
                                <span class="mb-[5px] text-[#2D3349] text-[12px]">Password</span>
                                <input class="border-[#D2D2D2] border-[1px] w-[198px] h-[40px] rounded-[6px]"
                                    placeholder="********" v-model="dataRegister.password" type="password" />
                                <!-- <span v-if="dataRegister.password != dataRegister.password_confirm"
                                    class="text-[12px] text-[red]">{{ errors }}</span> -->
                            </div>
                            <div class="flex flex-col">
                                <span class="mb-[5px] text-[#2D3349] text-[12px]">Confirm Password</span>
                                <input class="border-[#D2D2D2] border-[1px] w-[198px] h-[40px] rounded-[6px]"
                                    placeholder="********" v-model="dataRegister.password_confirm" type="password" />
                            </div>
                        </div>
                    </div>
                    <span class="text-[12px] text-[red] flex justify-center items-center text-center mt-[4px]">{{ errors
                    }}</span>
                    <div class="flex flex-col">
                        <button class="bg-[#4FBD9E] text-[15px] w-[421px] h-[45px] rounded-[8px] mt-[25px] text-white"
                            type="submit">Sign up</button>
                        <span class="text-center text-[12px] mt-[18px] text-[#9E9FA0]"> Don’t have an account? <a
                                href="/" class=" text-[#4FBD9E]">Sign in</a> </span>
                    </div>
                    <div class="flex justify-between mt-[18px] items-center">
                        <hr width="193px">
                        <div class="text-[14px] font-bold text-[#9E9FA0]">or</div>
                        <hr width="193px">
                    </div>
                    <div class="flex justify-between mt-[18px]">
                        <button
                            class="border-[1px] rounded-[4px] w-[200px] h-[40px] text-[#6B7490] font-bold  flex justify-center items-center">
                            <div class="flex items-center">
                                <img class="mr-[8px] w-[18px] h-[18px] text-center" :src="logo_google" />
                                <span class="text-[12px]"> Sing up With Google</span>
                            </div>
                        </button>
                        <button
                            class="border-[1px] rounded-[4px] w-[200px] h-[40px] text-[#6B7490] font-bold bg-[#4776D0] flex justify-center items-center">
                            <div class="flex items-center">
                                <img class="mr-[8px] w-[18px] h-[18px] text-center" :src="logo_facebook" />
                                <span class="text-[12px] text-white"> Sing up With Google</span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import logoClicksBiz from '../../assets/image/logo-clicksBiz.png'
import logo_facebook from '@/assets/image/logo_facebook.png'
import logo_google from '@/assets/image/logo_google.png'
import axios from 'axios'
import router from '@/router'
export default {
    data() {
        return {
            logoClicksBiz,
            logo_google,
            logo_facebook,
            errors: '',
            dataRegister: {
                name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirm: '',
            }
        }
    },
    methods: {
        submitRegister(e) {
            this.errors = ''
            // this.errors = [];
            // if(!this.dataRegister.name) this.errors.push("Name required.");
            if (this.dataRegister.password != '' || this.dataRegister.name != '' || this.dataRegister.last_name != '' || this.dataRegister.email != '' || this.dataRegister.password != '') {
                if (this.dataRegister.password === this.dataRegister.password_confirm) {
                    console.log(this.dataRegister)
                    axios.post('http://27.254.144.88:1337/api' + '/auth/local/register', {
                        "username": this.dataRegister.email,
                        "email": this.dataRegister.email,
                        "password": this.dataRegister.password,
                        "lastName": this.dataRegister.last_name,
                        "firstName": this.dataRegister.name

                    }).then((resp) => {
                        router.push({
                            path: '/',
                        })
                        e.preventDefault();
                    }).catch((err) => {
                        console.log(err);
                        if (err.response.data.error.message = 'password must be at least 6 characters') {
                            this.errors = 'Password must be at least 6 characters'
                            console.log('pass', this.errors);
                        }
                        else if (err.response.data.error.message = 'Email or Username are already taken') {
                            this.errors = 'Email or Username are already taken'
                            console.log('email', this.errors);
                        }
                    })
                }
                else {
                    this.errors = 'กรุณากรอกรหัสผ่านให้ตรงกัน'
                }
            }
            else {
                this.errors = 'กรุณากรอกข้อมูลให้ครบถ้วน'
            }


        }
    }
}
</script>
<style scoped>
input[type=text],
[type=password],
[type=email] {
    font-family: 'IBM Plex Sans Thai', sans-serif;
    padding: 12px 20px;
    margin: 8px 0;
}

#register {
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255) !important;
}
</style>