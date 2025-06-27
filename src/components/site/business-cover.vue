<!-- eslint-disable no-undef -->
<template>
  <div class="business-cover">
    <img
      src="../../assets/img/updates/business-cover.png"
      alt="Business Cover"
      class="business-cover-image"
    />
    <div class="business-hero">
      <div class="left-hero">
        <img
          src="../../assets/img/updates/business-dp.png"
          alt="Business Avatar"
          class="business-avatar"
        />
        <div class="business-info">
          <h1 class="business-name">
            Bridge Africa
            <div class="african-flag-emblem"></div>
          </h1>
          <div class="business-stats">
            <p>
              We are a business providing various products to decorate
              <a href="" style="text-decoration: underline;">Read more</a>
            </p>
            <span
              >2000 Likes |
              <img src="../../assets/img/updates/icons/stars.png" alt="Stars" />
            </span>
          </div>
        </div>
      </div>
      <div class="hero-right">
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
        <button class="follow-button">
          <svg
            class="follow-icon"
            viewBox="0 0 24 24"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          Like
        </button>
      </div>
    </div>
    <div class="container text-justify corps prof center-content wahala">
      <b-row class="">
        <b-col cols="12" class="p-3">
          <CustomTabs
            v-model="tabIndex"
            :tabs="[
              { title: 'Boutique', slot: 'boutique' },
              { title: 'Reviews', slot: 'reviews' },
              { title: $t('profileowner.About'), slot: 'about' },
              { title: $t('profileowner.Posts'), slot: 'posts' },
              { title: $t('profileowner.Media'), slot: 'media' },
              { title: $t('profileowner.Community'), slot: 'community' },
              { title: 'Network', slot: 'network' }
            ]"
            :tabListMarginLeft="'-14%'"
            :showSearch="true"
            searchPlaceholder="Search all 20 items"
          >
            <template #boutique>
              <Boutique />
            </template>
            <template #reviews>
                <Reviews />
            </template>
            <template #about>
                <About />
            </template>
            <template #posts>
                <Posts />
            </template>
            <template #media></template>
            <template #community></template>
            <template #network></template>
          </CustomTabs>
        </b-col>
      </b-row>
    </div>
    <SiteFooter />
  </div>
</template>

<script>
import SiteFooter from "./siteFooter.vue";
import CustomTabs from "./customTabs.vue";
import { mapGetters, mapMutations } from "vuex";
import Boutique from "../owner/tabs/businesses/tabs/boutique.vue";
import About from "../owner/tabs/businesses/tabs/about.vue";
import Reviews from "../owner/tabs/businesses/tabs/reviews.vue";
import Posts from "../owner/tabs/posts.vue";
export default {
  name: "BusinessCover",
  components: {
    SiteFooter,
    CustomTabs,
    Boutique,
    Reviews,
    About,
    Posts
  },
  data() {
    return {
      tabIndex: 0,
      tabs: [
        "#boutique",
        "#reviews",
        "#about",
        "#posts",
        "#media",
        "#community",
        "#network"
      ]
    };
  },
  watch: {
    $route(to, from) {
      console.log(to.hash);
      this.tabIndex = this.tabs.findIndex(tab => tab === to.hash);
    },

    tabIndex(newvalue) {
      localStorage.setItem("profileTab", newvalue);
    }
  },

  methods: {
    ...mapMutations({
      auth: "auth/profilConnected"
    }),

    goToMedia(value) {
      if (value) this.tabIndex = 2;

      console.log("go to media");
    },

    async getAuth() {
      const response = await this.$repository.share.switch(null, "reset");

      if (response.success) this.auth({ ...this.user.user, user_type: "user" });
    },

    ownerPost() {
      this.$store
        .dispatch("UserProfileOwner/ownerPost", this.url_data)
        .then(() => {
          console.log("hey yeah");
        })
        .catch(err => {
          console.log({ err: err });
        });
    }
  },
  computed: {
    ...mapGetters({
      user: "auth/user"
    })
  },

  created() {
    let loader = this.$loading.show({
      container: this.$refs.formContainer,
      canCancel: true,
      onCancel: this.onCancel,
      color: "#e75c18"
    });
    this.getAuth();

    // Always default to 0 (Likes) if nothing valid is found
    let found = 0;
    if (this.$route.hash) {
      const idx = this.tabs.findIndex(tab => tab === this.$route.hash);
      if (idx !== -1) found = idx;
    } else {
      let tab = localStorage.getItem("profileTab");
      if (tab !== null && !isNaN(Number(tab))) {
        found = Number(tab);
      }
    }
    this.tabIndex = found;

    this.$store
      .dispatch("profile/loadUserPostIntro", null)
      .then(response => {
        loader.hide();
        console.log(response);
      })
      .catch(error => {
        console.log(error);
        loader.hide();
      });
  },
  mounted() {
    this.$store
      .dispatch("profile/Tcommunity", null)
      .then(response => {})
      .catch(error => {
        console.log({ error: error });
      });
  }
};
</script>

<style scoped>
.business-hero {
  background: rgba(250, 250, 250, 1);
  padding: 35px 60px;
  display: flex;
  justify-content: space-between;
}
.business-cover {
}

.left-hero {
  display: flex;
  align-items: center;
  gap: 20px;
}
.right-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.business-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.business-name {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 24px;
  font-weight: 600;
  color: #000000;
}

.business-stats {
  display: flex;
  flex-direction: column;
  gap: 0;
  font-size: 14px;
  font-weight: 400;
  color: #000000;
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

.follow-button {
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 180px;
  text-align: center;
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
@media (max-width: 600px) {
  .business-cover {
    position: relative;
    padding-bottom: 48px; /* space for overlayed items */
  }
  .business-cover-image {
    width: 100%;
    height: 140px;
    object-fit: cover;
    display: block;
  }
  .business-hero {
    position: relative;
    background: none;
    padding: 0;
    margin-top: 0;
    display: block;
    min-height: 0;
  }
  .left-hero {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 0;
    padding-top: 0;
  }
  .business-avatar {
    position: absolute;
    left: 16px;
    top: -40px;
    width: 80px;
    height: 80px;
    border: 3px solid #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    background-color: white;
    object-fit: cover;
    z-index: 3;
  }
  .business-info {
    margin-left: 0;
    margin-top: 10px;
    padding-left: 16px;
    padding-top: 40px;
  }
  .business-name {
    font-size: 18px;
    gap: 6px;
  }
  .business-stats {
    font-size: 12px;
  }
  .hero-right {
    position: absolute;
    right: 16px;
    top: -20px;
    display: flex;
    flex-direction: row;
    gap: 12px;
    z-index: 3;
  }
  .follow-button {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    padding: 0; /* Remove extra padding */
    margin-bottom: 0;
    background: #fff;
    border: 1.5px solid #e1e5e9;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    font-size: 0; /* Prevent text from affecting layout */
    transition: background 0.2s, border 0.2s;
    text-align: center;
  }
  .follow-button .follow-icon,
  .follow-button svg {
    width: 22px !important;
    height: 22px !important;
    display: block;
    margin-left: 10px;
  }


}
</style>
