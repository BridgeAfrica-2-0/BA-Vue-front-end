<template>
  <div class="p-2">
    <b-row>
      <b-col lg="6" sm="12" class="p-2" v-for="item in businesses" :key="item.id">
        <div class="people-style shadow">
          <b-row>
            <b-col md="3" xl="3" lg="3" cols="5" sm="3">
              <div class="center-img">
                <splide :options="options" class="r-image">
                  <splide-slide cl>
                    <img :src="item.picture" class="r-image" />   
                  </splide-slide>
                </splide>
              </div>
            </b-col>
            <b-col md="5" cols="7" lg="7" xl="5" sm="5">
              <p class="textt">
                <strong class="title"> {{ item.name }} </strong> <br />
                {{ item.category }}
                <br />
                {{ count(item.followers) }}
                {{ $t('profileowner.Community') }} <br />

                <span class="location">
                  <b-icon-geo-alt class="ico"></b-icon-geo-alt
                  >{{ item.country }}
                </span>
                <br />
       <read-more
              more-str="read more"
              class="readmore"
              :text="item.about_business"
              link="#"
              less-str="read less"
              :max-chars="15"
            >
            </read-more>
              </p>
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
                      class="b-background shadow "
                      variant="primary"
                    >
                      <i class="fas fa-user-plus  fa-lg btn-icon "></i>
                      <span class="btn-com">{{ $t('profileowner.Community') }}</span>
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
                    <b-button
                      block
                      size="sm"
                      class="b-background shadow "
                      variant="primary"
                    >
                      <i class="fas fa-envelope   fa-lg btn-icon "></i>
                      <span class="btn-text">{{ $t('profileowner.Message') }}</span>
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
                    <b-button
                      block
                      size="sm"
                      class="b-background shadow "
                      variant="primary"
                    >
                      <i class="fas fa-map-marked-alt  fa-lg btn-icon "></i>
                      <span class="btn-text">{{ $t('profileowner.Direction') }}</span>
                    </b-button>
                  </b-col>
                </b-row>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
     
      <infinite-loading :identifier="infiniteId"  @infinite="infiniteHandler"  ref="infiniteLoading" ></infinite-loading>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";

export default {
  props: ["type", "searchh"],
  
   data() {
    return {
      page: 1,
      infiniteId: +new Date(),
      options: {
        rewind: true,
        autoplay: true,
        perPage: 1,
        pagination: false,

        type: "loop",
        perMove: 1
      }
    };
  },

  computed:{
   
    businesses(){

      if(this.type=="Follower"){ 

      return  this.$store.state.profile.BcommunityFollower.business_followers;  

       }else{

         return  this.$store.state.profile.BcommunityFollowing.business_following; 
       }
   }

  },
   
  methods: {
    count(number) {
      if (number >= 1000000) {
        return number / 1000000 + "M";
      }
      if (number >= 1000) {
        return number / 1000 + "K";
      } else return number;
    },


    

       search(){
     
       console.log('search started');
       
         if(this.type=="Follower"){ 
         
        this.$store.commit("profile/setBcommunityFollower",{ "business_followers": [ ], "total_business_follower": 0 }); 

       }else{
       
        
        this.$store.commit("profile/setBcommunityFollowing",{ "business_following": [ ], "total_business_following": 0 }); 
       }

      this.page = 1;
      this.infiniteId += 1;

     
     this.$refs.infiniteLoading.attemptLoad();
    

    },


     


     
          infiniteHandler($state) { 
           

      let url = null;

         if(this.type=="Follower"){  
          url="profile/business/follower/"
         }else{
          url="profile/business/following/";
         }
      axios
        .get(url + this.page+"?keyword="+this.searchh )
        .then(({ data }) => {
          console.log(data);
        
          if(this.type=="Follower"){  


          if (data.data.business_followers.length) {
            
         
            this.businesses.push(...data.data.business_followers); 
            this.page += 1;
            
            $state.loaded();

           }else{
              $state.complete();
             
           }
        
          }else{




             if (data.data.business_following.length) {
            
         
            this.businesses.push(...data.data.business_following); 
            this.page += 1;
            
            $state.loaded();

           }else{
              $state.complete();
             
           }

          }
           
        })
        .catch((err) => {
          console.log({ err: err });
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

    margin-left: 30px;

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