<template>
    <div>
        <b-icon
        @click="showModal"
          class="mr-2 icon-hover"
          icon="trash-fill"
          aria-hidden="true"
        ></b-icon>
  
      <b-modal
        :title="$t('general.Delete_Shipping_Address')"
        ref="confirm-modal"
        hide-footer
      >
        <p class="my-4 headline-font-size text-center">{{ message }}</p>
        <div class="d-flex align-items-center justify-content-end">
          <b-button class="mt-2 btn-custom" variant="success" @click="sendId">{{
            $t("general.Continue")
          }}</b-button>
          <b-button
            class="mt-2 ml-4 btn-custom"
            variant="primary"
            @click="hideModal"
            >{{ $t("general.Cancel") }}</b-button
          >
        </div>
      </b-modal>
    </div>
  </template>
  
  <script>
  export default {
    name: "UpdatedConfirmOperation",
    props: {
      id_item: Number,
      callback: {
        type: Function
      },
      message: String
    },
    methods: {
      hideModal() {
        this.$refs["confirm-modal"].hide();
      },
      showModal() {
        this.$refs["confirm-modal"].show();
      },
      sendId() {
        this.$emit("sendid", this.id_item);
      }
    }
  };
  </script>
  
  <style scoped>
    .icon-hover:hover {
    color: #e75c18; 
    cursor: pointer;
  }
  .icon-hover{
    color: black;
  }
  .btn-custom {
    height: 38px;
    min-width: 123px;
    font-size: 14px;
  }
  </style>
  