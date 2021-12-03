<template>
  <div>
    <b-row>
      <b-col cols="12" md="6">
        <b-input-group class="mb-2 px-md-3 float-right">
          <b-form-input
            aria-label="Text input with checkbox"
            placeholder="Search Something"
            v-model="keywords"
          ></b-form-input>

          <b-input-group-prepend is-text  @click="$refs.search.search()">
            <b-icon-search class="text-primary border-none"></b-icon-search>
          </b-input-group-prepend>
        </b-input-group>
      </b-col>
    </b-row>

    <br />

          <CommunityBusiness  :searchh="keywords" ref="search" type="Following" />
     
  </div>
</template>

<script>

import CommunityBusiness from "@/components/owner/tabs/communitynetwork";
export default {
  data() {
    return {
        keywords:"",
    }
    },
  components: {
    CommunityBusiness
  },

   computed: {
    folowing() {
      return this.$store.state.profile.CommunityBusiness.business_following;
    }
  },

};
</script>

<style></style>
