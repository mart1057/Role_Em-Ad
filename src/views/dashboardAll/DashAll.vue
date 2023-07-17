<template>
    <div>
        <div v-if="$store.state.userDetail.role.name == 'Admin'">
            <DashBoard/>
        </div>
        <div v-else>
            <DashBoardEm/>
        </div>
    </div>

</template>

<script>
import DashBoard from '@/views/dashboard/DashBoard/'
import DashBoardEm from '@/views/dashEmployee/DashBoardEm'
export default{
    components:{DashBoard,DashBoardEm}
}
</script>