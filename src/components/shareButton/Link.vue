<template>
  <b-list-group-item class="d-flex align-items-center">
    <b-avatar class="mr-3"></b-avatar>
    <span class="mr-auto">{{ contact.name }}</span>
    <Button
      @click.native="share"
      :loading="loading"
      :title="$t('search.Send')"
      style="width: 20%"
      styleClass="btn shadow  btn btn-bg flex btn p-2 btn-primary btn-sm btn-block btn-primary btn-sm btn-block"
    />
  </b-list-group-item>
</template>


<script>
import Button from '@/components/Button';

export default {
  name: 'Link',

  props: {
    contact: {
      type: Object,
      required: true,
    },
    post: {
      type: Object,
      required: true,
    },
  },

  components: {
    Button,
  },

  data: () => ({
    loading: false,
  }),

  methods: {
    share: async function () {
      this.loading = true;
      let data = {
        [`${this.post.poster_type}_profile`]: '',
        post_id: parseInt(this.post.post_id),
        source_id: parseInt(this.post.poster_id),
      };
      const request = await this.$repository.share.userPost(data);
      if (request.success)
        this.flashMessage.success({
          time: 5000,
          message: `Share to ${this.contact.name}`,
        });

      this.loading = false;
    },
  },
};
</script>
