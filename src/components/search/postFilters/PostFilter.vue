<template>
  <div class="mx-4">
    <div class="fl mb-5">
      <label for="datepicker-dateformat1">Posted Date</label>
      <b-form-datepicker
        v-model="created_at"
        id="datepicker-dateformat1"
        :date-format-options="{
          year: 'numeric',
          month: 'short',
          day: '2-digit',
          weekday: 'short',
        }"
        locale="en"
      ></b-form-datepicker>
    </div>
    <b-row class="fl my-2" @click="showRecentPost">
      <span>Recent post</span>
      <b-icon-toggle-on
        v-if="isRecentPost"
        class="color"
        font-scale="1.5"
      ></b-icon-toggle-on>
      <b-icon-toggle-off
        v-else
        class="color"
        font-scale="1.5"
      ></b-icon-toggle-off>
    </b-row>

    <b-row class="fl my-2" @click="showPostHaveNotSeen">
      <span>Post you've not see</span>
      <b-icon-toggle-on
        v-if="isPostHaveNotSeen"
        class="color"
        font-scale="1.5"
      ></b-icon-toggle-on>
      <b-icon-toggle-off
        v-else
        class="color"
        font-scale="1.5"
      ></b-icon-toggle-off>
    </b-row>

    <a
      :class="['cursor', rootSectionIsVisible ? 'w-100' : 'collapsed w-100']"
      :aria-expanded="rootSectionIsVisible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click.prevent="toogleRootSection"
    >
      <b-row class="fl">
        <span>Post from</span>
        <b-icon
          :icon="rootSectionIsVisible ? 'arrow-down' : 'arrow-up'"
        ></b-icon>
      </b-row>
    </a>

    <b-collapse id="collapse-4" v-model="rootSectionIsVisible">
      <b-card class="row">
        <!--begin buisness section-->
        <a
          :class="[
            'cursor',
            buisnessSectionIsVisible ? 'w-100  my-2' : 'collapsed w-100',
          ]"
          :aria-expanded="buisnessSectionIsVisible ? 'true' : 'false'"
          aria-controls="collapse-2"
          @click.prevent="buisnessSectionIsVisible = !buisnessSectionIsVisible"
        >
          <b-row class="fl">
            <span>Buisness</span>
            <b-icon
              :icon="buisnessSectionIsVisible ? 'arrow-down' : 'arrow-up'"
            ></b-icon>
          </b-row>
        </a>
        <b-collapse
          id="collapse-2"
          v-model="buisnessSectionIsVisible"
          class="mt-1"
        >
          <b-card>
            <b-form-group v-slot="{ bui }">
              <b-form-checkbox-group
                v-model="selectedBuisness"
                :options="optionsBuisness"
                :aria-describedby="bui"
                name="bui-2a"
                stacked
              ></b-form-checkbox-group>
            </b-form-group>
          </b-card>
        </b-collapse>
        <!--end buiness section-->

        <!--begin people section-->
        <a
          :class="[
            'cursor',
            peopleSectionIsVisible ? 'w-100' : 'collapsed w-100',
          ]"
          :aria-expanded="peopleSectionIsVisible ? 'true' : 'false'"
          aria-controls="collapse-1"
          @click.prevent="peopleSectionIsVisible = !peopleSectionIsVisible"
        >
          <b-row class="fl">
            <span>People</span>
            <b-icon
              :icon="peopleSectionIsVisible ? 'arrow-down' : 'arrow-up'"
            ></b-icon>
          </b-row>
        </a>
        <b-collapse
          id="collapse-1"
          v-model="peopleSectionIsVisible"
          class="mt-1"
        >
          <b-card>
            <b-form-group v-slot="{ people }">
              <b-form-checkbox-group
                v-model="selectedPeople"
                :options="optionsPeople"
                :aria-describedby="people"
                name="people-2a"
                stacked
              ></b-form-checkbox-group>
            </b-form-group>
          </b-card>
        </b-collapse>
        <!--end people section-->

        <!--begin network section-->
        <a
          :class="[
            'cursor',
            networkSectionIsVisible ? 'w-100' : 'collapsed w-100',
          ]"
          :aria-expanded="networkSectionIsVisible ? 'true' : 'false'"
          aria-controls="collapse-4"
          @click.prevent="networkSectionIsVisible = !networkSectionIsVisible"
        >
          <b-row class="fl">
            <span>Network</span>
            <b-icon
              :icon="networkSectionIsVisible ? 'arrow-down' : 'arrow-up'"
            ></b-icon>
          </b-row>
        </a>
        <b-collapse
          id="collapse-4"
          v-model="networkSectionIsVisible"
          class="mt-1"
        >
          <b-card>
            <b-form-group v-slot="{ network }">
              <b-form-checkbox-group
                v-model="selectedNetwork"
                :options="optionsNetwork"
                :aria-describedby="network"
                name="network-2a"
                stacked
              ></b-form-checkbox-group>
            </b-form-group>
          </b-card>
        </b-collapse>
        <!--end network section-->
        <Button
          @click.native="onProcess"
          title="Search"
          class="mt-4"
          fas="fas fa-search  fa-lg btn-icon "
        />
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import _ from "lodash";

import { mapActions, mapGetters } from "vuex";

import Button from "@/components/Button";

const options = [
  { text: "Follower", value: "Follower" },
  { text: "Following", value: "Following" },
  { text: "Community", value: "Community" },
];

export default {
  components: {
    Button,
  },
  data: () => ({
    created_at: null,
    isRecentPost: false,
    isPostHaveNotSeen: false,
    rootSectionIsVisible: false,
    peopleSectionIsVisible: false,
    buisnessSectionIsVisible: false,
    networkSectionIsVisible: false,
    selectedPeople: [],
    selectedBuisness: [],
    selectedNetwork: [],
    optionsPeople: options,
    optionsBuisness: [
      ...options,
      { text: "Editor", value: "Editor" },
      { text: "Owner", value: "Owner" },
    ],
    optionsNetwork: [
      { text: "Editor", value: "Editor" },
      { text: "Member", value: "Member" },
      { text: "Owner", value: "Owner" },
    ],
    strategies: null,
  }),

  created() {
    this.strategies = {
      user: (data) => this.findPeoplePost(data),
      buisness: (data) => this.findBuisnessPost(data),
      network: (data) => this.findNetworkPost(data),
    };
  },

  watch: {
    selectedPeople: function () {
      console.log(this.selectedPeople);
      this.communityIsChecked(this.selectedPeople);
    },
    selectedBuisness: function () {
      this.communityIsChecked(this.selectedBuisness);
    },
    selectedNetwork: function () {
      this.communityIsChecked(this.selectedNetwork);
    },

    isRecentPost: function (newValue) {
      if (!this.keyword && newValue) {
        this.onNotified("the keyword does not exist");
        this.isRecentPost = false;
        return false;
      }
      if (newValue) {
        this._onFindPost({
          data: { recent_post: "" },
          keyword: this.keyword,
        });
      }
    },
    isPostHaveNotSeen: function (newValue) {
      if (!this.keyword && newValue) {
        this.isPostHaveNotSeen = false;
        this.onNotified("the keyword does not exist");
        return false;
      }
      if (newValue) {
        this._onFindPost({
          data: { not_seen: "" },
          keyword: this.keyword,
        });
      }
    },

    created_at: function (newValue) {
      if (newValue) {
        this._onFindPost({
          data: { created_at: this.created_at },
          keyword: this.keyword,
        });
      }
    },
  },

  computed: {
    ...mapGetters({
      keyword: "search/POST_KEYWORD",
    }),
  },

  methods: {
    ...mapActions({
      findPeoplePost: "search/FIND_POST",
      findBuisnessPost: "search/FIND_BUISNESS_POST",
      findNetworkPost: "search/FIND_NETWORK_POST",
      newCallbackForPagination: "search/SET_CURRENT_PAGINATE_CALLBACK",
      lauchLoader: "search/LOADING",
    }),

    async _onFindPost(e) {
      try {
        this.lauchLoader(true);
        const request = await this.$repository.search.findPostByKeyword({
          ...e,
          page: 1,
        });
        this.findPeoplePost(request);
      } catch (error) {
        this.lauchLoader(false);
      }

      this.lauchLoader(false);
    },

    communityIsChecked(data) {
      console.log(data);
      const useSelectFollowerAndFollowing = data.filter(
        (item) => "Follower" == item || "Following" == item
      );

      console.log(useSelectFollowerAndFollowing);

      if (
        useSelectFollowerAndFollowing.length == 2 &&
        data.indexOf("Community") != -1
      ) {
        const newData = data.filter(
          (item) => "Follower" !== item || "Following" !== item
        );

        console.log(newData);
      }
    },

    onNotified(text) {
      this.$notify({
        group: "notification",
        title: "Important message",
        type: "warn",
        duration: 5000,
        text,
      });
    },

    map(data, type) {
      return data.map((e) => ({
        key: type,
        value: `${type}_${e.toLowerCase()}`,
      }));
    },

    _onFind(data) {
      const credentials = Object.keys(data);

      const stopLoader = (index) =>
        credentials.length - 1 === index ? false : true;

      const startLoader = (item) =>
        credentials.indexOf(item) == 0 ? true : false;

      credentials.map((item, index) => {
        this.strategies[item]({
          credentials: data[item],
          lauchLoader: startLoader(item),
          endLoader: stopLoader(index),
        });
      });
    },

    onProcess() {
      if (!this.keyword) {
        this.onNotified("the keyword does not exist");
        return false;
      }
      const user = this.map(this.selectedPeople, `user`);
      const buisness = this.map(this.selectedBuisness, `buisness`);
      const network = this.map(this.selectedNetwork, `network`);

      const data = [...user, ...buisness, ...network].reduce((hash, item) => {
        if (hash[item.key]) {
          hash[item.key] = { [item.value]: "", ...hash[item.key] };
        } else hash[item.key] = { [item.value]: "" };

        return hash;
      }, {});

      this.newCallbackForPagination(this._onFind(data));
      this._onFind(data);
    },

    showRecentPost() {
      this.isRecentPost = !this.isRecentPost;
    },
    showPostHaveNotSeen() {
      this.isPostHaveNotSeen = !this.isPostHaveNotSeen;
    },
    toogleRootSection() {
      this.rootSectionIsVisible = !this.rootSectionIsVisible;

      if (!this.rootSectionIsVisible) this.closeAllSections();
    },
    closeAllSections() {
      this.peopleSectionIsVisible = false;
      this.buisnessSectionIsVisible = false;
      this.networkSectionIsVisible = false;
    },
  },
};
</script>

<style lang="css" scoped>
span:hover {
  color: #cc4d0d;
}
span {
  cursor: pointer;
}
.color {
  color: #cc4d0d;
}
.btn:focus {
  border-color: #ffffff !important;
}
.btn {
  background-color: white !important;
  border-color: white !important;
  color: black !important;
  text-align: start !important;
}
.fl {
  align-items: center;
  justify-content: space-between;
}
.cursor {
  cursor: pointer;
}
</style>