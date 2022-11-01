<template>
  <div class="files-ct" >
     <div class="file-upload" >
      <input type="file" multiple @input="fileUpload( $event )" >
      <div class="file-upload-content" >
        <slot>
          <i class="pi pi-plus" style="font-size: 2rem; opacity : 0.7"></i>
        </slot>
      </div>
    </div>
    <div class="file-upload" v-for="(file, index) in files" :key="index" >
      <input type="file" multiple @input="fileUpload( $event, file, index )" >
      <div class="file-upload-content" :style="{'background-image' : 'url('+file.img+')' }" >
        <slot>
          <i v-if="file.isdefault" class="pi pi-plus" style="font-size: 2rem; opacity : 0.7"></i>
        </slot>
      </div>
      <i class="pi pi-check-circle" v-if="!file.isdefault" ></i>
    </div>
  </div>
</template>

<script>
export default {
  name : "FileUpload",
  props : {
    rule : {
      type : [ Function, null ],
      default : null
    },
    files : {
      required : true,
      type : Array,
      default : []
    },
    maxFiles : {
      type : Number,
      default : null
    },
    maxFileSize : {
      type : Number,
      default : null
    }
  },

  emits : [ 'update:files', 'uploadFile' ],

  data() {
    return {
      // files : [ ]
    }
  },

  computed : {
    cMaxFiles(){
      return this.maxFiles < 0 ? null : this.maxFiles
    },
    cMaxFileSize(){
      return this.maxFileSize < 0 ? null : this.maxFileSize
    },
  },

  methods: {
    fileUpload( event, file, index ){

      if( !event ) return;
      
      const files = event.target.files;

      if( files && files.length >= 1 ){

        if ( file && !file.isdefault ){

          this.files[index] = this.fileObject( 
            files[0],
            false
          )

        }

        for (let index = ( file && !file.isdefault ) ? 1 : 0; index < files.length; index++) {
          const file = files[index];

          this.files.push( 
            this.fileObject( 
              file,
              false
            )
          )

        }

      }

      this.$emit('uploadFile')
      this.$emit('update:files',this.files)

    },
    fileObject(file = null, isdefault = true){

      return {
        img : file ? URL.createObjectURL(file) : null,
        file : file,
        isdefault : isdefault
      }

    }
  },
}
</script>
