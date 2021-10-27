<template>
  <div
    class="createp img-gall predit2"
    @mouseover="upHere = true"
    @mouseleave="upHere = false"
  >
    <a>
      <span>
        <img class="card-img album-img" :src="cover(item.cover)" alt="" />
      </span>
      <div class="createdesc botmedia">
        <div class="botmediadess-position">
          <h6 style="font-size: 26px; font-weight: bold">
            {{ item.name }}
          </h6>
          <p style="font-size: 24px; font-weight: bold">
            {{ item.items | plural }}
          </p>

          <b-button
            v-if="upHere"
            variant="outline-primary"
            size="sm"
            @click="showAlbumPictures"
          >
            Show
          </b-button>
        </div>
      </div>
    </a>

    <div class="mediadesc" v-if="canBeUpdate">
      <ul class="navbar-nav pull-right options">
        <li class="nav-item dropdown">
          <b-dropdown
            size="sm"
            class="call-action"
            variant="link"
            toggle-class="text-decoration-none"
            no-caret
          >
            <template #button-content>
              <b-icon icon="three-dots-vertical" color="white" variant="light">
              </b-icon>
            </template>

            <b-dropdown-item @click="editAlbum">Edit</b-dropdown-item>

            <b-dropdown-item @click="deleteAlbums">Delete</b-dropdown-item>
          </b-dropdown>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import defaultImage from "@/assets/img/nothing.jpg";

import { fullMediaLink } from "@/helpers";
export default {
  props: [
    "album",
    "type",
    "deleteAlbums",
    "editAlbum",
    "canBeUpdate",
    "showAlbumPictures",
  ],

  data: () => ({
    upHere: false,
    item: null,
    strategy: (data, type) => {
      const scheam = {
        business: {
          name: data.name,
          items: data.items,
          cover: data.cover,
        },

        profile: {
          name: data.album_name,
          items: data.item_number,
          cover: data.media,
        },
      };

      return scheam[data];
    },
  }),

  created() {
    this.item = this.strategy(this.album, this.type);
    console.log(this.item);
  },

  filters: {
    path: fullMediaLink,
    plural: function (val) {
      return val ? `${val} items` : "No item";
    },
  },

  computed: {
    canCreateAlbum() {
      return this.albumInfo.name && this.albumInfo.type ? false : true;
    },
  },

  methods: {
    getFullMediaLink: fullMediaLink,

    cover(cover) {
      console.log(cover);
      return cover.length ? this.getFullMediaLink(cover[0]) : defaultImage;
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
  bottom: -45%;
  width: 100%;
  font-size: 20px;
  position: relative;
}
</style>