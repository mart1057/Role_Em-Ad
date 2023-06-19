<template>
    <div>
        <!-- <div class="flex justify-between">
            <div class="w-[100%] m-[10px]"><CountUsers></CountUsers></div>
            <div class="w-[100%] m-[10px]"><Remaining></Remaining></div>
            <div class="w-[50%] m-[10px]"><DateTillExpired></DateTillExpired></div>
        </div> -->
        <div class="flex justify-between">
            <div class="w-[80%] m-[10px]"><ApprovDoc></ApprovDoc></div>
            <div class="w-[100%] m-[10px]"><DocumentTracker></DocumentTracker></div>
        </div>
        <div class="flex justify-between">
            <div class="w-[100%] m-[10px]"><OutstandingDoc></OutstandingDoc></div>
            <div class="w-[30%] m-[10px]"><Notification ></Notification></div>
        </div>
    </div>
</template>


<script>
import SummaryFillter from './components/SummaryFillter.vue';
import CountUsers from '@/views/dashEmployee/components/CountUsers'
import CountPackage from './components/CountPackage.vue';
import Member from './components/Member.vue';
import Remaining from '@/views/dashEmployee/components/Remaining'
import CountOrder from './components/CountOrder.vue';
import DateTillExpired from '@/views/dashEmployee/components/DateTillExpired.vue'
import ApprovDoc from './components/ApprovDoc.vue';
import DocumentTracker from './components/DocumentTracker.vue';
import OutstandingDoc from '@/views/dashEmployee/components/OutstandingDoc'
import Notification from './components/Notification.vue';
export default {
    components: {
        SummaryFillter,
        CountUsers,
        CountPackage,
        Member,
        Remaining,
        CountOrder,
        DateTillExpired,
        ApprovDoc,
        DocumentTracker,
        OutstandingDoc,
        Notification 
    }
}
</script>