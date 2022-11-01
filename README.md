# VUE 3 MICHEL-LIB

## Github repo 
[github repo](https://github.com/lhommenul/michel-lib) https://github.com/lhommenul/michel-lib

## Download

````
npm install michel-lib --save
````

## Import style

```javascript

import {createApp} from 'vue';

import App from './App.vue';

// Import globally the css style
import 'michel-lib/css/style.css'

const app = createApp(App);

```


### Finally you'll be able to utilize the component in your application. See the Styles section to apply styling.

```vue
<template>
  <div>
    <FileUpload />
  </div>
</template>

<script>

// Import michel-lib
import { 
  FormValidate,
  FormValidateField,
  FileUpload,
} from 'michel-lib'

export default {
  components : {
    FormValidate,
    FormValidateField,
    FileUpload,
  }
}
</script>
```
