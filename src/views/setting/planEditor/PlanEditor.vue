<template>
    <div class="h-[100%] bg-white m-[10px] rounded-[10px]">
        <div class="p-[20px]">
            <div class="text-[20px] font-bold">Package Editor</div>
            <div class="flex justify-end" v-if="!editPack"><vs-button @click="editPack = true">Edit</vs-button></div>
            <div class="flex justify-end" v-if="editPack"><vs-button border
                    @click="editPack = false">Cancle</vs-button><vs-button @click="editPlan()">Save</vs-button></div>


            <div class="mt-[40px]">
                <table>
                    <tr>
                        <th class="plan text-[#6B7490]">Plan</th>
                        <th class="td">
                            <div class="mb-[10px]">
                                <div class="text-[20px] font-medium text-[#BCC7D6] ">Silver</div>
                                <div class="text-[12px] text-[#2D3349]">({{ silver.desc }})</div>
                            </div>
                        </th>
                        <th class="td">
                            <div class="mb-[10px]">
                                <div class="text-[20px] font-medium text-[#FFB927]">Gold</div>
                                <div class="text-[12px] text-[#2D3349]">({{ gold.desc }})</div>
                            </div>
                        </th>
                        <th class="platinum-last">
                            <div class="mb-[10px]">
                                <div class="text-[20px] font-medium text-[#64859F]">Paltinum</div>
                                <div class="text-[12px] text-[#2D3349]">({{ paltinum.desc }})</div>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td class="plan">Price</td>
                        <td class="td">
                            <div>
                                <div class="mt-[10px]"><span class="font-bold">{{ silver.price }}</span> THB/Month</div>
                                <div class="mb-[10px]"><span class="font-bold">{{ silver.price * 12 }}</span> THB/Year</div>
                            </div>
                        </td>
                        <td class="td">
                            <div>
                                <div class="mt-[10px]"><span class="font-bold">{{ gold.price }}</span> THB/Month</div>
                                <div class="mb-[10px]"><span class="font-bold">{{ gold.price * 12 }}</span> THB/Year</div>
                            </div>
                        </td>
                        <td class="platinum-last">
                            <div>
                                <div class="mt-[10px]"><span class="font-bold">{{ paltinum.price }}</span> THB/Month</div>
                                <div class="mb-[10px]"><span class="font-bold">{{ paltinum.price * 12 }}</span> THB/Year
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="plan">Storage</td>
                        <td class="td">
                            <div class=" mt-[10px] mb-[10px] font-bold">{{ silver.storageLimit }} GB</div>
                        </td>
                        <td class="td">
                            <div class=" mt-[10px] mb-[10px] font-bold"> {{ gold.storageLimit / 1000 }} TB</div>
                        </td>
                        <td class="platinum-last">
                            <div class=" mt-[10px] mb-[10px] font-bold">{{ paltinum.storageLimit / 1000 }} TB</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="plan">Approval Workflow</td>
                        <td class="td">
                            <div class=" mt-[10px] mb-[10px] flex justify-center">
                                <div><md-icon :style="{ color: silver.approval_workflow ? 'green' : 'red' }">{{
                                    silver.approval_workflow ? 'check_circle' : 'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="silver.showPopup_approval">
                                        <div @click="silver.showPopup_approval = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#BCC7D6]">Approval
                                                    Workflow</div>
                                                <div class="flex ml-[10px]">
                                                    <vs-switch success v-model="silver.approval_workflow">
                                                        <template #off>
                                                            Off
                                                        </template>
                                                        <template #on>
                                                            On
                                                        </template>
                                                    </vs-switch>
                                                </div>
                                            </div>
                                        </template>
                                    </vs-tooltip>
                                </div>
                            </div>
                        </td>
                        <td class="td">
                            <div class=" mt-[10px] mb-[10px] flex justify-center">
                                <div><md-icon :style="{ color: gold.approval_workflow ? 'green' : 'red' }">{{
                                    gold.approval_workflow ? 'check_circle' : 'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="gold.showPopup_approval">
                                        <div @click="gold.showPopup_approval = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#FFB927]">Approval
                                                    Workflow</div>
                                                <div class="flex ml-[10px]">
                                                    <vs-switch success v-model="gold.approval_workflow">
                                                        <template #off>
                                                            Off
                                                        </template>
                                                        <template #on>
                                                            On
                                                        </template>
                                                    </vs-switch>
                                                </div>
                                            </div>
                                        </template>
                                    </vs-tooltip>
                                </div>
                            </div>
                        </td>
                        <td class="platinum-last">
                            <div class=" mt-[10px] mb-[10px] flex justify-center">
                                <div><md-icon :style="{ color: paltinum.approval_workflow ? 'green' : 'red' }">{{
                                    paltinum.approval_workflow ? 'check_circle' : 'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="paltinum.showPopup_approval">
                                        <div @click="paltinum.showPopup_approval = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#64859F]">Approval
                                                    Workflow</div>
                                                <div class="flex ml-[10px]">
                                                    <vs-switch success v-model="paltinum.approval_workflow">
                                                        <template #off>
                                                            Off
                                                        </template>
                                                        <template #on>
                                                            On
                                                        </template>
                                                    </vs-switch>
                                                </div>
                                            </div>
                                        </template>
                                    </vs-tooltip>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="plan">Document Numbering</td>
                        <td class="td">
                            <div class=" mt-[10px] mb-[10px] flex justify-center">
                                <div><md-icon :style="{ color: silver.document_numbering ? 'green' : 'red' }">{{
                                    silver.document_numbering ? 'check_circle' : 'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="silver.showPopup_document">
                                        <div @click="silver.showPopup_document = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#BCC7D6]">Document
                                                    Numbering</div>
                                                <div class="flex ml-[10px]">
                                                    <vs-switch success v-model="silver.document_numbering">
                                                        <template #off>
                                                            Off
                                                        </template>
                                                        <template #on>
                                                            On
                                                        </template>
                                                    </vs-switch>
                                                </div>
                                            </div>
                                        </template>
                                    </vs-tooltip>
                                </div>
                            </div>
                        </td>
                        <td class="td">
                            <div class=" mt-[10px] mb-[10px] flex justify-center">
                                <div><md-icon :style="{ color: gold.document_numbering ? 'green' : 'red' }">{{
                                    gold.document_numbering ? 'check_circle' : 'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="gold.showPopup_document">
                                        <div @click="gold.showPopup_document = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#FFB927]">Document
                                                    Numbering</div>
                                                <div class="flex ml-[10px]">
                                                    <vs-switch success v-model="gold.document_numbering">
                                                        <template #off>
                                                            Off
                                                        </template>
                                                        <template #on>
                                                            On
                                                        </template>
                                                    </vs-switch>
                                                </div>
                                            </div>
                                        </template>
                                    </vs-tooltip>
                                </div>
                            </div>
                        </td>
                        <td class="platinum-last">
                            <div class=" mt-[10px] mb-[10px] flex justify-center">
                                <div><md-icon :style="{ color: paltinum.document_numbering ? 'green' : 'red' }">{{
                                    paltinum.document_numbering ? 'check_circle' : 'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="paltinum.showPopup_document">
                                        <div @click="paltinum.showPopup_document = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#64859F]">Document
                                                    Numbering</div>
                                                <div class="flex ml-[10px]">
                                                    <vs-switch success v-model="paltinum.document_numbering">
                                                        <template #off>
                                                            Off
                                                        </template>
                                                        <template #on>
                                                            On
                                                        </template>
                                                    </vs-switch>
                                                </div>
                                            </div>
                                        </template>
                                    </vs-tooltip>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="plan">Priority Support</td>
                        <td class="td">
                            <div class=" mt-[10px] mb-[10px] flex justify-center">
                                <div><md-icon :style="{ color: silver.priority_support ? 'green' : 'red' }">{{
                                    silver.priority_support ? 'check_circle' : 'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="silver.showPopup_priority">
                                        <div @click="silver.showPopup_priority = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#BCC7D6]">Priority
                                                    Support</div>
                                                <div class="flex ml-[10px]">
                                                    <vs-switch success v-model="silver.priority_support">
                                                        <template #off>
                                                            Off
                                                        </template>
                                                        <template #on>
                                                            On
                                                        </template>
                                                    </vs-switch>
                                                </div>
                                            </div>
                                        </template>
                                    </vs-tooltip>
                                </div>
                            </div>
                        </td>
                        <td class="td">
                            <div class=" mt-[10px] mb-[10px] flex justify-center">
                                <div><md-icon :style="{ color: gold.priority_support ? 'green' : 'red' }">{{
                                    gold.priority_support ? 'check_circle' : 'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="gold.showPopup_priority">
                                        <div @click="gold.showPopup_priority = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#FFB927]">Priority
                                                    Support</div>
                                                <div class="flex ml-[10px]">
                                                    <vs-switch success v-model="gold.priority_support">
                                                        <template #off>
                                                            Off
                                                        </template>
                                                        <template #on>
                                                            On
                                                        </template>
                                                    </vs-switch>
                                                </div>
                                            </div>
                                        </template>
                                    </vs-tooltip>
                                </div>
                            </div>
                        </td>
                        <td class="platinum-last">
                            <div class=" mt-[10px] mb-[10px] flex justify-center">
                                <div><md-icon :style="{ color: paltinum.priority_support ? 'green' : 'red' }">{{
                                    paltinum.priority_support ? 'check_circle' : 'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="paltinum.showPopup_priority">
                                        <div @click="paltinum.showPopup_priority = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#64859F]">Priority
                                                    Support</div>
                                                <div class="flex ml-[10px]">
                                                    <vs-switch success v-model="paltinum.priority_support">
                                                        <template #off>
                                                            Off
                                                        </template>
                                                        <template #on>
                                                            On
                                                        </template>
                                                    </vs-switch>
                                                </div>
                                            </div>
                                        </template>
                                    </vs-tooltip>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="plan-last ">Collaborate with up to</td>
                        <td class="plan-last text-center">
                            <div class=" mt-[10px] mb-[10px] font-bold">{{ silver.numberOfUser }} ppl</div>
                        </td>
                        <td class="plan-last text-center">
                            <div class=" mt-[10px] mb-[10px] font-bold">{{ gold.numberOfUser }} ppl</div>
                        </td>
                        <td class="text-center">
                            <div class=" mt-[10px] mb-[10px] font-bold">{{ paltinum.numberOfUser }} ppl</div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            editPack: false,
            activeTooltip1: false,
            data: [],
            silver: {
                id: '',
                price: '',
                desc: '',
                storageLimit: '',
                numberOfUser: '',
                showPopup_document: false,
                showPopup_approval: false,
                showPopup_priority: false,
                document_numbering: false,
                approval_workflow: false,
                priority_support: false
            },
            gold: {
                id: '',
                price: '',
                desc: '',
                storageLimit: '',
                numberOfUser: '',
                showPopup_document: false,
                showPopup_approval: false,
                showPopup_priority: false,
                approval_workflow: false,
                priority_support: false,
                document_numbering: false,
            },
            paltinum: {
                id: '',
                price: '',
                desc: '',
                storageLimit: '',
                numberOfUser: '',
                showPopup_document: false,
                showPopup_approval: false,
                showPopup_priority: false,
                approval_workflow: false,
                priority_support: false,
                document_numbering: false,
            }
        }

    },
    mounted() {
        this.getPlans()
    },
    methods: {
        getPlans() {
            fetch('http://27.254.144.88:1337/api' + '/packages?populate=*')
                .then(response => response.json())
                .then((resp) => {
                    const data = resp.data.sort((a, b) => a.id - b.id);
                    /////// silver ////////
                    this.silver.id = data[0].id,
                        this.silver.price = data[0].attributes.price,
                        this.silver.desc = data[0].attributes.desc,
                        this.silver.numberOfUser = data[0].attributes.numberOfUser,
                        this.silver.storageLimit = data[0].attributes.storageLimit
                    this.silver.document_numbering = data[0].attributes.documentNumbering,
                        this.silver.approval_workflow = data[0].attributes.approvalWorkflow,
                        this.silver.priority_support = data[0].attributes.prioritySupport

                    /////// paltinum ////////
                    this.paltinum.id = data[1].id,
                        this.paltinum.price = data[1].attributes.price,
                        this.paltinum.desc = data[1].attributes.desc,
                        this.paltinum.numberOfUser = data[1].attributes.numberOfUser,
                        this.paltinum.storageLimit = data[1].attributes.storageLimit
                    this.paltinum.document_numbering = data[1].attributes.documentNumbering,
                        this.paltinum.approval_workflow = data[1].attributes.approvalWorkflow,
                        this.paltinum.priority_support = data[1].attributes.prioritySupport

                    /////// paltinum ////////
                    this.gold.id = data[2].id,
                        this.gold.price = data[2].attributes.price,
                        this.gold.desc = data[2].attributes.desc,
                        this.gold.numberOfUser = data[2].attributes.numberOfUser,
                        this.gold.storageLimit = data[2].attributes.storageLimit
                    this.gold.document_numbering = data[2].attributes.documentNumbering,
                        this.gold.approval_workflow = data[2].attributes.approvalWorkflow,
                        this.gold.priority_support = data[2].attributes.prioritySupport
                })
        },
        silverPlan() {
            axios.put('http://27.254.144.88:1337/api' + '/packages/' + this.silver.id, {
                "data": {
                    "approvalWorkflow": this.silver.approval_workflow,
                    "documentNumbering": this.silver.document_numbering,
                    "prioritySupport": this.silver.priority_support,
                }

            })

        },
        goldPlan() {
            axios.put('http://27.254.144.88:1337/api' + '/packages/' + this.gold.id, {
                "data": {
                    "approvalWorkflow": this.gold.approval_workflow,
                    "documentNumbering": this.gold.document_numbering,
                    "prioritySupport": this.gold.priority_support,
                }

            })
        },
        paltinumPlan() {
            axios.put('http://27.254.144.88:1337/api' + '/packages/' + this.paltinum.id, {
                "data": {
                    "approvalWorkflow": this.paltinum.approval_workflow,
                    "documentNumbering": this.paltinum.document_numbering,
                    "prioritySupport": this.paltinum.priority_support,
                }

            })
        },
        async editPlan() {
            await this.silverPlan()
            await this.paltinumPlan()
            await this.goldPlan()
            this.editPack = false
            window.location.reload()
        }
    }
}

</script>

<style>
.td {
    border-right: 1px solid #E5EAF6;
    border-bottom: 1px solid #E5EAF6;
    text-align: center;
}

.plan {
    border-right: 1px solid #E5EAF6;
    border-bottom: 1px solid #E5EAF6;


}

.platinum-last {
    border-bottom: 1px solid #E5EAF6;
    text-align: center;

}

.plan-last {
    border-right: 1px solid #E5EAF6;
}

table {
    border-collapse: collapse;
    width: 100%;
}

th {
    height: 50px;
}
</style>