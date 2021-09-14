<template>
  <b-container>
    <flashMessage />
    <h5 class="a-text">Assign Role</h5>

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
              v-model="form.follower"
              :options="followers.people[0].user_followers"
              name="followers"
              value-field="followers"
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
              v-model="form.role"
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
          <b-button variant="primary" class="assign-btn" @click="assignRole()"
            >Assign</b-button
          >
        </b-col>
      </b-row>

      <p class="text">
        Admin can manage all aspects of the Business Identity. They can create
        posts and send messages through inbox. They can respond to the delete
        comments, Approve posts, view insights, manage the business settings,
        update Business profile, assign roles and payments.
      </p>
      <br />
      <p class="text">
        Editor can create posts and send messages through inbox, They can
        respond to and delete comments, Approve posts, view insights
      </p>
    </b-container>

    <div class="b-bottom">
      <b-container>
        <h5 class="a-text">Existing Editors</h5>
        <span v-for="editor in editors" :key="editor.id">
          <span class="d-flex align-items-center m-list">
            <b-avatar class="mr-3 profile-pic"></b-avatar>
            <span class="mr-auto username">{{ editors.name }}</span>
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
                    >Edit</b-dropdown-item
                  >
                  <b-dropdown-item
                    href="#"
                    @click="
                      $bvModal.show('delete-editor'), selectObject(editor)
                    "
                  >
                    Delete
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
          EDIT EDITOR: {{ clickedObject.name }}
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
              v-model="form.role"
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
          @click="$bvModal.hide('edit-editor'), editEditor(clickedObject)"
          >EDIT</b-button
        >
      </b-modal>

      <b-modal id="delete-editor" hide-footer>
        <template #modal-title> !!! <code>WARRING</code> !!! </template>
        <div class="d-block text-center">
          <h3>You Are About To Delete: {{ clickedObject.name }}!</h3>
        </div>
        <b-button
          class="mt-3"
          block
          @click="$bvModal.hide('delete-editor'), deleteEditor(clickedObject)"
          >Delete</b-button
        >
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
        name: "",
        role: [],
        follower: []
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
        .dispatch("NetworkSettings/geteditors", this.url)
        .then(() => {
          console.log("ohh yeah");
        })
        .catch(err => {
          console.log({ err: err });
        });
    },
    editEditor: function(clickedObject) {
      let formData = new FormData();
      formData.append("name", clickedObject.name);
      formData.append("role", this.form.role);
      this.axios
        .post("/network/role/update/" + this.url, formData)
        .then(() => {
          console.log("ohh yeah");
          this.flashMessage.show({
            status: "success",
            message: "New Role Assigned"
          });
        })
        .catch(err => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: "Unable to Assigned New Role"
          });
        });
    },
    assignRole: function() {
      this.axios
        .post("/network/role/update/2", this.form)
        .then(() => {
          console.log("ohh yeah");
          this.flashMessage.show({
            status: "success",
            message: "New Role Assigned"
          });
        })
        .catch(err => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: "Unable to Assigned New Role"
          });
        });
    },
    deleteEditor: function(editor) {
      var formData = this.toFormData(editor);
      this.axios
        .post("#", formData)
        .then(() => {
          console.log("ohh yeah");
          this.flashMessage.show({
            status: "success",
            message: "Editor Deleted"
          });
        })
        .catch(err => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: "Unable To Delete Editor"
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
  /*align-content: right;*/
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
