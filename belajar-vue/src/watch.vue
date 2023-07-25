<template>
    <div>
      <h2 v-if="umur >= 18">{{ pesanSelamat }}</h2>
      <p v-else>Maaf, kamu belum cukup umur.</p>
      <button @click="greet">Sapa Bro!</button>
    </div>
  </template>

<script>
export default {
  props: ['nama', 'umur'],
  data() {
    return {
      pesan: 'Halo, ' + this.nama + '!'
    };
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