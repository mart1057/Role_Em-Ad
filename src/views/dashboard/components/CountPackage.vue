<template></template><template>
    <div class="w-[100%] h-[100%] bg-white rounded-[10px] flex flex-col p-[15px] ">
        <div class="flex justify-between">
            <div class="text-[14px] font-bold ">Number of Company by Package</div>
            <div><button
                    class="w-[82px] rounded-[100px]  text-center h-[26px] font-medium bg-[#79ACF9] text-[12px] text-white">View
                    More</button></div>
        </div>
        <div class="flex items-center justify-between pl-[15px]  pr-[15px]">
            <div class="w-[49px]  text-right">
                <div class="flex items-center">
                    <div class="w-[4px] h-[10px] bg-[#79ACF9]  rounded-[100px]"></div><span class="text-[10px] ml-[4px]">Free trial</span>
                </div>
                <div class="flex items-center">
                    <div class="w-[4px] h-[10px] bg-[#BCC7D6]  rounded-[100px]"></div><span class="text-[10px] ml-[4px]">Silver</span>
                </div>
                <div class="flex items-center">
                    <div class="w-[4px] h-[10px] bg-[#FFB927]  rounded-[100px]"></div><span class="text-[10px] ml-[4px]">Gold</span>
                </div>
                <div class="flex items-center">
                    <div class="w-[4px] h-[10px] bg-[#FFB927]  rounded-[100px]"></div><span class="text-[10px] ml-[4px]">Platinum</span>
                </div>
            </div>
            <div class="w-[14vw] flex justify-center items-center  ml-[10px] h-[9vw]">
                <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
            </div>
            <div class="flex w-[180px] justify-between items-center  ">
                <div>
                    <div class="mb-[10px]">
                        <div class="text-[#2D3349] text-[20px] font-bold mb-[4px] ">10</div>
                        <div class="w-[auto] p-[10px] text-center h-[17px] text-[11px] text-white flex justify-center items-center rounded-[100px] bg-[#79ACF9]">FreeTrial</div>
                    </div>
                    <div>
                        <div class="text-[#2D3349] text-[20px] font-bold mb-[4px] ">15</div>
                        <div class="w-[auto] p-[10px] text-center h-[17px] text-[11px] text-white flex justify-center items-center rounded-[100px] bg-[#FFB927]">Gold</div>
                    </div>
                </div>
                <div >
                    <div class="mb-[10px]">
                        <div class="text-[#2D3349] text-[20px] font-bold mb-[4px]">10</div>
                        <div class="w-[auto] p-[10px] text-center h-[17px] text-[11px] text-white flex justify-center items-center rounded-[100px] bg-[#BCC7D6]">Silver</div>
                    </div>
                    <div>
                        <div class="text-[#2D3349] text-[20px] font-bold  mb-[4px]">5</div>
                        <div class="w-[auto] p-[10px] text-center h-[17px] text-[11px] text-white flex justify-center items-center rounded-[100px] bg-[#64859F]">Platinum</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import PieChart from "../hook/PieChart.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
export default {
    components: {
        PieChart
    },
    data() {
        return {
            chartOptions: {
                hoverBorderWidth: 1
            },
            chartData: {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 1,
                // labels: ["Green", "Red", "Blue"],
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: ["#79ACF9","#BCC7D6","#FFB927","#64859F"],
                        data: [10, 10, 15, 5]
                    }
                ]
            }
        };

    }
}

</script>
   