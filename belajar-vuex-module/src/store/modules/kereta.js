import axios from "axios";

const kereta = {
    namespaced: true,
    state: {
        keretaData: [],
    },
    getters: {
        getkereta: (state) => state.keretaData,
    },
    actions: {
        async fetchkereta({ commit }) {
            try {
                const data = await axios.get(
                    "https://booking.kai.id/api/stations2"
                );
                commit("SET_KERETA", data.data);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_KERETA(state, kereta) {
            state.keretaData = kereta;
        },
    },
};

export default kereta