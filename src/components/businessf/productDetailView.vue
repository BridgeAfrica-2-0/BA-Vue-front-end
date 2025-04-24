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
                  <!-- {{currencySelected}} -->
                </div>

                <hr class="my-3" />

                <!-- Prix -->
                <div class="pricing">
                  <!-- <div class="text-black" style="font-size: 14px;">
                FCFA (inc. of all taxes)
              </div> -->
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
              <ul class="nav nav-pills mb-3 justify-content-between flex-nowrap overflow-auto" id="pills-tab"
                role="tablist">
                <li class="nav-item mx-1" role="presentation">
                  <button class="nav-link active text-capitalize px-2 px-md-3" id="pills-home-tab" data-toggle="pill"
                    data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                    {{ $t("general.description") }}
                  </button>
                </li>
                <li class="nav-item mx-1" role="presentation">
                  <button class="nav-link px-2 px-md-3" id="pills-profile-tab" data-toggle="pill"
                    data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                    aria-selected="false">
                    Specification
                  </button>
                </li>
                <li class="nav-item mx-1" role="presentation">
                  <button class="nav-link px-2 px-md-3" id="pills-contact-tab" data-toggle="pill"
                    data-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                    aria-selected="false">
                    Reviews
                  </button>
                </li>
                <li class="nav-item mx-1" role="presentation">
                  <button class="nav-link px-2 px-md-3" id="pills-delivery-tab" data-toggle="pill"
                    data-target="#pills-delivery" type="button" role="tab" aria-controls="pills-delivery"
                    aria-selected="false">
                    Delivery Delay
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                  <p>
                    {{ marketDetails.description }}
                  </p>
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"></div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"></div>
                <div class="tab-pane fade" id="pills-delivery" role="tabpanel" aria-labelledby="pills-delivery-tab">
                  <div class="delivery-delays mt-3">
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
            </div>
          </div>
        </div>

      </div>
    </template>
  </base-layout>
</template>
<script>
import ProductImages from "./productImages.vue";
import Nav from "@/components/navbar";
import { LocalisationMixins } from "@/mixins";
// import QuantitySelector from "./QuantitySelector.vue";
import SiteFooter from "../home/updatedSiteFooter.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";

import BaseLayout from "@/layouts/Layout"

export default {
  mixins: [LocalisationMixins],
  components: {
    BaseLayout,
    ProductImages,
    // QuantitySelector,
  },
  data() {
    return {
      marketDetails: null,
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
    handleAddToCard() {
      this.$store
        .dispatch("cart/addToCart", {
          product: this.marketDetails,
          islogin: this.islogin,
        })
        .then((response) => {
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
    navigateToCart() {
      this.handleAddToCard()
        .then(() => {
          this.$router.push("/cart");
        })
        .catch((error) => {
          console.log("Error", error);
        });
    },
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
