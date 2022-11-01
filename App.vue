<template>
  <div>
    <FileUpload :maxFiles="max" :maxFileSize="maxSize" v-model:files="files" />
  </div>
</template>

<script>

import FileUpload from './fileupload/FileUpload.vue'
import FormValidate from './formvalidate/FormValidate.vue'
import FormValidateField from './formvalidatefield/FormValidateField.vue'

export default {

  components : {
    FileUpload,
    FormValidate,
    FormValidateField,
  },

  data() {
    return {
      files : [],
      max : 1,
      maxSize : 10000,
    }
  },

}
</script>