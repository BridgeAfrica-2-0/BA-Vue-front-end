<template>
  <div>
    <b-card class="border shadow">
      <span>
        <h4>
          <img
            class="img-fluid picture logo-img"
            src="@/assets/icons/network.png"
          />
          {{ $t("dashboard.NETWORKS") }}
          <h6 style="float: right" class="see-all-link">
            {{ $t("dashboard.666_result_found") }}
          </h6>
        </h4>
      </span>

      <div class="s-card">
        <b-row>
          <b-col md="6" cols="12" sm="12" class="mt-sm-2">
            <div class="people-style shadow">
              <b-row>
                <b-col md="3" cols="5" sm="5">
                  <div style="height: 100%">
                    <img
                      src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
                      width="100%"
                      height="90%"
                      class="r-image"
                    />
                  </div>
                </b-col>
                <b-col md="6" cols="7" sm="7">
                  <p class="text">
                    <strong> {{ $t("dashboard.Shipping_Network") }} </strong>
                    <br />
                    <br />
                    {{ $t("dashboard.Public") }} <br />
                    {{ $t("dashboard.20k_Members") }} <br />
                    {{ $t("dashboard.Business_Name") }} <br />
                  </p>
                </b-col>

                <b-col md="3" cols="12" sm="12">
                  <div class="s-button">
                    <b-row>
                      <b-col md="12" cols="4" sm="4" class="mt-md-2">
                        <b-button
                          block
                          size="sm"
                          class="b-background"
                          variant="primary"
                        >
                          <b-icon class="ico" icon="plus-circle"> </b-icon>
                          {{ $t("dashboard.Community") }}
                        </b-button>
                      </b-col>

                      <b-col md="12" sm="4" cols="4" class="mt-md-2">
                        <BtnCtaMessage :element="item" type="network" />
                      </b-col>

                      <b-col md="12" sm="4" cols="4" class="mt-md-2"> </b-col>
                    </b-row>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
          <b-col md="6" sm="12" class="mt-sm-2"> </b-col>
        </b-row>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  props: ["title", "image"],
};
</script>

<style scoped>
.logo-img {
  width: 40px;
}

h4 {
  font-size: 20px;
}

@media only screen and (max-width: 768px) {
  .btn {
    font-size: 10px;

    display: flex;

    padding-right: 90px;
  }

  h4 {
    font-size: 15px;
  }
}

@media only screen and (min-width: 768px) {
  .see-all-link {
    font-size: 10px;
  }

  .btn {
    font-size: 10px;

    display: flex;

    padding-right: 90px;
  }
}

.card {
  color: orange;
}

.s-button {
  align-content: center;
  text-align: center;

  padding: 15px;
}
.text {
  color: #000;
  font-size: 15px;

  text-align: left;

  margin-left: -15px;

  margin-right: -15px;
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

.ico {
  margin-right: 5px;
}

.r-image {
  border-top-left-radius: 10px;

  border-bottom-left-radius: 10px;

  border-top-right-radius: 10px;

  border-bottom-right-radius: 10px;

  width: 100%;

  height: 100%;
}

.people-style {
  border-top-left-radius: 10px;

  border-bottom-left-radius: 10px;

  border-top-right-radius: 5px;

  border-bottom-right-radius: 5px;
  margin-right: 10px;

  background: white;

  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;
}

.s-card {
  height: 450px;
  overflow: auto;
  overflow-x: hidden;
  border-radius: 10px;
}

h4 {
  color: black;
}
</style>
