<template>
  <b-modal :id="modal" hide-footer :title="title">
    <slot name="owner"> </slot>

    <b-form-input
      :placeholder="placeholder"
      class="input-search"
      v-model="name"
      type="search"
      @keypress.enter="getUsers(name)"
    ></b-form-input>

    <h6 class="mt-3 fw-b">{{ subtitle }}</h6>
    <b-list-group v-if="listElmts" class="ma-2">
      <!-- {{listElmts[0]}} -->
      <Loader v-if="loading" />
      <b-list-group-item
        class="d-flex align-items-center py-0"
        v-for="(elmt, index) in listElmts"
        :key="index"
      >
        <b-avatar class="mr-3" :src="elmt.profile_picture"></b-avatar>
        <span class="mr-auto">{{ elmt.name }}</span>
        <!-- <Button
          @click.native="share"
          :disabled="loading"
          :title="$t('search.Send')"
          style="width: 20%"
          styleClass="btn shadow  btn btn-bg flex btn p-2 btn-primary btn-sm btn-block btn-primary btn-sm btn-block"
        /> -->
        <b-button variant="primary">Send</b-button>
      </b-list-group-item>
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
    loading: false,
    text: "",
    name: "",
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
    loader() {
      return this.$store.getters["businessChat/getLoader"];
    },
  },

  methods: {
    getUsers(keyword) {
      this.$store.dispatch("businessChat/GET_USERS", keyword);
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