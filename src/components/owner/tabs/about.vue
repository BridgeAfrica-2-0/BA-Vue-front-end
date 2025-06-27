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
            <!-- Home (black) icon SVG -->
            <span class="location-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 12L12 3l9 9"/>
                <path d="M9 21V12h6v9"/>
              </svg>
            </span>
            <div class="location-details">
              <span class="location-label">Home town</span>
              <span class="location-value">{{ profile.homeTown }}</span>
            </div>
          </div>

          <div class="location-item">
            <!-- Location (black) icon SVG -->
            <span class="location-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10.5c0 7.5-9 12-9 12s-9-4.5-9-12a9 9 0 1 1 18 0z"/>
                <circle cx="12" cy="10.5" r="3"/>
              </svg>
            </span>
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
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #ffffff;
  margin-left: -12%;
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
  width: 100%;
  max-width: 400px;
}

.location-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.location-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  background: none;
}

.home-icon {
  background-color: #ff6b35;
}

.current-icon {
  background-color: #4ade80;
}

.location-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  min-width: 0;
}

.location-label {
  font-size: 13px;
  color: #666666;
  font-weight: 400;
  min-width: 110px; /* Ensures all labels start at same point */
  text-align: left;
  display: inline-block;
}

.location-value {
  font-size: 14px;
  color: #1a1a1a;
  font-weight: 500;
  text-align: right;
  min-width: 90px; /* Ensures all values end at same point */
  display: inline-block;
  margin-left: 16px;
}

.bio-title {
  font-size: 20px;
  font-weight: 600;
  color: #1a1a1a;
  margin: 30px 0 20px 0;
}

.bio-content {
  line-height: 1.7;
  min-width: 600px;
  margin: 0 auto;
  text-align: justify; /* Ensures text is justified */
  word-break: break-word; /* Prevents overflow on long words */
  hyphens: auto; /* Adds hyphenation for better justification */
}

.bio-paragraph {
  font-size: 14px;
  color: #4a4a4a;
  margin: 0 0 16px 0;
  text-align: justify;
  word-break: break-word;
  hyphens: auto;
  letter-spacing: 0.01em;
}

.bio-paragraph:last-child {
  margin-bottom: 0;
}

/* Mobile Responsive Design */
@media (max-width: 768px) {
  .bio-content {
    min-width: 0; /* Remove fixed min-width */
    width: 100%; /* Ensure it fits container */
    padding: 0; /* Remove extra padding */
    margin: 0; /* Remove auto margin */
    box-sizing: border-box; /* Prevent overflow */
  }
  .profile-container {
    padding: 16px;
    max-width: 100%;
    margin-left: 0; /* Reset margin for mobile */
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
    max-width: 100%;
  }

  .location-item {
    gap: 10px;
  }

  .location-icon {
    width: 18px;
    height: 18px;
  }

  .location-label {
    min-width: 90px;
    font-size: 12px;
  }

  .location-value {
    min-width: 70px;
    font-size: 12px;
    margin-left: 10px;
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
  .bio-content {
    min-width: 0;
    width: 100%;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
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
