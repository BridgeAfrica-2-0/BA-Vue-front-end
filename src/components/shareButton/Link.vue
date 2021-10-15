<template>
  <b-list-group-item class="d-flex align-items-center">
    <b-avatar class="mr-3"></b-avatar>
    <span class="mr-auto">{{ contact.name }}</span>
    <Button
      @click="share"
      title="Send"
      style="width: 20%"
      styleClass="btn shadow  btn btn-bg flex btn p-2 btn-primary btn-sm btn-block btn-primary btn-sm btn-block"
    />
  </b-list-group-item>
</template>


<script>
import Button from "@/components/Button";

export default {
  name: "Link",

  props: {
    contact: {
      type: Object,
    },
  },

  components: {
    Button,
  },

  methods: {
    share: async function () {
      const data = {
        profile: "",
        post_id: "", // id du post
        source_id: "", // auteur du post
        target_id: this.contact.id,
      };

      const request = await this.$repository.share.userPost(data);
    },
  },
};
</script>
