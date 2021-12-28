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
            :placeholder="$('general.Search_Something')"
          ></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>
    <br />

    <b-row>
      <b-col md="12" class="ml-0 mr-0">
        <CommunityMembers />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import CommunityMembers from "../../communityMember";
export default {
  components: {
    CommunityMembers
  }
};
</script>

<style></style>
