<template>
  <div class="modal-shi">
    <b-modal
  id="create-shipping-modal"
  :title="title"
  ref="create-shipping-modal"
  hide-footer
  v-if="mode === 'create'"
  class="custom-right-modal"
  :static="true" 
  centered
  no-fade
>
  <FormCreateShippingAddress
    @closecshippingm="hideModal"
    :modal="true"
    :form="shippingAddress"
  />
</b-modal>
    <b-modal
      v-else
      id="edit-shipping-modal"
      :title="title"
      ref="create-shipping-modal"
      class="custom-right-modal"
      :static="true" 
      hide-footer
      centered
      no-fade
    >
      <FormCreateShippingAddress
        v-if="editForm"
        :mode="mode"
        @closecshippingm="hideModal"
        :modal="true"
        :form="editForm"
      />
    </b-modal>
  </div>
</template>

<script>
import FormCreateShippingAddress from "./FormCreateShippingAddress.vue";
export default {
  name: "CreateShippingModal",
  props: {
    id: String,
    title: {
      type: String,
      default: "Add Shipping Address",
    },
    mode: {
      type: String,
      default: "create",
    },
    editForm: {
      type: Object,
    },
  },
  components: {
    FormCreateShippingAddress,
  },
  data() {
    return {
      shippingAddress: {
        name: "",
        phone: "",
        country_id: "",
        region_id: "",
        division_id: "",
        council_id: "",
        city: "",
        neighbourhood_id: "",
      },
    };
  },
  methods: {
    hideModal() {
      this.$refs["create-shipping-modal"].hide();
    },
  },
 
};
</script>

<style>
.modal-header {
  margin-top: 20px !important;
  color: black
}
.custom-right-modal .modal-dialog {
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  transition: transform 0.3s ease-out;
}

.custom-right-modal .modal-content {
  height: 100%;
  border-radius: 0;
}

.custom-right-modal .modal-dialog-centered {
  display: flex;
  align-items: flex-start; 
}

</style>
