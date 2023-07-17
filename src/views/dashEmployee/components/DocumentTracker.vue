<template>
    <div class="w-[100%] h-[100%] bg-white rounded-[10px] flex flex-col p-[15px] ">
        <div class="flex justify-between">
            <div class="text-[14px] font-bold ">Document Tracker</div>
            <div class="">
                <button @click="routTo()"
                    class="w-[82px] rounded-[100px] text-center h-[26px] font-medium bg-[#79ACF9] text-[12px] text-white">View
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
                            {{ covertDate(tr.attributes.createdAt) }}
                        </vs-td>
                        <vs-td>
                            {{ tr.attributes.dueDate ? '-' : covertDate(tr.attributes.dueDate) }}
                        </vs-td>
                        <vs-td>
                            <div class=" flex w-[150px]">
                                <div class="text-[white] h-[25px] w-[auto] flex justify-center items-center rounded-[100px] p-[14px]"
                                    :style="{
                                        background: tr.attributes.status == 1 ?
                                            '#BCC7D6' : tr.attributes.status === 2 ? '#79ACF9' : tr.attributes.status == 3 ? '#FFB927' : tr.attributes.status === 4 ? '#369C7B' : tr.attributes.status === 5 ? 'red' : '#6B7490'
                                    }">
                                    {{ tr.attributes.status == 1 ?
                                        'Draft' : tr.attributes.status === 2 ? tr.attributes.sequentialOrder ? 'Pending [Serial]':'Pending [Paralell]' :
                                    tr.attributes.status ===
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
        getDocFavoriteList() {
            this.items = []
            fetch('http://27.254.144.88:1337/api' + '/documents?populate=*&filters[favoriteDoc][$eq]=true&pagination[page]=' + this.page + '&pagination[pageSize]=3')
                .then(response => response.json())
                .then((resp) => {
                    resp.data.forEach((data) => {
                        console.log(data.attributes.relatedUser);
                        data.attributes.relatedUser.data.forEach((data2) => {
                            if (this.$store.state.userInfo.id == data2.id) {
                                this.items.push(data)
                            }
                        })
                        console.log(data)
                    })
                    this.lengthPage = resp.meta.pagination.pageCount
                    // const arr = []
                    // arr.push(resp.data)
                    // this.items = arr[0]
                })
        },
        routTo() {
            router.push({
                path: '/document',
                query: { favorte: true, name: 'Favorite Documents' },
            })

        }
    }
}

</script>