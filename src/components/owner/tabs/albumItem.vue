<template>
  <div
    class="createp img-gall predit2"
    @mouseover="upHere = true"
    @mouseleave="upHere = false"
    style="width: 269px;height: 269px;position: absolute;"
  >
    <a>
      <span>
        <img class="card-img album-img" :src="cover(album.cover)" alt="" style="width: 269px;height: 269px;"/>
      </span>
      <div class="createdesc botmedia">
        <div class="botmediadess-position" v-if="loading">
          <b-spinner
            style="width: 3rem; height: 3rem; color: #e75c18"
            :label="$t('profileowner.Large_Spinner')"
          ></b-spinner>
        </div>
        <div class="botmediadess-position" v-else>
          <h6 style="font-size: 26px; font-weight: bold">
            {{ album.name }}
          </h6>
          <p style="font-size: 24px; font-weight: bold">
            {{ album.items | plural }}
          </p>

          <b-button
            v-if="upHere"
            variant="outline-primary"
            size="sm"
            @click="show"
          >
            {{ $t("profileowner.Show") }}
          </b-button>
        </div>
      </div>
    </a>

    <div class="mediadesc" v-if="canBeUpdate && isEditor">
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

            <b-dropdown-item @click="editAlbum">{{
              $t("profileowner.Edit")
            }}</b-dropdown-item>

            <b-dropdown-item @click="deleteAlbums">{{
              $t("profileowner.Delete")
            }}</b-dropdown-item>
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
    "isEditor",
  ],

  data: () => ({
    upHere: false,
    loading: false,
  }),

  filters: {
    path: fullMediaLink,
    plural: function (val) {
      return val ? `${val} items` : "No item";
    },
  },

  methods: {
    getFullMediaLink: fullMediaLink,

    cover(cover) {
      return cover.length ? this.getFullMediaLink(cover[0]) : defaultImage;
    },

    show: async function () {
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
  bottom: -45%;
  width: 100%;
  font-size: 20px;
  position: relative;
  height: 340.73px;
}
</style>