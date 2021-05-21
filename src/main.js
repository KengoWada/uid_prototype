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

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
