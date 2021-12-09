<template>
  <div>
    <div class="">
      <b-spinner v-if="loader" variant="primary" :label="$t('search.Spinning')"></b-spinner>

    <b-alert v-if="users.total == 0" show variant="warning"
      ><a href="#" class="alert-link">
        {{$t("search.No_data_available_for_that_search")}}!
      </a></b-alert
    >


     <div class="people-style border shadow"  v-for="item in users.data.data"
      :key="item.id"  >


            <b-row class="mb-1">
              <b-col md="3" cols="4" sm="4" class="my-auto">
                <b-avatar
                  class="p-avater"
                  variant="primary"
                  :src="item.profile_picture"
                ></b-avatar>
              </b-col>

              <b-col md="8" cols="8" sm="8">
                <div>
                  <b-row class="shift">
                    <b-col md="12" lg="6" xl="6">
                      <div class="e-name">
                        <b-row>
                          <b-col
                            md="6"
                            lg="12"
                            cols="6"
                            xl="12"
                            class="mt-lg-2"
                          >
                            <div class="mt-3 mt-lg-0 mt-xl-0 username">
                            <router-link :to="'profile/'+item.id" >  <b> {{ item.name }} </b>   </router-link> 
                            </div>
                          </b-col>

                          <b-col
                            md="6"
                            lg="12"
                            cols="6"
                            xl="12"
                            class="mt-3 mt-lg-1 mt-xl-3"
                          >
                            <h6 class="follower m-15">
                              {{ count(item.followers) }}
                              {{ $t('profileowner.Community') }}
                            </h6>
                          </b-col>
                        </b-row>
                      </div>
                    </b-col>

                    <b-col lg="6" xl="6" cols="12" md="12">
                      <div>
                        <b-row class="mt-lg-0">
                          <b-col
                            md="6"
                            lg="12"
                            cols="6"
                            xl="12"
                            class="mt-2 mt-lg-2 mt-xl-2 btn-2 center"
                          >
                            <b-button
                              block
                              variant="primary"
                              size="sm"
                              class="b-background flexx pobtn shadow"
                            >
                              <i class="fas fa-envelope   fa-lg btn-icon "></i>
                              <span class="btn-text">{{ $t('profileowner.Message') }}</span>
                            </b-button>
                          </b-col>

                          <b-col
                            md="6"
                            lg="12"
                            cols="6"
                            xl="12"
                            class="mt-2 mt-lg-2 mt-xl-2 btn-2 center"
                          >
                              <b-button
                          block
                          size="sm"
                          class="b-background flexx pobtn shadow"
                          :class="item.is_follow !== 0 && 'u-btn'"
                          :id="'followbtn'+item.id"
                          variant="primary"
                          @click="handleFollow(item)"
                        >

                           <i
                            class="fas fa-lg btn-icon"
                            :class="item.is_follow !== 0 ? 'fa-user-minus' : 'fa-user-plus'"
                          ></i>

                          <span class="btn-com">{{ $t('dashboard.Community') }}</span>
                        </b-button>

                          </b-col>
                        </b-row>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </b-col>
            </b-row>
          </div>





    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {

  computed: {
    users() {
      return this.$store.getters["allSearch/getPeoples"];
    },
    loader() {
      return this.$store.getters["allSearch/getLoader"];
    },
  },


methods:{   


  count(number) {
      if (number >= 1000000) {
        return number / 1000000 + "M";
      }
      if (number >= 1000) {
        return number / 1000 + "K";
      } else return number;
    },





 async handleFollow(user) {
      
      console.log("yoo ma gee");
       document.getElementById("followbtn"+user.id).disabled = true;
      const uri = user.is_follow === 0 ? `/follow-community` : `/unfollow`;
      const nextFollowState = user.is_follow === 0 ? 1 : 0;
      const data = {
        id: user.id,
        type: 'user',
      };

      await axios
        .post(uri, data)
        .then(({ data }) => {
          console.log(data);
          user.is_follow = nextFollowState;
           document.getElementById("followbtn"+user.id).disabled = false;
        })
         
          .catch((err) =>{  
          
          console.log({err:err})  ;
           document.getElementById("followbtn"+user.id).disabled =  false;
          
        });
    },

}
  




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

  .s-card {
    padding-left: 5px;
    padding-right: 5px;
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
  align-content: left;
}

hr {
  border: solid 1px dimgray;
}

.btn {
  background-color: #fff;
  color: #e75c18;
  border: solid 1px #e75c18;
}

.btn:hover {
  color: #fff;
  border: none;
  background-color: #e75c18;
}

f-right {
  text-align: right;
  align-content: right;
}

.f-left {
  text-align: left;
  align-content: left;
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
  font-size: 14px;
}

.people-style {
  border-top-left-radius: 40px;

  border-bottom-left-radius: 40px;

  border-top-right-radius: 45px;

  border-bottom-right-radius: 45px;

  background: white;

  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;
}

@media only screen and (min-width: 1200px) {
  .btn {
    width: 123px;
    height: 38px;
    font-size: 14px;
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
    border-top-left-radius: 40px;

    border-bottom-left-radius: 40px;

    border-top-right-radius: 45px;

    border-bottom-right-radius: 45px;

    background: white;

    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;

    margin-right: 5px;
    margin-left: 5px;
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
    width: 90px;
  }

  .btn-1 {
    margin-left: -20px;
    width: 90px;
  }

  .people-style {
    border-top-left-radius: 40px;

    border-bottom-left-radius: 40px;

    border-top-right-radius: 45px;

    border-bottom-right-radius: 45px;

    background: white;

    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;

    margin-right: 5px;
    margin-left: 5px;
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

@media only screen and (min-width: 764px) {
  .p-buttons {
    margin-right: 50px;
    margin-left: 50px;
    margin-bottom: 5px;
    margin-top: 7px;
    padding-right: 5px;
  }

  .p-avater {
    width: 95px;
    height: 95px;
    margin-bottom: -4px;
    margin-left: -5px;
  }

  .btn {
    width: 123px;
    height: 38px;
    font-size: 14px;
  }

  .center {
    text-align: right;
  }

  .username {
    font-size: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    height: 1.7em;
    white-space: nowrap;
  }

  .follower {
    font-size: 10px;
    margin-top: 5px;
  }
}

@media only screen and (min-width: 764px) and (max-width: 991.18px) {
  .center {
    text-align: left;
  }
}

@media only screen and (max-width: 762px) {
  .username {
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    height: 1.2em;
    white-space: nowrap;
  }

  .btn {
    width: 85px;
    height: 28px;
    font-size: 10px;
  }

  .p-avater {
    width: 75px;
    height: 75px;
    margin-bottom: -8px;
    margin-left: -5px;
    margin-top: -4px;
  }

  .shift {
    margin-left: -40px;
  }

  .follower {
    font-size: 12px;
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
