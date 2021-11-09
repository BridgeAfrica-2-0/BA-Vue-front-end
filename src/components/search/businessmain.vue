<template>
  <div>
    <div class="people-style shadow">
      <b-row>
        <b-col md="3" cols="5" sm="5">
          <div style="height: 100%;">
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
            <strong> {{$t("search.Super_Car_ltd")}} </strong> <br />
            <strong> {{$t("search.Category")}} : </strong> {{$t("search.Car_marketing")}} <br />
            <strong> {{$t("search.Community")}} : </strong> 20k <br />
            <strong> {{$t("search.Location")}} :</strong> {{$t("search.cameroon")}} <br />
            <strong> {{$t("search.Keyword")}} :</strong> {{$t("search.car")}},{{$t("search.swag")}} <br />

            <strong>{{$t("search.About")}}:</strong> {{$t("search.super_best_car_seller_in_the_world")}}
            adipisicing elit. <b-link>{{$t("search.Read_More")}}</b-link>
          </p>
        </b-col>

        <b-col md="3" cols="12" sm="12">
          <div class="s-button">
            <b-row>
              <b-col md="12" sm="4" cols="4" class="mt-md-2">
                <b-button
                  block
                  size="sm"
                  class="b-background"
                  variant="primary"
                >
                  <b-icon class="ico" icon="plus-circle"> </b-icon> {{$t("search.Community")}}
                </b-button>
              </b-col>

              <b-col md="12" sm="4" cols="4" class="mt-md-2">
                <b-button
                  block
                  size="sm"
                  class="b-background"
                  variant="primary"
                >
                  <b-icon class="ico" icon="chat"> </b-icon> {{$t("search.Message")}}
                </b-button>
              </b-col>

              <b-col md="12" sm="4" cols="4" class="mt-md-2">
                <b-button
                  block
                  size="sm"
                  class="b-background"
                  variant="primary"
                >
                  <b-icon icon="direction" class="ico"> </b-icon> {{$t("search.Direction")}}
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
  props: ["title", "image"]
};
</script>

<style scoped>
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

.btn {
  font-size: 13px;

  display: flex;
}

.ico {
  margin-right: 5px;
}

.r-image {
  border-radius: 8px;
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

    margin-right: 8px;

    padding: 7px;
  }

  .text {
    color: #000;
    font-size: 10px;

    text-align: left;

    margin-left: -15px;

    margin-right: -15px;
  }

  .btn {
    font-size: 8px;

    display: flex;

    padding-right: 60px;
  }

  h4 {
    font-size: 15px;
  }
}
</style>
