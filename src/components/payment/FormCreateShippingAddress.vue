<template>
  <div class="shipping-form-container">
    <b-form @submit="onSubmit" @reset="onReset" class="shipping-form">
      <b-alert :show="errorAppend" variant="danger">One problem must append!</b-alert>
      <b-form-group class="body-font-size" id="input-group-name" :label="$t('general.Name')" label-for="name-input">
        <b-form-input id="name-input" v-model="username" type="text" required :readonly="!!username"></b-form-input>
      </b-form-group>
      <b-form-group class="body-font-size" id="input-group-phone" :label="$t('general.Phone')" label-for="phone-input">
        <b-form-input id="phone-input" v-model="form.phone" type="tel" required inputmode="numeric" pattern="[0-9]*" maxlength="15"></b-form-input>
        <b-form-text class="text-muted">Note: Enter phone in digits only.</b-form-text>
      </b-form-group>
      <b-form-group class="body-font-size" id="input-group-email" :label="$t('general.email')" label-for="email-input">
        <b-form-input id="email-input" v-model="form.email" type="email" required></b-form-input>
      </b-form-group>
      
      <!-- For all users, use Google Map -->
      <div class="map-container">
        <!-- Hidden inputs for values that will be populated by Google Maps -->
        <input type="hidden" v-model="form.country">
        <input type="hidden" v-model="form.region">
        <input type="hidden" v-model="form.city">
        <input type="hidden" v-model="form.zip_code">
        <input type="hidden" v-model="form.address">
        
        <GoogleMap v-model="form.addressData" @update:modelValue="extractLocationData" />
      </div>
      
      <div class="checkbox-container">
        <b-form-checkbox
          v-if="mode=='create'"
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          v-model="isDefaultAddress"
          unchecked-value="not_accepted"
          style="color: #82939b;"
        >
          Mark as default address
        </b-form-checkbox>
      </div>
      
      <div class="button-container">
        <b-button :disabled="loading" type="submit" variant="primary" class="hire-btn w-100">
          {{ $t("general.Save") }}
          <b-spinner small v-if="loading" label="Loading..." class="ml-3"></b-spinner>
        </b-button>
      </div>

      <div class="skip-container" v-if="shippingsTab.length && current_step == 1">
        <p role="button" class="text-center" @click="closesipping">
          Skip
          <b-icon variant="primary" icon="arrow-right-circle-fill"> </b-icon>
        </p>
      </div>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
import GoogleMap from "@/components/locationMap.vue";

export default {
  name: "FormCreateShippingAddress",
  components: { GoogleMap },
  props: {
    form: {
      type: Object,
      required: false,
      default: () => ({})
    },
    current_step: {
      required: false
    },
    modal: Boolean,
    mode: {
      type: String,
      default: "create",
    }
  },
  data() {
    return {
      errorAppend: false,
      loading: false,
      countries: [],
      regions: [],
      destinations: [],
      username: "",
      isCameroon: false,
      isDefaultAddress: false
    };
  },
  created() {
    // Initialize data
    this.username = this.$store.state.auth.user?.user?.name || "";
    
    // Check if user is from Cameroon
    const isLocalVal = localStorage.getItem("isLocal");
    this.isCameroon = isLocalVal !== "false";
    
    // Make sure form has required properties
    if (!this.form.addressData) {
      this.form.addressData = {
        address: "",
        latitude: null,
        longitude: null
      };
    }
    
    // Initialize Google Maps if needed
    if (typeof google === 'undefined') {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCziAaniffzINQlfuNhkzCTHm_hWPvVZxw&libraries=places`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
    
    // Ensure form has all required fields
    this.initializeFormFields();
    
    // Set initial active status
    if (this.form.active === "1") {
      this.isDefaultAddress = true;
    }
    
    // Get countries for Cameroon users
    if (this.isCameroon) {
      this.getcountries();
    }
    
    // Initialize form for edit mode
    if (this.mode !== "create" && this.form) {
      if (this.isCameroon) {
        this.getRegions(this.form.country);
        this.getDestinations(this.form.region);
      }
    }
  },
  mounted() {
    this.$store.dispatch("checkout/getAllShippingAdd", { islogin: this.islogin });
    // Fix scroll on mobile devices
    this.fixMobileScroll();
  },
  beforeDestroy() {
    // Clean up any event listeners
    if (this._scrollHandler) {
      window.removeEventListener('resize', this._scrollHandler);
    }
  },
  computed: {
    shippingsTab() {
      return this.$store.state.checkout.allShipping;
    },
    islogin() {
      return this.$store.getters["auth/isLogged"];
    }
  },
  methods: {
    fixMobileScroll() {
      this._scrollHandler = () => {
        if (window.innerWidth <= 768) {
          const formContainer = document.querySelector('.shipping-form-container');
          if (formContainer) {
            formContainer.style.overflow = 'auto';
            formContainer.style.maxHeight = 'calc(100vh - 120px)';
            formContainer.style.WebkitOverflowScrolling = 'touch'; 
          }
          const mapContainer = document.querySelector('.map-container');
          if (mapContainer) {
            mapContainer.style.height = '200px';
          }
        }
      };
      this._scrollHandler();
      window.addEventListener('resize', this._scrollHandler);
      window.scrollTo(0, 0);
    },
    
    initializeFormFields() {
      // Set default values for all required fields
      if (!this.form.country) this.form.country = "";
      if (!this.form.region) this.form.region = "";
      if (!this.form.city) this.form.city = "";
      if (!this.form.zip_code) this.form.zip_code = "";
      if (!this.form.address) this.form.address = "";
    },
    
    extractLocationData(data) {
      if (!data) return;
      
      // Store the complete address data
      this.form.addressData = data;
      
      if (data.address) {
        // Store the full address
        this.form.address = data.address;
        
        // Use the Google Maps Geocoding API to get detailed address components
        this.extractAddressComponents(data.address, data.latitude, data.longitude);
      }
    },
    
    extractAddressComponents(address, lat, lng) {
      // Use the Google Maps Geocoding API to get detailed address components
      const geocoder = new google.maps.Geocoder();
      
      // First try to geocode using the user's selected location
      geocoder.geocode({ 'location': { lat: parseFloat(lat), lng: parseFloat(lng) } }, (results, status) => {
        if (status === 'OK' && results && results.length > 0) {
          this.processGeocodeResults(results);
        } else {
          // If location geocoding fails, try geocoding by address string
          geocoder.geocode({ 'address': address }, (results, status) => {
            if (status === 'OK' && results && results.length > 0) {
              this.processGeocodeResults(results);
            } else {
              console.error('Geocoder failed due to: ' + status);
              // Fallback: Try a more detailed geocoding by components
              this.tryDetailedGeocoding(address);
            }
          });
        }
      });
    },
    
    processGeocodeResults(results) {
      // Get all address components from the first result
      const addressComponents = results[0].address_components;
      const formattedAddress = results[0].formatted_address;
      
      // Reset values
      let city = "";
      let region = "";
      let country = "";
      let postalCode = "";
      
      // Extract components
      for (let component of addressComponents) {
        const types = component.types;
        
        if (types.includes('country')) {
          country = component.long_name;
        }
        
        if (types.includes('administrative_area_level_1')) {
          region = component.long_name;
        }
        
        if (types.includes('locality') || types.includes('administrative_area_level_2')) {
          city = component.long_name;
        }
        
        // Extract postal code from Google API - this works for most countries
        if (types.includes('postal_code')) {
          postalCode = component.long_name;
        }
      }
      
      // Set form values - ensure we have values for required fields
      this.form.country = country || "Unknown";
      this.form.region = region || "Unknown";
      this.form.city = city || "Unknown";
      
      // Set postal code if found from Google API
      if (postalCode) {
        this.form.zip_code = postalCode;
      } else {
        // If Google didn't provide a postal code, try to extract it from the formatted address
        this.extractPostalCodeFromText(formattedAddress);
      }
    },
    
    tryDetailedGeocoding(address) {
      // Try to get more detailed geocoding by doing a place search
      const geocoder = new google.maps.Geocoder();
      
      // Get any city name we can extract from the address
      const parts = address.split(',').map(part => part.trim());
      const potentialCity = parts.length > 0 ? parts[0] : "";
      
      if (potentialCity) {
        geocoder.geocode({ 'address': potentialCity }, (results, status) => {
          if (status === 'OK' && results && results.length > 0) {
            this.processGeocodeResults(results);
          } else {
            console.error('Detailed geocoding failed:', status);
            // Last resort: use the simple fallback
            this.fallbackAddressExtraction(address);
          }
        });
      } else {
        // If we can't extract a city, use the fallback
        this.fallbackAddressExtraction(address);
      }
    },
    
    extractPostalCodeFromText(text) {
      // Universal postal code patterns that work globally
      
      // US/Canada/Australia/etc - numeric postal codes (5-10 digits, may include dashes)
      const numericPostalRegex = /\b\d{5}(-\d{4})?\b|\b\d{6}\b|\b\d{4}\b/;
      
      // UK/Canada style alphanumeric postal codes
      const alphaNumericPostalRegex = /\b[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}\b|\b[A-Z][0-9][A-Z] ?[0-9][A-Z][0-9]\b/i;
      
      // European style postal codes (typically 4-5 digits)
      const europeanPostalRegex = /\b\d{4,5}\b/;
      
      // Asian style postal codes (typically 6-7 digits)
      const asianPostalRegex = /\b\d{6,7}\b/;
      
      // Try in order of specificity/format
      let match = text.match(alphaNumericPostalRegex) || 
                text.match(numericPostalRegex) || 
                text.match(europeanPostalRegex) ||
                text.match(asianPostalRegex);
      
      if (match) {
        this.form.zip_code = match[0];
      } else {
        this.form.zip_code = "00000"; // Default if no postal code found
      }
    },
    
    fallbackAddressExtraction(address) {
      // Simple fallback method
      const addressParts = address.split(',').map(part => part.trim());
      
      if (addressParts.length >= 3) {
        // Try to extract data from address parts
        this.form.city = addressParts[0] || "Unknown";
        this.form.region = addressParts[1] || "Unknown";
        this.form.country = addressParts[addressParts.length - 1] || "Unknown";
        
        // Find postal code in the full address
        this.extractPostalCodeFromText(address);
      } else {
        // If we don't have enough parts, use defaults for required fields
        this.form.city = "Unknown";
        this.form.region = "Unknown";
        this.form.country = "Unknown";
        // Leave postal code as is
      }
    },
    
    ensureRequiredFields() {
      // This is a fallback method to make sure we have values for required fields
      
      // If we have an address but missing the required fields, try to parse from address
      if (this.form.addressData?.address && (!this.form.country || !this.form.region || !this.form.city)) {
        const address = this.form.addressData.address;
        const parts = address.split(',').map(part => part.trim());
        
        // Set default values if we can't extract
        this.form.country = this.form.country || "Default Country";
        this.form.region = this.form.region || "Default Region";
        this.form.city = this.form.city || "Default City";
        
        // Try to extract better values if possible
        if (parts.length >= 3) {
          // Very simple extraction - last part is typically country
          if (!this.form.country || this.form.country === "Default Country") {
            this.form.country = parts[parts.length - 1] || "Default Country";
          }
          
          // Second to last might be region/state
          if (!this.form.region || this.form.region === "Default Region") {
            this.form.region = parts[parts.length - 2] || "Default Region";
          }
          
          // First part might be city
          if (!this.form.city || this.form.city === "Default City") {
            this.form.city = parts[0] || "Default City";
          }
          
          // Try to extract postal code using our enhanced method
          this.extractPostalCodeFromText(address);
        }
      }
    },
    
    closesipping() {
      this.$emit("closecshippingm");
      this.$emit("switchstep", 2);
    },

    onSubmit(event) {
      event.preventDefault();
      
      // Check if required fields are present for non-Cameroon users
      if (!this.isCameroon) {
        if (!this.form.country || !this.form.region || !this.form.city) {
          // Manually extract from address if needed
          this.ensureRequiredFields();
        }
        
        // Double check if fields are still missing
        if (!this.form.country || !this.form.region || !this.form.city) {
          this.errorAppend = true;
          alert("Country, Region, and City are required fields. Please select a valid address.");
          return;
        }
      }
      
      this.loading = true;
      
      // Set basic form fields
      this.form.name = this.username;
      this.form.islogin = this.islogin;
      this.form.isLocal = this.isCameroon;
      
      // Set active status based on checkbox
      this.form.active = this.isDefaultAddress ? "1" : "0";
      
      if (this.mode === "create") {
        // Create API payload
        const formData = {
          name: this.form.name,
          phone: this.form.phone,
          email: this.form.email,
          country: this.form.country,
          region: this.form.region,
          city: this.form.city,
          // If zip_code is empty string, null, or undefined, don't add a default
          zip_code: this.form.zip_code || "",
          address: this.form.address,
          latitude: this.form.addressData?.latitude || null,
          longitude: this.form.addressData?.longitude || null,
          islogin: this.form.islogin,
          isLocal: this.form.isLocal,
          active: this.form.active
        };
        
        this.$store
          .dispatch("checkout/createShipping", formData)
          .then(() => {
            this.loading = false;
            this.errorAppend = false;
            this.$store.dispatch("checkout/getAllShippingAdd", { islogin: this.islogin });
            this.$emit("activeAddress", formData);
            
            if (this.modal) {
              this.$emit("closecshippingm");
            } else {
              this.$emit("switchstep", 2);
            }
          })
          .catch((error) => {
            console.error("API Error:", error.response?.data || error);
            this.loading = false;
            this.errorAppend = true;
            if (this.modal) {
              this.$emit("closecshippingm");
            }
          });
      } else {
        // Edit mode - use FormData for update
        let formData = new FormData();
        
        const shippingUpdate = {
          id: this.form.id,
          data: {
            name: this.username,
            phone: this.form.phone,
            email: this.form.email,
            country: this.form.country,
            region: this.form.region,
            city: this.form.city,
            zip_code: this.form.zip_code || "",
            address: this.form.address,
            latitude: this.form.addressData?.latitude || null,
            longitude: this.form.addressData?.longitude || null, 
            islogin: this.islogin,
            isLocal: this.isCameroon,
            active: this.form.active
          }
        };
        
        const shipData = { ...shippingUpdate.data };
        
        // Create FormData object
        for (let key in shippingUpdate.data) {
          formData.append(key, shippingUpdate.data[key]);
        }
        
        shippingUpdate.data = formData;
        
        this.$store
          .dispatch("checkout/updateShippingAddress", shippingUpdate)
          .then(() => {
            this.loading = false;
            this.$store.dispatch("checkout/getAllShippingAdd", { islogin: this.islogin });
            this.$emit("activeAddress", shipData);
            
            if (this.modal) {
              this.$emit("closecshippingm");
            }
          })
          .catch((error) => {
            console.error("API Error:", error.response?.data || error);
            this.loading = false;
            if (this.modal) {
              this.$emit("closecshippingm");
            }
          });
      }
    },
    
    onReset(event) {
      event.preventDefault();
      
      if (this.mode === "create") {
        // Reset form fields
        this.form = {
          name: "",
          phone: "",
          email: "",
          country: "",
          region: "",
          city: "",
          zip_code: "",
          address: "",
          addressData: {
            address: "",
            latitude: null,
            longitude: null
          },
          active: "0",
          isLocal: this.isCameroon,
          islogin: this.islogin
        };
        
        this.isDefaultAddress = false;
      }
      
      if (this.modal) {
        this.$emit("closecshippingm");
      }
    },
    
    // API methods for Cameroon locations
    async getcountries() {
      this.loading = true;
      await axios
        .get(`shipping-address/get-country`)
        .then((res) => {
          let data = [];
          for (let i = 0; i < res.data.data.length; i++) {
            let country = {
              id: res.data.data[i].country,
              name: res.data.data[i].country,
            };
            data.push(country);
          }
          this.countries = data;
          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
        });
    },
    
    async getRegions(country) {
      this.loading = true;
      let data = {
        country: country,
      };
      await axios
        .post(`shipping-address/select-region`, data)
        .then((res) => {
          let data = [];
          for (let i = 0; i < res.data.data.length; i++) {
            let region = {
              id: res.data.data[i].regions,
              name: res.data.data[i].regions,
            };
            data.push(region);
          }
          this.loading = false;
          this.regions = data;
        })
        .catch((error) => console.dir(error));
    },
    
    async getDestinations(region) {
      this.loading = true;
      let data = {
        region: region,
      };
      await axios
        .post(`shipping-address/select-destination`, data)
        .then((res) => {
          let data = [];
          for (let i = 0; i < res.data.data.length; i++) {
            let region = {
              id: res.data.data[i].destinations,
              name: res.data.data[i].destinations,
            };
            data.push(region);
          }
          this.destinations = data;
          this.loading = false;
        })
        .catch((error) => console.dir(error));
    }
  }
};
</script>

<style scoped>
.shipping-form-container {
  width: 100%;
  max-height: 100vh;
  position: relative;
  -webkit-overflow-scrolling: touch; 
  overflow-y: auto;
  padding-bottom: 20px;
}

.shipping-form {
  padding: 0 10px;
}

.map-container {
  margin-bottom: 20px;
  width: 100%;
  height: auto;
  min-height: 200px;
  max-height: 300px;
}

.checkbox-container {
  margin: 15px 0;
}

.button-container {
  margin-top: 20px;
  margin-bottom: 15px;
  width: 100%;
}

.skip-container {
  margin-top: 10px;
  margin-bottom: 20px;
}

.hire-btn {
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border: none;
  font-weight: 600;
  border-radius: 10px;
  padding: 12px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
}

.body-font-size {
  color: black;
}
@media only screen and (max-width: 768px) {
  .shipping-form-container {
    padding-bottom: 60px; 
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    max-height: calc(100vh - 60px);
  }
  
  .map-container {
    max-height: 200px;
  }
  
  .button-container {
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    background: white;
    padding: 10px 0;
    margin-bottom: 0;
    z-index: 100;
  }
  
  .hire-btn {
    font-size: 16px;
    padding: 14px 20px;
  }
}
</style>