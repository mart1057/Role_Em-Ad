<template>
    <div class="w-[100%] h-[100%] bg-white rounded-[10px] flex flex-col p-[15px] ">
        <div class="flex justify-between">
            <div class="text-[14px] font-bold ">Outstanding Document</div>
        </div>
        <div class="flex justify-between mt-[10px]">
            <div class="flex">
                <div>
                    <button @click="changeTab = 2, getDocFavoriteList(changeTab)"
                        class="w-[auto] text-[#6B7490] text-center text-[12px] font-medium rounded-[20px] pl-[8px]  pr-[8px] border-[#E5EAF6]  pt-[2px] pb-[2px] border-[1px]"
                        :class="changeTab == 2 ? 'bg-[#79ACF9] text-white' : 'text-[#6B7490]'">Pending
                        [Serial]</button>
                </div>
                <div class="ml-[10px]">
                    <button @click="changeTab = 22, getDocFavoriteList(changeTab)"
                        class="w-[auto] text-[#6B7490] text-center text-[12px] font-medium rounded-[20px] pl-[8px]  pr-[8px] border-[#E5EAF6]  pt-[2px] pb-[2px] border-[1px]"
                        :class="changeTab == 22 ? 'bg-[#79ACF9] text-white' : 'text-[#6B7490]'">Pending
                        [Parallel]</button>
                </div>
                <div class="ml-[10px]">
                    <button @click="changeTab = 3, getDocFavoriteList(changeTab)"
                        class="w-[auto]  text-center text-[12px] rounded-[20px] pl-[8px]  font-medium  pr-[8px] border-[#E5EAF6]  pt-[2px] pb-[2px] border-[1px]"
                        :class="changeTab == 3 ? 'bg-[#FFB927] text-white' : 'text-[#6B7490]'">Revise</button>
                </div>
            </div>
            <div>
                <button @click="routTo()"
                    class="w-[82px]  rounded-[100px] text-center h-[26px] font-medium bg-[#79ACF9] text-[12px] text-white">View
                    More</button>
            </div>
        </div>
        <div class="mt-[10px]">
            <vs-table>
                <template #thead>
                    <vs-tr>
                        <vs-th>
                            Document Name
                        </vs-th>
                        <vs-th>
                            Project
                        </vs-th>
                        <vs-th>
                            Tags
                        </vs-th>
                        <vs-th>
                            Created
                        </vs-th>
                        <vs-th>
                            Due Date
                        </vs-th>
                        <vs-th>
                            Status
                        </vs-th>
                        <!-- <vs-th>

                        </vs-th> -->
                    </vs-tr>
                </template>
                <template #tbody>
                    <vs-tr :key="i" v-for="(tr, i) in items">
                        <vs-td>
                            {{ tr.attributes.docName }}
                        </vs-td>
                        <vs-td>
                            {{ tr.attributes.project.data.attributes.projectName }}
                        </vs-td>
                        <vs-td>
                            <div v-if="tr.attributes.tags.data.length > 2">
                                <div class="flex">
                                    <div class=" flex items-center justify-center  text-[#6B7490]">
                                        {{ tr.attributes.tags.data[0].attributes.tagName }}</div>
                                </div>
                                <div class="flex">
                                    <div class="  flex items-center justify-center text-[#6B7490]">
                                        {{ tr.attributes.tags.data[1].attributes.tagName }}</div>
                                </div>
                                <div class="text-[#6B7490] text-[10px]">+ {{ tr.attributes.tags.data.length - 2 }} more
                                </div>
                            </div>
                            <div v-if="tr.attributes.tags.data.length <= 2" v-for=" (tag, i) in tr.attributes.tags.data "
                                :key="i">
                                <div class="flex">
                                    <div class="  flex items-center justify-center  text-[#6B7490]">
                                        {{ tag.attributes.tagName }}
                                    </div>
                                </div>
                            </div>
                        </vs-td>
                        <vs-td>
                            {{ covertDate(tr.attributes.createdAt) }}
                        </vs-td>
                        <vs-td>
                            {{ tr.attributes.dueDate ? '-' : covertDate(tr.attributes.dueDate) }}
                        </vs-td>
                        <vs-td>
                            <div class=" flex w-[150px]">
                                <div class="text-[white] h-[25px]  flex justify-center items-center rounded-[100px] p-[14px]"
                                    :style="{
                                        background: tr.attributes.status == 1 ?
                                            '#BCC7D6' : tr.attributes.status === 2 ? '#79ACF9' : tr.attributes.status === 3 ? '#FFB927' : tr.attributes.status === 4 ? 'red' : '#6B7490'
                                    }">
                                    {{ tr.attributes.status == 1 ?
                                        'Draft' : tr.attributes.status === 2 ? 'Pending [Serial] 2/3' : tr.attributes.status ===
                                            4 ? 'Approved' : tr.attributes.status === 5 ? 'Reject' : 'Revise' }}
                                </div>
                            </div>
                        </vs-td>
                        <!-- <vs-td>
                            <div class="flex">
                                <div><md-icon style=" color:#79ACF9;">share</md-icon></div>
                                <div @click="tr.action = !tr.action"><md-icon
                                        :style="{ color: tr.action == true ? '#FFB927' : '#79ACF9' }">star_outline</md-icon>
                                </div>
                            </div>
                        </vs-td> -->
                    </vs-tr>
                </template>
            </vs-table>
        </div>
        <div class="center con-pagination mt-[-5px] " v-if="lengthPage > 1" @click="getDocFavoriteList()">
            <vs-pagination buttons-dotted v-model="page" :length="lengthPage" />
        </div>
    </div>
</template>
<script>
import router from '@/router';
export default {
    data() {
        return {
            checkTypeOrder: false,
            page: 1,
            max: 3,
            items: [],
            lengthPage: '',
            changeTab: 2,
        }
    },
    mounted() {
        this.getDocFavoriteList()
    },
    methods: {
        covertDate(val) {
            const dateCovert = (new Date(val).toISOString().split("T")[0]).split('-');
            return (dateCovert[2].toString()) + '/' + (dateCovert[1].toString()) + '/' + (dateCovert[0].toString())
        },
        getDocFavoriteList(status) {
            this.items = []
            if (this.changeTab == 2) {
                console.log('3');
                fetch('http://27.254.144.88:1337/api' + '/documents?populate=*&filters[sequentialOrder][$eq]=true&filters[status][$eq]=2&pagination[page]=' + this.page + '&pagination[pageSize]=10')
                    .then(response => response.json())
                    .then((resp) => {
                        this.lengthPage = resp.meta.pagination.pageCount
                        const arr = []
                        arr.push(resp.data)
                        this.items = arr[0]
                    })
            }
            else if (this.changeTab == 22) {
                console.log('33');
                fetch('http://27.254.144.88:1337/api' + '/documents?populate=*&filters[sequentialOrder][$eq]=false&filters[status][$eq]=2&pagination[page]=' + this.page + '&pagination[pageSize]=10')
                    .then(response => response.json())
                    .then((resp) => {
                        this.lengthPage = resp.meta.pagination.pageCount
                        const arr = []
                        arr.push(resp.data)
                        this.items = arr[0]
                    })
            }
            else if (this.changeTab == 3) {
                console.log('0');
                fetch('http://27.254.144.88:1337/api' + '/documents?populate=*&filters[status][$eq]=' + this.changeTab + '&pagination[page]=' + this.page + '&pagination[pageSize]=3')
                    .then(response => response.json())
                    .then((resp) => {
                        this.lengthPage = resp.meta.pagination.pageCount
                        const arr = []
                        arr.push(resp.data)
                        this.items = arr[0]
                    })
            }

        },
        routTo() {
            if (this.changeTab == 2) {
                router.push({
                    path: '/document',
                    query: { approve: 2, seq: true,name:'Pending [Serial] Document' },
                })

            }
            else if (this.changeTab == 22) {
                router.push({
                    path: '/document',
                    query: { approve: 2, seq: false,name:'Pending [Parallel] Document' },
                })

            }
            else if (this.changeTab == 3) {
                router.push({
                    path: '/document',
                    query: { approve: 3,name:'Revise Document' },
                })

            }
        }
    }
}

</script>