<template>
  <div>
    <b class="education">Education</b>
    <hr />

    <b-list-group-item class="d-flex align-items-center mb-4 border-0 education">
      <b-avatar class="mr-3 avatar"></b-avatar>
      <div class="datails">
        <div class="row">
          <div class="col">
            <span class="mr-auto"> <b>School</b> </span>
            <p>Duration</p>
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
  }
};
</script>

<style scoped>
.education {
  border: none;
}
.avatar {
  position: relative;
  top: -28px;
}
@media only screen and (max-width: 768px) {
  .avatar {
    position: relative;
    top: -80px;
  }
  .education {
    margin-left: 20px;
  }
}
</style>
