<template>
    <div class="w-[100%] h-[251px] bg-white rounded-[10px]">
        <div class="flex justify-between p-[15px]">
            <div class="w-[50%]">
                <div class="text-[14px] font-bold ">Remaining System Capacity</div>
                <div class="mt-[10px]"> 
                    <vs-select v-model="value">
                        <vs-option label="January" value=1>
                            <div class="flex justify-center items-center">
                                <div><img class="w-[20px] h-[20px] rounded-[50%] " src="https://www.everysteph.com/wp-content/uploads/2022/12/Hulk-IMG-Worlds-of-Adventure.jpeg.webp"></div>
                                <div class="text-center ml-[10px]">January</div>
                            </div>
                        </vs-option>
                        <vs-option label="February" value=2>
                            February
                        </vs-option>
                        <vs-option label="March" value=3>
                            March
                        </vs-option>
                        <vs-option label="April" value=4>
                            April
                        </vs-option>
                        <vs-option label="May" value=5>
                            May
                        </vs-option>
                        <vs-option label="June" value=6>
                            June
                        </vs-option>
                        <vs-option label="July" value="7">
                            July
                        </vs-option>
                        <vs-option label="August" value=8>
                            August
                        </vs-option>
                        <vs-option label="September" value=9>
                            September
                        </vs-option>
                        <vs-option label="October" value=10>
                            October
                        </vs-option>
                        <vs-option label="November" value=11>
                            November
                        </vs-option>
                        <vs-option label="December" value=12>
                            December
                        </vs-option>
                    </vs-select>
                </div>
                <div class="mt-[20px]">
                    <div class="flex justify-between mb-[10px] ">
                        <div class="text-[12px] text-[#6B7490] font-bold">Plan</div>
                        <div class="text-[24px] text-[#FFB927] font-bold">Gold</div>
                    </div>
                    <hr>
                    <div class="flex justify-between mb-[10px] mt-[10px]">
                        <div class="text-[12px] text-[#6B7490] font-bold">Used</div>
                        <div class="text-[24px] text-[#6B7490] font-bold">400 GB</div>
                    </div>
                    <hr>
                    <div class="flex justify-between  mb-[10px] mt-[10px] ">
                        <div class="text-[12px] text-[#6B7490] font-bold">Available</div>
                        <div class="text-[28px] text-[#4FBD9E] font-bold">600 GB</div>
                    </div>
                </div>
            </div>
            <div class="w-[250px] h-[200px]">
                <pie-chart :data="chartData" :options="chartOptions"></pie-chart>
            </div>
        </div>
    </div>
</template>
<script>
import PieChart from "../hook/PieChart.js";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)
export default {
    components:{
        PieChart
    },
    data() {
        return {
            value: '',
            chartOptions: {
                hoverBorderWidth: 1
            },
            chartData: {
                hoverBackgroundColor: "red",
                hoverBorderWidth: 1,
                datasets: [
                    {
                        label: "Data One",
                        backgroundColor: ["#6B7490","#4FBD9E"],
                        labels:'fefe',
                        data: [400,600]
                    }
                ]
            }
        }
    }
}
</script>
<style scoped>
/* .vs-select__input{
    border: 2px solid red !important;
    background-color: black !important;

} */

</style>