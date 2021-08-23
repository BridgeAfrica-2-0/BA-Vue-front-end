import Business from '@/components/dasboard/communitybusiness'; import
Businesses from '@/components/follower/tabs/businesses';
<template>
  <div>
    <b-card class="border shadow " style="height:250px">
      <span>
        <h6 class="mybusi">
          <fas-icon class="icons" :icon="['fas', 'hands-helping']" size="lg" />
          <b> My Businesses </b>
        </h6>
      </span>
      <div class="s-card " style="overflow: -moz-scrollbars-vertical">
      <div v-if="$store.state.details.slice(1).length < 1">
        <b-row>
          <b-col>
            <div class="p-top">
              <br />
              <h6>No Business</h6>

              <b-button variant="primary" class="busi-btn">
                Add Business
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>
      <div
        v-else
        class="people-style shadow"
        v-for="item in $store.getters.getdetails.slice(1)"
        :key="item.id"
      >
        <b-row>
          <b-col md="3" xl="3" lg="3" cols="5" sm="3">
            <div class="center-img">
              <splide-slide cl>
                <img :src="item.profilePicture" class="r-image" />
              </splide-slide>
            </div>
          </b-col>
          <b-col md="5" cols="7" lg="7" xl="5" sm="5">
            <p class="textt">
              <strong class="title"> {{ item.username }} </strong> <br />
              {{ item.category }}
              <br />
              {{ item.followers }} Community <br />

              <span class="location">
                <b-icon-geo-alt class="ico"></b-icon-geo-alt>
                {{ item.location_description }}
              </span>
              <br />

              {{ item.about_business }} <b-link>Read More</b-link>
            </p>
          </b-col>
        </b-row>
      </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "emptybusiness"
};
</script>

<style scoped>
.p-top {
  padding-top: 20px;
  text-align: center;
  align-content: center;
}

@media only screen and (min-width: 768px) {
  .busi-btn {
    width: 133px;
    height: 38px;
    font-family: Helvetica Neue;
  }

  .mybusi {
    font-size: 20px;
  }
}

@media only screen and (max-width: 768px) {
  .busi-btn {
    width: 112px;
    height: 38px;
    font-family: Helvetica Neue;

    font-size: 12px;
  }

  .mybusi {
    font-size: 12px;
  }
}
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
.s-card {
  height: 190px;
  overflow: auto;
  overflow-x: hidden;
  padding: 15px;
}
</style>
