<template>
  <div class="album-gallery">
    <!-- Albums Grid Section (5 items per row on desktop) -->
    <div class="albums-grid-section">
      <div class="albums-grid">
        <!-- Create Album Card as first grid item -->
        <div class="album-card create-album-card" @click="createAlbum">
          <div class="create-icon">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </div>
          <h3 class="create-title">Create Album</h3>
        </div>
        <!-- Album Cards -->
        <div
          v-for="album in albums"
          :key="album.id"
          class="album-card"
          @click="openAlbum(album)"
        >
          <div class="album-cover">
            <img :src="album.coverImage" :alt="album.title" />
          </div>
          <div class="album-info">
            <span class="item-count">{{ album.itemCount }} Items</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Media1 from '../../../assets/img/updates/media1.png'
export default {
  name: "AlbumGallery",
  data() {
    return {
      albums: [
        {
          id: 1,
          title: "Bridge Africa",
          description: "Community development projects across the continent",
          coverImage:
           Media1,
          itemCount: 3
        },
        {
          id: 2,
          title: "DIY Crafts",
          description: "Handmade projects and creative tutorials",
          coverImage:
            Media1,
          itemCount: 3
        },
        {
          id: 3,
          title: "Starry Night Collection",
          description: "Inspired by Van Gogh's masterpiece",
          coverImage: Media1,
          itemCount: 3
        },
        {
          id: 4,
          title: "Modern Art Gallery",
          description: "Contemporary artistic expressions",
         coverImage: Media1,
          itemCount: 3
        }
      ]
    };
  },
  methods: {
    createAlbum() {
      console.log("Creating new album...");
      // Add your create album logic here
    },
    openAlbum(album) {
      console.log("Opening album:", album.title);
      // Add your open album logic here
    }
  }
};
</script>

<style scoped>
.album-gallery {
  width: 100%;
  min-height: 100vh;
  padding: 0rem;
  box-sizing: border-box;
}

/* Albums Grid Section */
.albums-grid-section {
  width: 100%;
}

.albums-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 27px;
  align-items: stretch;
}

/* Album Card (including Create Album) */
.album-card {
  border-radius: 9px;
  background: none;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 320px;
  justify-content: flex-start;
  border: none;
}

.album-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.13);
}

.create-album-card {
  background: rgba(231, 91, 23, 0.06);
  border-radius: 20px;
  padding: 3rem 2rem 2rem 2rem;
  text-align: center;
  border: 2px dashed #ff6500;
  height: 100%;
  min-height: 320px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  grid-column: auto;
}

.create-album-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  background: rgba(255, 255, 255, 1);
}

.create-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E75B17;
  transition: all 0.3s ease;
}

.create-album-card:hover .create-icon {
  transform: rotate(90deg) scale(1.1);
}

.create-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #333;
  background: linear-gradient(135deg, #ff6500, #ff8f40);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Album Cover Image */
.album-cover {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 2rem;
}

.album-cover img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.3s ease;
  background: #f5f5f5;
}

.album-card:hover .album-cover img {
  transform: scale(1.05);
}

/* Album Info */
.album-info {
  padding: 1.2rem 1.2rem 1.2rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  flex: 1;
}

.item-count {
  color: black;
  font-size: 0.95rem;
  font-weight: 600;
  margin-top: 0.2rem;
  display: inline-block;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .albums-grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }
}
@media (max-width: 900px) {
  .albums-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
  }
}
@media (max-width: 768px) {
  .album-gallery {
    padding: 1rem;
  }
  .albums-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .album-card,
  .create-album-card {
    min-height: 220px;
    height: 100%;
  }
  .album-cover {
    height: 100%;
  }
  .album-info {
    padding: 0.8rem;
  }
  .create-icon {
    width: 60px;
    height: 60px;
  }
  .create-title {
    font-size: 1.2rem;
  }
}
@media (max-width: 480px) {
  .album-gallery {
    padding: 0.5rem;
  }
  .albums-grid {
    gap: 21px;
  }
  .album-card,
  .create-album-card {
    min-height: 160px;
  }
  .album-cover {
    height: 100%;
  }
  .album-info {
    padding: 0.5rem;
  }
  .create-title {
    font-size: 1rem;
  }
}
</style>