<template>
  <div>
    <div class="fl mb-3">
      <label for="datepicker-dateformat1">{{$t("search.Posted_Date")}}</label>
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

    <b-form-checkbox
      @click="showRecentPost"
      v-model="isRecentPost"
      id="customSwitch1"
      name="customSwitch1"
      switch
    >
      {{$t("search.Recent_Post")}}
    </b-form-checkbox>
    <b-form-checkbox
      @click="showPostHaveNotSeen"
      v-model="isPostHaveNotSeen"
      id="customSwitch2"
      name="customSwitch2"
      switch
    >
      {{$t("search.Post_you_ve_not_seen")}}
    </b-form-checkbox>

    <div
      class="ab"
      :class="[
        'cursor mt-3',
        rootSectionIsVisible ? 'w-100' : 'collapsed w-100',
      ]"
      :aria-expanded="rootSectionIsVisible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click.prevent="toogleRootSection"
    >
      <b-icon :icon="rootSectionIsVisible ? 'arrow-down' : 'arrow-up'"></b-icon>
      <span>{{$t("search.Post_from")}}</span>
    </div>

    <b-collapse id="collapse-4" v-model="rootSectionIsVisible">
      <b-card>
        <!--begin buisness section-->
        <div
          class="db"
          :class="[
            'cursor',
            buisnessSectionIsVisible ? 'w-100  my-2' : 'collapsed w-100',
          ]"
          :aria-expanded="buisnessSectionIsVisible ? 'true' : 'false'"
          aria-controls="collapse-2"
          @click.prevent="buisnessSectionIsVisible = !buisnessSectionIsVisible"
        >
          <b-icon
            :icon="buisnessSectionIsVisible ? 'arrow-down' : 'arrow-up'"
          ></b-icon>
          <span>{{$t("search.Buisness")}}</span>
        </div>
        <b-collapse
          id="collapse-2"
          v-model="buisnessSectionIsVisible"
          class="mt-1"
        >
          <b-card>
            <b-form-group v-slot="{ bui }">
              <b-form-radio-group
                v-model="selectedBuisness"
                :options="optionsBuisness"
                :aria-describedby="bui"
                name="bui-2a"
                stacked
              ></b-form-radio-group>
            </b-form-group>
          </b-card>
        </b-collapse>
        <!--end buiness section-->

        <!--begin people section-->
        <div
          class="db"
          :class="[
            'cursor',
            peopleSectionIsVisible ? 'w-100' : 'collapsed w-100',
          ]"
          :aria-expanded="peopleSectionIsVisible ? 'true' : 'false'"
          aria-controls="collapse-1"
          @click.prevent="peopleSectionIsVisible = !peopleSectionIsVisible"
        >
          <b-icon
            :icon="peopleSectionIsVisible ? 'arrow-down' : 'arrow-up'"
          ></b-icon>
          <span>{{$t("search.People")}}</span>
        </div>
        <b-collapse
          id="collapse-1"
          v-model="peopleSectionIsVisible"
          class="mt-1"
        >
          <b-card>
            <b-form-group v-slot="{ people }">
              <b-form-radio-group
                v-model="selectedPeople"
                :options="optionsPeople"
                :aria-describedby="people"
                name="people-2a"
                stacked
              ></b-form-radio-group>
            </b-form-group>
          </b-card>
        </b-collapse>
        <!--end people section-->

        <!--begin network section-->
        <div
          class="db"
          :class="[
            'cursor',
            networkSectionIsVisible ? 'w-100' : 'collapsed w-100',
          ]"
          :aria-expanded="networkSectionIsVisible ? 'true' : 'false'"
          aria-controls="collapse-4"
          @click.prevent="networkSectionIsVisible = !networkSectionIsVisible"
        >
          <b-icon
            :icon="networkSectionIsVisible ? 'arrow-down' : 'arrow-up'"
          ></b-icon>
          <span>{{$t("search.Network")}}</span>
        </div>
        <b-collapse
          id="collapse-4"
          v-model="networkSectionIsVisible"
          class="mt-1"
        >
          <b-card>
            <b-form-group v-slot="{ network }">
              <b-form-radio-group
                v-model="selectedNetwork"
                :options="optionsNetwork"
                :aria-describedby="network"
                name="network-2a"
                stacked
              ></b-form-radio-group>
            </b-form-group>
          </b-card>
        </b-collapse>
        <!--end network section-->
      </b-card>
    </b-collapse>
  </div>
</template>

<script>
import _ from "lodash";

import { mapActions, mapGetters } from "vuex";

const options = [
    { text: "Follower", value: "Follower" },
    { text: "Following", value: "Following" },
    { text: "Community", value: "Community" }
];

export default {
  
  created(){
     this.optionsBuisness = [
      ...options,
      { text: this.$t('general.Editor'), value: "Editor" },
      { text: this.$t('general.Owner'), value: "Owner" },
    ];

    this.optionsNetwork = [
      { text: this.$t('general.Editor'), value: "Editor" },
      { text: this.$t('general.Member'), value: "Member" },
      { text: this.$t('general.Owner'), value: "Owner" },
    ];
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
    optionsBuisness: null,
    optionsNetwork: null,
    strategies: null,
  }),

  watch: {

    isRecentPost: function (newValue) {
      
      if (newValue) {
        this.page(1);
        this.newCallbackForPagination(
          this.$repository.search.findPostByKeyword
        );
        this.stack({
          data: {
            recent_post: "",
            keyword: this.keyword,
          },
        });

        this._onFindPost({
          data: {
            recent_post: "",
            keyword: this.keyword,
          },
        });
        this.hide()
      }
    },

    isPostHaveNotSeen: function (newValue) {
     
      if (newValue) {
        this.page(1);
        this.newCallbackForPagination(
          this.$repository.search.findPostByKeyword
        );
        this.stack({
          data: { not_seen: "" },
          keyword: this.keyword,
        });
        this._onFindPost({
          data: {
            not_seen: "",
            keyword: this.keyword,
          },
        });
        this.hide()
      }
    },

    created_at: function (newValue) {
     
      if (newValue) {
        this.page(1);
        this.newCallbackForPagination(
          this.$repository.search.findPostByKeyword
        );
        this.stack({
          data: {
            created_at: this.created_at,
            keyword: this.keyword,
          },
        });
        this._onFindPost({
          data: {
            created_at: this.created_at,
            keyword: this.keyword,
          },
        });
        this.hide()
      }
    },

    selectedPeople: function () {
      this.onProcess();
    },
    selectedBuisness: function () {
      this.onProcess();
    },
    selectedNetwork: function () {
      this.onProcess();
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
      newCallbackForPagination: "search/SET_CURRENT_PAGINATE_CALLBACK",
      lauchLoader: "search/LOADING",
      page: "search/SET_CURRENT_PAGINATION_PAGE",
      stack: "search/STACK_VALUE",
      reset: "search/RESET_RESULT",
    }),

    hide(){
      this.$bvModal.hide('myModall')
    },

    hasKeyWord() {
      if (!this.keyword) {
        this.onNotified("the keyword does not exist");
        return false;
      } else return true;
    },

    async _onFindPost(e) {
      try {
        this.lauchLoader(true);
        this.reset();
        const request = await this.$repository.search.findPostByKeyword({
          ...e,
          page: 1,
        });

        if (request.success) {
          this.page(2);
          this.findPeoplePost(request.data);
        }
      } catch (error) {
        console.log(error);
      }

      this.lauchLoader(false);
    },

    communityIsChecked(data) {
      const useSelectFollowerAndFollowing = data.filter(
        (item) => "Follower" == item || "Following" == item
      );

      if (
        useSelectFollowerAndFollowing.length == 2 &&
        data.indexOf("Community") != -1
      ) {
        const newData = data.filter(
          (item) => "Follower" !== item || "Following" !== item
        );
      }
    },

    onNotified(message) {
      this.flashMessage.error({
        message,
      });
    },

    map(data, type) {
      return data.map((e) => ({
        key: type,
        value: `${type}_${e.toLowerCase()}`,
      }));
    },

    async _onFind(data) {
      this.lauchLoader(true);
      this.reset();
      const credentials = Object.keys(data);
      let render = [];

      if (credentials.includes("users")) {
        let response = await this.$repository.search.findPostByKeyword({
          page: 1,
          data: {
            ...data["users"],
            keyword: this.keyword,
          },
        });

        if (response.success) render = [...render, ...response.data];
      }

      if (credentials.includes("buisness")) {
        let response = await this.$repository.search.findPostByBuisness({
          page: 1,
          data: {
            ...data["buisness"],
            keyword: this.keyword,
          },
        });

        if (response.success) render = [...render, ...response.data];
      }

      if (credentials.includes("network")) {
        let response = await this.$repository.search.findPostByNetWork({
          page: 1,
          data: {
            ...data["network"],
            keyword: this.keyword,
          },
        });

        if (response.success) render = [...render, ...response.data];
      }

      this.findPeoplePost(render);
      this.lauchLoader(false);
    },

    onProcess: _.debounce(function (e) {
      this.page(1);
      const user = this.map(this.selectedPeople, `user`);
      const buisness = this.map(this.selectedBuisness, `buisness`);
      const network = this.map(this.selectedNetwork, `network`);

      const data = [...user, ...buisness, ...network].reduce((hash, item) => {
        if (hash[item.key]) {
          hash[item.key] = { [item.value]: "", ...hash[item.key] };
        } else hash[item.key] = { [item.value]: "" };

        return hash;
      }, {});
      this.stack(data);
      this.newCallbackForPagination(this._onFind);
      this._onFind(data);
      this.hide()
    }, 2000),

    showRecentPost() {
      console.log('test me')
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
.av {
  display: flex;
  align-items: center;
}
.db {
  display: block;
}
</style>