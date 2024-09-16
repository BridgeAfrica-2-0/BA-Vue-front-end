<!-- OrderSummary.vue -->
<template>
  <div class="order-summary">
    <div class="summary-section">
      <h3>Order Summary</h3>
      <div class="summary-item">
        <span>Subtotal</span>
        <span>${{ cartSummary?.sub_total.toFixed(2) ?? "" }}</span>
      </div>
      <div class="summary-item">
        <span>Local Shipping</span>
        <span>{{ cartSummary?.shipping ?? "" }}</span>
      </div>
      <div class="summary-item">
        <span>Estimated Tax</span>
        <span>${{ cartSummary?.tax.toFixed(2) ?? 0.0 }}</span>
      </div>
      <hr />
      <div class="summary-item total">
        <span>Total</span>
        <span>${{ cartSummary?.total_cost.toFixed(2) ?? "" }}</span>
      </div>
      <hr />
      <p class="discount">
        You will save ${{ cartSummary?.discount.toFixed(2) ?? "" }} with this
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
      <small>
        By clicking Submit Your Order, you are agreeing to our Terms of use and
        Privacy Policy
      </small>
    </div>
    <div class="help-section">
      <h4>Need Some Help?</h4>
      <div class="help-item">
        <span>Call us at 0987654321</span>
      </div>
      <hr />
      <div class="help-item">
        <i class="message-icon"></i>
        <span>Leave us a message</span>
      </div>
      <hr />
      <div class="help-item">
        <i class="shipping-icon"></i>
        <span>Shipping and Returns</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
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
        shipping: "FREE",
        tax: 0.0,
        total_cost: 0.0,
        sub_total: 0.0,
        discount: 0.0,
      },
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
          return "Proceed to payment ";
        default:
          return "Submit your order";
      }
    },
  },
  methods: {},
  mounted() {
    if (this.orderSummary) {
      this.cartSummary = { ...this.cartSummary, ...this.orderSummary };
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

.submit-order-btn:disabled {
  cursor: not-allowed; 
}

.order-summary {
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  max-height: 640px;
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
  color: green;
  font-size: 0.9rem;
  margin: 10px 0;
  text-align: center;
  padding: 5px 0 5px 0;
}
.submit-order-btn {
  width: 100%;
  background-color: #ff9900;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 15px 0 15px 0;
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
