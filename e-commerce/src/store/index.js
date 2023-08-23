import { createStore } from 'vuex';
import auth from './modules/auth';
import brand from './modules/brand';
import category from './modules/category';
import product from './modules/product'
import user from './modules/user';



const store = createStore({
  state: {
    isLoading: true,
  },
  modules: {
    auth,
    brand,
    category,
    product,
    user
    
  },
});

export default store;