<template>
  <div>
    <b-container fluid>
      <img
        src="@/assets/img/banner.jpg"
        class="img-fluid header-pic"
        alt="Kitten"
      />
      <div>
        <b-avatar
          src="https://placekitten.com/300/300"
          class="owner-profile-image-profile float-left"
          badge-variant="primary"
        >
          <template #badge
            ><b-icon icon="camera-fill" class="avatar-header-icon"></b-icon
          ></template>
        </b-avatar>
        <div class="">
          <div>
            <span>
              <h5
                class="font-weight-bolder m-0 p-0 d-inline-block header-text1"
              >
                User Name
              </h5>
              <br />
              <p class="m-0  d-inline-block header-text2">
                @User Name Alias
              </p>
            </span>
            <span>
              <b-button-group class="header-group" size="sm">
                <b-button variant="outline-primary">
                  <b-icon icon="person-plus-fill"></b-icon>
                  <span class="show">Follow</span>
                </b-button>
                <b-button variant="outline-primary">
                  <b-icon icon="chat-square-dots-fill"></b-icon>
                  <span class="show"> Message</span>
                </b-button>
                <b-dropdown variant="outline-primary">
                  <template #button-content>
                    <b-icon icon="three-dots" aria-hidden="true"></b-icon>
                  </template>
                  <b-dropdown-item-button>
                    <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                    Locked <span class="sr-only">(Click to unlock)</span>
                  </b-dropdown-item-button>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-group hseader="Choose options" class="small">
                    <b-dropdown-item-button>
                      <b-icon icon="blank" aria-hidden="true"></b-icon>
                      Option A <span class="sr-only">(Not selected)</span>
                    </b-dropdown-item-button>
                    <b-dropdown-item-button>
                      <b-icon icon="check" aria-hidden="true"></b-icon>
                      Option B <span class="sr-only">(Selected)</span>
                    </b-dropdown-item-button>
                    <b-dropdown-item-button>
                      <b-icon icon="blank" aria-hidden="true"></b-icon>
                      Option C <span class="sr-only">(Not selected)</span>
                    </b-dropdown-item-button>
                  </b-dropdown-group>
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item-button>Some action</b-dropdown-item-button>
                  <b-dropdown-item-button
                    >Some other action</b-dropdown-item-button
                  >
                  <b-dropdown-divider></b-dropdown-divider>
                  <b-dropdown-item-button variant="danger">
                    <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                    Delete
                  </b-dropdown-item-button>
                </b-dropdown>
              </b-button-group>
            </span>
          </div>
        </div>
      </div>
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
    /*   box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important; */
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
    /*   box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important; */
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
    bottom: 10px;
    right: 10px;
  }
}
@media (min-width: 1400px) {
  .owner-profile-image-profile {
    margin: -103px 10px 0px 228px;
    z-index: 9;
    width: 12rem;
    height: 12rem;
    border: 3px solid #fff;
    /*   box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important; */
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
    width: 3em;
    height: 3em;
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
    bottom: 5px;
    right: 10px;
  }
}
</style>
