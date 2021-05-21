const state = {
  cart: [],
};

const getters = {
  getCart(state) {
    return state.cart;
  },
};

const actions = {};

const mutations = {
  setCart(state, cart) {
    state.cart = cart;
  },
};

export default { state, getters, actions, mutations };
