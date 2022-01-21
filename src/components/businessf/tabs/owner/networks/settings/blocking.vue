<template>
  <b-container>
    <b-container class="bv-example-row">
      <p class="t-left text">
        {{ $t('network.Blocked_users_can_no_longer_see_things_you_post_on_your_business') }}, 
        {{ $t('network.invite_your_business_to_networks') }}, {{ $t('network.strat_a_conversation') }}, 
        {{ $t('network.or_follow_your_business') }}.
      </p>
    </b-container>

    <b-container v-if="blockusers != 0 || blocknetworks != 0 || blockbusiness != 0" class="bv-example-row">
      <div v-if="blockusers != 0">
        <h6 class="font-weight-bolder">
          {{ $t('network.Blocked_Users') }} ({{blockusers.length}})
        </h6>
        <hr width="100%" />
        <b-list-group v-for="blockuser in blockusers" :key="blockuser.id">
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
                :text="blockuser.name.charAt(0)"
                :src="blockuser.profile_picture"
                class="mr-3"
                size="4em"
              ></b-avatar>
              <span class="mr-auto">{{blockuser.name}}</span>
              <span class="mr-auto float-right text-center mt-1" @click="UnblockUser(blockuser)"><b-link>{{ $t('network.Unblock') }}</b-link></span>
            </b-list>
          </b-skeleton-wrapper>
        </b-list-group>
      </div>
      <div v-if="blocknetworks != 0">
        <h6 class="font-weight-bolder">
          {{ $t('network.Blocked_Users') }} ({{blocknetworks.length}})
        </h6>
        <hr width="100%" />
        <b-list-group v-for="blocknetwork in blocknetworks" :key="blocknetwork.id">
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
                :text="blocknetwork.name.charAt(0)"
                :src="blocknetwork.profile_picture"
                class="mr-3"
                size="4em"
              ></b-avatar>
              <span class="mr-auto">{{blocknetwork.name}}</span>
              <span class="mr-auto float-right mt-1" @click="UnblockNetwork(blocknetwork)"><b-link href="#">{{ $t('network.Unblock') }}</b-link></span>
            </b-list>
          </b-skeleton-wrapper>
        </b-list-group>
      </div>
      <div v-if="blockbusiness != 0">
        <h6 class="font-weight-bolder">
          {{ $t('network.Blocked_Users') }} ({{blockbusiness.length}})
        </h6>
        <hr width="100%" />
        <b-list-group v-for="blockbusines in blockbusiness" :key="blockbusines.id">
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
                :text="blockbusines.name.charAt(0)"
                :src="blockbusines.profile_picture"
                class="mr-3"
                size="4em"
              ></b-avatar>
              <span class="mr-auto">{{blockbusines.name}}</span>
              <span class="mr-auto float-right mt-1" @click="UnblockBusines(blockbusines)"><b-link href="#">{{ $t('network.Unblock') }}</b-link></span>
            </b-list>
          </b-skeleton-wrapper>
        </b-list-group>
      </div>
    </b-container>
    <b-container v-else>
      <b-card bg-variant="white" text-variant="black" class="text-center">
        <b-card-text>{{ $t('network.No_Blocked_User_Available') }}.</b-card-text>
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
      loading: false
    }
	},

  computed: {
    // blockusers() {
    //   return this.$store.state.NetworkSettings.blockusers;
    // },
    blocknetworks() {
      return this.$store.state.NetworkSettings.blocknetworks;
    },
    blockbusiness() {
      return this.$store.state.NetworkSettings.blockbusiness;
    },
  },

  mounted(){
    this.url = this.$route.params.id;
    this.blockUsers();
    this.blockNetworks();
    this.blockBusiness();
  },
  
  methods:{
     
    blockUsers() {
      this.loading = true;
      console.log("blockUsers");
    this.$store
      .dispatch("NetworkSettings/getblockusers", this.url)
      .then(() => {
        this.loading = false;
        console.log('ohh year');
      })
      .catch(err => {
        this.loading = false;
        console.log({ err: err });
      });
    },
    blockNetworks() {
      this.loading = true;
      console.log("blockNetworks");
    this.$store
      .dispatch("NetworkSettings/getblocknetworks", this.url)
      .then(() => {
        this.loading = false;
        console.log('ohh year');
      })
      .catch(err => {
        this.loading = false;
        console.log({ err: err });
      });
    },
    blockBusiness() {
      this.loading = true;
      console.log("blockBusiness");
    this.$store
      .dispatch("NetworkSettings/getblockbusinesses", this.url)
      .then(() => {
        this.loading = false;
        console.log('ohh year');
      })
      .catch(err => {
        this.loading = false;
        console.log({ err: err });
      });
    },
     
    UnblockUser(blockuser) {
      this.loading = true;
      console.log("unblocked-user/"+this.url+"/"+blockuser.id);
      this.$store
      .dispatch("NetworkSettings/UnBlock", 
      {
        path: "unblocked-user/"+this.url+"/"+blockuser.id,
      })
			.then(response => {
			  console.log(response);
        this.blockUsers();
        this.loading = false;
        this.flashMessage.show({
          status: "success",
          message: "User Unblocked"
        });
			})
      .catch(err => {
        console.log({ err: err });
        this.loading = false;
        this.flashMessage.show({
          status: "error",
          message: "Unable to Unblocked User"
        });
      });
    },
    UnblockNetwork(blocknetwork) {
      this.loading = true;
      console.log("unblocked-network/"+this.url+"/"+blocknetwork.id);
      this.$store
      .dispatch("NetworkSettings/UnBlock", 
      {
        path: "unblocked-network/"+this.url+"/"+blocknetwork.id,
      })
			.then(response => {
			  console.log(response);
        this.blockUsers();
        this.loading = false;
        this.flashMessage.show({
          status: "success",
          message: "User Unblocked"
        });
			})
      .catch(err => {
        console.log({ err: err });
        this.loading = false;
        this.flashMessage.show({
          status: "error",
          message: "Unable to Unblocked User"
        });
      });
    },
    UnblockBusines(blockbusines) {
      this.loading = true;
      console.log("unblocked-business/"+this.url+"/"+blockbusines.id);
      this.$store
      .dispatch("NetworkSettings/UnBlock", 
      {
        path: "unblocked-business/"+this.url+"/"+blockbusines.id,
      })
			.then(response => {
			  console.log(response);
        this.blockUsers();
        this.loading = false;
        this.flashMessage.show({
          status: "success",
          message: "User Unblocked"
        });
			})
      .catch(err => {
        console.log({ err: err });
        this.loading = false;
        this.flashMessage.show({
          status: "error",
          message: "Unable to Unblocked User"
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
}
</style>