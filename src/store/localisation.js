
import { checkCountryLocalisation, currencyMap, getRate } from "@/helpers"

export default {

  namespaced: true,

  state: {
    hasBeenLoad: false,
    loading:false,
    countryLocalisation: null,
    selectedCountry: null,
    selectedCurrency: null,
    selectedCountryCapital: null,
    countries: [],
    rate: 1,
    settingsLastUpdated: null
  },

  mutations: {
    setHasBeenLoad(state){
      state.hasBeenLoad = true
    },
    setLoading(state, status){
      state.loading = status
    },
    setSelectedCountry(state, country) {
      localStorage.setItem("countrySelected", JSON.stringify(country))
      state.selectedCountry = country;
    },
    setSelectedCurrency(state, currency) {
      localStorage.setItem("currencySelected", JSON.stringify(currency))
      state.selectedCurrency = currency;
    },
    setSelectedCountryCapital(state, capital) {
      localStorage.setItem("selectedCountryCapital", JSON.stringify(capital))
      state.selectedCountryCapital = capital;
    },
    setContryLocatisation(state, country) {
      state.countryLocalisation = country
    },
    setContries(state, countries) {
      state.countries = countries.sort()
    },
    setRate(state, rate) {
      state.rate = rate
    },
    SETTINGS_UPDATED(state) {
      state.settingsLastUpdated = new Date().getTime();
    }
  },
  getters: {
    hasBeenLoad: state => state.hasBeenLoad,
    loading: state => state.loading,

    getLocalisationCountry: state => state.countryLocalisation,
    getSelectedCountry: state => state.selectedCountry,
    getSelectedCurrency: state => state.selectedCurrency,
    getSelectedCountryCapital: state => state.selectedCountryCapital,
    getCountries: state => state.countries,
    getRate: state => state.rate,
  },

  actions: {
    async updateRate({ commit }, currency) {
      const rate = await getRate(currency, 'XAF')
      commit("setRate", rate)
    },

    updateCountry({ commit, state }, country) {
      // const findCountryInfo = state.countries.find(u => u && u.sigle == country.sigle)
      commit("setSelectedCountry", country)
    },

    updateCurrency({ commit }, currency) {
      commit("setSelectedCurrency", currency)

    },
    updateCountryCapital({ commit }, capital) {
      commit("setSelectedCountryCapital", capital)

    },

    async startLocalisation({ commit }) {

      const countries = currencyMap
      const userCountry = await checkCountryLocalisation()
      // const findCountryInfo = countries.find(u => u.sigle == userCountry)
      const findCountryInfo = countries[userCountry];
      const rate = await getRate((Object.keys(findCountryInfo.currency))[0], 'XAF')
      console.log("+++++++++++",rate)

      const constrySelected = localStorage.getItem("countrySelected")
      const currencySelected = localStorage.getItem("currencySelected")
      const selectedCountryCapital = localStorage.getItem("selectedCountryCapital")

      if (constrySelected) {
        commit("setSelectedCountry", JSON.parse(constrySelected))
      } else {
        commit("setSelectedCountry", findCountryInfo)
      }

      if (currencySelected) {
        commit("setSelectedCurrency", JSON.parse(currencySelected))

      } else {
        commit("setSelectedCurrency", {
          ...findCountryInfo.currency[(Object.keys(findCountryInfo.currency))[0]],
          name: Object.keys(findCountryInfo.currency)[0]
        })
      }
      if (selectedCountryCapital) {
        commit("setSelectedCountryCapital", JSON.parse(selectedCountryCapital));
      } else {
        // If findCountryInfo.capital is a string, use it directly
        const capital = typeof findCountryInfo.capital === 'string' 
          ? findCountryInfo.capital 
          : (findCountryInfo.capital && findCountryInfo.capital.length > 0 
            ? findCountryInfo.capital[0] 
            : '');
            
        commit("setSelectedCountryCapital", capital);
      }

      commit("setRate", rate)
      commit("setContryLocatisation", findCountryInfo)
      commit("setContries", countries.sort((a, b) => a.name.localeCompare(b.name)))

      commit("setHasBeenLoad")

      commit("setLoading", false)
    },
    settingsUpdated({ commit }, settings) {
      // Update the timestamp to trigger reactivity
      commit('SETTINGS_UPDATED');
      
      // You can also log or process the settings here if needed
      console.log('Settings updated in store:', settings);
    }
  },
};

