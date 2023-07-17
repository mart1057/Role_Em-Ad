<template>
  <vs-dialog full-screen v-model="active">
    <div id="webviewer" ref="viewer"></div>
  </vs-dialog>
</template>

<script>
import { ref, onMounted, reactive } from "vue";
import WebViewer from "@pdftron/webviewer";
import axios from "axios";

export default {
  name: "WebViewer",
  props: {
    initialDoc: { type: String },
    open: { type: Boolean },
    idFile: { type: Number },
    idApprovalResponsibilities: { type: Number },
    getFiles: { type: Function }
  },
  setup(props) {
    const viewer = ref(null);
    const active = ref(true)
    const filePng = reactive([])
    onMounted(() => {
      getSignalLits()
      active.value = props.open
      const path = `${process.env.BASE_URL}webviewer`;
      WebViewer({
        path,
        initialDoc: props.initialDoc,
        licenseKey: 'demo:1687344154313:7d99afa703000000001fe168d36544166c9e235c3ddb6932bd00c55fa6'  // sign up to get a free trial key at https://dev.apryse.com
      }, viewer.value).then(instance => {
        const { documentViewer, annotationManager } = instance.Core;
        const tool = documentViewer.getTool('AnnotationCreateRubberStamp');
        tool.setStandardStamps(filePng.value);
        instance.UI.setHeaderItems(header => {
          header.push({
            type: 'actionButton',
            img: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"/></svg>',
            onClick: async () => {
              const doc = documentViewer.getDocument();
              const xfdfString = await annotationManager.exportAnnotations();
              const data = await doc.getFileData({
                // saves the document with annotations in it
                xfdfString
              });
              const arr = new Uint8Array(data);
              const blob = new Blob([arr], { type: 'application/pdf' });
              let formData = new FormData();
              formData.append('files', blob);
              axios.post('http://27.254.144.88:1337/api' + '/upload',
                formData,
                {
                  headers: {
                    'Content-Type': 'multipart/form-data'
                  }
                }
              ).then((resp) => {
                console.log(resp.data[0].url);
                axios.put('http://27.254.144.88:1337/api' + '/document-files/' + props.idFile, {
                  "data": {
                    "filePath": 'http://27.254.144.88:1337' + resp.data[0].url,
                    // "signature": true
                  }
                })
                .then(()=>{
                  axios.put('http://27.254.144.88:1337/api' + '/approval-responsibilities/' + props.idApprovalResponsibilities, {
                  "data": {
                    "approved": true,
                    // "signature": true
                  }
                })

                })
                console.log('object');
                setTimeout(() => {
                props.getFiles()
              }, 500);
                 
              })
                .catch(function () {
                  console.log('FAILURE!!');
                });
              setTimeout(() => {
                
              },300);
              active.value = false

              // Add code for handling Blob here
            }
          });
        });
      })
    });
    const getSignalLits = (() => {
      filePng.value = []
      fetch('http://27.254.144.88:1337/api' + '/signatures')
        .then(response => response.json())
        .then((resp) => {
          console.log(resp);
          const arr = []
          arr.push(resp.data)
          const member = arr[0]
          filePng.value = member.map(item => item.attributes.filePath)
          console.log(filePng.value);
        })
    })
    return {
      viewer,
      active
    };
  },
};
</script>

<style>
#webviewer {
  height: 100vh !important;
}

audio:not(.md-image),
canvas:not(.md-image),
embed:not(.md-image),
iframe:not(.md-image),
img:not(.md-image),
object:not(.md-image),
video:not(.md-image) {
  height: 100% !important;
}
</style>
