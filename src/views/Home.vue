<template>
  <div class="home container">
    <h1>MARKET</h1>
    <div class="row align-items-start">
      <div
        class="col-md-4 col-sm-6 d-flex align-items-stretch"
        v-for="(product, i) in getProducts"
        :key="i"
      >
        <home-card :product="product" :index="i" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HomeCard from "../components/HomeCard.vue";

export default {
  name: "Home",
  components: { HomeCard },
  computed: {
    ...mapGetters(["getProducts"]),
  },
};
</script>
