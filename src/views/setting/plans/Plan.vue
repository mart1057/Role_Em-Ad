<template>
    <div class="h-[100%] bg-white m-[10px] rounded-[10px]">
        <div class="p-[20px]">
            <div>
                <div class="text-[20px] font-bold">Plan</div>
                <div class="hidden">
                    <vs-button flat success icon @click="openNotification('top-right', 'success', 6000)">
                    </vs-button>
                </div>
                <div class="grid grid-cols-4 w-[100%] gap-4 mt-[30px]">
                    <div class=" h-[160px] p-[10px] rounded-[10px] flex flex-col justify-between " :class="selectPlan.name == 'SILVER' ? 'silver-card' : selectPlan.name == 'GOLD' ? 'gold-card' :
                        selectPlan.name == 'PLATINUM' ? 'paltinum-card' : 'bg-[#c9f7f3]'">
                        <div class="flex justify-between">
                            <div class="flex flex-col justify-start items-start">
                                <div class="text-white font-medium text-[14px]">{{ this.selectPlan.name? 'Your Plan':'Not Plans' }}</div>
                                <div class="text-white font-medium text-[18px]">{{ this.selectPlan.name }}</div>
                                <div class="text-white font-medium text-[12px]">{{ this.selectPlan.duration }} Day</div>
                            </div>
                            <div class="flex justify-end items-center">
                                <div class="text-white font-medium text-[18px]">{{ this.selectPlan.price }} </div>
                                <span class="text-[8px] text-white">&nbsp; THB/Mouth</span>
                            </div>
                        </div>
                        <div>
                            <button @click="dailogPlan = true"
                                class="w-[96px] h-[28px] text-[10px] font-medium bg-white rounded-[5px]">{{ this.selectPlan.name? 'Change Plan':'Buy Now' }}</button>
                        </div>
                    </div>
                    <div class="card-detail col-span-3 h-[160px] p-[10px] flex flex-col justify-between">
                        <div class="flex justify-between">
                            <div class="text-[14px] font-bold">Tax Invoice <span
                                    class="text-[10px] text-[#6B7490] font-normal">(Company)</span>
                            </div>
                            <div class="cursor-pointer" @click="dailogTaxInvoice = true"><md-icon
                                    style=" color:#79ACF9;">edit_square</md-icon></div>
                        </div>

                        <div>
                            <div class="grid grid-cols-4 w-[100%] gap-4">
                                <div class="text-[10px] text-[#6B7490] font-normal">Next Billing Date</div>
                                <div class="text-[10px] text-[#6B7490] font-normal">Full name</div>
                                <div class="text-[10px] text-[#6B7490] font-normal">Email</div>
                                <div class="text-[10px] text-[#6B7490] font-normal">Phone</div>
                            </div>
                            <div class="grid grid-cols-4 w-[100%] gap-4">
                                <div class="text-[12px] font-medium">-</div>
                                <div class="text-[12px]">{{ dataTax.name }} {{ dataTax.last_name }}</div>
                                <div class="text-[12px]">{{ dataTax.email }}</div>
                                <div class="text-[12px]">{{ dataTax.phone }}</div>
                            </div>
                        </div>
                        <div>
                            <div class="grid grid-cols-4 w-[100%] gap-4">
                                <div class="text-[10px] text-[#6B7490] font-normal">Tax ID</div>
                                <div class="text-[10px] text-[#6B7490] font-normal">Billing Address</div>
                                <div class="text-[10px] text-[#6B7490] font-normal">Shipping Address</div>
                            </div>
                            <div class="grid grid-cols-4 w-[100%] gap-4">
                                <div class="text-[12px] font-medium">{{ dataTax.tax }}</div>
                                <div class="text-[12px] font-medium">{{ dataTax.billing_address }}</div>
                                <div class="text-[12px] font-medium">{{ dataTax.shipping_address }}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-[20px] font-bold mt-[30px]">Billing History</div>
                <div class="grid grid-cols-5 w-[100%] gap-4 ml-[14px] mt-[20px]">
                    <div class="text-[12px] font-medium">Invoice Date</div>
                    <div class="text-[12px] font-medium">Plan</div>
                    <div class="text-[12px] font-medium">Membership Type</div>
                    <div class="text-[12px] font-medium">Amount</div>
                    <div class="text-[12px] font-medium">Status</div>
                </div>
                <div v-for="(data, i) in billing_history" :key="i">
                    <hr class="mt-[5px] mb-[12px]">
                    <div class="grid grid-cols-5 w-[100%] gap-4 ml-[14px]">
                        <div class="text-[12px] font-medium text-[#3C7CFC]">{{covertDay(data.attributes.createdAt)}}</div>
                        <div class="text-[12px] font-medium">
                            <div class="flex">
                                <div class="w-[auto] text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px]"
                                    :style="{ background: data.attributes.package.data.attributes.packageName == 'GOLD' ? '#FFB927' : data.attributes.package.data.attributes.packageName == 'SILVER' ? '#BCC7D6' : data.attributes.package.data.attributes.packageName == 'PLATINUM' ? '#64859F' : '' }">
                                    {{ data.attributes.package.data.attributes.packageName }}</div>
                            </div>
                        </div>
                        <div class="text-[12px]">{{ data.attributes.duration == 30? 'Month':'Year' }}</div>
                        <div class="text-[12px]">{{ data.attributes.package.data.attributes.price }} THB</div>
                        <div class="text-[12px]">
                            <div class="flex">
                                <div class="w-[auto] text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px]"
                                    :style="{ background: data.attributes.status == 'Completed' ? '#2CD67A' : '#32C4F2' }">
                                    {{ data.attributes.status }}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <vs-dialog overflow-hidden full-screen not-close v-model="dailogPlan">
            <div class="flex flex-col justify-between">
                <div class="m-[10px]">
                    <div class="flex justify-between">
                        <div></div>
                        <div class="cursor-pointer" @click="dailogPlan = false"><md-icon>close</md-icon></div>
                    </div>
                    <div class="text-[20px] font-bold flex justify-center">Chang Plan</div>
                    <div class="flex justify-center mt-[34px]">
                        <button @click="countSave = false"
                            class="w-[100px] h-[40px] rounded-[5px] border-[1px] border-[##3C7CFC]"
                            :class="countSave == false ? 'text-white bg-[#3C7CFC]' : ''">Monthly</button>
                        <button @click="countSave = true"
                            class="w-[150px] h-[40px] rounded-[5px] border-[1px] border-[##3C7CFC] ml-[12px] "
                            :class="countSave == true ? 'text-white bg-[#3C7CFC]' : ''">
                            Annual, <span :class="countSave == true ? 'text-white' : 'text-[#3C7CFC]'">save 10%</span>
                        </button>
                    </div>
                    <div class="flex justify-center items-center">
                        <div class="flex justify-center ] mt-[50px]">
                            <div class="w-[300px] h-[420px] silver-card rounded-[16px] p-[20px] ml-[50px] "
                                :class="data.attributes.packageName == 'SILVER' ? 'silver-card' : data.attributes.packageName == 'GOLD' ? 'gold-card' : 'paltinum-card'"
                                v-for="(data, i) in plans">
                                <div class="flex flex-col justify-center items-center">
                                    <div class="text-[24px] font-medium text-white">{{ data.attributes.packageName }}</div>
                                    <div class="text-[14px] text-white mt-[2px]">{{ data.attributes.duration }} Day</div>
                                </div>
                                <div class="flex justify-center items-center mt-[10px]">
                                    <div class="text-white font-medium text-[24px]">{{ countSave == true ?
                                        data.attributes.price - (data.attributes.price * 0.1) : data.attributes.price }}
                                    </div>
                                    <span class="text-[10px] text-white mt-[10px]">&nbsp; THB/Mouth</span>
                                </div>
                                <div class="mt-[20px]">
                                    <div class="flex justify-between">
                                        <div class="text-[10px] text-[white]">Storage</div>
                                        <div class="text-[12px] text-[white] font-medium">{{
                                            data.attributes.storageLimit >= 1000 ?
                                            data.attributes.storageLimit / 1000 : data.attributes.storageLimit }} {{
        data.attributes.storageLimit >= 1000 ? 'TB' : 'GB' }}
                                        </div>
                                    </div>
                                    <hr class="text-[white] mt-[10px]">
                                    <div class="flex justify-between">
                                        <div class="text-[10px] text-[white]">Approval Workflow</div>
                                        <div class="flex justify-center items-center"><md-icon
                                                :style="{ color: data.attributes.approvalWorkflow ? 'green' : 'red' }">
                                                {{ data.attributes.approvalWorkflow ? 'check_circle' : 'cancel' }}
                                            </md-icon></div>
                                    </div>
                                    <hr class="text-[white] mt-[10px]">
                                    <div class="flex justify-between">
                                        <div class="text-[10px] text-[white]">Document Numbering</div>
                                        <div class="flex justify-center items-center"><md-icon
                                                :style="{ color: data.attributes.documentNumbering ? 'green' : 'red' }">
                                                {{ data.attributes.documentNumbering ? 'check_circle' : 'cancel' }}
                                            </md-icon></div>
                                    </div>
                                    <hr class="text-[white] mt-[10px]">
                                    <div class="flex justify-between">
                                        <div class="text-[10px] text-[white]">Priority Support</div>
                                        <div class="flex justify-center items-center"><md-icon
                                                :style="{ color: data.attributes.prioritySupport ? 'green' : 'red' }">
                                                {{ data.attributes.prioritySupport ? 'check_circle' : 'cancel' }}
                                            </md-icon></div>
                                    </div>
                                    <hr class="text-[white] mt-[10px]">
                                    <div class="flex justify-between">
                                        <div class="text-[10px] text-[white]">Collaborate with up to</div>
                                        <div class="text-[12px] text-[white] font-medium">{{ data.attributes.numberOfUser }}
                                            ppl {{ i }}
                                        </div>
                                    </div>
                                    <div class="flex justify-center items-center mt-[12px] ">
                                        <button @click="setPlan(data), select = i + 1"
                                            :class="select == i + 1 ? 'bg-[white]' : 'text-[white]'"
                                            class="w-[68px] text-[12px] font-medium h-[28px] rounded-[5px] border-[1px] border-[#FFFFFF]">
                                            {{ select == i + 1 ? 'Your Plan' : 'Select' }}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="flex justify-end mt-[20px] mr-[50px]"><button @click="paymentPlan(), dailogPlan = false"
                        class="w-[100px] h-[40px] rounded-[5px] text-white bg-[#3C7CFC]">Confirm</button></div>
            </div>
        </vs-dialog>
        <vs-dialog width="550px" not-center not-close v-model="dailogTaxInvoice">
            <div class="m-[10px]">
                <div class="flex justify-between">
                    <div class="text-[20px] font-bold">Request Full Tax Invoice</div>
                    <div @click="dailogTaxInvoice = false" class="cursor-pointer"><md-icon>close</md-icon></div>
                </div>
                <div class="mt-[20px]">
                    <div>
                        <div class="text-[12px] font-medium">Type</div>
                        <div class="flex mt-[8px]">
                            <vs-radio :val="true" v-model="dataTax.type">
                                <div class="text-[12px]">Personal</div>
                            </vs-radio>
                            <vs-radio :val="false" v-model="dataTax.type">
                                <div class="text-[12px]">Company</div>
                            </vs-radio>
                        </div>

                    </div>
                    <div class="grid grid-cols-2 w-[100%] gap-4 mt-[20px]">
                        <div>
                            <div class="text-[12px] font-medium">First name</div>
                            <div class="mt-[8px]"><input class="w-[100%] h-[38px]" v-model="dataTax.name" /></div>
                        </div>
                        <div>
                            <div class="text-[12px] font-medium">Last name</div>
                            <div class="mt-[8px]"><input class="w-[100%] h-[38px]" v-model="dataTax.last_name" /></div>
                        </div>
                        <div>
                            <div class="text-[12px] font-medium">Email address</div>
                            <div class="mt-[8px]"><input class="w-[100%] h-[38px]" v-model="dataTax.email" /></div>
                        </div>
                        <div>
                            <div class="text-[12px] font-medium">Phone number</div>
                            <div class="mt-[8px]"><input class="w-[100%] h-[38px]" v-model="dataTax.phone" /></div>
                        </div>
                        <div>
                            <div class="text-[12px] font-medium">Tax ID</div>
                            <div class="mt-[8px]"><input class="w-[100%] h-[38px]" v-model="dataTax.tax" /></div>
                        </div>
                        <div class="col-span-2">
                            <div class="text-[12px] font-medium">Billing Address</div>
                            <div class="mt-[8px]"><input class="w-[100%] h-[38px]" v-model="dataTax.billing_address" />
                            </div>
                        </div>
                        <div class="col-span-2">
                            <div class="text-[12px] font-medium">Shipping Address</div>
                            <div class="mt-[8px]"><input class="w-[100%] h-[38px]" v-model="dataTax.shipping_address" />
                            </div>
                        </div>

                    </div>
                    <div class="flex justify-end mt-[18px] mr-[10px]">
                        <vs-button border size="large" active @click="dailogTaxInvoice = false">Save</vs-button>
                    </div>
                </div>
            </div>
        </vs-dialog>
    </div>
</template>
<script>
import axios from 'axios';
import CryptoJS from 'crypto-js';
import { sha256 } from 'js-sha256';
import { createHmac } from 'crypto';
export default {
    data() {
        return {
            dailogPlan: false,
            dailogTaxInvoice: false,
            countSave: false,
            select: 1,
            selectPlan: {
                id: '',
                price: '',
                duration: '',
                name: ''
            },
            selectPlanAPI: {
                id: '',
                price: '',
                duration: '',
                name: ''
            },
            dataTax: {
                name: '-',
                last_name: '-',
                email: '-',
                phone: '-',
                tax: '-',
                shipping_address: '-',
                billing_address: '-',
                type: true

            },
            dataPlan: {
                silver: {
                    name: 'SILVER',
                    desc: 'Best setting for small business',
                    price: '690',
                    price_sale: '621',
                    storage: '500',
                    approv: false,
                    docnumbering: false,
                    support: false,
                    collaborate: '20'
                },
                gold: {
                    name: 'GOLD',
                    desc: 'Best setting for corporate',
                    price: '1,790',
                    price_sale: '1,611',
                    storage: '1',
                    approv: true,
                    docnumbering: true,
                    support: false,
                    collaborate: '50'

                },
                platinum: {
                    name: 'PLATINUM',
                    desc: 'Best setting for Enterprise',
                    price: '2,990',
                    price_sale: '2,691',
                    storage: '2',
                    approv: true,
                    docnumbering: true,
                    support: true,
                    collaborate: '200'
                }
            },
            billing_history: [],
            plans: []
        }
    },
    mounted() {
        this.getPLans();
        this.getHistoryOrder();
        this.selectPlan.id = this.$store.state.userDetail.package.id
        this.selectPlan.duration = this.$store.state.userDetail.package.duration
        this.selectPlan.price = this.$store.state.userDetail.package.price
        this.selectPlan.name = this.$store.state.userDetail.package.packageName
        if (this.$route.query.status) {
            this.openNotification('top-right', 6000)
        }
    },
    methods: {
        covertDay(data) {
            const date = new Date(data);
            const options = { day: 'numeric', month: 'short', year: 'numeric' };
            const formattedDate = date.toLocaleDateString('en-GB', options);
            return formattedDate
        },
        openNotification(position = null, color) {
            const noti = this.$vs.notification({
                sticky: true,
                color: this.$route.query.status == 'true' ? 'success' : 'danger',
                position,
                title: this.$route.query.status == 'true' ? 'Subscribe to ' + this.$route.query.name + ' Package Successful' : 'Subscribe to Package Fail.',
                text: this.$route.query.status == 'true' ? 'You can start using ClicksBiz Document Management.' : 'Please try again or contact our support.'
            })
        },
        getHistoryOrder(){
            fetch('http://27.254.144.88:1337/api' + '/orders?populate=*&filters[user_order][id][$eq]='+this.$store.state.userInfo.id)
                .then(response => response.json())
                .then((resp) => {
                    const arr = []
                    arr.push(resp.data)
                    this.billing_history = arr[0]
                    console.log(this.billing_history);
                })
        },
        editTax(data) {
            console.log(data);
        },
        setPlan(data) {
            this.selectPlanAPI.id = data.id
            this.selectPlanAPI.duration = data.attributes.duration
            this.selectPlanAPI.price = data.attributes.price
            this.selectPlanAPI.name = data.attributes.packageName
        },
        getPLans() {
            fetch('http://27.254.144.88:1337/api' + '/packages?populate=*')
                .then(response => response.json())
                .then((resp) => {
                    const arr = []
                    arr.push(resp.data)
                    this.plans = arr[0]
                })
        },
        paymentPlan() {
            console.log(parseFloat(this.selectPlanAPI.price.toFixed(2)));
            const randomNumber = Math.floor(Math.random() * 100000000) + 1;
            const apiUrl = '/api/v1/redirect/orders';
            const detail = {
                "amount": parseFloat(this.selectPlan.price*100),
                "channel": "alipay,wechat,linepay,airpay,promptpay,truemoney,ktbcard,ktccard",
                "currency": "THB",
                "member_id": 'test',
                "merchant_order_id": 'w' + randomNumber,
                "mid": "",
                "provider": "th",
                "redirect_url": "http://localhost:8080/setting/plans?status=true&name=" + this.selectPlanAPI.name,
                "redirect_url_fail": "http://localhost:8080/setting/plans?status=false",
                "signature": "F9A1874E0EE3ED1BE898DCB8B725D086064FCFEE72FC99C3439DB216FC16B79C",
                "timestamp": "1688443159"
            };
            const secretKey = 'd5df0c29e00d13b0f8989f8dff5deb47e030a928fb7564fb5970225abc80dbf7';
            const obj = {}
            Object.keys(detail).sort().forEach(key => {
                if (key !== 'signature')
                    obj[key] = detail[key]
            })
            const keyvalue = Object.entries(obj).map(([key, value]) => key + value).join('')
            const parameterStr = apiUrl + keyvalue
            const hash = CryptoJS.HmacSHA256(parameterStr, secretKey).toString(CryptoJS.enc.Hex).toUpperCase();
            console.log(hash);
            axios.post('https://s37672.vip.ksher.net/api/v1/redirect/orders', {
                "amount": parseFloat(this.selectPlan.price*100),
                "channel": "alipay,wechat,linepay,airpay,promptpay,truemoney,ktbcard,ktccard",
                "currency": "THB",
                "member_id": 'test',
                "merchant_order_id": 'w' + randomNumber,
                "mid": "",
                "provider": "th",
                "redirect_url": "http://localhost:8080/setting/plans?status=true&name=" + this.selectPlanAPI.name,
                "redirect_url_fail": "http://localhost:8080/setting/plans?status=false",
                "signature": hash,
                "timestamp": "1688443159"
            }).then((resp) => {
                if (resp.data?.reference) {
                    axios.post('http://27.254.144.88:1337/api' + '/orders', {
                        "data": {
                            "orderNumber": 'w' + randomNumber,
                            "user_order": this.$store.state.userInfo.id,
                            "status": "Pending Payment",
                            // "updateDate": "2023-07-12T09:34:10.342Z",
                            "amount": this.selectPlanAPI.price,
                            "package": this.selectPlanAPI.id,
                            "duration": this.selectPlanAPI.duration
                        }
                    }).then((resp) => {

                    })
                    window.open(resp.data.reference, '_self')
                }

            })
        },
    }

}
</script>

<style>
.card-plans {
    background: linear-gradient(180deg, #FFB927 13.83%, #B0700F 123.64%);
    /* Drop Shadow2 */
    box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.15);
}

.card-detail {
    box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
}

.silver-card {
    background: linear-gradient(180deg, #BCC7D6 0%, #91969D 100%);
    /* Drop Shadow2 */
    box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.15);
}

.gold-card {
    background: linear-gradient(180deg, #FFB927 0%, #B0700F 100%);
    /* Drop Shadow2 */
    box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.15);
}

.paltinum-card {
    background: linear-gradient(180deg, #64859F 0%, #172531 100%);
    /* Drop Shadow2 */
    box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.15);
}
</style>
