import axios from 'axios';

const apiURL = 'http://localhost:3001';

// Define the shape of the product object
interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  favorite: number;
}

// Define the shape of the state object
interface State {
  products: Product[];
}

const state = (): State => ({
  products: [],
});

let count = 0;

const mutations = {
  FETCH_PRODUCTS(state: State, payload: Product[]) {
    state.products = [...state.products, ...payload];
    count += 10;
  },
  FETCH_FAVORITE_PRODUCTS(state: State, payload: Product[]) {
    state.products = payload;
    count = 0;
  },
  UPDATE_FAVORITE_PRODUCT(state: State, payload: Product) {
    const newFavorite = payload.favorite === 0 ? 1 : 0;
    axios
      .patch(apiURL + `/products/${payload.id}`, { favorite: newFavorite })
      .catch((err) => console.log(err));
    state.products.map((product) => {
      if (product.id === payload.id) {
        product.favorite = newFavorite;
      }
    });
  },
  TAKE_FROM_STOCK(state: State, payload: Product) {
    state.products.map((product) => {
      if (product.id === payload.id) {
        product.stock--;
      }
    });
    axios
      .patch(apiURL + `/products/${payload.id}`, { stock: payload.stock - 1 })
      .catch((err) => console.log(err));
  },
  ADD_TO_STOCK(state: State, payload: Product) {
    state.products.map((product) => {
      if (product.id === payload.id) {
        product.stock++;
      }
    });
    axios
      .patch(apiURL + `/grocery/${payload.id}`, { stock: payload.stock + 1 })
      .catch((err) => console.log(err));
  },
};

const actions = {
  fetchProducts({ commit }: { commit: Function }) {
    axios.get(apiURL + '/products').then((res) => {
      commit('FETCH_PRODUCTS', res.data.slice(count, count + 10));
    });
  },
  updateFavoriteProduct({ commit }: { commit: Function }, product: Product) {
    axios
      .get(apiURL + `/products/${product.id}`)
      .then((res) => {
        commit('UPDATE_FAVORITE_PRODUCT', res.data);
      })
      .catch((err) => console.log(err));
  },
  takeFromStock({ commit }: { commit: Function }, product: Product) {
    commit('TAKE_FROM_STOCK', product);
  },
  addToStock({ commit }: { commit: Function }, product: Product) {
    commit('ADD_TO_STOCK', product);
  },
  fetchFavoriteProducts({ commit }: { commit: Function }) {
    axios.get(apiURL + '/products?favorite=1').then((res) => {
      commit('FETCH_FAVORITE_PRODUCTS', res.data);
    });
  },
};

const getters = {
  products: (state: State) => state.products,
};

export default { state, mutations, actions, getters };
