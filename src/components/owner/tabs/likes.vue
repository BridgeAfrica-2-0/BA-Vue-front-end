<template>
  <div class="bazaar-product-showcase">
    <div
      v-for="product in products"
      :key="product.id"
      class="artisan-product-tile"
    >
      <!-- Like Button -->
      <button
        @click="toggleLike(product.id)"
        class="heart-engagement-trigger"
        :class="{ 'heart-engagement-trigger--active': product.isLiked }"
        aria-label="Toggle like"
      >
        <svg class="heart-icon-vector" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </button>

      <!-- Product Image Container -->
      <div class="heritage-product-imagery">
        <div class="cultural-accessories-display">
          <!-- Traditional Hat -->
          <div class="traditional-headwear-item">
            <div class="kufi-cap-base"></div>
            <div class="geometric-pattern-band"></div>
            <div class="pattern-accent-stripe"></div>
          </div>
          <!-- Handbag -->
          <div class="artisan-handbag-item">
            <div class="bag-main-body"></div>
            <div class="bag-flap-closure"></div>
            <div class="traditional-trim-detail"></div>
            <div class="bag-handle-strap"></div>
          </div>
        </div>
      </div>

      <!-- Product Details -->
      <div class="marketplace-product-info">
        <div class="vendor-location-badge">
          <img
            src="../../../assets/img/updates/icons/home.png"
            alt="Home Icon"
            width="16"
            height="16"
          />
          <span class="merchant-region-label">Bridge Africa</span>
          <div class="african-flag-emblem"></div>
        </div>
        <h3 class="artisan-product-title">Hand made set of bags and hats</h3>
        <div class="commerce-pricing-section">
          <span class="current-market-price">USD 899.00</span>
          <span class="original-retail-price">999.00</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Likes",
  data() {
    return {
      products: [
        { id: 1, isLiked: true },
        { id: 2, isLiked: true },
        { id: 3, isLiked: true },
        { id: 4, isLiked: true },
        { id: 5, isLiked: true },
        { id: 6, isLiked: true },
        { id: 7, isLiked: true },
        { id: 8, isLiked: true },
        { id: 9, isLiked: true },
        { id: 10, isLiked: true }
      ]
    };
  },
  methods: {
    toggleLike(productId) {
      const product = this.products.find(p => p.id === productId);
      if (product) {
        product.isLiked = !product.isLiked;
      }
    }
  }
};
</script>

<style scoped>
.bazaar-product-showcase {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-left: 10px; /* Add padding to reduce space from left */
  padding-right: 10px; /* Add padding to reduce space from right */
  margin-left: -7%; /* Remove any negative margin if present */
  margin-right: -7%; /* Remove any negative margin if present */
}

.artisan-product-tile {
  position: relative;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  width: 100%;
}

.artisan-product-tile:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
}

.heart-engagement-trigger {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 32px;
  height: 32px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
  backdrop-filter: blur(4px);
}

.heart-engagement-trigger:hover {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}

.heart-icon-vector {
  width: 18px;
  height: 18px;
  color: #d1d5db;
  transition: color 0.2s ease;
}

.heart-engagement-trigger--active .heart-icon-vector {
  color: #ef4444;
}

.heritage-product-imagery {
  height: 200px;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.cultural-accessories-display {
  display: flex;
  gap: 15px;
  align-items: center;
}

.traditional-headwear-item {
  position: relative;
  width: 80px;
  height: 45px;
}

.kufi-cap-base {
  width: 80px;
  height: 35px;
  background: #1f2937;
  border-radius: 40px 40px 8px 8px;
  position: relative;
}

.geometric-pattern-band {
  position: absolute;
  top: 8px;
  left: 8px;
  right: 8px;
  height: 8px;
  background: linear-gradient(
    90deg,
    #fbbf24 0%,
    #f59e0b 25%,
    #dc2626 50%,
    #7c3aed 75%,
    #2563eb 100%
  );
  border-radius: 4px;
}

.pattern-accent-stripe {
  position: absolute;
  top: 20px;
  left: 12px;
  right: 12px;
  height: 3px;
  background: #fbbf24;
  border-radius: 2px;
}

.artisan-handbag-item {
  position: relative;
  width: 70px;
  height: 55px;
}

.bag-main-body {
  width: 70px;
  height: 45px;
  background: #374151;
  border-radius: 8px;
  position: relative;
}

.bag-flap-closure {
  position: absolute;
  top: -5px;
  left: 5px;
  right: 5px;
  height: 20px;
  background: #4b5563;
  border-radius: 12px 12px 4px 4px;
  border: 2px solid #dc2626;
}

.traditional-trim-detail {
  position: absolute;
  bottom: 8px;
  left: 8px;
  right: 8px;
  height: 4px;
  background: linear-gradient(90deg, #fbbf24, #dc2626, #7c3aed);
  border-radius: 2px;
}

.bag-handle-strap {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 30px;
  height: 6px;
  background: #374151;
  border-radius: 3px;
}

.bag-handle-strap::before {
  content: "";
  position: absolute;
  top: -4px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 3px;
  background: #374151;
  border-radius: 2px;
}

.marketplace-product-info {
  padding: 16px;
}

.vendor-location-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
}

.african-flag-emblem {
  width: 16px;
  height: 12px;
  background: linear-gradient(
    to bottom,
    #000000 0%,
    #000000 33%,
    #fbbf24 33%,
    #fbbf24 66%,
    #22c55e 66%,
    #22c55e 100%
  );
  border-radius: 2px;
  position: relative;
}

.african-flag-emblem::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 6px;
  background: linear-gradient(
    to bottom,
    #dc2626 0%,
    #dc2626 50%,
    #ffffff 50%,
    #ffffff 100%
  );
  border-radius: 2px 0 0 2px;
}

.merchant-region-label {
  color: #6b7280;
  font-size: 12px;
  font-weight: 500;
}

.artisan-product-title {
  color: #111827;
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 12px 0;
  line-height: 1.4;
}

.commerce-pricing-section {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-direction: row; /* Ensure horizontal alignment */
}

.current-market-price {
  color: #111827;
  font-size: 16px;
  font-weight: 700;
}

.original-retail-price {
  color: #9ca3af;
  font-size: 14px;
  text-decoration: line-through;
}

@media (max-width: 1200px) {
  .bazaar-product-showcase {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .bazaar-product-showcase {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .bazaar-product-showcase {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 0; /* Add horizontal padding to prevent overflow */
    margin-left: -3%; /* Remove negative margin */
    margin-right: -2%; /* Remove negative margin */
    box-sizing: border-box;
  }
  .artisan-product-tile {
    border-radius: 8px;
    margin: 0;
  }
  .marketplace-product-info {
    padding: 12px;
  }
  .current-market-price {
    font-size: 16px;
  }
  .original-retail-price {
    font-size: 16px;
  }
}
</style>
