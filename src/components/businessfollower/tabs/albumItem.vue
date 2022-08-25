<template>
  <div class="createp img-gall predit2" @mouseover="upHere = true" @mouseleave="upHere = false">
    <a>
      <span>
        <img class="card-img album-img" :src="cover(album.cover)" alt="" />
      </span>
      <div class="createdesc botmedia">
        <div class="botmediadess-position" v-if="loading">
          <b-spinner style="width: 3rem; height: 3rem; color: #e75c18" label="Large Spinner"></b-spinner>
        </div>
        <div class="botmediadess-position" v-else>
          <h6 style="font-size: 26px; font-weight: bold">
            {{ album.name }}
          </h6>
          <p style="font-size: 24px; font-weight: bold">
            {{ album.items | plural }}
          </p>

          <b-button v-if="upHere" variant="outline-primary" size="sm" @click="show">
            {{ $t('general.Show') }}
          </b-button>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import defaultImage from '@/assets/img/nothing.jpg';

import { fullMediaLink } from '@/helpers';

export default {
  props: ['album', 'type', 'deleteAlbums', 'editAlbum', 'canBeUpdate', 'showAlbumPictures'],

  data: () => ({
    upHere: false,
    loading: false,
  }),

  filters: {
    path: fullMediaLink,
    plural: function(val) {
      return val ? `${val} items` : this.$t('general.No_item');
    },
  },

  methods: {
    getFullMediaLink: fullMediaLink,

    cover(cover) {
      return cover.length ? this.getFullMediaLink(cover[0]) : defaultImage;
    },

    show: async function() {
      this.loading = true;
      this.loading = await this.showAlbumPictures();
    },
  },
};
</script>

<style scoped>
._vue-flash-msg-body._vue-flash-msg-body_success,
._vue-flash-msg-body._vue-flash-msg-body_error {
  z-index: 10000 !important;
}
.options {
  background: #e75c18 !important;
  border-radius: 50%;
}

.botmediadess-position {
  text-align: center;
  margin: auto;
  width: 100%;
  font-size: 20px;
  position: relative;
}
</style>
