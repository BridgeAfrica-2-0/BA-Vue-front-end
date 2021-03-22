<template>
  <div>
    <b-card class="border-0">
      <div class="row border shadow pt-4 pb-3 pl-0 mb-4 mt-3">
        <div class="col-md-6">
          <div class="row">
            <div class="col-md-12">
              <h3 class="bg-light shadow-sm mb-3">
                <fas-icon
                  class="text-primary mr-2 pt-1"
                  :icon="['fas', 'handshake']"
                />Business
                <h6 class="float-right text-success font-weight-bolder">
                  <b-button variant="outline-primary" size="sm"
                    ><b-icon-star></b-icon-star> &nbsp;&nbsp;Upgrade
                    Plan</b-button
                  >
                </h6>
              </h3>
              <div class="d-flex col-md-12 mt-2">
                <img class="img-fluid picture" src="@/assets/img/photo2.jpg" />
                <div class="text-lost">
                  <b>Business Name 1</b>
                  <p class="mb-1">
                    1.1M Community
                    <span class="float-right"
                      >Current Plan:
                      <span class="text-success">Basic</span></span
                    >
                  </p>
                  <p class="mb-1 mb-3">Categorie Name Here</p>
                  <p class="mb-1">
                    <b-icon-person-fill
                      class="text-primary"
                    ></b-icon-person-fill>
                    Visit Profile
                  </p>
                  <p class="mb-1 ">
                    <b-icon-chat-fill class="text-primary"></b-icon-chat-fill>
                    Message
                    <span class="badge rounded-pill bg-primary float-right mt-1"
                      >3</span
                    >
                  </p>
                  <p class="mb-1 ">
                    <b-icon-bell-fill class="text-primary"></b-icon-bell-fill>
                    Notifications
                    <span class="badge rounded-pill bg-primary float-right mt-1"
                      >9</span
                    >
                  </p>
                  <p class="mb-1 ">
                    <b-icon-globe class="text-primary"></b-icon-globe>
                    Visit Website
                  </p>
                  <p class="mb-1 ">
                    <b-icon-shop class="text-primary"></b-icon-shop>
                    Market Place
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="row">
            <div class="row">
              <div class="col-md-12 pl-1">
                <h3 class="mb-3 pl-1">
                  <fas-icon
                    class="text-primary mr-2 pt-1"
                    :icon="['fas', 'chart-line']"
                  />INSIGHTS
                </h3>
                <div class="d-flex col-md-12 mt-2">
                  <line-chart
                    ref="skills_chart"
                    :chart-data="chartData"
                    :options="options"
                    class="chart"
                  ></line-chart>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import LineChart from "@/components/dasboard/charts/lineChart";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    animateRotate: false
  }
};

export default {
  name: "businessDashboard",
  components: { LineChart },
  data() {
    return {
      options,
      chartData: {
        labels: ["Posts 33k", "Visit 1.4k", "Share 870"],
        datasets: [
          {
            backgroundColor: ["#f87979", "#ed2541", "#025410"],
            data: [100, 50, 20]
          }
        ]
      }
    };
  },
  computed: {
    currentDataSet() {
      return this.chartData.datasets[0].data;
    }
  }
};
</script>

<style scoped>
.picture {
  border-radius: 10px;
  width: 190px;
  flex-basis: 40%;
}

.text-lost {
  flex-basis: 60%;
  padding-left: 10px;
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
