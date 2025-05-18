
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
      // Set loading state while we initialize
      commit("setLoading", true);
    
      try {
        const countries = currencyMap;
        const userCountry = await checkCountryLocalisation();
        // Get the country info from the map
        const findCountryInfo = countries[userCountry];
        
        // Get exchange rate
        const rate = await getRate((Object.keys(findCountryInfo.currency))[0], 'XAF');
        
        // Get stored values from localStorage if available
        const constrySelected = localStorage.getItem("countrySelected");
        const currencySelected = localStorage.getItem("currencySelected");
        const selectedCountryCapital = localStorage.getItem("selectedCountryCapital");
    
        // Create properly formatted country object with all required properties
        const formattedCountry = {
          ...findCountryInfo,
          code: findCountryInfo.code || findCountryInfo.sigle || userCountry,
          flag: findCountryInfo.flag || `https://flagcdn.com/w80/${userCountry.toLowerCase()}.png`,
          name: findCountryInfo.name || userCountry
        };
    
        // Use stored country or fallback to our formatted country
        if (constrySelected) {
          const parsedCountry = JSON.parse(constrySelected);
          // Ensure flag is available
          if (!parsedCountry.flag) {
            parsedCountry.flag = `https://flagcdn.com/w80/${(parsedCountry.code || parsedCountry.sigle || userCountry).toLowerCase()}.png`;
          }
          commit("setSelectedCountry", parsedCountry);
        } else {
          commit("setSelectedCountry", formattedCountry);
        }
    
        // Handle currency selection
        if (currencySelected) {
          commit("setSelectedCurrency", JSON.parse(currencySelected));
        } else {
          const currencyKey = Object.keys(findCountryInfo.currency)[0];
          commit("setSelectedCurrency", {
            ...findCountryInfo.currency[currencyKey],
            name: currencyKey
          });
        }
    
        // Handle capital selection
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
    
        // Set other state values
        commit("setRate", rate);
        commit("setContryLocatisation", formattedCountry);
        
        // Sort countries and set them in the store
        const sortedCountries = Object.values(countries)
          .map(country => ({
            ...country,
            // Ensure code and flag exist for all countries
            code: country.code || country.sigle,
            flag: country.flag || `https://flagcdn.com/w80/${(country.code || country.sigle).toLowerCase()}.png`
          }))
          .sort((a, b) => a.name.localeCompare(b.name));
          
        commit("setContries", sortedCountries);
        
        // Mark loading as complete
        commit("setHasBeenLoad");
      } catch (error) {
        console.error("Error initializing localization:", error);
      } finally {
        commit("setLoading", false);
      }
    },
    settingsUpdated({ commit }, settings) {
      // Update the timestamp to trigger reactivity
      commit('SETTINGS_UPDATED');
      
      // You can also log or process the settings here if needed
      console.log('Settings updated in store:', settings);
    }
  },
};

