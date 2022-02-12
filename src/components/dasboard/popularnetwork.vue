<template>
  <div>
    <b-modal id="modal-sm" size="sm" hide-header>
      {{ $t("dashboard.Do_you_want_to_join_this_network") }}
    </b-modal>


    <div class="people-style shadow" v-for="item in network" :key="item.id">
      <b-row>
     

       <b-col md="8" xl="8" lg="12" cols="12" sm="8">
          <div class="d-inline-flex">
            <div class="center-img">
              
           <img :src="item.picture" class="r-image" />
              
            </div>
            <div class="pl-3 flx100">
              <p class="textt">
                <strong class="title">
                   <router-link :to="{name: 'networks', params: {id: item.id}}">
              <strong class="net-title">{{ item.name }}</strong>
            </router-link><br />
                </strong>
                
                {{ count(item.followers) }}
                {{ $t("dashboard.Community") }} <br />

                <span class="location">
              <b-icon-geo-alt class="ico"></b-icon-geo-alt>
              {{ item.location_description }}
            </span>

                <br />
                 <read-more
              :more-str="$t('dashboard.read_more')"
              class="readmore"
              :text="item.about_network"
              link="#"
              :less-str="$t('dashboard.read_less')"
              :max-chars="50"
            >
            </read-more>
              </p>
            </div>
          </div>
        </b-col>

        <b-col lg="12" xl="4" md="4" cols="12" sm="4">


          <div class="s-button">
            <b-row>
              <b-col md="12" lg="4" xl="12" sm="12" cols="4" class="mt-2">
                <b-button
                  block
                  size="sm"
                  :id="'followbtn' + item.id"
                  :class="item.is_follow !== 0 && 'u-btn'"
                  variant="primary"
                  @click="handleFollow(item)"
                >
                  <i
                    class="fas fa-lg btn-icon"
                    :class="
                      item.is_follow !== 0 ? 'fa-user-minus' : 'fa-user-plus'
                    "
                  ></i>
                  <span class="btn-com">{{ $t("dashboard.Community") }}</span>
                </b-button>
              </b-col>

              <b-col md="12" lg="4" xl="12" sm="12" cols="4" class="mt-2">
                <BtnCtaMessage :element="item" type="network" />
              </b-col>

              <b-col md="12" lg="4" xl="12" sm="12" cols="4" class="mt-2">
                <b-button
                  block
                  size="sm"
                  class="b-background shadow"
                  :class="item.is_member !== 0 && 'u-btn'"
                  variant="primary"
                  :id="'joinbtn' + item.id"
                  @click="handleJoin(item)"
                >
                  <i
                    class="fas fa-lg btn-icon"
                    :class="
                      item.is_member !== 0 ? 'fa-user-minus' : 'fa-user-plus'
                    "
                  ></i>
                  <span class="btn-com">{{ $t("general.Join") }}</span>
                </b-button>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>

    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["title", "image"],

  data() {
    return {
      page: 1,
      network:[],
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
    business() {
      return this.$store.getters["networkDetails/getdetails.category"];
    },
  },
  created() {
    this.$store
      .dispatch("networkDetails/getndetails")
      .then(() => {
        console.log("the response");
      })
      .catch((err) => {
        console.log({ err: err });
      });
  },

  methods: {




getTotalCommunity(){
         this.$store
      .dispatch("profile/Tcommunity")
      .then((response) => {})
      .catch((error) => {
        console.log({ error: error });
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
      let url = "profile/popular/network/";

      axios
        .get(url + this.page)
        .then(({ data }) => {
          console.log(data)
          if (data.data.length) {

            this.page += 1;
            this.network = [...this.network, ...data.data ]
            $state.loaded();
          } else {
            $state.complete();
          }
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
          this.getTotalCommunity();
        })
        .catch((err) => {
          console.log({ err: err });
          document.getElementById("followbtn" + user.id).disabled = false;
        });
    },
  },
};
</script>



<style scoped>
.flx100 {
  flex-basis: 80% !important;
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
    font-size: 12px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

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

 .btn{
    font-size:13px !important;
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

    margin-left: 60px;

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

    background: white;
    height: 100%;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;
    margin-right: -8px;
    margin-left: -8px;

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

<style>
.u-btn {
  filter: grayscale(0.6);
}
</style>