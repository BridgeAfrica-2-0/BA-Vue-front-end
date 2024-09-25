<!-- OrderSummary.vue -->
<template>
  <div class="order-summary">
    <div class="summary-section">
      <h3>Order Summary</h3>
      <div class="summary-item">
        <span>Subtotal</span>
        <span v-if="isCameroon"> {{ cartSummary?.sub_total.toFixed(2) ?? "" }}</span>
        <span v-else>{{ cartSummary?.sub_total.toFixed(2) ?? "" | locationPrice(rate) }}</span>
      </div>
      <div class="summary-item">
      <b-tooltip target="tooltip-target-1" triggers="hover">
        This is the shipping method that is being applied to your order according to your location
      </b-tooltip>
      <b-tooltip target="tooltip-target-2" triggers="hover">
        This is the Estimated tax that is applied to your order according to your location
      </b-tooltip>
        <span>{{ cartSummary?.shipping_info[0]?.shipping_method }} <img src="@/assets/filled.png" id="tooltip-target-1" alt="Info Icon" class="ml-1 info-image"></span>
        <span v-if="isCameroon && !cartSummary?.shipping_info[0]?.shipping_cost == 0">  {{cartSummary?.shipping_info[0]?.shipping_cost  | locationPrice(rate)}} </span>
        <span v-else-if="isCameroon && cartSummary?.shipping_info[0]?.shipping_cost == 0"> Free </span>
        <span v-else-if="!isCameroon && !cartSummary?.shipping_info[0]?.shipping_cost == 0">  {{cartSummary?.shipping_info[0]?.shipping_cost  | locationPrice(rate)}} </span>
        <span v-else-if="!isCameroon && cartSummary?.shipping_info[0]?.shipping_cost == 0"> Free </span>
        <!-- <span v-else-if="!isCameroon">{{ cartSummary?.shipping_info[0]?.shipping_cost == 0 ? "Free" : cartSummary?.shipping_info[0]?.shipping_cost }}</span> -->
      </div>
      <div class="summary-item">
        <span>Estimated Tax <img src="@/assets/filled.png" id="tooltip-target-2" alt="Info Icon" class="ml-1 info-image"> </span>
        <span v-if="isCameroon"> {{ cartSummary?.tax.toFixed(2) ?? 0.0 }}</span>
        <span v-if="!isCameroon"> {{ cartSummary?.tax.toFixed(2) ?? 0.0 }}</span>
      </div>
      <hr class="dotted-line"/>
      <div class="summary-item total">
        <span>Total</span>
        <span v-if="isCameroon"> {{ cartSummary?.total_cost.toFixed(2) ?? "" }}</span>
        <span v-else>  {{ cartSummary?.total_cost.toFixed(2) ?? "" | locationPrice(rate) }}</span>
      </div>
      <hr class="dotted-line"/>
      <p class="discount">
        You will save {{ cartSummary?.discount.toFixed(2) ?? "" }} with this
        order
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
        BY CLICKING SUBMIT YOUR ORDER, YOU ARE AGREEING TO OUR <span class="span-txt pr-1"> TERMS OF USE </span> AND
        <span class="span-txt pl-1"> PRIVACY POLICY </span>
      </small>
    </div>
    <div class="help-section">
      <h4>Need Some Help?</h4>
      <div class="help-item">
        <span> <img src="@/assets/phone.png" alt="Info Icon" class="mr-4 info-image">Call us at 0987654321</span>
      </div>
      <hr class="straight-line"/>
      <div class="help-item">
        <i class="message-icon"></i>
        <span><img src="@/assets/email2.svg" alt="Info Icon" class="mr-4 info-image">Leave us a message</span>
        <i class="fas fa-chevron-right ml-auto mr-3"></i>
      </div>
      <hr class="straight-line"/>
      <div class="help-item">
        <i class="shipping-icon"></i>
        <span><img src="@/assets/shipping.svg" alt="Info Icon" class="mr-4 info-image1">Shipping and Returns</span>
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
    };
  },
  computed: {
    ...mapGetters({
      orderSummary: "checkout/getCartSummary",
    }),
    getButtonText() {
      switch (this.step) {
        case 0:
          return "Submit your order";
        case 1:
          return "Continue";
        case 2:
          return "Proceed to payment";
        default:
          return "Proceed to payment";
      }
    },
  },
  methods: {
   async getCurrencyConvert()
    {
      this.userLocation = await checkCountry();
      this.rate = await convertToCurrency();
      console.log("======rate======",this.rate )
    }
  },
  async mounted() {
    if (this.orderSummary) {
      this.cartSummary = { ...this.cartSummary, ...this.orderSummary };
      console.log(this.cartSummary);
      
    }
    // this.userLocation = await checkCountry();
    // this.rate = await convertToCurrency();
    this.getCurrencyConvert();
    this.isCameroon = this.userLocation?.country === 'CM';
  },
  filters: {
    locationPrice: function (ev, rate) {
      return rate ? ` ${(ev / rate.rate).toFixed(2)} ${rate.currency}` : `${ev} XAF`
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
  max-width: 350px;
  margin: 0 auto;
  max-height: 640px;
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
