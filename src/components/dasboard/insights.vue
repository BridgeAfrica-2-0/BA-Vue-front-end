<template>
  <div>
    <b-card class="  border shadow c-h" >

      <span>   
                <h3 class="mb-3 pl-1">
                  <fas-icon
                    class="text-primary mr-2 pt-1"
                    :icon="['fas', 'chart-line']"
                  />INSIGHTS
                </h3>  </span>  <p>  Discover How Customers Finds And Interact With You  </p>

        
            
            <line-chart
                    ref="skills_chart"
                    :chart-data="chartData"
                    :options="options"
                    class="chart"
                  ></line-chart>
                  
                  
                  
     

          

                
                  
              
             
            
        
    
    </b-card>
  </div>
</template>

<script>
import LineChart from "@/components/dasboard/charts/lineChart";

const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: {
    animateRotate: true
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


.c-h{
  height: 400px;
}
.chart {
  display: block;
  height: 250px;
  width: 360px;
}
.text-design {
  line-height: 40px;
}
</style>
