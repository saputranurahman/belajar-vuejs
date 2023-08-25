import axios from "axios";

const cart = {
    namespaced: true,
    state: {
      cart: [],
    },
    
    getters:{
        getCart: (state) => state.cart
     },
    actions:{
        async fetchCart({commit}) {
            try {
                const datacart = await axios.post("https://ecommerce.olipiskandar.com/api/v1/carts", {
                    "temp_user_id": null
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                } )
                console.log(datacart.data.cart_items.data);
                commit('SET_CART',datacart.data.cart_items.data)
            } catch (error) {
                alert('Ada Error')
                console.log(error)
            }
        },

        async removeFromCart({commit, dispatch}, cartId) {
            try {
                const response = await axios.post("https://ecommerce.olipiskandar.com/api/v1/carts/destroy", {
                    "cart_id": cartId,
                }, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                } )
                console.log(response.data.message);
                dispatch("fetchCart")
            } catch (error) {
                alert('error removing item from cart')
                console.log(error)
            }
        }


    },
    mutations:{
        SET_CART(state, cart) {
            state.cart = cart
        }
    }

};
export default cart;