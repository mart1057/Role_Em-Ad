<template>
    <div class="w-[100%] h-[100%] bg-white rounded-[10px] flex flex-col p-[15px] ">
        <div class="flex justify-between">
            <div class="text-[14px] font-bold ">Approved Document</div>
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
                            Name
                        </vs-th>
                        <vs-th>
                            Project
                        </vs-th>
                        <vs-th>
                            Status
                        </vs-th>
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
                            <div class="flex">
                                <div
                                    class="w-[auto] text-white text-center rounded-[20px] pl-[8px]  pr-[8px]  pt-[2px] pb-[2px] bg-[#369C7B]">
                                    Approved
                                </div>
                            </div>
                        </vs-td>
                    </vs-tr>
                </template>

            </vs-table>

        </div>
        <div class="center con-pagination mt-[-5px] " v-if="lengthPage > 1" @click="getDocApprovList()">
            <vs-pagination buttons-dotted v-model="page" :length="lengthPage" />
        </div>
    </div>
</template>
<script>
import router from '@/router'
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
        this.getDocApprovList()
    },
    methods: {
        getDocApprovList() {
            this.items = []
            fetch('http://27.254.144.88:1337/api' + '/documents?populate=*&filters[status][$eq]=4&pagination[page]=' + this.page + '&pagination[pageSize]=3')
                .then(response => response.json())
                .then((resp) => {
                    this.lengthPage = resp.meta.pagination.pageCount
                    const arr = []
                    arr.push(resp.data)
                    this.items = arr[0]
                })
        },
        routTo() {
            router.push({
                path: '/document',
                query: { approve: 4,name:'Approved Document' },
            })

        }
    }

}
</script>