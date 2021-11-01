<template>
  <b-container>
    <h5 class="a-text">{{$t("buinessf.Assign_Role")}}</h5>

    <b-container class="b-bottom">
      <b-row>
        <b-col cols="5">
          <b-form-group
            label-cols-lg="3"
            label="$t('businessf.User')"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-select v-model="selected">
              <b-form-select-option :value="null">{{$t("buinessf.Admin")}}</b-form-select-option>
              <b-form-select-option value="a">{{$t("buinessf.User")}}</b-form-select-option>
            </b-form-select>
          </b-form-group>
        </b-col>

        <b-col>
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

        <b-col>
          <b-button variant="primary" class="">{{$t("buinessf.Assign")}}</b-button>
        </b-col>
      </b-row>

      <p class="a-text">
        {{$t("buinessf.Admin_can_manage_all_aspects_of_the_Business_Identity")}}.
        {{$t("buinessf.They_can_create_posts_and_send_messages_through_inbox")}}. 
        {{$t("buinessf.They_can_respond_to_the_delete_comments, ")}}
        {{$t("buinessf.Approve_posts,")}}
         {{$t("buinessf.view_insights,")}} 
        {{$t("buinessf.manage_the_business_settings")}},
        {{$t("buinessf.update_Business_profile")}}, 
        {{$t("buinessf.assign_roles_and_payments")}}.
      </p>
      <br />
      <p class="a-text">
        {{$t("buinessf.Editor_can_create_posts_and_send_messages_through_inbox,")}} 
        {{$t("buinessf.They_can_respond_to_and_delete_comments,")}} 
        {{$t("buinessf.Approve_posts,")}} 
        {{$t("buinessf.view_insights")}}
      </p>
    </b-container>

    <div class="b-bottom">
      <b-container>
        <h5 class="a-text">{{$t("buinessf.Existing_Admins")}}</h5>
        <b-list-group>
          <b-list class="d-flex align-items-center m-list">
            <b-avatar class="mr-3" size="4em"></b-avatar>
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
                      animation="cylon-vertical"
                      font-scale="1"
                    ></b-icon>
                  </template>
                  <b-dropdown-item href="#">{{$t("buinessf.Edit")}}</b-dropdown-item>
                  <b-dropdown-item href="#">{{$t("buinessf.Delete")}}  </b-dropdown-item>
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
                      animation="cylon-vertical"
                      font-scale="1"
                    ></b-icon>
                  </template>
                  <b-dropdown-item href="#">{{$t("buinessf.Edit")}}</b-dropdown-item>
                  <b-dropdown-item href="#">{{$t("buinessf.Delete")}}  </b-dropdown-item>
                </b-dropdown>
              </div>
            </span>
          </b-list>
        </b-list-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <h5 class="a-text">{{$t("buinessf.Edit_Existing_Editors")}}</h5>
        <b-list-group>
          <b-list class="d-flex align-items-center m-list">
            <b-avatar class="mr-3" size="4em"></b-avatar>
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
                      animation="cylon-vertical"
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
                      animation="cylon-vertical"
                      font-scale="1"
                    ></b-icon>
                  </template>
                  <b-dropdown-item href="#">{{$t("buinessf.Edit")}}</b-dropdown-item>
                  <b-dropdown-item href="#">{{$t("buinessf.Delete")}} </b-dropdown-item>
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
