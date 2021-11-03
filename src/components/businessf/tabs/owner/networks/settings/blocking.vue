<template>
  <b-container>
    <b-container class="bv-example-row">
      <p class="t-left text">
        Blocked users can no longer see things you post on your business, invite
        your business to networks, strat a conversation, or follow your
        business.
      </p>
    </b-container>

    <b-container
      v-for="blockuser in blockusers"
      :key="blockuser.id"
      class="bv-example-row"
    >
      <b-li-group>
        <b-li
          v-for="blocked in getBlocked"
          :key="blocked.id"
          class="d-flex align-items-center m-list"
        >
          <b-avatar class="mr-3" size="4em">
            <img :src="blocked.image" alt="" />
          </b-avatar>
          <span class="mr-auto">blocked.name</span>
          <span class=""
            ><b-link @click="unblock(getNetworks.id, blocked.id)"
              >Unblock</b-link
            ></span
          >
          <hr width="100%" />
        </b-li>
        <v-row>
          <v-col>
            <p class="text-center" v-if="getBlocked < 1">No Blocked Users</p>
          </v-col>
        </v-row>
      </b-li-group>
    </b-container>
  </b-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "blocking",
  computed: {
    ...mapGetters({
      getBlocked: "networkSetting/getBlocked",
      getNetworks: "networkSetting/getNetworks",
    }),
  },
  methods: {
    ...mapActions({
      getBlockedUsers: "networkSetting/getBlockedUsers",
      unblockUser: "networkSetting/unblockUser",
      getNetworks: "networkSetting/getNetworks",
    }),
    unblock(networkId, userId) {
      this.unblockUser(networkId, userId);
    },
  },
  beforeMount() {
    this.getBlockedUsers();
    this.getNetworks();
    return this.getNetworks.id;
  },
};
</script>

<style scoped>
.m-list {
  margin-bottom: 15px;
  margin-top: 10px;
}
.t-left {
  text-align: left;
}
.a-text {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}

@media only screen and (max-width: 768px) {
  .settings {
    top: -5px;
    left: -20px;
  }
}
</style>
