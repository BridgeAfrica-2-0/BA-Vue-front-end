<template>
  <div>
    <b-card title="" header-tag="header" footer-tag="footer">
      <h6 class="mb-2">
        <b>{{ $t("businessf.Intro") }}</b>
      </h6>

      <b-card-text>
        <p>
          <b-icon icon="briefcase-fill" class="primary h_icon"></b-icon>
          <span v-for="cat in business_intro.category" :key="cat.id">
            {{ cat.name }}
          </span>
        </p>
        <p>
          <b-icon icon="search" class="primary h_icon"></b-icon>
          <span v-for="(keyword, index) in business_intro.keywords" :key="index"
            >{{ keyword }},
          </span>
        </p>
        <p>
          <b-icon icon="geo-alt-fill" class="primary h_icon"></b-icon>Mokolo,
          {{ $t("businessf.Yaounde") }},
          {{ $t("businessf.Cameroon") }}
        </p>
<<<<<<< HEAD
        <p><b-icon icon="search" class="primary"></b-icon>  
        	<span v-for="(keyword, index) in business_intro.keywords" :key="index"
						>{{ keyword }},
					</span>
          <!-- {{business_intro.keywords}}  -->
        </p>
=======
>>>>>>> 4d6df2670bce3f8f1b9cdc061b702bdce641c396
        <p>
          <b-icon icon="link" class="primary h_icon"></b-icon>www.business.com
        </p>
        <p>
          <b-icon icon="people-fill" class="primary h_icon"></b-icon>
          {{ business_intro.community }}
          {{ $t("businessf.Community") }}
        </p>
        <p>
          <b-icon icon="telephone-fill" class="primary h_icon"></b-icon>
          {{ business_intro.phone }}
        </p>
        <p>
          <b-icon icon="envelope-fill" class="primary h_icon"></b-icon>
          {{ business_intro.email }}
        </p>
        <p>
          <b-icon icon="clock" class="primary h_icon"></b-icon>
          <b-link> {{ $t("businessf.Open_now") }}</b-link>
          <br />
          <b-dropdown size="sm" variant="transperent">
            <template #button-content> 10:00AM - 7:00PM </template>
            <b-dropdown-item> 10:00AM - 7:00PM</b-dropdown-item>
          </b-dropdown>
        </p>
      </b-card-text>

      <GmapMap
        :center="business_intro.position"
        :zoom="12"
        style="width: 100%; height: 250px"
      >
        <GmapMarker :position="business_intro.position" />
      </GmapMap>
    </b-card>
  </div>
</template>

<script>
export default {
  computed: {
    business_intro() {
      return this.$store.state.businessOwner.businessInfo;
    },
  },
};
</script>

<style scoped>
.h_icon {
  font-size: 28px;
  margin-right: 10px;
}
</style>
