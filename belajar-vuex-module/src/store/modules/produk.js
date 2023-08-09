import axios from "axios";

const produk = {
    namespaced: true,
    state: {
        produkData: [],
    },
    getters: {
        getproduk: (state) => state.produkData,
    },
    actions: {
        async fetchproduk({ commit }) {
            try {
                const data = await axios.get(
                    "https://fakestoreapi.com/products"
                );
                commit("SET_PRODUK", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_PRODUK(state, produk) {
            state.produkData = produk;
        },
    },
};

export default produk