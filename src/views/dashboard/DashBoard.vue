<template>
    <div>
        <div class="m-[10px]">
            <SummaryFillter></SummaryFillter>
        </div>
        <div class="flex justify-between">
            <div class="w-[100%] m-[10px]"><CountUsers></CountUsers></div>
            <div class="w-[100%] m-[10px]"><CountPackage></CountPackage></div>
            <div class="w-[100%] m-[10px]"><Member></Member></div>
        </div>
        <div class="flex justify-between">
            <div class="w-[100%] m-[10px]"><Remaining></Remaining></div>
            <div class="w-[100%] m-[10px]"><CountOrder></CountOrder></div>
        </div>
    </div>
</template>


<script>
import SummaryFillter from './components/SummaryFillter.vue';
import CountUsers from '@/views/dashboard/components/CountUsers'
import CountPackage from './components/CountPackage.vue';
import Member from './components/Member.vue';
import Remaining from '@/views/dashboard/components/Remaining'
import CountOrder from './components/CountOrder.vue';
export default {
    components: {
        SummaryFillter,
        CountUsers,
        CountPackage,
        Member,
        Remaining,
        CountOrder
    }
}
</script>