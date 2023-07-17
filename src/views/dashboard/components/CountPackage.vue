<template>
    <div class="w-[100%] h-[100%] bg-white rounded-[10px] flex flex-col p-[15px] ">
        <div class="flex justify-between">
            <div class="text-[14px] font-bold ">Number of Company by Package</div>
            <div><button
                    class="w-[82px] rounded-[100px]  text-center h-[26px] font-medium bg-[#79ACF9] text-[12px] text-white">View
                    More</button></div>
        </div>
        <div class="flex  pl-[15px] pr-[15px] h-[100%] items-center">
            <div class="w-[49px]  text-right">
                <div class="flex items-center">
                    <div class="w-[4px] h-[10px] bg-[#79ACF9]  rounded-[100px]"></div><span
                        class="text-[10px] ml-[4px]">Free</span>
                </div>
                <div class="flex items-center">
                    <div class="w-[4px] h-[10px] bg-[#BCC7D6]  rounded-[100px]"></div><span
                        class="text-[10px] ml-[4px]">Silver</span>
                </div>
                <div class="flex items-center">
                    <div class="w-[4px] h-[10px] bg-[#FFB927]  rounded-[100px]"></div><span
                        class="text-[10px] ml-[4px]">Gold</span>
                </div>
                <div class="flex items-center">
                    <div class="w-[4px] h-[10px] bg-[#64859F]  rounded-[100px]"></div><span
                        class="text-[10px] ml-[4px]">Platinum</span>
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
                        <div class="text-[#2D3349] text-[20px] font-bold mb-[4px] ">0</div>
                        <div
                            class="w-[auto] p-[10px] text-center h-[17px] text-[11px] text-white flex justify-center items-center rounded-[100px] bg-[#79ACF9]">
                            Free</div>
                    </div>
                    <div>
                        <div class="text-[#2D3349] text-[20px] font-bold mb-[4px] ">{{ gold }}</div>
                        <div
                            class="w-[auto] p-[10px] text-center h-[17px] text-[11px] text-white flex justify-center items-center rounded-[100px] bg-[#FFB927]">
                            Gold</div>
                    </div>
                </div>
                <div>
                    <div class="mb-[10px]">
                        <div class="text-[#2D3349] text-[20px] font-bold mb-[4px]">{{ silver }}</div>
                        <div
                            class="w-[auto] p-[10px] text-center h-[17px] text-[11px] text-white flex justify-center items-center rounded-[100px] bg-[#BCC7D6]">
                            Silver</div>
                    </div>
                    <div>
                        <div class="text-[#2D3349] text-[20px] font-bold  mb-[4px]">{{ platinum }}</div>
                        <div
                            class="w-[auto] p-[10px] text-center h-[17px] text-[11px] text-white flex justify-center items-center rounded-[100px] bg-[#64859F]">
                            Platinum</div>
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
            data: [0,0,0,0],
            gold: 0,
            silver: 0,
            platinum: 0
        };
    },
    mounted() {
        this.getNumber()
        setTimeout(() => {
            this.data = [0,parseInt(this.silver),parseInt(this.gold),parseInt(this.platinum)]
        }, 500)
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
                labels: ["Free trial", "Silver", "Gold", "Platinum"],
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
                colors: ["#79ACF9", "#BCC7D6", "#FFB927", "#64859F"]
                // noData: {
                //     text: this.loading ? "Loading..." : "No Data",
                // },
            };
        },
    },
    methods: {
        getNumber() {
            // api ยังไม่ส่งรูปมา
            fetch('http://27.254.144.88:1337/api/users?filters[package][packageName][$eq]=PLATINUM&populate=*')
                .then(response => response.json())
                .then((resp) => {
                    this.platinum = resp.length;
                })
            fetch('http://27.254.144.88:1337/api/users?filters[package][packageName][$eq]=SILVER&populate=*')
                .then(response => response.json())
                .then((resp) => {
                    this.silver = resp.length;
                })
            fetch('http://27.254.144.88:1337/api/users?filters[package][packageName][$eq]=GOLD&populate=*')
                .then(response => response.json())
                .then((resp) => {
                    this.gold = resp.length;
                })
        },
    }
}

</script>
   