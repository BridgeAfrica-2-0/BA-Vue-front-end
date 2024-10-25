
import { checkCountryLocalisation, currencyMap, getRate } from "@/helpers"

export default {

  namespaced: true,

  state: {
    countryLocalisation: null,
    selectedCountry: null,
    selectedCurrency: null,
    countries: [],
    rate: 1
  },

  mutations: {
    setSelectedCountry(state, country) {
      state.selectedCountry = country;
    },
    setSelectedCurrency(state, currency) {
      console.log(currency)
      state.selectedCurrency = currency;
    },
    setContryLocatisation(state, country) {
      state.countryLocalisation = country
    },
    setContries(state, countries) {
      state.countries = countries
    },
    setRate(state, rate) {
      state.rate = rate
    }
  },
  getters: {
    getLocalisationCountry: state => state.countryLocalisation,
    getSelectedCountry: state => state.selectedCountry,
    getSelectedCurrency: state => state.selectedCurrency,
    getCountries: state => state.countries,
    getRate: state => state.rate,



  },
  actions: {
    async updateRate({ commit }, currency) {
      const rate = await getRate(currency, 'XAF')
      commit("setRate", rate)

    },

    async startLocalisation({ commit }) {

      const countries = currencyMap()
      const userCountry = await checkCountryLocalisation()
      const findCountryInfo = countries.find(u => u.sigle == userCountry)
      const rate = await getRate((Object.keys(findCountryInfo.currency))[0], 'XAF')

      
      commit("setRate", rate)
      commit("setContries", countries)
      commit("setSelectedCountry", findCountryInfo)
      commit("setSelectedCurrency", findCountryInfo.currency[(Object.keys(findCountryInfo.currency))[0]])
      commit("setContryLocatisation", findCountryInfo)
    }
  },
};

