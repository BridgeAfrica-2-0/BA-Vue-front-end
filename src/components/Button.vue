<template>
  <b-button block size="sm" id="btn-bg" :class="styleClass" variant="primary" :disabled="isDisabled">
    <b-spinner small v-if="loading"></b-spinner>
    <i :class="fas" v-if="fas && !loading"></i>
    <span class="btn-com" v-if="!loading">{{ title }}</span>
  </b-button>
</template>
<script>
export default {
  data: () => ({
    isDisabled: false,
  }),

  created() {
    this.isDisabled = this.disabled;
  },
  watch: {
    loading(value) {
      this.isDisabled = value ? true : false;
    },
  },

  props: {
    title: {
      required: true,
      type: String,
    },
    styleClass: {
      default: 'btn btn-bg flexx pobtn mt-4 p-3 btn-primary btn-sm btn-block',
      type: String,
    },
    disabled: {
      default: function() {
        return false;
      },
    },
    loading: {
      default: function() {
        return false;
      },
    },
    fas: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.btn-com {
  font-size: 17px;
}
#btn-bg {
  background-color: #e75c18 !important;
  color: white !important;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  font-weight: bold;
  line-height: normal;
}
.flexx {
  display: inline-flex;
}
</style>
