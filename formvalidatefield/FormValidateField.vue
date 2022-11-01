<template>
  <div class="form-validate-field" >
    <slot v-bind="{ value: value, applyRule : checkValidatity }" />
  </div>
</template>

<script>
export default {
  name : "FormValidateField",

  props : {
    fieldname : {
      type : String,
      default : null
    },
    value : {
      type : Object,
      default : null
    },
    applyRule : {
      type : Function,
      default : null
    }
  },

  data() {
    return {
      
    }
  },

  methods: {
    checkValidatity(){
      this.applyRule( this.value )
    }
  },

}
</script>
