<template>
  <div class="profile-container">
    <div class="profile-content">
      <!-- Header Section -->
      <div class="profile-header">
        <h1 class="profile-title">About Easter Howard</h1>
      </div>

      <!-- Bio Section -->
      <div class="bio-section">
         <!-- Location Info -->
        <div class="location-info">
          <div class="location-item">
            <img
              src="../../../assets/img/updates/icons/home-orange.png"
              alt="Location Icon"
              class="location-icon"
            />
            <div class="location-details">
              <span class="location-label">Home town</span>
              <span class="location-value">{{ profile.homeTown }}</span>
            </div>
          </div>

          <div class="location-item">
            <img
              src="../../../assets/img/updates/icons/location-orange.png"
              alt="Location Icon"
              class="location-icon"
            />
            <div class="location-details">
              <span class="location-label">Current Location</span>
              <span class="location-value">{{ profile.currentLocation }}</span>
            </div>
          </div>
        </div>
        <h2 class="bio-title">Bio</h2>
        <div class="bio-content">
          <p
            v-for="(paragraph, index) in profile.bio"
            :key="index"
            class="bio-paragraph"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      profile: {
        homeTown: "Geneva",
        currentLocation: "Buea",
        bio: [
          "Lorem ipsum dolor sit amet consectetur. Vel nunc sit morth sagittis lectus. Vel venenatis ornet turpis odio elementum. Cras integer eget ultricies sagittis sit aliquam facilisis. Convallis et sagittis rhoncusan elit condimentum pretium.",
          "Lorem ipsum dolor sit amet consectetur. Vel nunc sit morth sagittis lectus. Vel venenatis ornet turpis odio elementum. Cras integer eget ultricies sagittis sit aliquam facilisis. Convallis et sagittis rhoncusan elit condimentum pretium.",
          "Lorem ipsum dolor sit amet consectetur. Vel nunc sit morth sagittis lectus. Vel venenatis ornet turpis odio elementum. Cras integer eget ultricies sagittis sit aliquam facilisis. Convallis et sagittis rhoncusan elit condimentum pretium."
        ]
      }
    };
  }
};
</script>

<style scoped>
.profile-container {
  margin: 0 auto;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #ffffff;
}

.profile-content {
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.profile-header {
  margin-bottom: 40px;
  width: 70%;
}

.profile-title {
  font-size: 24px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 24px 0;
  line-height: 1.3;
}

.location-info {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 15px;
}

.location-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.home-icon {
  background-color: #ff6b35;
}

.current-icon {
  background-color: #4ade80;
}

.location-details {
  display: flex;
  gap: 100px;
}

.location-label {
  font-size: 13px;
  color: #666666;
  font-weight: 400;
}

.location-value {
  font-size: 14px;
  color: #1a1a1a;
  font-weight: 500;
}

.bio-section {
  padding-top: 20px;
}

.bio-title {
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 0 0 20px 0;
}

.bio-content {
  line-height: 1.6;
}

.bio-paragraph {
  font-size: 14px;
  color: #4a4a4a;
  margin: 0 0 16px 0;
  text-align: justify;
}

.bio-paragraph:last-child {
  margin-bottom: 0;
}

/* Mobile Responsive Design */
@media (max-width: 768px) {
  .profile-container {
    padding: 16px;
    max-width: 100%;
  }

  .profile-content {
    flex-direction: column;
  }

  .profile-title {
    font-size: 20px;
    margin-bottom: 20px;
  }

  .location-info {
    flex-direction: column;
    gap: 16px;
    margin-bottom: 12px;
  }

  .location-item {
    gap: 10px;
  }

  .location-icon {
    width: 14px;
    height: 14px;
  }

  .location-label {
    font-size: 18px;
  }

  .location-value {
    font-size: 13px;
  }

  .bio-section {
    padding-top: 24px;
  }

  .bio-title {
    font-size: 18px;
    margin-bottom: 16px;
  }

  .bio-paragraph {
    font-size: 13px;
    margin-bottom: 14px;
  }

  .profile-header {
    margin-bottom: 32px;
  }
}

/* Extra small screens */
@media (max-width: 480px) {
  .profile-container {
    padding: 12px;
  }

  .profile-title {
    font-size: 18px;
  }

  .bio-title {
    font-size: 16px;
  }

  .bio-paragraph {
    font-size: 12px;
    text-align: left;
  }
}
</style>
