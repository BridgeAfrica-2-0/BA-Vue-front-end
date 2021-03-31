<template>
  <div>
    <b-card class="mt-4" header-tag="header" footer-tag="footer">
      <p><b>Invite your followers to follow this business</b></p>
      <input class="form-control mb-2" placeholder="Search ..." type="text" />
      <fas-icon class="primary search" :icon="['fas', 'search']" />
      <b-card-text>
        <b-list-group-item class="d-flex align-items-center m-0 p-2">
          <b-avatar
            variant="info"
            src="https://placekitten.com/300/300"
            class="mr-3"
          ></b-avatar>
          <span class="mr-auto font-weight-bolder">Username</span>
          <b-button class="btn-primary" size="sm"> Invite</b-button>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center m-0 p-2">
          <b-avatar
            variant="info"
            src="https://placekitten.com/300/300"
            class="mr-3"
          ></b-avatar>
          <span class="mr-auto font-weight-bolder">Username</span>
          <b-button class="btn-primary" size="sm"> Invite</b-button>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center m-0 p-2">
          <b-avatar
            variant="info"
            src="https://placekitten.com/300/300"
            class="mr-3"
          ></b-avatar>
          <span class="mr-auto font-weight-bolder">Username</span>
          <b-button class="btn-primary" size="sm"> Invite</b-button>
        </b-list-group-item>
      </b-card-text>

      <span class="float-right">
        <a class="primary" href="#">See More</a>
      </span>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  text-align: left;
}
.search {
  position: relative;
  top: -40px;
  left: 270px;
  cursor: pointer;
}
.btn-primary {
  background-color: #fff;
  border: solid 1px #e75c18;
  color: #e75c18;
}

.btn-primary:hover {
  background-color: #e75c18;
  color: #fff;
  border: none;
}
</style>
