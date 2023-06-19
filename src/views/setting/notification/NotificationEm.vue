<template>
    <div class="h-[100%] bg-white m-[10px] rounded-[10px]">
        <div class="p-[20px]">
            <div class="text-[20px] font-bold">Notification</div>
            <div class=" w-[100%] flex justify-between ml-[20px]">

                <div>
                    <div class="mt-[30px]">
                        <div class="text-[16px] font-bold">File Notification</div>
                        <div class="flex justify-between ml-[25px] mt-[10px]">
                            <div class="w-[300px]">New added</div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="fileNoti.new_add.grouped" />
                                <span class="flex justify-center items-center ml-[8px]">Send grouped</span>
                            </div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="fileNoti.new_add.instantly" />
                                <span class="flex justify-center items-center ml-[8px]">Send instantly</span>
                            </div>
                        </div>
                        <hr>
                        <div class="flex justify-between ml-[25px] mt-[10px]">
                            <div class="w-[300px]">Update</div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="fileNoti.update.grouped" />
                                <span class="flex justify-center items-center ml-[8px]">Send grouped</span>
                            </div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="fileNoti.update.instantly" />
                                <span class="flex justify-center items-center ml-[8px]">Send instantly</span>
                            </div>
                        </div>
                        <hr>
                        <div class="flex justify-between ml-[25px] mt-[10px]">
                            <div class="w-[300px]">New version added</div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="fileNoti.new_add_v.grouped" />
                                <span class="flex justify-center items-center ml-[8px]">Send grouped</span>
                            </div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="fileNoti.new_add_v.instantly" />
                                <span class="flex justify-center items-center ml-[8px]">Send instantly</span>
                            </div>
                        </div>
                        <hr>
                        <div class="flex justify-between ml-[25px] mt-[10px]">
                            <div class="w-[300px]">Old version added</div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="fileNoti.new_add_o.grouped" />
                                <span class="flex justify-center items-center ml-[8px]">Send grouped</span>
                            </div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="fileNoti.new_add_o.instantly" />
                                <span class="flex justify-center items-center ml-[8px]">Send instantly</span>
                            </div>
                        </div>
                        <hr>
                    </div>

                    <div class="mt-[30px]">
                        <div class="text-[16px] font-bold">Folder Notifications</div>
                        <div class="flex justify-between ml-[25px] mt-[10px]">
                            <div class="w-[300px]">New added</div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="folderNoti.new_add.grouped" />
                                <span class="flex justify-center items-center ml-[8px]">Send grouped</span>
                            </div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="folderNoti.new_add.instantly" />
                                <span class="flex justify-center items-center ml-[8px]">Send instantly</span>
                            </div>
                        </div>
                        <hr>
                        <div class="flex justify-between ml-[25px] mt-[10px]">
                            <div class="w-[300px]">Updated</div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="folderNoti.update.grouped" />
                                <span class="flex justify-center items-center ml-[8px]">Send grouped</span>
                            </div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="folderNoti.update.instantly" />
                                <span class="flex justify-center items-center ml-[8px]">Send instantly</span>
                            </div>
                        </div>
                        <hr>
                    </div>


                    <div class="mt-[30px]">
                        <div class="text-[16px] font-bold">Approval Workflow Notifications</div>
                        <div class="flex justify-between ml-[25px] mt-[10px]">
                            <div class="w-[300px]">New approval request</div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="approvWorkflowNoti.new_request.grouped" />
                                <span class="flex justify-center items-center ml-[8px]">Send grouped</span>
                            </div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="approvWorkflowNoti.new_request.instantly" />
                                <span class="flex justify-center items-center ml-[8px]">Send instantly</span>
                            </div>
                        </div>
                        <hr>
                        <div class="flex justify-between ml-[25px] mt-[10px]">
                            <div class="w-[300px]">Response to approval request</div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="approvWorkflowNoti.resp_request.grouped" />
                                <span class="flex justify-center items-center ml-[8px]">Send grouped</span>
                            </div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="approvWorkflowNoti.resp_request.instantly" />
                                <span class="flex justify-center items-center ml-[8px]">Send instantly</span>
                            </div>
                        </div>
                        <hr>
                        <div class="flex justify-between ml-[25px] mt-[10px]">
                            <div class="w-[300px]">Document approval workflow completed</div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="approvWorkflowNoti.doc_complete.grouped" />
                                <span class="flex justify-center items-center ml-[8px]">Send grouped</span>
                            </div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="approvWorkflowNoti.doc_complete.instantly" />
                                <span class="flex justify-center items-center ml-[8px]">Send instantly</span>
                            </div>
                        </div>
                        <hr>
                        <div class="flex justify-between ml-[25px] mt-[10px]">
                            <div class="w-[300px]">Document electronicallt signed</div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="approvWorkflowNoti.doc_signed.grouped" />
                                <span class="flex justify-center items-center ml-[8px]">Send grouped</span>
                            </div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="approvWorkflowNoti.doc_signed.instantly" />
                                <span class="flex justify-center items-center ml-[8px]">Send instantly</span>
                            </div>
                        </div>
                        <hr>
                    </div>


                    <div class="mt-[30px]">
                        <div class="text-[16px] font-bold">Sharing Notification</div>
                        <div class="flex justify-between ml-[25px] mt-[10px]">
                            <div class="w-[300px]">You gained access</div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="sharingNoti.access.grouped" />
                                <span class="flex justify-center items-center ml-[8px]">Send grouped</span>
                            </div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="sharingNoti.access.instantly" />
                                <span class="flex justify-center items-center ml-[8px]">Send instantly</span>
                            </div>
                        </div>
                        <hr>
                    </div>

                    <div class="mt-[30px]">
                        <div class="text-[16px] font-bold">Reminder Notification</div>
                        <div class="flex justify-between ml-[25px] mt-[10px]">
                            <div class="w-[300px]">New added</div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="reminderNoti.new_add.grouped" />
                                <span class="flex justify-center items-center ml-[8px]">Send grouped</span>
                            </div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="reminderNoti.new_add.instantly" />
                                <span class="flex justify-center items-center ml-[8px]">Send instantly</span>
                            </div>
                        </div>
                        <hr>
                        <div class="flex justify-between ml-[25px] mt-[10px]">
                            <div class="w-[300px]">Update</div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="reminderNoti.update.grouped" />
                                <span class="flex justify-center items-center ml-[8px]">Send grouped</span>
                            </div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="reminderNoti.update.instantly" />
                                <span class="flex justify-center items-center ml-[8px]">Send instantly</span>
                            </div>
                        </div>
                        <hr>
                        <div class="flex justify-between ml-[25px] mt-[10px]">
                            <div class="w-[300px]">Delete</div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="reminderNoti.delete.grouped" />
                                <span class="flex justify-center items-center ml-[8px]">Send grouped</span>
                            </div>
                            <div class="flex ml-[150px]">
                                <vs-switch success style="height: 22px;" v-model="reminderNoti.delete.instantly" />
                                <span class="flex justify-center items-center ml-[8px]">Send instantly</span>
                            </div>
                        </div>
                        <hr>
                    </div>

                    <div class="flex   mt-[30px]">
                        <div class="text-[16px] font-bold w-[300px]">Line Notification</div>
                        <div> <vs-switch success style="height: 22px;" v-model="lineNoti" /></div>
                    </div>
                    <hr>
                    <div class="flex">
                        <div class="text-[16px] font-bold w-[300px]">Email Notification</div>
                        <div> <vs-switch success style="height: 22px;" v-model="emailNoti" /></div>
                    </div>
                </div>
                <div>
                    <button class="btn-create text-[12px] text-[#6B7490] font-bold hover:bg-sky-100 mr-[20px] rounded-[5px] "
                        @click="resetDefault()">Reset to Default</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            fileNoti:{
                new_add:{
                    grouped:false,
                    instantly:false
                },
                update:{
                    grouped:false,
                    instantly:false
                },
                new_add_o:{
                    grouped:false,
                    instantly:false
                },
                new_add_v:{
                    grouped:false,
                    instantly:false
                },
            },
            folderNoti:{
                new_add:{
                    grouped:false,
                    instantly:false
                },
                update:{
                    grouped:false,
                    instantly:false
                },
            },
            approvWorkflowNoti:{
                new_request:{
                    grouped:false,
                    instantly:false
                },
                resp_request:{
                    grouped:false,
                    instantly:false
                },
                doc_complete:{
                    grouped:false,
                    instantly:false
                },
                doc_signed:{
                    grouped:false,
                    instantly:false
                },
            },
            sharingNoti:{
                access:{
                    grouped:false,
                    instantly:false
                },
            },
            reminderNoti:{
                new_add:{
                    grouped:false,
                    instantly:false
                },
                update:{
                    grouped:false,
                    instantly:false
                },
                delete:{
                    grouped:false,
                    instantly:false
                },
            },
            lineNoti: true,
            emailNoti: true

        }
    },
    methods:{
        resetDefault(){
            this.fileNoti.new_add.grouped= false
            this.fileNoti.new_add.instantly= false
            this.fileNoti.update.grouped= false
            this.fileNoti.update.instantly= false
            this.fileNoti.new_add_v.grouped= false
            this.fileNoti.new_add_v.instantly= false
            this.fileNoti.new_add_o.grouped= false
            this.fileNoti.new_add_o.instantly= false
            this.folderNoti.new_add.grouped= false
            this.folderNoti.new_add.instantly= false
            this.folderNoti.update.grouped= false
            this.folderNoti.update.instantly= false
            this.approvWorkflowNoti.new_request.grouped= false
            this.approvWorkflowNoti.new_request.instantly= false
            this.approvWorkflowNoti.resp_request.grouped= false
            this.approvWorkflowNoti.resp_request.instantly= false
            this.approvWorkflowNoti.doc_complete.grouped= false
            this.approvWorkflowNoti.doc_complete.instantly= false
            this.approvWorkflowNoti.doc_signed.grouped= false
            this.approvWorkflowNoti.doc_signed.instantly= false
            this.sharingNoti.access.grouped= false
            this. sharingNoti.access.instantly= false
            this.reminderNoti.new_add.grouped= false
            this.reminderNoti.new_add.instantly= false
            this.reminderNoti.update.grouped= false
            this.reminderNoti.update.instantly= false
            this.reminderNoti.delete.grouped= false
            this. reminderNoti.delete.instantly= false
            this.lineNoti = false
            this.emailNoti= false


        }
    }
}
</script>

<style>
.btn-create {
    width: 147px;
    height: 38px;
    text-align: center;
    border: solid 1px #b5c4e9;


}
</style>