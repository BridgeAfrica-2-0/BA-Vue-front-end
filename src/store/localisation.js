
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

    updateCountry({ commit, state }, countryCode) {
      const findCountryInfo = state.countries.find(u => u && u.sigle == countryCode)
      commit("setSelectedCountry", findCountryInfo)
    },

    updateCurrency({ commit, state }, currencyCode) {
      const findCountryInfo = state.countries.find(u => u && u.currency && u.currency[currencyCode])

      commit("setSelectedCurrency", {
        ...findCountryInfo.currency[(Object.keys(findCountryInfo.currency))[0]],
        name: Object.keys(findCountryInfo.currency)[0]
      })

    },

    async startLocalisation({ commit }) {

      const countries = currencyMap()
      const userCountry = await checkCountryLocalisation()
      const findCountryInfo = countries.find(u => u.sigle == userCountry)
      const rate = await getRate((Object.keys(findCountryInfo.currency))[0], 'XAF')


      commit("setSelectedCountry", findCountryInfo)
      commit("setSelectedCurrency", {
        ...findCountryInfo.currency[(Object.keys(findCountryInfo.currency))[0]],
        name: Object.keys(findCountryInfo.currency)[0]
      })
      commit("setContryLocatisation", findCountryInfo)
      commit("setContries", countries)
      commit("setRate", rate)


    }
  },
};

