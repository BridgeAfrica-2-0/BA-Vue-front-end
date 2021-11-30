<template>
  <b-modal :id="modal" hide-footer :title="title" @hide="reset()">
    <b-form-textarea
      :placeholder="$t('search.What_your_mind')"
      class="input-search"
      v-model="message"
    ></b-form-textarea>
    <slot name="owner"> </slot>

    <b-form-input
      :placeholder="placeholder"
      class="input-search"
      v-model="name"
      type="search"
      @keypress.enter="search(name)"
    ></b-form-input>

    <h6 class="mt-3 fw-b">{{ subtitle }}</h6>
    <b-list-group v-if="listElmts" class="ma-2">
      <!-- {{listElmts[0]}} -->
      <Loader v-if="loading" />
      <!-- {{ sentList }} -->
      <b-list-group-item
        class="d-flex align-items-center py-0"
        v-for="(elmt, index) in listElmts"
        :key="index"
      >
        <b-avatar class="mr-3" :src="elmt.profile_picture"></b-avatar>
        <span class="mr-auto">{{ elmt.name }}</span>

        <b-button
          v-if="sentList.some((n) => n === index)"
          variant="primary"
          disabled
          ><b-icon icon="check2"></b-icon> Sent</b-button
        >
        <b-button
          v-else
          variant="primary"
          @click="
            sharePostByMsg({
              index: index,
              post_id: post.id,
              receiver_id: elmt.id,
            })
          "
          ><b-spinner
            v-if="loader && index == current"
            small
            label="Small Spinner"
            type="grow"
          ></b-spinner>
          Send</b-button
        >
      </b-list-group-item>
      <b-button
        class="mt-3"
        variant="primary"
        :disabled="done"
        @click="$bvModal.hide(modal)"
      >
        Done</b-button
      >
    </b-list-group>

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
import tutorialVue from "../dasboard/tutorial.vue";
import tabbarVue from "../../tab/src/tabbar.vue";
export default {
  name: "Box",

  watch: {
    id: function (value, oldValue) {
      if (this.modal.startsWith("modal-2") || this.modal.startsWith("modal-3"))
        this.getContacts();
    },
  },

  components: {
    Contact,
    Loader,
  },

  data: () => ({
    done: true,
    sentList: [],
    current: null,
    loading: false,
    text: "",
    name: "",
    message: "",
    contacts: [],
    actionType: null,
    hasbeLoad: false,
  }),

  props: {
    listElmts: { type: Array },
    isActivated: {
      type: Boolean,
      required: true,
    },
    id: {},
    modal: {
      type: String,
      required: true,
    },
    post: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    profilConnected() {
      return this.$store.getters["auth/profilConnected"];
    },
    loader() {
      return this.$store.getters["businessChat/getLoader"];
    },
    sentStatus() {
      return this.$store.getters["businessChat/getSuccess"];
    },
  },
  created() {
    console.log("Profile connected:", this.profilConnected);
  },

  methods: {
    reset() {
      this.$store.commit("businessChat/setSuccess", false);
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
        postId: data.post_id,
      };
      this.sentList.push(this.current);

      console.log("Type:", this.type);
      if (this.profilConnected.user_type == "user") {
        if (this.type == "people") {
          this.$store.dispatch("userChat/SHARE_POST_USER", payload);
        } else if (this.type == "business") {
          this.$store.dispatch("userChat/SHARE_POST_BUSINESS", payload);
        } else {
          this.$store.dispatch("userChat/SHARE_POST_NETWORK", payload);
        }
      } else if (this.profilConnected.user_type == "business") {
        if (this.type == "people") {
          this.$store.dispatch("businessChat/SHARE_POST_USER", payload);
        } else if (this.type == "business") {
          this.$store.dispatch("businessChat/SHARE_POST_BUSINESS", payload);
        } else {
          this.$store.dispatch("businessChat/SHARE_POST_NETWORK", payload);
        }
      } else {
        if (this.type == "people") {
          this.$store.dispatch("networkChat/SHARE_POST_USER", payload);
        } else if (this.type == "business") {
          this.$store.dispatch("networkChat/SHARE_POST_BUSINESS", payload);
        } else {
          this.$store.dispatch("networkChat/SHARE_POST_NETWORK", payload);
        }
      }
    },
    search(keyword) {
      if (this.type == "people") {
        this.$store.dispatch("userChat/GET_USERS", keyword);
      } else if (this.type == "business") {
        this.$store.dispatch("businessChat/GET_BIZS", keyword);
      } else if (this.type == "network") {
        this.$store.dispatch("networkChat/GET_BIZS", keyword);
      }
    },

    getContacts: async function () {
      this.loading = true;
      const response = await this.$repository.share.getNetworkorBusiness();

      if ("network" != this.type) {
        this.contacts = response.data.network;
        this.actionType = "network";
      } else {
        this.contacts = response.data.business;
        this.actionType = "business";
      }

      this.loading = false;
      this.hasbeLoad = true;
    },
  },
};
</script>

<style scoped>
.input-search {
  border: none;
}

.list-group-item {
  border: none;
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