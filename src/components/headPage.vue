<template>
  <div>
    <b-container fluid>
      <img
        src="@/assets/img/banner.jpg"
        class="img-fluid header-pic"
        alt="Kitten"
      />
      <b-container fluid="md">
        <b-row class="mt-md-2">
          <b-col cols="6">
            <b-avatar
              src="https://placekitten.com/300/300"
              class="float-left"
              badge-variant="primary"
              size="8rem"
            ></b-avatar>
            <b-icon icon="camera-fill" class="avatar-header-icon"></b-icon>
            <div class="my-auto">
              <div class="mt-4">
                <span>
                  <h5
                    class="font-weight-bolder m-0 p-0 ml-2 d-inline-block header-text1"
                  >
                    User Name
                  </h5>
                  <br />
                  <p class="m-0 ml-2 d-inline-block header-text2">
                    Website
                  </p>
                  <br />
                  <p class="m-0 ml-2 d-inline-block header-text2">
                    1.5k Community
                  </p>
                </span>
              </div>
            </div>
          </b-col>
          <b-col cols="6" class="">
            <div class="my-auto">
              <span class="float-right">
                <b-button class="mr-1" variant="success">
                  <b-icon-person-plus-fill></b-icon-person-plus-fill>
                  Community</b-button
                >
                <b-button class="mr-1" variant="warning"
                  ><fas-icon class="primary" :icon="['fas', 'comment']" />
                  Message</b-button
                >
                <b-dropdown id="dropdown-1" class="" variant="primary">
                  <template #button-content>
                    <b-icon-three-dots></b-icon-three-dots> Options
                  </template>
                  <b-dropdown-item
                    >Invite Friends On Bridge Africa</b-dropdown-item
                  >
                  <b-dropdown-item>View As</b-dropdown-item>
                </b-dropdown>
              </span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "headPage"
};
</script>

<style scoped>
@media (max-width: 369px) {
  .header-pic {
    height: 100px;
    width: 100%;
  }

  .header-text1 {
    font-size: 14px;
    float: left;
  }

  .header-text2 {
    font-size: 10px;
    float: left;
  }

  .header-group {
    margin-top: -59px;
    margin-left: 102px;
  }

  .owner-profile-image-profile {
    margin: -30px 10px 0px 5px;
    z-index: 9;
    width: 5rem;
    height: 5rem;
    border: 1px solid #e75c18;
  }
  .show {
    display: none;
  }
  .avatar-header-icon {
    width: 2em;
    height: 2em;
  }
}

@media (min-width: 370px) and (max-width: 575px) {
  .header-pic {
    height: 100px;
    width: 100%;
  }

  .header-text1 {
    font-size: 14px;
    float: left;
  }

  .header-text2 {
    font-size: 10px;
    float: left;
  }

  .header-group {
    margin-top: -30px;
    margin-left: 30px;
  }

  .owner-profile-image-profile {
    margin: -30px 10px 0px 5px;
    z-index: 9;
    width: 5rem;
    height: 5rem;
    border: 1px solid #e75c18;
  }
  .show {
    display: none;
  }
  .avatar-header-icon {
    width: 2em;
    height: 2em;
  }
  .b-avatar .b-avatar-badge {
    position: absolute;
    min-height: 1.5em;
    min-width: 1.5em;
    padding: 0.25em;
    line-height: 1;
    border-radius: 10em;
    font-size: 70%;
    font-weight: 700;
    z-index: 1;
    bottom: -2px;
    right: 2px;
  }
}
@media (min-width: 576px) {
  .avatar-header-icon {
    width: 3em;
    height: 3em;
  }
}
@media (min-width: 768px) {
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
}
@media (min-width: 1400px) {
  .owner-profile-image-profile {
    margin: -103px 10px 0px 228px;
    z-index: 9;
    width: 12rem;
    height: 12rem;
    border: 3px solid #fff;
  }

  .header-text1 {
    float: left;
  }

  .header-text2 {
    float: left;
  }

  .header-group {
    float: right;
    margin-top: -20px;
    margin-right: 20px;
  }

  .avatar-header-icon {
    width: 2em;
    height: 2em;
    position: absolute;
    left: 112px;
    top: 81px;
    background-color: #e75c18;
    color: white;
    border-radius: 24px;
    padding: 6px;
  }
}
</style>
