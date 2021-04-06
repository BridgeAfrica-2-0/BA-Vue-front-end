<template>
  <div>
    <b class="profession">Profession</b>
    <hr />
<<<<<<< HEAD
    <b-list-group-item class="d-flex align-items-center mb-4 item">
=======
    <b-list-group-item class="d-flex align-items-center mb-4 border-none">
>>>>>>> f155289a77178ac4585f3b7a9f2568ae722d414d
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
        { value: "public", text: "Public" }
      ]
    };
  }
};
</script>

<style scoped></style>
