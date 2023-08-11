import { createStore } from "vuex";
import donatur from "./modules/donatur";
import clients from "./modules/clients";
import transaksi from "./modules/transaksi";
import users from "./modules/users";
import wilayah from "./modules/wilayah";
import product from "./modules/product";
import category from "./modules/category";
import auth from "./modules/auth";


const store = createStore({
    state: {
        isLoading: false,
    },
    modules: {
        donatur,
        clients,
        transaksi,
        users,
        wilayah,
        product,
        category,
        auth
    }
});

export default store;