<template>
  <div>
    <b-container fluid="xl" class="text-justify">
      <b-row class="mt-2">
        <b-col cols="12" class="my-auto">
          <p class="float-left m-0 p-0">
            <img
              src="@/assets/img/logo_bridge_africa.png"
              class="w-50 h-50 m-0 mr-3"
              alt="Kitten"
            />
            <span class="my-auto d-inline-block head-text">
              Template Preview
            </span>
          </p>
          <p class="float-right">
            <b-row>
              <b-col cols="11" class="text-right">
                <p class="m-0 p-0">Template Name goes here</p>
                <p class="m-0 p-0 tag">Premium</p>
              </b-col>
              <b-col cols="1" class="text-left m-0 p-0 my-auto">
                <b-icon-x font-scale="2" class=""></b-icon-x>
              </b-col>
            </b-row>
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12" class="m-0 p-0">
          <img
            src="https://business.bridgeafrica.info/assets/img/portfolio/preview1.png"
            alt="image1"
            class="img-size"
          />
        </b-col>
      </b-row>
      <b-row class="p-0">
        <b-col class="ml-0">
          <img
            src="https://business.bridgeafrica.info/assets/img/portfolio/preview2.png"
            alt="image2"
            class="img-size"
          />
        </b-col>
        <b-col class="m-1">
          <img
            src="https://business.bridgeafrica.info/assets/img/portfolio/preview3.png"
            alt="image3"
            class="img-size"
          />
        </b-col>
        <b-col class="mr-0">
          <img
            src="https://business.bridgeafrica.info/assets/img/portfolio/preview4.png"
            alt="image4"
            class="img-size"
          />
        </b-col>
      </b-row>
      <b-row class="my-3">
        <b-col cols="12" class="m-0 p-0">
          <img
            src="https://business.bridgeafrica.info/assets/img/portfolio/preview5.png"
            alt="image1"
            class="img-size"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "templateView",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.head-text {
  font-family: inherit;
  font-weight: 500;
  color: inherit;
  font-size: 30px;
}

.tag {
  color: #e75c18 !important;
}

.img-size {
  width: inherit;
  height: inherit;
}
</style>
