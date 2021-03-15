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
          <b-dropdown
            id="dropdown-1"
            text="Contact"
            class="m-md-2 drop"
            variant="primary"
            size="sm"
          >
            <b-dropdown-item>
              <b-icon icon="chat-fill" variant="primary"></b-icon>
              Message</b-dropdown-item
            >
            <b-dropdown-item>
              <b-icon icon="telephone-fill" variant="primary"></b-icon>Call
              Now</b-dropdown-item
            >
            <b-dropdown-item>
              <b-icon icon="geo-alt" variant="primary"></b-icon> Get
              Direction</b-dropdown-item
            >
          </b-dropdown>
        </b-col>
        <b-col>
          <b-button href="#" size="sm"
            ><b-icon icon="plus" variant="white"></b-icon> Follow</b-button
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
