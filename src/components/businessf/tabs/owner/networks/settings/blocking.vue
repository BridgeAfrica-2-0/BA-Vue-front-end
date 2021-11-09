<template>
  <b-container>
    <b-container class="bv-example-row">
      <p class="t-left text">
        Blocked users can no longer see things you post on your business, invite
        your business to networks, strat a conversation, or follow your
        business.
      </p>
    </b-container>

    <b-container v-if="blockusers != 0 || blocknetworks !=0 || blockbusiness != 0" class="bv-example-row">
      <b-row class="mt-4" v-if="blockusers != 0">
        <b-col cols="12">
          <h6 class="font-weight-bolder">
            Blocked Users ({{nFormatter(blockusers.length)}})
          </h6>
          <hr width="100%" />
          <b-skeleton-wrapper :loading="loading">
            <template #loading>
              <b-card>
                <b-skeleton width="85%"></b-skeleton>
                <b-skeleton width="55%"></b-skeleton>
                <b-skeleton width="70%"></b-skeleton>
              </b-card>
            </template>
            <div class="scroll">
              <div v-for="blockuser in blockusers" :key="blockuser.id">
                <p class="">
                  <span class="">
                    <b-avatar
                      class="d-inline-block"
                      variant="primary"
                      :src="blockuser.profile_picture"
                      :text="blockuser.name.charAt(0)"
                      size="3.5rem"
                    ></b-avatar>
                    <h5 class="m-0 bold username d-inline-block ml-2">
                      {{blockuser.name}}
                    </h5>
                  </span>
                  <span class="float-right mt-1">
                    <b-dropdown
                      size="lg"
                      variant="link"
                      toggle-class="text-decoration-none"
                      no-caret
                    >
                      <template #button-content>
                        <b-icon-three-dots-vertical></b-icon-three-dots-vertical
                        ><span class="sr-only">Settings</span>
                      </template>
                      <b-dropdown-item href="#" @click="UnblockBlockUser(blockuser)">
                        <b-icon-trash-fill></b-icon-trash-fill> Unblock
                      </b-dropdown-item>
                    </b-dropdown>
                  </span>
                </p>
              </div>
            </div>
          </b-skeleton-wrapper>
        </b-col>
      </b-row>


<!-- 
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
            <span class="mr-auto" @click="UnblockBlockUser(blockuser)"><b-link href="#">Unblock</b-link></span>
          </b-list>
        </b-skeleton-wrapper>
      </b-list-group> -->
    </b-container>
    <b-container v-else>
      <b-card bg-variant="white" text-variant="black" class="text-center">
        <b-card-text>No Blocked User Available.</b-card-text>
      </b-card>
    </b-container>

    <FlashMessage />

  </b-container>
</template>

<script>
export default {
  name: "blocking",
  data() {
    return {
      url: null,
      loading: false,
    }
	},

  computed: {
    blockusers() {
      return this.$store.state.NetworkSettings.blockusers;
    },
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
        console.log('ohh year');
        this.loading = false;
      })
      .catch(err => {
        console.log({ err: err });
        this.loading = false;
      });
    },
    blockNetworks() {
      this.loading = true;
      console.log("blockNetworks");
    this.$store
      .dispatch("NetworkSettings/getblocknetworks", this.url)
      .then(() => {
        console.log('ohh year');
        this.loading = false;
      })
      .catch(err => {
        console.log({ err: err });
        this.loading = false;
      });
    },
    blockBusiness() {
      this.loading = true;
      console.log("blockBusiness");
    this.$store
      .dispatch("NetworkSettings/getblockbusiness", this.url)
      .then(() => {
        console.log('ohh year');
        this.loading = false;
      })
      .catch(err => {
        console.log({ err: err });
        this.loading = false;
      });
    },
     
    UnblockBlockUser(blockuser) {
      this.loading = true;
      console.log("business/unblocking/"+this.url+"/"+blockuser.user_id);
			this.axios.delete("business/unblocking/"+this.url+"/"+blockuser.user_id)
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
    }
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