<template>
  <div>

    <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" class="flex items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733570.png?w=740&t=st=1690532733~exp=1690533333~hmac=d72b8e91fb3fd2111aaa3af6f40fd7f14795b0cb1367cc4388c5cbe72596b720"
            class="h-8 mr-3" alt="Flowbite Logo">
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Saputra.</span>
        </a>

        <div class="flex md:order-2">

          <div v-if="isAuthenticated">

          </div>
          <div v-if="isAuthenticated">
            <a @click="logout"
              class="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</a>
          </div>
          <div v-else>
            <a href="/login"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</a>
          </div>
          <button data-collapse-toggle="navbar-sticky" type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15" />
            </svg>

          </button>

        </div>


        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul
            class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <li>
              <a href="/"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a>
            </li>

            <li>
              <a href="/produk"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">product</a>
            </li>

            <li>
              <a href="/contact"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
            </li>
            <li>
              <a href="/brand"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Brand</a>
            </li>
            <li>
              <a href="/category"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">category</a>
            </li>
            <li>
              <a href="/cart"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <img src="https://img.freepik.com/premium-vector/quick-shopping-cart-icon_414847-513.jpg?w=740"
                  class="h-8 mr-3" alt="Flowbite Logo">

              </a>
            </li>
            <li>
              <a href="/profile"
                class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                <img
                  src="data:image/jpeg;base64,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"
                  class="h-8 mr-3" alt="Flowbite Logo">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  </div>
</template>
  
<script>
import store from '../store';
import { mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('auth', ['logout'])
  },
}
</script>