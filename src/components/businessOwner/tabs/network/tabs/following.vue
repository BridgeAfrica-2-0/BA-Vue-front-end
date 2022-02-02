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
            <b-icon-search class="text-primary border-none"></b-icon-search>
          </b-input-group-prepend>
        </b-input-group>
      </b-col>
    </b-row>

    <br />

          <CommunityBusiness @BlockUser="BlockUser" :searchh="keywords" ref="search" type="Following" />
     
  </div>
</template>

<script>
import CommunityBusiness from "../../communitynetwork";
export default {
  data() {
    return {
        keywords:"",
    }
    },
  components: {
    CommunityBusiness
  },

   computed: {
    folowing() {
      return this.$store.state.profile.CommunityBusiness.business_following;
    }
  },
  methods: {
    BlockUser(id) {
      console.log(id);
      let dataInfo = {
        id: id,
        refernce: "network",
        type: "following",
      };
      this.$emit('BlockUser', dataInfo);
    },
  }

};
</script>

<style></style>
