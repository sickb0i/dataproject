

<script>
import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
  data() {
    return {
      dataDonut: {
        labels: this.labels,
        datasets: [
          {
            label: "Tranche d'âge",
            data: this.chartData,
          },
        ],
      },
    };
  },
  props: {
    labels: {
      type: Array,
    },
    chartdata: {
      type: Array,
    },
    options: {
      type: Object,
    },
  },
  mounted() {
      console.log(this.chartdata, this.labels);
    this.renderChart(this.dataDonut, this.options);
  },
};
</script>

<style>
</style>