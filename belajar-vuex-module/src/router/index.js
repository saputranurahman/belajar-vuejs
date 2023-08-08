import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Kereta from "../views/Kereta.vue"

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/user",
        name: "User",
        component: User,
    },
    {
        path: "/kereta",
        name: "Kereta",
        component: Kereta,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;