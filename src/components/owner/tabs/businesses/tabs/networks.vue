<template>
  <div class="textile-artisans-grid">
    <div
      v-for="(item, index) in artisanItems"
      :key="index"
      class="artisan-card"
    >
      <div class="card-image">
        <img :src="item.image" :alt="item.title" />
        <div class="logo-overlay">
          <div class="logo-text">GIZ</div>
          <div class="logo-subtext">Djou Haut</div>
        </div>
      </div>
      <div class="card-content">
        <h3 class="card-title">{{ item.title }}</h3>
        <p class="card-community">{{ item.community }}</p>
        <p class="card-location">{{ item.location }}</p>
        <p class="card-description">
          {{ item.description }}
          <a href="#" class="read-more-link">{{ item.readMoreText }}</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Networks",
  data() {
    return {
      artisanItems: [
        {
          title:
            "Les Artisans Textile Du Cameron/ The Textile Artisans of Cameron",
          community: "917 Community",
          location: "Yaounde, Center, Cameroon",
          description: "ProCoton is a GIZ-sponsored project that...",
          readMoreText: "Read More",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
        },
        {
          title:
            "Les Artisans Textile Du Cameron/ The Textile Artisans of Cameron",
          community: "917 Community",
          location: "Yaounde, Center, Cameroon",
          description: "ProCoton is a GIZ-sponsored project that...",
          readMoreText: "Read More",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
        },
        {
          title:
            "Les Artisans Textile Du Cameron/ The Textile Artisans of Cameron",
          community: "917 Community",
          location: "Yaounde, Center, Cameroon",
          description: "ProCoton is a GIZ-sponsored project that...",
          readMoreText: "Read More",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
        },
        {
          title:
            "Les Artisans Textile Du Cameron/ The Textile Artisans of Cameron",
          community: "917 Community",
          location: "Yaounde, Center, Cameroon",
          description: "ProCoton is a GIZ-sponsored project that...",
          readMoreText: "Read More",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
        },
        {
          title:
            "Les Artisans Textile Du Cameron/ The Textile Artisans of Cameron",
          community: "917 Community",
          location: "Yaounde, Center, Cameroon",
          description: "ProCoton is a GIZ-sponsored project that...",
          readMoreText: "Read More",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
        },
        {
          title:
            "Les Artisans Textile Du Cameron/ The Textile Artisans of Cameron",
          community: "917 Community",
          location: "Yaounde, Center, Cameroon",
          description: "ProCoton is a GIZ-sponsored project that...",
          readMoreText: "Read More",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
        }
      ]
    };
  }
};
</script>

<style scoped>
.textile-artisans-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  padding: 20px;
  max-width: 1500px;
  margin-left: -13%;
  column-gap: 250px;
}

.artisan-card {
  display: flex;
  overflow: hidden;
  justify-content: space-between;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.artisan-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  width: 120px;
  height: 120px;
  flex-shrink: 0;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo-overlay {
  position: absolute;
  top: 8px;
  left: 8px;
  background: rgba(255, 255, 255, 0.9);
  padding: 4px 8px;
  border-radius: 4px;
  backdrop-filter: blur(10px);
}

.logo-text {
  font-size: 14px;
  font-weight: bold;
  color: #2c5aa0;
  line-height: 1.2;
}

.logo-subtext {
  font-size: 10px;
  color: #8b7355;
  font-style: italic;
  line-height: 1.2;
}

.card-content {
  padding: 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.3;
}

.card-community {
  font-size: 12px;
  color: #666;
  margin: 0 0 4px 0;
  line-height: 1.2;
}

.card-location {
  font-size: 12px;
  color: #666;
  margin: 0 0 8px 0;
  line-height: 1.2;
}

.card-description {
  font-size: 12px;
  color: #666;
  margin: 0;
  line-height: 1.4;
  flex: 1;
}

.read-more-link {
  color: #2c5aa0;
  text-decoration: underline;
  font-weight: 500;
}

.read-more-link:hover {
  color: #1e3d6f;
}

/* Responsive design */
@media (max-width: 768px) {
  .textile-artisans-grid {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    gap: 16px;
    padding: 16px;
    margin-left: 0;
  }

  .artisan-card {
    flex-direction: column;
  }

  .card-image {
    width: 100%;
    height: 200px;
  }

  .card-content {
    padding: 16px;
  }

  .card-title {
    font-size: 16px;
  }

  .card-community,
  .card-location,
  .card-description {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .textile-artisans-grid {
    padding: 12px;
    gap: 12px;
  }

  .card-content {
    padding: 12px;
  }
}
</style>
