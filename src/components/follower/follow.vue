<template>
  <div>
    <div class="row follow">
      <div class="col">
        <b-list-group-item class="d-flex align-items-center mb-4 item">
          <b-avatar class="mr-3"></b-avatar>
          <div class="datails">
            <div class="row">
              <div class="col">
                <span class="mr-auto"> <b>Username</b> </span>
              </div>
            </div>
          </div>
        </b-list-group-item>
      </div>
      <div class="col-2">
        <b-button class="btn" variant="outline-primary">
          <b-icon icon="plus"></b-icon>
          Follow</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.item {
  border: none;
}
@media only screen and (max-width: 768px) {
  .btn {
    margin-left: -45px;
  }
}
</style>
