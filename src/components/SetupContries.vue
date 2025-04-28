<template>
  <div v-if="open" class="modal fade" id="settings" tabindex="-1" role="dialog" aria-labelledby="model-settings"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-center" id="model-settings">For better delivery prices, select your country</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close" ref="close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div class="countries my-1">
            <strong for="">Country</strong>
            <v-select v-model="country" :options="countries" label="name" :reduce="country => country" @input="onCountryChange">
              <template #option="option">
                <span>
                  <img :src="option.flag" class="flag" />
                  {{ option.name }}
                </span>
              </template>
              <template #selected-option="option">
                <span>
                  <img :src="option.flag" class="flag" />
                  {{ option.name }}
                </span>
              </template>
            </v-select>
          </div>

          <div class="countries my-2">
            <strong for="">Currency</strong>
            <v-select v-model="currency" :options="currencies" label="name" :reduce="currency => currency">
              <template #option="option">
                <span>
                  ({{ option.symbol }})
                  {{ option.name }}
                </span>
              </template>
              <template #selected-option="option">
                <span>
                  ({{ option.symbol }})
                  {{ option.name }}
                </span>
              </template>
            </v-select>
          </div>

          <div class="language my-2">
            <strong for="">Language</strong>
            <select class="custom-select" v-model="lang">
              <option :value="ev.value" v-for="(ev, index) in langs" :key="index">{{ ev.name }}
              </option>
            </select>
          </div>

          <button class="btn btn-primary w-100" @click="onChange">Save</button>

        </div>
      </div>
    </div>
  </div>
</template>


<script>
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';

import { LocalisationMixins } from "@/mixins"
import { onInitializer2 } from "@/helpers/index";

export default {
  components: {
    vSelect
  },
  mixins: [LocalisationMixins],

  data: () => ({
    country: "",
    currency: "",
    lang: "en",
    langs: [
      { name: 'Français', value: 'fr' },
      { name: 'English', value: 'en' },
    ],
    currencies: [],
    countries: [],
    capital: "",
  }),

  created() {
    this.country = this.countrySelected
    this.currency = this.currencySelected
    this.capital = this.selectedCountryCapital
    this.onStart(this.countries.length ? this.countries : [])
    this.loadCountries();
  },

  watch: {
    countrySelected(newValue) {
      this.country = newValue
    },
    currencySelected(newValue) {
      this.currency = newValue
    },
    selectedCountryCapital(newValue) {
      this.capital = newValue
    },
    countries(newValue) {
      if (!newValue.length)
        return false

      if (!this.currency && !this.country) {
        this.country = this.countrySelected
        this.currency = this.currencySelected
        this.capital = this.selectedCountryCapital
      }
      this.onStart(newValue)
    }
  },

  props: {
    open: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    onStart(newValue) {
      const currencies = newValue.map(c => c.currency).filter(c => c)

      const seenCurrencies = new Set();
      const uniqueCurrencyMap = {};

      for (const [key, value] of Object.entries(currencies)) {
        const [currency] = Object.keys(value)

        if (!seenCurrencies.has(currency)) {
          seenCurrencies.add(currency);
          uniqueCurrencyMap[currency] = value[currency];
        }
      }

      this.currencies = Object.entries(uniqueCurrencyMap).map(curreny => {
        const [key, value] = curreny
        return { name: key, symbol: value.symbol };
      }).sort((a, b) => a.name.localeCompare(b.name));
    },
    
    async loadCountries() {
      try {
        const countriesData = await onInitializer2();
        console.log("Countries data loaded:::::::::::::::", countriesData);
        if (countriesData.length > 0) {
          this.countries = countriesData;
        } else {
          console.error("No countries data available.");
        }
      } catch (error) {
        console.error("Error loading countries:", error);
      }
    },
    
    // onCountryChange(selectedCountry) {
    //   if (!selectedCountry || !selectedCountry.currency) return;
      
    //   // Get the default currency for this country
    //   const countryCurrency = selectedCountry.currency;
    //   const currencyKey = Object.keys(countryCurrency)[0];
      
    //   // Find the corresponding currency object in our currencies list
    //   const defaultCurrency = this.currencies.find(curr => curr.name === currencyKey);
      
    //   // Set the currency if found
    //   if (defaultCurrency) {
    //     this.currency = defaultCurrency;
    //   }
    // },
    onCountryChange(selectedCountry) {
  if (!selectedCountry) return;
  
  // Update the capital
  this.capital = selectedCountry.capital || '';
  
  // Handle currency (existing code)
  if (selectedCountry.currency) {
    const countryCurrency = selectedCountry.currency;
    const currencyKey = Object.keys(countryCurrency)[0];
    
    const defaultCurrency = this.currencies.find(curr => curr.name === currencyKey);
    
    if (defaultCurrency) {
      this.currency = defaultCurrency;
    }
  }
},
    
    change(lang) {
      this.$i18n.locale = lang;

      if (lang == 'en') {
        this.img = require("@/assets/img/about/en.png");
      } else {
        this.img = require("@/assets/img/la-france.png");
      }
    },

    onChange() {
      this.$store.dispatch("localisation/updateCountry", this.country)
      this.$store.dispatch("localisation/updateCurrency", this.currency)
      this.$store.dispatch("localisation/updateRate", this.currency.name)
      this.$store.dispatch("localisation/updateCountryCapital", this.capital)
      this.updateHelperValues();
      this.change(this.lang)
      this.notifySettingsChanged();
      this.$refs.close.click();
    },
    
    updateHelperValues() {
      // Handle country selection
      if (this.country) {
        const countryData = {
          country: this.country.code,
          name: this.country.name
        };
        localStorage.setItem('country', JSON.stringify(countryData));
        
        // Set isLocal flag based on country selection
        if (this.country.code === 'CM') {
          localStorage.setItem("isLocal", 'true');
        } else {
          localStorage.setItem("isLocal", 'false');
        }
      }
      
      // Handle currency selection
      if (this.currency) {
        // Store the explicitly selected currency code
        const currencyCode = this.currency.name;
        
        // Set a flag that indicates currency was explicitly selected by user
        localStorage.setItem("userSelectedCurrency", currencyCode);
        localStorage.setItem("isExplicitCurrencySelection", "true");
        
        // Prepare and store currency data with explicit symbol
        const currencyData = {
          "currency": currencyCode,
          "symbol": this.currency.symbol || "",
          "rate": 1 // Default rate, will be updated by getRate on next use
        };
        
        localStorage.setItem("currencyRate", JSON.stringify(currencyData));
        localStorage.setItem("detectedCurrency", currencyCode);
        
        // Clear any cached rates to force refresh with new currency
        const cacheKeys = Object.keys(localStorage).filter(key => key.startsWith('rate_'));
        cacheKeys.forEach(key => localStorage.removeItem(key));
      }
      if(this.capital) {
        localStorage.setItem("countryCapital", this.capital);
      }
      // Update language for moment.js formatting in the helper
      localStorage.setItem("lang", this.lang);
      
      // Add timestamp of when settings were last updated
      localStorage.setItem("settingsLastUpdated", Date.now().toString());
    },
    
    notifySettingsChanged() {
      // Method 1: Use a custom event that components can listen for
      const event = new CustomEvent('settings-updated', { 
        detail: {
          country: this.country,
          currency: this.currency,
          language: this.lang
        }
      });
      document.dispatchEvent(event);
      
      // Method 2: If using Vuex, can dispatch an event through store
      this.$store.dispatch("localisation/settingsUpdated", {
        country: this.country,
        currency: this.currency,
        language: this.lang
      });
      
      // Method 3: Trigger localStorage event for components using storage listener
      // This helps when components are in different browser tabs
      const storageEvent = new StorageEvent('storage', {
        key: 'settings-updated',
        newValue: JSON.stringify({
          timestamp: new Date().getTime()
        }),
        url: window.location.href
      });
      window.dispatchEvent(storageEvent);
      
      console.log('Settings change notification sent');
    }
  }
}
</script>

<style>
.flag {
  width: 28px !important;
  height: 22px !important;
}
</style>