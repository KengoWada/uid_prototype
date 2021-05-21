import data from "../../data";

const state = {
  products: data.products,
};

const getters = {
  getProducts(state) {
    return state.products;
  },
};

const actions = {};

const mutations = {};

export default { state, getters, actions, mutations };
