<template>
  <div>
    <b class="profession">Profession</b>
    <hr />
    <b-list-group-item class="d-flex align-items-center mb-4 item">
      <div class="datails">
        <div class="row">
          <div class="col">
            <span class="mr-auto"> My Profession </span>
          </div>
        </div>
      </div>
    </b-list-group-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Select" },
        { value: "private", text: "Private" },
        { value: "public", text: "Public" },
      ],
    };
  },
};
</script>

<style scoped>
.item {
  border: none;
}
@media only screen and (max-width: 768px) {
  .profession {
    margin-left: 20px;
  }
}
</style>
