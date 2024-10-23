<template>
  <div class="modal fade" id="settings" tabindex="-1" role="dialog" aria-labelledby="model-settings" aria-hidden="true">
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
              <option :value="ev.value" v-for="(ev, index) in countries" :key="index">{{ ev.name }}</option>
            </select>
          </div>


          <div class="countries my-2">
            <strong for="">Currency</strong>
            <select class="custom-select" v-model="currency">
              <option :value="ev.value" v-for="(ev, index) in currencies" :key="index">{{ ev.value }}</option>
            </select>
          </div>

          <div class="language my-2">
            <strong for="">Language</strong>
            <select class="custom-select" v-model="lang">
              <option disabled value="">Select currency</option>
              <option :value="ev.value" v-for="(ev, index) in langs" :key="index">{{ ev.name }}</option>
            </select>
          </div>


          <button class="btn btn-primary w-100" @click="onChange">Save</button>

        </div>



      </div>
    </div>
  </div>

</template>


<script>

export default {
  data: () => ({
    countrySelected: "CM",
    currencySelected: "XAF",
    countries: [
      { name: 'Cameroun', value: 'CM' },
      { name: 'USA', value: 'US' },
      { name: 'Canada', value: 'CA' },
    ],
    langs: [
      { name: 'Français', value: 'Français' },
      { name: 'English', value: 'English' },
    ],
  }),

  created() {

    const seenCurrencies = new Set();
    const uniqueCurrencyMap = {};

    for (const [country, currency] of Object.entries(currencyMap)) {
      if (!seenCurrencies.has(currency)) {
        seenCurrencies.add(currency);
        uniqueCurrencyMap[country] = currency;
      }
    }
    this.currencies = Object.entries(uniqueCurrencyMap).map(([name, value]) => {
      return { name, value };
    });

  },

  methods: {
    onChange() {

      this.countrySelected = this.country
      this.currencySelected = this.currency

      this.$emit('change:currency', {
        country: this.country,
        currency: this.currency
      })

      this.$refs.close.click();
    },
  }
}
</script>