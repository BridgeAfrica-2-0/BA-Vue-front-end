<template>
  <div class="h-100">
    <b-modal id="modal-sm" size="sm" hide-header>
      {{ $t("dashboard.Do_you_want_to_join_this_network") }}
    </b-modal>

    
  <VuePerfectScrollbar class="scroll-area s-card" settings="{maxScrollbarLength: 60px}" >
   
  <Network v-for="item in network" :network="item" :key="item.id"  @getTotalCommunity='getTotalCommunity' />
    
    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </VuePerfectScrollbar>




  </div>
</template>

<script>
import axios from "axios";
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import Network from "@/components/Network";

export default {
  props: ["type"],
   components: {
    Network,VuePerfectScrollbar
  },

  data() {
    return {
      page: 1,
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
    biz_id() {
      return this.$store.state.dashboard.dBusinessId;
    },
  },

  methods: {


     businessCommunityTotal() {
      this.$store
        .dispatch("businessOwner/businessCommunityTotal", this.biz_id)
        .then(() => {
        
        })
        .catch((err) => {
         
        });
    },


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
         
          user.is_member = nextFollowState;
          document.getElementById("joinbtn" + user.id).disabled = false;
          this.businessCommunityTotal();
           this.flashMessage.show({
            status: "success",
            message: response.data.message,
            blockClass: "custom-block-class",
          })


        })
        .catch((err) => {
            document.getElementById("joinbtn" + user.id).disabled = false;
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
        })
        .catch((err) => {
        
          document.getElementById("followbtn" + user.id).disabled = false;
        });
    },

    infiniteHandler($state) {
      const url =
        this.type === "Follower"     
          ? `business/community/network-follower/${this.biz_id}/`
          : `business/community/network-following/${this.biz_id}/`;

      axios
        .get(url + this.page)
        .then(({ data }) => {
          if (this.type == "Follower") {
            if (data.data.network_followers.length) {
              this.network.push(...data.data.network_followers);
              this.page += 1;

              $state.loaded();
            } else {
              $state.complete();
            }
          } else {
            if (data.data.network_following.length) {
              this.network.push(...data.data.network_following);
              this.page += 1;

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

   .btn{
    font-size:13px !important;
  }

  .s-button {
    padding: 15px;
    margin-top: -15px;
  }

  .net-title {
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
    width: 85px;
  }

  .r-image {
    border-radius: 8px;

    height: 100px;
    width: 100px;
  }
}

@media only screen and (min-width: 768px) {
  .net-title {
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
    width: 123px;
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
    height: 100%;
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
    height: 100%;

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
</style>
