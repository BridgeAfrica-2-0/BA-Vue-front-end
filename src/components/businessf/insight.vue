<template>
  <div>
    <b-row>
      <b-col>
        <b-card class="b-shadow">
          <b-row>
            <b-col cols="8">
              <h6 class="card-title mb-0">
                {{ $t("businessf.New_Notifications") }}
                <p class="s-text">{{ $t("businessf.From") }} (Jan 1 - Jan 8)</p>
              </h6>
            </b-col>
            <b-col>
              <b-card-text class="f-right">
                <b-icon
                  v-b-tooltip.hover
                  title="Tooltip content goes in here"
                  icon="exclamation-circle-fill"
                  variant="dark"
                ></b-icon>
              </b-card-text>
            </b-col>
          </b-row>
          <br />
          <b-row>
            <b-col>
              <h3 class="mb-2 m-up">
                3,897
                <p class="s-text">{{ $t("businessf.Total_Posts") }}: 79</p>
              </h3>
            </b-col>
            <b-col cols="8">
              <img
                fluid-grow
                class="i-size"
                src="../../assets/img/curv.png"
                alt=""
              /> </b-col
          ></b-row>
        </b-card>
      </b-col>

      <b-col>
        <b-card class="b-shadow">
          <b-row>
            <b-col cols="8">
              <h6 class="card-title mb-0">
                {{ $t("businessf.New_Notifications") }}
                <p class="s-text">{{ $t("businessf.From") }} (Jan 1 - Jan 8)</p>
              </h6>
            </b-col>
            <b-col>
              <b-card-text class="f-right">
                <b-icon
                  v-b-tooltip.hover
                  title="Tooltip content goes in here"
                  icon="exclamation-circle-fill"
                  variant="dark"
                ></b-icon>
              </b-card-text>
            </b-col>
          </b-row>
          <br />
          <b-row>
            <b-col>
              <h3 class="mb-2 m-up">
                3,897
                <p class="s-text">{{ $t("businessf.Total_Posts") }}: 79</p>
              </h3>
            </b-col>
            <b-col cols="8">
              <img
                fluid-grow
                class="i-size"
                src="../../assets/img/pchart.png"
                alt=""
              /> </b-col
          ></b-row>
        </b-card>
      </b-col>

      <b-col>
        <b-card class="b-shadow">
          <b-row>
            <b-col cols="8">
              <h6 class="card-title mb-0">
                {{ $t("businessf.New_Notifications") }}
                <p class="s-text">{{ $t("businessf.From") }} (Jan 1 - Jan 8)</p>
              </h6>
            </b-col>
            <b-col>
              <b-card-text class="f-right">
                <b-icon
                  v-b-tooltip.hover
                  title="Tooltip content goes in here"
                  icon="exclamation-circle-fill"
                  variant="dark"
                ></b-icon>
              </b-card-text>
            </b-col>
          </b-row>
          <br />
          <b-row>
            <b-col>
              <h3 class="mb-2 m-up">
                3,897
                <p class="s-text">{{ $t("businessf.Total_Posts") }}: 79</p>
              </h3>
            </b-col>
            <b-col cols="8">
              <img
                fluid-grow
                class="i-size"
                src="../../assets/img/ggraph.png"
                alt=""
              /> </b-col
          ></b-row>
        </b-card>
      </b-col>
    </b-row>

    <br />
  </div>
</template>

<script>
export default {
  name: "insight",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped>
.s-text {
  margin-top: -1px;
  font-size: 13px;
}

.m-up {
  margin-top: -30px;
}

.f-left {
  float: left;
}

.f-right {
  float: right;
}

.i-size {
  overflow: hidden;
  vertical-align: middle;

  margin-top: -30px;
}

.b-shadow {
  box-shadow: 0 0 10px 0 rgba(183, 192, 206, 0.2);

  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid #f2f4f9;
  border-radius: 0.25rem;
}

.card-title {
  color: #000;
  margin-bottom: 1.2rem;
  font-family: "Overpass";
}
</style>
