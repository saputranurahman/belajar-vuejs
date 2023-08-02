<template>
    <h1>Ini Tampilan Contact</h1>
  </template>

<script>
  import { onMounted } from 'vue';

  export default{
    setup(props, Context){
      onMounted(() => {
        Context.emit("id-menu", 2);
      } )
    }
  }
</script>