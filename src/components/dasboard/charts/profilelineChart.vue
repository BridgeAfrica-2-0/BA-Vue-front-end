<script>
import { Doughnut } from "vue-chartjs";

export default {
  name: "lineChart",
  extends: Doughnut,
  props: ["chartData", "options"],

  watch: {
    chartData: function(newVal) {
      this.update();
    }
  },

  methods: {
    update() {
      this.$data._chart.update();
      this.renderChart(this.chartData, this.options);
    }
  },
  mounted() {
    this.renderChart(this.chartData, this.options);
  }
};
</script>

<style scoped></style>
