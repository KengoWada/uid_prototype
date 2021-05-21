import data from "../../data";

const state = {
  products: data.products,
  product: null,
  productIndex: null,
};

const getters = {
  getProducts(state) {
    return state.products;
  },
  getProduct(state) {
    return state.product;
  },
  getProductIndex(state) {
    return state.productIndex;
  },
};

const actions = {};

const mutations = {
  setProduct(state, product) {
    state.product = product;
  },
  setProductIndex(state, index) {
    state.productIndex = index;
  },
  addComment(state, { product, fruitIndex }) {
    state.products[fruitIndex] = product;
  },
};

export default { state, getters, actions, mutations };
