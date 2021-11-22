<template>
  <b-modal :id="modal" hide-footer :title="title">
    <slot name="owner"> </slot>

    <b-form-input :placeholder="placeholder" class="input-search" v-model="text" type="search"></b-form-input>
    <h6 class="mt-3 fw-b">{{ subtitle }}</h6>

    <b-list-group>
      <Loader v-if="loading && hasbeLoad" />
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
import _ from 'lodash';
import Contact from './Link.vue';

import Loader from '@/components/Loader';
export default {
  name: 'Box',

  watch: {
    id: function (value, oldValue) {
      console.log(value, oldValue);

      if (this.modal.startsWith('modal-2') || this.modal.startsWith('modal-3')) this.getContacts();
    },
  },

  components: {
    Contact,
    Loader,
  },

  data: () => ({
    loading: false,
    text: '',
    contacts: [],
    actionType: null,
    hasbeLoad: false,
  }),

  props: {
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

  methods: {
    getContacts: async function () {
      this.loading = true;
      const response = await this.$repository.share.getNetworkorBusiness();
      

      if ('network' != this.type) {
        this.contacts = response.data.network;
        this.actionType = 'network';
      } else {
        this.contacts = response.data.business;
        this.actionType = 'business';
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