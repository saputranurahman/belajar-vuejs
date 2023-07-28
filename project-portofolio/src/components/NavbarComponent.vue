<script setup>
import { Navbar, NavbarLogo, NavbarCollapse, NavbarLink } from 'flowbite-vue'
</script>
<template>
    <Navbar>
      <template #logo>
        <NavbarLogo link="https://www.google.com/" alt="Flowbite logo" image-url="https://cdn-icons-png.flaticon.com/512/733/733570.png?w=740&t=st=1690532733~exp=1690533333~hmac=d72b8e91fb3fd2111aaa3af6f40fd7f14795b0cb1367cc4388c5cbe72596b720">
          Saputra Nurahman
        </NavbarLogo>
      </template>
      <template #default="{isShowMenu}">
        <NavbarCollapse :isShowMenu="isShowMenu">
          <NavbarLink is-active>Halaman Utama</NavbarLink>
          <NavbarLink>Tentang</NavbarLink>
          <NavbarLink>Pendidikan</NavbarLink>
          <NavbarLink>Contact</NavbarLink>
        </NavbarCollapse>
      </template>
      <template #right-side>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Mulai</button>
      </template>
    </Navbar>
</template>
