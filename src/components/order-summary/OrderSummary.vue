<template>
  <div class="order-summary">
    <div class="summary-section">
      <h3>{{ $t("general.Order_Summary") }}</h3>
      <div class="summary-item">
        <span>{{ $t("network.Sub_Total") }}</span>
        <span> {{ cartSummary?.sub_total?.toFixed(2) ?? "" | locationPrice(rate) }}</span>
      </div>
      <div class="summary-item">
      <b-tooltip target="tooltip-target-1" triggers="hover">
        {{ $t("general.this_is_the_shipping_method") }}
      </b-tooltip>
      <b-tooltip target="tooltip-target-2" triggers="hover">
        {{ $t("general.This_is_the_Estimated") }}
      </b-tooltip>
        <span v-if="isCameroon">Shipping Fee <img src="@/assets/filled.png" id="tooltip-target-1" alt="Info Icon" class="ml-1 info-image"></span>
        <span v-if="!isCameroon">DHL <img src="@/assets/filled.png" id="tooltip-target-1" alt="Info Icon" class="ml-1 info-image"></span>
        <span v-if="isCameroon && cartSummary?.shipping_info[0]?.shipping_cost !== 0">  {{ cartSummary?.shipping_info[0]?.shipping_cost  | locationPrice(rate)}} </span>
        <span v-if="!isCameroon">  {{ shippingFee | locationPrice(rate)}} </span>
      </div>
      <div v-if="estimatedDeliveryDays" class="summary-item">
        <span>{{ $t("network.estimated_delivery_days") }}</span>
        <span v-if="!isCameroon">  {{ estimatedDeliveryDays.min }} - {{
                    estimatedDeliveryDays.max }} {{ $t("general.days") }} </span>
      </div>
      <div class="summary-item">
        <span>{{ $t("general.Estimated_Tax") }} <img src="@/assets/filled.png" id="tooltip-target-2" alt="Info Icon" class="ml-1 info-image"> </span>
        <span> {{ cartSummary?.tax.toFixed(2) ?? "" | locationPrice(rate) }}</span>
      </div>
      <div v-if="!isCameroon && cartSummary?.shipping_info[0]?.shipping_cost !== 0" class="summary-item">
        <span>{{ $t("general.Packaging_Labeling") }}</span>
        <span>  {{ cartSummary?.shipping_info[0]?.shipping_cost ?? ""  | locationPrice(rate)}} </span>
      </div>
      <hr class="dotted-line"/>
      <div class="summary-item total">
        <span>{{ $t("general.Total") }}</span>
        <span v-if="!isCameroon">
          {{ ((cartSummary?.sub_total ?? 0) + (shippingFee ?? 0) + (cartSummary?.shipping_info?.[0]?.shipping_cost ?? 0)).toFixed(2) | locationPrice(rate) }}
        </span>
        <span v-if="isCameroon">
        {{ ((cartSummary?.sub_total + cartSummary?.shipping_info[0]?.shipping_cost )?.toFixed(2) )?? "" | locationPrice(rate) }}
        </span>
      </div>
      <hr class="dotted-line"/>
      <p class="discount">
        {{ $t("general.You_will_save") }} {{ cartSummary?.discount.toFixed(2) ?? "" }} {{ $t("general.with_this_order") }}
      </p>
    </div>
    <div>
      <button
        :disabled="disable"
        @click="handleSubmit"
        class="submit-order-btn"
        :class="{ 'disabled-btn': disable }"
      >
        {{ getButtonText }}
      </button>
      <small class="txt-color">
        {{ $t('general.BY_CLICKING_SUBMIT_YOUR_ORDER_YOU_ARE_AGREEING_TO_OUR') }} <span class="span-txt pr-1"> {{ $t('general.TERMS_OF_USE') }} </span> {{ $t('general.AND') }}
        <span class="span-txt pl-1"> {{ $t('general.PRIVACY_POLICY') }} </span>
      </small>
    </div>
    <div class="help-section">
      <h4>{{ $t('general.Need_Some_Help') }}?</h4>
      <div class="help-item">
        <span> <img src="@/assets/phone.png" alt="Info Icon" class="mr-4 info-image">{{ $t('general.Call_us_at') }} 0987654321</span>
      </div>
      <hr class="straight-line"/>
      <div class="help-item">
        <i class="message-icon"></i>
        <span><img src="@/assets/email2.svg" alt="Info Icon" class="mr-4 info-image">{{ $t('general.Leave_us_a_message') }}</span>
        <i class="fas fa-chevron-right ml-auto mr-3"></i>
      </div>
      <hr class="straight-line"/>
      <div class="help-item">
        <i class="shipping-icon"></i>
        <span><img src="@/assets/shipping.svg" alt="Info Icon" class="mr-4 info-image1">{{ $t('general.Shipping_and_Returns') }}</span>
        <i class="fas fa-chevron-right ml-auto mr-3"></i>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { checkCountry,convertToCurrency } from "@/helpers";
export default {
  props: {
    handleSubmit: {
      type: Function,
      required: true,
    },
    step: {
      type: Number,
      required: true,
      default: 0,
    },
    disable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      cartSummary: {
        total_items: 0,
        shipping_info: [],
        tax: 0.0,
        total_cost: 0.0,
        sub_total: 0.0,
        discount: 0.0,
      },
      isCameroon : false,
      rate: null,
      userLocation: {},
      currentLang: "",
      storageListener: null,
    };
  },
  created() {
    this.currentLang = this.$i18n.locale;
    this.storageListener = this.handleStorageChange.bind(this);
    window.addEventListener('storage', this.storageListener);
    document.addEventListener('settings-updated', this.refreshCurrencyAndRates.bind(this));
  },
  beforeDestroy() {
    // Remove event listeners when component is destroyed
    if (this.storageListener) {
      window.removeEventListener('storage', this.storageListener);
    }
    document.removeEventListener('settings-updated', this.refreshCurrencyAndRates);
  },
  computed: {
    ...mapGetters({
      orderSummary: "checkout/getCartSummary",
    }),
    getButtonText() {
      switch (this.step) {
        case 0:
          return this.currentLang === 'en' ? "Submit your order" : "Soumettre votre commande";
        case 1:
          return this.currentLang === 'en' ? "Continue" : "Continuer";
        case 2:
          return this.currentLang === 'en' ? "Proceed to payment" : "Procéder au paiement";
        default:
          return this.currentLang === 'en' ? "Proceed to payment" : "Procéder au paiement";
      }
    },
    shippingFee() {
      return this.$store.state.checkout.shippingFee;
    },
    estimatedDeliveryDays() {
      return this.$store.state.checkout.estimatedDeliveryDays;
    },
    shippingMethod() {
      return this.$store.state.checkout.shippingMethod;
    },
  },
  methods: {
   async getCurrencyConvert()
    {
      let isLocal = localStorage.getItem("isLocal") ?? null;
      let country = localStorage.getItem("country") ?? null;
      if(isLocal && isLocal === 'true') {
        this.userLocation.country = 'CM';
      }else if(country)this.userLocation.country = country;
       else {
        this.userLocation = await checkCountry();
        if(this.userLocation?.country === 'CM') localStorage.setItem("isLocal", true);
        else localStorage.setItem("isLocal", false);
      }
      this.rate = await convertToCurrency();
      console.log("======rate======",this.rate )
    },
     locationPrice(ev, rate) {
      let priceFormatted=0.0;
      if(rate)
     {
       if (rate?.currency === 'XAF') {
         priceFormatted = `${(ev / rate.rate).toFixed(2).replace('.', ',')} ${rate.currency}`;
       } else {
         priceFormatted = ` ${(ev / rate?.rate).toFixed(2)} ${rate?.currency}`;
       }      
     }
     else{
      priceFormatted = `0.0`
     }
      return priceFormatted;
    },
    async handleStorageChange(event) {
      // Check if relevant localStorage keys were changed
      if (
        event.key === 'country' ||
        event.key === 'currencyRate' ||
        event.key === 'userSelectedCurrency' ||
        event.key === 'isLocal'
      ) {
        console.log('Detected settings change, refreshing currency data');
        await this.refreshCurrencyAndRates();
      }
    },
    async refreshCurrencyAndRates() {
      console.log('Refreshing currency and rates');
      try {
        // Re-fetch currency rate
        this.rate = await convertToCurrency();
        
        // Update locale and currency from new settings
        let countryData = localStorage.getItem("country");
        if (countryData) {
          try {
            const parsedCountry = JSON.parse(countryData);
            this.locale = parsedCountry.country || 'CM';
            this.isCameroon = this.locale === 'CM';
          } catch (e) {
            console.error('Error parsing country data:', e);
          }
        }
        
        this.currency = this.rate.currency;
        
        // Force component re-render
        this.$forceUpdate();
        
        console.log('Updated currency settings:', {
          locale: this.locale,
          currency: this.currency,
          rate: this.rate,
          isCameroon: this.isCameroon
        });
      } catch (err) {
        console.error('Error refreshing currency settings:', err);
      }
    },
  },
  async mounted() {
    this.getCurrencyConvert();
    this.isCameroon = this.userLocation?.country === 'CM';
    if (this.orderSummary) {
      this.cartSummary = { ...this.cartSummary, ...this.orderSummary };
    }
  },
  filters: {
  // locationPrice(ev, rate) {
  //   if (!ev || isNaN(ev)) return '0.00';
  //   if (!rate || !rate.currency) return `${parseFloat(ev).toFixed(2)} USD`;
    
  //   try {
  //     // Convert the value according to the rate
  //     const convertedValue = parseFloat(ev) / (rate.rate || 1);
      
  //     // Format according to currency
  //     switch (rate.currency) {
  //       case 'XAF':
  //         // Use comma as decimal separator for XAF
  //         return `${convertedValue.toFixed(2).replace('.', ',')} ${rate.currency}`;
  //       case 'EUR':
  //         return `${convertedValue.toFixed(2)} €`;
  //       case 'GBP':
  //         return `£${convertedValue.toFixed(2)}`;
  //       case 'JPY':
  //         // No decimal places for JPY
  //         return `¥${Math.round(convertedValue)}`;
  //       case 'PKR':
  //         return `Rs ${convertedValue.toFixed(2)}`;
  //       default:
  //         // Default format with currency code
  //         return `${convertedValue.toFixed(2)} ${rate.currency}`;
  //     }
  //   } catch (error) {
  //     console.error('Error in locationPrice filter:', error);
  //     return `${parseFloat(ev).toFixed(2)} ${rate?.currency || 'USD'}`;
  //   }
  // }
  locationPrice(value, rate) {
  if (!value || isNaN(value)) return '0.00';
  if (!rate || !rate.currency) return `${parseFloat(value).toFixed(2)} USD`;
  
  try {
    // Convert the value according to the rate
    const convertedValue = parseFloat(value) / (rate.rate || 1);
    
    // Get symbol from currency data if available
    const cachedCurrencyData = localStorage.getItem("currencyRate");
    let symbol = "";
    
    if (cachedCurrencyData) {
      try {
        const parsed = JSON.parse(cachedCurrencyData);
        symbol = parsed.symbol || "";
      } catch (e) {
        console.error("Error parsing cached currency for symbol:", e);
      }
    }
    
    // Format according to currency code
    switch (rate.currency) {
      case 'XAF':
        // Use comma as decimal separator for XAF
        return `${convertedValue.toFixed(2).replace('.', ',')} ${symbol || rate.currency}`;
      case 'EUR':
        return `${convertedValue.toFixed(2)} ${symbol || '€'}`;
      case 'GBP':
        return `${symbol || '£'}${convertedValue.toFixed(2)}`;
      case 'JPY':
        // No decimal places for JPY
        return `${symbol || '¥'}${Math.round(convertedValue)}`;
      case 'PKR':
        return `${symbol || 'Rs'} ${convertedValue.toFixed(2)}`;
      case 'USD':
        return `${symbol || '$'}${convertedValue.toFixed(2)}`;
      default:
        // Try to get a formatter based on locale if available
        try {
          const locale = localStorage.getItem("lang") || 'en';
          const formatter = new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: rate.currency,
            minimumFractionDigits: 2
          });
          return formatter.format(convertedValue);
        } catch (e) {
          // Default format with currency code if formatter fails
          return `${convertedValue.toFixed(2)} ${symbol || rate.currency}`;
        }
    }
  } catch (error) {
    console.error('Error formatting price:', error);
    return `${parseFloat(value).toFixed(2)} ${rate?.currency || 'USD'}`;
  }
}
},
  watch: {
    orderSummary(newVal) {
      if (newVal) {
        this.cartSummary = { ...this.cartSummary, ...newVal };
      }
    },
  },
};
</script>
<style scoped>

.span-txt{
text-decoration: underline;
cursor: pointer;
}

.icon-color{
  color: #929292;
  margin-left: 10px;
}

.txt-color{
  color: #575757;
}

.info-image {
  width: 20px; 
  height: 20px;
}

.info-image1 {
  height: 20px;
}

.dotted-line{
  border: none; border-top: 2px dotted #929292;
}

.straight-line{
  border: none; border-top: 1.5px solid #D8D8D8;
}

.submit-order-btn:disabled {
  cursor: not-allowed; 
}

.order-summary {
  width: 100%;
  margin: 0 auto;
  color: black;
}
.summary-section {
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.summary-section h3 {
  font-size: 1.2rem;
  font-weight: bolder;
  padding: 10px 0 10px 0;
}
.summary-item {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  padding: 5px 0 5px 0;
}
.summary-item.total {
  font-weight: bold;
}
.discount {
  color: black;
  font-size: 0.9rem;
  margin: 10px 0;
  text-align: center;
  padding: 5px 0 5px 0;
}
.submit-order-btn {
  width: 100%;
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  color: white;
  padding: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin: 15px 0 15px 0;
  font-weight: 600;
}
.help-section {
  margin-top: 20px;
  background-color: white;
  border-radius: 5px;
  text-align: left;
}
.help-section h4 {
  font-weight: bolder;
  margin-bottom: 20px;
}
.help-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
}
.help-item span {
  margin-left: 10px;
}
hr {
  border-top: 1px dotted rgba(0, 0, 0, 0.1);
}
</style>
