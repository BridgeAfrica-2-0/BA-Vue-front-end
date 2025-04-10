<style scoped>
.shipping-form-container {
  width: 100%;
  height: 100%;
  max-height: calc(100vh - 70px); /* Account for modal header */
  display: flex;
  flex-direction: column;
  position: relative;
}

.form-content-scroll {
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 0 10px;
  padding-bottom: 20px;
}

.sticky-button-container {
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 15px 10px;
  border-top: 1px solid #eee;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
  z-index: 10;
}

.map-container {
  margin-bottom: 20px;
  width: 100%;
  height: auto;
  min-height: 250px;
  max-height: 300px;
}

.checkbox-container {
  margin: 15px 0;
}

.hire-btn {
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border: none;
  font-weight: 600;
  border-radius: 10px;
  padding: 12px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
}

.body-font-size {
  color: black;
}

/* Ensure global fields are visible */
.global-fields {
  display: block;
  width: 100%;
  background-color: #f9f9f9;
  border-radius: 4px;
  margin-bottom: 20px;
}

.map-instruction {
  color: #666;
  font-size: 14px;
  background-color: #f0f8ff;
  padding: 8px;
  border-radius: 4px;
  border-left: 3px solid #4a90e2;
}

@media only screen and (max-width: 768px) {
  .shipping-form-container {
    max-height: calc(100vh - 60px);
  }
  
  .map-container {
    max-height: 200px;
  }
  
  .hire-btn {
    font-size: 16px;
    padding: 14px 20px;
  }
}
</style>

<template>
  <div class="shipping-form-container">
    <b-form @submit="onSubmit" @reset="onReset" class="d-flex flex-column h-100">
      <!-- Scrollable content area -->
      <div class="form-content-scroll">
        <b-alert :show="errorAppend" variant="danger">One problem must append!</b-alert>
        <b-form-group class="body-font-size" id="input-group-name" :label="$t('general.Name')" label-for="name-input">
          <b-form-input id="name-input" v-model="username" type="text" required :readonly="!!username"></b-form-input>
        </b-form-group>
        <b-form-group class="body-font-size" id="input-group-phone" :label="$t('general.Phone')" label-for="phone-input">
          <b-form-input id="phone-input" v-model="form.phone" type="tel" required inputmode="numeric" pattern="[0-9]*"
            maxlength="15"></b-form-input>
          <b-form-text class="text-muted">Note: Enter phone in digits only.</b-form-text>
        </b-form-group>
        <b-form-group class="body-font-size" id="input-group-email" :label="$t('general.email')" label-for="email-input">
          <b-form-input id="email-input" v-model="form.email" type="email" required></b-form-input>
        </b-form-group>

        <!-- Dropdown selectors for Cameroon -->
        <div v-if="isCameroon">
          <div class="row">
            <div class="col">
              <b-form-group class="body-font-size" id="input-group-country-cam" :label="$t('general.Country')"
                label-for="country-input-cam">
                <b-form-select id="country-input-cam" v-model="form.country" :options="countries" value-field="id"
                  text-field="name" @change="getRegions" required></b-form-select>
              </b-form-group>
            </div>
            <div class="col">
              <b-form-group class="body-font-size" id="input-group-region-cam" :label="$t('general.Region')"
                label-for="region-input-cam">
                <b-form-select id="region-input-cam" v-model="form.region" :options="regions" value-field="id" text-field="name"
                  @change="getDestinations" required></b-form-select>
              </b-form-group>
            </div>
            <div class="col">
              <b-form-group class="body-font-size" id="input-group-city-cam" :label="$t('general.Destination')"
                label-for="destination-input-cam">
                <b-form-select id="destination-input-cam" v-model="form.city" :options="destinations" value-field="id"
                  text-field="name" required></b-form-select>
              </b-form-group>
            </div>
          </div>
          
          <!-- Add address text field for Cameroon users -->
          <b-form-group class="body-font-size" id="input-group-address-cam" :label="$t('general.Address')" label-for="address-input-cam">
            <b-form-input
              id="address-input-cam"
              v-model="form.address"
              type="text"
              placeholder="Enter your detailed address"
              required
            ></b-form-input>
          </b-form-group>
        </div>

        <!-- For global users (non-Cameroon) -->
        <div v-else>
          <!-- Google Map Component - ensure it's visible -->
          <div class="map-container">
            <GoogleMap v-model="form.addressData" @update:modelValue="extractLocationData" />
          </div>
          
          <!-- Visible and Editable Address Fields for Global Users -->
          <div class="global-fields">
            <b-form-text class="map-instruction mb-3">
              <i class="fa fa-info-circle mr-1"></i> Search and select a location on the map to auto-fill these fields or enter them manually
            </b-form-text>
            
            <div class="row">
              <div class="col-md-6">
                <b-form-group class="body-font-size" id="input-group-country-global" :label="$t('general.Country')" label-for="country-input-global">
                  <b-form-input
                    id="country-input-global"
                    v-model="form.country"
                    type="text"
                    required
                    placeholder="Enter country"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group class="body-font-size" id="input-group-region-global" :label="`${$t('general.State2')}/${$t('general.Province')}/${$t('general.Region')}`" label-for="region-input-global">
                  <b-form-input
                    id="region-input-global"
                    v-model="form.region"
                    type="text"
                    required
                    placeholder="Enter data"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <b-form-group class="body-font-size" id="input-group-city-global" :label="`${$t('general.City')}:`" label-for="city-input-global">
                  <b-form-input
                    id="city-input-global"
                    v-model="form.city"
                    type="text"
                    required
                    placeholder="Enter city"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-md-6">
                <b-form-group class="body-font-size" id="input-group-zipcode-global" :label="`${$t('general.zip')}/${$t('general.Postal_code')}`" label-for="zipcode-input-global">
                  <b-form-input
                    id="zipcode-input-global"
                    v-model="form.zip_code"
                    type="text"
                    placeholder="Enter data"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <b-form-group class="body-font-size mb-3" id="input-group-address-global" :label="`${$t('general.Address')}:`" label-for="address-input-global">
              <b-form-input
                id="address-input-global"
                v-model="form.address"
                type="text"
                required
                placeholder="Enter full address"
              ></b-form-input>
            </b-form-group>
          </div>
        </div>

        <div>
          <b-form-checkbox v-if="mode == 'create'" id="checkbox-1" name="checkbox-1" value="accepted"
            v-model="isDefaultAddress" unchecked-value="not_accepted" style="color: #82939b;">
            Mark as default address
          </b-form-checkbox>
        </div>
        
        <div class="mt-3 pr-3" v-if="shippingsTab.length && current_step == 1">
          <p role="button" class="text-center" @click="closesipping">
            Skip
            <b-icon variant="primary" icon="arrow-right-circle-fill"> </b-icon>
          </p>
        </div>
      </div>

      <!-- Sticky button container -->
      <div class="sticky-button-container">
        <b-button :disabled="loading" type="submit" variant="primary" class="hire-btn w-100">
          {{ $t("general.Save") }}
          <b-spinner small v-if="loading" label="Loading..." class="ml-3"></b-spinner>
        </b-button>
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

    // Check if user is from Cameroon - ensure proper boolean evaluation
    const isLocalVal = localStorage.getItem("isLocal");
    console.log("isLocal from localStorage:", isLocalVal);
    this.isCameroon = isLocalVal !== "false";
    console.log("isCameroon set to:", this.isCameroon);

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
    
    // Force refresh data binding
    this.$nextTick(() => {
      this.$forceUpdate();
    });
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
        
        // Show loading indicator
        this.loading = true;
        
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
          console.log("Full geocode results:", results);
          this.processGeocodeResults(results);
          this.loading = false;
        } else {
          // If location geocoding fails, try geocoding by address string
          console.log("Location geocoding failed, trying by address string");
          geocoder.geocode({ 'address': address }, (results, status) => {
            if (status === 'OK' && results && results.length > 0) {
              console.log("Address geocode results:", results);
              this.processGeocodeResults(results);
              this.loading = false;
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

      console.log("Processing address:", formattedAddress);

      // Reset values
      let city = "";
      let region = "";
      let country = "";
      let postalCode = "";
      
      // Extract components
      for (let component of addressComponents) {
        const types = component.types;
        console.log("Component:", component.long_name, "Types:", types);

        if (types.includes('country')) {
          country = component.long_name;
        }
        
        if (types.includes('administrative_area_level_1')) {
          region = component.long_name;
        }

        if (types.includes('locality')) {
          city = component.long_name;
        } else if (city === "" && types.includes('administrative_area_level_2')) {
          // Use administrative_area_level_2 as fallback for city
          city = component.long_name;
        } else if (city === "" && types.includes('sublocality_level_1')) {
          // Use sublocality as another fallback
          city = component.long_name;
        }

        // Extract postal code from Google API
        if (types.includes('postal_code')) {
          postalCode = component.long_name;
          console.log("✅ Found postal code from Google API:", postalCode);
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

      // Set the full formatted address if it's better than what we have
      if (formattedAddress && (!this.form.address || this.form.address.length < formattedAddress.length)) {
        this.form.address = formattedAddress;
      }

      // Log the final extracted values
      console.log("Final extracted values:", {
        country: this.form.country,
        region: this.form.region,
        city: this.form.city,
        postalCode: this.form.zip_code,
        address: this.form.address
      });
      
      // Force update view
      this.$forceUpdate();
    },
    
    tryDetailedGeocoding(address) {
      // Try to get more detailed geocoding by doing a place search
      const geocoder = new google.maps.Geocoder();
      
      // Get any city name we can extract from the address
      const parts = address.split(',').map(part => part.trim());
      const potentialCity = parts.length > 0 ? parts[0] : "";
      
      if (potentialCity) {
        console.log("Trying detailed geocoding with city:", potentialCity);
        geocoder.geocode({ 'address': potentialCity }, (results, status) => {
          if (status === 'OK' && results && results.length > 0) {
            console.log("Detailed geocode results:", results);
            this.processGeocodeResults(results);
            this.loading = false;
          } else {
            console.error('Detailed geocoding failed:', status);
            // Last resort: use the simple fallback
            this.fallbackAddressExtraction(address);
            this.loading = false;
          }
        });
      } else {
        // If we can't extract a city, use the fallback
        this.fallbackAddressExtraction(address);
        this.loading = false;
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
        console.log("✅ Found postal code in text:", match[0]);
        this.form.zip_code = match[0];
      } else {
        console.log("❌ No postal code pattern found in text");
        this.form.zip_code = ""; // Empty string if no postal code found
      }
    },

    fallbackAddressExtraction(address) {
      console.log("Using fallback address extraction for:", address);

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
        this.form.city = addressParts[0] || "Unknown";
        this.form.region = "Unknown";
        this.form.country = "Unknown";
        // Leave postal code as is
      }
      
      // Always ensure we have an address
      this.form.address = address || "Unknown";
      
      // Force update view
      this.$forceUpdate();
    },
    
    ensureRequiredFields() {
      // This is a fallback method to make sure we have values for required fields
      
      // If we have an address but missing the required fields, try to parse from address
      if (this.form.addressData?.address && (!this.form.country || !this.form.region || !this.form.city)) {
        const address = this.form.addressData.address;
        const parts = address.split(',').map(part => part.trim());
        
        // Set default values if we can't extract
        this.form.country = this.form.country || parts[parts.length - 1] || "Unknown";
        this.form.region = this.form.region || (parts.length > 1 ? parts[parts.length - 2] : "Unknown");
        this.form.city = this.form.city || (parts.length > 0 ? parts[0] : "Unknown");
        
        // Try to extract postal code using our enhanced method
        if (!this.form.zip_code) {
          this.extractPostalCodeFromText(address);
        }
        
        // Ensure we have the address
        if (!this.form.address) {
          this.form.address = address;
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
          alert("Country, Region, and City are required fields. Please select a valid address on the map or enter them manually.");
          return;
        }
      } else {
        // For Cameroon users, check if address field is empty
        if (!this.form.address) {
          this.errorAppend = true;
          alert("Detailed address is required. Please enter your address.");
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

      // Ensure city and region are strings, not objects
      let cityValue = typeof this.form.city === 'object' ? this.form.city.id || this.form.city.destination || "" : this.form.city;
      let regionValue = typeof this.form.region === 'object' ? this.form.region.id || this.form.region.destination_region || "" : this.form.region;

      if (this.mode === "create") {
        // Create API payload with string values for city and region
        const formData = {
          name: this.form.name,
          phone: this.form.phone,
          email: this.form.email,
          country: this.form.country,
          region: regionValue,
          city: cityValue,
          zip_code: this.form.zip_code || "",
          address: this.form.address || "",
          latitude: this.form.addressData?.latitude || null,
          longitude: this.form.addressData?.longitude || null,
          islogin: this.form.islogin,
          isLocal: this.form.isLocal,
          active: this.form.active
        };

        console.log("Submitting form data:", formData);

        this.$store
          .dispatch("checkout/createShipping", formData)
          .then(() => {
            this.loading = false;
            this.errorAppend = false;
            this.$store.dispatch("checkout/getAllShippingAdd", { islogin: this.islogin });
            if(this.form.active == '1')
          {
            this.$emit("activeAddress", formData);
          }

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
            region: regionValue,
            city: cityValue,
            zip_code: this.form.zip_code || "",
            address: this.form.address,
            latitude: this.form.addressData?.latitude || null,
            longitude: this.form.addressData?.longitude || null,
            islogin: this.islogin,
            isLocal: this.isCameroon,
            active: this.form.active
          }
        };

        console.log("Updating with data:", shippingUpdate.data);

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
      // Make sure country is a string
      if (!country) return;

      this.loading = true;
      let requestData = {
        country: country,
      };

      console.log("Getting regions for country:", country);

      await axios
        .post(`shipping-address/select-region`, requestData)
        .then((res) => {
          console.log("Region API response:", res.data);

          let data = [];
          for (let i = 0; i < res.data.data.length; i++) {
            // Store both region ID (which is the region name) and the display name
            const regionItem = res.data.data[i];
            const regionId = regionItem.regions || regionItem; // Handle different API response formats
            const regionName = regionItem.destination_region || regionId;

            let region = {
              id: regionId,
              name: regionName,
            };
            data.push(region);
          }

          this.regions = data;

          // If we have regions but no selection, select the first one
          if (this.regions.length > 0 && !this.form.region) {
            this.form.region = this.regions[0].id;
            // Since we've selected a region, get its destinations
            this.getDestinations(this.form.region);
          }

          this.loading = false;
          console.log("Regions loaded:", this.regions);
          console.log("Selected region:", this.form.region);
        })
        .catch((error) => {
          console.error("Error loading regions:", error);
          this.loading = false;
        });
    },

    async getDestinations(region) {
      // Make sure region is defined
      if (!region) return;

      console.log("Getting destinations for region:", region);

      this.loading = true;

      // Create a simple request with the region name as a string
      const requestData = {
        region: region.destination_region
      };

      console.log("Destination API request payload:", requestData);

      await axios
        .post(`shipping-address/select-destination`, requestData)
        .then((res) => {
          console.log("Destinations API response:", res.data);

          let data = [];
          for (let i = 0; i < res.data.data.length; i++) {
            const destItem = res.data.data[i];
            const destId = destItem.destinations || destItem;
            const destName = destItem.destination || destId;

            let destination = {
              id: destId,
              name: destName,
            };
            data.push(destination);
          }
          this.destinations = data;

          // If we have destinations but no selection, select the first one
          if (this.destinations.length > 0 && !this.form.city) {
            this.form.city = this.destinations[0].id;
          }

          this.loading = false;
          console.log("Destinations loaded:", this.destinations);
          console.log("Selected destination:", this.form.city);
        })
        .catch((error) => {
          console.error("Error loading destinations:", error);
          this.loading = false;
        });
    }
  }
};
</script>