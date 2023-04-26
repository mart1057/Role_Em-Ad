<template>
    <div class="flex w-[100%]">
        <div class="w-[25%] h-[219px] rounded-[10px] bg-white mr-[10px] flex flex-col justify-between" v-for="data in memberData" :key="data.id">
            <div class="flex flex-col justify-center items-center mt-[14px]">
                <div>
                    <vs-avatar circle badge>
                        <img :src="data.img" alt="">
                    </vs-avatar>
                </div>
                <div
                    class="flex justify-center items-center rounded-[10px] bg-[#79ACF9] w-[117px] h-[20px] text-[10px] text-[white] mt-[12px]">
                    {{ data.rank }}</div>
                <div class="text-[16px] mt-[8px]">{{ data.name }}</div>
                <div class="text-[12px] text-[#6B7490]">{{ data.email }}</div>
                <div class="text-[12px] text-[#6B7490]">{{ data.phone }}</div>
            </div>
            <div
                class="bg-[#3C7CFC] w-[100%] h-[40px] flex justify-center items-center rounded-b-[10px] text-[white] text-[16px] font-bold">
                {{ data.rankAKA }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            memberData: [
                { id: 1, name: 'Aharon Aarr', rank: 'MKT Team', email: 'Sharon Carr', phone: '+66 67 144 2370', rankAKA: 'Marketing Manager', img: '' },
                { id: 2, name: 'Bharon Barr', rank: 'MKT Team', email: 'Sharon Carr', phone: '+66 67 144 2370', rankAKA: 'Marketing Manager', img: '' },
                { id: 3, name: 'Charon Carr', rank: 'MKT Team', email: 'Sharon Carr', phone: '+66 67 144 2370', rankAKA: 'Marketing Manager', img: '' },
                { id: 4, name: 'Dharon Darr', rank: 'MKT Team', email: 'Sharon Carr', phone: '+66 67 144 2370', rankAKA: 'Marketing Manager', img: '' },
            ]
        }

    }
}
</script>

<style></style>