<template>
  <div class="card mb-4" style="width: 18rem">
    <img :src="product.image" class="card-img-top" :alt="product.name" />
    <div class="card-body">
      <h5 class="card-title" @click.prevent="moreDetails">
        {{ product.name }}
      </h5>
      <p class="card-text">
        Cost Per {{ product.unit }}: {{ product.cost }}
        <br />
        Best Before Date: {{ product.dos | dos }}
      </p>
      <button class="btn btn-success" @click.prevent="addToCart">
        ADD TO CART
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "HomeCard",
  computed: {},
  methods: {
    ...mapGetters(["getCart"]),
    moreDetails() {
      this.$store.commit("setProduct", null);
      this.$store.commit("setProduct", this.product);
      this.$store.commit("setProductIndex", this.index);
      this.$router.push(`/product/${this.product.name}`);
    },
    addToCart() {
      let cart = this.getCart();

      const index = cart.findIndex(
        (item) => item.product.name === this.product.name
      );

      if (index === -1) {
        cart.push({ product: this.product, quantity: 1 });
      } else {
        cart[index].quantity += 1;
      }

      this.$store.commit("setCart", cart);
    },
  },
  props: {
    product: Object,
    index: Number,
  },
};
</script>

<style scoped>
.card-title:hover {
  cursor: pointer;
  text-decoration: underline;
}
</style>
