<template>
  <section class="site-terminus">
    <footer id="bridge-terminus" style="padding: 0; margin: 0;">
      <!-- Mobile footer content (hidden on desktop) -->
      <div class="mobile-footer">
        <div
          class="mobile-footer-section"
          v-for="(section, idx) in mobileSections"
          :key="section.title"
        >
          <div class="mobile-section-header" @click="toggleSection(idx)">
            <h4 class="mobile-heading">{{ section.title }}</h4>
            <span class="dropdown-icon" :class="{ open: openSection === idx }">
              <svg width="18" height="18" viewBox="0 0 20 20">
                <polyline
                  points="6 8 10 12 14 8"
                  fill="none"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </div>
          <transition name="fade">
            <ul v-if="openSection === idx" class="mobile-menu">
              <li v-for="item in section.items" :key="item.text">
                <component
                  :is="item.isRouter ? 'router-link' : 'a'"
                  v-bind="item.isRouter ? { to: item.to } : { href: item.href }"
                  class="mobile-anchor"
                  >{{ item.text }}</component
                >
              </li>
            </ul>
          </transition>
        </div>

        <div class="mobile-social">
          <a
            href="https://x.com/bridgeafricacom"
            class="platform-link x-connect"
            target="_blank"
          >
            <b-icon icon="twitter" class="platform-emblem"></b-icon>
          </a>
          <a
            href="http://facebook.com/bridgeafricacom"
            class="platform-link facebook-connect"
            target="_blank"
          >
            <b-icon icon="facebook" class="platform-emblem"></b-icon>
          </a>
          <a
            href="https://instagram.com/bridgeafricacom"
            class="platform-link instagram-connect"
            target="_blank"
          >
            <b-icon icon="instagram" class="platform-emblem"></b-icon>
          </a>
          <a
            href="https://www.youtube.com/channel/UC8JjdBDrz7GsqnO7kpEEHvA"
            class="platform-link youtube-connect"
            target="_blank"
          >
            <b-icon icon="youtube" class="platform-emblem"></b-icon>
          </a>
          <a
            href="https://linkedin.com/company/bridgeafrica"
            class="platform-link linkedin-connect"
            target="_blank"
          >
            <b-icon icon="linkedin" class="platform-emblem"></b-icon>
          </a>
        </div>

        <div class="mobile-brand">
          <img
            src="../../assets/img/updates/logo-footer.png"
            width="200px"
            alt="Bridge Africa Logo"
          />
        </div>
      </div>

      <!-- Original desktop footer content (hidden on mobile) -->
      <div class="terminus-wrapper">
        <!-- Left section with logo (black background) -->
        <div class="brand-showcase">
          <img
            src="../../assets/img/updates/logo-footer.png"
            width="200px"
            class="brand-emblem"
            alt="Bridge Africa Logo"
          />
        </div>

        <!-- Right section with 4 columns -->
        <div class="navigation-zone">
          <div class="nav-grid-layout">
            <!-- Sale Column -->
            <div class="nav-pillar">
              <h4 class="pillar-heading">Sale</h4>
              <ul class="pillar-menu">
                <li><a href="#" class="nav-anchor">Start Selling</a></li>
                <li><a href="#" class="nav-anchor">Shipping</a></li>
                <li><a href="#" class="nav-anchor">Pricing</a></li>
              </ul>
            </div>

            <!-- Shop Column -->
            <div class="nav-pillar">
              <h4 class="pillar-heading">Shop</h4>
              <ul class="pillar-menu">
                <li><a href="#" class="nav-anchor">Shopping Questions</a></li>
              </ul>
            </div>

            <!-- About Column -->
            <div class="nav-pillar">
              <h4 class="pillar-heading">About</h4>
              <ul class="pillar-menu">
                <li>
                  <router-link class="nav-anchor" :to="{ name: 'Bridge-home' }">
                    Home
                  </router-link>
                </li>
                <li>
                  <router-link class="nav-anchor" :to="{ name: 'about' }">
                    Bridge Africa
                  </router-link>
                </li>
              </ul>
            </div>

            <!-- Follow Us Column -->
            <div class="nav-pillar">
              <h4 class="pillar-heading">Follow Us</h4>
              <div class="social-hub">
                <a
                  href="https://twitter.com/bridgeafricacom"
                  class="platform-link twitter-connect"
                  target="_blank"
                >
                  <b-icon icon="twitter" class="platform-emblem"></b-icon>
                </a>
                <a
                  href="http://facebook.com/bridgeafricacom"
                  class="platform-link facebook-connect"
                  target="_blank"
                >
                  <b-icon icon="facebook" class="platform-emblem"></b-icon>
                </a>
                <a
                  href="https://instagram.com/bridgeafricacom"
                  class="platform-link instagram-connect"
                  target="_blank"
                >
                  <b-icon icon="instagram" class="platform-emblem"></b-icon>
                </a>
                <a
                  href="https://www.youtube.com/channel/UC8JjdBDrz7GsqnO7kpEEHvA"
                  class="platform-link youtube-connect"
                  target="_blank"
                >
                  <b-icon icon="youtube" class="platform-emblem"></b-icon>
                </a>
                <a
                  href="https://linkedin.com/company/bridgeafrica"
                  class="platform-link linkedin-connect"
                  target="_blank"
                >
                  <b-icon icon="linkedin" class="platform-emblem"></b-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright section - full width bottom bar -->
      <div class="legal-strip">
        <div class="legal-content">
          <div class="region-display">
            <span class="locale-info">
              <img
                src="../../assets/img/updates/icons/us.png"
                alt="US Flag"
                class="region-flag"
              />
              United States | English (US) | $USD
            </span>
          </div>
          <div class="legal-container">
            <span class="ownership-text">
              <span style="color: #e75c18">©2025</span> Bridge Africa | All
              Rights reserved
            </span>
            <div class="legal-links">
              <a href="#" class="legal-anchor">Terms of use</a>
              <a href="#" class="legal-anchor">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "SiteFooter",
  data() {
    return {
      openSection: null,
      mobileSections: [
        {
          title: "Sale",
          items: [
            { text: "Start Selling", href: "#", isRouter: false },
            { text: "Shipping", href: "#", isRouter: false },
            { text: "Pricing", href: "#", isRouter: false }
          ]
        },
        {
          title: "Shop",
          items: [{ text: "Shopping Questions", href: "#", isRouter: false }]
        },
        {
          title: "About",
          items: [
            { text: "Home", to: { name: "Bridge-home" }, isRouter: true },
            { text: "Bridge Africa", to: { name: "about" }, isRouter: true }
          ]
        }
      ]
    };
  },
  methods: {
    toggleSection(idx) {
      this.openSection = this.openSection === idx ? null : idx;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");

.site-terminus {
  padding: 0;
  margin: 0;
  width: 100%;
  color: #ffffff;
  font-family: "Roboto", sans-serif;
}

.legal-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* Mobile footer styles */
.mobile-footer-section {
  border-bottom: 1px solid #222;
  padding: 20px;
}

.mobile-section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 0 5px 0;
}

.mobile-heading {
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5px;
}

.dropdown-icon {
  display: flex;
  align-items: center;
  transition: transform 0.3s;
}

.dropdown-icon svg {
  display: block;
  transition: transform 0.3s;
}

.dropdown-icon.open svg {
  transform: rotate(180deg);
}

/* Animate dropdown */
.fade-enter-active,
.fade-leave-active {
  transition: max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.fade-enter-to,
.fade-leave {
  max-height: 300px;
  opacity: 1;
  overflow: hidden;
}
.mobile-footer {
  display: none;
  background-color: #1e1e1e;
  padding: 0;
}

.mobile-heading {
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: "Roboto", sans-serif;
}

.mobile-menu {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left; /* Ensure left alignment */
  align-items: flex-start; /* For flex children if any */
}

.mobile-menu li {
  margin-bottom: 8px;
  text-align: left; /* Ensure left alignment for li */
}

.mobile-anchor {
  color: #cccccc;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  font-family: "Roboto", sans-serif;
}

.mobile-anchor:hover {
  color: #e75c18;
}

.mobile-social {
  display: flex;
  gap: 15px;
  margin: 20px 0;
}

.social-icon {
  color: #e75c18;
  font-size: 20px;
  text-decoration: none;
}

.mobile-brand {
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  padding: 20px;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Original desktop footer styles */
.terminus-wrapper {
  display: flex;
  min-height: 300px;
  width: 100%;
}

.brand-showcase {
  background-color: #000000;
  flex: 0 0 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
}

.brand-emblem {
  max-width: 100%;
  height: auto;
}

.navigation-zone {
  background-color: #1e1e1e;
  flex: 1;
  padding: 60px 40px 40px 40px;
}

.nav-grid-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  max-width: 1000px;
}

.nav-pillar {
  display: flex;
  flex-direction: column;
}

.pillar-heading {
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5px;
}

.pillar-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.pillar-menu li {
  margin-bottom: 12px;
}

.nav-anchor {
  color: #cccccc;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  font-family: "Roboto", sans-serif;
  line-height: 1.4;
}

.nav-anchor:hover {
  color: #e75c18;
}

.social-hub {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 5px;
}

.platform-link {
  color: #e75c18;
  font-size: 20px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.platform-link:hover {
  color: #ffffff;
  transform: translateY(-2px);
}

.platform-emblem {
  font-size: 20px;
}

/* Footer bottom bar */
.legal-strip {
  background-color: #2d2d2d;
  width: 100%;
  padding: 15px 0;
}

.legal-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
}

.region-display {
  display: flex;
  align-items: center;
}

.locale-info {
  color: #cccccc;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.region-flag {
  width: 20px;
  height: auto;
}

.legal-links {
  display: flex;
  align-items: center;
  gap: 20px;
}

.ownership-text {
  color: #cccccc;
  font-size: 13px;
  font-family: "Roboto", sans-serif;
}

.legal-anchor {
  color: #cccccc;
  text-decoration: none;
  font-size: 13px;
  transition: color 0.3s ease;
  border-bottom: 1px solid white;
}

.legal-anchor:hover {
  color: #e75c18;
}

/* Responsive Design */
@media only screen and (max-width: 1200px) {
  .brand-showcase {
    flex: 0 0 300px;
  }

  .navigation-zone {
    padding: 50px 30px 30px 30px;
  }

  .nav-grid-layout {
    gap: 30px;
  }
}

@media only screen and (max-width: 1024px) {
  .nav-grid-layout {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    row-gap: 40px;
  }

  .brand-showcase {
    flex: 0 0 250px;
  }

  .legal-content {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
}

@media only screen and (max-width: 768px) {
  .terminus-wrapper {
    flex-direction: column;
  }

  .brand-showcase {
    flex: none;
    min-height: 120px;
    padding: 30px 20px;
  }

  .navigation-zone {
    padding: 40px 20px 30px 20px;
  }

  .nav-grid-layout {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
    row-gap: 35px;
  }

  .legal-content {
    padding: 0 15px;
  }
}

@media only screen and (max-width: 600px) {
  .mobile-footer {
    display: block;
  }
  .mobile-social {
    justify-content: center;
  }
  .terminus-wrapper {
    display: none;
  }

  .legal-strip {
    padding: 15px;
  }

  .legal-content {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }

  .legal-links {
    flex-direction: row;
    gap: 10px;
  }

  .legal-container {
    flex-direction: column;
    align-items: center;
  }
}

@media only screen and (max-width: 480px) {
  .mobile-footer {
    padding: 15px 0;
  }

  .mobile-brand {
    font-size: 16px;
  }

  .legal-anchor {
    font-size: 12px;
  }

  .locale-info {
    font-size: 12px;
  }

  .ownership-text {
    font-size: 12px;
  }
}
</style>
