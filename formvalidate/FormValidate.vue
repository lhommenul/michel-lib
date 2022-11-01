<template>
  <form class="form-validate" >
    <slot name="header" />
    
    <component v-for="({ vNode, value }, index) in fields" :key="index" :is="vNode" :value="value" :applyRule="applyRule" ></component>

    <footer class="form-validate-footer" >
      <slot name="footer" />
    </footer>

  </form>
</template>

<script>
import FormValidateField from '../formvalidatefield/FormValidateField.vue'

export default {
  name : "FormValidate",

  components : {
    FormValidateField
  },

  props : {
    value : {
      type : Object,
      default : null
    },
    isValid : {
      type : Boolean,
      default : false
    }
  },

  data() {
    return {
      fields : [],
    }
  },

  emits : [
    'update:isValid'
  ],

  mounted() {
    if ( this.value ) this.initialize()
  },

  methods: {
    initialize(){
      const props = this.$slots.default();

      // Get only form validate field
      this.fields = props
        .filter( prop => prop.type.name === "FormValidateField" )
        .map( ( field ) => {

          if( field.props.fieldname ) {
            
            const value = Object.assign({
              isValid : false,
              message : null,
            },this.value[ field.props.fieldname ])

            return {
              value,
              vNode : field
            }

          }
          
        })

      this.fields.forEach( ({ value }) => this.applyRule( value ) )

    },
    applyRule( ctx ){
      // console.group('applyRule');

      const { rule, value } = ctx;

      console.log( rule);

      const res = ( rule === null || rule === undefined ) ? { isValid : true, message : null } : rule(value)
      // console.table(res);
      const boolRes = ( res === true || res === false )

      ctx.isValid = boolRes ? res : res.isValid
      ctx.message = boolRes ? null : res.message
      // console.table(ctx.isValid);

      this.formIsValid()
      
      // console.groupEnd()
    },
    formIsValid(){

      this.$emit('update:isValid', this.fields.every( ({ value : f }) => f.isValid === true ) );

    }
  },

}
</script>
