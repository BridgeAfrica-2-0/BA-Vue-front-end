<template>
  <div>
    <b-card class="mt-4" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0 d-inline-block">Invite</h6>
      </template>
      <p><b>Invite your followers to follow this business</b></p>
       <input class="form-control mb-2" placeholder="Search ..." type="text">
      <b-card-text>
        <b-list-group-item class="d-flex align-items-center m-0 p-2">
          <b-avatar
            variant="info"
            src="https://placekitten.com/300/300"
            class="mr-3"
          ></b-avatar>
          <span class="mr-auto font-weight-bolder">Username</span>
          <b-button variant="outline-primary" size="sm"> Invite</b-button>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center m-0 p-2">
          <b-avatar
            variant="info"
            src="https://placekitten.com/300/300"
            class="mr-3"
          ></b-avatar>
          <span class="mr-auto font-weight-bolder">Username</span>
          <b-button variant="outline-primary" size="sm"> Invite</b-button>
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center m-0 p-2">
          <b-avatar
            variant="info"
            src="https://placekitten.com/300/300"
            class="mr-3"
          ></b-avatar>
          <span class="mr-auto font-weight-bolder">Username</span>
          <b-button variant="outline-primary" size="sm"> Invite</b-button>
        </b-list-group-item>
      </b-card-text>
      <template #footer>
        <span class="float-right"> <a href="#">See More</a> </span>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
