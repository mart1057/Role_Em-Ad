<template>
    <div class="h-[100%] bg-white m-[10px] rounded-[10px]">
        <div class="p-[20px]">
            <div class="text-[20px] font-bold">Package Editor</div>
            <div class="flex justify-end" v-if="!editPack"><vs-button @click="editPack = true">Edit</vs-button></div>
            <div class="flex justify-end" v-if="editPack"><vs-button border
                    @click="editPack = false">Cancle</vs-button><vs-button @click="editPack = false">Save</vs-button></div>


            <div class="mt-[40px]">
                <table>
                    <tr>
                        <th class="plan text-[#6B7490]">Plan</th>
                        <th class="td">
                            <div class="mb-[10px]">
                                <div class="text-[20px] font-medium text-[#BCC7D6] ">Silver</div>
                                <div class="text-[12px] text-[#2D3349]">(Small business)</div>
                            </div>
                        </th>
                        <th class="td">
                            <div class="mb-[10px]">
                                <div class="text-[20px] font-medium text-[#FFB927]">Gold</div>
                                <div class="text-[12px] text-[#2D3349]">(corporate)</div>
                            </div>
                        </th>
                        <th class="platinum-last">
                            <div class="mb-[10px]">
                                <div class="text-[20px] font-medium text-[#64859F]">Paltinum</div>
                                <div class="text-[12px] text-[#2D3349]">(enterprise)</div>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <td class="plan">Price</td>
                        <td class="td">
                            <div>
                                <div class="mt-[10px]"><span class="font-bold">690</span> THB/Month</div>
                                <div class="mb-[10px]"><span class="font-bold">7,425</span> THB/Year</div>
                            </div>
                        </td>
                        <td class="td">
                            <div>
                                <div class="mt-[10px]"><span class="font-bold">690</span> THB/Month</div>
                                <div class="mb-[10px]"><span class="font-bold">7,425</span> THB/Year</div>
                            </div>
                        </td>
                        <td class="platinum-last">
                            <div>
                                <div class="mt-[10px]"><span class="font-bold">690</span> THB/Month</div>
                                <div class="mb-[10px]"><span class="font-bold">7,425</span> THB/Year</div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td class="plan">Storage</td>
                        <td class="td">
                            <div class=" mt-[10px] mb-[10px] font-bold">500 GB</div>
                        </td>
                        <td class="td">
                            <div class=" mt-[10px] mb-[10px] font-bold"> 1 TB</div>
                        </td>
                        <td class="platinum-last">
                            <div class=" mt-[10px] mb-[10px] font-bold">2 TB</div>
                        </td>
                    </tr>
                    <tr>
                        <td class="plan">Approval Workflow</td>
                        <td class="td">
                            <div class=" mt-[10px] mb-[10px] flex justify-center">
                                <div><md-icon :style="{color: silver.approval_workflow ? 'green':'red'}">{{ silver.approval_workflow ? 'check_circle':'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="silver.showPopup_approval">
                                        <div @click="silver.showPopup_approval = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#BCC7D6]">Approval Workflow</div> 
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
                                <div><md-icon :style="{color: gold.approval_workflow ? 'green':'red'}">{{ gold.approval_workflow ? 'check_circle':'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="gold.showPopup_approval">
                                        <div @click="gold.showPopup_approval = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#FFB927]">Approval Workflow</div> 
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
                                <div><md-icon :style="{color: paltinum.approval_workflow ? 'green':'red'}">{{ paltinum.approval_workflow ? 'check_circle':'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="paltinum.showPopup_approval">
                                        <div @click="paltinum.showPopup_approval = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#64859F]">Approval Workflow</div> 
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
                                <div><md-icon :style="{color: silver.document_numbering ? 'green':'red'}">{{ silver.document_numbering ? 'check_circle':'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="silver.showPopup_document">
                                        <div @click="silver.showPopup_document = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#BCC7D6]">Document Numbering</div> 
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
                                <div><md-icon :style="{color: gold.document_numbering ? 'green':'red'}">{{ gold.document_numbering ? 'check_circle':'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="gold.showPopup_document">
                                        <div @click="gold.showPopup_document = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#FFB927]">Document Numbering</div> 
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
                                <div><md-icon :style="{color: paltinum.document_numbering ? 'green':'red'}">{{ paltinum.document_numbering ? 'check_circle':'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="paltinum.showPopup_document">
                                        <div @click="paltinum.showPopup_document = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#64859F]">Document Numbering</div> 
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
                                <div><md-icon :style="{color: silver.priority_support ? 'green':'red'}">{{ silver.priority_support ? 'check_circle':'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="silver.showPopup_priority">
                                        <div @click="silver.showPopup_priority = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#BCC7D6]">Priority Support</div> 
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
                                <div><md-icon :style="{color: gold.priority_support ? 'green':'red'}">{{ gold.priority_support ? 'check_circle':'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="gold.showPopup_priority">
                                        <div @click="gold.showPopup_priority = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#FFB927]">Priority Support</div> 
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
                                <div><md-icon :style="{color: paltinum.priority_support ? 'green':'red'}">{{ paltinum.priority_support ? 'check_circle':'cancel' }}</md-icon></div>
                                <div v-if="editPack">
                                    <vs-tooltip bottom shadow not-hover v-model="paltinum.showPopup_priority">
                                        <div @click="paltinum.showPopup_priority = true"><md-icon
                                                class="cursor-pointer">expand_more</md-icon></div>
                                        <template #tooltip>
                                            <div class="w-[auto] flex">
                                                <div class="flex justify-center items-center text-[#64859F]">Priority Support</div> 
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
                            <div class=" mt-[10px] mb-[10px] font-bold">20 ppl</div>
                        </td>
                        <td class="plan-last text-center">
                            <div class=" mt-[10px] mb-[10px] font-bold">50 ppl</div>
                        </td>
                        <td class="text-center">
                            <div class=" mt-[10px] mb-[10px] font-bold">200 ppl</div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            editPack: false,
            activeTooltip1: false,
            silver: {
                showPopup_document:false,
                showPopup_approval:false,
                showPopup_priority:false,

                document_numbering: false,
                approval_workflow: false,
                priority_support: false
            },
            gold: {
                showPopup_document:false,
                showPopup_approval:false,
                showPopup_priority:false,

                approval_workflow: false,
                priority_support: false,
                document_numbering: false,
            },
            paltinum: {
                showPopup_document:false,
                showPopup_approval:false,
                showPopup_priority:false,

                approval_workflow: false,
                priority_support: false,
                document_numbering: false,
            }
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