<template>
    <div>
        <div class="w-[100%] h-[55px] bg-white rounded-[10px] flex items-center justify-between">
            <div class="text-[14px] font-bold ml-[20px]">Summary Monthly/Weekly</div>
            <div class="flex mr-[20px]">
                <div class="mr-[10px]">
                    <vs-select  v-model="selectMonthly">
                        <vs-option label="January" value=1>
                            January
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
                <vs-select v-model="selectWeek">
                    <vs-option label="Week1" value="1">
                        Week1
                    </vs-option>
                    <vs-option label="Week 2" value="2">
                        Week 2
                    </vs-option>
                    <vs-option label="Week3" value="3">
                        Week3
                    </vs-option>
                </vs-select>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            selectMonthly:1,
            selectWeek: '1'
        }

    }
}
</script>
<style scoped>
.vs-select__input{
    width: 120px !important;
    background-color: #3C7CFC !important;
    color: white !important;
}
.vs-icon-arrow:before,.vs-icon-arrow:after{
    background-color: white !important;

}
</style>