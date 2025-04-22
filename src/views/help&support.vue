<template>
    <div class="help-support">
      <!-- Header -->
      <header class="top-header">
        <div class="top-nav">
          <div class="left-nav">
            <div class="logo">
                    <a class="d-inline-block align-top mt-1 float-left mobile1_1" href="/">
              <img src="@/assets/logo.png" alt="" class="balogo desktop mobile1" loading="lazy" />
            </a>
            </div>
          </div>
          <div class="right-nav">
            <div class="sign-in">
              <a href="#" class="nav-link" @click.prevent="showHowItWorks">{{ $t("general.how_BA_works") }}</a>
            </div>
          </div>
        </div>
      </header>
  
      <!-- Secondary Navigation -->
      <nav class="secondary-nav">
        <div class="secondary-nav-content">
          <a href="#" class="nav-link" @click.prevent="showHowItWorks">{{ $t("general.how_BA_works") }}</a>
          <a href="/contact" class="nav-link">{{ $t("general.contact_us") }}</a>
          <a href="#help-section" class="nav-link">{{ $t("general.help") }}</a>
          <a href="#faq-section" class="nav-link">FAQ</a>
          <a href="/login" class="nav-link">{{ $t("general.sing_in") }}</a>
        </div>
      </nav>
  
      <!-- Hero Section -->
      <section class="hero">
        <!-- <div class="guide-info">
          <div class="guide-name">MAXINE</div>
          <div class="guide-title">Bridge Africa Guide</div>
        </div> -->
        <div class="hero-content" style="display: flex; align-items: center; gap: 2rem; flex-direction: row-reverse;">
          <div class="hero-image" style="flex: 1; text-align: center;">
            <img src="https://entrepreneurship.babson.edu/wp-content/uploads/2022/11/GEM-women-report-1200.jpg" 
                  alt="Women Entrepreneurship Report" 
                  style="max-width: 100%; max-height: 400px; object-fit: contain; border-radius: 8px;">
          </div>
          <div class="hero-text" style="flex: 1;">
            <div class="guides">{{ $t("general.BA_guides") }}</div>
            <h1>{{ $t("general.help_center") }}</h1>
            <p>{{ $t("general.help_guide") }}</p>
            <!-- <div class="search-container" style="margin-top: 1.5rem; max-width: 600px; margin-left: 0;">
              <input type="text" class="search-box" placeholder="What can we help with?">
              <button class="search-button">
                <span class="search-icon">🔍</span>
              </button>
            </div> -->
          </div>
        </div>
      </section>
  
      <!-- Platform Features Section -->
      <section class="platform-features">
        <div class="features-container">
          <h2>{{ $t("general.platform_features") }}</h2>
          <p class="features-description">
            {{ $t("general.feature_detail") }}
          </p>
          <div class="features-grid">
            <div class="feature-card">
              <img src="https://cdn-icons-png.flaticon.com/512/565/565547.png" alt="Mobile Phone Icon">
              <h3> {{ $t("general.feature1") }}</h3>
              <p> {{ $t("general.feature1_detail") }}</p>
            </div>
            <div class="feature-card">
              <img src="https://cdn-icons-png.flaticon.com/512/622/622669.png" alt="Magnifying Glass Icon">
              <h3>{{ $t("general.feature2") }}</h3>
              <p>{{ $t("general.feature2_detail") }}</p>
            </div>
            <div class="feature-card">
              <img src="https://cdn-icons-png.flaticon.com/512/3064/3064197.png" alt="Briefcase Icon">
              <h3>{{ $t("general.feature3") }}</h3>
              <p>{{ $t("general.feature3_detail") }}</p>
            </div>
            <div class="feature-card">
              <img src="https://cdn-icons-png.flaticon.com/512/484/484167.png" alt="Globe Icon">
              <h3>{{ $t("general.feature4") }}</h3>
              <p>{{ $t("general.feature4_detail") }}</p>
            </div>
            <div class="feature-card">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="Chart Icon">
              <h3>{{ $t("general.feature5") }}</h3>
              <p>{{ $t("general.feature5_detail") }}</p>
            </div>
            <div class="feature-card">
              <img src="https://cdn-icons-png.flaticon.com/512/1046/1046857.png" alt="Graduation Cap Icon">
              <h3>{{ $t("general.feature6") }}</h3>
              <p>{{ $t("general.feature6_detail") }}</p>
            </div>
            <div class="feature-card">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="Whatsapp Icon">
              <h3>{{ $t("general.feature7") }}</h3>
              <p>{{ $t("general.feature7_detail") }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Help and Support Section -->
      <main id="help-section" class="content">
        <div class="help-container">
          <h2>{{ $t("general.Help_and_Support") }}</h2>
          <div class="help-sections">
            <div class="help-card">
              <h3>
                <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" alt="Phone Icon" class="support-icon">
                {{ $t("general.h1") }}
              </h3>
              <p>{{ $t("general.h1_detail") }}</p>
            </div>
            <div class="help-card">
              <h3>
                <img src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png" alt="Book Icon" class="support-icon">
                {{ $t("general.h2") }}
              </h3>
              <p>{{ $t("general.h2_detail") }}</p>
            </div>
            <div class="help-card">
              <h3>
                <img src="https://cdn-icons-png.flaticon.com/512/727/727245.png" alt="Video Icon" class="support-icon">
                {{ $t("general.h3") }}
              </h3>
              <p>{{ $t("general.h3_detail") }}</p>
            </div>
            <div class="help-card">
              <h3>
                <img src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="Community Icon" class="support-icon">
                {{ $t("general.h4") }}
              </h3>
              <p>{{ $t("general.h4_detail") }}</p>
            </div>
          </div>
        </div>
      </main>
  
      <!-- FAQ Section -->
      <section id="faq-section" class="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div class="faq-grid">
          <div class="faq-card">
            <h3>{{ $t("general.q1") }}</h3>
            <p>{{ $t("general.q1_detail") }}</p>
          </div>
          <div class="faq-card">
            <h3>{{ $t("general.q2") }}</h3>
            <p>{{ $t("general.q2_detail") }}</p>
          </div>
          <div class="faq-card">
            <h3>{{ $t("general.q3") }}</h3>
            <p>{{ $t("general.q3_detail") }}</p>
          </div>
          <div class="faq-card">
            <h3>{{ $t("general.q4") }}</h3>
            <p>{{ $t("general.q4_detail") }}</p>
          </div>
          <div class="faq-card">
            <h3>{{ $t("general.q5") }}</h3>
            <p>{{ $t("general.q5_detail") }}</p>
          </div>
          <div class="faq-card">
            <h3>{{ $t("general.q6") }}</h3>
            <p>{{ $t("general.q6_detail") }}</p>
          </div>
        </div>
      </section>
  
      
      <!-- Contact Button -->
      <div class="contact-container">
        <a href="/contact" class="contact-button">
          <span class="contact-icon">💬</span>
          {{ $t("general.contact_us") }}
        </a>
      </div>
      <section >
      <div class="container mt-1 mt-md-5 mb-2 mb-md-5 pb-2 pb-md-5  pt-3 pt-md-5 " data-aos="zoom-in-up"
        data-aos-offset="70px" data-aos-duration="1500"></div>
    </section>
    <SiteFooter/>
      <!-- How It Works Modal -->
      <div v-if="isModalOpen" class="modal-overlay" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-modal" @click="closeModal">×</button>
          <h2>How Bridge Africa Works</h2>
          <div class="modal-columns">
            <div class="modal-column">
              <h3>For Businesses & Entrepreneurs</h3>
              <ul>
                <li>✅ <strong>Sign Up:</strong> Create your account and set up your business profile</li>
                <li>✅ <strong>Customize Your Space:</strong> Personalize your digital presence</li>
                <li>✅ <strong>Connect:</strong> Network with businesses and investors</li>
                <li>✅ <strong>Grow:</strong> Utilize our business tools</li>
                <li>✅ <strong>Scale:</strong> Expand to global markets</li>
              </ul>
            </div>
            <div class="modal-column">
              <h3>For Professionals & Freelancers</h3>
              <ul>
                <li>✅ <strong>Create Your Profile:</strong> Showcase your skills and experience</li>
                <li>✅ <strong>Build Your Network:</strong> Connect with peers and clients</li>
                <li>✅ <strong>Discover Opportunities:</strong> Access job listings</li>
                <li>✅ <strong>Enhance Your Skills:</strong> Participate in training</li>
                <li>✅ <strong>Track Your Progress:</strong> Monitor your growth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import SiteFooter from "../components/home/updatedSiteFooter";
  export default {
    components: {
    SiteFooter,
    },
    name: "helpAndSupport",
    data() {
      return {
        isModalOpen: false
      };
    },
    methods: {
      showHowItWorks() {
        this.isModalOpen = true;
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
      },
      closeModal() {
        this.isModalOpen = false;
        document.body.style.overflow = 'auto'; // Enable scrolling when modal is closed
      }
    }
  };
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  .balogo {
    width: 165px;
  }
  .help-support {
    background-color: #f5f6f7;
    color: #000000;
    line-height: 1.6;
  }
  
  /* Header Styles */
  .top-header {
    background-color: white;
    padding: 0.75rem 1.5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .top-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .left-nav {
    display: flex;
    align-items: center;
  }
  
  .logo {
    font-size: 1.25rem;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
  
  .right-nav {
    display: flex;
    align-items: center;
  }
  
  .nav-link {
    margin-left: 1.5rem;
    text-decoration: none;
    color: #000000;
    font-weight: 500;
  }
  
  .sign-in {
    display: flex;
    align-items: center;
  }
  
  /* Secondary Navigation */
  .secondary-nav {
    background-color: white;
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #eee;
    position: sticky;
    top: 56px;
    z-index: 99;
  }
  
  .secondary-nav-content {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .secondary-nav .nav-link {
    margin-right: 2rem;
    margin-left: 0;
    text-decoration: none;
    color: #000000;
    font-weight: 500;
    padding: 0.5rem 0;
  }
  
  /* Hero Section */
  .hero {
  
    padding: 2rem 1.5rem;
    position: relative;
    overflow: hidden;
  }
  
  .hero-content {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .hero-text {
    max-width: 600px;
  }
  
  .hero h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #000000;
  }
  
  .guides {
    color: #000000;
    font-weight: normal;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
  
  .hero p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
  
  .search-container {
    position: relative;
  }
  
  .search-box {
    width: 100%;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .search-button {
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 50px;
    background-color: #111;
    border: none;
    color: white;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .search-icon {
    font-size: 1.2rem;
  }
  
  .guide-info {
    position: absolute;
    top: 1rem;
    right: 1rem;
    text-align: right;
  }
  
  .guide-name {
    font-weight: bold;
  }
  
  .guide-title {
    font-size: 0.9rem;
  }
  
  /* Platform Features */
  .platform-features {
    background: #ffffff;
    padding: 3rem 1.5rem;
    margin: 2rem 0;
  }
  
  .features-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .platform-features h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #000000;
  }
  
  .features-description {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 2rem;
    font-size: 1.1rem;
  }
  
  .features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .feature-card {
    text-align: center;
    padding: 1.5rem;
    border-radius: 8px;
    background: #ffffff;
  }
  
  .feature-card img {
    width: 2.5rem;
    margin-bottom: 1rem;
    filter: brightness(0) saturate(100%) invert(0%);
  }
  
  .feature-card h3 {
    color: #000000;
    margin-bottom: 0.5rem;
  }
  
  /* Help Section */
  .content {
    /* background: #ffffff; */
  }
  
  .help-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1.5rem;
  }
  
  .content h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #000000;
  }
  
  .help-sections {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
  }
  
  .help-card {
    text-align: center;
    padding: 1.5rem;
    border-radius: 8px;
    background: white;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s, box-shadow 0.2s;
  }
  
  .help-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  }
  
  .support-icon {
    width: 1.5rem;
    vertical-align: middle;
    margin-right: 0.5rem;
    filter: brightness(0) saturate(100%) invert(0%);
  }
  
  /* FAQ Section */
  .faq-section {
    max-width: 1200px;
    margin: 3rem auto;
    padding: 0 1.5rem;
    position: relative;
  }
  
  .faq-section h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #000000;
  }
  
  .faq-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 1.5rem;
  }
  
  .faq-card {
    background: white;
    border-radius: 8px;
    padding: 1.5rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .faq-card h3 {
    color: #000000;
    margin-bottom: 1rem;
  }
  
  /* Chat and Contact */
  .chat-button {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: #000000;
    color: white;
    border: none;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    z-index: 10;
  }
  
  .contact-container {
    text-align: center;
    margin: 3rem auto;
    max-width: 600px;
  }
  
  .contact-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    color: #000000;
    border: 2px solid #000000;
    border-radius: 50px;
    padding: 0.75rem 1.5rem;
    font-weight: bold;
    text-decoration: none;
    font-size: 1rem;
  }
  
  .contact-icon {
    margin-right: 0.5rem;
    font-size: 1.2rem;
  }
  
  /* Footer */
  .footer {
    background-color: #000000;
    color: white;
    padding: 2rem 1.5rem;
    margin-top: 3rem;
  }
  
  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
  }
  
  .footer h4 {
    margin-bottom: 1rem;
  }
  
  .footer ul {
    list-style-type: none;
  }
  
  .footer a {
    color: #ccc;
    text-decoration: none;
    display: block;
    margin-bottom: 0.5rem;
  }
  
  .footer a:hover {
    color: white;
  }
  
  /* Modal */
  .modal-overlay {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
    z-index: 1000;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    border-radius: 8px;
    padding: 2rem;
    max-width: 800px;
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    position: relative;
  }
  
  .close-modal {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
  
  .modal-content h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #000000;
  }
  
  .modal-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  
  .modal-column {
    background: #f5f6f7;
    border-radius: 8px;
    padding: 1.5rem;
  }
  
  .modal-column h3 {
    color: #000000;
    margin-bottom: 1rem;
  }
  
  .modal-column ul {
    list-style-type: none;
  }
  
  .modal-column li {
    margin-bottom: 1rem;
  }
  
  /* Responsive */
  @media (max-width: 768px) {
    .balogo {
    width: 100px;
  }
    .hero-content {
      flex-direction: column !important;
    }
    
    .hero-image {
      display: none;
    }
    
    .modal-columns {
      grid-template-columns: 1fr;
    }
    
    .secondary-nav-content {
      overflow-x: auto;
      white-space: nowrap;
      padding-bottom: 0.5rem;
    }
    
    .features-grid,
    .help-sections,
    .faq-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>