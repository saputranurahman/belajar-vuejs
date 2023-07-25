<template>
    <div>
      <h1>Aplikasi Vue.js Gue</h1>
      <my-component
        :nama="nama"
        :umur="umur"
        @greeted="onGreeted" 
      ></my-component>
    </div>
  </template>
  
  <script>
  import MyComponent from './Mycomponent.vue';
  
  export default {
    components: {
      MyComponent
    },
    data() {
      return {
        nama: 'John',
        umur: 25
      };
    },
    methods: {
      onGreeted() {
        console.log('Kamu udah disapa, bro!');
        // Lakukan tindakan responsif lainnya...
      }
    }
  }
  </script>