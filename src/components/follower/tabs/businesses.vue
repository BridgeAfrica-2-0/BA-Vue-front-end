<template>
  <div>
    
    <fas-icon
      class="primary mr-2 pt-1 icon-size primary"
      :icon="['fas', 'handshake']"
    />
    {{ $t("profilefollower.Businesses") }} 
  
    <hr />
    
     <div class="business" v-if="noBusiness == false">
      <b-row>
        <b-col lg="6" class="p-1 mb-2" v-for="item in busineses" :key="item.id">

       <Business  class="h-100" :key="item.id" :business="item"   @getTotalCommunity='getTotalCommunity'/>
         
         
        </b-col>
      </b-row>

      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </div>
    <div v-show="noBusiness" class="no-business">
      <b-container>
        <h2>{{ $t("profilefollower.No_Businesses_Listed") }}</h2>
        <hr />
      </b-container>
      <p>
        {{ $t("profilefollower.User_has_not_listed_any_business") }}.
        {{ $t("profilefollower.Please_check_back_later") }}
      </p>
    </div>

    
     <div class="mx-auto text-center my-5"  v-if="!busineses.length"  >
        <p class="my-2" >
          No Business found
        </p>
      </div>  

  </div>
</template>

<script>
import axios from "axios";
import Business from "@/components/Business";
export default {
  data() {
    return {
      noBusiness: false,
      islogin:'',
      foll_id: "",
      page: 1,
      busineses: [],
    };
  },
 components: {
    Business
  },
  methods: {

    // bizzFollower(id){
    //   console.log(id);
    //   this.$router.push({name:'BusinessFollower', params:{id: id}})
    // },
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
        type: "business",
      };

      await axios
        .post(uri, data)
        .then((response) => {
          console.log(response);
          user.is_follow = nextFollowState;
          document.getElementById("followbtn" + user.id).disabled = false;
        })
        .catch((err) => {
          console.log(err);
          document.getElementById("followbtn" + user.id).disabled = false;
        });
    },

    infiniteHandler($state) {
     
      let url = "business/user?page=" + this.page + "&slug=" + this.foll_id;

      if(!this.islogin){
            url='guest/'+url;
          }

      this.$store
        .dispatch("follower/loadMoreUserBusiness", url)
        .then(({ data }) => {
          console.log("lala baledddd");
          console.log(data);
          if (data.length) {
            this.page += 1;

            this.busineses.push(...data);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
  },
  computed: {

    
    old_busineses() {
      return this.$store.state.follower.profileBusiness;
    },
  },
  mounted() {

     this.islogin=this.$store.getters["auth/isLogged"];
    this.foll_id = this.$route.params.id;
    // this.$store
    // 	.dispatch("follower/profileBusiness", this.foll_id)
    // 	.then((response) => {})
    // 	.catch((error) => {
    // 		console.log({ error: error });
    // 	});
  },
};
</script>

<style scoped>

  .over{
    cursor: pointer;
      }
      .over:hover{
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

.no-business {
  border: 1px solid #ccc;
  width: 50%;
  height: 40%;
  padding: 40px;
  margin-left: 270px;
}

.icon {
  height: 24px;
  width: 24px;
}

.primary-bg {
  background-color: rgb(242, 242, 242);
  border: none;
}

h2,
p {
  text-align: center;
  font-size: 12px;
  font-family: Helvetica;
}

@media only screen and (max-width: 768px) {
  p {
    font-size: 12px;
    font-family: Helvetica;
  }
  span {
    margin-left: 6px;
  }
}

.btn {
  padding-top: 6px;
  font-size: 10px;

  height: 28px;
  width: 92px;
}

.r-image {
  border-radius: 8px;

  height: 100px;
  width: 100px;
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
    text-align: left !important;
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
    width: 130px;
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
    text-align: left !important;
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
