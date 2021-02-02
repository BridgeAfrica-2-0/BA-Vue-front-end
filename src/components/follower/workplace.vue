<template>
  <div>
    <b class="work">WorkPlace</b>
    <hr />

    <b-list-group-item class="d-flex align-items-center mb-4 item">
      <b-avatar class="mr-3 avatar"></b-avatar>
      <div class="datails">
        <div class="row">
          <div class="col">
            <span class="mr-auto"> <b>Company</b> </span>
            <p>Position</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              quibusdam harum maxime!
            </p>
          </div>
        </div>
      </div>
    </b-list-group-item>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.item {
  border: none;
}
.avatar {
  position: relative;
  top: -28px;
}
@media only screen and (max-width: 600px) {
  .avatar {
    position: relative;
    top: -60px;
  }
  .work {
    margin-left: 20px;
  }
}
</style>
