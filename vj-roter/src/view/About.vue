<template>
  <h1>Ini Tampilan About</h1>
</template>
<script>
  import { onMounted } from 'vue';

  export default{
    setup(props, Context){
      onMounted(() => {
        Context.emit("id-menu", 3);
      } )
    }
  }
</script>