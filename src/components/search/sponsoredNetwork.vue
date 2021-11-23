<template>
  <div>
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
            <strong> {{$t("search.Shipping_Network")}} </strong> <br />
            <br />
            {{$t("search.Public")}} <br />
            {{$t("search.20k_Members")}} <br />
            {{$t("search.Business_Name")}} <br />
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="4">
          <b-button block size="sm" class="b-background" variant="primary">
            <b-icon class="ico" icon="plus-circle"> </b-icon> {{$t("search.Community")}}
          </b-button>
        </b-col>

        <b-col cols="4">
          <b-button block size="sm" class="b-background" variant="primary">
            <b-icon class="ico" icon="chat"> </b-icon> {{$t("search.Message")}}
          </b-button>
        </b-col>

        <b-col cols="4"> </b-col>
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
  max-width: 250px;
  color: orange;
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.7);
}
.text {
  color: #000;
}
.stock {
  color: green;
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

  padding: 7px;
}

.btn {
  font-size: 10px;
  display: flex;

  padding-right: 70px;
}
</style>
