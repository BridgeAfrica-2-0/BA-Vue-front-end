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
            <b-form-select v-model="roleAssignment.user">
              <b-form-select-option
                v-for="(member, index) in memberString"
                :key="index"
                >{{ member }}</b-form-select-option
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
      
      <b-form-select v-model="roleAssignment.role" class="mb-3">
              <b-form-select-option
                v-for="(member, index) in roleString"
                :key="index"
                >{{ roleString }}</b-form-select-option
              >
            </b-form-select>
          </b-form-group>
        </b-col>

        <b-col>
          <b-button
            variant="primary"
            class="assign-btn"
            @click="assign(user.id, role.id)"
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
        <span v-for="editor in allEditors" :key="editor.id">
          <span class="d-flex align-items-center m-list">
            <b-avatar class="mr-3 profile-pic"></b-avatar>
            <span class="mr-auto username">J. Circlehead</span>
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
                  <b-dropdown-item href="#">Edit</b-dropdown-item>
                  <b-dropdown-item href="#"> Delete </b-dropdown-item>
                </b-dropdown>
              </div>
            </span>
          </span>

          <span class="d-flex align-items-center">
            <b-avatar
              variant="primary"
              text="BV"
              class="mr-3 profile-pic"
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


  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "roles",
  data: () => ({
    roleString: [],
    memberString: [],
    roleAssignment: {
      user: "",
      role: "",
    },
    networkId: "",
    load: "",
  }),
  async beforeMount() {
    this.getRoles();

    this.allRoles.forEach((role) => {
      this.roleString.push(role);
    });

    this.allMembers.forEach((member) => {
      this.memberString.push(member);
    });
  },
  computed: {
    ...mapGetters({
      getNetwork: "networkSetting/getNetwork",
      allRoles: "networkSetting/allRoles",
      allMembers: "networkSetting/allMembers",
      allEditors: "networkSetting/allEditors",
    }),
  },
  methods: {
    ...mapActions({
      getRoles: "networkSetting/getRoles",
      getMembers: "networkSetting/getMembers",
      assignRole: "networkSetting/assignRole",
      getEditors: "networkSetting/getEditors",
      editEditor: "networkSetting/editEditor",
      deleteEditor: "networkSetting/deleteEditor",
    }),

    assign(user_id, role_id) {
      this.networkId = this.getNetwork.id;
      let payload = {
        networkId: this.networkId,
        user_id: user_id,
        role_id: role_id,
      };
      this.assignRole(payload);
    },

    editEditors(id) {
      this.load = true;
      this.editEditor(id)
        .then(() => {
          this.load = false;
        })
        .catch((err) => {
          this.load = false;
          console.log(err);
        });
    },

    deleteEditors(id) {
      this.load = true;
      this.deleteEditor(id)
        .then(() => {
          this.load = false;
        })
        .catch((err) => {
          this.load = false;
          console.log(err);
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
