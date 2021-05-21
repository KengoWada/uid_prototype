<template>
  <div>
    <div v-if="getCart.length > 0" class="container text-center">
      <h1>Cart</h1>

      <div class="row">
        <div class="col-md-6">
          <cart-card v-for="(item, i) in getCart" :key="i" :item="item" />
        </div>
        <div class="col-md-6">
          <cart-summary />
        </div>
      </div>
    </div>
    <div v-else class="container text-center">
      <h1>Your cart is empty</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartCard from "../components/CartCard.vue";
import CartSummary from "../components/CartSummary.vue";

export default {
  name: "Cart",
  computed: { ...mapGetters(["getCart"]) },
  components: { CartCard, CartSummary },
};
</script>
