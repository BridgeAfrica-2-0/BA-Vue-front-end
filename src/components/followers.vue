<template>
  <div>
    <b-card class="mt-4" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0 d-inline-block">Followers</h6>
        <b-avatar-group size="20px" class="float-right">
          <b-avatar></b-avatar>
          <b-avatar text="BV" variant="primary"></b-avatar>
          <b-avatar
            src="https://placekitten.com/300/300"
            variant="info"
          ></b-avatar>
          <b-avatar text="OK" variant="danger"></b-avatar>
          <b-avatar variant="warning"></b-avatar>
        </b-avatar-group>
      </template>
      <b-card-text>
        <b-list-group-item class="d-flex align-items-center m-0 p-2">
          <b-avatar
            variant="info"
            src="https://placekitten.com/300/300"
            class="mr-3"
          ></b-avatar>
          <span class="mr-auto font-weight-bolder">Username</span>
          <b-button variant="outline-primary" size="sm"
            ><b-icon icon="person-plus-fill" variant="primary"></b-icon>
            Follow</b-button
          >
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center m-0 p-2">
          <b-avatar
            variant="info"
            src="https://placekitten.com/300/300"
            class="mr-3"
          ></b-avatar>
          <span class="mr-auto font-weight-bolder">Username</span>
          <b-button variant="outline-primary" size="sm"
            ><b-icon icon="person-plus-fill" variant="primary"></b-icon>
            Follow</b-button
          >
        </b-list-group-item>
        <b-list-group-item class="d-flex align-items-center m-0 p-2">
          <b-avatar
            variant="info"
            src="https://placekitten.com/300/300"
            class="mr-3"
          ></b-avatar>
          <span class="mr-auto font-weight-bolder">Username</span>
          <b-button variant="outline-primary" size="sm"
            ><b-icon icon="person-plus-fill" variant="primary"></b-icon>
            Follow</b-button
          >
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
