<template>
  <div class="community-box">
     <VuePerfectScrollbar
      class="scroll-area s-card"
      settings="{maxScrollbarLength: 60px}" >
    
   <Network v-for="item in network" :network="item" :key="item.id"  @getTotalCommunity='getTotalCommunity' />
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>

     </VuePerfectScrollbar>
  </div>
</template>

<script>
import axios from "axios";
import Network from "@/components/Network";
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
export default {
  props: ["type"],
  components: {
    Network,VuePerfectScrollbar
  },
  data() {
    return {
      page: 1,
  
      foll_id: null,
      network: [],
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
     islogin(){  return this.$store.getters["auth/isLogged"]; },
    show() {
      return this.$route.name;
    },
  },

  mounted() {

     this.islogin=this.$store.getters["auth/isLogged"];
    this.foll_id = this.$route.params.id ? this.$route.params.id : "";
  },

  methods: {
    async handleJoin(user) {
      document.getElementById("joinbtn" + user.id).disabled = true;
      const uri = user.is_member === 0 ? `/add-member` : `/remove-member`;
      const nextFollowState = user.is_member === 0 ? 1 : 0;
      const data = {
        id: user.id,
        type: "network",
      };

      await axios
        .post(uri, data)
        .then((response) => {
          console.log(response);
          user.is_member = nextFollowState;
          document.getElementById("joinbtn" + user.id).disabled = false;
        })
        .catch((err) => {
          console.log(err);
          document.getElementById("joinbtn" + user.id).disabled = false;
        });
    },

    infiniteHandler($state) {
      console.log("loading network 1 1");

      let url =
        this.type === "Follower"
          ? `profile/network/follower/`
          : `profile/network/following/`;

           if(!this.islogin){
            url='guest/'+url;
          }

      axios
        .get(url + this.page + "?slug=" + this.foll_id)
        .then(({ data }) => {
        
          if (this.type == "Follower") {
            if (data.data.network_followers.length) {
              this.page += 1;
              this.network.push(...data.data.network_followers);

              $state.loaded();
            } else {
              $state.complete();
            }
          } else {
            if (data.data.network_following.length) {
              this.page += 1;

              this.network.push(...data.data.network_following);

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
        type: "network",
      };

      await axios
        .post(uri, data)
        .then((response) => {
          user.is_follow = nextFollowState;
          document.getElementById("followbtn" + user.id).disabled = false;

             this.getTotalCommunity();
        })
        .catch((err) => {
          console.log(err);
          document.getElementById("followbtn" + user.id).disabled = false;
        });
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .btn-text {
    margin-left: 8px;
  }

  .btn-com {
    margin-left: 4px;
  }
  .btn-icon {
    margin-top: 3px;
  }

  .center-img {
    margin-right: -60px;
  }
}

@media only screen and (max-width: 768px) {
  .btn-icon {
    margin-top: 3px;
  }

  .btn-text {
    margin-left: 5px;
  }

  .btn-com {
    margin-left: 3px;
  }
}

.u-btn {
  filter: grayscale(0.6);
}
.btnpngs {
  width: 20px;
  margin-right: 5px;
}

.btn {
  border-radius: 5px;
}

.card {
  color: orange;
}

.s-button {
  align-content: center;
  text-align: center;

  padding: 15px;
}

@media only screen and (max-width: 768px) {
  .a-flex {
    margin-right: -15px;
  }

  .s-button {
    padding: 15px;
    margin-top: -15px;
  }

  .title {
    font-size: 16px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .textt {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: -30px;

    margin-right: -5px;

    line-height: 25px;
  }

  .location {
    margin-bottom: 30px;
  }

  .btn {
    padding-top: 6px;
    font-size: 10px;

    height: 28px;
    width: 97px;
  }

  .r-image {
    border-radius: 8px;

    height: 100px;
    width: 100px;
  }
}

@media only screen and (min-width: 768px) {
  .title {
    font-size: 20px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .textt {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: 30px;

    margin-right: -5px;

    line-height: 25px;
  }

  .location {
    margin-bottom: 30px;
  }

  .btn {
    padding-top: 6px;
    height: 38px;
    width: 115px;
    font-size: 12px;
    margin-left: -10px;

    padding-top: 8px;
  }

  .r-image {
    border-radius: 8px;

    height: 160px;
    width: 160px;
  }
}

.stock {
  color: green;
}

.b1 {
  width: 100px;
  margin-left: -20px;
}

.b2 {
  width: 120px;

  margin-left: -15px;
}

.btn {
  display: flex;
}

.ico {
  margin-right: 5px;
}

@media only screen and (min-width: 768px) {
  .people-style {
    border-top-left-radius: 5px;

    border-bottom-left-radius: 5px;

    border-top-right-radius: 5px;

    border-bottom-right-radius: 5px;

    background: white;

    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;

    margin-right: 8px;

    padding: 7px;
  }
}

@media only screen and (max-width: 768px) {
  .people-style {
    border-top-left-radius: 5px;

    border-bottom-left-radius: 5px;

    border-top-right-radius: 5px;

    border-bottom-right-radius: 5px;

    background: white;

    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;

    margin-right: 8px;

    padding: 7px;
  }

  .btn {
    display: flex;

    padding-right: 60px;
  }

  h4 {
    font-size: 15px;
  }
}

@media only screen and (max-width: 520px) {
  .btn {
    display: flex;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1331px) {
  .btn {
    width: 98px;
    height: 33px;
    font-size: 12px;
    margin-left: -10px;
    padding-top: 8px;
  }
}
</style>