import axios from 'axios';

const auth = {
  namespaced: true,
  state: {
    token: localStorage.getItem('token') || '',
    loginError: null,
    dataAddress: []
  },
  getters: {
    isAuthenticated: (state) => !!state.token,
    getAddress: (state) => state.dataAddress
    
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(
          'https://ecommerce.olipiskandar.com/api/v1/auth/login',
          credentials
        );
        const token = response.data.access_token;

        // Save token to localStorage
        localStorage.setItem('token', token);
        

        commit('SET_TOKEN', token);
        commit ('SET_LOGIN_ERROR', null)
        console.log("token saved:", token);
        return true;
      } catch (error) {
        const errorMessage = error.response.data.message || "Login Failed";
        commit("SET_LOGIN_ERROR", errorMessage) 
        console.error(error);
        return false;
      }
    },
    async signup({ commit }, credentials) {
      try {
        const response = await axios.post(
          'https://ecommerce.olipiskandar.com/api/v1/auth/signup',
          credentials
        );
        const token = response.data.access_token;
    

        
        localStorage.setItem('token', token);
   

        commit('SET_TOKEN', token);
        commit('SET_LOGIN_ERROR',null);
        console.log("token saved:", token);
        return true;
      } catch (error) {
        const errorMessage =error.response.data.message || "Login failed";
        commit("SET_LOGIN_ERROR",errorMessage);
        console.error(error);
        return false;
      }
    },

    async getUserAddress({state, commit}){
      try {
        const response = await axios.get(
          "https://ecommerce.olipiskandar.com/api/v1/user/addresses",
          {
            headers: {
              Authorization: `Bearer ${state.token}`,
            },
          } 
        );
        commit('SET_ADDRESS', response.data)
        console.log(response);
        return response.data;
      }catch (error){
        console.error(error)
        return null;
      }
    },
    
    logout({ commit }) {
      // Remove token from localStorage
      const token = localStorage.getItem('token');
      localStorage.removeItem('token');
      commit('SET_TOKEN', '');
      commit('SET_TOKEN', null);
      //   Log Token removed
      console.log('Token Removed:', token);
      window.location = "/login";
    },
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token;
    },
    
    SET_LOGIN_ERROR(state,error){
      state.loginError = error;
    },
    SET_ADDRESS(state, address) {
      state.dataAddress = address
    }
  },
};

export default auth;