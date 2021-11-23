<template>
  <div>
    <div class="people-style shadow">
      <b-row>
        <b-col md="3" xl="3" lg="3" cols="5" sm="3">
          <div class="center-img">
            <splide :options="options" class="r-image">
              <splide-slide cl>
                <img src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
                  class="r-image" />
              </splide-slide>
            </splide>
          </div>
        </b-col>
        <b-col md="5" cols="7" lg="9" xl="5" sm="5">
          <p class="textt text">
            <strong class="title"> {{ member.name }} </strong> <br />
            {{ member.category[0].name }}
            <br />
            {{ member.communityNum }}
            {{ $t('network.Community') }} <br />

            <!-- <span class="location">
              <b-icon-geo-alt class="ico"></b-icon-geo-alt> {{ member.location_description }}
            </span> -->
            <!-- <br /> -->
            <span v-if="member.about_business.length < 55">{{ member.about_business }}</span>
            <span v-else>{{ member.about_business.substring(0, 55) + '...' }} <b-link>Read More</b-link></span>
          </p>
        </b-col>






        <b-col lg="12" xl="4" md="4" cols="12" sm="4">
          <div class="s-button">
            <b-row>
              <b-col
                md="12"
                lg="4"
                xl="12"
                sm="12"
                cols="4"
                class="mt-2 text-center"
              >
                <b-button
                  block
                  size="sm"
                  class="b-background shadow"
                  variant="primary"
                  @click="$emit('handleFollow', member)"
                >
                  <i :class="member.is_follow ? 'fas fa-user-minus fa-lg btn-icon':'fas fa-user-plus fa-lg btn-icon'"></i>
                  <span class="btn-com">{{ $t('network.Community') }}</span>
                </b-button>

              </b-col>

              <b-col md="12" lg="4" xl="12" sm="12" cols="4" class="mt-2 text-center">
                <b-button block size="sm" class="b-background shadow" variant="primary" @click="cta(member)">
                  <i class="fas fa-envelope fa-lg btn-icon"></i>
                  <span class="btn-text">{{ $t('network.Message') }}</span>
                </b-button>


              </b-col>

              <b-col md="12" lg="4" xl="12" sm="12" cols="4" class="mt-2 text-center">
                <b-button block size="sm" class="b-background shadow" variant="primary">
                  <i class="fas fa-map-marked-alt fa-lg btn-icon"></i>
                  <span class="btn-text">{{ $t('network.Direction') }}</span>
                </b-button>



              </b-col>
            </b-row>

          </div>
        </b-col>
      </b-row>
    </div>

  </div>
</template>

<script>
export default {
  props: ['member'],
  data() {
    return {
      options: {
        rewind: true,
        autoplay: true,
        perPage: 1,
        pagination: false,
        type: 'loop',
        perMove: 1,
      },
    };
  },
  computed: {
    activeAccount() {
      return this.$store.getters['auth/profilConnected'];
    },
  },

  methods: {
    cta(data) {
      console.log(data);
      this.$store.commit('businessChat/setSelectedChat', data);
      
      let path = '';
      let msgTabId = null;
      if (this.activeAccount.user_type == 'business') {
        msgTabId = 1;
        path = '/business_owner/' + this.activeAccount.id;
      } else if (this.activeAccount.user_type == 'network') {
        msgTabId = 2;
        path = '/network/' + this.activeAccount.id;
      } else {
        msgTabId = 0;
        path = '/messaging';
      }

      this.$router.push({ path: `${path}`, query: { tabId: 1, msgTabId: msgTabId } });
      // this.$router.push({ path: `/business_owner/${this.activeAccount.id}`, query: { tabId: 1, msgTabId: 1 } });
    },
  },
};
</script>

<style scoped>
  @media only screen and (min-width: 768px) {
    .btn-text {
      margin-left: 8px;
    }

    .btn-com {
      margin-left: 4px;
    }

    .btn-icon {
      margin-top: 3px;
    }

    .center-img {
      margin-right: -60px;
    }
  }

  @media only screen and (max-width: 768px) {

    .btn-icon {
      margin-top: 3px;
    }

    .btn-text {
      margin-left: 5px;
    }

    .btn-com {
      margin-left: 3px;
    }
  }

  .btnpngs {
    width: 20px;
    margin-right: 5px;
  }

  .btn {
    border-radius: 5px;
  }

  .card {
    color: orange;
  }

  .s-button {
    align-content: center;
    text-align: center;
    padding: 15px;
  }

  @media only screen and (max-width: 768px) {
    .a-flex {
      margin-right: -15px;
    }

    .s-button {

      padding: 15px;
      margin-top: -15px;
    }

    .title {
      font-size: 16px;
      color: black;

      line-height: 35px;
      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    .textt {
      color: #000;

      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: normal;
      font-size: 12px;
      line-height: 30px;
      color: rgba(117, 114, 128, 1);
      text-align: left;
      Font-weight: normal;
      Line-height: 20px;
      font-style: normal;
      padding: 1px;
      text-align: left;
      margin-left: -30px;
      margin-right: -5px;
      line-height: 25px;
    }

    .location {
      margin-bottom: 30px;
    }

    .btn {
      padding-top: 6px;
      font-size: 10px;
      Height: 28px;
      Width: 85px
    }

    .r-image {
      border-radius: 8px;
      Height: 100px;
      Width: 100px
    }
  }

  @media only screen and (min-width: 768px) {
    .title {
      font-size: 20px;
      color: black;

      line-height: 35px;
      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    .textt {
      color: #000;

      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: normal;
      font-size: 14px;
      line-height: 30px;
      color: rgba(117, 114, 128, 1);
      text-align: left;
      Font-weight: normal;
      Line-height: 20px;
      font-style: normal;
      padding: 1px;
      text-align: left;
      margin-left: 30px;
      margin-right: -5px;
      line-height: 25px;
    }

    .location {
      margin-bottom: 30px;
    }

    .btn {
      padding-top: 6px;
      Height: 38px;
      Width: 123px;
      font-size: 14px;
    }

    .r-image {
      border-radius: 8px;
      Height: 160px;
      Width: 160px
    }
  }

  .stock {
    color: green;
  }

  .b1 {
    width: 100px;
    margin-left: -20px;
  }

  .b2 {
    width: 120px;
    margin-left: -15px;
  }

  .btn {

    display: flex;
  }

  .ico {
    margin-right: 5px;
  }

  @media only screen and (min-width: 768px) {
    .people-style {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      background: white;
      background-color: #fff;
      background-clip: border-box;
      border: 1px solid rgba(0, 0, 0, 0.125);
      margin-bottom: 10px;


      margin-right: 8px;

      padding: 7px;
    }
  }

  @media only screen and (max-width: 768px) {
    .people-style {
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      background: white;
      background-color: #fff;
      background-clip: border-box;
      border: 1px solid rgba(0, 0, 0, 0.125);
      margin-bottom: 10px;

    }

    .btn {

      display: flex;
      padding-right: 60px;
    }

    h4 {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 520px) {
    .btn {
      display: flex;

    }
  }

  @media only screen and (min-width: 992px) and (max-width: 1265px) {


    .textt {
      color: #000;
      font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      font-weight: normal;
      font-size: 14px;
      line-height: 30px;
      color: rgba(117, 114, 128, 1);
      text-align: left;
      Font-weight: normal;
      Line-height: 20px;
      font-style: normal;
      padding: 1px;
      text-align: left;
      margin-left: 55px;
      margin-right: -5px;
      line-height: 25px;
    }
  }
</style>