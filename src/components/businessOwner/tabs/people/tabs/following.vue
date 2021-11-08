<template>
  <div>
    <b-row>
      <b-col cols="12" md="6">
        <b-input-group class="mb-2 px-md-3 float-right">
          <b-form-input
            aria-label="Text input with checkbox"
            placeholder="Search Something"
          ></b-form-input>

          <b-input-group-prepend  @click="$refs.search.search()" is-text>
            <b-icon-search class="text-primary border-none"></b-icon-search>
          </b-input-group-prepend>
        </b-input-group>
      </b-col>
    </b-row>
    <br />

      <div md="12" lg="6">
        <CommunityMembers  :searchh="keywords" ref="search" type="Following"  />
      </div>  

      
  </div>
</template>

<script>
import CommunityMembers from "../../communitynetwork";
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
