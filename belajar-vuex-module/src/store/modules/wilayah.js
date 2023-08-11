import axios from "axios";

const wilayah = {
    namespaced:true ,
    state: {
        wilayahData :[],
    },
    getters:{
        getWilayah:(state) => state.wilayahData,
    },
    actions:{
        async fetchWilayah({ commit }) {
            try{
                const data = await axios.get (
                    "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
                );
                commit("SET_WILAYAH",data.data);
            } catch (error) {
                alert(error);
                console.log(error)
            }
        },
    },
    mutations: {
        SET_WILAYAH(state, wilayah){
            state.wilayahData = wilayah;
        },
    },
};

export default wilayah;