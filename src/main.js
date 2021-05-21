import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

Vue.filter("dos", (val) => {
  const today = new Date();
  const dos = new Date(today.getTime() + val * 24 * 60 * 60 * 1000);

  const dd = dos.getDate() < 10 ? "0" + dos.getDate() : dos.getDate();
  const mm = MONTHS[dos.getMonth()];
  const yyyy = dos.getFullYear();

  return `${dd} ${mm} ${yyyy}`;
});

Vue.filter("cartTotal", (val) => {
  let sum = 0;
  for (let item of val) {
    const subTotal = item.quantity * item.product.price;
    sum += subTotal;
  }

  return sum;
});

Vue.filter("money", (val) => {
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
