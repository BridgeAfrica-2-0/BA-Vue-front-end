<template>
  <div>
    <div class="people-style shadow">
      <b-row>
        <b-col md="3" xl="3" lg="3" cols="5" sm="3">
          <div class="center-img">
            <splide :options="options" class="r-image">
              <splide-slide cl>
                <img :src="member.logo_path" class="r-image" />
              </splide-slide>
            </splide>
          </div>
        </b-col>
        <b-col md="5" cols="7" lg="9" xl="5" sm="5">
          <p class="textt text">
            <strong class="title"> {{ member.name }} </strong> <br />
            <span v-if="member.category.length">
              {{ member.category[0].name }}</span
            >
            <br />
            {{ member.communityNum }}
            {{ $t("network.Community") }}     <span    @click="$emit('BlockUser', member.id,index)"  class="ml-3"  style="cursor: pointer">  
                      
                      <b-icon
                              font-scale="1"
                              icon="exclamation-octagon"
                              v-b-tooltip.hover
                              title="Block This Business"
                              variant="danger"
                            ></b-icon>
                            
                              </span>   <br />

            <!-- <span class="location">
              <b-icon-geo-alt class="ico"></b-icon-geo-alt> {{ member.location_description }}
            </span> -->
            <!-- <br /> -->
            <span v-if="member.about_business.length < 55">{{
              member.about_business
            }}</span>
            <span v-else
              >{{ member.about_business.substring(0, 55) + "..." }}
              <b-link>Read More</b-link></span
            >
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
                  class="b-background shadow"
                  variant="primary"
                  @click="$emit('handleFollow', member)"
                  :style="member.is_follow !== 0 ? 'background-color: rgb(162,107,80);' : ''"
                >
                  <i
                    :class="
                      member.is_follow
                        ? 'fas fa-user-minus fa-lg btn-icon'
                        : 'fas fa-user-plus fa-lg btn-icon'
                    "
                  ></i>
                  <span class="btn-com">{{ $t("network.Community") }}</span>
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
                <BtnCtaMessage :element="member" type="business" />
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
                  class="b-background shadow"
                  variant="primary"
                  @click="goToBusinessAbout(member.id)"
                >
                  <i class="fas fa-map-marked-alt fa-lg btn-icon"></i>
                  <span class="btn-text">{{ $t("network.Direction") }}</span>
                </b-button>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  props: ["member","index"],
  data() {
    return {
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
  method: {
    goToBusinessAbout(id){
      // if(this.$route.name != 'BusinessFollower'){
        this.$router.push(`/business/${id}?tabId=1`);
      // }else {
        console.log("------------------ttt")
        // this.$router.push(`/business/${id}#about`);
      // }
    }
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
    font-size: 14px;
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
    text-align: left;
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
