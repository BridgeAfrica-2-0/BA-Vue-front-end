<template>
  <div class="main">

 
    <div class="images imageslg">
      <div>     
        <img
         
           :src="info.user.cover_picture ? info.user.cover_picture : getCustomCover[0]"
      
          class="banner"
        />
      </div>
      <b-row class="mt-2 mb-2 d-none d-lg-block">
        <b-col cols="6" class="avata">
          <div>
            <b-avatar
              v-if="info.user.profile_picture != null"
              :src="info.user.profile_picture"
              class="float-left avatar"
              badge-variant="primary"
              badge-offset="10px"
              variant="white"
            >
            </b-avatar>

            <b-avatar
              v-if="info.user.profile_picture == null"
              :src="info.user.profile_picture"
              class="float-left avatar"
              badge-variant="primary"
              badge-offset="10px"
              variant="white"
            >
            </b-avatar>
          </div>
          <div class="d-inline-block ml-4 float-left mt-4">
            <b-link>
              <h5 class="font-weight-bolder name">{{ info.user.name }}</h5>
            </b-link>
            <br />

            <span class="k15 duration">
              {{ info.user.followers }} {{ $t("profilefollower.Community") }}
            </span>
          </div>
        </b-col>
        <b-col cols="12">
          <div class="btns">
            <b-button class="community size mr-2 ml-1"
            
            :class="info.user.is_follow !== 0 && 'u-btn'"
                              :id="'followbtn' + info.user.id"
                              
                                @click="handleFollow(info.user)"  >
             

                <i
                                class="fas fa-lg btn-icon  m-fa "
                                :class="
                                  info.user.is_follow !== 0
                                    ? 'fa-user-minus'
                                    : 'fa-user-plus'
                                "
                              ></i>



              <span class="txt-btn">{{
                $t("profilefollower.Community")
              }}</span></b-button
            >

            <BtnCtaMessage  :element="info.user" type="people" :header="true" />

            <b-dropdown
              size="sm"
              class="ml-2 dropdown"
              dropleft
              no-caret
              variant="link"
            >
              <template #button-content>
                <b-icon-three-dots></b-icon-three-dots>
              </template>
              <b-dropdown-item>
                <b-icon icon="flag" variant="primary"></b-icon>
                {{ $t("profilefollower.Report") }}</b-dropdown-item
              >
            </b-dropdown>
          </div>
        </b-col>
      </b-row>
    </div>

    <div class="mobile">
      <b-row class="mob-head">
        <b-col>
          <div>
            <b-avatar
              :src="info.user.profile_picture"
              class="float-left avatar"
              badge-variant="primary"
              badge-offset="10px"
            >
            </b-avatar>
          </div>
          <div class="d-inline-block mt-4 ml-4 float-left texts">
            <h6 class="font-weight-bolder name">{{ info.user.name }}</h6>
            <p class="details">
              {{ info.user.followers }} {{ $t("profilefollower.Community") }}
            </p>
          </div>
        </b-col>
        <b-col cols="2">
          <b-dropdown class="ml-1 dropdown" no-caret variant="link" size="sm">
            <template #button-content>
              <b-icon icon="three-dots" aria-hidden="true"></b-icon>
            </template>
            <b-dropdown-item>
              <b-icon icon="flag" variant="primary"></b-icon>
              {{ $t("profilefollower.Report") }}</b-dropdown-item
            >
          </b-dropdown>
        </b-col>
      </b-row>
    </div>
    <div class="m-btn mobile mb-2">
      <BtnCtaMessage :element="info.user" type="people" :header="true" />

      <b-button class="direction ml-1 size" size="sm"
      
       
            :class="info.user.is_follow !== 0 && 'u-btn'"
                              :id="'followbtn' + info.user.id"
                              
                                @click="handleFollow(info.user)" 
                                
                                >
       

         <i
                                class="fas fa-lg btn-icon  m-fa "
                                :class="
                                  info.user.is_follow !== 0
                                    ? 'fa-user-minus'
                                    : 'fa-user-plus'
                                "
                              ></i>


        <span class="txt-btn">{{ $t("dashboard.Community") }} </span></b-button
      >



        

    </div>

    <div class="body p-2">
      <b-row>
        <b-col cols="12" class="p-0 p-md-3">
          <b-tabs lazy content-class="mt-3" fill pills>
            <b-tab :title="$t('profilefollower.Posts')" active>
              <Post />
            </b-tab>

            <b-tab :title="$t('profilefollower.About')"><About /></b-tab>
             <b-tab :title="$t('profilefollower.Media')"
              ><Media type="profile" :isEditor="false"
            /></b-tab>
            <b-tab :title="$t('profilefollower.Business')"
              ><Businesses
            /></b-tab>
            <b-tab :title="$t('profilefollower.Network')"><Network /></b-tab>
           
            <b-tab :title="$t('profilefollower.Community')"
              ><Community
            /></b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Post from "@/components/businessfollower/tabs/posts";
import About from "@/components/follower/tabs/about";
import Media from "@/components/owner/tabs/media";
import Community from "@/components/follower/tabs/community";
import Businesses from "@/components/follower/tabs/businesses";
import Network from "@/components/follower/tabs/networkk";
import axios from "axios";


import { mapMutations, mapGetters } from 'vuex'
import { knowWhoIsConnected, defaultCoverImage } from "@/mixins";

export default {
  mixins: [knowWhoIsConnected,defaultCoverImage],
  name: "Home",
  data() {
    return {
      foll_id: "",
    };
  },

  components: {
    Post,
    About,
    Media,
    Community,
    Businesses,
    Network,
  },

  

  created() {

      this.currentAuthType = 'profile'

     this.foll_id = this.$route.params.id;

    this.$store
      .dispatch("follower/loadUserPostIntro", this.foll_id)
      .then((response) => {})
      .catch((error) => {   
        console.log({ error: error });
      });
  },

  methods:{
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
        })

        .catch((err) => {
          console.log({ err: err });
          document.getElementById("followbtn" + user.id).disabled = false;
        });
    },



  },

  mounted() {
   
    console.log("Info: ", this.info.user);
    
    this.$store
      .dispatch("follower/Tcommunity", this.foll_id)
      .then((response) => {})
      .catch((error) => {
        console.log({ error: error });
      });

  },

  computed: {

     ...mapGetters({
      auth: 'auth/profilConnected'
    }),

    info: function () {
      return this.$store.getters["follower/getUserPostIntro"];
    },
  },
};
</script>

<style scoped>
.body {
  margin-left: 63px;
  margin-right: 63px;
  margin-top: 20px;
}

.btns {
  margin-left: 670px;
}

.options {
  display: grid;
  position: relative;
  width: 100%;
  top: -8px;
}
.bbavater {
  margin-top: 5px;
}
.nav-link {
  background-color: #e75c18;
}
.main {
  width: 100%;
  overflow-x: none;
}
.images {
  display: grid;
  width: 100%;
}
.banner {
  height: 426px;

  width: 100%;
  object-fit: cover !important;
}
.m-fa {
  margin-top: 5px;
}
.k15 {
  font-size: 14px;
}

.see {
  margin-left: 120px;
  background-color: #fff;
  color: black;
  border: none;
}
img {
  width: 100%;
}
.mobile {
  display: none;
}
.btns {
  display: flex;
  float: right;
}
.m-community:active {
  background-color: #fff;
  outline-color: #fff;
}
.m-community {
  background-color: #e75d29;
  border: none;
}
.m-community:hover {
  background-color: #cc3b07;
}
.yellow {
  background-color: #ffd200;
  border-style: none;
}

.orange {
  background-color: #e75c18;
  border-style: none;
}

.cnt-btn {
  color: white;
}

.below-head {
  width: 80%;
}

.mobile {
  display: none;
}
.txt {
  color: #fff;
}
.avatar {
  width: 168px;
  height: 168px;
  margin-top: -50px;
}
.name {
  position: absolute;

  font-size: 32px;
  margin-top: -20px !important;
}
p {
  font-size: 14px;
}
.community {
  color: #fff;
  background-color: #e4c229;
  border: none;
  border-radius: none;
  display: flex;
}

.btn-icon {
  color: #fff;
}
.message:hover,
.message:focus {
  background-color: #006400;
}
.community:hover {
  background-color: #b39500;
}

.size {
  width: 142px;
  height: 38px;
}
.message {
  color: #fff !important;
  background-color: #32a400;
  border: none;
  border-radius: none;
}
p,
.name {
  font-size: 32px;
}
.txt-btn {
  margin-left: 5px;

  font-size: 16px;
  color: #fff;
}
.avata {
  margin-left: 30px;
  margin-top: 8px;
}

@media only screen and (min-width: 768px) {
  .imageslg {
    padding-left: 30px;
    padding-right: 30px;
  }
}

@media only screen and (max-width: 991px) {
  .m-community {
    position: relative;
    left: -75px;
    top: 40px;
  }
  .body {
    margin: 5px;
  }
  .size {
    width: 120px;
    height: 30px;
  }
  .banner {
    height: 168px;

    width: 100%;
  }
  p,
  .name {
    font-size: 18px;

    position: relative;
    top: -1px;
  }
  .m-msg {
    color: #fff !important;
    background-color: #32a400;
    border: none;
    border-radius: none;
  }
  .direction {
    color: #fff;
    background-color: #e4c229;
    border: none;
    border-radius: none;
  }
  .m-msg:hover,
  .m-msg:focus {
    background-color: #006400;
  }
  .direction:hover {
    background-color: #ffdb58;
  }
  .avatar {
    height: 64px;
    width: 64px;
    margin-top: -15px;
  }
  .profile {
    width: 100%;
    margin-left: 0;
  }
  .mobile {
    display: block;
  }
  .m-btn {
    display: flex;
    margin-left: 15px;
    margin-top: 5px;
  }
  .options {
    display: none;
  }
  .avat {
    margin-top: 20px;
  }
  .details {
    font-size: 12px;
  }
  .texts {
    position: relative;
    left: -15px;
  }

  .more {
    position: relative;
    top: 20px;
    left: -100px;
  }

  .photo-btns {
    display: none;
  }

  .m-btn {
    margin-left: 0px;
  }
  .txt-btn {
    margin-left: 2px;
    font-size: 12px;
  }
}
</style>
