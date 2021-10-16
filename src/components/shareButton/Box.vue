<template>
  <b-modal :id="id" hide-footer :title="title">
    <slot name="owner"> </slot>

    <b-form-input
      :placeholder="placeholder"
      class="input-search"
      v-model="text"
      type="search"
    ></b-form-input>
    <h6 class="mt-3 fw-b">{{ subtitle }}</h6>

    <b-list-group>
      <Contact
        v-for="(contact, index) in contacts"
        :contact="contact"
        :key="index"
        :post="post"
      />
    </b-list-group>
  </b-modal>
</template>

<script>
import _ from "lodash";
import Contact from "./Link.vue";
export default {
  name: "Box",

  components: {
    Contact,
  },

  props: {
    id: {
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

  methods: {
    getContacts: async function () {
      const response = await this.$repository.share.getNetworkorBusiness();

      if ("network" == this.type) this.contacts = response.data.network;
      else this.contacts = response.data.business;
    },
  },

  data() {
    return {
      text: "",
      contacts: [],
    };
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