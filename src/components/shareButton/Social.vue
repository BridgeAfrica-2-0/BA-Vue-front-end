<template>
  <ShareNetwork
    :network="network"
    :url="link"
    :title="`${auth.name} share post`"
    :description="post.content"
  >
    {{ title }}
  </ShareNetwork>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ["post", "network", "title"],

  data: () => ({
    link:null
  }),

  computed: mapGetters({
    auth: 'auth/profilConnected'
  }),

  created(){
    this.link = `${window.location.protocol}//${window.location.host}/search?uuid=${this.post.id}`
  },

  /* metaInfo() {
    return {
      title: `${this.auth.name} - BridgeAfrica`,
      meta: [
        { name: 'description', content: 'Connect and follow ' + '' + ' on Epiloge - ' + this.auth.name},
                { property: 'og:title', content: this.post.content + ' - BridgeAfrica'},
                { property: 'og:site_name', content: 'BridgeAfrica'},
                { property: 'og:description', content: 'Connect and follow artisant'},
                {property: 'og:type', content: 'profile'},
                {property: 'og:url', content: 'https://epiloge.com/'}
            ]
        }
    }, */
};
</script>