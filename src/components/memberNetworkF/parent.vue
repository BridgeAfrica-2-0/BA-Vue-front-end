<template>
  <div class=" ">
    <b-card title="" class="">
      <b-container class="a-center">
          <!-- :src="require('@/assets/img/mayor.jpg')" -->
        <b-avatar
          :src="networkInfo.image"
          variant="primary"
          square
          rounded
          class="network-logo"
        >
        </b-avatar>

      </b-container>

      <br />

      <b-container>
        <b-row>
          <b-col cols="6">
            <h6 class="  m-0 p-0 a-center network-name "><b> {{ networkInfo.name }}</b></h6>
          </b-col>
          <b-col cols="6">
            <b-button
              variant="primary"
              size="sm"
              @click="addFollower"
              :disabled="buttonStatus" 
              style="width: 120px;"
              class="a-center"
            >
              <b-spinner v-if="SPcommunity" small></b-spinner>
              

                <i
                            class="fas fa-lg btn-icon"
                            :class="networkInfo.is_follow !== 0 ? 'fa-user-minus' : 'fa-user-plus'"
                          ></i>

              <span class="ml-1" v-if="networkInfo.is_follow"> Unfollow</span> <span v-else> Follow</span>
            </b-button>
            <b-tooltip target="Follow-Unfollow" variant="secondary">Click To Follow/Unfollow</b-tooltip>
          </b-col>
        </b-row>
      </b-container>

      <br /> 

      <b-card-text class="text-left">
        <b-container>
          <b-row>
            <b-col>
              <p class="a-center ">
                <b-icon icon="globe" variant="primary"></b-icon>
                <span class="pivate text"> Private </span>
              </p>
            </b-col>
            <b-col>
              <p class="a-center">
                <b-icon icon="people-fill" variant="primary"></b-icon>
                <span class="pivate text">
                  {{ nFormatter(networkInfo.community) }}
                  community 
                </span>
              </p>
            </b-col>
          </b-row>
        </b-container>
        <h6 class="mt-2 font-weight-bolder title ">About</h6>
        <p class="text-justify text">


           <read-more
              more-str="read more"
              class="readmore"
              :text="networkInfo.description"
              link="#"
              less-str="read less"
              :max-chars="100"
            >
            </read-more>


         
        </p>
      </b-card-text>
    </b-card>
    
    <FlashMessage />

    <SidebarCommunity />

  </div>
</template>

<script>
import SidebarCommunity from '@/components/businessf/tabs/owner/networks/sidebarcommunity';
export default {
  name: "parent",
  components: {
    SidebarCommunity
  },
  data() {
    return {
      url: null,
      networkShow: true,
      showModal: false,
      Pcommunity: false,
      buttonStatus: false,
      text: "",
      file: '',

    };
  },
  computed: {
    networkInfo() {
      return this.$store.state.networkProfile.networkInfo;
    },
  },
  mounted(){
    this.url = this.$route.params.id;
    this.getNetworkInfo() 
  },
  methods: {
    nFormatter: function(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
      }
      return num;
    },
    openNetwork() {
      this.networkShow = false;
    },
    addFollower: function() {
      this.buttonStatus = true;
      this.SPcommunity = !this.SPcommunity;
      this.axios.post("network/"+this.url+"/about/follow")
      .then(() => {
        this.getNetworkInfo();
        this.SPcommunity = !this.SPcommunity;
        if (this.networkInfo.is_follow) {
          this.buttonStatus = false;
          this.flashMessage.show({
            status: "success",
            message: "You Are Not more Following"
          });
        } else {
          this.buttonStatus = false;
          this.flashMessage.show({
            status: "success",
            message: "You Are Now Following"
          });
        }
      })
      .catch(err => {
        console.log({ err: err });
        this.buttonStatus = false;
        this.flashMessage.show({
          status: "error",
          message: "Unable To follow"
        });
      });
    },
    getNetworkInfo() {
      this.$store
      .dispatch("networkProfile/getnetworkInfo", this.url)
      .then(() => {
        console.log('ohh yeah');
      })
      .catch(err => {
        console.log({ err: err });
      });
    }

  }
};
</script>

<style>
.a-center {
  text-align: center;
  align-content: center;
  justify-content: center;
  display: flex;
}
.b-none {
  border-style: none;
}
.t-align {
  text-align: left;
}
.i-color {
  color: #e75c18;
}
@media only screen and (min-width: 768px) {
  .network-avatar-icon {
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 200px;
    margin-left: 200px;
    padding: 0px 0px;
    color: #ffff;
    background: #e75c18;
    border-radius: 25px;
    border: 4px solid #ffff;
  }
  .network-name {
    font-size: 20px;
  }
  .pivate {
    padding-left: 8px;
    text-align: left;
  }
  .network-logo {
    width: 200px !important;
    height: 200px !important;
  }
}
@media only screen and (max-width: 768px) {
  .network-logo {
    width: 200px !important;
    height: 200px !important;
  }
  .network-name {
    font-size: 16px;
  }
  .pivate {
    font-size: 12px;
    padding-left: 8px;
    text-align: left;
  }
  .network-avatar-icon {
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 200px;
    margin-left: 200px;
    padding: 0px 0px;
    color: #ffff;
    background: #e75c18;
    border-radius: 25px;
    border: 4px solid #ffff;
  }
}
</style>