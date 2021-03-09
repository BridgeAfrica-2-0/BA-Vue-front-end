<template>
  <div class="hot mt-2 p-2">
    <b-row>
      <b-col>
        <p><b>Hot Businesses</b></p>
      </b-col>
      <b-col class="col-2">
        <fas-icon :icon="['fas', 'angle-left']" />
        <fas-icon :icon="['fas', 'angle-right']" />
      </b-col>
    </b-row>
    <b-card
      img-src="https://business.bridgeafrica.info/assets/img/portfolio/13.png"
      img-alt="Image"
      img-top
      tag="article"
      class="text-center mt-2 p-1 item"
    >
      <b-card-text>
        <p>
          <b>Sumi Foo</b> <br />
          <small>
            Business Category <br />
            1.1M Followers <br />
            City Name Here <br />
            Keyword 1 Keyword 2 Keyword 3
          </small>
        </p>
      </b-card-text>
      <b-row class="mr-5">
        <b-col>
          <b-button class="yellow">Contact</b-button>
        </b-col>
        <b-col>
          <b-button class="follow mr-4">Follow</b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.hot {
  border: solid 1px rgb(214, 214, 214);
  border-radius: 5px;
}

p {
  text-align: left;
}

.yellow {
  background-color: #e75c18;
  color: #fff;
  border: none;
}
.follow {
  background-color: #fff;
  border: solid 1px #ccc;
  color: black;
}
</style>
