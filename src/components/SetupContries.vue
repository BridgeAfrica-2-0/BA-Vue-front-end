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
            <strong for="">Country {{ country }}</strong>
            <v-select v-model="country" :options="countries" label="name" :reduce="country => country.sigle">
              <template #option="option">
                <span>
                  {{ option.flag }}
                  {{ option.name }}
                </span>
              </template>
              <template #selected-option="option">
                <span>
                  {{ option.flag }}
                  {{ option.name }}
                </span>
              </template>
              
            </v-select>
          </div>


          <div class="countries my-2">
            <strong for="">Currency</strong>
            <v-select v-model="currency" :options="currencies" label="name" :reduce="currency => currency.name">
              <!-- <option :value="ev.name" v-for="(ev, index) in currencies" :key="index">{{ ev.name }} ({{ ev.value.symbol
                }})
              </option> -->
              <template #option="option">
                <span>
                  ({{ option.value.symbol }})
                  {{ option.name }}
                </span>
              </template>
              <template #selected-option="option">
                <span>
                  ({{ option.value.symbol }})
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
    currencies: []
  }),

  watch: {
    countries(newValue) {

      if (!newValue.length)
        return false


      if (!this.currency && !this.country) {
        this.country = this.countrySelected.sigle
        this.currency = this.currencySelected.name
      }

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
        return { name: key, value };
      }).sort((a, b) => a.name.localeCompare(b.name));
    }
  },

  props: {
    open: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    change(lang) {
      this.$i18n.locale = lang;

      if (lang == 'en') {
        this.img = require("@/assets/img/about/en.png");
      } else {
        this.img = require("@/assets/img/la-france.png");
      }
    },

    onChange() {
      const findCountryInfo = this.countries.find(c => c.sigle == this.country)

      this.$store.dispatch("localisation/updateCountry", this.country)
      this.$store.dispatch("localisation/updateCurrency", this.currency)
      this.$store.dispatch("localisation/updateRate", this.currency)

      this.change(this.lang)
      this.$refs.close.click();
    },
  }
}
</script>