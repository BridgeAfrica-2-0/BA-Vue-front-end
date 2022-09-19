<template>
  <div>
    <div class="s-ccard">
    

         <VuePerfectScrollbar
      class="scroll-area s-card"
      settings="{maxScrollbarLength: 60px}" >
    
          <Person v-for="item in users" :key="item.id" :person="item" @getTotalCommunity='getTotalCommunity' />
       
     <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading" ></infinite-loading>
  </VuePerfectScrollbar>
     
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Person from "@/components/Person";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
export default {
  props: ["type"],

  components: {
    Person, VuePerfectScrollbar
  },

  data() {
    return {
      page: 1,
      users:[],
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

  computed: {
    old_users() {
      if (this.type == "Follower") {
        return this.$store.state.profile.UcommunityFollower.user_followers;
      } else {
        return this.$store.state.profile.UcommunityFollowing.user_following;
      }
    },
  },

  methods: {

  getTotalCommunity(){
         this.$store
      .dispatch("profile/Tcommunity")
      .then((response) => {})
      .catch((error) => {
       
      });
    },



    count(number) {
      if (number >= 1000000) {
        return number / 1000000 + "M";
      }
      if (number >= 1000) {
        return number / 1000 + "K";
      } else return number;
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
         
          this.getTotalCommunity();
          user.is_follow = nextFollowState;
          document.getElementById("followbtn" + user.id).disabled = false;
        })

        .catch((err) => {
         
          document.getElementById("followbtn" + user.id).disabled = false;
        });
    },

    infiniteHandler($state) {
     

      let url = null;

      if (this.type == "Follower") {
        url = "profile/user/follower/";
      } else {
        url = "profile/user/following/";
      }
      axios
        .get(url + this.page)
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
         
        });
    },
  },
};
</script>


<style>
.follower {
  font-size: 12px !important;
}
</style>
