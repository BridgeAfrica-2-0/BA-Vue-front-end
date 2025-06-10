<template>
  <div class="boutique-container">
    <h1 class="section-title">{{ sectionTitle }}</h1>

    <div class="boutique-card">
      <div class="boutique-logo">
        <img
          :src="boutique.logo"
          :alt="boutique.name + ' logo'"
          class="logo-image"
        />
      </div>

      <div class="boutique-content">
        <div class="boutique-header">
          <div class="boutique-name">
            {{ boutique.name }}
            <img
              :src="boutique.flagIcon"
              :alt="boutique.country + ' flag'"
              class="flag-icon"
            />
          </div>
          <button class="menu-button">
            <svg viewBox="0 0 24 24" fill="none" class="menu-icon">
              <circle cx="12" cy="5" r="2" fill="currentColor" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
              <circle cx="12" cy="19" r="2" fill="currentColor" />
            </svg>
          </button>
        </div>

        <div class="boutique-description">
          {{ boutique.description }}
          <button class="read-more-btn" @click="toggleReadMore">
            {{ showFullDescription ? "Read less" : "Read more" }}
          </button>
        </div>

        <div class="boutique-stats">
          <span class="likes-count">{{ boutique.likes }} Likes</span>
          <span class="separator">|</span>
          <div class="rating">
            <span
              v-for="star in 5"
              :key="star"
              class="star"
              :class="getStarClass(star)"
            >
              ★
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Boutique from "../../../assets/img/updates/boutique.png";
export default {
  name: "Boutique",
  data() {
    return {
      sectionTitle: "1 Boutique",
      showFullDescription: false,
      boutique: {
        logo: Boutique,
        name: "Bridge Africa",
        country: "South Africa",
        flagIcon: "https://flagcdn.com/w40/za.png",
        description: "We are a business providing various products to decorate",
        fullDescription:
          "We are a business providing various products to decorate your home and office spaces with beautiful, high-quality items sourced from across Africa.",
        likes: 2000,
        rating: 4.5
      }
    };
  },
  methods: {
    toggleReadMore() {
      this.showFullDescription = !this.showFullDescription;
    },
    getStarClass(starNumber) {
      const rating = this.boutique.rating;
      if (starNumber <= Math.floor(rating)) {
        return "filled";
      } else if (starNumber === Math.ceil(rating) && rating % 1 !== 0) {
        return "half";
      }
      return "empty";
    }
  }
};
</script>

<style scoped>
.boutique-container {
  max-width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: #000000;
  margin: 0 0 16px 0;
  padding: 0 20px;
  text-align: left; /* Ensure left alignment */
}
.boutique-card {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: #ffffff;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 20px;
  margin: 0 20px;
  min-height: 120px;
}

.boutique-logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  border: 1px solid #e5e7eb;
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.boutique-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.boutique-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.boutique-name {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
  font-weight: 700;
  color: #000000;
}

.flag-icon {
  width: 24px;
  height: auto;
  border-radius: 2px;
}

.menu-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #6b7280;
  flex-shrink: 0;
}

.menu-button:hover {
  color: #374151;
}

.menu-icon {
  width: 20px;
  height: 20px;
}

.boutique-description {
  font-size: 14px;
  color: #374151;
  line-height: 1.4;
}

.read-more-btn {
  background: none;
  border: none;
  color: #000000;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  margin-left: 4px;
  text-decoration: underline;
  font-size: 14px;
  display: inline;
}

.read-more-btn:hover {
  color: #1f2937;
}

.boutique-stats {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
}

.likes-count {
  font-size: 14px;
  font-weight: 600;
  color: #000000;
}

.separator {
  font-size: 14px;
  color: #6b7280;
  font-weight: 400;
}

.rating {
  display: flex;
  align-items: center;
  gap: 1px;
}

.star {
  font-size: 16px;
  color: #d1d5db;
}

.star.filled {
  color: #fbbf24;
}

.star.half {
  background: linear-gradient(90deg, #fbbf24 50%, #d1d5db 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Mobile Responsive Design */
@media (max-width: 768px) {
  .section-title {
    font-size: 20px;
    padding: 0 16px;
    margin-bottom: 12px;
  }

  .boutique-card {
    margin: 0 16px;
    padding: 16px;
    gap: 12px;
    min-height: 100px;
  }

  .boutique-logo {
    width: 60px;
    height: 60px;
  }

  .boutique-name {
    font-size: 16px;
  }

  .flag-icon {
    width: 20px;
  }

  .boutique-description {
    font-size: 13px;
  }

  .read-more-btn {
    font-size: 13px;
  }

  .likes-count {
    font-size: 13px;
  }

  .separator {
    font-size: 13px;
  }

  .star {
    font-size: 14px;
  }

  .boutique-content {
    gap: 6px;
  }
}

/* Very small screens */
@media (max-width: 480px) {
  .section-title {
    font-size: 18px;
    padding: 0 12px;
  }

  .boutique-card {
    margin-left: -2px;
    padding-right: 9px;
    flex-direction: column;
    gap: 10px;
  }

  .boutique-logo {
    width: 50px;
    height: 50px;
  }

  .boutique-name {
    font-size: 15px;
  }

  .boutique-description {
    font-size: 12px;
  }

  .boutique-stats {
    gap: 6px;
  }

  .likes-count {
    font-size: 12px;
  }

  .separator {
    font-size: 12px;
  }

  .star {
    font-size: 13px;
  }
}
</style>
