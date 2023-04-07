<template>
    <div class="w-[100%] h-[100%] bg-[#ffffff] rounded-[10px] flex flex-col p-[15px] ">
        <div class="flex justify-between">
            <div class="text-[14px] font-bold ">Expiring Member/Expired Member</div>
            <div><button
                    class="w-[82px] rounded-[100px]  text-center h-[26px] font-medium bg-[#79ACF9] text-[12px] text-white">View
                    More</button></div>
        </div>
        <div class="flex items-center justify-between pl-[15px]  pr-[15px]">
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
                <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
            </div>
            <div class="flex w-[180px] justify-between items-center  ">
                <div>
                    <div class="mb-[10px]">
                        <div class="text-[#2D3349] text-[20px] font-bold mb-[4px] ">10</div>
                        <div class="flex">
                            <div class="flex justify-center items-center mr-[4px]">
                                <div
                                    class="w-[auto] p-[10px] text-center h-[17px] text-[11px] text-white flex justify-center items-center rounded-[100px] bg-[#FFB51E]">
                                    Expiring</div>

                            </div>

                            <div class="center con-avatars">
                                <vs-avatar-group max="4">
                                    <vs-avatar circle danger size="30">
                                        <template #text>
                                            Fanny
                                        </template>
                                    </vs-avatar>
                                    <vs-avatar circle color="#FFB51E" size="30">
                                        <template #text>
                                            Fanny
                                        </template>
                                    </vs-avatar>
                                    <vs-avatar circle color="#0597E9" size="30">
                                        <template #text>
                                            Fanny
                                        </template>
                                    </vs-avatar>
                                    <vs-avatar circle danger size="30">
                                        <template #text>
                                            Fanny
                                        </template>
                                    </vs-avatar>
                                    <vs-avatar circle green size="30">
                                        <template #text>
                                            Fanny
                                        </template>
                                    </vs-avatar>
                                </vs-avatar-group>
                            </div>

                        </div>
                    </div>
                    <hr>
                    <div class="mt-[10px]">
                        <div class="text-[#2D3349] text-[20px] font-bold mb-[4px] ">10</div>
                        <div class="flex">
                            <div class="flex justify-center items-center mr-[4px]">
                                <div
                                    class="w-[auto] p-[10px] text-center h-[17px] text-[11px] text-white flex justify-center items-center rounded-[100px] bg-[#F61B21]">
                                    Expird</div>
                            </div>
                            <div class="center con-avatars">
                                <vs-avatar-group max="4">
                                    <vs-avatar circle color="#0597E9" size="30">
                                        <template #text>
                                            A
                                        </template>
                                    </vs-avatar>
                                    <vs-avatar circle color="#FFB51E" size="30">
                                        <template #text>
                                            B
                                        </template>
                                    </vs-avatar>
                                    <vs-avatar circle color="#0597E9" size="30">
                                        <template #text>
                                            C
                                        </template>
                                    </vs-avatar>
                                    <vs-avatar circle danger size="30">
                                        <template #text>
                                            D
                                        </template>
                                    </vs-avatar>
                                    <vs-avatar circle green size="30">
                                        <template #text>
                                            E
                                        </template>
                                    </vs-avatar>
                                    <vs-avatar circle green size="30">
                                        <template #text>
                                            E
                                        </template>
                                    </vs-avatar>
                                    <vs-avatar circle green size="30">
                                        <template #text>
                                            E
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
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: ["#F61B21", "#FFB51E",],
                        data: [10, 5]
                    }
                ]
            }
        };

    }
}

</script>
   