<template>
    <div>
      <b-row>
        <b-col cols="12" md="6">
          <b-input-group class="mb-2 px-md-3 float-right">
            <b-form-input
              aria-label="Text input with checkbox"

              :placeholder="$t('profilefollower.Search_Something')"

            ></b-form-input>
  
            <b-input-group-prepend  @click="$refs.search.search()" is-text>
              <b-icon-search class="text-primary border-none"></b-icon-search>  
            </b-input-group-prepend>
          </b-input-group>
        </b-col>
      </b-row>
      <br />
  
          <CommunityMembers  :searchh="keywords" ref="search" type="Following"  />
        
    </div>
  </template>
  
  <script>
 
  import CommunityMembers from "@/components/owner/tabs/communityMember";
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
  