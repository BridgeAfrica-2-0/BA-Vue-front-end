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
      <Contact v-for="(contact,index) in contacts" :contact="contact" :key="index" />
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

  props: ["id", "title", "subtitle", "placeholder"],

  methods: {
    getContacts: async function(){
      const response = await this.$repository.share.getNetworkorBusiness()

      // si le type est business affiche le business sinon le network
      this.contacts = response.data
    }
  },

  data() {
    return {
      text: "",
      contacts:[
        {name: "C++"},
        {name: "Python"},
        {name: "Rust"},
      ]
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