<template>
    <div>
      <h2>FORMULIR</h2>
      <form @submit.prevent="submitForm">
        <label for="">Nama : </label> 
        <input type="text" v-model="kontak.nama" >
        <br>
        <br>
        <label for="">Kelas : </label>
        <input type="kelas" v-model="kontak.kelas">
       <br>
        <br>
        <label for="">Alamat : </label>
        <input type="alamat" v-model="kontak.alamat">
        <br>
        <br>
        <label for="">Nilai Mtk : </label>
        <input type="number" v-model="kontak.mtk">
        <br>
        <br>
        <label for="">Nilai B.Indo : </label>
        <input type=" number" v-model="kontak.bindo">
        <br>
        <br>
        <label for="">Nilai Ipa : </label>
        <input type="number" v-model="kontak.ipa">
        <br>
        <br>
        <button type="submit">Kirim</button>
      </form>
      <div v-if="showResult">
        <h1>HASIL</h1>
        <table border="1" style="width: 97%;">
            <tr>
                <th>NAMA</th>
                <th>KELAS</th>
                <th>ALAMAT</th>
                <th>NILAI MATEMATIKA</th>
                <th>NILAI INDONESIA</th>
                <th>NILAI IPA</th>
                <th>TOTAL NILAI</th>
                <th>KETERANGAN</th>
            </tr>
            <tr>
                <td>{{ nama }}</td>
                <td>{{ kelas }}</td>
                <td>{{ alamat }}</td>
                <td>{{ mtk }}</td>
                <td>{{ bindo }}</td>
                <td>{{ ipa }}</td>
                <td>{{ total }}</td>
                <td>{{ keterangan }}</td>

            </tr>
           
        </table>
       
       
      </div>
    </div>
  </template>
  
  <script>
  
  import { ref } from 'vue';
  
  export default {
    data() {
      return {
        kontak: {
          nama: '',
          kelas: '',
          alamat: '',
          mtk: '',
          bindo: '',
          ipa: '',
          keterangan : '',
        },
        showResult: ref(false),
        nama: ref(''),
        kelas: ref(''),
        alamat: ref(''),
        mtk: ref( ),
        bindo: ref( ),
        ipa: ref( ),
        total : 0,
        keterangan:(''),
      };
    },
    methods: {
      submitForm() {
        this.nama = this.kontak.nama;
        this.kelas = this.kontak.kelas;
        this.alamat = this.kontak.alamat;
        this.mtk = this.kontak.mtk;
        this.bindo = this.kontak.bindo;
        this.ipa = this.kontak.ipa;    
        this.total = parseInt(this.mtk) + parseInt(this.ipa) + parseInt(this.bindo);
        if (this.total > 240) {
            this.keterangan = "LULUS"
        } else {
            this.keterangan= "TIDAK LULUS"
        }

          
        this.showResult = true;
      },
    },
    
  };
  </script>
  
  <style>
  h2 {
    color: rgb(7, 154, 184);
  }
 
  .is-invalid {
    border-color: rgb(5, 5, 5);
  }
  </style>