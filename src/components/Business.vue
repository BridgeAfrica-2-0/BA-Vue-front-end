<template>
  <div>
    <div class=" h-100 people-style border">
      <div class="d-inline-flex w-100">
        <div class="center-img">
          <splide :options="options" class="r-image">
            <splide-slide cl>
              <img :src="business.picture?business.picture:business.logo_path" class="r-image" />
            </splide-slide>

            <splide-slide v-for="cover in business.covers" :key="cover" cl>
              <img :src="cover" class="r-image" />
            </splide-slide>
          </splide>
        </div>
        <div class="pl-3 flx100 mr-1">
          <p class="textt">
            <span class="">
              <router-link
                :to="{ name: 'BusinessFollower', params: { id: business.slug } }" 
              >
                <span class="biz-name"> {{ business.name }} </span>
              </router-link>
            </span>
            <br />

            <span v-for="cat in business.category" :key="cat.name">
              {{ cat.name }}
            </span>
            <br />
            {{ count(business.followers) }}
            {{ $t("dashboard.Community") }}    <span v-if="canBlock" class="ml-2"  @click="BlockUser(business.id, index)" style="cursor: pointer">   <b-icon
                              font-scale="1"
                              icon="exclamation-octagon"
                              v-b-tooltip.hover
                              title="Block This Business"
                              variant="danger"
                            ></b-icon>  </span>
                             <br />

            <span class="location">
              <b-icon-geo-alt class="ico"></b-icon-geo-alt>
              <span class="" v-for="nie in business.neigborhood" :key="nie.id">
                {{ nie.name }}
              </span>
            </span>
            <br />
            <read-more
              :more-str="$t('search.read_more')"
              class="readmore"
              :text="business.about_business"
              link="#"
              :less-str="$t('search.read_less')"
              :max-chars="50"
            >
            </read-more>
          </p>
        </div>

        <b-button
          variant="light"
          class="rounded-circle hov-btn"
          :id="'business'+business.id"
         
        >
          <b-icon icon="three-dots"> </b-icon>
        </b-button>
      </div>

      <b-popover :target="'business'+business.id" triggers="hover" placement="top">
        <div class="pt-3 pb-3">
          <div class="mt-1">
            <b-button
              block
              size="sm"
              :class="business.is_follow !== 0 && 'u-btn'"
              :id="'followbtn' + business.id"
              variant="primary"
              @click="handleFollow(business)"
            >
              <i
                class="fas fa-lg btn-icon"
                :class="business.is_follow !== 0 ? 'fa-user-minus' : 'fa-user-plus'"
              ></i>
              <span class="btn-com"> {{ $t("dashboard.Community") }}</span>
            </b-button>
          </div>

          <div class="mt-1">
            <BtnCtaMessage :element="business" type="business" />
          </div>

          <div class="mt-1">
            <b-button
              block
              size="sm"
              class="b-background shadow"
              variant="primary"
              @click="gotoBusiness(business.id)"
            >
              <i class="fas fa-map-marked-alt fa-lg btn-icon"></i>
              <span class="btn-text">{{ $t("dashboard.Direction") }}</span>
            </b-button>
          </div>
        </div>
      </b-popover>
    </div>
  </div>
</template>

<script>
import BtnCtaMessage from "@/components/messagesCTA/Btn-cta-message";

import axios from "axios";
export default {
  props: {
    business: {
      required: true,
      type: Object,
    },

     index:{
      type:Number,
      default:0
    },

    canBlock:{
      type:Boolean,
      default:false
    },
     callerType:{
      type:String,
      default:''
    }
   
  },
  components: {
    BtnCtaMessage,
  },
  data() {
    return {
      page: 1,
      isloading: false,
       options: {
        rewind: true,
        autoplay: true,
        perPage: 1,
        pagination: false,
        disable: false,
        type: "loop",
        perMove: 1,
      },
    };
  },

  methods: {
    getTotalCommunity() {
      
        this.$emit('getTotalCommunity');
    },

     BlockUser(id, index){
        this.$emit('BlockUser',id, index );
    },


    gotoBusiness(id) {
      this.$router.push(`/business/${id}?tabId=1`);
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
       let data = ''
      if(this.callerType=='network'){
          data = {
        id: user.id,
         type: "business",
        network_id: this.$route.params.id
      };
      }else{ 
       data = {
        id: user.id,
         type: "business",
      };
       }
      await axios
        .post(uri, data)
        .then((response) => {
          user.is_follow = nextFollowState;
          document.getElementById("followbtn" + user.id).disabled = false;
          this.getTotalCommunity();
        })
        .catch((err) => {
          document.getElementById("followbtn" + user.id).disabled = false;
        });
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
}

.biz-name {
  font-size: 1.0625rem;
    font-weight: 500;
  line-height: 1.2;
  font-family: poppins;

  color: #455a64;
  text-transform: capitalize;
}

.biz-name:hover {
  color: #e75c18;
}
.s-comcardd {
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  padding-bottom: 5px;
}

.card-body {
  padding-left: 5px;
}
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

  .textt {
    color: #000;

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
    width: 97px;
  }

  .r-image {
    border-radius: 8px;

    height: 100px;
    width: 100px;
  }
}

@media only screen and (min-width: 768px) {
  .btn {
    font-size: 11.5px !important;
  }

  .textt {
    color: #000;

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
    width: 110px;
  }

  .r-image {
    border-radius: 8px;

    height: 100px;
    width: 100px;
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
