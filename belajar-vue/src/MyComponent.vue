<template>
    <p>Ini dari MyComponent</p>
    <p> Nama :{{ nama }}</p>
    <p> Umur :{{ umur }}</p>
</template>

<script>  
export default {
    name: 'MyComponent',
    props: ['nama', 'umur']
}
</script>