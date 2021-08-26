<script>
import { Doughnut } from "vue-chartjs";

export default {
  name: "lineChart",
  extends: Doughnut,
  props: ["chartData", "options"],

  watch: {

    chartData:function(newVal) {

      this.update();
      console.log(newVal);
      console.log("hello you")

    }

  },

  methods: {
    update() {
      this.$data._chart.update();
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>

<style scoped></style>
