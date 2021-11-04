<template>
  <b-container>
    <flashMessage />

    <div class="">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Privacy"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0 text"
        >
          <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              class="pt-2 text"
              v-model="privacy"
              :options="['Public', 'Private']"
              :aria-describedby="ariaDescribedby"
            ></b-form-radio-group>
          </b-form-group>
          <div class="mt-3">{{ privacy }}</div>
        </b-form-group>
      </b-container>
      <hr />
    </div>

    <div class="">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Posting Permissions"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0 text"
        >
          <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
            <b-form-radio-group
              :options="options"
              v-model="permissions"
              :aria-describedby="ariaDescribedby"
              name="radio-options"
              @change="check"
            ></b-form-radio-group>
          </b-form-group>
          <div class="mt-3">{{ permissions }}</div>
        </b-form-group>
      </b-container>

      <hr />
    </div>

    <div>
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Post Approval"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-checkbox-group
            class="text"
            name="checkbox-options"
            :options="lists"
            v-model="approval"
            :aria-describedby="ariaDescribedby"
            @change="test"
          >
          </b-form-checkbox-group>
        </b-form-group>
        <div class="mt-3">{{ approval }}</div>
      </b-container>
      <hr />
    </div>

    <b-container>
      <b-link href="#foo" class="f-left text" v-on:click="deleteNetwork">Delete Network</b-link>
    </b-container>

    <div class="b-bottomn">
      <b-button variant="primary" class="a-button-l text" @click="save" :loading="load">Save Changes</b-button>
      <br />
    </div>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'general',
  data: () => ({
    load: false,
    permissions: '',
    approval: '',
    privacy: '',
    networkId: '',
    options: [
      {
        text: 'Admin Only',
        value: 'admin',
      },
      {
        text: 'Editor',
        value: 'editor',
      },
      {
        text: 'Member',
        value: 'member',
      },
      {
        text: 'Editor And Member',
        value: 'editor and member',
      },
    ],
    lists: [
      {
        text: 'Approval by admin',
        value: 'admin approval',
        disabled: false,
      },
      {
        text: 'Approval by editor and admin',
        value: 'editor and admin approval',
        disabled: false,
      },
      {
        text: 'Approve only member post',
        value: 'only member post approval',
        disabled: false,
      },
    ],
  }),

  computed: {
    ...mapGetters({
      getNetwork: 'networkSetting/getNetwork',
    }),
  },

  methods: {
    ...mapActions({
      generalSave: 'networkSetting/generalSave',
    }),

    check() {
      if (this.permissions == 'admin') {
        this.lists[0].disabled = true;
        this.lists[1].disabled = true;
        this.lists[2].disabled = true;
      } else if (this.permissions == 'editor') {
        this.lists[0].disabled = false;
        this.lists[1].disabled = false;
        this.lists[2].disabled = true;
      } else if (this.permissions == 'member') {
        this.lists[0].disabled = true;
        this.lists[1].disabled = true;
        this.lists[2].disabled = false;
      } else if (this.permissions == 'editor and member') {
        this.lists[0].disabled = false;
        this.lists[1].disabled = false;
        this.lists[2].disabled = true;
      }
    },

    save() {
      this.laod = true;
      this.networkId = this.getNetwork.id;
      let payload = {
        networkId: this.networkId,
        privacy: this.privacy,
        post_permission: this.permissions,
        post_approval: this.approval,
      };
      this.generalSave(payload)
        .then(() => {
          this.load = false;
          alert('Successful');
        })
        .catch(err => {
          this.load = false;
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.b-bottom {
  margin-top: 20px;
  margin-bottom: 30px;
  padding-bottom: 10px;

  border-bottom: 0.5px solid;
  border-color: gray;
}

.b-bottomn {
  margin-bottom: 30px;
  padding-bottom: 10px;
}

.f-left {
  float: left;
}

.tabs {
  width: 100%;
}

.a-button-l {
  margin-bottom: 1000px;
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
  .btn {
    font-size: 12px;
  }
}
</style>
