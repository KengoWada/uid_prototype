<template>
  <div class="card mb-4" style="width: 18rem">
    <img :src="product.image" class="card-img-top" :alt="product.name" />
    <div class="card-body">
      <h5 class="card-title">{{ product.name }}</h5>
      <p class="card-text">
        Cost Per {{ product.unit }}: {{ product.cost }}
        <br />
        Best Before Date: {{ product.dos | dos }}
      </p>
      <a href="#" class="btn btn-primary">MORE</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCard",
  props: {
    product: Object,
  },
};
</script>
