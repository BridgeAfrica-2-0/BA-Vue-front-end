<template>
  <div>
    <b-card
      :title="title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-2 card"
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
        <b-col class="mb-2 align-text-center">
          <b-button variant="primary" href="#" size="sm"
            ><b-icon icon="chat" variant="white"></b-icon>
            <span class="ml-1"> Message</span>
          </b-button>
        </b-col>
        <b-col>
          <b-button href="#" size="sm"
            ><b-icon icon="plus" variant="white"></b-icon> Community</b-button
          >
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
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.7);
}
.text {
  color: #000;
}
.stock {
  color: green;
}
.btn {
  display: flex;
}
.drop {
  top: -8px;
}
</style>
