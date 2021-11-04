<template>
  <div class="mx-4">
    <div class="fl mb-5">
      <label for="datepicker-dateformat1">{{$t("businessowner.Posted_Date")}}</label>
      <b-form-datepicker
        id="datepicker-dateformat1"
        :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"
        locale="en"
      ></b-form-datepicker>

    </div>
    <b-row class="fl my-2" @click="showRecentPost">
        <span>{{$t("businessowner.Recent_post")}}</span>
        <b-icon-toggle-on v-if="isRecentPost"  class="color" font-scale="1.5"></b-icon-toggle-on> 
        <b-icon-toggle-off v-else  class="color" font-scale="1.5"></b-icon-toggle-off>   
    </b-row>

     <b-row class="fl my-2" @click="showPostHaveNotSeen">
        <span>{{$t("businessowner.Post_you_ve_not_seen")}}</span>
        <b-icon-toggle-on v-if="isPostHaveNotSeen"  class="color" font-scale="1.5"></b-icon-toggle-on> 
        <b-icon-toggle-off v-else class="color" font-scale="1.5"></b-icon-toggle-off>   
    </b-row>
    
    <a
      :class="['cursor',rootSectionIsVisible ? 'w-100' : 'collapsed w-100']"
      :aria-expanded="rootSectionIsVisible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click.prevent="toogleRootSection"
    >
      <b-row class="fl">
        <span>{{$t("businessowner.Post_from")}}</span>
        <b-icon  :icon="rootSectionIsVisible ? 'arrow-down' : 'arrow-up'"></b-icon>
      </b-row>
    </a>

    <b-collapse id="collapse-4" v-model="rootSectionIsVisible">
      <b-card class="row">

         <!--begin buisness section-->
        <a
          :class="['cursor', buisnessSectionIsVisible ? 'w-100  my-2' : 'collapsed w-100']"
          :aria-expanded="buisnessSectionIsVisible ? 'true' : 'false'"
          aria-controls="collapse-2"
          @click.prevent="buisnessSectionIsVisible = !buisnessSectionIsVisible"
        >
          <b-row class="fl">
            <span>{{$t("businessowner.Buisness")}}</span>
            <b-icon  :icon="buisnessSectionIsVisible ? 'arrow-down' : 'arrow-up'"></b-icon>
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
          :class="['cursor',peopleSectionIsVisible ? 'w-100' : 'collapsed w-100']"
          :aria-expanded="peopleSectionIsVisible ? 'true' : 'false'"
          aria-controls="collapse-1"
          @click.prevent="peopleSectionIsVisible = !peopleSectionIsVisible"
        >
          <b-row class="fl">
            <span>{{$t("businessowner.People")}}</span>
            <b-icon  :icon="peopleSectionIsVisible ? 'arrow-down' : 'arrow-up'"></b-icon>
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
          :class="['cursor', networkSectionIsVisible ? 'w-100' : 'collapsed w-100']"
          :aria-expanded="networkSectionIsVisible ? 'true' : 'false'"
          aria-controls="collapse-4"
          @click.prevent="networkSectionIsVisible = !networkSectionIsVisible"
        >
          <b-row class="fl">
            <span>{{$t("businessowner.Network")}}</span>
            <b-icon  :icon="networkSectionIsVisible ? 'arrow-down' : 'arrow-up'"></b-icon>
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
      </b-card>
    </b-collapse>
  </div>
</template>

<script>

const options = [
  { text: "Follower", value: "Follower" },
  { text: "Following", value: "Following" },
  { text: "Community", value: "Community" },
];

export default {
  data: () => ({
    isRecentPost:false,
    isPostHaveNotSeen:false,
    rootSectionIsVisible: false,
    peopleSectionIsVisible: false,
    buisnessSectionIsVisible: false,
    networkSectionIsVisible: false,
    selectedPeople: [],
    selectedBuisness: [],
    selectedNetwork: [],
    optionsPeople: options,
    optionsBuisness: [...options, { text: "Editor", value: "Editor" }, { text: "Owner", value: "Owner" }],
    optionsNetwork: [{ text: "Editor", value: "Editor" }, { text: "Member", value: "Member" }, { text: "Owner", value: "Owner" }],
    posts:[
     
    ]
  }),

  created(){
    this.$emit('new:post', this.posts);
  },
  methods: {
    showRecentPost(){
      this.isRecentPost = !this.isRecentPost
    },
    showPostHaveNotSeen(){
      this.isPostHaveNotSeen = !this.isPostHaveNotSeen
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
span:hover{
  color:#cc4d0d;
}
span{
  cursor: pointer;
}
.color {
  color:#cc4d0d;
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