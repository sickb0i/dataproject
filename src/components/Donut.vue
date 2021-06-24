<script>
import { Doughnut } from "vue-chartjs";
export default {
  extends: Doughnut,
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
  methods: {
    renderDonutChart: function () {
      /**
       * Methode personalisee qui nous sert a englober
       * la methode chartjs "renderChart" afin de garder un appel
       * court et clair dans mounted et ailleurs
       */

      let dataDonut = {
        labels: this.labels,
        datasets: [
          {
            label: "Tranche d'âge",
            data: this.chartdata,
            backgroundColor: {
              // TODO: ajouter des couleurs de remplissage du Donut!
            }
          },
        ]
      }

      this.renderChart(dataDonut, this.options)
    }
  },
  mounted() {
    this.renderDonutChart()
  },
  watch: {
    /**
     * Les elements declares dans watch servent a
     * observer en permanence des eventuels changements
     * dans nos proprietes afin de "reagir" a ces changements.
     *
     * syntaxe: nomDeLaProprieteQuiRisqueDeChanger: function() { **faire quelque chose** }
     */

    chartdata: function () {
      /**
       * Lorsque les donnees chartdata sont mises a jour
       * par le composant parent, on souhaite re-dessiner le graphique
       * afin de montrer les donnees mises a jour
       */
      this.$data._chart.destroy()
      this.renderDonutChart()
    },
  },
}
</script>

<style>
</style>
