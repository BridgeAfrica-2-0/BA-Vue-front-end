<template>
  <div class="main">
    <div class="splide" v-if="!business_info.cover.length == 0">
      <splide :options="options" class="banner r-image">
        <splide-slide v-for="cover in business_info.cover" :key="cover.id">
          <img :src="cover.media_url" class="r-image" />
        </splide-slide>
      </splide>
    </div>

    <div v-else class="splide">
      <splide :options="options" class="banner r-image">
        <splide-slide>
          <img src="@/assets/img/Business 1.jpg" class="r-image" />
        </splide-slide>

        <splide-slide>
          <img src="@/assets/img/business 2.jpg" class="r-image" />
        </splide-slide>

        <splide-slide>
          <img src="@/assets/img/business 3.png" class="r-image" />
        </splide-slide>
      </splide>
    </div>

    <b-button class=" float-right see-all">
      See All
    </b-button>

    <b-row class="mt-4 desktop container-fluid">
      <b-col>
        <b-row class="profile">
          <div>
            <img class="logo" :src="business_info.logo_path" />
          </div>
          <div class="d-inline-block ml-4 float-left name-block">
            <b-link>
              <h5 class="font-weight-bolder name">{{ business_info.name }}</h5>
            </b-link>
            <p>
              <br />
              {{ business_info.community }} Community
            </p>
          </div>
        </b-row>
      </b-col>
      <b-col cols="6">
        <div class="float-right">
          <b-button class="community size" size="sm">
            <i class="fas fa-user-plus  fa-lg btn-icon "></i>
            <span>Community</span></b-button
          >
          <b-button class="message ml-1 size" size="sm">
            <i class="fas fa-envelope fa-lg btn-icon "></i>
            <span>Message</span></b-button
          >
          <b-button class="direction ml-1 size" variant="primary" size="sm">
            <i class="fas fa-map-marked-alt fa-lg btn-icon "></i>
            <span>Direction</span></b-button
          >
          <b-dropdown class="ml-2  options dot-btn mt-2 mt-sm-2 mt-md-0 " no-caret variant="outline-primary">
            <template #button-content>
              <b-icon-three-dots></b-icon-three-dots>
            </template>
            <b-dropdown-item>
              <b-icon icon="flag" variant="primary"></b-icon>
              Report</b-dropdown-item
            >
          </b-dropdown>
        </div>
      </b-col>
    </b-row>
    <div class="mobile">
      <b-row>
        <b-col>
          <b-row>
            <div>
              <img class="logo" :src="business_info.logo_path" />
            </div>
            <div class="d-inline-block mt-4 ml-4 float-left texts">
              <h6 class="font-weight-bolder name">{{ business_info.name }}</h6>
              <p class="details">
                <!-- www.bridgeafrica.com <br /> -->
                {{ business_info.community }} Community
              </p>
            </div>
          </b-row>
        </b-col>
        <b-col cols="2">
          <b-button class="community size" variant="primary">
            <i class="fas fa-user-plus  fa-lg btn-icon "></i>
            <span>Community</span></b-button
          >
        </b-col>
      </b-row>
    </div>
    <div class="mb-1 m-btn">
      <b-button class="message m-fol"> <i class="fas fa-envelope fa-lg btn-icon "></i> <span>Message</span> </b-button>

      <b-button class="direction ml-1 m-msg size" variant="primary">
        <i class="fas fa-map-marked-alt fa-lg btn-icon "></i>
        <span>Direction</span></b-button
      >

      <b-dropdown class="ml-1 options dot-btn mt-1 mt-sm-2 mt-md-0 " no-caret variant="outline-primary">
        <template #button-content>
          <b-icon-three-dots></b-icon-three-dots>
        </template>
        <b-dropdown-item>
          <b-icon icon="flag" variant="primary"></b-icon>
          Report</b-dropdown-item
        >
      </b-dropdown>
    </div>
    <div class="body">
      <b-row>
        <b-col cols="12" class="p-0">
          <b-tabs lazy content-class="mt-3 p-0" fill pills>
            <b-tab title="Home"><HomePage /></b-tab>
            <b-tab title="About"><About /></b-tab>
            <b-tab title="Media"><Media /></b-tab>
            <b-tab title="Market"><MarketPlace /></b-tab>
            <b-tab title="Networks"><Networks /></b-tab>
            <b-tab title="Community"><Community /></b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import HomePage from '../businessf/tabs/businessHome';
import About from './tabs/about';
import Media from './tabs/media';
import MarketPlace from './tabs/marketPlace';
import Community from './tabs/memberNetwork';
import Networks from './tabs/networks';

export default {
  name: 'Home',
  components: {
    HomePage,
    About,
    Media,
    MarketPlace,
    Community,
    Networks,
  },

  data() {
    return {
      url_data: null,
      options: {
        rewind: true,
        autoplay: true,
        perPage: 3,
        pagination: false,

        type: 'loop',
        perMove: 1,

        breakpoints: {
          '760': {
            perPage: 1,
            gap: '0rem',
          },
          '992': {
            perPage: 2,
            gap: '1rem',
          },
        },
      },
    };
  },

  computed: {
    business_info() {
      return this.$store.state.businessOwner.businessInfo;
    },
  },
  created() {
    this.url_data = this.$route.params.id;
    this.businessInfo();
  },

  mounted() {
    console.log(this.url_data);

    this.CommunityBusiness();

    this.CommunityPeople();

    this.businessCommunityTotal();
    this.ownerPost();
  },
  methods: {
    businessInfo() {
      this.$store
        .dispatch('businessOwner/businessInfo', this.url_data)
        .then(() => {
          console.log('hey yeah');
        })
        .catch(err => {
          console.log({ err: err });
        });
    },

    CommunityBusiness() {
      this.$store
        .dispatch('businessOwner/CommunityBusiness', this.url_data)
        .then(() => {
          console.log('hey yeah');
        })
        .catch(err => {
          console.log({ err: err });
        });
    },

    CommunityPeople() {
      this.$store
        .dispatch('businessOwner/CommunityPeople', this.url_data)
        .then(() => {
          console.log('hey yeah');
        })
        .catch(err => {
          console.log({ err: err });
        });
    },

    businessCommunityTotal() {
      this.$store
        .dispatch('businessOwner/businessCommunityTotal', this.url_data)
        .then(() => {
          console.log('hey yeah');
        })
        .catch(err => {
          console.log({ err: err });
        });
    },

    ownerPost() {
      this.$store
        .dispatch('businessOwner/ownerPost', this.url_data)
        .then(() => {
          console.log('hey yeah');
        })
        .catch(err => {
          console.log({ err: err });
        });
    },
  },
};
</script>

<style scoped>
.images {
  display: flex;
  width: 100%;
}

.body {
  margin: 63px;
  margin-top: 10px;
}
.profile {
  position: relative;
  left: 52px;
  top: -34px;
}
.see {
  margin-left: 120px;
  background-color: #fff;
  color: black;
  border: none;
}
.r-image {
  height: 426px;
  object-fit: cover;
  width: 100%;
  background-size: contain;
}

.main {
  width: 100%;
  overflow-x: none;
}
.logo {
  height: 120px;
  width: 120px;
  position: relative;
  top: 8px;
}
.m-btn {
  display: flex;
  margin-left: 15px;
}
.btn {
  position: relative;
  z-index: 5;
}
img {
  width: 100%;
  height: 426px;
}
.slides {
  display: flex;
}

p {
  font-family: 'Open Sans Helvetica';
}
span {
  font-size: 16px;
  margin-left: 4px;
  font-family: 'Open Sans Helvetica';
}
p {
  font-family: 'Open Sans Helvetica';
  font-size: 14px;
}
.btns {
  position: relative;
  left: 75%;
}
.m-btn {
  display: none;
}
.photo-btns {
  margin-left: 80%;
  margin-top: -50px;
}
.cnt-btn {
  color: white;
}
.mobile {
  display: none;
}

.see-all:hover {
  background-color: rgba(220, 220, 220, 0.398);
  color: #fff;
  border: solid 2px white;
}
.row {
  margin: 10px;
}
.txt {
  color: #fff;
}
.size {
  width: 133px;
  height: 38px;
}

.name {
  position: relative;
  top: 11px;
  font-size: 20px;
  font-family: 'Open Sans Helvetica';
}

.name-block {
  position: relative;
  top: 40px;
}
.community {
  color: #fff;
  background-color: #ffd200;
  border: none;
  border-radius: none;
}
.community:hover {
  background-color: #b39500;
}
.message {
  color: #fff !important;
  background-color: #32a400;
  border: none;
  border-radius: none;
}
.message:hover {
  background-color: #006400;
}
.direction {
  color: #fff;
  border: none;
  border-radius: none;
}
.direction:hover {
  background-color: #cc4d0d;
}

.drop {
  height: 38px;
  background-color: #ee7600;
}

.dot-btn {
  height: px;
  margin-left: 3px;
}

@media only screen and (max-width: 768px) {
  .body {
    margin: 2px;
  }

  .dot-btn {
    height: 33px;
    margin-left: 3px;
  }

  .desktop {
    display: none;
  }
  .see-all {
    width: 91px;
    height: 38px;
    position: relative;
    top: 35px;
  }
  .row {
    width: 100%;
    margin-left: -5px;
  }
  span {
    font-size: 13px;
    margin-left: 2px;
  }
  .logo {
    height: 64px;
    width: 64px;
    position: relative;
    top: 6px;
  }
  .size {
    width: 112px;
    height: 38px;
  }
  .r-image {
    height: 180px;
    object-fit: cover;
    width: 100%;

    background-size: contain;
  }

  img {
    height: 180px;
  }
  .btn-mobile {
    display: flex;
  }
  .community {
    display: flex;
    margin-left: -70px;
    margin-top: 40px;
  }
  .name {
    position: relative;
    font-size: 16px;
    font-family: 'Open Sans Helvetica';
  }
  p {
    font-family: 'Open Sans Helvetica';
    font-size: 12px;
  }
  .m-fol {
    width: 160px;
  }
  .m-msg {
    width: 150px;
  }
  .m-btn {
    display: block;
  }
  .mobile {
    display: block;
  }

  .avat {
    margin-top: 20px;
  }
  .details {
    font-size: 10px;
  }
  .texts {
    position: relative;
    left: -15px;
    top: -20px;
  }
  .more {
    position: relative;
    top: 20px;
  }
  .options {
    margin-right: -8px;
  }
  .photo-btns {
    display: none;
  }
}

@media (min-width: 760px) {
  .profile-name {
    font-size: 20px;

    margin-left: 20px;
  }

  .community {
    font-size: 14px;
  }

  .avatar-header-icon {
    width: 2em;
    height: 2em;
    position: absolute;
    left: 100px;
    top: 100px;
    background-color: #e75c18;
    color: white;
    border-radius: 24px;
    padding: 6px;
  }

  .logo_avat {
    width: 120px;
    height: 120px;
  }
  .banner {
    height: 426px;
  }

  .edit-btn {
    width: 146px;
    height: 40px;
    background-color: #e4c229;
    border-color: #e4c229;
  }

  .edit-btn:hover {
    border-color: #e4c229;
  }

  .edit-btn:focus {
    border-color: #e4c229;
  }

  .edit-btn:active {
    border-color: #e4c229;
  }

  .dot-btn {
    height: 40px;
    margin-left: 3px;
  }
}

.round-coner {
  border-radius: 4px;
}

@media (min-width: 768px) {
  .r-image {
    height: 486px;
    object-fit: cover;
    width: 100%;

    background-size: contain;
  }

  .logo-container {
    padding-left: 73px;
    padding-right: 63px;
  }

  .see-all {
    height: 48px;
    width: 174px;
    position: relative;
    margin-top: -100px;
    left: -20px;
    background-color: transparent;
    color: black;
    border: solid 2px black;
    font-weight: bold;
  }
  .see-all:hover {
    background-color: rgba(220, 220, 220, 0.398);
    color: #fff;
    border: solid 2px white;
  }
}

@media (max-width: 760px) {
  .r-image {
    height: 180px;
    object-fit: cover;
    width: 100%;

    background-size: contain;
  }

  .see-all {
    height: 38px;
    width: 91px;
    position: relative;
    margin-top: -50px;
    left: -20px;
    background-color: transparent;
    color: black;
    border: solid 2px black;
    font-weight: bold;
  }
  .see-all:hover {
    background-color: rgba(220, 220, 220, 0.398);
    color: #fff;
    border: solid 2px white;
  }
}
</style>
