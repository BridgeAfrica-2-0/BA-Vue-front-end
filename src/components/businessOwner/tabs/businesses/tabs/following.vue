<template>
  <div>
    <b-row>
      <b-col cols="12" md="6">
        <b-input-group class="mb-2 px-md-3 float-right">
          <b-form-input
            aria-label="Text input with checkbox"
            :placeholder="$t('businessowner.Search_Something')"
             v-model="search"
          ></b-form-input>

          <b-input-group-prepend is-text>
            <b-icon-search  @click="$refs.search.search()" class="text-primary border-none"></b-icon-search>
          </b-input-group-prepend>
        </b-input-group>
      </b-col>
    </b-row>

    <br />

          <CommunityBusiness  :searchh="search" ref="search"  type="Following"  />
     
  </div>
</template>

<script>
import CommunityBusiness from "../../communitybusiness";
export default {

   data() {
    return {
        search:"",
    }
    },
    
  components: {
    CommunityBusiness
  },

   computed: {
   
  },

};
</script>

<style></style>
