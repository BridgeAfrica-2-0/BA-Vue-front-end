<template>
  <div>
    <b-card
      :title="title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2 "
    >
      <b-card-text class="text">
        <p>
          Business Category <br />
          2M Followers <br />
          Neighborhood, City, Country <br />
          Keyword 1, Keyword 2, Keyword 3
        </p>
      </b-card-text>
      <b-row>
        <b-col>
          <b-button href="#" variant="primary">Contact</b-button>
        </b-col>
        <b-col>
          <b-button href="#">+ Follow</b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["title", "image"],
};
</script>

<style scoped>
.card {
  max-width: 250px;
  color: orange;
}
.text {
  color: #000;
}
.stock {
  color: green;
}
</style>
