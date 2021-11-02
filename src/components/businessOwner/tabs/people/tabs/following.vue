<template>
  <div>
<<<<<<< HEAD
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

    <b-row>
      <b-col md="12" lg="6">
        <CommunityMembers  :searchh="keywords" ref="search" type="Following"  />
      </b-col>  

      
    </b-row>
=======
    <b-row>
      <b-col>
        <b-row>
          <b-col cols="12" md="6">
            <b-input-group class="mb-2 px-md-3 float-right">
              <b-form-input
                aria-label="Text input with checkbox"
                placeholder="Search Something"
                v-model="searchQuery"
              ></b-form-input>

              <b-input-group-prepend is-text>
                <b-icon-search class="text-primary border-none"></b-icon-search>
              </b-input-group-prepend>
            </b-input-group>
          </b-col>
        </b-row>

        <br />

        <b-row>
          <b-col
            v-for="(follower, index) in theFollowers"
            :key="index"
            md="12"
            lg="6"
          >
            <CommunityMembers :follower="follower" />
          </b-col>
          <b-col v-if="loader" class="load">
            <b-spinner class="spin" variant="primary"></b-spinner>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <div v-if="followers.length < 1 && !loader" class="load">
      <p>No one is following you !!</p>
    </div>
>>>>>>> 08e912fa9578e3da33c7134321b3f72ca3269a58
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
