<template>
  <div class="star-display">
    <star-rating
      :rating="rating"
      :read-only="true"
      :star-size="30"
      :show-rating="false"
      active-color="#e75c18"
      :padding="7"
    />
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "StarDisplay",
  components: {
    StarRating,
  },
  props: {
    rating: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.star-display {
  display: inline-block;
}
</style>
