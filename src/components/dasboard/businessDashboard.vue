<template>
  <div>
    <b-card class="border shadow pr-3" style="height:400px">
      <span>
        <h4 class="mb-3">
          <h6 class="title">
            <fas-icon
              class="icons"
              :icon="['fas', 'hands-helping']"
              size="lg"
            />
            <b> {{business.name}} </b>    
          </h6>

          <h6 class="float-right text-success font-weight-bolder">
            <b-button variant="outline-primary" class="upgrade-btn" size="sm"
              ><b-icon-star></b-icon-star> &nbsp;&nbsp;{{$t("dashboard.Upgrade_Plan")}}</b-button
            >
          </h6>
        </h4>
      </span>

      <div class="d-flex col-md-12 mt-2">
        <img class="img-fluid picture" :src="business.picture" />
        <div class="text-lost">
          <b>  {{business.name}}  </b>
          <p class="mb-1">
              {{business.followers}}  {{$t("dashboard.Community")}} <br />
            <span class=""
              >{{$t("dashboard.Current_Plan")}}: <span class="text-success">{{$t("dashboard.Basic")}}</span></span
            >
          </p>
          <p class="mb-1 mb-3"> {{business.category}} </p>
          <p class="mb-1">
            <b-icon-person-fill class="text-primary"></b-icon-person-fill>
              <router-link :to="'business_owner/'+business.id">
                 {{$t("dashboard.Visit_Profile")}}
          </router-link>


          </p>
          <p class="mb-1 ">
            <b-icon-chat-fill class="text-primary"></b-icon-chat-fill>
            {{$t("dashboard.Message")}}
            <span class="badge rounded-pill bg-primary float-right mt-1">
              {{business.message}}
            </span>
          </p>
          <p class="mb-1 ">
            <b-icon-bell-fill class="text-primary"></b-icon-bell-fill>
            {{$t("dashboard.Notifications")}}
            <span class="badge rounded-pill bg-primary float-right mt-1">  {{business.notification}} </span>
            
          </p>
          <p class="mb-1 ">
            <b-icon-globe class="text-primary"></b-icon-globe>
            <a > {{$t("dashboard.Visit_Website")}}</a>
          </p>
          <p class="mb-1 ">
            <b-icon-shop class="text-primary"></b-icon-shop>
            {{$t("dashboard.Market_Place")}}
          </p>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import ProfileAndBusinessDetails from "../../store/ProfileAndBusinessDetails";

export default {
  name: "businessDashboard",
  props: ["selectedb"],
  computed: {

    business() {
      return this.$store.state.dashboard.dashboard_business;
    }
  },
  created() {
    this.$store
      .dispatch("ProfileAndBusinessDetails/getdetails")
      .then(() => {
        console.log("the response");
      })
      .catch(err => {
        console.log({ err: err });
      });
  }
};
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .upgrade-btn {
    width: 146px;
    height: 38px;
  }

  .name {
    font-size: 20px;
  }

  .text-lost {
    font-size: 14px;

    flex-basis: 90%;
    padding-left: 30px;

    font-family: Helvetica Neue;
  }
}

@media only screen and (max-width: 768px) {
  .upgrade-btn {
    width: 126px;
    height: 33px;
  }

  .card {
    padding: 5px;
    padding-top: 10px;
  }

  .name {
    font-size: 16px;
  }

  .text-lost {
    font-size: 12px;

    flex-basis: 100%;
    padding-left: 10px;

    font-family: Helvetica Neue;
  }
}

.logo-img {
  width: 60px;
}

@media only screen and (max-width: 768px) {
  .btn {
    font-size: 10px;
  }

  .text-lost {
    flex-basis: 70%;
    padding-left: 30px;
    font-size: 13px;
  }

  h4 {
    font-size: 15px;
  }

  .logo-img {
    width: 30px;
  }
  .see-all-link {
    font-size: 10px;
  }
}

.picture {
  
  border-radius: 10px;
    width: 48%;
    height: 250px;
    flex-basis: 40%;
    object-fit: contain;
}





.text-lost {
  flex-basis: 90%;
  padding-left: 30px;
}

.colum {
  justify-content: space-around;
}

.chart {
  display: block;
  height: 315px;
  width: 400px;
}

.text-design {
  line-height: 40px;
}
</style>
