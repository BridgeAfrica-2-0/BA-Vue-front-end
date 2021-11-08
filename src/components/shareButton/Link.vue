<template>
  <b-list-group-item class="d-flex align-items-center">
    <b-avatar class="mr-3"></b-avatar>
    <span class="mr-auto">{{ contact.name }}</span>
    <Button
      @click.native="share"
      :loading="loading"
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
    post: {
      type: Object,
    },
  },

  components: {
    Button,
  },

  data: () => ({
    loading:false
  }),

  methods: {
    share: async function () {
      this.loading = true
      const data = {
        [this.type]: "",
        post_id: this.post.post_id,
        source_id: this.post.user_id,
        target_id: this.contact.target_id,
      };

      const request = await this.$repository.share.userPost(data);

      this.loading = false
    },
  },
};
</script>
