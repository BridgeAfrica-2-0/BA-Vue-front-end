<template>
  <div>
    <div class="row follower">
      <div class="col">
        <b-list-group-item class="d-flex align-items-center mb-4 item border-0">
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
          <b-icon icon="chat" class="mr-1"></b-icon>
          Message</b-button
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
.follower {
  cursor: pointer;
}
@media only screen and (max-width: 768px) {
  .btn {
    display: flex;
    margin-left: -70px;
  }
}
</style>
