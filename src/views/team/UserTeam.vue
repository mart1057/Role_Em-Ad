<template>
    <div>
        <div class="m-[10px]">
            <UserFilter @changeTab="onClickChild" @filterUser="getTeam"></UserFilter>
        </div>
        <div class="m-[10px]" v-if="this.checkTab">
            <div v-if="$store.state.role_perrmission.userView">
                <MemberCard :team="team"></MemberCard>
            </div>

        </div>
        <div class="m-[10px]" v-else>
            <div v-if="$store.state.role_perrmission.companyView">
                <OrganizaCard></OrganizaCard>
            </div>
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
    data() {
        return {
            checkTab: true,
            team: [],
        }
    },
    mounted() {
        // this.getTeam()
    },
    methods: {
        onClickChild(value) {
            this.checkTab = value
        },
        getTeam(role,team,seaech) {
            this.team = []
            fetch('http://27.254.144.88:1337/api' + '/users?populate=*&filters[organization][id][$eq]=' + this.$store.state.userDetail.organization.id
                + '&filters[org_role][id][$containsi]=' + role + '&filters[team][id][$containsi]=' + team+'&filters[firstName][$containsi]='+seaech)
                .then(response => response.json())
                .then((resp) => {
                    this.team = resp
                })
        },
    }
}
</script>
<style></style>