<template>
  <div>
    <b-row>
      <b-col cols="12" md="6">
        <b-input-group class="mb-2 px-md-3 float-right">
          <b-form-input
            aria-label="Text input with checkbox"
            v-model="search"
            :placeholder="$t('profileowner.Search_Something')"
          ></b-form-input>

          <b-input-group-prepend is-text>
            <b-icon-search class="text-primary border-none"  @click="$refs.search.search()"></b-icon-search>
          </b-input-group-prepend>
        </b-input-group>
      </b-col>
    </b-row>
    <br />

        <CommunityBusiness @BlockUser="BlockUser" :searchh="search" ref="search" type="Follower" />
        
     
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
  
  methods: {
    BlockUser(id) {
      console.log(id);
      let dataInfo = {
        id: id,
        refernce: "business",
        type: "follower",
      };
      this.$emit('BlockUser', dataInfo);
    },
  }

  

};
</script>

<style></style>
