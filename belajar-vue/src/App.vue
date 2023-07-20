<script setup>
import { ref } from 'vue'

let msg = "hello world"
let rawHtml = "<li>apakah saput ganteng?</li>"

let angka1 = 200
let angka2 = 10
let hasil = angka1 + angka2
let hasil2 = angka1 - angka2
let hasil3 = angka1 * angka2
let hasil4 = angka1 / angka2
</script>



<template>
    <div id="app">
        <h1>{{ msg }}</h1>
        <span v-html="rawHtml"></span>
        <span v-html="rawHtml" style="color: red"></span>
        <button :disabled="isButtonDisabled" onclick="alert('ciee suka ya')">iya</button> &ensp;
        <button :disabled="isButtonDisabled" onclick="alert('mwhehe')">bangettt</button><br>
        <a v-bind:href="url"> silahkan klik link di sini </a><br>
        <a :href="url"> sama aja link </a> <br>
        <a v-on:click="doSomething"> link juga </a> <br>
        <input v-model="message" placeholder="masukan email anda"> <br>
        <input v-model="message" placeholder="masukan password anda"> <br>
        <h1>SEKARANG ARITMATIKA</h1>
        <br>
        bilangan1 = {{ angka1 }} <br>
         bilangan2 = {{ angka2 }} <br>
          hasil penjumlahan = {{ angka1 }} + {{ angka2 }} = {{ hasil }} <br>
          hasil pengurangan = {{ angka1 }} - {{ angka2 }} = {{ hasil2 }} <br>
          hasil perkalian = {{ angka1 }} * {{ angka2 }} = {{ hasil3 }} <br>
          hasil pembagian = {{ angka1 }} / {{ angka2 }} = {{ hasil4 }}
        

        
    </div>
</template>