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

    <b-col>
      <b-row class="mb-3">
        <CommunityBusiness :following="true" />
      </b-row>
      <b-row> <CommunityBusiness :following="true"/></b-row>
    </b-col>
  </div>
</template>

<script>
import CommunityBusiness from "../../communitybusiness";
export default {
  components: {
    CommunityBusiness,
  },
};
</script>

<style></style>
