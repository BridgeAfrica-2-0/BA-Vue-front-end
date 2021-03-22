<template>
  <div>
    <b-container fluid>
      <img
        src="@/assets/img/banner.jpg"
        class="img-fluid header-pic"
      />
      <b-container fluid="md">
        <b-row class="mt-md-2">
          <b-col md="6" class="m-0 p-0">
            <b-avatar
              src="https://placekitten.com/300/300"
              class="float-left img-avatar"
              badge-variant="primary"
            ></b-avatar>
            <b-icon
              icon="camera-fill"
              class="avatar-header-icon btn cursor-pointer"
              v-b-modal.modal-4
            ></b-icon>

            <b-modal id="modal-4" title="Upload Profile Picture">
              <div class="w3-container">
                <div class="row pb-3">
                  <div
                    class="col-sm-6 text-center"
                    style="border-right:1px solid #dee2e6;"
                  >
                    <h1>
                      <fas-icon class="primary" :icon="['fas', 'upload']" />
                    </h1>
                    <div>
                      <input type="file" id="img" name="img" accept="image/*" />
                    </div>
                    <h4>Upload a New picture</h4>
                  </div>

                  <div class="col-sm-6 text-center">
                    <h1>
                      <fas-icon class="primary" :icon="['fas', 'edit']" />
                    </h1>
                    <h4>Edit Your New picture</h4>
                  </div>
                </div>
              </div>
            </b-modal>
            <div class="my-auto">
              <div class="text-box">
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
                <ul
                  class="navbar-nav pull-right purple float-right position-loup mr-4"
                >
                  <li class="nav-item dropdown">
                    <b-dropdown
                      size="sm"
                      class=""
                      variant="link"
                      toggle-class="text-decoration-none"
                      no-caret
                    >
                      <template #button-content>
                        <fas-icon
                          class="drop-color font-weight-bolder"
                          :icon="['fas', 'ellipsis-h']"
                        />
                      </template>
                      <b-dropdown-item href="#">
                        <fas-icon
                          class="drop-color font-weight-bolder"
                          :icon="['fas', 'user-plus']"
                        />
                        Community</b-dropdown-item
                      >
                      <b-dropdown-item href="#">
                        <fas-icon
                          class="drop-color font-weight-bolder"
                          :icon="['fas', 'comment']"
                        />
                        Message</b-dropdown-item
                      >
                      <b-dropdown-item href="#">
                        <b-dropdown
                          size="sm"
                          class=""
                          variant="link"
                          toggle-class="text-decoration-none"
                          no-caret
                        >
                          <template #button-content>
                            <fas-icon
                              class="drop-color font-weight-bolder"
                              :icon="['fas', 'ellipsis-h']"
                            />
                            Options
                          </template>
                          <b-dropdown-item href="#">
                            <fas-icon
                              class="drop-color font-weight-bolder"
                              :icon="['fas', 'user-plus']"
                            />
                            Community</b-dropdown-item
                          >
                          <b-dropdown-item href="#">
                            <fas-icon
                              class="drop-color font-weight-bolder"
                              :icon="['fas', 'comment']"
                            />
                            Message</b-dropdown-item
                          >
                          <b-dropdown-item href="#">
                            <fas-icon
                              class="drop-color font-weight-bolder"
                              :icon="['fas', 'trash-alt']"
                            />
                            Message</b-dropdown-item
                          >
                        </b-dropdown>
                      </b-dropdown-item>
                    </b-dropdown>
                  </li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col md="6" class="">
            <div class="my-auto options">
              <span class="float-right">
                <b-button class="mr-1" variant="success">
                  <b-icon-person-plus-fill></b-icon-person-plus-fill>
                  Community</b-button
                >
                <b-button class="mr-1 text-light" variant="warning"
                  ><b-icon-chat-fill></b-icon-chat-fill> Message</b-button
                >
                <b-dropdown id="dropdown-1" class="" variant="primary">
                  <template #button-content>
                    <b-icon-three-dots></b-icon-three-dots>
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
.avatar-header-icon {
  width: 2em;
  height: 2em;
  position: absolute;
  left: 97px;
  top: 81px;
  background-color: #e75c18;
  color: white;
  border-radius: 24px;
  padding: 6px;
}

.text-box {
  margin-top: 1.5rem;
  text-align: left;
}

.position-loup {
  display: none;
}

.img-avatar {
  width: 8em;
  height: 8em;
  margin-top: 10px;
}

@media (max-width: 575.98px) {
  .img-avatar {
    width: 5em;
    height: 5em;
    margin-top: 5px;
  }

  .options {
    display: none;
  }

  .avatar-header-icon {
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    left: 63px;
    top: 51px;
    background-color: #e75c18;
    color: white;
    border-radius: 24px;
    padding: 4px;
  }

  .text-box {
    margin: 0px;
    margin-top: 7px;
    text-align: left;
  }

  .position-loup {
    margin-top: -27px;
    display: inherit;
  }
}
@media (min-width: 768px) {
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
}
@media (min-width: 1400px) {
  .img-avatar {
    width: 8em;
    height: 8em;
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
    font-size: 70px;
    font-weight: 700;
    z-index: 1;
    bottom: 5px;
    right: 10px;
  }
}
</style>
