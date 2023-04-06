<template>
    <div>
        <div class="mt-[20px] ml-[20px] mr-[20px]">
            <SummaryFillter></SummaryFillter>
        </div>
        <div class="mt-[20px] flex justify-between ml-[20px] mr-[20px]">
            <CountUsers></CountUsers>
            <CountPackage></CountPackage>
        </div>
    </div>
</template>


<script>
import SummaryFillter from './components/SummaryFillter.vue';
import CountUsers from '@/views/dashboard/components/CountUsers'
import CountPackage from './components/CountPackage.vue';
export default {
    components: {
        SummaryFillter,
        CountUsers,
        CountPackage
    }
}
</script>