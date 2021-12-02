<template>
  <ShareNetwork
    :network="network"
    url="https://news.vuejs.org/issues/180"
    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
    :description="post.content"
  >
    {{ title }}
  </ShareNetwork>
</template>

<script>
export default {
  props: ["post", "network", "title"],
  created() {
    console.log(this.post)
  },
};
</script>