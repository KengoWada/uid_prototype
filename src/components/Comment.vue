<template>
  <div
    class="list-group-item list-group-item-action flex-column align-items-start"
  >
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{ comment.name }}</h5>
    </div>
    <p class="mb-1">
      {{ comment.comment }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comment: Object,
  },
};
</script>
