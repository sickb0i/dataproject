<template>
  <v-container>
    <v-row>
      <v-col sm="6">
        <v-select
          v-model="cityFilter"
          :items="cityStationName"
          label="Ville"
          required
        ></v-select>
      </v-col>
      <v-col class="d-flex justify-center" sm="6">
        <v-btn id="button" class="my-5" color="primary" @click="filterItems"
          >Rechercher</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Results :itemsData="filteredItems" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Results from "./Results";
export default {
  components: {
    Results,
  },
  data() {
    return {
      cityStationName: [],
      years: "",
      items: [],
      cityFilter: "",
      filteredItems: [],
    };
  },
  async created() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      const Url = this.$store.getters.getBaseUrl;
      const response = await fetch(`${Url}/&rows=375`);
      const data = await response.json();
      this.items = data.records.map((record) => record.fields);
      this.cityStationName = this.items.map((item) => item.gare_enquetee);
      this.years = this.items.map((item) => item.annee).sort();
    },
    filterItems() {
      console.log(this.cityFilter);
      if (this.cityFilter) {
        this.filteredItems = this.items.filter(
          (item) => item.gare_enquetee === this.cityFilter
        );
      } else {
        this.filteredItems = this.items;
      }
      this.cityFilter = "";
    },
  },
};
</script>

<style scoped>
</style>