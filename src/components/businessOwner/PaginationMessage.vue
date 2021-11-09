<template>
  <p class="paginage-msg" v-if="hasData">{{ moreDataTitle }}</p>
  <p class="paginage-msg" v-else>{{ noDataTitle }}</p>
</template>

<script>
export default {
  props: {
    hasData: {
      type: Boolean,
      required: true,
    },
    moreDataTitle: {
      type: String,
      required: true,
    },
    noDataTitle: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.paginage-msg {
  font-size: 14px;
  color: #e75c18;
  font-weight: bolder;
  text-align: center;
  cursor: pointer;
}
</style>