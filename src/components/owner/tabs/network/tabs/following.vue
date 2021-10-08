<template>
  <div>
    <b-row>
      <b-col cols="12" md="6">
        <b-input-group class="mb-2 px-md-3 float-right">
          <b-form-input
            aria-label="Text input with checkbox"
            placeholder="Search Something"
          ></b-form-input>

          <b-input-group-prepend is-text>
            <b-icon-search class="text-primary border-none"></b-icon-search>
          </b-input-group-prepend>
        </b-input-group>
      </b-col>
    </b-row>

    <br />

          <CommunityBusiness   :business="folowing"  />
     
  </div>
</template>

<script>
import CommunityBusiness from "../../communitybusiness";
export default {
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
