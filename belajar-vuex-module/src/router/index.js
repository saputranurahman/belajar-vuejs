import { createWebHistory, createRouter, } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/user/Index.vue";
import UserCreate from "../views/user/Create.vue";
import Wilayah from "../views/Wilayah.vue";
import Product from "../views/Product.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Category from "../views/Category.vue";
import Login from "../views/Login.vue";
import Filter from "../views/FilterProduk.vue";
import store from "../store";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/user",
        name: "User",
        component: User,
        meta: { requireLogin: true },
    },
    {
        path: "/user/create",
        name: "UserCreate",
        component: UserCreate,
        meta: { requireLogin: false },
    },
    {
        path: "/wilayah",
        name: "Wilayah",
        component: Wilayah
    },
    {
        path: "/product",
        name: "Product",
        component: Product
    },
    {
        path: "/product/:id",
        name: "SingleProduct",
        component: SingleProduct
    },
    {
        path: "/category",
        name: "Category",
        component: Category
    },
    {
        path: "/category/:category",
        name: "Filter",
        component: Filter
    },
    {
        path: "/filter",
        name: "Filter",
        component: Filter
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: { requireGuest: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireGuest && store.getters["auth/isAuthenticated"]) {
        next("/");
    } else {
        next();
    }
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireLogin && !store.getters["auth/isAuthenticated"]) {
        next("/login");
    } else {
        next();
    }
});
export default router;