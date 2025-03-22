<template>
  <div>
    <!-- Address Input -->
    <b-form-group class="body-font-size" label="Address" label-for="address-input">
      <input
        id="address-input"
        ref="addressInput"
        v-model="address"
        type="text"
        class="form-control"
        placeholder="Search your address"
        required
      />
    </b-form-group>

    <!-- Google Map -->
    <div ref="map" id="map"></div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: Object, // Expected { address, latitude, longitude }
  },
  data() {
    return {
      map: null,
      marker: null,
      autocomplete: null,
      address: "", // Start with empty search bar
      fallbackLocation: { lat: 0, lng: 0 }, // Only used if geolocation fails completely
    };
  },
  watch: {
    modelValue: {
      deep: true,
      handler(newVal) {
        if (newVal && newVal.address) {
          this.address = newVal.address;
        }
      },
    },
  },
  mounted() {
    // Load Google Maps with a slight delay to ensure DOM is ready
    setTimeout(() => {
      this.loadGoogleMaps();
    }, 100);
  },
  methods: {
    loadGoogleMaps() {
      if (window.google && window.google.maps) {
        console.log("Google Maps already loaded, initializing map...");
        this.initMap();
      } else {
        console.log("Loading Google Maps script...");
        const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
        if (existingScript) {
          console.log("Removing existing Google Maps script...");
          existingScript.remove(); // Remove existing script
        }

        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCziAaniffzINQlfuNhkzCTHm_hWPvVZxw&libraries=places`;
        script.defer = true;
        script.async = true;
        script.onload = () => {
          console.log("Google Maps script loaded successfully!");
          this.initMap();
        };
        document.head.appendChild(script);
      }
    },

    initMap() {
      this.$nextTick(() => {
        const inputElement = this.$refs.addressInput;
        if (!inputElement) {
          console.error("Address input field not found!");
          return;
        }

        console.log("Initializing map...");
        
        // Initialize map with a temporary center - will be updated with user's location
        this.map = new google.maps.Map(this.$refs.map, {
          center: this.fallbackLocation,
          zoom: 15,
        });

        // IMPORTANT: Ensure the input has these attributes for mobile devices
        inputElement.setAttribute('autocomplete', 'off'); // Disable browser autocomplete
        inputElement.setAttribute('autocapitalize', 'off');
        inputElement.setAttribute('spellcheck', 'false');
        
        // Force any existing autocomplete instance to be removed
        if (this.autocomplete) {
          google.maps.event.clearInstanceListeners(this.autocomplete);
          this.autocomplete = null;
        }

        // Create Autocomplete instance
        this.autocomplete = new google.maps.places.Autocomplete(inputElement, {
          types: ["geocode"],
          fields: ["address_components", "formatted_address", "geometry", "name"],
        });
        
        // Set up event listener for place selection
        google.maps.event.addListener(this.autocomplete, "place_changed", this.handlePlaceSelect);
        
        console.log("Autocomplete setup complete");

        // Check if we have saved location data
        if (this.modelValue && this.modelValue.latitude && this.modelValue.longitude) {
          const savedLocation = {
            lat: this.modelValue.latitude,
            lng: this.modelValue.longitude
          };
          this.updateLocation(savedLocation, this.modelValue.address || "");
        } else {
          // Otherwise get user location
          this.getUserLocation();
        }
      });
    },

    getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            console.log("User location detected:", userLocation);
            
            // Update map with user location
            this.updateLocation(userLocation, "");
            
            // After getting location, do reverse geocoding to get address but don't show in search bar
            this.getAddressFromCoordinates(userLocation, false);
          },
          (error) => {
            console.warn("Geolocation error:", error.message);
            // In case of error, just center the map but don't set an address
            if (this.map) {
              this.map.setCenter(this.fallbackLocation);
              this.map.setZoom(2); // Zoom out to show more of the world
            }
          },
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
        );
      } else {
        console.warn("Geolocation not supported.");
        // Just center the map but don't set an address
        if (this.map) {
          this.map.setCenter(this.fallbackLocation);
          this.map.setZoom(2);
        }
      }
    },
    
    // getAddressFromCoordinates(location, updateInput = true) {
    //   const geocoder = new google.maps.Geocoder();
    //   geocoder.geocode({ location: location }, (results, status) => {
    //     if (status === "OK" && results[0]) {
    //       const address = results[0].formatted_address;
          
    //       // Only update the visible input if requested
    //       if (updateInput) {
    //         this.address = address;
    //       }
          
    //       // Always emit the value to the parent
    //       this.$emit("update:modelValue", { 
    //         address, 
    //         latitude: location.lat, 
    //         longitude: location.lng 
    //       });
    //     }
    //   });
    // },
    // In locationMap.vue
getAddressFromCoordinates(location) {
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ location: location }, (results, status) => {
    if (status === "OK" && results[0]) {
      const address = results[0].formatted_address;
      const addressComponents = results[0].address_components;
      
      this.$emit("update:modelValue", { 
        address, 
        latitude: location.lat, 
        longitude: location.lng,
        addressComponents // Add this
      });
    }
  });
},

    handlePlaceSelect() {
      if (!this.autocomplete) {
        console.warn("Autocomplete instance not found!");
        return;
      }

      const place = this.autocomplete.getPlace();
      console.log("Place selected:", place);

      if (!place || !place.geometry) {
        console.error("No valid place selected. Try another address.");
        return;
      }

      const address = place.formatted_address || place.name || "";
      if (!address) {
        console.error("No valid address found!");
        return;
      }

      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };

      console.log("Updating location from selected place:", location, address);
      this.updateLocation(location, address);
    },

    updateLocation(location, address) {
      console.log("Updating location:", location, address);
      
      // Only update the input field if address is provided
      if (address) {
        this.address = address;
      }
      
      // Always emit the update
      this.$emit("update:modelValue", { 
        address, 
        latitude: location.lat, 
        longitude: location.lng 
      });

      if (!this.map) return; // Ensure map is initialized

      this.map.setCenter(location);
      this.map.setZoom(15);

      // Always use standard markers since we don't have a Map ID
      if (!this.marker) {
        this.createMarker(location);
      } else {
        // Update existing marker
        this.marker.setPosition(location);
        console.log("Marker position updated!");
      }
    },
    
    createMarker(location) {
      console.log("Creating marker");
      this.marker = new google.maps.Marker({
        position: location,
        map: this.map,
        title: "Selected Location",
        draggable: true,
        animation: google.maps.Animation.DROP
      });

      this.marker.addListener("dragend", () => {
        const newPos = this.marker.getPosition();
        const newLocation = { 
          lat: newPos.lat(), 
          lng: newPos.lng() 
        };
        this.updateLocation(newLocation, "");
        // Update address after drag
        this.getAddressFromCoordinates(newLocation, true);
      });
    },
  },
};
</script>

<style scoped>
#map {
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin-top: 10px;
}

/* Fix for autocomplete dropdown visibility */
#address-input {
  position: relative;
  z-index: 1000; /* Higher z-index to ensure dropdown is visible */
}
</style>