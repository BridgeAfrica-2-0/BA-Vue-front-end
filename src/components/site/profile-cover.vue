<template>
  <div class="profile-container">
    <!-- Profile Header Section -->
    <div class="profile-hero">
      <div class="cover-photo">
        <img
          :src="profile.coverImage"
          :alt="profile.name + ' cover photo'"
          class="cover-image"
        />
      </div>

      <div class="profile-info-header">
        <div class="profile-avatar-container">
          <img
            :src="profile.avatar"
            :alt="profile.name"
            class="profile-avatar"
          />
        </div>

        <div class="profile-details">
          <h1 class="profile-name">{{ profile.name }}</h1>
          <p class="profile-stats">{{ profile.communityCount }} Community</p>
        </div>

        <button class="follow-button">
          <svg
            class="follow-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
          Follow
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileCover from "../../assets/img/updates/profile-cover.png";
import Avatar from "../../assets/img/updates/avatar.png";
export default {
  name: "ProfileCover",
  data() {
    return {
      profile: {
        name: "Easter Howard",
        communityCount: 35,
        avatar: Avatar,
        coverImage: ProfileCover
      }
    };
  }
};
</script>

<style scoped>
.profile-container {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  background-color: #fafafa;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* Profile Hero Section */
.profile-hero {
  position: relative;
  background: #ffffff;
}

.cover-photo {
  width: 100%;
  height: 280px;
  overflow: hidden;
  position: relative;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.profile-info-header {
  display: flex;
  align-items: flex-end;
  padding: 0 40px 24px;
  position: relative;
  margin-top: -60px;
  z-index: 2;
}

.profile-avatar-container {
  margin-right: 20px;
  flex-shrink: 0;
}

.profile-avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #ffffff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.profile-details {
  flex: 1;
  margin-bottom: 8px;
}

.profile-name {
  font-size: 22px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 10px 0 4px 0;
}

.profile-stats {
  font-size: 16px;
  color: #666666;
  margin: 0;
  font-weight: 400;
}

.follow-button {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ffffff;
  border: 1.5px solid #e1e5e9;
  border-radius: 50px;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-bottom: 8px;
  height: fit-content;
}

.follow-button:hover {
  background: #f8f9fa;
  border-color: #d1d5db;
  transform: translateY(-1px);
}

.follow-icon {
  width: 16px;
  height: 16px;
}

/* Mobile Responsive Design */
@media (max-width: 768px) {
  .profile-container {
    border-radius: 0;
    box-shadow: none;
  }

  .cover-photo {
    height: 200px;
  }

  .profile-info-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 0 20px 20px;
    margin-top: -50px;
  }

  .profile-avatar-container {
    margin-right: 0;
    margin-bottom: 16px;
  }

  .profile-avatar {
    width: 100px;
    height: 100px;
  }

  .profile-details {
    margin-bottom: 16px;
  }

  .profile-name {
    font-size: 24px;
  }

  .profile-stats {
    font-size: 14px;
  }

  .follow-button {
    margin-bottom: 0;
  }
}

@media (max-width: 480px) {
  .cover-photo {
    height: 160px;
  }

  .profile-info-header {
    padding: 0 16px 16px;
    margin-top: -40px;
  }

  .profile-avatar {
    width: 80px;
    height: 80px;
  }

  .profile-name {
    font-size: 20px;
  }

  .follow-button {
    padding: 8px 16px;
    font-size: 13px;
  }
}
</style>
