<template>
  <ShareNetwork
    :network="network"
    url="https://news.vuejs.org/issues/180"
    title="Say hi to Vite! A brand new, extremely fast development setup for Vue."
    description="This week, I’d like to introduce you to 'Vite', which means 'Fast'. It’s a brand new development setup created by Evan You."
  >
    {{title}}
  </ShareNetwork>
</template>

<script>
export default {
  props: ["post", "network", "title"],
};
</script>