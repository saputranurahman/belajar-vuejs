import { createWebHistory, createRouter } from "vue-router";
// Import Component2 Kalian

import Home from "@/view/Home.vue"; 
import About from "@/view/About.vue";
import Contact from "@/view/Contact.vue";
import Produk from "@/view/Produk.vue";
import Detail from "@/view/Detail.vue";
import DetailKategori from "@/view/DetailKategori.vue";
import Kategori from "@/view/Kategori.vue";
import NotFound from "@/view/NotFound.vue"

const routes = [ 
  {
    path: "/", 
    name: "Home",
    component: Home,
  },
  {
    path: "/About",
    name: "About",
    component: About,
  },
  {
    path: "/Contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/Produk",
    name: "Produk",
    component: Produk,
  },
  {
    path: "/Kategori",
    name: "Kategori",
    component: Kategori,
  },
  {
    path: "/DetailKategori/:id_kategori",
    name: "DetailKategori",
    component: DetailKategori,
    props: true,
  },
  {
    path: "/:patMatch(.*)*",
    name: "NotFound",
    component: NotFound,
    
  },
  {
    path: "/Detail/:id_produk",
    name: "Detail",
    component: Detail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;