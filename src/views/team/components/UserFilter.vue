<template>
    <div class="w-[100%] h-[184px] bg-white rounded-[10px]">
        <div class="p-[20px]">
            <div class="text-[20px] font-bold">User</div>
            <div>
                <div class="flex mt-[20px]">
                    <div @click="changeTab(true), checkTab = true" class="cursor-pointer" :class="checkTab ? 'selectTab' : ''">
                        Employee</div>
                    <div class="ml-[10px] cursor-pointer" :class="checkTab ? '' : 'selectTab'"
                        @click="changeTab(false), checkTab = false">Organization</div>
                </div>
                <div class="border-t-2"></div>
                <div class="flex justify-between mt-[20px]">
                    <div class="flex">
                        <div class="mr-[20px]">
                            <select class=" select-opt w-[321px] h-[38px] rounded-[6px]">
                                <option disabled value="">Select...</option>
                                <option>Assigned </option>
                            </select>
                        </div>
                        <div class="mr-[20px]">
                            <select class=" select-opt w-[321px] h-[38px] rounded-[6px]">
                                <option disabled value="">Select...</option>
                                <option>Assigned </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <input type="search" class="input_br w-[230px] h-[38px] rounded-[6px]" placeholder="Search">
                        <div class="flex hotfix">
                            <div class="mt-[-2px]"><md-icon>search</md-icon> </div>
                            <div class="border-l-2 h-[21px] border-[#6B7490] "></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            checkTab: true
        }
    },
    methods: {
        changeTab(a) {
            this.$emit('changeTab', a)

        }
    }
}
</script>
<style scoped>
.hotfix {
    position: absolute;
    top: 11.9rem;
}

input[type="search"] {
    padding-left: 32px;
}

input {
    border: solid 1px #E5EAF6;
    border-radius: 6px;
}

.select-opt,
textarea {
    border: solid 1px #E5EAF6;
}

.selectTab {
    font-size: 18px;
    font-weight: bold;


}</style>