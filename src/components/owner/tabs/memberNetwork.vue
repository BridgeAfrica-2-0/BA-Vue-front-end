<template>
  <div class="community-profile">
    <!-- Header Section -->
    <div class="community-header">
      <h1 class="community-title">35 Community</h1>

      <!-- Stats Tabs -->
      <div class="stats-tabs">
        <div class="tab active">
          <span class="tab-label">People</span>
          <span class="tab-count">12</span>
        </div>
        <div class="tab">
          <span class="tab-label">Businesses</span>
          <span class="tab-count">12</span>
        </div>
        <div class="tab">
          <span class="tab-label">Network</span>
          <span class="tab-count">11</span>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <div class="tabs-nav">
        <div class="nav-tab active">
          <span>Followers</span>
        </div>
        <div class="nav-tab">
          <span>Following</span>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="content-section">
      <!-- Post Items -->
      <div class="post-item" v-for="post in posts" :key="post.id">
        <div class="post-header">
          <div class="user-info">
            <img :src="post.avatar" :alt="post.username" class="user-avatar" />
            <div class="user-details">
              <span class="username">{{ post.username }}</span>
              <span class="post-date">{{ post.date }}</span>
            </div>
          </div>
          <div class="post-menu">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="1" fill="currentColor" />
              <circle cx="19" cy="12" r="1" fill="currentColor" />
              <circle cx="5" cy="12" r="1" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Following",
  data() {
    return {
      posts: [
        {
          id: 1,
          username: "Jhon",
          date: "May 02, 2025",
          avatar:
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNGNUY1RjUiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIxNiIgcj0iNiIgZmlsbD0iIzk5OTk5OSIvPgo8cGF0aCBkPSJNMTAgMzBjMC00IDQtOCAxMC04czEwIDQgMTAgOCIgZmlsbD0iIzk5OTk5OSIvPgo8L3N2Zz4K"
        },
        {
          id: 2,
          username: "Jhon",
          date: "May 02, 2025",
          avatar:
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNGNUY1RjUiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIxNiIgcj0iNiIgZmlsbD0iIzk5OTk5OSIvPgo8cGF0aCBkPSJNMTAgMzBjMC00IDQtOCAxMC04czEwIDQgMTAgOCIgZmlsbD0iIzk5OTk5OSIvPgo8L3N2Zz4K"
        },
        {
          id: 3,
          username: "Jhon",
          date: "May 02, 2025",
          avatar:
            "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNGNUY1RjUiLz4KPGNpcmNsZSBjeD0iMjAiIGN5PSIxNiIgcj0iNiIgZmlsbD0iIzk5OTk5OSIvPgo8cGF0aCBkPSJNMTAgMzBjMC00IDQtOCAxMC04czEwIDQgMTAgOCIgZmlsbD0iIzk5OTk5OSIvPgo8L3N2Zz4K"
        }
      ]
    };
  }
};
</script>

<style scoped>
.community-profile {
  max-width: 1200px;
  margin-left: -12%;
  background: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

.community-header {
  padding: 0;
  border-bottom: none;
}

.community-title {
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  margin: 0 0 20px 0;
  padding: 0;
}

.stats-tabs {
  display: flex;
  gap: 0;
  margin-bottom: 40px;
}

.tab {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 20px 0 0;
  cursor: pointer;
  border-bottom: none;
}

.tab.active .tab-label {
  color: #000000;
  border-bottom: 2px solid #000000;
}

.tab-label {
  font-size: 14px;
  font-weight: 400;
  color: #666666;
  padding-bottom: 8px;
}

.tab-count {
  background: #ff6b35;
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  padding: 2px 6px;
  border-radius: 50%;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.tabs-nav {
  display: flex;
  margin-bottom: 20px;
}

.nav-tab {
  cursor: pointer;
  padding: 0 0 12px 0;
  margin-right: 40px;
  min-width: 260px;
  text-align: center;
}

.nav-tab.active {
  border-bottom: 2px solid #000000;
}

.nav-tab span {
  font-size: 14px;
  font-weight: 400;
  color: #000000;
}

.content-section {
  padding: 0;
}

.post-item {
  border: 1px solid rgba(0, 0, 0, 1);
  border-radius: 8px;
  margin-bottom: 16px;
  background: #ffffff;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.user-details {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.username {
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  line-height: 1.2;
}

.post-date {
  font-size: 12px;
  font-weight: 400;
  color: #666666;
  line-height: 1.2;
}

.post-menu {
  cursor: pointer;
  color: #666666;
  padding: 4px;
  border-radius: 4px;
}

.post-menu:hover {
  background: #f5f5f5;
}

@media screen and (max-width: 768px) {
  .nav-tab {
    min-width: 170px;
  }
  .community-profile{
    margin-left: 0; /* Reset margin for mobile */
  }
}
</style>
