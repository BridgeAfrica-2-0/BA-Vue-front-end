<template>
  <b-button
    block
    size="sm"
    id="btn-bg"
    class="btn btn-bg flexx pobtn mt-4 p-3 btn-primary btn-sm btn-block"
    variant="primary"
  >
    <i :class="fas"></i>
    <span class="btn-com">{{ title }}</span>
  </b-button>
</template>
<script>
export default {
  props: {
    title: {
      required: true,
      type: String
    },
    fas: {
      required: true,
      type: String,
    },
  },
};
</script>

<style scoped>
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