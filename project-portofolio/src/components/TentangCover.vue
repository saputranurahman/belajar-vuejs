<script setup>
import { TheCard } from 'flowbite-vue'
</script>


<template>
  <center>
    <h1 class="seler">Skill Yang Saya Miliki</h1>
  </center>
 
  <center>
    
  </center>
  <div class="flex flex-row m-3" >
      <div class="basis-1/4 m-11">
        <the-card variant="image" img-src="https://img.freepik.com/free-vector/mobile-ui-ux-concept-illustration_114360-11697.jpg?size=626&ext=jpg&ga=GA1.2.292088139.1690524549&semt=ais"      img-alt="Desk">
          <br>
      
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">UI & UX</h5>
             <p class="font-normal text-gray-700 dark:text-gray-400 " style="text-align: justify;">
              </p>
       </the-card></div>
       
      <div class="basis-1/4 m-11"><the-card variant="image" img-src="https://img.freepik.com/free-vector/low-code-development-concept-illustration_114360-7294.jpg?size=626&ext=jpg&ga=GA1.2.292088139.1690524549&semt=ais" img-alt="Desk">
        <br>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FRONTEND
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400" style="text-align: justify;">
       
      
    </p>
  </the-card></div>

      <div class="basis-1/4 m-11"><the-card variant="image" img-src="https://img.freepik.com/free-vector/open-source-concept-illustration_114360-3868.jpg?size=626&ext=jpg&ga=GA1.1.292088139.1690524549&semt=ais" img-alt="Desk">
        <br>
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">BACKEND</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
     
      
    </p>
  </the-card>
</div>

  </div>

</template>
<style>
.seler{
    font-family: 'Montserrat', 'sans-serif';
    font-size: 40px;
    font-weight: bold;
}
.grid{
    

    
    margin-left: 20px;
}
</style>
