<template>
  <div>
    <a
      :class="['cursor',rootSectionIsVisible ? 'w-100' : 'collapsed w-100']"
      :aria-expanded="rootSectionIsVisible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click.prevent="toogleRootSection"
    >
      <b-row class="fl">
        <span>Post from</span>
        <i
          :class="[
            'fas',
            rootSectionIsVisible ? 'fa-arrow-down' : 'fa-arrow-up',
          ]"
        ></i>
      </b-row>
    </a>

    <b-collapse id="collapse-4" v-model="rootSectionIsVisible">
      <b-card>

         <!--begin buisness section-->
        <a
          :class="['cursor', buisnessSectionIsVisible ? 'w-100' : 'collapsed w-100']"
          :aria-expanded="buisnessSectionIsVisible ? 'true' : 'false'"
          aria-controls="collapse-2"
          @click.prevent="buisnessSectionIsVisible = !buisnessSectionIsVisible"
        >
          <b-row class="fl">
            <span>Buisness</span>
            <i
              :class="[
                'fas',
                buisnessSectionIsVisible ? 'fa-arrow-down' : 'fa-arrow-up',
              ]"
            ></i>
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
            <span>People</span>
            <i
              :class="[
                'fas',
                peopleSectionIsVisible ? 'fa-arrow-down' : 'fa-arrow-up',
              ]"
            ></i>
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
            <span>Network</span>
            <i
              :class="[
                'fa',
                networkSectionIsVisible ? 'fa-arrow-down' : 'fa-arrow-up',
              ]"
            ></i>
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
  justify-content: space-evenly;
}
.cursor {
  cursor: pointer;
}
</style>