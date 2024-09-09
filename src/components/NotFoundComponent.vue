<template>
  <b-alert show variant="warning">{{ title }}</b-alert>
</template>

<script>
export default {
  name: "NotFoundComponent",

  props: {
    title: {
      type: String,
      default: () => "Not Found"
    }
  }
};
</script>
