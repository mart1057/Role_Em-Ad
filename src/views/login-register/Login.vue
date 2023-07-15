<template>
    <div>
        <div v-if="checkType == 1">
            <div class="mr-[55px] p-[35px] w-[100%] h-[100%]" id="login">
                <div>
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
                            <input class="border-[#D2D2D2] border-[1px] w-[421px] h-[40px] rounded-[6px]" type="password"
                                placeholder="********" v-model="dataLogin.password" />
                        </div>
                        <div class="flex justify-between mt-[18px]">
                            <div class="flex">
                                <vs-checkbox v-model="dataLogin.remember"></vs-checkbox>
                                <span class="ml-[10px] text-[12px] flex items-center text-[#9E9FA0]">Remember me</span>
                            </div>
                            <div class="text-[12px] text-[#4FBD9E] cursor-pointer" @click="checkType = 2">Forgot your
                                password?
                            </div>
                        </div>
                        <div class="text-[12px] text-[red] flex justify-center items-center text-center mt-[4px]"
                            v-if="$store.state.errLogin">Incorrect email address or password</div>
                        <div class="flex flex-col">

                            <button class="bg-[#4FBD9E] text-[15px] w-[421px] h-[45px] rounded-[8px] mt-[25px] text-white"
                                @click="submitLogin()">Sign in</button>
                            <span class="text-center text-[12px] mt-[18px] text-[#9E9FA0]"> Don’t have an account? <span
                                    class=" text-[#4FBD9E] cursor-pointer" @click="checkType = 3">Sign up for free</span>
                            </span>
                        </div>
                        <div class="flex justify-between mt-[18px] items-center">
                            <hr width="193px">
                            <div class="text-[14px] font-bold text-[#9E9FA0]">or</div>
                            <hr width="193px">
                        </div>
                        <div class="flex justify-between mt-[18px]">
                            <button @click="handleSignInGoogle()"
                                class="border-[1px] rounded-[4px] w-[200px] h-[40px] text-[#6B7490] font-bold  flex justify-center items-center">
                                <div class="flex items-center">
                                    <img class="mr-[8px] w-[18px] h-[18px] text-center" :src="logo_google" />
                                    <span class="text-[12px]"> Sign in With Google</span>
                                </div>
                            </button>
                            <button @click="handleSignInFacebook()"
                                class="border-[1px] rounded-[4px] w-[200px] h-[40px] text-[#6B7490] font-bold bg-[#4776D0] flex justify-center items-center">
                                <div class="flex items-center">
                                    <img class="mr-[8px] w-[18px] h-[18px] text-center" :src="logo_facebook" />
                                    <span class="text-[12px] text-white"> Sign in With Facebook</span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="checkType === 2">
            <div class="mr-[55px] p-[35px] w-[100%] h-[100%]" id="login">
                <div>
                    <img class="w-[85px] h-[27px] mb-[32px]  " :src="logoClicksBiz" alt="">
                </div>
                <div class="flex flex-col  items-center">
                    <div>
                        <div class="mb-[30px] text-center text-[24px] font-[700]">Forgot Password</div>
                        <div class="flex flex-col">
                            <span class="mb-[5px] text-[#2D3349] text-[12px]">Email</span>
                            <input class="border-[#D2D2D2] border-[1px] w-[421px] h-[40px] rounded-[6px]"
                                placeholder="Sharon.c@gmail.com" v-model="emailForgot" type="email" />
                        </div>
                        <!-- <div class="flex flex-col">
                        <span class="mb-[5px] text-[#2D3349] mt-[20px] text-[12px]">Password</span>
                        <input class="border-[#D2D2D2] border-[1px] w-[421px] h-[40px] rounded-[6px]" type="password"
                            placeholder="********" v-model="dataLogin.password" />
                    </div> -->
                        <div class="flex justify-between mt-[18px]">
                            <!-- <div class="flex">
                            <vs-checkbox v-model="dataLogin.remember"></vs-checkbox>
                            <span class="ml-[10px] text-[12px] flex items-center text-[#9E9FA0]">Remember me</span>
                        </div>
                        <div class="text-[12px] text-[#4FBD9E] cursor-pointer" @click="checkType = 2">Forgot your password?</div> -->
                        </div>
                        <div class="text-[12px] text-[red] flex justify-center items-center text-center mt-[4px]"></div>
                        <div class="flex flex-col">

                            <button class="bg-[#4FBD9E] text-[15px] w-[421px] h-[45px] rounded-[8px] mt-[25px] text-white"
                                @click="forgotPass()">Comfirm</button>
                            <span class="text-center text-[12px] mt-[18px] text-[#9E9FA0]"><span
                                    class=" text-[#4FBD9E] cursor-pointer" @click="checkType = 1">Back to login</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else-if="checkType === 3">
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
                                    <input class="border-[#D2D2D2] border-[1px] w-[198px] h-[40px] rounded-[6px]"
                                        placeholder="Carr" v-model="dataRegister.last_name" type="text" />
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
                                            placeholder="********" v-model="dataRegister.password_confirm"
                                            type="password" />
                                    </div>
                                </div>
                            </div>
                            <span class="text-[12px] text-[red] flex justify-center items-center text-center mt-[4px]">{{
                                errors
                            }}</span>
                            <div class="flex flex-col">
                                <button
                                    class="bg-[#4FBD9E] text-[15px] w-[421px] h-[45px] rounded-[8px] mt-[25px] text-white"
                                    type="submit">Sign up</button>
                                <span class="text-center text-[12px] mt-[18px] text-[#9E9FA0]"> Don’t have an account? <span
                                        class=" text-[#4FBD9E] cursor-pointer" @click="checkType = 1">Sign in</span> </span>
                            </div>
                            <div class="flex justify-between mt-[18px] items-center">
                                <hr width="193px">
                                <div class="text-[14px] font-bold text-[#9E9FA0]">or</div>
                                <hr width="193px">
                            </div>
                            <div class="flex justify-between mt-[18px]">
                                <button @click="handleSignInGoogle()"
                                    class="border-[1px] rounded-[4px] w-[200px] h-[40px] text-[#6B7490] font-bold  flex justify-center items-center">
                                    <div class="flex items-center">
                                        <img class="mr-[8px] w-[18px] h-[18px] text-center" :src="logo_google" />
                                        <span class="text-[12px]"> Sign up With Google</span>
                                    </div>
                                </button>
                                <button @click="handleSignInFacebook()"
                                    class="border-[1px] rounded-[4px] w-[200px] h-[40px] text-[#6B7490] font-bold bg-[#4776D0] flex justify-center items-center">
                                    <div class="flex items-center">
                                        <img class="mr-[8px] w-[18px] h-[18px] text-center" :src="logo_facebook" />
                                        <span class="text-[12px] text-white"> Sign up With Google</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <div v-else-if="checkType === 4">
            <div class="mr-[55px] p-[35px]" id="register">
                <div>
                    <img class="w-[85px] h-[27px] mb-[32px]  " :src="logoClicksBiz" alt="">
                </div>
                <!-- <li v-for="error in errors">{{ error }}</li> -->
                <div class="flex flex-col  items-center">
                    <div>
                        <div class="mb-[30px] text-center text-[24px] font-[700]">Reset Password</div>
                        <div class="flex flex-col">
                            <div class="flex justify-between mt-[18px]">
                                <div class="flex flex-col">
                                    <span class="mb-[5px] text-[#2D3349] text-[12px]">Password</span>
                                    <input class="border-[#D2D2D2] border-[1px] w-[198px] h-[40px] rounded-[6px]"
                                        placeholder="********" v-model="resetPass" type="password" />

                                </div>
                                <div class="flex flex-col">
                                    <span class="mb-[5px] text-[#2D3349] text-[12px]">Confirm Password</span>
                                    <input class="border-[#D2D2D2] border-[1px] w-[198px] h-[40px] rounded-[6px]"
                                        placeholder="********" v-model="resetPassConfirm" type="password" />
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-col">
                            <span class="mb-[5px] text-[#2D3349] text-[12px]">Code</span>
                            <input class="border-[#D2D2D2] border-[1px] w-[421px] h-[40px] rounded-[6px]"
                                v-model="codeconfirm" />
                        </div>
                        <span v-if="errorsResetPass"
                            class="text-[12px] text-[red] flex justify-center items-center text-center mt-[4px]">Passwords
                            do not match or Code is incorrect</span>
                        <div class="flex flex-col">
                            <button class="bg-[#4FBD9E] text-[15px] w-[421px] h-[45px] rounded-[8px] mt-[25px] text-white"
                                @click="resetPassword()">Reset</button>
                            <span class="text-center text-[12px] mt-[18px] text-[#9E9FA0]"><span
                                    class=" text-[#4FBD9E] cursor-pointer" @click="checkType = 1">Back to login</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import logoClicksBiz from '../../assets/image/logo-clicksBiz.png'
import logo_facebook from '@/assets/image/logo_facebook.png'
import logo_google from '@/assets/image/logo_google.png'
import router from '@/router'
import axios from 'axios'
import firebaseConfig from '../../firebaseConfig';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider, FacebookAuthProvider } from "firebase/auth";
firebaseConfig

const provider = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
const providerGithub = new GithubAuthProvider();
const auth = getAuth();
export default {
    data() {
        return {
            emailForgot: '',
            resetPass: '',
            resetPassConfirm: '',
            errorsResetPass: false,
            codeconfirm: '',
            checkType: 1,
            logoClicksBiz,
            logo_google,
            logo_facebook,
            dataLogin: {
                email: '',
                password: '',
                remember: false
            },
            errors: '',
            dataRegister: {
                name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirm: '',
                filePath:''
            }
        }
    },
    methods: {
        openNotification(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'Reset password success',
                text: 'Go to login'
            })
        },
        openNotification2(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color,
                position,
                title: 'Send code to your email',
                text: 'Please check email'
            })
        },
        resetPassword() {
            axios.post('http://27.254.144.88:1337/api' + '/auth/reset-password', {
                "password": this.resetPass,
                "passwordConfirmation": this.resetPassConfirm,
                "code": this.codeconfirm
            })
                .then((resp) => {
                    this.openNotification('top-right', 'success', 6000)
                    this.resetPass = '',
                    this.resetPassConfirm = '',
                    this.codeconfirm = ''
                    setTimeout(()=>{
                        this.checkType = 1
                    },300)
                })
                .catch(() => {
                    this.errorsResetPass = true
                })
        },
        forgotPass() {
            axios.post('http://27.254.144.88:1337/api' + '/auth/forgot-password', {
                "email": this.emailForgot
            })
                .then((resp) => {
                    this.openNotification2('top-right', 'success', 6000)
                    this.emailForgot = ''
                    this.checkType = 4
                    console.log(resp);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        handleSignInGoogle() {
            signInWithPopup(auth, provider)
                .then((result) => {
                    console.log(result);
                    if(this.checkType == 1){
                        this.dataLogin.email = result._tokenResponse.email
                        this.dataLogin.password = result._tokenResponse.localId
                        this.$store.dispatch('loginUser', this.dataLogin)
                    }
                    else{
                        this.dataRegister.email = result._tokenResponse.email
                        this.dataRegister.name = result._tokenResponse.firstName
                        this.dataRegister.last_name = result._tokenResponse.lastName
                        this.dataRegister.password= result._tokenResponse.localId
                        this.dataRegister.password_confirm = result._tokenResponse.localId
                        this.dataRegister.filePath = result._tokenResponse.photoUrl
                        this.submitRegister()
                    }
                }).catch((error) => {
                    console.log(error);
                });
        },
        handleSignInFacebook() {
            signInWithPopup(auth, providerFacebook)
                .then((result) => {
                    console.log(result);
                    // The signed-in user info.
                    const user = result.user;
                    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                    const credential = FacebookAuthProvider.credentialFromResult(result);
                    const accessToken = credential.accessToken;
                    // IdP data available using getAdditionalUserInfo(result)
                    // ...
                })
                .catch((error) => {
                    // Handle Errors here
                    console.log(error)
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // The email of the user's account used.
                    const email = error.customData.email;
                    // The AuthCredential type that was used.
                    const credential = FacebookAuthProvider.credentialFromError(error);
                    // ...
                });
        },
        submitLogin() {
            this.$store.dispatch('loginUser', this.dataLogin)
            if (this.$store.state.is_login) {
                setTimeout(() => {
                    this.$store.dispatch('rolePerrmission', this.$store.state.userDetail.org_role.id)
                }, 800);
            }
        },
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
                        "firstName": this.dataRegister.name,
                        "filePath":this.dataRegister.filePath

                    }).then((resp) => {
                        this.checkType = true
                        this.dataRegister.email = '',
                            this.dataRegister.passwor = '',
                            this.dataRegister.last_name = ' ',
                            this.dataRegister.name = ''
                    }).catch((err) => {
                        this.errors = ''
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
    },
    mounted: function () {
        if (this.$store.state.is_login == false) {
            localStorage.clear();
        }
    },
}
</script>
<style scoped>
#login {
    width: 100%;
    height: 100%;
    background-color: rgb(255, 255, 255) !important;
}

input[type=text],
[type=email],
[type=password] {
    font-family: 'IBM Plex Sans Thai', sans-serif;
    padding: 12px 20px;
    margin: 8px 0;
}
</style>

