<template>
    <div class="w-[100%] h-[100%] bg-[#ffffff] rounded-[10px] flex flex-col p-[15px]">
        <div class="flex justify-between">
            <div class="text-[14px] font-bold ">Expiring Member/Expired Member</div>
            <div><button
                    class="w-[82px] rounded-[100px]  text-center h-[26px] font-medium bg-[#79ACF9] text-[12px] text-white">View
                    More</button></div>
        </div>
        <div class="flex  pl-[15px]  pr-[15px] h-[100%] items-center">
            <div class="w-[49px]">
                <div class="flex w-[80px]">
                    <div class="w-[4px] h-[10px] mt-[5px] bg-[#FFB51E]   rounded-[100px]"></div><span
                        class="text-[10px] ml-[4px] ">Expiring
                        Member</span>
                </div>
                <div class="flex w-[80px]">
                    <div class="w-[4px] h-[10px] mt-[5px] bg-[#F61B21]  rounded-[100px]"></div><span
                        class="text-[10px] ml-[4px] ">Expired
                        Member</span>
                </div>
            </div>
            <div class="w-[14vw] flex justify-center items-center  ml-[10px] h-[9vw]">
                <div class=" flex justify-center items-center ">
                    <apexchart :options="options" :series="data"></apexchart>
                </div>
            </div>
            <div class="flex w-[180px] justify-between items-center  ">
                <div>
                    <div class="mb-[10px]">
                        <div class="text-[#2D3349] text-[20px] font-bold mb-[4px] ">{{ dataTrue.length }}</div>
                        <div class="flex">
                            <div class="flex justify-center items-center mr-[4px]">
                                <div
                                    class="w-[auto] p-[10px] text-center h-[17px] text-[11px] text-white flex justify-center items-center rounded-[100px] bg-[#FFB51E]">
                                    Expiring</div>

                            </div>

                            <div class="center con-avatars">
                                <vs-avatar-group max="6">
                                    <vs-avatar circle color="#0597E9" size="30" v-for="data in dataTrue">
                                        <template #text>
                                            {{ data.firstName }}
                                        </template>
                                    </vs-avatar>
                                </vs-avatar-group>
                            </div>

                        </div>
                    </div>
                    <hr>
                    <div class="mt-[10px]">
                        <div class="text-[#2D3349] text-[20px] font-bold mb-[4px] ">{{ dataFalse.length }}</div>
                        <div class="flex">
                            <div class="flex justify-center items-center mr-[4px]">
                                <div
                                    class="w-[auto] p-[10px] text-center h-[17px] text-[11px] text-white flex justify-center items-center rounded-[100px] bg-[#F61B21]">
                                    Expird</div>
                            </div>
                            <div class="center con-avatars">
                                <vs-avatar-group max="6">
                                    <vs-avatar circle color="#0597E9" size="30" v-for="data in dataFalse">
                                        <template #text>
                                            {{ data.firstName }}
                                        </template>
                                    </vs-avatar>
                                </vs-avatar-group>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import VueApexCharts from "vue-apexcharts";
export default {
    components: {
        apexchart: VueApexCharts,
    },
    data() {
        return {
            data: [10, 5],
            dataTrue:[],
            dataFalse:[],
            value: 0,

        };

    },
    mounted() {
        this.getNumber()
    },
    computed: {
        options() {
            return {
                chart: {
                    type: "donut",
                },
                dataLabels: {
                    enabled: false,
                },
                legend: {
                    show: false,
                },
                labels: ["Expiring", "Expired"],
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                total: {
                                    show: true,
                                    label: "Total",
                                    fontSize: "14px",
                                    fontWeight: "bold",
                                    color: "#6B7490",
                                },
                            },
                        },
                    },
                },
                colors: ["#F61B21", "#FFB51E"]

                // noData: {
                //     text: this.loading ? "Loading..." : "No Data",
                // },
            };
        },
    },
    methods: {
        getNumber() {
            // api ยังไม่ส่งรูปมา
            fetch('http://27.254.144.88:1337/api/users?filters[expStatus][$eq]=false')
                .then(response => response.json())
                .then((resp) => {
                    this.dataFalse = resp
                })
            fetch('http://27.254.144.88:1337/api/users?filters[expStatus][$eq]=true')
                .then(response => response.json())
                .then((resp) => {
                    console.log(resp);
                    this.dataTrue = resp
                }).then(() => {
                    this.data = [this.dataFalse.length,this.dataTrue.length]
                })

            console.log(this.data);
        },
    }
}

</script>
   