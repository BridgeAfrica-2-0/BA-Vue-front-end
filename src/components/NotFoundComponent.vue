<template>
  <b-alert>{{ title }}</b-alert>
</template>

<script>
export default {
  name: "NotFoundComponent",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>