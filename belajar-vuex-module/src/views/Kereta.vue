<template>
    <div class="container mx-auto sm:px-4">
        <h1 class="text-center b">Fetch Kereta</h1>
        <table class="table-auto">
            <thead>
                <tr>
                    <th class="px-4 py-2">Code </th>
                    <th class="px-4 py-2">Name</th>
                    <th class="px-4 py-2">City</th>
                    <th class="px-4 py-2">City Name</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="kereta in getkereta" key="kereta.id">
                     <td class="border px-4 py-2">{{ kereta.code }}</td>
                     <td class="border px-4 py-2">{{ kereta.name }}</td>
                     <td class="border px-4 py-2">{{ kereta.city }}</td>
                     <td class="border px-4 py-2">{{ kereta.cityname }}</td>
                </tr>
                
            </tbody>
        </table>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('kereta', ['getkereta']),
    },
    methods: {
        ...mapActions('kereta', ['fetchkereta']),
    },
    created() {
        this.fetchkereta();
    },
}
</script>

<style></style>