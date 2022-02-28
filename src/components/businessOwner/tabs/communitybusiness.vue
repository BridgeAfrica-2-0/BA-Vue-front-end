<template>
  <div class="p-2"> 
    <b-row>

     
      <b-col
        lg="6"
        sm="12"
        class="p-2"
        v-for="(item, index) in businesses"
        :key="index"
      >


   
        <div class="people-style shadow h-100">    
          <b-row>
            <b-col md="8" xl="8" lg="12" cols="12" sm="8">
              <div class="d-inline-flex">
                <div class="center-img">
                  <splide :options="options" class="r-image">
                    <splide-slide cl>
                      <img :src="item.logo_path" class="r-image" />
                    </splide-slide>

                     <splide-slide  v-for="cover in item.covers" :key="cover" cl>
                      <img :src="cover" class="r-image" />   
                    </splide-slide>
                    
                  </splide>
                </div>
                <div class="flx100">
                  <p class="textt">
                 
                    <router-link
                      :to="'business/'+item.id"
                    >
                      <strong class="title">
                        {{ item.name }}</strong
                      > </router-link
                    ><br />

                    <span v-for="cat in item.category" :key="cat.name">
                      {{ cat.name }}
                    </span>
                    <br />
                    {{ count(item.followers) }}
                    {{ $t("businessowner.Community") }}  <span   v-if="from !='BusinessFollower' "  @click="BlockUser(item.id, index)" class="ml-3"  style="cursor: pointer">  
                      
                      <b-icon
                              font-scale="1"
                              icon="exclamation-octagon"
                              v-b-tooltip.hover
                              title="Block This Business"
                              variant="danger"
                            ></b-icon>
                            
                              </span> <br />

                    <span class="location">
                      <b-icon-geo-alt class="ico"></b-icon-geo-alt
                      >{{ item.city }}
                    </span>
                    <br />
                    <read-more
                      :more-str="$t('search.read_more')"
                      class="readmore"
                      :text="item.about_business"
                      link="#"
                      :less-str="$t('search.read_less')"
                      :max-chars="100"
                    >

                    </read-more>

                    
                  </p>
                </div>
              </div>
            </b-col>

            <b-col lg="12" xl="4" md="4" cols="12" sm="4">
              <div class="s-button">
                <b-row>
                  <b-col
                    md="12"
                    lg="4"
                    xl="12"
                    sm="12"
                    cols="4"
                    class="mt-2 text-center"
                  >
                    <b-button
                      block
                      size="sm"
                      :disabled="disable"
                      :id="'followbtn' + item.id"
                      :class="item.is_follow !== 0 && 'u-btn'"
                      variant="primary"
                      @click="handleFollow(item)"
                    >
                      <i
                        class="fas fa-lg btn-icon"
                        :class="
                          item.is_follow !== 0
                            ? 'fa-user-minus'
                            : 'fa-user-plus'
                        "
                      ></i>
                      <span class="btn-com ml-1">
                        {{ $t("businessowner.Community") }}</span
                      >
                    </b-button>
                  </b-col>

                  <b-col
                    md="12"
                    lg="4"
                    xl="12"
                    sm="12"
                    cols="4"
                    class="mt-2 text-center"
                  >
                    <BtnCtaMessage :element="item" type="business" />
                  </b-col>

                  <b-col
                    md="12"
                    lg="4"
                    xl="12"
                    sm="12"
                    cols="4"
                    class="mt-2 text-center"
                  >
                    <b-button
                      block
                      size="sm"
                      class="b-background shadow"
                      variant="primary"
                      @click="gotoBusiness(item.id)"
                    >
                      <i class="fas fa-map-marked-alt fa-lg btn-icon"></i>
                      <span class="btn-text">{{
                        $t("businessowner.Direction")
                      }}</span>
                    </b-button>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>

    <infinite-loading
      :identifier="infiniteId"
      @infinite="infiniteHandler"
      ref="infiniteLoading"
    ></infinite-loading>
  </div>
</template>

<script>
// import moment from 'moment';
import axios from "axios";
import { isGuestUser } from '@/helpers';

export default {
  props: ["type", "searchh"],

  data() {
    return {
      businesses: [],
      disable:false,
      biz_id: null,
      page: 1,
      infiniteId: +new Date(),
      options: {
        rewind: true,
        autoplay: true,
        perPage: 1,
        pagination: false,

        type: "loop",
        perMove: 1,
      },
      isGuestUser: isGuestUser 
    };
  },

  computed: {


    from(){
        return  this.$route.name;
    },



    old_businesses() {
      if (this.type == "Follower") {
        return this.$store.state.businessOwner.BcommunityFollower
          .business_followers;
      } else {
        return this.$store.state.businessOwner.BcommunityFollowing
          .business_following;
      }
    },

    activeAccount() {
      return this.$store.getters["auth/profilConnected"];
    },
  },

  mounted() {
    this.biz_id = this.$route.params.id;
  },

  methods: {
      
  businessCommunityTotal() {
    const dispatchMethod = isGuestUser() ? "businessGuest/businessCommunityTotal" : "businessOwner/businessCommunityTotal";
    this.$store
        .dispatch(dispatchMethod, this.biz_id)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
  },

  BlockUser(id, index) {

     let dataInfo = {
        id: id,
        refernce: "business",
        type: this.type,
      };



      
      // this.$store.dispatch("profile/Block", {
      //   path: "block/entity",
      //   formData: fd
      //   })

    
      let fd = new FormData();
      fd.append("banned_id", dataInfo.id);
      fd.append("banned_type", dataInfo.refernce);  
      

      axios.post("business/community-banned/"+this.biz_id , fd)
      .then(response => {
        
      this.businessCommunityTotal();
        this.$delete(this.businesses,index);
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
    },

    gotoBusiness(id) {

       if(this.$route.name == 'BusinessFollower'){
          // this.$emit('gotoabout')
          this.$router.push(`/business/${id}#about`);
          console.log("direction --")
      }else {

        this.$router.push(`/business/${id}?tabId=1`);
      }
      // this.$router.push(`/business/${id}?tabId=1`);
    },
    cta(data) {
      console.log(data);
      this.$store.commit("businessChat/setSelectedChat", data);
      let path = "";
      if (this.activeAccount.user_type == "business") {
        path = "/business_owner/" + this.activeAccount.id;
      } else if (this.activeAccount.user_type == "network") {
        path = "/";
      } else path = "/messaging";

      // this.$router.push({ path: `${path}`, query: { tabId: 1, msgTabId: 1 } });
      this.$router.push({
        path: `/business_owner/${this.activeAccount.id}`,
        query: { tabId: 1, msgTabId: 1 },
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
          this.businessCommunityTotal();
          console.log(data);
          user.is_follow = nextFollowState;
          document.getElementById("followbtn" + user.id).disabled = false;
        })

        .catch((err) => {
          console.log({ err: err });
          document.getElementById("followbtn" + user.id).disabled = false;
        });
    },

    search() {
      console.log("search started");

     this.businesses=[];

      this.page = 1;
      this.infiniteId += 1;

      this.$refs.infiniteLoading.attemptLoad();
    },

    infiniteHandler($state) {
      let url = null;
      const basePrefix = this.isGuestUser() ? 'guest/' : '';  
      if (this.type == "Follower") {
        url = basePrefix+"business/community/business-follower/" + this.biz_id + "/";
      } else {
        url = basePrefix+"business/community/business-following/" + this.biz_id + "/";
      }
      console.log('url', url);
      axios
        .get(url + this.page + "?keyword=" + this.searchh)
        .then(({ data }) => {
          console.log(data);

          if (this.type == "Follower") {
            if (data.data.business_followers.length) {
              this.businesses.push(...data.data.business_followers);
              this.page += 1;

              $state.loaded();
            } else {
              $state.complete();
            }
          } else {
            if (data.data.business_following.length) {
              this.businesses.push(...data.data.business_following);
              this.page += 1;

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
    width: 85px;
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
    width: 123px;
    font-size: 14px;
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

@media only screen and (min-width: 992px) and (max-width: 1265px) {
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
    margin-left: 55px;
    margin-right: -5px;
    line-height: 25px;
  }
}
</style>