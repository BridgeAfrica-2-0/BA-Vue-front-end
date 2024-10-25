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
            <select class="custom-select" v-model="country">
              <option :value="ev.sigle" v-for="(ev, index) in countries" :key="index"> {{ ev.flag }} {{ ev.name }}
              </option>
            </select>
          </div>


          <div class="countries my-2">
            <strong for="">Currency</strong>
            <select class="custom-select" v-model="currency">
              <option :value="ev" v-for="(ev, index) in currencies" :key="index">{{ ev.name }} ({{ ev.value.symbol }})
              </option>
            </select>
          </div>

          <div class="language my-2">
            <strong for="">Language</strong>
            <select class="custom-select" v-model="lang">
              <option :value="ev.value" v-for="(ev, index) in langs" :key="index">{{ ev.name }} {{ ev.value.symbol }}
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
import { LocalisationMixins } from "@/mixins"

export default {
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
  created() {

    this.country = this.countrySelected
    this.currency = this.currencySelected
  },
  watch: {
    countries(newValue) {
      this.country = this.countrySelected
      this.currency = this.currencySelected

      if (!newValue.length)
        return false

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
      });
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
        this.lang = 'English'
      } else {
        this.img = require("@/assets/img/la-france.png");
        this.lang = 'Français'
      }
    },

    onChange() {
      const findCountryInfo = this.countries.find(c => c.sigle == this.country)

      console.log(findCountryInfo)
      console.log(this.currency.value)
      this.$store.commit("localisation/setSelectedCurrency", this.currency.value)
      this.$store.commit("localisation/setSelectedCountry", findCountryInfo)
      this.$store.dispatch("localisation/updateRate", this.currency.value)

      this.change(this.lang)
      this.$refs.close.click();
    },
  }
}
</script>