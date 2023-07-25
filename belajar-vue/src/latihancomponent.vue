<template>
    <div v-if="age > 18">
        <p>Selamat Datang {{ name }}</p>
    </div>
    <div v-else>
        <p>Maaf kamu belum cukup umur</p>
    </div>
    <div v-if="age > 18">
        <button @click="greet">Sapa</button>
    </div>
    <div v-else>
        silahkan kembali lagi nanti
    </div>
</template>

<script>
    export default{
        props: ['name', 'age'],
        methods: {
            greet(){
                alert("Hallo" + this.name)
            }
        },
        methods: {
    greet() {
      console.log('Halo, bro!');
    }
  },
  computed: {
    pesanSelamat() {
      return 'Selamat datang, ' + this.nama + '!';
    }
  },
  watch: {
    umur(newUmur, oldUmur) {
      console.log('Umur berubah dari', oldUmur, 'menjadi', newUmur);
      // Lakukan tindakan responsif lainnya...
    }
  }
    }
</script>