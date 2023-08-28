<template>
    <br>
    <br>
   <div class="mx-2 my-10 rounded-xl border bg-white px-4 shadow-md sm:mx-auto sm:max-w-xl sm:px-8">
  <div class="mb-2 flex flex-col gap-y-6 border-b py-8 sm:flex-row sm:items-center sm:justify-between">
    <div class="flex items-center">
      <img class="h-14 w-14 rounded-full object-cover" src="https://img.freepik.com/free-vector/businessman-working-laptop-computer-office-3d-character-isolated-white-background_40876-3756.jpg?size=626&ext=jpg&ga=GA1.2.1081581823.1690350210&semt=sph" alt="Simon Lewis" />
      <div class="ml-4 w-56">
        <p class="text-slate-700 text-xl font-bold ">{{ getUser.name }}</p>
        <p class="text-slate-500">{{ getUser.email }}</p>
      </div>
    </div>
    
  </div>
  <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
      <li class="flex items-center py-3 text-sm">
        <span>Jalan</span>
        <span class="ml-auto">{{ address.address }}</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Code Pos</span>
        <span class="ml-auto">{{ address.postal_code }}</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Kota</span>
        <span class="ml-auto">{{ address.city }}</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Provinsi</span>
        <span class="ml-auto">{{ address.state }}</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Negara</span>
        <span class="ml-auto">{{ address.country }}</span>
      </li>
      <li class="flex items-center py-3 text-sm">
        <span>Phone</span>
        <span class="ml-auto">{{ address.phone }}</span>
      </li>
    </ul>
  
    <br>
    <br> 
</div>

</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('user', ['getUser']),
        ...mapGetters('auth', ['getAddress']),
        address() {
          return this.getAddress.data[0]
        }

    },
    methods: {
        ...mapActions('user', ["fetchUser"]),
        ...mapActions('auth', ["getUserAddress"]),
    },
    created() {
      this.getUserAddress()
        this.fetchUser();
    },
}
</script>