<template>
  <b-list-group-item class="d-flex align-items-center py-0">
    <b-avatar class="mr-3" :src="contact.logo"></b-avatar>
    <span class="mr-auto">{{ contact.name }}</span>
    <Button
      @click.native="share"
      :disabled="loading"
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
    actionType: {
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
        [`${this.post.poster_type}_${this.actionType}`]: '',
        post_id: parseInt(this.post.post_id ? this.post.post_id : this.post.id),
        source_id: parseInt(this.post.user_id),
        target_id: this.contact.id,
      };
      const request = await this.$repository.share.userPost(data, [`${this.post.poster_type}`]);
      if (request.success)
        this.flashMessage.success({
          time: 5000,
          message: `this.$t(general.Share_to) ${this.contact.name}`,
        });

      this.loading = false;
    },
  },
};
</script>
