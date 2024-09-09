<template>
  <b-modal :id="modal" hide-footer :title="title">
    <slot name="owner"> </slot>
    <b-form-textarea
      :placeholder="$t('search.What_your_mind')"
      class="input-search"
      v-model="message"
    ></b-form-textarea>

    <h6 class="mt-3 fw-b">{{ subtitle }}</h6>

    <!-- <b-form-input
      v-if="isCommunity"
      :placeholder="`${placeholder}... press enter`"
      class="input-search mb-2"
      v-model="name"
      type="search"
      @keypress.enter="search(name)"
    ></b-form-input> -->

    <b-form-input
      v-if="contacts.length && !isCommunity"
      :placeholder="placeholder"
      class="input-search mb-2"
      v-model="text"
      type="search"
      @input="debounceInput"
    ></b-form-input>
    <div v-if="isCommunity">
      <b-list-group class="ma-2 list">
        <!-- {{listElmts[0]}} -->
        <Loader v-if="loader && done" />
        <!-- {{ sentList }} -->
        <b-list-group-item
          class="d-flex align-items-center py-1"
          v-for="(elmt, index) in listElmts"
          :key="index"
        >
          <b-avatar class="mr-3" :src="getImage(elmt)"></b-avatar>
          <span class="mr-auto" v-if="elmt"> {{ elmt.name }}</span>

          <b-button
            v-if="sentList.some(n => n === index)"
            variant="primary"
            disabled
          >
            <b-spinner
              v-if="loader && index == current"
              small
              label="Small Spinner"
              type="grow"
            ></b-spinner>
            <b-icon v-else icon="check2"></b-icon> Sent</b-button
          >
          <b-button
            v-else
            variant="primary"
            @click="
              sharePostByMsg({
                index: index,
                post_id: post.id,
                receiver_id: elmt.id
              })
            "
          >
            Send</b-button
          >
        </b-list-group-item>
      </b-list-group>
      <b-button
        block
        class="mt-3"
        variant="primary"
        :disabled="done"
        @click="$bvModal.hide(modal)"
      >
        Done</b-button
      >
    </div>
    <b-list-group v-else>
      <Loader v-if="loading" />
      <Contact
        v-for="(contact, index) in contacts"
        :contact="contact"
        :key="index"
        :post="post"
        :actionType="actionType"
      />
    </b-list-group>
  </b-modal>
</template>

<script>
import _ from "lodash";

import Contact from "./Link.vue";

import Loader from "@/components/Loader";
export default {
  name: "Box",

  components: {
    Contact,
    Loader
  },

  data: () => ({
    done: true,
    sentList: [],
    current: null,
    loading: false,
    name: "",
    message: "",
    text: "",
    all: [],
    contacts: [],
    actionType: null,
    hasbeLoad: false,
    uuid: null
  }),

  props: {
    id: {},
    listElmts: { type: Array },
    isCommunity: {
      default: null
    },
    modal: {
      type: String,
      required: true
    },
    post: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    update: {}
  },

  created() {
    this.uuid = this.post.post_id ? this.post.post_id : this.post.id;
  },
  computed: {
    profilConnected() {
      return this.$store.getters["auth/profilConnected"];
    },
    loader() {
      return this.$store.getters["userChat/getLoader"];
    },
    sentStatus() {
      return this.$store.getters["businessChat/getSuccess"];
    }
  },
  watch: {
    update: function(value) {
      if (
        [
          `modal-3-${this.uuid}`,
          `modal-2-${this.uuid}`,
          `modal-1-${this.uuid}`
        ].includes(value) &&
        this.isCommunity
      )
        this.community();
      else this.getContacts();
    }
  },

  methods: {
    debounceInput: _.debounce(function(e) {
      if (e) {
        const result = this.all.filter(contact => {
          return contact.name.toLowerCase().includes(e.toLowerCase());
        });

        if (result.length) this.contacts = result;
        else
          this.flashMessage.show({
            status: "error",
            message: `No ${this.type} name contains ${e}`
          });
      } else {
        this.contacts = this.all;
      }
    }, 2000),

    community: function() {
      console.log(this.isCommunity);
      this.search();
    },
    getImage(elmt) {
      let imagePath = elmt
        ? elmt.profile_picture
          ? elmt.profile_picture
          : elmt.logo_path
          ? elmt.logo_path
          : elmt.image
          ? elmt.image
          : ""
        : "";

      return imagePath;
    },

    reset() {
      // this.$store.commit("businessChat/setSuccess", false);
      this.sentList = [];
      this.search("");
    },
    sharePostByMsg(data) {
      this.done = false;
      this.current = data.index;
      let payload = {
        message: this.message,
        networkSenderId: this.profilConnected.id,
        businessSenderId: this.profilConnected.id,
        businessReceiverId: data.receiver_id,
        networkReceiverId: data.receiver_id,
        receiverId: data.receiver_id,
        postId: data.post_id
      };
      console.log("data :", data);
      this.sentList.push(this.current);
      console.log("Type:", this.type);
      if (this.profilConnected.user_type == "user") {
        if (this.type == "people") {
          this.$store
            .dispatch("userChat/SHARE_POST_USER", payload)
            .then(res => {
              this.flashMessage.success({
                time: 5000,
                message: `Post shared successfully!`
              });
            });
        } else if (this.type == "business") {
          this.$store
            .dispatch("userChat/SHARE_POST_BUSINESS", payload)
            .then(res => {
              this.flashMessage.success({
                time: 5000,
                message: `Post shared successfully!`
              });
            });
        } else {
          this.$store
            .dispatch("userChat/SHARE_POST_NETWORK", payload)
            .then(res => {
              this.flashMessage.success({
                time: 5000,
                message: `Post shared successfully!`
              });
            });
        }
      } else if (this.profilConnected.user_type == "business") {
        if (this.type == "people") {
          this.$store
            .dispatch("businessChat/SHARE_POST_USER", payload)
            .then(res => {
              this.flashMessage.success({
                time: 5000,
                message: `Post shared successfully!`
              });
            });
        } else if (this.type == "business") {
          this.$store
            .dispatch("businessChat/SHARE_POST_BUSINESS", payload)
            .then(res => {
              this.flashMessage.success({
                time: 5000,
                message: `Post shared successfully!`
              });
            });
        } else {
          this.$store
            .dispatch("businessChat/SHARE_POST_NETWORK", payload)
            .then(res => {
              this.flashMessage.success({
                time: 5000,
                message: `Post shared successfully!`
              });
            });
        }
      } else {
        if (this.type == "people") {
          this.$store
            .dispatch("networkChat/SHARE_POST_USER", payload)
            .then(res => {
              this.flashMessage.success({
                time: 5000,
                message: `Post shared successfully!`
              });
            });
        } else if (this.type == "business") {
          this.$store
            .dispatch("networkChat/SHARE_POST_BUSINESS", payload)
            .then(res => {
              this.flashMessage.success({
                time: 5000,
                message: `Post shared successfully!`
              });
            });
        } else {
          this.$store
            .dispatch("networkChat/SHARE_POST_NETWORK", payload)
            .then(res => {
              this.flashMessage.success({
                time: 5000,
                message: `Post shared successfully!`
              });
            });
        }
      }
    },

    search(keyword) {
      this.sentList = [];

      console.log("Keywork:", keyword);
      console.log("type:", this.isCommunity);
      console.log("user type:", this.profilConnected.user_type);
      switch (this.profilConnected.user_type) {
        case "user":
          if (this.isCommunity == "people") {
            this.$store.dispatch("userChat/GET_COMMUNITY_USERS", keyword);
          } else if (this.isCommunity == "business") {
            this.$store.dispatch("userChat/GET_COMMUNITY_BIZS", keyword);
          } else {
            this.$store.dispatch("userChat/GET_COMMUNITY_NETS", keyword);
          }
          break;

        case "business":
          if (this.isCommunity == "people") {
            this.$store.dispatch("businessChat/GET_COMMUNITY_USERS", {
              id: this.profilConnected.id,
              keyword: keyword
            });
          } else if (this.isCommunity == "business") {
            this.$store.dispatch("businessChat/GET_COMMUNITY_BIZS", {
              id: this.profilConnected.id,
              keyword: keyword
            });
          } else {
            this.$store.dispatch("businessChat/GET_COMMUNITY_NETS", {
              id: this.profilConnected.id,
              keyword: keyword
            });
          }
          break;

        case "network":
          if (this.isCommunity == "people") {
            this.$store.dispatch("networkChat/GET_COMMUNITY_USERS", {
              id: this.profilConnected.id,
              keyword: keyword
            });
          } else if (this.isCommunity == "business") {
            this.$store.dispatch("networkChat/GET_COMMUNITY_BIZS", {
              id: this.profilConnected.id,
              keyword: keyword
            });
          } else {
            this.$store.dispatch("networkChat/GET_COMMUNITY_NETS", {
              id: this.profilConnected.id,
              keyword: keyword
            });
          }
          break;

        default:
          if (this.isCommunity == "people") {
            this.$store.dispatch("userChat/GET_COMMUNITY_USERS", keyword);
          } else if (this.isCommunity == "business") {
            this.$store.dispatch("userChat/GET_COMMUNITY_BIZS", keyword);
          } else {
            this.$store.dispatch("userChat/GET_COMMUNITY_NETS", keyword);
          }
          break;
      }
    },
    getContacts: async function() {
      this.loading = true;

      const response = await this.$repository.share.showNetworkAndBussiness();

      if (response.success) {
        if ("network" == this.type) {
          this.contacts = response.data.network;
          this.actionType = "network";
          this.loading = false;
          return true;
        }

        if ("business" == this.type) {
          this.contacts = response.data.business;
          this.actionType = "business";
          this.loading = false;
        }

        this.all = this.contacts;
      }
    }
  }
};
</script>

<style scoped>
.list {
  border: 1px solid black;
  max-height: 240px !important;
  overflow-y: auto;
}

.fw-b,
.modal-title {
  font-weight: bold;
}

.input-search {
  border-radius: 12px;
  background: #ced4da;
}
</style>
