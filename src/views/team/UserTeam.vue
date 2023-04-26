<template>
    <div>
        <div class="m-[10px]">
            <UserFilter></UserFilter>
        </div>
        <div class="m-[10px]">
            <MemberCard></MemberCard>
        </div>
    </div>
</template>
<script>
import UserFilter from './components/UserFilter.vue';
import MemberCard from './components/MemberCard.vue';
export default {
    components: {
        UserFilter,
        MemberCard
    }
}
</script>