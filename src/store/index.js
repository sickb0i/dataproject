import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    BaseUrl: "https://data.sncf.com/api/records/1.0/search/?dataset=enquetes-gares-connexions-repartition-repartition-par-classe-dage&q=&sort=gare_enquetee&facet=gare_enquetee&facet=classe_d_age&facet=annee"
  },
  mutations: {
  },
  getters: {
    getBaseUrl: state => {
      return state.BaseUrl;
    }
  },
  actions: {
  },
  modules: {
  }
})
