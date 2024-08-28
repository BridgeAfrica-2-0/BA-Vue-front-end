<template>
  <div>
    <b-row>
      <b-col cols="12" md="6">
        <b-input-group class="mb-2 px-md-3 float-right">
          <b-form-input
            aria-label="Text input with checkbox"
            :placeholder="$t('profileowner.Search_Something')"
            v-model="search"
          ></b-form-input>

          <b-input-group-prepend is-text>
            <b-icon-search
              @click="$refs.search.search()"
              class="text-primary border-none"
            ></b-icon-search>
          </b-input-group-prepend>
        </b-input-group>
      </b-col>
    </b-row>

    <br />
    <CommunityBusiness
      @BlockUser="BlockUser"
      :searchh="search"
      ref="search"
      type="Following"
    />
  </div>
</template>

<script>
import CommunityBusiness from "../../communitybusiness";
export default {
  data() {
    return {
      search: ""
    };
  },

  components: {
    CommunityBusiness
  },

  computed: {},
  methods: {
    BlockUser(id) {
      console.log(id);
      let dataInfo = {
        id: id,
        refernce: "business",
        type: "following"
      };
      this.$emit("BlockUser", dataInfo);
    }
  }
};
</script>

<style></style>
