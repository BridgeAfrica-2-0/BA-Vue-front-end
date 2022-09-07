<template>
  <div>  

    <div class="people-style border">
        <div class="d-inline-flex w-100">
            <div class="center-img">
              
           <img :src="network.picture?network.picture:network.image" class="r-image" />
              
            </div>
            <div class="pl-3 flx100 mr-1">
              <p class="textt">
                <span>
                   <router-link :to="{name: 'networks', params: {id: network.slug}}">
              <span class="net-name ">{{ network.name }}</span>
            </router-link><br />
                </span>
                
                {{ count(network.followers ?network.followers:network.community ) }}
                {{ $t("dashboard.Community") }}   <span v-if="canBlock" class="ml-2"  @click="BlockUser(person.id, index)" style="cursor: pointer">   <b-icon
                              font-scale="1"
                              icon="exclamation-octagon"
                              v-b-tooltip.hover
                              title="Block This Network"
                              variant="danger"
                            ></b-icon>  </span> <br />

                <span class="location">
              <b-icon-geo-alt class="ico"></b-icon-geo-alt>
              {{ network.location_description?network.location_description:network.address }}
            </span>

                <br />
                 <read-more
              :more-str="$t('dashboard.read_more')"
              class="readmore"
              :text="network.about_network ? network.about_network:network.description"
              link="#"
              :less-str="$t('dashboard.read_less')"
              :max-chars="50"
            >
            </read-more>
              </p>
            </div>



             <b-button
          variant="light"
          class="rounded-circle hov-btn"
          :id="'network'+network.id"
        >
          <b-icon icon="three-dots"> </b-icon>
        </b-button>  </div>
     
     

           <b-popover :target="'network'+network.id" triggers="hover" placement="top">
        <div class="pt-3 pb-3">
          <div class="mt-1">
             <b-button
                  block
                  size="sm"
                  :id="'followbtn' + network.id"
                  :class="network.is_follow !== 0 && 'u-btn'"
                  variant="primary"
                  @click="handleFollow(network)"
                >
                  <i
                    class="fas fa-lg btn-icon"
                    :class="
                      network.is_follow !== 0 ? 'fa-user-minus' : 'fa-user-plus'
                    "
                  ></i>
                  <span class="btn-com">{{ $t("dashboard.Community") }}</span>
                </b-button>
          </div>

          <div class="mt-1">
            <BtnCtaMessage :element="network" type="network" />
          </div>

          <div class="mt-1">
            
             <b-button
                  block
                  size="sm"
                  class="b-background shadow"
                  :class="network.is_member !== 0 && 'u-btn'"
                  variant="primary"
                  :id="'joinbtn' + network.id"
                  @click="handleJoin(network)"
                >
                  <i
                    class="fas fa-lg btn-icon"
                    :class="
                      network.is_member !== 0 ? 'fa-user-minus' : 'fa-user-plus'
                    "
                  ></i>
                  <span class="btn-com">{{ $t("general.Join") }}</span>
                </b-button>

          </div>
        </div>
      </b-popover>

    </div>

    </div>
  
</template>

<script>
import axios from "axios";
export default {
   props: {
    network: {
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

  data() {
    return {
      page: 1,
    
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
    
      })
      .catch((err) => {
      
      });
  },

  methods: {




getTotalCommunity(){
         this.$store
      .dispatch("profile/Tcommunity")
      .then((response) => {})
      .catch((error) => {
       
      });
    },



      BlockUser(id,index){
        this.$emit('BlockUser',id, index );
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
        
          user.is_member = nextFollowState;
          document.getElementById("joinbtn" + user.id).disabled = false;

          
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
      
      let data = ''
      if(this.callerType=='network'){
          data = {
        id: user.id,
        type: "user",
        network_id: this.$route.params.id
      };
      }else{ 
       data = {
        id: user.id,
        type: "user",
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
  color: #455a64;
}

.net-name {
  font-size: 1.0625rem;
    font-weight: 500;
  line-height: 1.2;
  font-family: poppins;

  color: #455a64;
  text-transform: capitalize;
}

.net-name:hover {
  color: #e75c18;
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

.card {
 
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

 .btn{
    font-size:11.5px !important;
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

.s-comcardd {
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  padding-bottom: 25px;
}

</style>

<style>
.u-btn {
  filter: grayscale(0.6);
}
</style>