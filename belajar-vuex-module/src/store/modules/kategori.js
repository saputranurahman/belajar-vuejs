import axios from "axios";

const kategori = {
    namespaced: true,
    state: {
        kategoriData: [],
    },
    getters: {
        getkategori: (state) => state.kategoriData,
    },
    actions: {
        async fetchkategori({ commit }) {
            try {
                const data = await axios.get(
                    "https://fakestoreapi.com/products/categories"
                );
                commit("SET_KATEGORI", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_KATEGORI(state, kategori) {
            state.kategoriData = kategori;
        },
    },
};

export default kategori;