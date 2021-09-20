<template>
  <div>

         <b-row>
      <b-col cols="12" class="mx-auto">
        <b-input-group class="mb-2 px-md-3 mx-auto">
          <b-input-group-prepend is-text>
            <b-icon-search class="text-primary border-none"></b-icon-search>
          </b-input-group-prepend>
          <b-form-input
            aria-label="Text input with checkbox"
            placeholder="Search Something"
          ></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col v-if="followings.length <= 0" >
        No Community Members
      </b-col>
      <b-col md="12" lg="6" v-for="member in followings" :key="member.id" v-else>
        <CommunityMembers :member="member" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CommunityMembers from "../../communityMember"
export default {
  components: {
    CommunityMembers
  },
  props: ["followings"]
};
</script>

<style>

</style>