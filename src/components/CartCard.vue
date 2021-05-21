<template>
  <div class="card mb-3" style="max-width: 540px">
    <div class="row g-0">
      <br /><br /><br />
      <div class="col-md-4">
        <img :src="item.product.image" :alt="item.product.name" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ item.product.name }}</h5>
          <p class="card-text">
            Cost Per {{ item.product.unit }}: {{ item.product.cost }}
            <br />
            Quantity({{ item.product.unit }}): {{ item.quantity }}
            <br />
            Sub-Total: UGX {{ item.quantity * item.product.price }}/=
          </p>
          <p class="card-text">
            <small class="text-muted">{{ item.product.dos | dos }}</small>
          </p>
          <button class="btn btn-danger">REMOVE FROM CART</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartCard",
  props: {
    item: {
      product: Object,
      quantity: Number,
    },
  },
};
</script>

<style scoped>
img {
  height: 200px;
  width: 200px;
}
</style>
