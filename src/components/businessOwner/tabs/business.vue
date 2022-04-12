<template>
  <div>
    <div class="people-style shadow" v-for="item in businesses" :key="item.id">
      <b-row>
        <b-col md="8" xl="12" lg="12" cols="12" sm="8">
          <div class="d-inline-flex">
            <div class="center-img">
              <splide :options="options" class="r-image">
                <splide-slide cl>
                  <img :src="item.picture" class="r-image" />
                </splide-slide>

                 <splide-slide  v-for="cover in item.covers" :key="cover" cl>
                      <img :src="cover" class="r-image" />   
                    </splide-slide>
                    
              </splide>
            </div>
            <div class="flx100">
              <p class="textt">
                <strong class="title"> 
                  <router-link :to="'/business/' + item.id">
                    {{ item.name }} 
                  </router-link>
                </strong> <br />

                <span v-for="cat in item.category" :key="cat.name">
                  {{ cat.name }}
                </span>
                <br />
                {{ count(item.followers) }}
                {{ $t("businessowner.Community") }} <br />

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
                  :max-chars="75"
                >
                
                </read-more>
              </p>
            </div>
          </div>
        </b-col>

        <b-col lg="12" xl="12" md="4" cols="12" sm="4">
          <div class="s-button">
            <b-row>
              <b-col
                md="12"
                lg="4"
                xl="4"
                sm="12"
                cols="4"
                class="mt-2 text-center"
              >
                <b-button
                  block
                  size="sm"
                  class="b-background shadow"
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
                  <span class="btn-com">{{
                    $t("businessowner.Community")
                  }}</span>
                </b-button>
              </b-col>

              <b-col
                md="12"
                lg="4"
                xl="4"
                sm="12"
                cols="4"
                class="mt-2 text-center"
              >
                <BtnCtaMessage :element="item" type="business" />
              </b-col>

              <b-col
                md="12"
                lg="4"
                xl="4"
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

    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import moment from "moment";
import { isGuestUser } from '@/helpers';
import axios from "axios";

export default {
  props: ["type"],
  data() {
    return {
      page: 1,
      biz_id: null,
      businesses: [],
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

  mounted() {
    this.biz_id =
      this.$route.params.id !== undefined
        ? this.$route.params.id
        : this.$router.push("notFound"); //! need some review
    // this.biz_id = this.$route.params.id !== undefined ? this.$route.params.id : 1; //! need some review
  },

  computed: {
    old_businesses() {
      if (this.type == "Follower") {
        return this.$store.state.businessOwner.BcommunityFollower
          .business_followers;
      } else {
        return this.$store.state.businessOwner.BcommunityFollowing
          .business_following;
      }
    },
  },

  methods: {

      businessCommunityTotal() {
      this.$store
        .dispatch("businessOwner/businessCommunityTotal", this.biz_id)
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    gotoBusiness(id) { 
      // this.$router.push({name: 'home1'});
      if(this.$route.name == 'BusinessFollower'){
          // this.$emit('gotoabout')
          this.$router.push(`/business/${id}#about`);
          console.log("direction --")
      }else {

        this.$router.push(`/business/${id}?tabId=1`);
      }
    },
    count(number) {
      if (number >= 1000000) {
        return number / 1000000 + "M";
      }
      if (number >= 1000) {
        return number / 1000 + "K";
      } else return number;
    },

    infiniteHandler($state) {
     

           let url ="";
       

      if (this.isGuestUser()) {
        url = this.type === 'Follower'
          ? `guest/business/community/business-follower/${this.biz_id}/`
          : `guest/business/community/business-following/${this.biz_id}/`;
      } else {
        url = this.type === 'Follower'
          ? `business/community/business-follower/${this.biz_id}/`
          : `business/community/business-following/${this.biz_id}/`;
      }



      axios
        .get(url + this.page)
        .then(({ data }) => {
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

    async handleFollow(user) {
      console.log("yoo ma gee");
      document.getElementById("followbtn" + user.id).disabled = true;
      const uri = user.is_follow === 0 ? `/follow-community` : `/unfollow`;
      const nextFollowState = user.is_follow === 0 ? 1 : 0;
      const data = {
        id: user.id,
        type: "business",
      };

      await axios
        .post(uri, data)
        .then(({ data }) => {
          console.log(data);
          user.is_follow = nextFollowState;
          document.getElementById("followbtn" + user.id).disabled = false;

          this.businessCommunityTotal();
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