<template>
    <br>
    <br>
    <br>
    <center>
    <div class="container mx-auto sm:px-4">
        <table class="table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2">ID</th>
                    <th class="px-4 py-2">Nama</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="wilayah in getWilayah" :key="wilayah.id">
                    <td class="border px-4 py-2">{{ wilayah.id }}</td>
                    <td class="border px-4 py-2">{{ wilayah.name }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</center>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
import wilayah from '../store/modules/wilayah';

export default {
    computed:{
        ...mapGetters('wilayah',['getWilayah']),
    },
    methods:{
        ...mapActions('wilayah',['fetchWilayah']),
    },
    created(){
        this.fetchWilayah();
    }
}
</script>

<style></style>