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
      <button class="btn btn-success" @click.prevent="">ADD TO CART</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  methods: {
    moreDetails() {
      this.$store.commit("setProduct", null);
      this.$store.commit("setProduct", this.product);
      this.$store.commit("setProductIndex", this.index);
      this.$router.push(`/product/${this.product.name}`);
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
