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
            <b-form-select v-model="name">
              <div v-for="following in followings" :key="following.id">
                <b-form-select-option :value="NULL">Select Follower</b-form-select-option>
                <b-form-select-option :value="following.name">{{following.name}}</b-form-select-option>
              </div>
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
            <b-form-select v-model="role" class="mb-3">
                <b-form-select-option :value="Admin">Admin</b-form-select-option>
                <b-form-select-option :value="Editor">Editor</b-form-select-option>
                <b-form-select-option :value="Users">Users</b-form-select-option>
            </b-form-select>
          </b-form-group>
        </b-col>

        <b-col>
          <b-button variant="primary" class="" @click="assignRole()">Assign</b-button>
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
import { validationMixin } from "vuelidate";
import axios from "axios";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "roles",
  mixins: [validationMixin],
  data() {
			return {
				followings:'',
				allRoles:'',

        form: {
          name: "",
          role: "",
        },
			}
	},
  validations: {
    form: {
      name: {
        required,
      },

      role: {
        required,
      },
    },
  },

  computed: {
    followers() {
      return this.$store.getters.getfollowers.followers;
    },
    roles() {
      return this.$store.getters.getroles.roles;
    },
  },

  
  mounted(){
    this.getFollowers() 
    this.getRoles() 
  },

  methods:{
     
    getFollowers() {
    this.$store
      .dispatch("businessRole/getfollowers")
      .then(response => {
        this.followings=response.data.data;
      })
      .catch(err => {
        console.log({ err: err });
      });
    },
    getRoles() {
    this.$store
      .dispatch("businessRole/getroles")
      .then(response => {
        this.allRoles=response.data.data;
      })
      .catch( err => {
        console.log({ err: err });
      });
    },
    assignRole: function(){
      return new Promise((resolve, reject) => {
        let formData = new FormData();
        formData.append("name", this.form.name);
        formData.append("role", this.form.role);

        this.axios.post("role/assignRole/{business}", formData)
        .then(response => {
          console.log(response);

          this.flashMessage.show({
            status: "success",
            message: "New Role Assigned"
          });
            
          resolve(true);
        })
        .catch(err => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: "Unable to Assigned New Role"
          });
          resolve(false);
        });
      });
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
