<template>
  <div class="container-fluid mt-3">
    <b-row class="mr-35">
      <b-col xl="4" md="6" lg="6" sm="12">
        <label>{{ $t("businessowner.Start_Date") }}</label>
        <b-form-datepicker
          id="example-datepicker"
          v-model="startDate"
          class="mb-2"
          :placeholder="$t('businessowner.Start_Date')"
        ></b-form-datepicker>
      </b-col>
      <b-col xl="4" md="6" lg="6" sm="12">
        <label>{{ $t("businessowner.End_Date") }}</label>
        <b-form-datepicker
          id="example-datepicker-1"
          v-model="endDate"
          class="mb-2"
          :placeholder="$t('businessowner.End_Date')"
        ></b-form-datepicker>
      </b-col>
    </b-row>
    <b-row
      class="mr-35"
      v-if="!!business_insights && business_insights !== null"
    >
      <b-col xl="4" md="6" lg="6" sm="12">
        <b-card class="b-shadow">
          <b-row>
            <b-col cols="10">
              <h6 class="card-title mb-0">
                {{ $t("businessowner.New_Notifications") }}
                <p class="s-text">
                  {{ $t("businessowner.From") }} (
                  {{  formatDate(startDate)  }} -
                  {{ formatDate( endDate) }} )
                </p>
              </h6>
            </b-col>
            <b-col>
              <b-card-text class="f-right">
                <b-icon
                  v-b-tooltip.hover
                  :title="$t('businessowner.Tooltip_content_goes_in_here')"
                  icon="exclamation-circle-fill"
                  variant="dark"
                ></b-icon>
              </b-card-text>
            </b-col>
          </b-row>
          <br />
          <b-row>
            <b-col>
              <h3 class="mb-2 m-up">
                {{ business_insights.number_likes }}
                <p class="s-text">
                  {{ $t("businessowner.Total") }} {{ "likes" }}: {{ business_insights.total_likes }}
                </p>
              </h3>
            </b-col>

          </b-row>
        </b-card>
      </b-col>

      <b-col xl="4" md="6" lg="6" sm="12">
        <b-card class="b-shadow">
          <b-row>
            <b-col cols="10">
              <h6 class="card-title mb-0">
                {{ $t("businessowner.New_Notifications") }}
                <p class="s-text">
                  {{ $t("businessowner.From") }} (
                  {{ formatDate(startDate)   }} -
                  {{  formatDate(endDate)  }})
                </p>
              </h6>
            </b-col>
            <b-col>
              <b-card-text class="f-right">
                <b-icon
                        v-b-tooltip.hover
                        :title="$t('businessowner.Tooltip_content_goes_in_here')"
                        icon="exclamation-circle-fill"
                        variant="dark"
                ></b-icon>
              </b-card-text>
            </b-col>
          </b-row>
          <br />
          <b-row>
            <b-col>
              <h3 class="mb-2 m-up">
                {{ business_insights.number_shares }}  
                <p class="s-text">
                  {{ $t("businessowner.Total") }} {{ "shares" }}: {{ business_insights.total_shares }}
                </p>
              </h3>
            </b-col>
          </b-row>
        </b-card>
      </b-col>

      <b-col xl="4" md="6" lg="6" sm="12">
        <b-card class="b-shadow">
          <b-row>
            <b-col cols="10">
              <h6 class="card-title mb-0">
                {{ $t("businessowner.New_Notifications") }}
                <p class="s-text">
                  {{ $t("businessowner.From") }} (
                  {{   formatDate(startDate) }} -
                  {{  formatDate(endDate) }} )
                </p>
              </h6>
            </b-col>
            <b-col>
              <b-card-text class="f-right">
                <b-icon
                        v-b-tooltip.hover
                        :title="$t('businessowner.Tooltip_content_goes_in_here')"
                        icon="exclamation-circle-fill"
                        variant="dark"
                ></b-icon>
              </b-card-text>
            </b-col>
          </b-row>
          <br />
          <b-row>
            <b-col>
              <h3 class="mb-2 m-up">
                {{ business_insights.number_posts }}
                <p class="s-text">
                  {{ $t("businessowner.Total") }} {{ "posts" }}: {{ business_insights.total_posts }}
                </p>
              </h3>
            </b-col>
            <b-col cols="5">
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
    <b-row class="mr-35" v-else>
      {{ $t("businessowner.No_Business_Insights") }} {{ $t("businessowner.Enter_Start_Date_and_End_Date_to_find_Business") }}
      {{ $t("businessowner.Insights") }}
    </b-row>

    <br />
  </div>
</template>

<script>
import Chart from "chart.js";
import moment from "moment";
import planetChartData from "@/planet.js";
export default {
  name: "insight",
  components: {},
  data() {  
    return {
      business_id:null,
      planetChartData: planetChartData,
      business_insights: null,
       startDate:  moment().startOf('month').format('YYYY-MM-DD'),
      endDate: moment().endOf('month').format('YYYY-MM-DD')
    };
  },
  watch: {
    endDate(newValue) {


      console.log(
        "endDate+++++++++++",

        moment(newValue, "YYYY-MM-DD").format("YYYY-MM-DD")
      );
      this.load({ startDate: this.startDate, endDate: this.endDate, business_id:this.business_id });
    },
    startDate(newValue) {
      console.log(
        "startDate+++++++++++",
        moment(newValue, "YYYY-MM-DD").format("YYYY-MM-DD")
      );
    }
  },
  created() {
    
  },
  mounted() {

    this.business_id = this.$route.params.id;
    this.load({ startDate: this.startDate, endDate: this.endDate,business_id:this.business_id });
    const ctx = document.getElementById("planet-chart");
    new Chart(ctx, this.planetChartData);
    
  },
  computed: {},
  methods: {
    formatDate(datee){
    
    return moment( new Date(datee)).format('MMM d, YYYY')

    },

    load(payload) {
      console.log("Load Business Insights start  ++++");
      this.$store
        .dispatch("businessOwner/loadUserBusinessInsight", payload)
        .then(response => {
          console.log("load Business Insights response in component (3)+++++", response);
         
        })
        .catch(error => {
          console.log("error from the server or the browser error(2) ++++++", error);
          console.log("Load Business Insights end +++++");
        })
        .finally(() => {
          this.business_insights = this.$store.getters['businessOwner/getBusinessInsights'].data;
          console.log("Finally load Business Insights +++++", this.business_insights);
        });
    }
  }
};
</script>

<style scoped>
div.col-sm-12.col-md-6.col-lg-6.col-xl-4 {
  padding: 15px;
}
.s-text {
  margin-top: -1px;
  font-size: 13px;
}
.m-up {
  margin-top: -30px;
}
.f-left {
  float: left;
}
.f-right {
  float: right;
}
.i-size {
  overflow: hidden;
  vertical-align: middle;
  margin-top: -30px;
}
.b-shadow {
  box-shadow: 0 0 10px 0 rgba(183, 192, 206, 0.2);
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #f2f4f9;
  border-radius: 0.25rem;
}
.card-title {
  color: #000;
  margin-bottom: 1.2rem;
  font-family: "Overpass";
}
@media (min-width: 762px) {
  .mr-35 {
    margin-right: -35%;
  }
}
</style>