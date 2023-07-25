<template>
    <p>Ini Dari NewComponent</p>
    <MyComponent nama="saput" umur="17"/>
    <Latihancomponent name="Saputra Nurahman" age="20" /> <br>
    <latihan2Component  />
    <watch nama="saputa" umur="25"/>
    <EventComponent/>
    

    </template>
    
    <script setup >
    import MyComponent from './Mycomponent.vue' 
import Latihancomponent from './latihancomponent.vue';
import latihan2Component from './latihan2Component.vue';
import  watch  from './watch.vue';
import EventComponent from './eventComponent.vue';
    
    
    </script>