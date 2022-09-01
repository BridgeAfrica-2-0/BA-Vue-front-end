<template>
  <div>
   
      <div class="people-style  p-2"  >
        <div class="d-flex"  >
          <b-avatar
            class="p-avater ml-2"
            variant="light"
            :src="person.profile_picture?person.profile_picture:person.profile_picutre"
          ></b-avatar>

          <div class=" mt-3 ml-3 w-100">
            <div >
              <router-link :to="'profile/' + person.slug">
               <span class="username">   {{ person.name }} </span>
              </router-link>
            </div>

            <h6 class="follower m-15">
              {{ count(person.followers) }}
              {{ $t("dashboard.Community") }}
            </h6>
          </div>

         
           
           <b-button
          variant="light"
          class="rounded-circle hov-btn mr-3"
          :id="'person'+person.id"
        >
          <b-icon icon="three-dots"> </b-icon>
        </b-button>


        </div>
      </div>


       <b-popover :target="'person'+person.id" triggers="hover" placement="top">
        <div class="pt-3 pb-3">
          <div class="mt-1">
            
      <b-button
              block
              size="sm"
              class="b-background flexx pobtn shadow"
              :class="person.is_follow !== 0 && 'u-btn'"
              :id="'followbtn' + person.id"
              variant="primary"
              @click="handleFollow(person)"
            >
              <i
                class="fas fa-lg btn-icon"
                :class="person.is_follow !== 0 ? 'fa-user-minus' : 'fa-user-plus'"
              ></i>

              <span class="btn-com">{{ $t("dashboard.Community") }}</span>
            </b-button>
          </div>

          <div class="mt-1">
            <BtnCtaMessage :element="person" type="people" />
          </div>

        
        </div>
      </b-popover>


      
  </div>
</template>

<script>
import axios from "axios";

export default {

  props: {
    person: {
      required: true,
      type: Object,
    },
   
  },

  data() {
    return {
      page: 1,
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
    getTotalCommunity() {
           this.$emit('getTotalCommunity');
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
        .catch((err) => {});
    },
  },
};
</script>
    
<style scoped>

.hov-btn {
  width: 40px !important;
  height: 40px !important;
  vertical-align: center;
  text-align: center;
  align-items: center;
  align-self: center;
  color: #455a64;
}

 .username{
  font-size: 18px;
  line-height: 1.2;
  font-family: poppins;
  font-weight: 500;
  color: #455a64;
  text-transform: capitalize;
  text-overflow: ellipsis;
    overflow: hidden;
}

.username:hover {
  color: #e75c18;
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

@media only screen and (max-width: 768px) {
  .btnpngs {
    width: 16px;
    margin-right: 5px;
  }
}

@media only screen and (min-width: 768px) {
  .btnpngs {
    width: 20px;
    margin-right: 5px;
  }
}

.btn {
  border-radius: 5px;
}

.flexx {
  display: inline-flex;
}

.memfollower {
  margin-left: 20px;
  font-size: 12px;
}
.detail {
  position: relative;
  left: 65px;
  top: -30px;
}
.name {
  position: relative;
  top: -10px;
  left: 10px;
}

.a-left {
  text-align: left;
  /*align-content: left;*/
}

hr {
  border: solid 1px dimgray;
}





f-right {
  text-align: right;
  /*align-content: right;*/
}

.f-left {
  text-align: left;
  /*align-content: left;*/
}

@media only screen and (max-width: 768px) {
  .options {
    position: relative;
    left: -75px;
  }
}

.detail {
  position: relative;
  left: 92px;
  top: -30px;
}
.name {
  position: relative;
  top: -10px;
  left: 10px;
}

.b-background {
  background-color: #e75c18;
  color: white;

  border-top-left-radius: 4px;

  border-bottom-left-radius: 4px;

  border-top-right-radius: 4px;

  border-bottom-right-radius: 4px;
}

.follower {
  font-size: 13px;
  margin-top: 5px;
}

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
}

@media only screen and (min-width: 1200px) {
  .btn {
    width: 110px;
    height: 38px;
    font-size: 12px;
  }

  .center {
    text-align: right;
  }
}

@media only screen and (max-width: 768px) {
  .p-avater {
    margin-right: -15px;
    margin-top: 3px;
  }

  .btn-2 {
    margin-left: 0px;
    width: 90px;
  }

  .btn-1 {
    margin-left: 0px;
    width: 90px;
  }

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

    margin-right: 5px;
    margin-left: 3px;
  }

  h6 {
    font-size: 15px;
  }

  h7 {
    font-size: 10px;
  }

  .btn {
    display: flex;
    font-size: 10px;
  }
}

@media only screen and (max-width: 520px) {
  .p-avater {
    margin-right: -15px;
    margin-top: 3px;
  }

  .btn {
    width: 90px;
  }

  .btn-2 {
    /* margin-left: -15px; */
    width: 90px;
  }

  .btn-1 {
    /* margin-left: -20px; */
    width: 90px;
  }

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

    margin-right: 2px;
    margin-left: 6px;
  }

  h6 {
    font-size: 15px;
  }

  h7 {
    font-size: 10px;
  }

  .btn {
    display: flex;
    font-size: 10px;
  }

  .m-15 {
    margin-left: -15px;
  }
}

@media only screen and (min-width: 764px) {
  .p-buttons {
    margin-right: 50px;
    margin-left: 50px;
    margin-bottom: 5px;
    margin-top: 7px;
    padding-right: 5px;
  }

  .p-avater {
    width: 70px;
    height: 70px;
    margin-bottom: -4px;
    margin-left: -5px;
  }

  .btn {
    width: 123px;
    height: 38px;
    font-size: 13px;
  }

  .center {
    text-align: right;
  }

 
 



  .follower {
    font-size: 10px;
    margin-top: 1px;
  }
}

@media only screen and (min-width: 764px) and (max-width: 991.18px) {
  .center {
    text-align: left;
  }
}

@media only screen and (max-width: 762px) {
 
  .btn {
    width: 97px;
    height: 28px;
    font-size: 10px;
  }

  .p-avater {
    width: 70px;
    height: 70px;
    margin-bottom: -8px;
    margin-left: -5px;
    margin-top: -4px;
  }

  .shift {
    margin-left: -40px;
  }

  .follower {
    font-size: 10px;
    text-align: left;
  }

  .center {
    text-align: left;
  }

  .a-text {
    margin-top: 2px;
  }

  .pobtn {
    font-size: 10px;
  }
  .e-name {
    text-align: left;
  }
}

@media only screen and (max-width: 521px) {
  .e-name {
    text-align: left;
    margin-left: -20px;
  }
}
</style>

<style>
.follower {
  font-size: 12px !important;
}
</style>
