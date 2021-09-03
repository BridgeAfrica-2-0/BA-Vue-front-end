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

    <b-row>
      <b-col v-if="followers.length <= 0" >
        No Community Members
      </b-col>
      <b-col md="12" lg="6" v-for="member in followers" :key="member.id" v-else>
        <CommunityMembers :member="member" />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CommunityMembers from "../../communityMember";
export default {
  components: {
    CommunityMembers
  },
  props: ["followers"]
};
</script>

<style></style>
