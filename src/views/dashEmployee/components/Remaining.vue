<template>
    <div class="w-[100%] h-[251px] bg-white rounded-[10px]">
        <div class="flex justify-between p-[15px]">
            <div class="w-[50%]">
                <div class="text-[14px] font-bold ">Remaining System Capacity</div>
                <div class="mt-[10px]">
                </div>
                <div class="mt-[20px]">
                    <div class="flex justify-between mb-[-10px] ">
                        <div class="text-[12px] text-[#6B7490] flex justify-center items-center font-bold">Plan</div>
                        <div class="text-[24px] text-[#FFB927] font-bold">Gold</div>
                    </div>
                    <hr>
                    <div class="flex justify-between mb-[-10px] mt-[-10px]">
                        <div class="text-[12px] text-[#6B7490] flex justify-center items-center font-bold">Used</div>
                        <div class="text-[24px] text-[#6B7490] font-bold">400 GB</div>
                    </div>
                    <hr>
                    <div class="flex justify-between  mb-[-10px] mt-[-10px] ">
                        <div class="text-[12px] text-[#6B7490] flex justify-center items-center font-bold">Available</div>
                        <div class="text-[28px] text-[#4FBD9E] font-bold">600 GB</div>
                    </div>
                </div>
            </div>
            <div class="w-[300px] h-[200px]">
                <apexchart :options="options" :series="data"></apexchart>
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
            data: [400, 600],
            value: '',
        }
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
                labels:["Used","Available"],
                plotOptions: {
                    pie: {
                        donut: {
                            labels: {
                                show: true,
                                total: {
                                    show: true,
                                    label: "Total",
                                    fontSize: "22px",
                                    fontWeight: "bold",
                                    color: "#6B7490",
                                },
                            },
                        },
                    },
                },
                colors: [
                    "#6B7490",
                    "#4FBD9E"
                ],
                // noData: {
                //     text: this.loading ? "Loading..." : "No Data",
                // },
            };
        },
    },
}
</script>

<style>
.select-opt {
    border: solid 1px #E5EAF6;

}
</style>
