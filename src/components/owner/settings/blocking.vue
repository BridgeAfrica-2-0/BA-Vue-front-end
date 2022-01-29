<template>
  <b-container>
    <b-container class="bv-example-row">
      <p class="t-left text">
        {{
          $t(
            "settings.Blocked_users_can_no_longer_see_things_you_post_on_your_business"
          )
        }}, 
        {{ $t("settings.invite_your_business_to_networks") }},
        {{ $t("settings.start_a_conversation") }},
        {{ $t("settings.or_follow_your_business") }}.
      </p>
    </b-container>

    <b-container v-if="blockusers != 0" class="bv-example-row">
      <b-list-group v-for="blockuser in blockusers" :key="blockuser.id">
        <b-skeleton-wrapper :loading="loading">
          <template #loading>
            <b-card>
              <b-skeleton type="avatar"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="70%"></b-skeleton>
            </b-card>
          </template>
          <b-list class="d-flex justify-content-between align-items-center m-list">
            
            <span class="mr-auto">
              <b-avatar
                variant="primary"
                :text="blockuser.name.charAt(0)"
                :src="blockuser.profile_picture"
                class="mr-3"
                size="4em"
              ></b-avatar>
            {{ blockuser.name }}
            </span>
            <span class="mr-auto" @click="UnblockBlockUser(blockuser, 'user')">
              <b-link href="#">{{ $t("settings.Unblock") }}</b-link>
            </span>
          </b-list>
        </b-skeleton-wrapper>
      </b-list-group>
    </b-container>
    <b-container v-else>
      <b-card bg-variant="white" text-variant="black" class="text-center">
        <b-card-text
          >{{ $t("settings.No_Blocked_User_Available") }}.</b-card-text
        >
      </b-card>
    </b-container>

    <b-container v-if="blockbusinesses != 0" class="bv-example-row">
      <b-list-group
        v-for="blockbusines in blockbusinesses"
        :key="blockbusines.id"
      >
        <b-skeleton-wrapper :loading="loading">
          <template #loading>
            <b-card>
              <b-skeleton type="avatar"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="70%"></b-skeleton>
            </b-card>
          </template>
          <b-list class="d-flex align-items-center m-list">
            
            <span class="mr-auto">
              <b-avatar
                variant="primary"
                :text="blockbusines.name.charAt(0)"
                :src="blockbusines.profile_picture"
                class="mr-3"
                size="4em"
              ></b-avatar>
              {{ blockbusines.name }}
            </span>
            <span
              class="mr-auto"
              @click="UnblockBlockUser(blockbusines, 'business')"
              >
              <b-link href="#">{{ $t("settings.Unblock") }}</b-link>
            </span>
          </b-list>
        </b-skeleton-wrapper>
      </b-list-group>
    </b-container>
    <b-container v-else>
      <b-card bg-variant="white" text-variant="black" class="text-center">
        <b-card-text class="font-mobile-14">{{ $t("settings.No_Blocked_Business_Available") }}.</b-card-text>
      </b-card>
    </b-container>

    <b-container v-if="blocknetworks != 0" class="bv-example-row">
      <b-list-group v-for="blocknet in blocknetworks" :key="blocknet.id">
        <b-skeleton-wrapper :loading="loading">
          <template #loading>
            <b-card>
              <b-skeleton type="avatar"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="70%"></b-skeleton>
            </b-card>
          </template>
          <b-list class="d-flex align-items-center m-list">
            <b-avatar
              variant="primary"
              :text="blocknet.name.charAt(0)"
              :src="blocknet.profile_picture"
              class="mr-3"
              size="4em"
            ></b-avatar>
            <span class="mr-auto">{{ blocknet.name }}</span>
            <span class="mr-auto" @click="UnblockBlockUser(blocknet, 'network')"
              ><b-link href="#">{{ $t("settings.Unblock") }}</b-link></span
            >
          </b-list>
        </b-skeleton-wrapper>
      </b-list-group>
    </b-container>
    <b-container v-else>
      <b-card bg-variant="white" text-variant="black" class="text-center">
        <b-card-text class="font-mobile-14">{{ $t("settings.No_Blocked_Network_Available") }}.</b-card-text>
      </b-card>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "blocking",
  data() {
    return {
      url: null,
      loading: false,
    };
  },

  computed: {
    blockusers() {
      return this.$store.state.profile.blockuser;
    },
    blockbusinesses() {
      return this.$store.state.profile.blockbusiness;
    },
    blocknetworks() {
      return this.$store.state.profile.blocknetwork;
    },
  },

  mounted() {
    this.blockUsers();
    this.blockBusiness();
    this.blockNetwork();
  },

  methods: {
    blockUsers() {
      this.loading = true;
      this.$store
        .dispatch("profile/getblockusers", "blocked/user")
        .then(() => {
          console.log("ohh year");
          this.loading = false;
        })
        .catch((err) => {
          console.log({ err: err });
          this.loading = false;
        });
    },

    blockBusiness() {
      this.loading = true;
      this.$store
        .dispatch("profile/getblockbusiness", "blocked/business")
        .then(() => {
          console.log("ohh year");
          this.loading = false;
        })
        .catch((err) => {
          console.log({ err: err });
          this.loading = false;
        });
    },

    blockNetwork() {
      this.loading = true;
      this.$store
        .dispatch("profile/getblocknetwork", "blocked/network")
        .then(() => {
          console.log("ohh year");
          this.loading = false;
        })
        .catch((err) => {
          console.log({ err: err });
          this.loading = false;
        });
    },

    UnblockBlockUser(blockuser, type) {
      this.loading = true;
      console.log("{{url}}/api/v1/profile/unblock/entity");
      console.log(blockuser);
      let fd = new FormData();
      fd.append("id", blockuser.id);
      fd.append("type", type);
      this.axios
        .post("profile/unblock/entity", fd)
        .then((response) => {
          console.log(response);
          this.blockUsers();
          this.blockBusiness();
          this.blockNetwork();
          this.loading = false;
          this.flashMessage.show({
            status: "success",
            message: this.$t("businessowner.User_Unblocked"),
          });
        })
        .catch((err) => {
          console.log({ err: err });
          this.loading = false;
          this.flashMessage.show({
            status: "error",
            message: this.$t("settings.Unable_to_Unblock_User"),
          });
        });
    },
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
  .font-mobile-14{
    font-size: 14px;
  }
}
</style>
