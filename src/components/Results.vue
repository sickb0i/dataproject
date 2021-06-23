<template>
  <v-container>
    <v-data-table
        :headers="tableHeaders"
        :items="itemsData"
        :items-per-page="20"
        class="elevation-1"
    ></v-data-table>
    <Donut :chartdata="getChartData" :labels="getLabels" :options="options"/>
  </v-container>
</template>

<script>
import tableHeaders from "../tableHeaders";
import Donut from "./Donut";

export default {
  data() {
    return {
      tableHeaders: tableHeaders,
      options: {
        responsive: true,             // Adaptation en fonction taille ecran
        maintainAspectRatio: false,   // Ignorer la relation d'aspect lorsque la taille d'ecran change
        animation: {
          animateScale: true          // Animation du centre vers les bords
        },
      }
    };
  },
  components: {
    Donut,
  },
  props: {
    itemsData: {
      type: Array,
    },
  },
  computed: {
    getLabels() {
      return this.itemsData.map(item => item.classe_d_age);
    },
    getChartData() {
      return this.itemsData.map(item => item.pourcentage);
    }
  }
};
</script>

<style>
</style>
