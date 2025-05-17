<template>
  <base-layout top="25">
    <template v-slot:main>
      <div>
        <div class="container-fluid">

          <div class="mt-4">
            <div class="product-page row">
              <!-- Galerie d'images -->
              <div class="col-md-5">
                <ProductImages :images="[
                  {
                    src: marketDetails.picture,
                    alt: marketDetails.name,
                  },
                ]" />
              </div>

              <!-- Informations produit -->
              <div class="col-md-7">
                <h3 class="text-black p-name">{{ marketDetails.name }}</h3>
                <div>
                  <label>{{ $t("general.visit_shop") }}</label>
                  <span class="ml-1 text-primary font-weight-medium cursor-pointer"
                    @click="handleBusinessClick(marketDetails.business_slug)">
                    {{ marketDetails.business_name }}
                  </span>
                </div>
                <div class="stock-status">
                  <span class="text-success font-weight-bold" v-if="marketDetails.in_stock">{{ $t("general.in_stock")
                    }}</span>
                  <span class="text-danger" v-else>{{
                    $t("general.out_of_stock")
                    }}</span>
                </div>
                <div>
                  <label for="" class="text-black">{{ $t("general.availability") }}:</label>
                  <span class="ml-2">{{ $t("general.only") }} {{ marketDetails.quantity }}
                    <span class="" v-if="marketDetails.in_stock">{{
                      $t("general.in_stock")
                      }}</span>
                    <span class="text-danger" v-else>{{
                      $t("general.out_of_stock")
                      }}</span></span>
                </div>

                <div class="">
                  {{
                    marketDetails.description.length > 400
                      ? marketDetails.description.slice(0, 400) + "..."
                      : marketDetails.description
                  }}
                </div>

                <hr class="my-3" />

                <!-- Currency Selection -->
                <div v-if="countries.length" class="mb-3 cursor-pointer" data-toggle="modal" data-target="#settings">
                  <span class="font-weight-bold">Get in {{ shippingEstimate.deliveryDays.min }} - {{
                    shippingEstimate.deliveryDays.max }} {{ $t("general.days") }}: </span>
                  <span style="font-size: 14px; color: #000; padding: 0 15px;">
                    <img :src="countrySelected?.flag" style="padding-right: 2px; width: 28px !important;" />
                    {{ countrySelected?.name }}
                    <i class="fa fa-caret-down"></i>
                  </span>
                </div>
                <span v-else class="start-loader"></span>

                <!-- Prix -->
                <div class="pricing">
                  <div>
                    <span class="price">{{
                      marketDetails.price | locationPrice(rate, currencySelected)
                      }}</span>
                  </div>
                </div>
                <div class="d-flex align-items-center mt-4">
                  <!-- Sélection de la quantité -->
                  <div class="quantity-selector">
                    <!-- <div>
              <QuantitySelector v-model="quantity" :min="1" :max="10" />
            </div> -->
                  </div>
                  <button class="btn btn-primary" @click="navigateToCart">
                    {{ $t("general.buy_now") }}
                  </button>
                  <button class="btn btn-outline-primary font-weight-bold ml-3" @click="handleAddToCard()">
                    {{ $t("general.Add_to_Cart") }}
                  </button>
                </div>
              </div>
            </div>
            <div class="container" style="margin-top: 4em;">
              <!-- Description Tab -->
              <div class="accordion-item">
                <div class="accordion-header d-flex justify-content-between align-items-center border-bottom py-3 px-3"
                  @click="toggleTab('description')">
                  <div class="tab-title">Description</div>
                  <button class="btn accordion-toggle p-0">
                    <i class="fa" :class="isTabActive('description') ? 'fa-minus' : 'fa-plus'"></i>
                  </button>
                </div>
                <div class="accordion-content py-3 px-3"
                  :style="{ display: isTabActive('description') ? 'block' : 'none' }">
                  <p>{{ marketDetails.description }}</p>
                  <hr>
                  <!-- Shipping Delivery Info -->
                  <div class="delivery-delays mt-3">
                    <h5 class="mb-3">Delivery Times by Region</h5>
                    <ul>
                      <li>France (DOM) from 15 to 21 days.</li>
                      <li>France from 15 to 21 days.</li>
                      <li>United States from 15 to 21 days.</li>
                      <li>Africa from 20 to 26 days.</li>
                      <li>Europe from 15 to 21 days.</li>
                      <li>Australia (Oceania) from 15 to 21 days.</li>
                      <li>International from 15 to 21 days.</li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Reviews Tab -->
              <div class="accordion-item mt-2">
                <div class="accordion-header d-flex justify-content-between align-items-center border-bottom py-3 px-3"
                  @click="toggleTab('reviews')">
                  <div class="tab-title">
                    Reviews
                    <span class="ml-2">
                      <i class="fa fa-star checked"></i>
                      <i class="fa fa-star checked"></i>
                      <i class="fa fa-star checked"></i>
                      <i class="fa fa-star checked"></i>
                      <i class="fa fa-star checked"></i>
                      (588)
                    </span>
                  </div>
                  <button class="btn accordion-toggle p-0">
                    <i class="fa" :class="isTabActive('reviews') ? 'fa-minus' : 'fa-plus'"></i>
                  </button>
                </div>
                <div class="accordion-content py-3 px-3" :style="{ display: isTabActive('reviews') ? 'block' : 'none' }">
                  <!-- Review content here -->
                  <p>Product reviews will appear here.</p>
                </div>
              </div>

              <!-- Shipping Tab with Automatic Fee Display -->
              <div class="accordion-item mt-2">
                <div class="accordion-header d-flex justify-content-between align-items-center border-bottom py-3 px-3"
                  @click="toggleTabAndCalculateShipping('shipping')">
                  <div class="tab-title">Shipping</div>
                  <button class="btn accordion-toggle p-0">
                    <i class="fa" :class="isTabActive('shipping') ? 'fa-minus' : 'fa-plus'"></i>
                  </button>
                </div>
                <div class="accordion-content py-3 px-3" :style="{ display: isTabActive('shipping') ? 'block' : 'none' }">
                  <!-- Shipping Estimate Information -->
                  <div class="shipping-info mb-4">
                    <div class="shipping-fee-box border p-3 mb-3" style="max-width: 300px; border-radius: 4px;">
                      <div class="text-muted">Estimated shipping fee</div>
                    </div>
                    <div class="mt-2">
                      <div class="font-weight-bold mb-1">
                        Estimated shipping fee: <span class="text-primary">{{ shippingEstimate.fee | locationPrice(rate,
                          currencySelected) }}</span>
                      </div>
                      <div class="text-muted">
                        Estimated delivery time: {{ shippingEstimate.deliveryDays.min }} - {{
                          shippingEstimate.deliveryDays.max }} days
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Currency Settings Modal -->
        <settings-contries :open="true"></settings-contries>
      </div>
    </template>
  </base-layout>
</template>
<script>
// Add this to your mounted hook or as a separate script
document.addEventListener('DOMContentLoaded', function () {
  const accordionToggles = document.querySelectorAll('.accordion-toggle');

  accordionToggles.forEach(toggle => {
    toggle.addEventListener('click', function () {
      const accordionItem = this.closest('.accordion-item');
      const content = accordionItem.querySelector('.accordion-content');
      const icon = this.querySelector('i');

      // Toggle visibility
      if (content.style.display === 'none') {
        content.style.display = 'block';
        icon.classList.remove('fa-plus');
        icon.classList.add('fa-minus');
      } else {
        content.style.display = 'none';
        icon.classList.remove('fa-minus');
        icon.classList.add('fa-plus');
      }
    });
  });
});
</script>
<script>
import ProductImages from "./productImages.vue";
import { LocalisationMixins } from "@/mixins";
// import QuantitySelector from "./QuantitySelector.vue";
import { mapActions } from "vuex";
import SettingsContries from "@/components/SetupContries";
import BaseLayout from "@/layouts/Layout";
import { onInitializer2 } from "@/helpers/index";

export default {
mixins: [LocalisationMixins],
components: {
BaseLayout,
ProductImages,
SettingsContries,
// QuantitySelector,
},
data() {
return {
  marketDetails: null,
  countries: [],
  showShippingEstimate: false,
    isCalculatingShipping: false,
    shippingEstimate: {
      fee: null,
      method: null,
      deliveryDays: { min: 0, max: 0 }
    },
    activeTab: null 
};
},

filters: {
locationPrice: function (ev, rate, currency) {
  const symbol = currency?.name ? currency?.name : "XAF";
  return rate ? `${(ev / rate).toFixed(2)} ${symbol}` : `${ev} ${symbol}`;
},
},

computed: {
islogin() {
  return this.$store.getters["auth/isLogged"];
},
getStatus() {
  return this.$store.state.cart.status;
},
selectedCountryCapital() {
    return this.$store.getters["localisation/getSelectedCountryCapital"];
  }
},
methods: {
...mapActions("marketDetails", ["getdetails"]),

async fetchMarketDetails() {
  const marketId = this.$route.params.id;
  try {
    const details = await this.getdetails(marketId);
    this.marketDetails = details.data;
  } catch (error) {
    console.error("Error fetching market details:", error.message);
  }
},
toggleTab(tabName) {
    this.activeTab = this.activeTab === tabName ? null : tabName;
  },
  isTabActive(tabName) {
    return this.activeTab === tabName;
  },
  toggleTabAndCalculateShipping(tabName) {
  const wasActive = this.activeTab === tabName;
  this.activeTab = wasActive ? null : tabName;
  
  // If opening the shipping tab, calculate shipping automatically
  if (tabName === 'shipping' && !wasActive) {
    // Set default values if shipping hasn't been calculated yet
    if (!this.shippingEstimate.fee) {
      // Set initial values while loading
      this.shippingEstimate = {
        fee: 0,
        method: null,
        deliveryDays: { min: 12, max: 14 } // Default values
      };
      this.isCalculatingShipping = true;
      
      // Calculate the actual shipping
      this.calculateShippingEstimateInBackground();
    }
  }
},
handleAddToCard() {
  this.$store
    .dispatch("cart/addToCart", {
      product: this.marketDetails,
      islogin: this.islogin,
    })
    .then(() => {
      this.flashMessage.show({
        status: "success",
        message: this.getStatus,
      });
    })
    .catch((err) => {
      console.log({ err: err });
      this.flashMessage.show({
        status: "error",
        message: "error occur",
      });
    });
},
handleBusinessClick(slug) {
      if (this.islogin) {
        this.$router.push({
          name: "BusinessFollower",
          params: { id: slug }
        });
      }
    },
navigateToCart() {
  this.handleAddToCard()
    .then(() => {
      this.$router.push("/cart");
    })
    .catch((error) => {
      console.log("Error", error);
    });
},
async loadCountries() {
  try {
    const countriesData = await onInitializer2();
    if (countriesData.length > 0) {
      this.countries = countriesData;
    } else {
      console.error("No countries data available.");
    }
  } catch (error) {
    console.error("Error loading countries:", error);
  }
},
toggleCurrencySelector() {
  this.showCurrencySelector = true;
  // We're setting the open prop to true which should handle the modal visibility in the component
},

calculateShippingEstimate() {
  if (!this.marketDetails || !this.countrySelected) {
    this.flashMessage.show({
      status: "error",
      message: "Product or country information missing",
    });
    return;
  }

  // Default weight if not available
  const weight = this.marketDetails.kg || 1;
  
  // Get the capital from store or localStorage
  let capital = '';
  if (this.selectedCountryCapital) {
    capital = this.selectedCountryCapital;
  } else {
    try {
      const savedCapital = localStorage.getItem('selectedCountryCapital');
      if (savedCapital) {
        capital = JSON.parse(savedCapital);
      }
    } catch (e) {
      console.error('Error parsing capital from localStorage:', e);
    }
  }
  
  this.isCalculatingShipping = true;
  
  // Prepare the data for the shipping API
  const shippingData = {
    totalWeight: weight,
    name: this.countrySelected.name,
    code: '00000', // Use default if no shipping address available
    capital:  this.countrySelected.capital || '',
    countryCode: this.countrySelected.code,
  };
  
  // Call the DHL shipping API to get a fee estimate
  // this.$axios.post('/dhl/shippingFeeRoughCalculation', shippingData)
  //   .then(response => {
  //     // Rest of your code...
  //   });
  this.$axios.post('/dhl/shippingFeeRoughCalculation', shippingData)
    .then(response => {
      if (response.data.data.products) {
        console.log("**********product**************",response);
        // Find the product with code "P" (same as in shippingFee action)
        const product = response.data.data.products.find(p => p.productCode === "P");
        
        if (product) {
          // Extract fee and delivery information
          this.shippingEstimate.fee = product.totalPrice[0].price;
          this.shippingEstimate.method = product.productName;
          
          // Set delivery days based on product info or fallback to region estimates
          if (product.deliveryCapabilities && product.deliveryCapabilities.estimatedDeliveryDateAndTime) {
            // If DHL provides specific delivery date, calculate days difference
            const deliveryDate = new Date(product.deliveryCapabilities.estimatedDeliveryDateAndTime);
            const today = new Date();
            const daysDiff = Math.ceil((deliveryDate - today) / (1000 * 60 * 60 * 24));
            
            this.shippingEstimate.deliveryDays = {
              min: daysDiff,
              max: daysDiff + 2 // Add buffer of 2 days
            };
          } else {
            // Fallback to region-based estimates
            this.shippingEstimate.deliveryDays = this.estimateDeliveryDays(this.countrySelected.code);
          }
          
          this.showShippingEstimate = true;
        } else {
          throw new Error('No suitable shipping product found');
        }
      } else {
        throw new Error(response.data.error || 'Unable to calculate shipping');
      }
    })
    .catch(error => {
      console.error('Error calculating shipping estimate:', error);
      this.flashMessage.show({
        status: "error",
        message: error.message || "Unable to calculate shipping at this time",
      });
    })
    .finally(() => {
      this.isCalculatingShipping = false;
    });
},
calculateShippingEstimateInBackground() {
  if (!this.marketDetails || !this.countrySelected) {
    this.isCalculatingShipping = false;
    return;
  }

  // Default weight if not available
  const weight = this.marketDetails.kg || 1;
  
  // Prepare the data for the shipping API
  const shippingData = {
    totalWeight: weight,
    name: this.countrySelected.name,
    code: '00000', // Use default if no shipping address available
    capital: this.countrySelected.capital || '',
    countryCode: this.countrySelected.code,
  };
  
  // Call the DHL shipping API to get a fee estimate
  this.$axios.post('/dhl/shippingFeeRoughCalculation', shippingData)
    .then(response => {
      if (response.data.data.products) {
        // Find the product with code "P" (same as in shippingFee action)
        const product = response.data.data.products.find(p => p.productCode === "P");
        
        if (product) {
          // Extract fee and delivery information
          this.shippingEstimate.fee = product.totalPrice[0].price;
          this.shippingEstimate.method = product.productName;
          
          // Set delivery days based on product info or fallback to region estimates
          if (product.deliveryCapabilities && product.deliveryCapabilities.estimatedDeliveryDateAndTime) {
            // If DHL provides specific delivery date, calculate days difference
            const deliveryDate = new Date(product.deliveryCapabilities.estimatedDeliveryDateAndTime);
            const today = new Date();
            const daysDiff = Math.ceil((deliveryDate - today) / (1000 * 60 * 60 * 24));
            
            this.shippingEstimate.deliveryDays = {
              min: daysDiff,
              max: daysDiff + 2 // Add buffer of 2 days
            };
          } else {
            // Fallback to region-based estimates
            this.shippingEstimate.deliveryDays = this.estimateDeliveryDays(this.countrySelected.code);
          }
        }
      }
    })
    .catch(error => {
      console.error('Error calculating shipping estimate:', error);
      // Use default shipping estimate values on error
      this.shippingEstimate.deliveryDays = this.estimateDeliveryDays(this.countrySelected?.code || 'INTL');
    })
    .finally(() => {
      this.isCalculatingShipping = false;
    });
},
// Add helper method to estimate delivery days based on region
estimateDeliveryDays(countryCode) {
  // Map regions to delivery times based on your delivery-delays content
  const regionMap = {
    // Europe
    'FR': { min: 15, max: 21 },
    'GB': { min: 15, max: 21 },
    'DE': { min: 15, max: 21 },
    'IT': { min: 15, max: 21 },
    'ES': { min: 15, max: 21 },
    // North America
    'US': { min: 15, max: 21 },
    'CA': { min: 15, max: 21 },
    // Africa
    'NG': { min: 20, max: 26 },
    'ZA': { min: 20, max: 26 },
    'EG': { min: 20, max: 26 },
    'CM': { min: 3, max: 7 }, // Faster domestic shipping
    // Asia
    'CN': { min: 15, max: 21 },
    'JP': { min: 15, max: 21 },
    'IN': { min: 15, max: 21 },
    // Australia/Oceania
    'AU': { min: 15, max: 21 },
    'NZ': { min: 15, max: 21 },
  };
  
  // Get specific country estimate or use continent default
  const estimate = regionMap[countryCode];
  
  if (estimate) {
    return estimate;
  }
  
  // Default international shipping estimate
  return { min: 15, max: 21 };
},
},
created() {
this.loadCountries();
},
mounted() {
this.fetchMarketDetails();
},
};
</script>
<style scoped>
.nav-link {
  font-weight: bold;
  font-size: 1.2em !important;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
  color: #e75c18 !important;
  background-color: transparent !important;
  border-bottom: 2px solid #e75c18 !important;
  border-radius: 0;
}

.gap-25 {
  gap: 25px;
}

.checked {
  color: orange;
}

.price {
  font-size: 1.5em;
  font-weight: bold;
}

.old-price {
  font-size: 1.3em;
  text-decoration: line-through;
  color: silver !important;
}

.quantity-selector input {
  width: 80px;
}

.btn {
  height: 50px;
}

.delivery-delays {
  color: #455a64;
}

.cursor-pointer {
  cursor: pointer;
}

/* Loading spinner */
.start-loader {
  width: 45px;
  border: 0 !important;
  border-radius: 0 !important;
  height: 25px;
  color: #e75c18;
  aspect-ratio: .75;
  --c: no-repeat linear-gradient(#e75c18 0 0);
  background:
    var(--c) 0% 100%,
    var(--c) 50% 100%,
    var(--c) 100% 100%;
  background-size: 20% 43%;
  animation: l5 1s infinite linear;
}

@keyframes l5 {
  20% {
    background-position: 0% 50%, 50% 100%, 100% 100%
  }

  40% {
    background-position: 0% 0%, 50% 50%, 100% 100%
  }

  60% {
    background-position: 0% 100%, 50% 0%, 100% 50%
  }

  80% {
    background-position: 0% 100%, 50% 100%, 100% 0%
  }
}

@media (max-width: 575.98px) {
  .nav-pills .nav-link {
    font-size: 13px;
    white-space: nowrap;
  }

  .nav-pills {
    padding-bottom: 5px;
  }

  /* Add smooth scrolling for horizontal nav */
  .overflow-auto {
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    /* Firefox */
  }

  .overflow-auto::-webkit-scrollbar {
    display: none;
    /* Chrome, Safari, Edge */
  }
}

@media screen and (max-width: 768px) {
  .p-name {
    font-size: 1.2em;
    margin-top: 1.5em;
  }
}
</style>
<style scoped>
.accordion-item {
  border: 1px solid #f0f0f0;
}

.accordion-header {
  cursor: pointer;
}

.tab-title {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.accordion-toggle {
  color: #ccc;
  transition: transform 0.3s ease;
}

.accordion-toggle i {
  font-size: 18px;
}

.accordion-content {
  overflow: hidden;
}

.checked {
  color: #ffc107;
}
</style>