<template>
  <div>
    <div class="row follower">
      <div class="col">
        <b-list-group-item class="d-flex align-items-center mb-4 item">
          <b-avatar class="mr-3"></b-avatar>
          <div class="datails">
            <div class="row">
              <div class="col">
                <span class="mr-auto">
                  <b>{{ $t("profilefollower.Username") }}</b>
                </span>
              </div>
            </div>
          </div>
        </b-list-group-item>
      </div>
      <div class="col-2">
        <BtnCtaMessage :element="network" type="business" />
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
