<template>
  <div class="p-2">
    <b-modal id="modal-sm" size="sm" hide-header>
      {{ $t('profileowner.Do_you_want_to_join_this_network') }}
    </b-modal>

    <b-row>
      <b-col lg="6" sm="12" class="p-2" v-for="(item) in network" :key="item.id">


        <Network  :network="item" :key="item.id"  @getTotalCommunity='getTotalCommunity' />
 
      </b-col>
    </b-row>

    <infinite-loading :identifier="infiniteId" @infinite="infiniteHandler" ref="infiniteLoading"></infinite-loading>
  </div>
</template>

<script>
import Network from "@/components/Network";
import axios from 'axios';

export default {
  props: ['type', 'searchh'],
  components: {
    Network,
  },
  data() {
    return {
      page: 1,
      islogin:'',
      network:[],
      foll_id: null,
      infiniteId: +new Date(),
      options: {
        rewind: true,
        autoplay: true,
        perPage: 1,
        pagination: false,

        type: 'loop',
        perMove: 1,
      },
    };
  },
  computed: {
    old_network() {
      if (this.type == 'Follower') {
        return this.$store.state.profile.NcommunityFollower.network_followers;
      } else {
        return this.$store.state.profile.NcommunityFollowing.network_following;
      }
    },
  },

  mounted() {
     this.islogin=this.$store.getters["auth/isLogged"];
    this.foll_id = this.$route.params.id ? this.$route.params.id : '';
  },

  methods: {



 getTotalCommunity(){
         this.$store
      .dispatch("profile/Tcommunity", this.foll_id)
      .then((response) => {})
      .catch((error) => {
        console.log({ error: error });
      });
    },


    
  BlockUser(id, index) {


      this.$confirm(
        {
          message: `Are you sure?`,
          button: {
            no: 'No',
            yes: 'Yes'
          },
          /**
          * Callback Function
          * @param {Boolean} confirm
          */
          callback: confirm => {
            if (confirm) {
              

              

     let dataInfo = {
        id: id,
        refernce: "network",
        type: this.type,
      };

    
      let fd = new FormData();
      fd.append("id", dataInfo.id);
      fd.append("type", dataInfo.refernce);
      this.$store.dispatch("profile/Block", {
        path: "block/entity",
        formData: fd
        })
      .then(response => {
        
       this.getTotalCommunity();
        this.$delete(this.network,index);
        console.log("user deleted");

        console.log(response);
        this.flashMessage.show({
          status: "success",
          message: dataInfo.refernce + " blocked"
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.flashMessage.show({
          status: "error",
          message: "Unable to blocked " + dataInfo.refernce
        });
      });


            }
          }
        }
      )




    },



      count(number) {
      if (number >= 1000000) {
        return number / 1000000 + "M";
      }
      if (number >= 1000) {
        return number / 1000 + "K";
      } else return number;
    },

    async handleJoin(user) {
      document.getElementById('joinbtn' + user.id).disabled = true;
      const uri = user.is_member === 0 ? `/add-member` : `/remove-member`;
      const nextFollowState = user.is_member === 0 ? 1 : 0;
      const data = {
        id: user.id,
        type: 'network',
      };

      await axios
        .post(uri, data)
        .then((response) => {
          console.log(response);
          user.is_member = nextFollowState;
          document.getElementById('joinbtn' + user.id).disabled = false;

          this.flashMessage.show({
            status: "success",
            message: response.data.message,
            blockClass: "custom-block-class",
          })
          
        })
        .catch((err) => {
          console.log(err);
          document.getElementById('joinbtn' + user.id).disabled = false;
        });
    },

    async handleFollow(user) {
      document.getElementById('followbtn' + user.id).disabled = true;
      const uri = user.is_follow === 0 ? `/follow-community` : `/unfollow`;
      const nextFollowState = user.is_follow === 0 ? 1 : 0;
      const data = {
        id: user.id,
        type: 'network',
      };

      await axios
        .post(uri, data)
        .then((response) => {
           this.getTotalCommunity();
          user.is_follow = nextFollowState;
          document.getElementById('followbtn' + user.id).disabled = false;
        })
        .catch((err) => {
          console.log(err);
          document.getElementById('followbtn' + user.id).disabled = false;
        });
    },

    search() {
      this.network = [];
      this.page = 1;
      this.infiniteId += 1;

      this.$refs.infiniteLoading.attemptLoad();
    },

    infiniteHandler($state) {
      let url = null;

      if (this.type == 'Follower') {
        url = 'profile/network/follower/';
      } else {
        url = 'profile/network/following/';
      }

       if(!this.islogin){
            url='guest/'+url;
          }

      axios
        .get(url + this.page + '?keyword=' + this.searchh + '&slug=' + this.foll_id)
        .then(({ data }) => {
          console.log('lading network after response');
          console.log(data);
          if (this.type == 'Follower') {
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

  .s-button {
    padding: 15px;
    margin-top: -15px;
  }

  .net-title {
    font-size: 16px;
    color: black;

    line-height: 35px;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .textt {
    color: #000;

    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
  .net-title {
    font-size: 20px;
    color: black;

    line-height: 35px;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .textt {
    color: #000;

    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
   font-size: 13px;
    height: 38px;
    width: 125px;
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
</style>