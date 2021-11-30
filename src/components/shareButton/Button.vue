<template>
  <div style="display: inline-block">
    <FlashMessage style="z-index: 99999" :position="'right top'" />

    <Box
      :modal="`modal-1-${uuid}`"
      :id="modal"
      :isActivated="strategy"
      :title="$t('search.Share_to_people')"
      :placeholder="`${$t('search.Search_for_people')}... press enter`"
      subtitle="All peoples"
      :type="'people'"
      :post="post"
      :listElmts="users"
    >
      <template v-slot:owner>
        <div class="d-flex align-items-center py-3 px-2 mb-2 border">
          <b-avatar class="mr-3" :src="profile.profile_picture"></b-avatar>
          <div>
            <span class="mr-auto">{{ $t("search.Share_Post_As") }}</span
            ><br />
            <span class="mr-auto bold">{{ profile.name }}</span>
            <p>
              {{ post.content }}
            </p>
          </div>
        </div>
      </template>
    </Box>
    <!-- Share to people -->

    <Box
      :modal="`modal-2-${uuid}`"
      :id="modal"
      :isActivated="strategy"
      :title="$t('search.Share_to_network')"
      :placeholder="$t('search.Search_for_network')"
      subtitle="All networks"
      :type="'network'"
      :post="post"
      :listElmts="networks"
    >
      <template v-slot:owner>
        <div class="d-flex align-items-center py-3 px-2 mb-2 border">
          <b-avatar class="mr-3" :src="profile.profile_picture"></b-avatar>
          <p>
            <span class="mr-auto">{{ $t("search.Share_Post_As") }}</span
            ><br />
            <span class="mr-auto bold">{{ profile.name }}</span>
          </p>
        </div>
      </template>
    </Box>
    <!-- Share to network -->

    <Box
      :modal="`modal-5-${uuid}`"
      :isActivated="strategy"
      :title="$t('search.Send_Inbox')"
      :placeholder="$t('search.Share_business')"
      subtitle="All Businesses"
      :type="'business'"
      :post="post"
      :listElmts="bizs"
    >
      <template v-slot:owner>
        <div class="d-flex flex-direction py-3 px-2 mb-2 border">
          <div class="d-flex align-items-center py-3 px-2 mb-2">
            <b-avatar class="mr-3"></b-avatar>
            <p>
              <span class="mr-auto">{{ $t("search.Share_Post_As") }} </span
              ><br />
              <span class="mr-auto">2h</span>
            </p>
          </div>
          <div class="d-flex align-items-center py-3 px-2 mb-2">
            <p>
              {{ post.content }}
            </p>
          </div>
        </div>
      </template>
    </Box>
    <!-- Send Inbox -->

    <Box
      :modal="`modal-3-${uuid}`"
      :id="modal"
      :title="$t('search.Share_business')"
      :placeholder="$t('search.Search_for_business')"
      subtitle="All business"
      :type="'business'"
      :post="post"
      :isActivated="strategy"
    >
      <template v-slot:owner>
        <div class="d-flex align-items-center py-3 px-2 mb-2 border">
          <b-avatar class="mr-3" :src="profile.profile_picture"></b-avatar>
          <p>
            <span class="mr-auto">{{ $t("search.Share_Post_As") }}</span
            ><br />
            <span class="mr-auto bold">{{ profile.name }}</span>
          </p>
        </div>
      </template>
    </Box>
    <!-- modal-3 -->

    <Post
      :id="modal"
      :isActivated="strategy"
      :modal="`modal-10-${uuid}`"
      :post="post"
      :auth="profile"
      :hidden="() => this.$bvModal.hide(`modal-10-${uuid}`)"
    />
    <!-- modal-4 -->

    <b-dropdown
      size="lg"
      variant="link"
      toggle-class="text-decoration-none"
      no-caret
      position="bottom"
    >
      <template #button-content>
        <b-icon class="primary ml-3" icon="share" />
      </template>

      <b-dropdown-text class="box-title">
        {{ $t("search.Share") }}
      </b-dropdown-text>

      <b-dropdown-item
        class="d-flex py-2 cursor-pointer"
        @click="shareToYourProfile"
        v-if="isYourOwnPost"
      >
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>{{ $t("search.Share_to_your_Profile") }} </span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item
        class="d-flex py-2 cursor-pointer"
        @click="open(`modal-10-${uuid}`)"
        v-if="isYourOwnPost"
      >
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>{{ $t("search.Share_to_News_Feed") }}</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item
        class="d-flex py-2 cursor-pointer"
        @click="open(`modal-2-${uuid}`)"
        v-if="
          $route.name != 'networks'
            ? 'network' != profile.user_type
              ? true
              : false
            : false
        "
      >
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>{{ $t("search.Share_to_Network") }}</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item
        class="d-flex py-2 cursor-pointer"
        @click="open(`modal-3-${uuid}`)"
        v-if="isYourOwnPost"
      >
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>{{ $t("search.Share_to_Business") }}</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item
        class="d-flex py-2 cursor-pointer"
        :id="`sharing-community-${uuid}`"
        data-toggle="popover"
        role="button"
        data-original-title=""
      >
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>{{ $t("search.Share_to_commnunity") }}</span>
        </div>
      </b-dropdown-item>

      <b-popover :target="`sharing-community-${uuid}`" triggers="hover">
        <div class="popover-body">
          <div
            @mousedown="open(`modal-1-${uuid}`)"
            class="
              d-inline-flex
              flex-row
              align-items-center
              suggest-item
              py-2
              cursor-pointer
            "
          >
            <span class="text-ored">
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </span>
            <div class="d-flex flex-column ml-3">
              <span>{{ $t("search.Share_to_People") }}</span>
            </div>
          </div>

          <div
            @mousedown="open(`modal-2-${uuid}`)"
            v-if="'network' !== type"
            class="
              d-inline-flex
              flex-row
              align-items-center
              suggest-item
              py-2
              cursor-pointer
            "
          >
            <span class="text-ored">
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </span>
            <div class="d-flex flex-column ml-3">
              <span>{{ $t("search.Share_to_Network") }}</span>
            </div>
          </div>

          <div
            v-if="'business' !== type"
            @mousedown="open(`modal-5-${uuid}`)"
            class="
              d-inline-flex
              flex-row
              align-items-center
              suggest-item
              py-2
              cursor-pointer
            "
          >
            <span class="text-ored">
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </span>
            <div class="d-flex flex-column ml-3">
              <span>{{ $t("search.Share_to_Business") }}</span>
            </div>
          </div>
        </div>
      </b-popover>

      <b-dropdown-item class="d-flex py-2 cursor-pointer">
        <span class="text-ored">
          <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>{{ $t("search.Copy_link") }}</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item
        class="d-flex py-2 cursor-pointer"
        :id="`sharing-via-${uuid}`"
        data-toggle="popover"
        role="button"
        data-original-title=""
        ref="button"
      >
        <span class="text-ored">
          <b-icon-share-fill class="col-bg"></b-icon-share-fill>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>{{ $t("search.Share_via") }}</span>
        </div>
      </b-dropdown-item>

      <b-popover
        :target="`sharing-via-${uuid}`"
        :triggers="['hover', 'click']"
        placement="left"
        focus
      >
        <div class="popover-body">
          <div
            class="
              d-inline-flex
              flex-row
              align-items-center
              suggest-item
              py-2
              cursor-pointer
            "
          >
            <span class="text-ored">
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </span>
            <div class="d-flex flex-column ml-3">
              <Social
                :network="'facebook'"
                :post="post"
                :title="'Share via Facebook'"
              >
              </Social>
            </div>
          </div>
        </div>
      </b-popover>
    </b-dropdown>
  </div>
</template>

<script>
import Box from "./Box";
import Social from "./Social";
import Post from "./SharePost";

import { mapGetters } from "vuex";

export default {
  name: "ShareButton",
  props: {
    post: {
      type: Object,
    },
  },

  components: {
    Box,
    Post,
    Social,
  },

  data: () => ({
    modal: null,
    type: null,
    strategy: false,
    uuid: null,
  }),

  created() {
    this.uuid = this.post.post_id ? this.post.post_id : this.post.id;
    this.type = this.profile.user_type;
  },
  mounted() {
    this.getUsers();
    this.getBizs();
    this.getNetworks();
  },

  computed: {
    ...mapGetters({
      profile: "auth/profilConnected",
    }),
    users() {
      return this.$store.getters["userChat/getUsers"];
    },
    bizs() {
      return this.$store.getters["businessChat/getAllBusinesses"];
    },
    networks() {
      return this.$store.getters["networkChat/getBizs"];
    },

    isYourOwnPost() {
      const isItOwnerPage =
        this.$route.name == "BusinessOwner" ||
        this.$route.name == "profile_owner"
          ? false
          : true;

      const isYourOwn =
        this.profile.id == this.post.user_id &&
        this.profile.user_type == this.post.poster_type;

      return isItOwnerPage
        ? isYourOwn && this.$route.name == "dashboard"
          ? false
          : true
        : false;
    },
  },

  watch: {
    modal: function (value) {
      this.strategy = [
        "modal-1",
        "modal-2",
        "modal-3",
        "modal-4",
        "modal-5",
      ].includes(this.modal)
        ? true
        : false;
    },
  },

  methods: {
    getUsers(keyword) {
      this.$store.dispatch("userChat/GET_USERS", keyword);
    },
    getBizs(keyword) {
      this.$store.dispatch("businessChat/GET_BIZS", keyword);
    },
    getNetworks(keyword) {
      this.$store.dispatch("networkChat/GET_BIZS", keyword);
    },
    open(id) {
      this.modal = id;
      this.$bvModal.show(id);
      this.getUsers("");
    },

    shareToYourProfile: async function () {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.creatform,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });
      let data = {
        [`${this.post.poster_type}_profile`]: "",
        post_id: parseInt(this.post.post_id ? this.post.post_id : this.post.id),
        source_id: parseInt(this.post.user_id),
      };

      const request = await this.$repository.share.userPost(data, [
        `${this.post.poster_type}`,
      ]);
      loader.hide();
      if (request.success)
        this.flashMessage.success({
          time: 5000,
          message: "Operation success",
        });
    },
  },
};
</script>

<style scoped>
.bold {
  font-weight: bold;
}
.border {
  border-radius: 12px;
}
.fb {
  font-weight: bold;
}
.align-items-center {
  width: 100%;
}
.d-flex {
  display: inline-flex !important;
  width: 100%;
}
.dropdown-menu {
  border: 1px solid red !important;
  border-radius: 12px;
}

li:hover {
  background: transparent;
}

.box-title {
  border-bottom: 1px solid #ced4da;
}
.flex-direction {
  flex-direction: column;
}
</style>