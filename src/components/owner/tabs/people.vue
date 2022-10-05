<template>

    <div class="community-box">
       <VuePerfectScrollbar
      class="scroll-area s-card"
      settings="{maxScrollbarLength: 60px}" >
    <Person v-for="item in users" :key="item.id" :person="item" @getTotalCommunity='getTotalCommunity' />
     <infinite-loading @infinite="infiniteHandler"></infinite-loading>
       </VuePerfectScrollbar>
  </div>
  
</template>

<script>
// import moment from 'moment';
import axios from "axios";
import Person from "@/components/Person";
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
  props: ["type"],
    components: {
  Person,VuePerfectScrollbar
  },
  data() {
    return {
      page: 1,
       
      foll_id: null,
      users: [],
      options: {
        rewind: true,
        autoplay: true,
        perPage: 1,
        pagination: false,

        type: "loop",
        perMove: 1,
      },
    };
  },

  mounted() {
    this.foll_id = this.$route.params.id ? this.$route.params.id : "";
     this.islogin=this.$store.getters["auth/isLogged"];
  },

  computed: {
     islogin(){  return this.$store.getters["auth/profilConnected"]; },
    show() {
      return this.$route.name;
    },
    old_users() {
      if (this.type == "Follower") {
        return this.$store.state.profile.UcommunityFollower.user_followers;
      } else {
        return this.$store.state.profile.UcommunityFollowing.user_following;
      }
    },
  },

  methods: {
    count(number) {
      if (number >= 1000000) {
        return number / 1000000 + "M";
      }
      if (number >= 1000) {
        return number / 1000 + "K";
      } else return number;
    },

    infiniteHandler($state) {
      console.log(this.foll_id);
      let url =
        this.type == "Follower"
          ? "profile/user/follower/"
          : "profile/user/following/";

           if(!this.islogin){
            url='guest/'+url;
          }
      axios
        .get(url + this.page + "?slug=" + this.foll_id)
        .then(({ data }) => {
          if (this.type == "Follower") {
            if (data.data.user_followers.length) {
              this.page += 1;

              this.users.push(...data.data.user_followers);
              $state.loaded();
            } else {
              $state.complete();
            }
          } else {
            if (data.data.user_following.length) {
              this.page += 1;

              this.users.push(...data.data.user_following);
              $state.loaded();
            } else {
              $state.complete();
            }
          }
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    getTotalCommunity(){
         this.$store
      .dispatch("profile/Tcommunity", this.foll_id)
      .then((response) => {})
      .catch((error) => {
        console.log({ error: error });   
      });
    },
    async handleFollow(user) {
      
      document.getElementById("followbtn" + user.id).disabled = true;
      const uri = user.is_follow === 0 ? `/follow-community` : `/unfollow`;
      const nextFollowState = user.is_follow === 0 ? 1 : 0;
      const data = {
        id: user.id,
        type: "user",
      };

      await axios
        .post(uri, data)
        .then(({ data }) => {
          console.log(data);
          user.is_follow = nextFollowState;
          document.getElementById("followbtn" + user.id).disabled = false;

          this.getTotalCommunity();
        })

        .catch((err) => {
          console.log({ err: err });
          document.getElementById("followbtn" + user.id).disabled = false;
        });
    },
  },
};
</script>

<style >
  .community-box{
   height: 400px;
  }

 .scroll-area{
  height: inherit !important;
 }
</style>