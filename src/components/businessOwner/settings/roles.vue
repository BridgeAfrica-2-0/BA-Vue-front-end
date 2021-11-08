<template>
  <b-container>
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
              v-model="form.name"
              :options="followers.user_followers"
              name="followers"
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
            <b-form-select v-model="selected" class="mb-3">
              <b-form-select-option :value="null">Admin</b-form-select-option>
              <b-form-select-option value="a">User</b-form-select-option>
            </b-form-select>
          </b-form-group>
        </b-col>

        <b-col>
          <b-button variant="primary" class="" @click="assignRole()">
            <b-spinner v-if="SPassign" small type="grow"></b-spinner>Assign
          </b-button>
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
        <div v-if="editors != 0">
          <b-list-group v-for="editor in editors" :key="editor.id">
            <b-list class="d-flex align-items-center m-list">
              <b-avatar 
                class="mr-3" 
                :text="editor.name.charAt(0)"
                :src="editor.profile_picture"
                size="4em"
              ></b-avatar>
              <span class="mr-auto">{{editor.name}}</span>
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
                    <b-dropdown-item href="#" @click="$bvModal.show('edit-editor'); selectObject(editor)">Edit</b-dropdown-item>
                    <b-dropdown-item href="#" @click="$bvModal.show('delete-editor'); selectObject(editor)"> Delete </b-dropdown-item>
                  </b-dropdown>
                </div>
              </span>
            </b-list>
          </b-list-group>
        </div>
        <div v-else>
          <b-card bg-variant="white" text-variant="black" class="text-center">
            <b-card-text>No Editor Available.</b-card-text>
          </b-card>
        </div>

        <div>
          <b-modal id="edit-editor" hide-footer>
            <template #modal-title>
              EDIT EDITOR: {{clickedObject.name}}
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
            <b-button class="mt-3" block variant="primary" @click="$bvModal.hide('edit-editor'); editEditor(clickedObject)">EDIT</b-button>
          </b-modal>

          <b-modal id="delete-editor" hide-footer>
            <template #modal-title>
              !!! <code>WARRING</code> !!!
            </template>
            <div class="d-block text-center">
              <h3>You Are About To Delete: {{clickedObject.name}}!</h3>
            </div>
            <b-button class="mt-3" block @click="$bvModal.hide('delete-editor'); deleteEditor(clickedObject)">Delete</b-button>
          </b-modal>
        </div>
      </b-container>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "roles",
  data() {
			return {
        url: null,
        SPassign: false,
        clickedObject: {},
        form: {
          name: "",
          role: "",
        },
        
			}
	},

  computed: {
    followers() {
      return this.$store.state.businessRole.followers;
    },
    roles() {
       return this.$store.state.businessRole.roles;
    },
    editors() {
      return this.$store.state.businessRole.editors;
    },
  },
 
  mounted(){
    this.url = this.$route.params.id
    this.getFollowers() 
    this.getRoles() 
    this.displayEditor() 
  },

  methods:{
     
    getFollowers() {
    this.$store
      .dispatch("businessRole/getfollowers", this.url)
      .then(() => {
        console.log('ohh yeah');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },
    getRoles() {
    this.$store
      .dispatch("businessRole/getroles")
      .then(() => {
        console.log('ohh yeah');
      })
      .catch( err => {
        console.log({ err: err });
      });
    },
    displayEditor() {
    this.$store
      .dispatch("businessRole/geteditors", this.url)
      .then(() => {
        console.log('ohh yeah');
      })
      .catch( err => {
        console.log({ err: err });
      });
    },
    editEditor: function(clickedObject){
      let formData = new FormData();
      formData.append('role', this.form.role);
      this.$store
        .dispatch("businessRole/updateEditor", {
          path: "business/role/update/"+clickedObject.id,
          formData: formData,
        })
        .then(({ data }) => {
        console.log(data);
        console.log('ohh yeah');
        this.displayEditor();
        this.flashMessage.show({
          status: "success",
          message: "New Role Updated"
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.flashMessage.show({
          status: "error",
          message: "Unable to Update New Role"
        });
      });
		},
    assignRole: function(){
      this.SPassign = true;
      let formData = new FormData();
      formData.append('user_id', this.form.name);
      formData.append('role_id', this.form.role);
      console.log('name: ', this.form.name);
      console.log('role: ', this.form.role);
      console.log(formData);
      this.$store
        .dispatch("businessRole/updateEditor", {
          path: "business/role/assignRole/"+this.url,
          formData: formData,
        })
        .then(({ data }) => {
        console.log(data);
        console.log('ohh yeah');
        this.getFollowers();
        this.displayEditor();
        this.SPassign = false;
        this.flashMessage.show({
          status: "success",
          message: "New Role Assigned"
        });
          
      })
      .catch(err => {
        console.log({ err: err });
        this.SPassign = false;
        this.flashMessage.show({
          status: "error",
          message: "Unable to Assigned New Role"
        });
      });
		},
    deleteEditor: function(clickedObject){
      this.$store
        .dispatch("businessRole/deleteEditor", {
          path: "business/role/delete/"+clickedObject.id,
        })
        .then(({ data }) => {
        console.log(data);
        console.log('ohh yeah');
        this.displayEditor();
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

    selectObject(object){
			this.clickedObject = object
		},

  },

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
  .assign-btn{
    margin-top:30px
  }
}
</style>