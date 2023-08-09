<template>
    <center>
        <br>
        <br>
    <div class="container mx-auto sm:px-4">
        <h1 class="text-center b" >Fetch Stasiun</h1>
        <br>
        <table class="table-auto">
            <br>
            <thead>
                <tr>
                <th class="px-4 py-2">Code</th> 
                <th class="px-4 py-2">Name</th>
                <th class="px-4 py-2">City</th>
                <th class="px-4 py-2">City Name</th>
            </tr>  
            </thead>
            <tbody>
                <tr v-for="stasiun in getStasiun" :key="stasiun.code">
                 <td class="border px-4 py-2">{{ stasiun.code }}</td>
                 <td class="border px-4 py-2">{{ stasiun.name }}</td>
                 <td class="border px-4 py-2">{{ stasiun.city }}</td>
                 <td class="border px-4 py-2">{{ stasiun.cityname }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</center>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('stasiun', ['getStasiun']),
    },
    methods: {
        ...mapActions('stasiun', ['fetchStasiun']),
    },
    created(){
        this.fetchStasiun();
    },
}
</script>