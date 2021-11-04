<template>
  <div>
    <b-form class="mb-4">
      <label for="feedback-user">{{$t("businessowner.Profession")}}</label>
      <b-form-input
        @input="debounceInput"
        id="feedback-user"
        v-model="profession"
      ></b-form-input>
    </b-form>

    <a
      :class="['cursor', rootSectionIsVisible ? 'w-100' : 'collapsed w-100']"
      :aria-expanded="rootSectionIsVisible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click.prevent="toogleRootSection"
    >
      <b-row class="fl px-3">
        <span>{{$t("businessowner.People_from")}}</span>
        <b-icon
          :icon="rootSectionIsVisible ? 'arrow-down' : 'arrow-up'"
        ></b-icon>
      </b-row>
    </a>

    <b-collapse id="collapse-4" v-model="rootSectionIsVisible">
      <b-card class="row mx-1">
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
          <b-row class="fl px-3">
            <span>{{$t("businessowner.People")}} </span>
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

        <!--begin buisness section-->
        <a
          :class="[
            'cursor',
            buisnessSectionIsVisible ? 'w-100' : 'collapsed w-100',
          ]"
          :aria-expanded="buisnessSectionIsVisible ? 'true' : 'false'"
          aria-controls="collapse-2"
          @click.prevent="buisnessSectionIsVisible = !buisnessSectionIsVisible"
        >
          <b-row class="fl px-3">
            <span>{{$t("businessowner.Buisness")}} </span>
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
          <b-row class="fl px-3">
            <span>{{$t("businessowner.Network")}}</span>
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
        <!---<Button
          @click.native="onProcess"
          title="Search"
          class="mt-4"
          fas="fas fa-search  fa-lg btn-icon "
        /> -->
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
  { text: "Community", value: "Community" },
];

//import Button from "@/components/Button";

export default {
  /*components: {
    Button,
  },*/
  data: () => ({
    profession: null,
    rootSectionIsVisible: false,
    peopleSectionIsVisible: false,
    buisnessSectionIsVisible: false,
    networkSectionIsVisible: false,
    selectedPeople: [],
    selectedBuisness: [],
    selectedNetwork: [],
    optionsPeople: options,
    optionsBuisness: options,
    optionsNetwork: [...options, { text: "Member", value: "Member" }],
  }),

  watch: {
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
      userStore: "search/FIND_USER",
      lauchLoader: "search/LOADING",
      setCallback: "search/SET_CURRENT_PAGINATE_CALLBACK",
      stack: "search/STACK_VALUE",
      page: "search/SET_CURRENT_PAGINATION_PAGE",
      reset: "search/RESET_RESULT",
    }),

    map(data, type) {
      return data.map((e) => `${type}_${e.toLowerCase()}`);
    },

    onProcess: _.debounce(function (e) {
      this.page(1);
      const user = this.map(this.selectedPeople, `user`);
      const buisness = this.map(this.selectedBuisness, `buisness`);
      const network = this.map(this.selectedNetwork, `network`);

      const data = [...user, ...buisness, ...network].reduce((hash, value) => {
        hash[value] = "";
        return hash;
      }, {});

      this.stack({ data: { ...data, keyword: this.keyword }, page: 1 });

      this.setCallback(this.$repository.search.findUserByParam);
      this._onFindUser({
        data: { ...data, keyword: this.keyword },
        page: 1,
      });
    }, 2000),

    async _onFindUser(payload) {
      try {
        this.lauchLoader(true);
        this.reset();
        const request = await this.$repository.search.findUserByParam(payload);

        if (request.success) {
          this.userStore(request.data);
          this.page(2);
        }
      } catch (error) {
        console.log(error);
      }

      this.lauchLoader(false);
    },

    debounceInput: _.debounce(function (e) {
      if (e) {
        this.page(1);
        this.stack({
          data: {
            profession: e,
            keyword: this.keyword,
          },
          page: 1,
        });
        this.setCallback(this.$repository.search.findUserByParam);
        this._onFindUser({
          data: {
            profession: e,
            keyword: this.keyword,
          },
          page: 1,
        });
      }
    }, 1000),

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