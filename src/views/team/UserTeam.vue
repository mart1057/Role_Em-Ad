<template>
    <div>
        <div class="m-[10px]">
            <UserFilter @changeTab="onClickChild"></UserFilter>
        </div>
        <div class="m-[10px]" v-if="this.checkTab">
            <MemberCard></MemberCard>
        </div>
        <div class="m-[10px]" v-else>
            <OrganizaCard></OrganizaCard>
        </div>
    </div>
</template>
<script>
import UserFilter from './components/UserFilter.vue';
import MemberCard from './components/MemberCard.vue';
import OrganizaCard from './components/OrganizaCard.vue';
export default {
    components: {
        UserFilter,
        MemberCard,
        OrganizaCard
    },
    data(){
        return{
            checkTab:true,
        }
    },
    methods:{
        onClickChild (value) {
          this.checkTab = value
      },
    }
}
</script>
<style>


</style>