<template>
  <b-modal :id="modal" hide-footer :title="title">
    <slot name="owner"> </slot>

    <b-form-input
      :placeholder="placeholder"
      class="input-search"
      @input="debounceInput"
      v-model="text"
      type="search"
    ></b-form-input>
    <h6 class="mt-3 fw-b">{{ subtitle }}</h6>

    <b-list-group>
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
    Loader,
  },

  data: () => ({
    loading: false,
    text: "",
    all: [],
    contacts:[],
    actionType: null,
    hasbeLoad: false,
    uuid:null
  }),

  props: {
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
    update:{

    }
  },

  created(){
    this.uuid = this.post.post_id ? this.post.post_id : this.post.id
  },

  watch:{
    update:function(value){
      if([`modal-3-${this.uuid}`,`modal-2-${this.uuid}`].includes(value))
        this.getContacts()
    }
  },


  methods: {

    debounceInput: _.debounce(function (e) {
      if (e) {
        const result = this.all.filter(contact => contact.name.toLowerCase().includes(e.toLowerCase()))

        if (result.length)
          this.contacts = result
        else
          this.flashMessage.show({
            status: 'error',
            message: `No ${this.type} name start with ${e}`,
          });
      }else {
        this.contacts = this.all 
      }
    }, 2000),

    getContacts: async function () {
      this.loading = true;

      const response = await this.$repository.share.showNetworkAndBussiness()

      if (response.success){

        if ("network" == this.type) {
          this.contacts = response.data.network;
          this.actionType = "network";
          this.loading = false;
          return true
        }

        if ("business" == this.type) {
          this.contacts = response.data.business;
          this.actionType = "business";
          this.loading = false;
        }

        this.all = this.contacts
      }
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