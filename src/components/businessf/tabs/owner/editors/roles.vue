<template>
  <b-container>
    <flashMessage />
    <h5 class="a-text">{{ $t("general.Assign_Role") }}</h5>

    <b-container class="b-bottom">
      <b-row>
        <b-col cols="5">
          <b-form-group
            label-cols-lg="3"
            label="User"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-select
              id="follower"
              v-model="form.user_id"
              :options="followers"
              name="user"
              value-field="id"
              text-field="name"
              class="mb-3"
            >
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
            <b-form-select
              id="role"
              v-model="form.role_id"
              :options="roles"
              name="role"
              value-field="id"
              text-field="name"
              class="mb-3"
            >
            </b-form-select>
          </b-form-group>
        </b-col>

        <b-col>
          <b-button
            variant="primary"
            class="assign-btn"
            @click="assignRole()"
            >{{ $t("general.Assign") }}</b-button
          >
        </b-col>
      </b-row>

      <p class="text">
        {{
          $t("general.Admin_can_manage_all_aspects_of_the_Business_Identity")
        }}.
        {{
          $t("general.They_can_create_posts_and_send_messages_through_inbox")
        }}
        . {{ $t("general.They_can_respond_to_the_delete_comments") }},
        {{ $t("general.Approve_posts") }}, {{ $t("general.view_insights") }} ,
        {{ $t("general.manage_the_business_settings") }},
        {{ $t("general.update_Business_profile") }},
        {{ $t("general.assign_roles_and_payments") }}.
      </p>
      <br />
      <p class="text">
        {{
          $t("general.Editor_can_create_posts_and_send_messages_through_inbox")
        }}, {{ $t("general.They_can_respond_to_and_delete_comments") }},
        {{ $t("general.Approve_posts") }} ,
        {{ $t("general.view_insights") }}
      </p>
    </b-container>

    <div class="b-bottom">
      <b-container>
        <h5 class="a-text">Existing Editors</h5>
        <span v-for="editor in editors" :key="editor.id">
          <span class="d-flex align-items-center m-list">
            <b-avatar class="mr-3 profile-pic" :src="editor.picture"></b-avatar>
            <span class="mr-auto username">{{ editor.name }}</span>
            <span>
              <div>
                <b-dropdown
                  size="lg"
                  variant="link"
                  toggle-class="text-decoration-none"
                  no-caret
                >
                  <template #button-content>
                    <b-icon icon="three-dots-vertical" font-scale="1"></b-icon>
                  </template>
                  <b-dropdown-item
                    href="#"
                    @click="$bvModal.show('edit-editor'), selectObject(editor)"
                    >{{ $t("general.Edit") }}</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    @click="
                      $bvModal.show('delete-editor'), selectObject(editor)
                    "
                  >
                    {{ $t("general.Delete") }}
                  </b-dropdown-item>
                </b-dropdown>
              </div>
            </span>
          </span>
        </span>
      </b-container>
    </div>

    <div>
      <b-modal id="edit-editor" hide-footer>
        <template #modal-title>
          {{ $t("general.EDIT_EDITOR") }}: {{ clickedObject.name }}
        </template>
        <div class="d-block text-center">
          <b-form-group
            label-cols-lg="3"
            label="Role"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-select
              id="role"
              v-model="form.role_id"
              :options="roles"
              name="role"
              value-field="id"
              text-field="name"
              class="mb-3"
            >
            </b-form-select>
          </b-form-group>
        </div>
        <b-button
          class="mt-3"
          block
          variant="primary"
          @click="editEditor(clickedObject)"
          >{{ $t("general.EDIT") }}</b-button
        >
      </b-modal>

      <b-modal id="delete-editor" hide-footer>
        <template #modal-title> !!! <code>WARRING</code> !!! </template>
        <div class="d-block text-center">
          <h3>
            {{ $t("general.You_Are_About_To_Delete") }}:
            {{ clickedObject.name }}!
          </h3>
        </div>
        <b-button class="mt-3" block @click="deleteEditor(clickedObject)">{{
          $t("general.Delete")
        }}</b-button>
      </b-modal>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "roles",
  data() {
    return {
      url: this.$route.params.id,
      clickedObject: {},
      form: {
        user_id: "",
        role_id: "",
        follower: ""
      }
    };
  },
  computed: {
    followers() {
      return this.$store.state.NetworkSettings.followers;
    },
    roles() {
      return this.$store.state.NetworkSettings.roles;
    },
    editors() {
      return this.$store.state.NetworkSettings.editors;
    }
  },

  mounted() {
    this.getFollowers();
    this.getRoles();
    this.displayEditor();
  },
  methods: {
    getFollowers() {
      this.$store
        .dispatch("NetworkSettings/getfollowers")
        .then(() => {
          console.log("ohh yeah");
        })
        .catch(err => {
          console.log({ err: err });
        });
    },
    getRoles() {
      this.$store
        .dispatch("NetworkSettings/getroles")
        .then(() => {
          console.log("ohh yeah");
        })
        .catch(err => {
          console.log({ err: err });
        });
    },
    displayEditor() {
      this.$store
        .dispatch("NetworkSettings/geteditors")
        .then(() => {
          console.log("ohh yeah");
        })
        .catch(err => {
          console.log({ err: err });
        });
    },
    editEditor: function(clickedObject) {
      this.$bvModal.hide("edit-editor");
      let formData = new FormData();
      formData.append("user_id", clickedObject.user_id);
      formData.append("role_id", this.form.role_id);
      this.axios
        .post("/network/roles/" + this.url + "/assign", formData)
        .then(() => {
          this.displayEditor();
          console.log("ohh yeah");
          this.flashMessage.show({
            status: "success",
            message: this.$t("general.New_Role_Assigned")
          });
        })
        .catch(err => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: this.$t("general.Unable_to_Assigned_New_Role")
          });
        });
    },
    assignRole: function() {
      console.log(this.url);
      console.log(this.form);
      this.axios
        .post("/network/assignRole/" + this.url, this.form)
        .then(() => {
          this.displayEditor();
          console.log("ohh yeah");
          this.flashMessage.show({
            status: "success",
            message: this.$t("general.New_Role_Assigned")
          });
        })
        .catch(err => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: this.$t("general.Unable_to_Assigned_New_Role")
          });
        });
    },
    deleteEditor: function(editor) {
      this.$bvModal.hide("delete-editor");
      var formData = this.toFormData(editor);
      this.axios
        .delete("/network/roles/" + this.editor.user_id)
        .then(() => {
          this.displayEditor();
          console.log("ohh yeah");
          this.flashMessage.show({
            status: "success",
            message: this.$t("general.Editor_Deleted")
          });
        })
        .catch(err => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: this.$t("general.Unable_To_Delete_Editor")
          });
        });
    },

    toFormData: function(obj) {
      var form_data = new FormData();
      for (var key in obj) {
        form_data.append(key, obj[key]);
      }
      return form_data;
    },
    selectObject(object) {
      this.clickedObject = object;
    }
  }
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

  .assign-btn {
    margin-top: 30px;
  }
}
</style>
