<template>
  <div style="display: inline-block">
    <Box
      :modal="`modal-1-${uuid}`"
      :title="$t('search.Share_to_people')"
      :placeholder="$t('search.Search_for_people')"
      subtitle="All peoples"
      :type="'network'"
      :post="post"
    />
    <!-- Share to people -->

    <Box
      :modal="`modal-2-${uuid}`"
      :title="$t('search.Share_to_network')"
      :placeholder="$t('search.Search_for_network')"
      subtitle="All networks"
      :type="'network'"
      :post="post"
      :update="update"
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
      :title="$t('search.Send_Inbox')"
      :placeholder="$t('search.Search_for_network')"
      subtitle="All networks"
      :type="'network'"
      :post="post"
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
              Le lorem ipsum est, en imprimerie, une provisoire pour calibrer
              une mise en page, le texte définitif venant remplacer le
              faux-texte dès qu'il est prêt ou que la mise en page est achevée.
              Généralement, on utilise un texte en faux latin, le Lorem ipsum ou
              Lipsum.
            </p>
          </div>
        </div>
      </template>
    </Box>
    <!-- Send Inbox -->

    <Box
      :modal="`modal-3-${uuid}`"
      :title="$t('search.Share_business')"
      :placeholder="$t('search.Search_for_business')"
      subtitle="All business"
      :type="'business'"
      :post="post"
      :update="update"
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
        <b-icon class="primary" icon="share" />
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
          <b-avatar
            variant="light"
            src="/icons/profile.png"
            square="true"
          ></b-avatar>
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
          <b-avatar
            variant="light"
            src="/icons/newsfeed.png"
            square="true"
          ></b-avatar>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>{{ $t("search.Share_to_News_Feed") }}</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item
        class="d-flex py-2 cursor-pointer"
        @click="open(`modal-2-${uuid}`)"
        v-if="isNetwork"
      >
        <span class="text-ored">
          <b-avatar
            variant="light"
            src="/icons/network.png"
            square="true"
          ></b-avatar>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>{{ $t("search.Share_to_Network") }}</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item
        class="d-flex py-2 cursor-pointer"
        @click="open(`modal-3-${uuid}`)"
        v-if="isBusiness"
      >
        <span class="text-ored">
          <b-avatar
            variant="light"
            src="/icons/business.png"
            square="true"
          ></b-avatar>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>{{ $t("search.Share_to_Business") }}</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item
        class="d-flex py-2 cursor-pointer"
        id="sharing-community"
        data-toggle="popover"
        role="button"
        data-original-title=""
      >
        <span class="text-ored">
          <b-avatar
            variant="light"
            src="/icons/community.png"
            square="true"
          ></b-avatar>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>{{ $t("search.Share_to_commnunity") }}</span>
        </div>
      </b-dropdown-item>

      <b-popover target="sharing-community" triggers="hover">
        <div class="popover-body">
          <div
            @mousedown="open('modal-1')"
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
          >
            <span class="text-ored">
              <b-icon-bell-fill class="col-bg"></b-icon-bell-fill>
            </span>
            <div class="d-flex flex-column ml-3">
              <span>{{ $t("search.Share_to_People") }}</span>
            </div>
          </div>

          <div
            v-if="'network' !== type"
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
          >
            <span class="text-ored">
              <b-avatar
                variant="light"
                src="/icons/network.png"
                square="true"
              ></b-avatar>
            </span>
            <div class="d-flex flex-column ml-3">
              <span>{{ $t("search.Share_to_Network") }}</span>
            </div>
          </div>

          <div
            v-if="'business' !== type"
            @mousedown="open(`modal-5-${uuid}`)"
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
          >
            <span class="text-ored">
              <b-avatar
                variant="light"
                src="/icons/business.png"
                square="true"
              ></b-avatar>
            </span>
            <div class="d-flex flex-column ml-3">
              <span>{{ $t("search.Share_to_Business") }}</span>
            </div>
          </div>
        </div>
      </b-popover>

      <b-dropdown-item class="d-flex py-2 cursor-pointer">
        <span class="text-ored">
          <b-avatar
            variant="light"
            src="/icons/copy.png"
            square="true"
          ></b-avatar>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>{{ $t("search.Copy_link") }}</span>
        </div>
      </b-dropdown-item>

      <b-dropdown-item
        class="d-flex py-2 cursor-pointer"
        :id="`sharing-via-${uuid}`"
        role="button"
        data-original-title=""
        ref="button"
      >
        <span class="text-ored">
          <b-avatar
            variant="light"
            src="/icons/share_via.png"
            square="true"
          ></b-avatar>
        </span>
        <div class="d-flex flex-column ml-1">
          <span>{{ $t("search.Share_via") }}</span>
        </div>
      </b-dropdown-item>

      <b-popover
        :target="`sharing-via-${uuid}`"
        triggers="hover focus"
        placement="left"
      >
        <div class="popover-body">
          <div
            @mousedown="onShareVia('email')"
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
          >
            <b-avatar
              variant="light"
              src="/icons/email.png"
              square="true"
            ></b-avatar>
            <span>Share via Email</span>
          </div>

          <div
            @mousedown="onShareVia('facebook')"
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
          >
            <b-avatar
              variant="light"
              src="/icons/facebook.png"
              square="true"
            ></b-avatar>
            <span>Share via Facebook</span>
          </div>

          <div
            @mousedown="onShareVia('twitter')"
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
          >
            <b-avatar
              variant="light"
              src="/icons/twitter.png"
              square="true"
            ></b-avatar>
            <span>Share via Twitter</span>
          </div>

          <div
            @mousedown="onShareVia('whatsapp')"
            class="d-inline-flex flex-row align-items-center suggest-item py-2 cursor-pointer"
          >
            <b-avatar
              variant="light"
              src="/icons/whatsapp.png"
              square="true"
            ></b-avatar>
            <span>Share via Whatsapp </span>
          </div>
        </div>
      </b-popover>
    </b-dropdown>
    <Social
      :id="`email-${uuid}`"
      class="none"
      :network="'Email'"
      :post="post"
      :title="'Share via Email'"
      ref="email"
    >
    </Social>
    <Social
      :id="`facebook-${uuid}`"
      class="none"
      :network="'facebook'"
      :post="post"
      :title="'Share via Facebook'"
      ref="facebook"
    >
    </Social>
    <Social
      :id="`twitter-${uuid}`"
      class="none"
      :network="'Twitter'"
      :post="post"
      :title="'Share via Twitter'"
      ref="twitter"
    >
    </Social>
    <Social
      :id="`whatsapp-${uuid}`"
      class="none"
      :network="'WhatsApp'"
      :post="post"
      :title="'Share via Whatsapp'"
      ref="whatsapp"
    >
    </Social>
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
    update: null,
  }),

  created() {
    this.uuid = this.post.post_id ? this.post.post_id : this.post.id;
    this.type = this.profile.user_type;
  },

  computed: {
    ...mapGetters({
      profile: "auth/profilConnected",
    }),

    isYourOwnPost() {
      const isItOwnerPage =
        this.$route.name == "BusinessOwner" ||
        this.$route.name == "profile_owner" ||
        this.$route.name == "NetworkEditors" ||
        this.$route.name == "networks"
          ? false
          : true;

      const isYourOwn =
        this.profile.id == this.post.user_id &&
        this.profile.user_type == this.post.poster_type;

      return isItOwnerPage ? (isYourOwn ? false : true) : false;
    },

    isBusiness() {
      const isItOwnerPage =
        this.$route.name == "BusinessOwner" ||
        this.$route.name == "profile_owner"
          ? true
          : false;

      const isYourOwn =
        this.profile.id == this.post.user_id &&
        this.profile.user_type == this.post.poster_type;

      return !isItOwnerPage
        ? isYourOwn && this.$route.name == "dashboard"
          ? false
          : true
        : true;
    },

    isNetwork() {
      const isItOwnerPage =
        this.$route.name == "NetworkEditors" || this.$route.name == "networks"
          ? true
          : false;

      const isYourOwn =
        this.profile.id == this.post.user_id &&
        this.profile.user_type == this.post.poster_type;

      return !isItOwnerPage
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
    onShareVia(type) {
      const elm = document.querySelector(`#${type}-${this.uuid}`);
      elm.click();
    },

    open(id) {
      this.modal = id;

      if ([`modal-3-${this.uuid}`, `modal-2-${this.uuid}`].includes(id))
        this.update = id;
      this.$bvModal.show(id);
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
.d-t {
  color: #e75c18;
}
.none {
  display: none;
}

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

li:hover,
a[class="dropdown-item"]:hover {
  background: transparent !important;
}

.li::active,
a[class="dropdown-item"]:active {
  background: transparent !important;
}

.box-title {
  border-bottom: 1px solid #ced4da;
}
.flex-direction {
  flex-direction: column;
}
</style>