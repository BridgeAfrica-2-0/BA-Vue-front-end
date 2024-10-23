<template>
  <div>
    <div class="container-fluid">
      <Nav
        :credentials.sync="searchParams"
        @updateSearchKeyword="updateSearchKeyword"
        id="top"
      >
        <template v-slot:button>
          <Button
            media="desktop"
            @click.native="strategY['all']"
            v-if="selectedId == 5"
          />

          <Button
            media="desktop"
            @click.native="strategY['business']"
            v-if="selectedId == 1"
          />
          <Button
            media="desktop"
            @click.native="strategY['network']"
            v-if="selectedId == 3 && islogin"
          />
          <Button
            media="desktop"
            @click.native="strategY['market']"
            v-if="selectedId == 0"
          />

          <Button
            media="desktop"
            @click.native="strategies"
            v-if="[2, 4].includes(selectedId) && islogin"
          />
          <Button
            media="desktop"
            @click.native="strategies"
            v-if="[2, 3].includes(selectedId) && !islogin"
          />
        </template>

        <template v-slot:mobile>
          <Button
            media="mobile"
            @click.native="strategY['all']"
            v-if="selectedId == 5"
          />

          <Button
            media="mobile"
            @click.native="strategY['business']"
            v-if="selectedId == 1"
          />

          <Button
            media="mobile"
            @click.native="strategY['network']"
            v-if="selectedId == 3 && islogin"
          />

          <Button
            media="mobile"
            @click.native="strategY['market']"
            v-if="selectedId == 0"
          />

          <Button
            media="mobile"
            @click.native="strategies"
            v-if="[2, 4].includes(selectedId) && islogin"
          />
          <Button
            media="mobile"
            @click.native="strategies"
            v-if="[2, 3].includes(selectedId) && !islogin"
          />
        </template>
      </Nav>
      <div class="px-4 mt-4">
        <SubNav
          @onChangeCategoryName="(val) => (categoryName = val)"
          @category="getCategory"
          @parentcategory="getparentCategory"
          @update:keyword="
            (val) => (searchParams = Object.assign(searchParams, val))
          "
          @activateSuggestion="activateSuggestion"
          @activate:matching:category="(val) => (activateMatching = val)"
        />
      </div>
      <div class="mt-4">
        <div class="product-page row">
          <!-- Galerie d'images -->
          <div class="col-md-5">
            <ProductImages :images="productImages" />
          </div>

          <!-- Informations produit -->
          <div class="col-md-7">
            <div>
              <label for="" class="text-black">Brand:</label>
              <span class="ml-2">LG</span>
            </div>
            <div>
              <label for="" class="text-black">Model:</label>
              <span class="ml-2">{{ product.model }}</span>
            </div>
            <div>
              <label for="" class="text-black">Availability:</label>
              <span class="ml-2">Only {{ marketDetails.quantity }} in stock</span>
            </div>
            <h2 class="text-black">{{ marketDetails.name }}</h2>

            <!-- Notes (étoiles) -->
            <div>
              <StarRating :rating="4" />
            </div>

            <div></div>
            <!-- Liste des caractéristiques -->
            <ul class="mt-3" style="padding-inline: 25px;">
              <li
                class="pb-2"
                v-for="feature in product.features"
                :key="feature"
              >
                {{ feature }}
              </li>
            </ul>

            <!-- Choix de taille d'écran (Composant externe) -->
            <ScreenSizeSelector
              :sizes="product.sizes"
              :selectedSize="selectedSize"
              @size-selected="onSizeSelected"
            />

            <hr class="my-3" />

            <!-- Prix -->
            <div class="pricing">
              <div class="text-black" style="font-size: 14px;">
                FCFA (inc. of all taxes)
              </div>
              <div>
                <span class="price">{{ marketDetails.price }} FCFA</span>
                <span
                  v-if="product.price.original"
                  class="old-price text-muted ml-3"
                  >{{ product.price.original }} FCFA</span
                >
              </div>
            </div>

            <div class="d-flex align-items-center gap-25 mt-4">
              <!-- Sélection de la quantité -->
              <div class="quantity-selector">
                <div>
                  <QuantitySelector v-model="quantity" :min="1" :max="10" />
                  <!-- <p>Quantité sélectionnée : {{ quantity }}</p> -->
                </div>
              </div>
              <button class="btn btn-primary" @click="buyNow">Buy Now</button>
              <button
                class="btn btn-outline-primary font-weight-bold"
                @click="addToCart"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div class="container" style="margin-top: 4em;">
          <ul
            class="nav nav-pills mb-3 justify-content-around"
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                data-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Description
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                data-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Specification
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                data-target="#pills-contact"
                type="button"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Reviews
              </button>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <p>
                The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around
                OLED TV we've tested. Although all OLEDs deliver similar
                fantastic picture quality, this one stands out for its value
                because it has many gaming-oriented features that are great for
                gamers.
              </p>
            </div>
            <div
              class="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <p>Here is the specification content.</p>
            </div>
            <div
              class="tab-pane fade"
              id="pills-contact"
              role="tabpanel"
              aria-labelledby="pills-contact-tab"
            >
              <p>Here is the reviews content.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4" style="margin-top: 20em !important;">
      <SiteFooter />
      <div class="bottom-bar">
        <span>©2021 Bridge Africa</span>
      </div>
    </div>
  </div>
</template>
<script>
import SubNav from "@/components/subnav";
import ProductImages from "./productImages.vue";
import ScreenSizeSelector from "./ScreenSizeSelector.vue";
import Nav from "@/components/navbar";
import QuantitySelector from "./QuantitySelector.vue";
import StarRating from "./StarDisplay.vue";
import SiteFooter from "../home/updatedSiteFooter.vue";
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  components: {
    Nav,
    SubNav,
    SiteFooter,
    ProductImages,
    ScreenSizeSelector,
    QuantitySelector,
    StarRating,
  },
  data() {
    return {
      marketDetails: null,
      marketId: 6,
      value: 1,
      product: {
        name: "LG C2 42 (106CM) 4K SMART OLED EVO TV",
        model: "OLED42C2PSA",
        rating: 4,
        features: [
          "α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling",
          "Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume",
          "Hands-free Voice Control, Always Ready",
          "Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode",
          "Eye Comfort Display: Low-Blue Light, Flicker-Free",
        ],
        sizes: [
          { label: "106 cm (42)", value: "42" },
          { label: "121 cm (48)", value: "48" },
          { label: "139 cm (55)", value: "55" },
        ],
        price: {
          current: 600.72,
          original: 800.0,
        },
      },
      productImages: [
        {
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cCVix5RT5nVbM3LjZzXwtxzDeqaGvRLQCw&s",
          name: "LG C2 42 (106CM) 4K SMART OLED EVO TV",
        },
        {
          src:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeQwBPmIKY6DK5L1vCSPaG071bl48ekcxqAg&s",
          name: "LG C2 42 (106CM) 4K SMART OLED EVO TV",
        },
        {
          src:
            "https://site.glotelho.cm/media/catalog/product/cache/3d5322e2293df1ca8e64a115bdb04917//t/v/tv-led-samsung---55-pouces--ua55au8000uxly.jpg",
          name: "LG C2 42 (106CM) 4K SMART OLED EVO TV",
        },
        {
          src:
            "https://www.sencor.com/Sencor/media/content/Products/SLE-55US800TCSB-2.jpg",
          name: "LG C2 42 (106CM) 4K SMART OLED EVO TV",
        },
      ],
      selectedSize: "42",
      quantity: 1,
    };
  },
  methods: {
    ...mapActions("marketDetails", ["getdetails"]),

    async fetchMarketDetails() {
      const marketId = this.$route.params.id;
      try {
        const details = await this.getdetails(marketId);
        this.marketDetails = details.data;
        console.log("marketDetails", this.marketDetails);
      } catch (error) {
        console.error("Error fetching market details:", error.message);
      }
    },
    onSizeSelected(size) {
      this.selectedSize = size.value;
      console.log("Size", size);
    },
    buyNow() {},
    addToCart() {},
  },
  mounted() {
    this.fetchMarketDetails(); // Récupérer les détails dès que la page est montée
  },
};
</script>
<style scoped>
.nav-link {
  font-weight: bold;
  font-size: 1.2em !important;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
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
</style>
