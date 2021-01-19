<template>
<div>
  <b-row>
    <b-col md="4">
      <b-card title="" header-tag="header" footer-tag="footer">
        <template #header>
          <h6 class="mb-0">Intro</h6>
        </template>
        <b-card-text>
          <p><b-icon icon="briefcase-fill" variant="primary"></b-icon>  Work at: Current or Last Organization</p>
          <p><b-icon icon="book-fill" variant="primary"></b-icon>  Studied at: Last Education</p>
          <p><b-icon icon="house-fill" variant="primary"></b-icon>  Home Town Name:Dummy</p>
          <p><b-icon icon="geo-alt-fill" variant="primary"></b-icon>  Current City Name:Dummy</p>
          <p><b-icon icon="people-fill" variant="primary"></b-icon>  Followed by: 525</p>
        </b-card-text>
      </b-card>

      <b-card class="mt-4" header-tag="header" footer-tag="footer">
        <template #header>
          <h6 class="mb-0 d-inline-block">Followers</h6>
          <b-avatar-group size="20px" class="float-right">
            <b-avatar></b-avatar>
            <b-avatar text="BV" variant="primary"></b-avatar>
            <b-avatar src="https://placekitten.com/300/300" variant="info"></b-avatar>
            <b-avatar text="OK" variant="danger"></b-avatar>
            <b-avatar variant="warning"></b-avatar>
          </b-avatar-group>
        </template>
        <b-card-text>
          <b-list-group-item class="d-flex align-items-center m-0 p-2">
            <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3"></b-avatar>
            <span class="mr-auto font-weight-bolder">Username</span>
            <b-button variant="outline-primary" size="sm"><b-icon icon="person-plus-fill" variant="primary"></b-icon>  Follow</b-button>
          </b-list-group-item>
          <b-list-group-item class="d-flex align-items-center m-0 p-2">
            <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3"></b-avatar>
            <span class="mr-auto font-weight-bolder">Username</span>
            <b-button variant="outline-primary" size="sm"><b-icon icon="person-plus-fill" variant="primary"></b-icon>  Follow</b-button>
          </b-list-group-item>
          <b-list-group-item class="d-flex align-items-center m-0 p-2">
            <b-avatar variant="info" src="https://placekitten.com/300/300" class="mr-3"></b-avatar>
            <span class="mr-auto font-weight-bolder">Username</span>
            <b-button variant="outline-primary" size="sm"><b-icon icon="person-plus-fill" variant="primary"></b-icon>  Follow</b-button>
          </b-list-group-item>
        </b-card-text>
        <template #footer>
          <span class="float-right"> <a href="#">See More</a> </span>
        </template>
      </b-card>

      <b-card class="mt-4" header-tag="header" footer-tag="footer">
        <template #header>
          <h6 class="mb-0 d-inline-block">Media</h6>
          <span class="float-right"><b-icon icon="eye-fill" variant="primary"></b-icon>  See All</span>
        </template>
        <b-card-text>
          <b-row>
            <b-col cols="6" v-for="i in 4" :key="i" class="p-1">
              <img class="mb-2 img-fluid" src="@/assets/img/m2.jpg" alt="Fluid image">
            </b-col>
          </b-row>
        </b-card-text>
      </b-card>
    </b-col>
    <b-col md="8"></b-col>
  </b-row>
</div>
</template>

<script>
export default {
name: "posts"
}
</script>

<style scoped>

</style>