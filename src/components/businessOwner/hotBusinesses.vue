<template>
  <div class="hot mt-2 p-2">
    <b-row>
      <b-col>
        <p><b>{{ $t('businessowner.Hot_Businesses') }}</b></p>
      </b-col>
      <b-col class="col-2">
        <fas-icon :icon="['fas', 'angle-left']" />
        <fas-icon :icon="['fas', 'angle-right']" />
      </b-col>
    </b-row>

    <div class="people-style border shadow">
      <b-row>
        <b-col cols="6">
          <div style="height: 100%;">
            <img
              src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
              width="100%"
              height="90%"
              class="r-image"
            />
          </div>
        </b-col>
        <b-col>
          <p class="text">
            <strong> Super Car ltd </strong> <br />
            <strong> {{ $t('businessowner.Category') }} : </strong> {{ $t('businessowner.Car_marketing') }} <br />
            <strong> {{ $t('businessowner.Community') }} : </strong> 20k <br />
            <strong> {{ $t('businessowner.Location') }} :</strong> {{ $t('businessowner.Cameroon') }} <br />
            <strong> {{ $t('businessowner.Keyword') }} :</strong> {{ $t('businessowner.car') }},swag <br />

            <strong>{{ $t('businessowner.About') }}:</strong> super best car seller in the world
            adipisicing elit. <b-link>{{ $t('businessowner.Read_More') }}</b-link>
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="4">
          <b-button block size="sm" class="b-background" variant="primary">
            <b-icon class="ico" icon="plus-circle"> </b-icon> {{ $t('businessowner.Community') }}
          </b-button>
        </b-col>

        <b-col cols="4">
          <b-button block size="sm" class="b-background" variant="primary">
            <b-icon class="ico" icon="chat"> </b-icon> {{ $t('businessowner.Message') }}
          </b-button>
        </b-col>

        <b-col cols="4">
          <b-button block size="sm" class="b-background" variant="primary">
            <b-icon icon="direction" class="ico"> </b-icon> {{ $t('businessowner.Direction') }}
          </b-button>
        </b-col>
      </b-row>
    </div>
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

.card {
  color: orange;
}
.text {
  color: #000;
  font-size: 12px;
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
  font-size: 10px;
  display: flex;
  padding-right: 70px;
}
.ico {
  margin-right: 5px;
}
.img {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.r-image {
  border-radius: 8px;
}
.people-style {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  padding: 10px;
  padding-right: 12px;
}
</style>
