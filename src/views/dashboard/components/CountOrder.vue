<template>
    <div class="w-[100%] h-[251px] bg-white rounded-[10px]">
        <div class="flex p-[20px]">
            <div class="w-[auto] bg-[#F3F6F9] rounded-[50px]">
                <button class="w-[auto] h-[30px] rounded-[50px]"
                    :style="{ background: checkTypeOrder == false ? '#3C7CFC' : '#F3F6F9', color: checkTypeOrder == false ? '#ffffff' : '#2D3349' }"
                    @click="checkTypeOrder = !checkTypeOrder">
                    <span class="m-[10px]">Order Funnel</span>
                </button>
                <button class="w-[auto] h-[30px] rounded-[50px] "
                    :style="{ background: checkTypeOrder == true ? '#3C7CFC' : '#F3F6F9', color: checkTypeOrder == true ? '#ffffff' : '#2D3349' }"
                    @click="checkTypeOrder = !checkTypeOrder">
                    <span class="m-[10px]">Pending Order</span>
                </button>
            </div>      
        </div>
        <div class="pl-[20px] pr-[20px] mt-[-10px]" v-if="!checkTypeOrder">
            <vs-table>
                <template #thead>
                    <vs-tr>
                        <vs-th>
                            Name
                        </vs-th>
                        <vs-th>
                            Plan
                        </vs-th>
                        <vs-th>
                            Paid Date
                        </vs-th>
                        <vs-th>
                            Order Funnel
                        </vs-th>
                        <vs-th>
                            Status
                        </vs-th>
                    </vs-tr>
                </template>
                <template #tbody>
                    <vs-tr :key="i" v-for="(tr, i) in $vs.getPage(dataFunnel, page, max)">
                        <vs-td>
                            {{ tr.name }}
                        </vs-td>
                        <vs-td>
                            <div :style="{ background: tr.plan == 'Gold' ? '#FFB927' : tr.plan == 'Silver' ? '#BCC7D6' : tr.plan == 'Platinum' ? '#64859F' : '' }"
                                class="w-[auto] text-white text-center flex items-center justify-center rounded-[20px]">
                                {{ tr.plan }}
                            </div>
                        </vs-td>
                        <vs-td>
                            {{ tr.paid }} {{ tr.paidtime }}
                        </vs-td>
                        <vs-td>
                            {{ tr.order_funnel }}
                        </vs-td>
                        <vs-td>
                            <div :style="{ background: tr.status == 'Paid' ? '#2CD67A' : '#32C4F2' }"
                                class="w-[auto] h-[22px] text-white text-center flex items-center justify-center rounded-[20px]">
                                {{ tr.status }}
                            </div>
                        </vs-td>
                    </vs-tr>
                </template>

            </vs-table>
            <div class="center con-pagination mt-[3px] " v-if="dataFunnel.length != 0">
                <vs-pagination buttons-dotted v-model="page" :length="3" />
            </div>
        </div>
        <div class="pl-[20px] pr-[20px] mt-[-10px]" v-else>
            <vs-table>
                <template #thead>
                    <vs-tr>
                        <vs-th>
                            Name
                        </vs-th>
                        <vs-th>
                            Plan
                        </vs-th>
                        <vs-th>
                            Paid Date
                        </vs-th>
                        <vs-th>
                            Order Funnel
                        </vs-th>
                        <vs-th>
                            Status
                        </vs-th>
                    </vs-tr>
                </template>
                <template #tbody>
                    <vs-tr :key="i" v-for="(tr, i) in $vs.getPage(dataPending, page, max)">
                        <vs-td>
                            {{ tr.name }}
                        </vs-td>
                        <vs-td>
                            <div :style="{ background: tr.plan == 'Gold' ? '#FFB927' : tr.plan == 'Silver' ? '#BCC7D6' : tr.plan == 'Platinum' ? '#64859F' : '' }"
                                class="w-[auto] text-white text-center flex items-center justify-center rounded-[20px]">
                                {{ tr.plan }}
                            </div>
                        </vs-td>
                        <vs-td>
                            {{ tr.paid }} {{ tr.paidtime }}
                        </vs-td>
                        <vs-td>
                            {{ tr.order_funnel }}
                        </vs-td>
                        <vs-td>
                            <div :style="{ background: tr.status == 'Paid' ? '#2CD67A' : '#32C4F2' }"
                                class="w-[auto] h-[22px] text-white text-center flex items-center justify-center rounded-[20px]">
                                {{ tr.status }}
                            </div>
                        </vs-td>
                    </vs-tr>
                </template>

            </vs-table>
            <div class="center con-pagination mt-[3px] " v-if="dataPending.length != 0">
                <vs-pagination buttons-dotted v-model="page" :length="3" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checkTypeOrder: false,
            page: 1,
            max: 3,
            dataFunnel: [
                {
                    id: 1,
                    name: "Leanne Graham",
                    plan: 'Gold',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Paid'
                },
                {
                    id: 2,
                    name: "Leanne Graham",
                    plan: 'Platinum',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Pending'
                },
                {
                    id: 3,
                    name: "Leanne Graham",
                    plan: 'Silver',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Paid'
                },
                {
                    id: 4,
                    name: "Leanne Graham",
                    plan: 'Gold',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Paid'
                },
                {
                    id: 5,
                    name: "Leanne Graham",
                    plan: 'Gold',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Paid'
                },
                {
                    id: 6,
                    name: "Leanne Graham",
                    plan: 'Gold',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Paid'
                },
                {
                    id: 7,
                    name: "Leanne Graham",
                    plan: 'Silver',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Test'
                },
                {
                    id: 8,
                    name: "Leanne Graham",
                    plan: 'Gold',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Paid'
                },
                {
                    id: 9,
                    name: "Leanne Graham",
                    plan: 'Silver',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Test'
                },
            ],
            dataPending: [
                {
                    id: 1,
                    name: "Nira Kower",
                    plan: 'Silver',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Pending'
                },
                {
                    id: 2,
                    name: "Nira Kower",
                    plan: 'Platinum',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Paid'
                },
                {
                    id: 3,
                    name: "Nira Kower",
                    plan: 'Silver',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Pending'
                },
                {
                    id: 4,
                    name: "Nira Kower",
                    plan: 'Gold',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Paid'
                },
                {
                    id: 5,
                    name: "Nira Kower",
                    plan: 'Gold',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Paid'
                },
                {
                    id: 6,
                    name: "Nira Kower",
                    plan: 'Gold',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Paid'
                },
                {
                    id: 7,
                    name: "Nira Kower",
                    plan: 'Silver',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Test'
                },
                {
                    id: 8,
                    name: "Nira Kower",
                    plan: 'Gold',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Paid'
                },
                {
                    id: 9,
                    name: "Nira Kower",
                    plan: 'Silver',
                    paid: "8/01/2023",
                    paidtime: "12:45",
                    order_funnel: "hildegard.org",
                    status: 'Test'
                },
            ]
        }
    },
    methods: {
        test() {
            !this.a
            console.log(this.a);
        },

    }
}
</script>

<style></style>