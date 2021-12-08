<template>
  <div>


<NotFoundComponent v-if=" !business.data.length  && !prodLoader" :title="title" />
    <div class="people-style shadow" v-for="biz in business.data" :key="biz.business_id">   
      <b-row>
        <b-col md="3" xl="3" lg="3" cols="5" sm="3">
          <div class="center-img">
            <splide :options="options" class="r-image">
              <splide-slide cl>
                <img
                  :src="biz.logo_path"
                  class="r-image"
                />
              </splide-slide>
            </splide>
          </div>
        </b-col>
        <b-col md="9" cols="7" lg="5" sm="5">
          <p class="textt">
            <strong class="title"> {{biz.name}} </strong> <br />
            <span v-for="cat in biz.category" :key="cat.name"> {{cat.name}} </span>
            <br />
            {{ count( biz.followers) }} {{$t("search.Community")}} <br />

            <span class="location">
              <b-icon-geo-alt class="ico"></b-icon-geo-alt> {{ biz.country }}
            </span>
            <br />
  <read-more
              :more-str="$t('search.read_more')"
              class="readmore"
              :text="biz.about_business"
              link="#"
              :less-str="$t('search.read_less')"
              :max-chars="15"
            >
            </read-more>

          </p>
        </b-col>

        <b-col lg="4" md="12" xl="4" cols="12" sm="4">
          <div class="s-button">
            <b-row>
              <b-col
                md="4"
                lg="12"
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
                  <span class="btn-com">{{$t("search.Community")}}</span>
                </b-button>
              </b-col>

              <b-col
                md="4"
                lg="12"
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
                  <span class="btn-text">{{$t("search.Message")}}</span>
                </b-button>
              </b-col>

              <b-col
                md="4"
                lg="12"
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
                  <span class="btn-text">{{$t("search.Direction")}}</span>
                </b-button>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>

  


    <b-pagination v-if="business.data.length"
      v-model="currentPage"
      :total-rows="total"
      :per-page="per_page"
      aria-controls="my-table"
      @change="changePage"
      align="center"
    ></b-pagination>

  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import NotFoundComponent from "@/components/NotFoundComponent";
export default {
  props: [ "image"],
  components: {
    NotFoundComponent,
   
  },

  data() {
    return {

       total:0,
      per_page:10,
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
        perMove: 1
      }
    };
  },


 computed: {
    ...mapGetters({
      searchstate: "business/getSearchState",
      business: "business/getBusiness",
      sponsorbusiness: "business/getSponsorBusinesses",
      prodLoader: "business/getloadingState"

    }),
  },

  mounted(){
    this.getBusiness();
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

      ...mapActions({
      
      findBusiness: "business/FIND_BUSINESS",
       nextPage: "business/NEXT_PAGE",
    }),

    getBusiness(){


       console.log("business search mounted");
          this.$store.commit("business/setLoading", true);
      
      
      
         
         this.findBusiness({})
        .then((res) => {
          console.log("business list: ");
          console.log(this.business);
          this.$store.commit("business/setLoading", false);
         
           
          this.total = this.business.total
        })
        .catch((err) => {
           this.$store.commit("business/setLoading", false);
         
          console.error(err);
        });

    },

    changePage(value) {

      console.log("next page loading ");
      
    
      this.$store.commit("business/setLoading", true);
      this.currentPage = value;
     
         
         this.nextPage( this.currentPage )
        .then((res) => {
          console.log("business list: ");
          console.log(this.business);
          this.prodLoader = false;
        })
        .catch((err) => {
          this.prodLoader = false;
          this.total = this.business.total
          console.error(err);
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

    margin-left: -15px;
    margin-right: -15px;

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
</style>
