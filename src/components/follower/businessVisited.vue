<template>
  <div>
    <b class="business">Business Visited</b>

    <div class="people-style shadow">
      <b-row>
        <b-col md="3" cols="5" sm="5">
          <div style="height: 100%;">
            <img
              src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
              class="r-image"
            />
          </div>
        </b-col>
        <b-col md="6" cols="7" sm="7">
          <p class="text">
            <strong> <span class="b-name">Largo Electro</span> </strong>
            <br />
            Electronics . 1k Community <br />
            Yaounde <br />
            My business is an electronic blab la bla
            <b-link class="link"> <u>Read More</u> </b-link>
          </p>
        </b-col>

        <b-col md="3" cols="12" sm="12">
          <div class="s-button">
            <b-row>
              <b-col md="12" sm="4" cols="4" class="mt-md-2">
                <b-button
                  block
                  size="sm"
                  class="b-background g-button"
                  variant="primary"
                >
                  <b-icon class="ico" icon="plus-circle"> </b-icon>
                  <span class="txt-btn"> Community</span>
                </b-button>
              </b-col>

              <b-col md="12" sm="4" cols="4" class="mt-md-2">
                <b-button
                  block
                  size="sm"
                  class="g-button"
                  variant="primary"
                  to="messaging"
                >
                  <b-icon class="ico" icon="chat"> </b-icon>
                  <span class="txt-btn"> Message</span>
                </b-button>
              </b-col>

              <b-col md="12" sm="4" cols="4" class="mt-md-2">
                <b-button
                  block
                  size="sm"
                  class=" g-button m-r"
                  variant="primary"
                >
                  <b-icon class="ico" icon="geo-alt"> </b-icon>
                  <span class="txt-btn"> Direction</span>
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
  props: ["title", "image"],
};
</script>

<style scoped>
.card {
  color: orange;
}
.g-button {
  width: 133px;
  height: 38px;
  font-family: "Open Sans Helvetica";
  font-size: 16px;
}
.g-button:hover {
  background-color: #ee7600;
  border: none;
}

.business {
  font-family: Helvetica;
  font-size: 14px;
}
.text {
  color: #000;
  font-size: 15px;
  text-align: left;
  margin-left: -20px;
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

.r-image {
  border-radius: 8px;
  height: 200px;
  widows: 200px;
}

p {
  font-family: "Open Sans Helvetica";
  font-size: 14px;
}

.b-name {
  font-size: 20px;
}

.txt-btn {
  color: #fff;
}

.ico {
  color: #fff;
}

.g-button:hover {
  background-color: #cc4d0d;
  border: none;
}
.link {
  color: blue;
}
@media only screen and (min-width: 768px) {
  .txt {
    width: 80px;
  }

  .b-name {
    font-size: 16px;
  }
  p {
    font-family: "Open Sans Helvetica";
    font-size: 12px;
  }

  .business {
    font-family: Helvetica;
    font-size: 12px;
  }

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
    margin-right: 15px;

    padding: 7px;
  }
}

@media only screen and (max-width: 768px) {
  .txt {
    width: 80px;
  }
  .g-button {
    display: flex;
    width: 85px;
    height: 28px;
  }
  .m-r {
    margin-left: -8px;
  }
  .txt-btn {
    margin-left: 2px;
    font-size: 11px;
  }
  .b-icon {
    height: 15px;
  }
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
    width: 110%;
    padding: 10px;
  }

  .text {
    color: #000;
    font-size: 12px;
    text-align: left;
    margin-left: -40px;
    margin-right: -15px;
  }
  .r-image {
    border-radius: 8px;
    height: 78px;
    width: 78px;
    margin-top: 10px;
  }
  h4 {
    font-size: 15px;
  }
}
</style>
