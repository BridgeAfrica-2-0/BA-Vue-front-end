<template>
  <div>
    <b-modal id="modal-sm" size="sm" hide-header>
      {{ $t("businessowner.Do_you_want_to_join_this_network") }}?
    </b-modal>
 
   <Network v-for="item in network"  :network="item" :key="item.id"  @getTotalCommunity='getTotalCommunity' />
   
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import axios from "axios";
import Network from "@/components/Network";
export default {
  props: ["type"],
  data() {
    return {
      page: 1,
   
      net_id: null,
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
 components: {
    Network,
  },
  computed: {
    
    islogin(){  return this.$store.getters["auth/isLogged"]; },
    old_network() {
      if (this.type == "Follower") {
        return this.$store.state.businessOwner.NcommunityFollower
          .network_followers;
      } else {
        return this.$store.state.profile.NcommunityFollowing.network_following;
      }
    },
  },

  mounted() {
    this.islogin=this.$store.getters["auth/isLogged"];
    this.net_id = this.$route.params.id;
  },

  methods: {

    networkJoin: async function(item){
      const status = item.is_follow

      const request = !status ? await this.$repository.share.jointNetwork({id: item.id , type: "network"}) : await this.$repository.share.removeNetwork({id: item.id , type: "network"})
        

      if (request.success){
        item = Object.assign(item, {is_follow: status ? 0 : 1})

        this.flashMessage.show({
          status: "success",
          title: request.data,
        });
      }
    }, 

    infiniteHandler($state) {
     

      let url = `network/community/networks/${this.net_id}/`
        if(!this.islogin){
            url='guest/'+url;
          }


      axios
        .get(url + this.page)
        .then(({ data }) => {
          console.log("lading network after response");
          console.log(data);
          if (this.type == "Follower") {
            if (data.data.Network_followers.length) {
              this.page += 1;
              this.network.push(...data.data.Network_followers);

              $state.loaded();
            } else {
              $state.complete();
            }
          } else {
            if (data.data.Network_following.length) {
              this.page += 1;

              this.network.push(...data.data.Network_following);

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

 

   networkDetails() {
      console.log("networkDetails");
      this.$store
        .dispatch("networkProfileCommunitySidebar/getNetworkDetails", this.net_id)
        .then(() => {
          console.log("ohh year");
        })
        .catch((err) => {
          console.log({ err: err });
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

          this.networkDetails();
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

.flx100{
  flex-basis: 70%;
}
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
  padding-top: 2px;
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

    margin-left: 2px;

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

    margin-left: 65px;

    margin-right: -5px;

    line-height: 25px;
  }

  .location {
    margin-bottom: 30px;
  }

  .btn {
    padding-top: 6px;
    height: 38px;
    width: 110px;
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
