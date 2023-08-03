<template>
   <center>
    <div v-if="detail == undefined"><h1>ID YANG ANDA CARI TIDAK ADA</h1></div>
    <div v-else>
    <h1>Detail {{ detail.nama }}</h1>
    <img :src="getImgSrc(detail.img)" alt="Gambar">
    <h4>Harga : {{ detail.harga }}</h4>
    <h5>Deskripsi : {{ detail.des }}</h5>
    </div>
   </center>
</template>
<script>
  import { produk } from '@/assets/Produk';

  export default{
   props : [ 
    "id_produk"
   ],
   setup(props)
   {
    const detail = produk ["Produk"].find(function(item){
        return item.id == props.id_produk
    });
    const getImgSrc = (imgFileName) => {
          return '../src/assets/img/' + imgFileName + ''
        }
    return{
        detail,
        getImgSrc
    }
   }
  }
</script>

<style>
img {
  width: 40%;
}
h5{
    text-align: justify;
    text-align: center;
   
}
</style>