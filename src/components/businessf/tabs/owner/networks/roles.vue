<template>
  <b-container>
    <h5 class="a-text">Assign Roles</h5>

    <hr class="black" width="100%" />

    <b-container class="b-bottom">
      <b-row>
        <b-col cols="6" md="4">
          <b-form-group
            label-cols-lg="3"
            label="User"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-select v-model="selected">
              <b-form-select-option :value="null">Admin</b-form-select-option>
              <b-form-select-option value="a">User</b-form-select-option>
            </b-form-select>
          </b-form-group>
        </b-col>

        <b-col cols="6" md="4">
          <b-form-group
            label-cols-lg="3"
            label="Role"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-select v-model="selected" class="mb-3">
              <b-form-select-option :value="null">Admin</b-form-select-option>
              <b-form-select-option value="a">User</b-form-select-option>
            </b-form-select>
          </b-form-group>
        </b-col>

        <b-col cols="6" md="4">
          <b-button variant="primary"  block class="">Assign</b-button>
        </b-col>
      </b-row>

      <p class="a-text">
        Admin can manage all aspects of the Business Identity. They can create
        posts and send messages through inbox. They can respond to the delete
        comments, Approve posts, view insights, manage the business settings,
        update Business profile, assign roles and payments.
      </p>
      <br />
      <p class="a-text">
        Editor can create posts and send messages through inbox, They can
        respond to and delete comments, Approve posts, view insights
      </p>
    </b-container>

    <div class="b-bottom">
      <b-container>
        <h5 class="a-text">Existing Admins</h5>
        <b-list-group>
          <b-list class="d-flex align-items-center m-list">
            <b-avatar
              class="mr-3"
              src="https://business.bridgeafrica.info/assets/img/team/3.png"
              size="3.5em"
            ></b-avatar>
            <span class="mr-auto">J. Circlehead</span>
            <span>
              <div>
                <b-dropdown
                  size="lg"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <b-icon
                      icon="three-dots-vertical"
                     
                      font-scale="1"
                    ></b-icon>
                  </template>
                  <b-dropdown-item href="#">Edit</b-dropdown-item>
                  <b-dropdown-item href="#"> Delete </b-dropdown-item>
                </b-dropdown>
              </div>
            </span>
          </b-list>

          <b-list class="d-flex align-items-center">
            <b-avatar
              variant="primary"
              text="BV"
              class="mr-3"
              size="4em"
            ></b-avatar>
            <span class="mr-auto">itz blec blec</span>
            <span>
              <div>
                <b-dropdown
                  size="lg"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <b-icon
                      icon="three-dots-vertical"
                     
                      font-scale="1"
                    ></b-icon>
                  </template>
                  <b-dropdown-item href="#">Edit</b-dropdown-item>
                  <b-dropdown-item href="#"> Delete </b-dropdown-item>
                </b-dropdown>
              </div>
            </span>
          </b-list>
        </b-list-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <h5 class="a-text">Existing Editors</h5>
        <b-list-group>
          <b-list class="d-flex align-items-center m-list">
            <b-avatar
              class="mr-3"
              src="https://business.bridgeafrica.info/assets/img/team/3.png"
              size="3.5em"
            ></b-avatar>
            <span class="mr-auto">J. Circlehead</span>
            <span>
              <div>
                <b-dropdown
                  size="lg"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <b-icon
                      icon="three-dots-vertical"
                     
                      font-scale="1"
                    ></b-icon>
                  </template>
                  <b-dropdown-item href="#">Edit</b-dropdown-item>
                  <b-dropdown-item href="#"> Delete </b-dropdown-item>
                </b-dropdown>
              </div>
            </span>
          </b-list>

          <b-list class="d-flex align-items-center">
            <b-avatar
              variant="primary"
              text="BV"
              class="mr-3"
              size="4em"
            ></b-avatar>
            <span class="mr-auto">itz blec blec</span>
            <span>
              <div>
                <b-dropdown
                  size="lg"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <b-icon
                      icon="three-dots-vertical"
                     
                      font-scale="1"
                    ></b-icon>
                  </template>
                  <b-dropdown-item href="#">Edit</b-dropdown-item>
                  <b-dropdown-item href="#"> Delete </b-dropdown-item>
                </b-dropdown>
              </div>
            </span>
          </b-list>
        </b-list-group>
      </b-container>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "roles"
};
</script>

<style scoped>
.black{
  color: black;
  background-color: black;
}
.m-list {
  margin-bottom: 15px;
  margin-top: 10px;
}

.b-bottom {
  margin-top: 20px;
  margin-bottom: 30px;
  padding-bottom: 10px;
  width: 100%;

  border-bottom: 1px solid;
}

.tabs {
  width: 100%;
}

.f-left {
  float: left;
}

.a-button-l {
  align-content: right;
  float: right;
}
.a-text {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}

@media only screen and (max-width: 768px) {
  .settings {
    top: -5px;
    left: -20px;
  }
}
</style>
