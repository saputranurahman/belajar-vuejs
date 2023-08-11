<template>
  
  <nav class="bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center">
          <img src="https://img.freepik.com/free-vector/branding-identity-corporate-vector-abstract-s-logo-design_460848-13703.jpg?w=740&t=st=1691718113~exp=1691718713~hmac=c48ed20e9cd9dd6b8c09f8fe339f00a212c55eab12ef821f17959b5b2be11379" class="h-8 mr-3" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white "></span>
      </a>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
      </button>
      <center>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
           <router-link to="/"><b><font >Home</font></b></router-link>
          </li>
          <li>
            <router-link to="/user"><b><font >User</font></b></router-link>
          </li>
          <li>
              
      <router-link to="/wilayah"><b><font >Wilayah</font></b></router-link>
          </li>
          <li>
            <router-link to="/product"><b><font >Product</font></b></router-link>
          </li>
          <li>
            <router-link to="/category"><b><font >Category</font></b></router-link>
          </li>
          <li v-if="isAuthenticated">
          <button @click="logout" class="blue"><font color="red">Log Out</font></button>
          </li>
          <li v-else>
            <router-link to="/login"><b><font color="blue">Log In</font></b></router-link>
            </li>
  
        </ul>

      </div>
    </center>
      </div>
  
    </nav>
  <br>
    <router-view />
    
  </template>
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
      computed: {
          ...mapGetters('auth', ['isAuthenticated']),
      },
      methods: {
          ...mapActions('auth', ['logout']),
      },
  };
  
  </script>