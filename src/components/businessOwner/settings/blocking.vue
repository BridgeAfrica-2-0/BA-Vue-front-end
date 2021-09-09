<template>
  <b-container>
    <b-container class="bv-example-row">
      <p class="t-left">
        Blocked users can no longer see things you post on your business, invite
        your business to networks, strat a conversation, or follow your
        business.
      </p>
    </b-container>

    <b-container class="bv-example-row">
      <b-list-group v-for="blockuser in blockusers" :key="blockuser.id">
        
        <b-list class="d-flex align-items-center">
          <b-avatar
            variant="primary"
            :text="blockuser.name"
            :src="blockuser.profile_picture"
            class="mr-3"
            size="4em"
          ></b-avatar>
          <span class="mr-auto">{{blockuser.name}}</span>
          <span class="mr-auto" @click="UnblockBlockUser(blockuser)"><b-link href="#">Unblock</b-link></span>
        </b-list>

      </b-list-group>
    </b-container>
  </b-container>
</template>

<script>
import axios from "axios";
export default {
  name: "blocking",
  data() {
    return {
      
    }
	},
  computed: {
    blockusers() {
      return this.$store.state.businessBlocking.blockusers;
    }
  },
  mounted(){
    this.blockUsers() 
  },
  methods:{
     
    blockUsers() {
    this.$store
      .dispatch("businessBlocking/getblockusers")
      .then(() => {
        console.log('ohh year');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },
     
    UnblockBlockUser(blockuser) {
			axios.post("business/unblocking/6/10", blockuser)
			.then(response => {
			  console.log(response);
        this.blockUsers();
        this.flashMessage.show({
          status: "success",
          message: "User Unblocked"
        });
			})
      .catch(err => {
        console.log({ err: err });
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