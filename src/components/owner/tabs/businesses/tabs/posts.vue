<template>
  <div class="social-feed">
    <!-- Post Creation Section -->
    <div class="post-creator">
      <div class="creator-header">
        <div class="avatar-gradient-border">
          <img
            :src="currentUser.avatar"
            :alt="currentUser.name"
            class="user-avatar"
          />
        </div>
        <input
          type="text"
          placeholder="Start a post"
          class="post-input"
          @click="showPostOptions = !showPostOptions"
        />
      </div>
      <div class="post-actions">
        <div class="post-actions-row">
          <button class="action-btn photo-btn">
            <img
              src="../../../assets/img/updates/icons/camera.png"
              alt="Photo Icon"
              width="16"
              height="16"
            />
            Photo
          </button>
          <button class="action-btn video-btn">
            <img
              src="../../../assets/img/updates/icons/video.png"
              alt="Video Icon"
              width="16"
              height="16"
            />
            Video
          </button>
        </div>
        <button class="add-post-btn">Add Post</button>
      </div>
    </div>

    <!-- Posts Feed -->
    <div class="posts-container">
      <div v-for="post in posts" :key="post.id" class="post-card">
        <!-- Post Header -->
        <div class="post-header">
          <div class="avatar-gradient-border">
            <img
              :src="currentUser.avatar"
              :alt="currentUser.name"
              class="user-avatar"
            />
          </div>
          <span class="author-name">{{ post.author.name }}</span>
          <button class="more-options">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
              />
            </svg>
          </button>
        </div>

        <!-- Post Image -->
        <div class="post-image-container">
          <img :src="post.image" :alt="post.caption" class="post-image" />
        </div>

        <!-- Post Actions -->
        <div class="post-actions-bar">
          <button class="action-btn-small like-btn" @click="toggleLike(post)">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              :fill="post.isLiked ? '#ff4458' : 'none'"
              :stroke="post.isLiked ? '#ff4458' : 'currentColor'"
            >
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
              />
            </svg>
            {{ post.likes }}
          </button>

          <button class="action-btn-small comment-btn">
            <img
              src="../../../assets/img/updates/icons/comment.png"
              alt="Comment Icon"
              width="16"
              height="16"
            />
            {{ post.comments }}
          </button>

          <button class="action-btn-small share-btn">
            <img
              src="../../../assets/img/updates/icons/share.png"
              alt="Share Icon"
              width="16"
              height="16"
            />
            {{ post.shares }}
          </button>

          <!-- Carousel Dots -->
          <div class="carousel-dots">
            <span
              v-for="n in post.imageCount"
              :key="n"
              :class="['dot', { active: n === 1 }]"
            ></span>
          </div>
        </div>

        <!-- Post Caption -->
        <div class="post-caption">
          <p>{{ post.caption }}</p>
        </div>

        <!-- Post Footer -->
        <div class="post-footer">
          <div class="footer-user">
            <img
              :src="post.commenter.avatar"
              :alt="post.commenter.name"
              class="small-avatar"
            />
            <span class="comment-text">{{ post.commenter.comment }}</span>
          </div>
          <div class="post-actions-right">
            <button class="heart-btn">
              <img
                src="../../../assets/img/updates/icons/heart.png"
                alt="Heart Icon"
                width="16"
                height="16"
              />
            </button>
            <button class="fire-btn">
              <img
                src="../../../assets/img/updates/icons/hands.png"
                alt="Fire Icon"
                width="16"
                height="16"
              />
            </button>
            <button class="add-btn">
              <img
                src="../../../assets/img/updates/icons/add.png"
                alt="Add Icon"
                width="16"
                height="16"
              />
            </button>
          </div>
        </div>

        <!-- Post Time -->
        <div class="post-time">
          {{ post.timeAgo }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "../../../assets/img/updates/avatar.png";
export default {
  name: "Post",
  data() {
    return {
      showPostOptions: false,
      currentUser: {
        name: "Current User",
        avatar: Avatar
      },
      posts: [
        {
          id: 1,
          author: {
            name: "Easter Howard",
            avatar: Avatar
          },
          image:
            "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=400&fit=crop",
          caption: "Get best Outfits for your next family gathering....",
          likes: 75,
          comments: 32,
          shares: 13,
          imageCount: 5,
          isLiked: true,
          commenter: {
            name: "User",
            avatar: Avatar,
            comment: "Loved it!"
          },
          timeAgo: "30 minutes ago"
        },
        {
          id: 2,
          author: {
            name: "Easter Howard",
            avatar: Avatar
          },
          image:
            "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&h=400&fit=crop",
          caption: "Get best Outfits for your next family gathering....",
          likes: 75,
          comments: 32,
          shares: 13,
          imageCount: 5,
          isLiked: true,
          commenter: {
            name: "User",
            avatar:
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            comment: "Loved it!"
          },
          timeAgo: "30 minutes ago"
        }
      ]
    };
  },
  methods: {
    toggleLike(post) {
      post.isLiked = !post.isLiked;
      post.likes += post.isLiked ? 1 : -1;
    }
  }
};
</script>

<style scoped>
.social-feed {
  max-width: 800px;
  background: #f8f9fa;
  min-height: 100vh;
  margin-left: -5.5%;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

/* Post Creator Styles */
.post-creator {
  background: white;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.creator-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}

.user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  /* Remove border-image, use a wrapper for gradient border */
  border: 2.5px solid #fff;
  background: #fff;
  position: relative;
  z-index: 1;
}

.avatar-gradient-border {
  display: inline-block;
  padding: 2.5px; /* thickness of gradient border */
  border-radius: 50%;
  background: linear-gradient(
    238.74deg,
    #c913b9 -2.57%,
    #f9373f 44.58%,
    #fecd00 91.55%
  );
  /* To ensure the border is visible */
}

.post-input {
  flex: 1;
  padding: 12px 16px;
  border: 1px solid #e1e5e9;
  background: #f8f9fa;
  font-size: 14px;
  outline: none;
  cursor: pointer;
}

.post-input:focus {
  border-color: #1877f2;
  background: white;
}

.post-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
}

.post-actions-row {
  display: flex;
  gap: 15px;
  width: auto;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;
}

.action-btn:hover {
  background: #f0f2f5;
}

.photo-btn {
  color: #42b883;
}

.video-btn {
  color: #ff6b35;
}

.add-post-btn {
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  color: white;
  padding: 10px 20px;
  border-radius: 10px;
  font-weight: 600;
  border: none;
  width: auto;
  align-self: flex-start; /* ensures left alignment */
  margin-top: 10px;
}

.add-post-btn:hover {
  background: #e07715;
}

/* Posts Container */
.posts-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Post Card Styles */
.post-card {
  background: white;
  border: 1.07px solid #0000001f;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.post-header {
  display: flex;
  align-items: center;
  padding: 16px 20px;
  gap: 12px;
}

.author-name {
  font-weight: 600;
  font-size: 15px;
  color: #1c1e21;
  flex: 1;
}

.more-options {
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  color: #65676b;
}

.more-options:hover {
  background: #f0f2f5;
}

.post-image-container {
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.post-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.post-actions-bar {
  display: flex;
  align-items: center;
  padding: 12px 10px;
  gap: 0;
}

.action-btn-small {
  display: flex;
  align-items: center;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  color: #65676b;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 8px;
  border-radius: 4px;
}

.action-btn-small:hover {
  background: #f0f2f5;
}

.like-btn.liked {
  color: #ff4458;
}

.carousel-dots {
  display: flex;
  gap: 4px;
  margin-left: auto;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #bdc1c6;
  transition: background-color 0.2s;
}

.dot.active {
  background: #1877f2;
}

.post-caption {
  padding: 0 20px 12px 20px;
  color: #1c1e21;
  font-size: 14px;
  line-height: 1.4;
}

.post-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
}

.footer-user {
  display: flex;
  align-items: center;
  gap: 8px;
}

.small-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
}

.comment-text {
  font-size: 13px;
  color: #65676b;
}

.post-actions-right {
  display: flex;
  gap: 8px;
}

.heart-btn,
.fire-btn,
.add-btn {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 4px;
  border-radius: 4px;
}

.heart-btn:hover,
.fire-btn:hover,
.add-btn:hover {
  background: #e4e6ea;
}

.post-time {
  padding: 8px 20px 16px 20px;
  color: #65676b;
  font-size: 12px;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .social-feed {
    padding: 0;
    background: white;
    margin-left: 0; /* Reset margin for mobile */
  }
  .add-post-btn {
    align-self: center !important; /* Center the button on mobile */
    margin-left: 0 !important; /* Remove any left margin */
    margin-right: 0 !important; /* Remove any right margin */
    display: block;
  }

  .post-creator {
    margin: 0 0 10px 0;
    border-radius: 0;
    box-shadow: none;
    border-bottom: 1px solid #e4e6ea;
  }

  .post-card {
    border-radius: 0;
    box-shadow: none;
    border-bottom: 8px solid #f0f2f5;
  }

  .post-card:last-child {
    border-bottom: none;
  }

  .post-actions {
    justify-content: space-between;
  }

  .add-post-btn {
    margin-left: 0;
    flex: none;
  }

  .post-header {
    padding: 12px 16px;
  }

  .post-actions-bar {
    padding: 8px 16px;
  }

  .post-caption {
    padding: 0 16px 8px 16px;
  }

  .post-footer {
    padding: 8px 16px;
  }

  .post-time {
    padding: 4px 16px 12px 16px;
  }
}

@media (max-width: 480px) {
  .creator-header {
    gap: 8px;
  }

  .user-avatar {
    width: 40px;
    height: 40px;
  }

  .post-input {
    font-size: 16px; /* Prevents zoom on iOS */
  }

  .post-actions {
    gap: 10px;
  }

  .action-btn {
    font-size: 13px;
    padding: 6px 8px;
  }
}
</style>
