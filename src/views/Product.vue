<template>
  <div class="container">
    <br /><br />
    <div class="row">
      <div class="col-md-6">
        <img class="image" :src="getProduct.image" :alt="getProduct.name" />
      </div>
      <div class="col-md-6">
        <h2>{{ getProduct.name }}</h2>
        <h5>
          Cost Per {{ getProduct.unit }}: {{ getProduct.cost }}
          <br />
          Best Before Date: {{ getProduct.dos | dos }}
        </h5>
        <form>
          <div class="form-row text-center align-items-center">
            <div class="col">
              <label>Quantity</label>
              <input
                style="width: 70%"
                type="number"
                class="form-control"
                v-model="quantity"
              />
            </div>
            <div class="col-auto my-1">
              <button
                type="submit"
                class="btn btn-success"
                @click.prevent="addToCart"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <br /><br /><br />
    <comment
      v-for="(comment, i) in getProduct.comments"
      :key="i"
      :comment="comment"
    />
    <br /><br />
    <form>
      <div class="form-group">
        <textarea
          class="form-control"
          placeholder="Comment here..."
          v-model="comment"
        />
      </div>
      <br />
      <button class="btn btn-primary" @click.prevent="addComment">
        COMMENT
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Comment from "../components/Comment.vue";

export default {
  name: "SingleProduct",
  components: { Comment },
  computed: {
    ...mapGetters(["getProduct", "getProducts", "getProductIndex", "getCart"]),
  },
  methods: {
    addToCart() {
      const cart = this.getCart;
      const index = cart.findIndex(
        (item) => item.product.name === this.getProduct.name
      );

      if (index >= 0) {
        cart[index].quantity = this.quantity;
      } else {
        cart.push({ product: this.getProduct, quantity: this.quantity });
      }

      this.$store.commit("setCart", cart);
    },
    addComment() {
      const newComment = { name: "Some User", comment: this.comment };
      this.getProduct.comments.push(newComment);

      this.$store.commit("addComment", {
        product: this.getProduct,
        index: this.getProductIndex,
      });
      this.$router.push("/");
    },
  },
  data() {
    return {
      quantity: 0,
      comment: "",
    };
  },
  created() {
    const index = this.getCart.findIndex(
      (item) => item.product.name === this.getProduct.name
    );

    if (index >= 0) {
      this.quantity = this.getCart[index].quantity;
    } else {
      this.quantity = 0;
    }
  },
};
</script>

<style scoped>
.image {
  height: 300px;
  width: 300px;
}
</style>
