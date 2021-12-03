<template>
  <div>
    <b-row>
      <b-col cols="12" md="6">
        <b-input-group class="mb-2 px-md-3 float-right">
          <b-form-input
            aria-label="Text input with checkbox"
            :placeholder="$t('businessowner.Search_Something')"
            v-model="keywords"
          ></b-form-input>

          <b-input-group-prepend is-text  @click="$refs.search.search()">
            <b-icon-search  class="text-primary border-none"></b-icon-search>
          </b-input-group-prepend>
        </b-input-group>
      </b-col>
    </b-row>
    <br />
        <CommunityMembers  :searchh="keywords" ref="search" type="Follower" />
    
  </div>
</template>

<script>
import CommunityMembers from "../../communityMember";
export default {
   data() {
    return {
        keywords:"",
    }
    },
  components: {
    CommunityMembers
  },

  computed: {
   
  },
};
</script>

<style></style>
