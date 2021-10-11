<template>
  <div>
    <div class="fl mb-3">
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

    <b-form-checkbox
      @click="showRecentPost"
        v-model="isRecentPost"
        id="customSwitch1"
        name="customSwitch1"
        switch
      >
        Recent Post
    </b-form-checkbox>
    <b-form-checkbox
      @click="showPostHaveNotSeen"
        v-model="isPostHaveNotSeen"
        id="customSwitch2"
        name="customSwitch2"
        switch
      >
        Post you've not seen
    </b-form-checkbox>

    <div class="ab"
      :class="['cursor mt-3', rootSectionIsVisible ? 'w-100' : 'collapsed w-100']"
      :aria-expanded="rootSectionIsVisible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click.prevent="toogleRootSection"
    >
        <b-icon
          :icon="rootSectionIsVisible ? 'arrow-down' : 'arrow-up'"
        ></b-icon>
        <span>Post from</span>

    </div>

    <b-collapse id="collapse-4" v-model="rootSectionIsVisible">
      <b-card>
        <!--begin buisness section-->
        <div class="db"
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
            <span>Buisness</span>
          
        </div>
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
        <div class="db"
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
            <span>People</span>
      
        </div>
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
        <div class="db"
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
            <span>Network</span>
            
        </div>
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
          fas="fas fa-search  fa-lg btn-icon"
          style="align-items: center"
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


  watch: {
   
    isRecentPost: function (newValue) {
      if (!this.keyword && newValue) {
        this.onNotified("the keyword does not exist");
        this.isRecentPost = false;
        return false;
      }
      if (newValue) {
        this.page(1);
        this.newCallbackForPagination(
          this.$repository.search.findPostByKeyword
        );
        this.stack({
          data: { recent_post: "" },
          keyword: this.keyword,
        });

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
        this.page(1);
        this.newCallbackForPagination(
          this.$repository.search.findPostByKeyword
        );
        this.stack({
          data: { not_seen: "" },
          keyword: this.keyword,
        });
        this._onFindPost({
          data: { not_seen: "" },
          keyword: this.keyword,
        });
      }
    },

    created_at: function (newValue) {
      if (newValue) {
        this.page(1);
        this.newCallbackForPagination(
          this.$repository.search.findPostByKeyword
        );
        this.stack({
          data: { created_at: this.created_at },
          keyword: this.keyword,
        });
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
      newCallbackForPagination: "search/SET_CURRENT_PAGINATE_CALLBACK",
      lauchLoader: "search/LOADING",
      page: "search/SET_CURRENT_PAGINATION_PAGE",
      stack: "search/STACK_VALUE", //
    }),

    async _onFindPost(e) {
      try {
        this.lauchLoader(true);
        const request = await this.$repository.search.findPostByKeyword({
          ...e,
          page: 1,
        });
        if (request.length) this.page(2);
        this.findPeoplePost(request);
      } catch (error) {
        console.log(error);
      }

      this.lauchLoader(false);
    },

    communityIsChecked(data) {
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

    async _onFind(data) {

      this.lauchLoader(true);
      const credentials = Object.keys(data);
      let render = []

      if(credentials.includes('users')){
        let response = await this.$repository.search.findPostByKeyword({ page:1, data:data['users'], keyword:this.keyword})
        render = [...render,...response]
      }

      if(credentials.includes('buisness')){
        let response = await this.$repository.search.findPostByBuisness({ page:1, data:data['buisness'], keyword:this.keyword})
        render = [...render,...response]
      }

      if(credentials.includes('network')){
        let response = await this.$repository.search.findPostByNetWork({ page:1, data:data['network'], keyword:this.keyword})
        render = [...render,...response]
      }

      this.findPeoplePost(render)

      this.lauchLoader(false);

    },

    onProcess() {
      if (!this.keyword) {
        this.onNotified("the keyword does not exist");
        return false;
      }

      this.page(1)
      const user = this.map(this.selectedPeople, `user`);
      const buisness = this.map(this.selectedBuisness, `buisness`);
      const network = this.map(this.selectedNetwork, `network`);

      const data = [...user, ...buisness, ...network].reduce((hash, item) => {
        if (hash[item.key]) {
          hash[item.key] = { [item.value]: "", ...hash[item.key] };
        } else hash[item.key] = { [item.value]: "" };

        return hash;
      }, {});
      this.stack(data)
      this.newCallbackForPagination(this._onFind);
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
.av{
    display: flex;
    align-items: center;
}
.db {
  display: block
}
</style>