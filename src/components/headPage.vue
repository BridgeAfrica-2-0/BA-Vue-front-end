<template>
  <div>
    <b-container fluid>
      <img src="@/assets/img/banner.jpg" class="img-fluid" alt="Kitten" />
      <b-avatar
        src="https://placekitten.com/300/300"
        class="owner-profile-image-profile float-left"
        badge-variant="primary"
        badge-offset="10px"
      >
        <template #badge><b-icon icon="camera-fill" style="width: 3em;height: 3em;"></b-icon></template>
      </b-avatar>
      <div class="d-inline-block mt-2 float-left">
        <h5 class="font-weight-bolder">User Name</h5>
        <p>@User Name Alias</p>
      </div>
      <b-button-group class="float-right mr-5 mt-2">
        <b-button variant="outline-primary">
          <b-icon icon="person-plus-fill"></b-icon> Follow
        </b-button>
        <b-button variant="outline-primary">
          <b-icon icon="chat-square-dots-fill"></b-icon> Message
        </b-button>
        <b-dropdown variant="outline-primary">
          <template #button-content>
            <b-icon icon="three-dots" aria-hidden="true"></b-icon> More
          </template>
          <b-dropdown-item-button>
            <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
            Locked <span class="sr-only">(Click to unlock)</span>
          </b-dropdown-item-button>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-group header="Choose options" class="small">
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
          <b-dropdown-item-button>Some other action</b-dropdown-item-button>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item-button variant="danger">
            <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
            Delete
          </b-dropdown-item-button>
        </b-dropdown>
      </b-button-group>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "headPage"
};
</script>

<style scoped>
@media (min-width: 576px) {
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
    /*   box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important; */
  }
}
</style>
