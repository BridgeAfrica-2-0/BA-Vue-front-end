<template>
  <b-modal :id="id" hide-footer title="Write post">
    <div class="d-flex align-items-center py-1 px-2">
      <b-avatar class="mr-3" v-if="auth.profile_picture" :src="auth.profile_picture"></b-avatar>
      <b-avatar class="mr-3" v-else></b-avatar>
      <p>
        <span class="mr-auto">{{ $t('search.Share_as') }}</span
        ><br />
        <span class="mr-auto">{{ auth.name }}</span>
      </p>
    </div>
    <div>
      <b-form-textarea
        :placeholder="$t('search.What_your_mind')"
        class="input-search"
        v-model="content"
      ></b-form-textarea>

      <div class="body mb-3 py-1">
        <img class="img-fluid" :src="post.media[0].media_url" v-if="post.media.length"/>
        <div class="p-2">
          <strong style="font-size: 18px">{{ post.user_name }}</strong>
          <h6 style="color: #ddd">{{ post.updated_at | fromNow }}</h6>
          <p class="ft">{{ post.content }}</p>
        </div>
      </div>
    </div>

    <Button
    
      @click.native="sharing"
      :loading="loading"
      title="Publish"
      styleClass="btn shadow  btn btn-bg flexx pobtn p-2 btn-primary btn-sm btn-block btn-primary btn-sm btn-block"
    />
  </b-modal>
</template>

<script>
import Button from '@/components/Button';
import { fromNow } from '@/helpers';
export default {
  props: ['id', 'auth', 'post', 'hidden'],
  components: {
    Button,
  },

  data: () => ({
    content: null,
    loading: false,
  }),

  methods: {
    sharing: async function () {
      this.loading = true;
      let data = {
        [`${this.post.poster_type}_profile`]: '',
        post_id: parseInt(this.post.post_id ? this.post.post_id : this.post.id),
        source_id: parseInt(this.post.user_id),
        content: this.content,
      };

      const request = await this.$repository.share.userPost(data, [`${this.post.poster_type}`]);
      this.loading = false;
      this.hidden();
      if (request.success)
        this.flashMessage.success({
          time: 5000,
          message: 'Operation success',
        });
    },
  },

  filters: {
    fromNow,
  },
};
</script>

<style scoped>
.input-search {
  border: none;
}
.ft {
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  text-align: justify;
  font-size: 14px;
}

.body {
  border: 1px solid rgb(229 228 237);
}
</style>