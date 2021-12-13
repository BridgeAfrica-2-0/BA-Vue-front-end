<template>
  <b-container v-if="networkinfo != 0">
    

    <div class="">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('network.Privacy')"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0 text"
        >
          <b-form-group class="mb-0" >
            <b-form-radio-group
              class="pt-2 text"
              v-model="networkinfo[0].setting_value"
              :options="['Public', 'Private']"
            ></b-form-radio-group>
          </b-form-group>
          <!-- <div class="mt-3">{{ privacy }}</div> -->
        </b-form-group>
      </b-container>
      <hr />
    </div>

    <div class="">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('network.Posting_Permissions')"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0 text"
        >
          <b-form-group class="mb-0" >
            <b-form-radio-group
              :options="options"
              v-model="networkinfo[1].setting_value"
              name="radio-options"
              @change="check"
            ></b-form-radio-group>
          </b-form-group>
          <!-- <div class="mt-3">{{ permissions }}</div> -->
        </b-form-group>
      </b-container>

      <hr />
    </div>

    <div>
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('network.Post_Approval')"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0"
        >
          <b-form-checkbox-group
            class="text"
            name="checkbox-options"
            :options="lists"
            v-model="networkinfo[2].setting_value"
            @change="test"
          >
          </b-form-checkbox-group>
        </b-form-group>
        <!-- <div class="mt-3">{{ approval }}</div> -->
      </b-container>
      <hr />
    </div>

    <b-container>
      <b-link 
       class="f-left text" 
       v-b-modal="'my-modal'"
      >{{ $t('network.Delete_Network') }}</b-link>
      <b-modal id="my-modal" @ok="deleteNetwork">{{ $t('network.Delete_Network') }}!</b-modal>
    </b-container>

    <div class="b-bottomn">
      <b-button
        variant="primary"
        class="a-button-l text"
        @click="save"
        :disabled="load"
      ><b-spinner v-if="load" small type="grow"></b-spinner> {{ $t('network.Save_Changes') }}</b-button>
      <br />
    </div>
  </b-container>
  <b-container v-else>
    <div class="text-center">
      <b-spinner style="width: 6rem; height: 6rem;" label="Text Centered Large Spinner" variant="primary"></b-spinner>
    </div>
  </b-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "general",
  data() {
    return {
      load: false,
      permissions: "",
      approval: "",
      privacy: "",
      networkId: "",
      options: [
        {
          text: $t("network.Admin_Only"),
          value: "Admin only",
        },
        {
          text: $t("network.Editor"),
          value: "Allow editor to post",
        },
        {
          text: $t("network.Member"),
          value: "Allow member to post",
        },
      ],
      lists: [
        {
          text: $t("network.Approval_by_admin"),
          value: "Admin",
          disabled: false,
        },
        {
          text: $t("network.Approval_by_editor_and_admin"),
          value: "Admin and editor",
          disabled: false,
        },
      ],
    }
  },

  computed: {
    ...mapGetters({
      getNetwork: "networkSettings/getNetwork",
    }),
    networkinfo() {
      return this.$store.state.NetworkSettings.networkinfo;
    },
  },

  mounted() {
    this.url = this.$route.params.id;
    this.getNetworkInfo();
  },

  methods: {
    ...mapActions({
      generalSave: "networkSettings/generalSave",
      networkDelete: "networkSettings/networkDelete"
    }),

    check() {
      if (this.networkinfo[1].setting_value == "admin") {
        this.lists[0].disabled = true;
        this.lists[1].disabled = true;
      } else if (this.networkinfo[1].setting_value == "editor") {
        this.lists[0].disabled = false;
        this.lists[1].disabled = true;
      } else if (this.networkinfo[1].setting_value == "Allow member to post") {
        this.lists[0].disabled = false;
        this.lists[1].disabled = false;
      }
    },

    getNetworkInfo() {
      console.log("getNetworkInfo");
      this.$store
        .dispatch("NetworkSettings/getnetworkinfo", "settings/general/"+this.url)
        .then(() => {
          console.log('getNetworkInfo');
        })
        .catch(err => {
          console.log({ err: err });
        });
    },

    save() {
      this.load = true;
      let formData = new FormData()
      console.log("privacy: "+ this.networkinfo[0].setting_value)
      console.log("post_permission: "+ this.networkinfo[1].setting_value)
      console.log("post_approval: "+ this.networkinfo[2].setting_value)
      formData.append("privacy", this.networkinfo[0].setting_value)
      formData.append("post_permission", this.networkinfo[1].setting_value)
      formData.append("post_approval", this.networkinfo[2].setting_value)
      this.$store
        .dispatch("NetworkSettings/generalSave", 
        {
          path: "general-settings/"+this.url,
          formData: formData
        })
        .then(({data}) => {
          console.log(data);
          this.getNetworkInfo();
          this.load = false;
          this.flashMessage.show({
            status: "success",
            message: "Changes Made Successfully"
          });
        })
        .catch((err) => {
          console.log(err);
          this.load = false;
          this.flashMessage.show({
            status: "error",
            message: "Unable To Make Changes"
          });
        });
    },

    deleteNetwork: function(){
      console.log("deleteNetwork: "+this.url);
      this.$store
      .dispatch("NetworkSettings/networkDelete", 
      {
        path: "settings/delete-network/"+this.url,
      })
      .then(({data}) => {
        console.log(data);
        console.log('ohh yeah');
        this.flashMessage.show({
          status: "success",
          message: "Network Deleted"
        });
          
      })
      .catch(err => {
        console.log({ err: err });
        this.flashMessage.show({
          status: "error",
          message: "Unable To Delete Network"
        });
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
