<template>
  <b-modal :id="id" hide-footer :title="title">
    <slot name="owner"> </slot>
    <b-form-input
      :placeholder="placeholder"
      class="input-search"
      v-model="text"
    ></b-form-input>
    <h6 class="mt-3 fw-b">{{ subtitle }}</h6>

    <b-list-group>
      <Contact />
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

  props: ["id", "title", "subtitle", "placeholder", "contacts"],

  data() {
    return {
      text: "",
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