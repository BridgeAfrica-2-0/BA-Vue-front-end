<template>
  <div>
    <b-form class="mb-4">
      <label for="feedback-user">{{$t("general.Profession")}}</label>
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
        <span>{{$t("general.People_from")}}</span>
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
            <span>{{$t("general.People")}} </span>
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
              <b-form-radio-group
                id="one"
                v-model="selectedPeople"
                :options="optionsPeople"
                :aria-describedby="people"
                name="people-2a"
                stacked
              >
              </b-form-radio-group>
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
            <span>{{$t("general.Buisness")}} </span>
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
              <b-form-radio-group
                id="two"
                v-model="selectedBuisness"
                :options="optionsBuisness"
                :aria-describedby="bui"
                name="bui-2a"
                stacked
              >

              </b-form-radio-group>
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
            <span>{{$t("general.Network")}} </span>
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
              <b-form-radio-group
                :options="optionsNetwork"
                id="three"
                v-model="selectedNetwork"
                :aria-describedby="network"
                name="network-2a"
                stacked
              >
              </b-form-radio-group>
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
  { text: "Community", value: "Community" }
];
//import Button from "@/components/Button";
export default {
  
  data: () => ({
    profession: null,
    rootSectionIsVisible: false,
    peopleSectionIsVisible: false,
    buisnessSectionIsVisible: false,
    networkSectionIsVisible: false,
    selectedPeople: null,
    selectedBuisness: null,
    selectedNetwork: null,
    optionsPeople: options,
    optionsBuisness: options,
    optionsNetwork: [...options, { text: "Member", value: "Member" }],
  }),

  watch: {
    selectedPeople: function () {
      this.onProcess('people');
    },
    selectedBuisness: function () {
      this.onProcess('business');
    },
    selectedNetwork: function () {
      this.onProcess('network');
    },
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

    hide(){
      this.$bvModal.hide('myModall')
    },

    map(e, type) {
      return e ? [`${type}_${e.toLowerCase()}`] : [];
    },

    onProcess: _.debounce(function (e) {
      this.page(1);

      
      const user = (e == 'people') ? this.map(this.selectedPeople, `user`): [];
      const buisness = (e == 'business') ? this.map(this.selectedBuisness, `buisness`): [];
      const network = (e == 'network') ? this.map(this.selectedNetwork, `network`) : [];


      const data = [...user, ...buisness, ...network].reduce((hash, value) => {
        hash[value] = "";
        return hash;
      }, {});

      this.stack({ data: { ...data, keyword: this.postKeyword }, page: 1 });
      this.setCallback(this.$repository.search.findUserByParam);

      this._onFindUser({...data,keyword: this.postKeyword});
      this.hide()
    }, 2000),

    async _onFindUser(payload) {
      try {
        this.lauchLoader(true);
        this.reset();
        const request = await this.$repository.search.findUserByParam({
          data:payload,
          page: 1,
        });
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
        this.stack({data:{ profession: e, keyword: this.postKeyword ? this.postKeyword: "" },page: 1});
        this.setCallback(this.$repository.search.findUserByParam);
        
        this._onFindUser({
          profession: e,
          keyword: this.postKeyword,
          page: 1,
        });

        this.hide()
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

  computed: {
    ...mapGetters({
      postKeyword: "search/POST_KEYWORD",
    }),
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