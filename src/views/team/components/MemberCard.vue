<template>
    <div class="flex w-[100%]">
        <div class="grid grid-cols-4 w-[100%] gap-2">
            <div class="h-[219px] rounded-[10px] bg-white  flex flex-col justify-between"
                v-for="data in team" :key="data.id">
                <div class="flex flex-col justify-center items-center mt-[14px]">
                    <div>
                        <vs-avatar circle badge>
                            <img :src="data.profilePic? 'http://27.254.144.88:1337'+data.profilePic.url:''" class="w-[100%] h-[100%]" alt="">
                        </vs-avatar>
                    </div>
                    <div
                        class="flex justify-center items-center rounded-[10px] bg-[#79ACF9] w-[117px] h-[20px] text-[10px] text-[white] mt-[12px]">
                        {{ data.team == null ?'-': data.team.teamName +' Team'}} </div>
                    <div class="text-[16px] mt-[8px]">{{ data.firstName}} {{ data.lastName}}</div>
                    <div class="text-[12px] text-[#6B7490]">{{ data.email }}</div>
                    <div class="text-[12px] text-[#6B7490]">{{ data.phone }}</div>
                </div>
                <div
                    class="bg-[#3C7CFC] w-[100%] h-[40px] flex justify-center items-center rounded-b-[10px] text-[white] text-[16px] font-bold">
                    {{ data.team == null ?'-': data.team.teamName +' Team'}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            memberData: [
                { id: 1, name: 'Aharon Aarr', rank: 'MKT Team', email: 'Sharon Carr', phone: '+66 67 144 2370', rankAKA: 'Marketing Manager', img: 'https://r1.ilikewallpaper.net/iphone-wallpapers/download/85429/spiderman-2002-iphone-wallpaper-ilikewallpaper_com.jpg' },
                { id: 2, name: 'Bharon Barr', rank: 'MKT Team', email: 'Sharon Carr', phone: '+66 67 144 2370', rankAKA: 'Marketing Manager', img: 'https://r1.ilikewallpaper.net/iphone-wallpapers/download/85429/spiderman-2002-iphone-wallpaper-ilikewallpaper_com.jpg' },
                { id: 3, name: 'Charon Carr', rank: 'MKT Team', email: 'Sharon Carr', phone: '+66 67 144 2370', rankAKA: 'Marketing Manager', img: 'https://r1.ilikewallpaper.net/iphone-wallpapers/download/85429/spiderman-2002-iphone-wallpaper-ilikewallpaper_com.jpg' },
                { id: 4, name: 'Dharon Darr', rank: 'MKT Team', email: 'Sharon Carr', phone: '+66 67 144 2370', rankAKA: 'Marketing Manager', img: 'https://r1.ilikewallpaper.net/iphone-wallpapers/download/85429/spiderman-2002-iphone-wallpaper-ilikewallpaper_com.jpg' },
                { id: 5, name: 'Dharon Darr', rank: 'MKT Team', email: 'Sharon Carr', phone: '+66 67 144 2370', rankAKA: 'Marketing Manager', img: 'https://r1.ilikewallpaper.net/iphone-wallpapers/download/85429/spiderman-2002-iphone-wallpaper-ilikewallpaper_com.jpg' },
            ],
            team: [],
            
        }
    },
    mounted(){
        this.getTeam()

    },
    methods:{
        getTeam() {
            fetch('http://27.254.144.88:1337/api' + '/users?populate=*')
                .then(response => response.json())
                .then((resp) => {
                    this.team=resp
                    console.log(this.team);
                })
        },
    }
}
</script>

<style></style>