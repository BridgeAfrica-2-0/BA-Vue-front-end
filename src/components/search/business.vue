<template> 
  <div v-if="islogin">  
    <Skeleton  :loading="prodLoader" />
    <Skeleton  :loading="prodLoader" />
     <NotFoundComponent
      v-if="business.data.length < 1 && prodLoader == false"
      :title="title"
    /> 
    <div class="text-center"> 
    <b-spinner
      v-if="prodLoader"
      variant="primary"
      :label="$t('search.Spinning')"
    ></b-spinner>
     </div>

   <Business
        v-for="item in business.data"
        :key="item.id"
        :business="item"  
      />

    <b-pagination
      v-if="business.next || business.previous"
      v-model="currentPage"
      :total-rows="business.total"
      pills
      :per-page="business.per_page"
      aria-controls="my-table"
      @change="changePage"
      align="center"
    ></b-pagination>
  </div>  
  <div v-else>  
  
       <login />
  </div>  
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import login from "@/components/search/login";
import NotFoundComponent from "@/components/NotFoundComponent";
import Skeleton from "@/components/skeleton";
import Business from "@/components/Business";
export default {
  props: ["image"],
  components: {
    NotFoundComponent,
    login,
    Skeleton,
    Business
  },
  data() {
    return {
      total: 0,
     
      per_page: 10,
      list: [],
      currentPage: 1,
      nextLoad: false,
      title: this.$t("search.No_Business_Found"),
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
    ...mapGetters({
      searchstate: "business/getSearchState",
      business: "business/getBusiness",
      sponsorbusiness: "business/getSponsorBusinesses",
      prodLoader: "business/getloadingState",
    }),
    
    islogin(){  return this.$store.getters["auth/profilConnected"]; }
  },
  mounted() {
    if(this.islogin){
      this.getBusiness();  
    }
  },
  created(){
    this.islogin = this.$store.getters["auth/isLogged"];
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
    gotoBusiness(id) {
      this.$router.push(`/business/${id}#about`);
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
    ...mapActions({
      findBusiness: "business/FIND_BUSINESS",
      nextPage: "business/NEXT_PAGE",
    }),
    getBusiness() {
      this.$store.commit("business/setLoading", true);
      this.findBusiness({main:true})
        .then((res) => {
          this.$store.commit("business/setLoading", false);
          this.total = this.business.total;
        })
        .catch((err) => {
          this.$store.commit("business/setLoading", false);
          console.error(err);
        });
    },
    changePage(value) {
      this.$parent.changeBusinessPage(value);
      this.currentPage = value;
      const endpoint = this.business.next != "" ? this.business.next : this.business.previous;
      this.nextPage({url: endpoint, page:value})
        .then((res) => {
        }).catch((err) => {
          this.total = this.business.total;
          console.error(err);
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
    font-size: 12px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: 10px;

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

    margin-left: 70px;

    margin-right: -5px;

    line-height: 25px;
  }

  .location {
    margin-bottom: 30px;
  }

  .btn {
    padding-top: 6px;

    height: 38px;
    width: 127px;
    font-size: 13px;
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
