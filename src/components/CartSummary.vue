<template>
  <div class="summary">
    <h1>Summary</h1>
    <table class="table table-hover">
      <thead class="thead-dark">
        <tr>
          <th scope="col">#</th>
          <th scope="col">Item</th>
          <th scope="col">Quantity</th>
          <th scope="col">Unit Cost(UGX)</th>
          <th scope="col">Sub-Total(UGX)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in getCart" :key="i">
          <th scope="row">{{ i + 1 }}</th>
          <td>{{ item.product.name }}</td>
          <td>{{ item.quantity }}</td>
          <td>{{ item.product.price | money }}</td>
          <td>{{ (item.product.price * item.quantity) | money }}</td>
        </tr>
        <tr>
          <th scope="row"></th>
          <td></td>
          <td></td>
          <td><b>TOTAL</b></td>
          <td>{{ getCart | cartTotal | money }}</td>
        </tr>
      </tbody>
    </table>

    <button class="btn btn-success" @click.prevent="checkOut">CHECK OUT</button>
    <br /><br />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartSummary",
  computed: { ...mapGetters(["getCart"]) },
  methods: {
    checkOut() {
      this.$store.commit("setCart", []);
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.summary {
  border: solid 1px black;
}
</style>
