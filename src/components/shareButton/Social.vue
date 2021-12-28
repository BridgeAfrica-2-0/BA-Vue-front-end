<template>
  <ShareNetwork
    :network="network"
    :url="link"
    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
    :description="post.content"
  >
    {{ title }}
  </ShareNetwork>
</template>

<script>
export default {
  props: ["post", "network", "title"],
  data: () => ({
    link:null
  }),

  created(){
    this.link = `${window.location.protocol}//${window.location.host}/search?uuid=${this.post.id}`
  }
};
</script>