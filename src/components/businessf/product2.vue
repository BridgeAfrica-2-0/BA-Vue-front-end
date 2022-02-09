<template>
  <div>
    <div class="people-style shadow">
      <b-row>
        <b-col cols="5" lg="4" sm="4" md="5">
          <div class="center-img">
            <img
              @click="productDetails"
              src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
              class="r-image"
            />
          </div>
        </b-col>
        <b-col cols="7" sm="8" md="7">
          <p class="text">
            <strong class="title">
              <b-link @click="productDetails"> Sneakers Blec cc </b-link>
            </strong>
            <br />
            <strong> Description </strong> <br />
            <span class="text">
              This is just a dummy text dumy dummy things are always dummy and
              dummy add things are always dummy hjykt
            </span>
            <b-link class="text"> see more </b-link> <br />

            <span class="price"> <strong> 12,000 Fcfa </strong> </span> <br />
          </p>

          <span class="float-right">
            <b-button variant="primary" class=""> {{$t("general.Buy_now")}} </b-button>
          </span>
        </b-col>
      </b-row>

      <div>
        <br />
      </div>
    </div>

    <b-modal
      v-model="viewProduct"
      hide-footer
      title="Product Details"
      size="xl"
    >
      <b-row>
        <b-col cols="5" class="mx-auto">
          <b-img
            class="img-fluid"
            src="https://picsum.photos/600/300/?image=25"
          ></b-img>
        </b-col>
        <b-col>
          <h2 class="mb-4 text-center">{{$t("general.Product_Name")}}</h2>
          <p><span class="stock">{{$t("general.In_Stock")}}</span></p>
          <p>0.00 XAF</p>
          <hr />
          <b-row>
            <b-col>
              <b-button variant="primary">Message</b-button>
            </b-col>
            <b-col>
              <b-button variant="outline-dark" class="float-right"
                >{{$t("general.Checkout_on_website")}}</b-button
              >
            </b-col>
          </b-row>
          <hr />
          <h5>{{$t("general.Product_Description")}}</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quod, reprehenderit neque atque recusandae laborum quia vel,
            assumenda repellendus rem ab ex, odio aperiam quidem id deleniti
            commodi consequatur optio.
          </p>
          <hr />

          <b-row>
            <b-col class="">
              <span class="mr-3"
                ><b-icon
                  icon="suit-heart"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                23</span
              >
              <span
                ><b-icon
                  icon="chat-fill"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                123</span
              >
            </b-col>
            <b-col class="">
              <b-icon
                class="float-right"
                icon="share-fill"
                variant="primary"
                aria-hidden="true"
              ></b-icon>
            </b-col>
          </b-row>
          <br />
          <b-row class="mt-2">
            <b-col>
              <b-avatar
                variant="info"
                src="https://placekitten.com/300/300"
                size="2rem"
              ></b-avatar>
              <input :placeholder="$t('general.Post_a_Comment')" class="comment" type="text" />

              <fas-icon
                class="primary send-cmt"
                :icon="['fas', 'paper-plane']"
              />
            </b-col>
          </b-row>
          <Comment />
          <b-row>
            <b-col class="col-1"></b-col>
            <b-col>
              <Comment />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import Comment from "./comment";
export default {
  data() {
    return {
      viewProduct: false,
    };
  },
  components: {
    Comment,
  },
  methods: {
    /**
     * Used to view produduct details
     * @param id
     * @return void
     */
    productDetails() {
      this.viewProduct = true;
    },
  },
};
</script>

<style scoped>
.discount {
  color: orange;
  margin-left: 60px;
}

p {
  text-align: left;
}

input {
  border-radius: 15px;
  padding: 5px;
  border: solid 1px #ccc;
  width: 250px;
}
input:focus {
  outline-color: none;
  border: none;
}
.post {
  position: relative;
  left: -24px;
}

.prod {
  max-width: 14rem;
  cursor: pointer;
}
.stock {
  color: green;
}
.btn:focus {
  outline: none;
}
.comment {
  width: 90%;
  border: solid 1px #ccc;
  border-radius: 25px;
  background-color: #ddd;
  height: 35px;
  padding-left: 10px;
  margin-left: 20px;
}
.comment:focus {
  outline: none;
}
.send-cmt {
  position: relative;
  margin-left: 93%;
  top: -28px;
  cursor: pointer;
}

h6 {
  text-align: center;
  font-weight: bold;
}
.short {
  text-align: center;
}
.price {
  text-align: center;
}
.buy {
  border-radius: 0px;
  width: 100%;
}
.reply {
  cursor: pointer;
}

.discount {
  color: orange;
  margin-left: 60px;
}

p {
  text-align: left;
}

input {
  border-radius: 15px;
  padding: 5px;
  border: solid 1px #ccc;
  width: 250px;
}
input:focus {
  outline-color: none;
  border: none;
}
.post {
  position: relative;
  left: -24px;
}

.prod {
  max-width: 14rem;
  cursor: pointer;
}
.stock {
  color: green;
}
.btn:focus {
  outline: none;
}
h6 {
  text-align: center;
  font-weight: bold;
}
.short {
  text-align: center;
}
.price {
  text-align: center;
}
.buy {
  border-radius: 0px;
  width: 100%;
}
.reply {
  cursor: pointer;
}

@media only screen and (min-width: 768px) {
  .center-img {
    margin-right: -60px;
  }
}

.buybtn {
  width: 100px;
}

.marketbtn {
  margin-bottom: 3px;
  float: right;
}

.price {
  font-size: 18px;
}

.people-style {
  border-top-left-radius: 10px;

  border-bottom-left-radius: 10px;

  border-top-right-radius: 5px;

  border-bottom-right-radius: 5px;

  background: white;

  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;

  padding: 3px;
  padding-bottom: 26px;
}

@media only screen and (max-width: 540px) {
  .text {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: -30px;

    line-height: 25px;
  }

  .r-image {
    border-top-left-radius: 10px;

    border-bottom-left-radius: 10px;

    border-top-right-radius: 10px;

    border-bottom-right-radius: 10px;

    width: 100px;

    height: 100px;
    padding: 4px;
    object-fit: cover;
  }

  .title {
    font-size: 16px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .btn {
    padding-top: 6px;
    font-size: 10px;

    height: 28px;
    width: 85px;
  }
}

@media only screen and (min-width: 540px) and (max-width: 762px) {
  .text {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-right: -5px;

    line-height: 25px;
  }

  .r-image {
    border-top-left-radius: 10px;

    border-bottom-left-radius: 10px;

    border-top-right-radius: 10px;

    border-bottom-right-radius: 10px;

    height: 100px;
    width: 100px;

    padding: 4px;
  }

  .btn {
    padding-top: 6px;

    height: 38px;
    width: 123px;
  }

  .title {
    font-size: 20px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
}

.discount {
  color: orange;
  margin-left: 60px;
}

p {
  text-align: left;
}

input {
  border-radius: 15px;
  padding: 5px;
  border: solid 1px #ccc;
  width: 250px;
}
input:focus {
  outline-color: none;
  border: none;
}
.post {
  position: relative;
  left: -24px;
}

.prod {
  max-width: 14rem;
  cursor: pointer;
}
.stock {
  color: green;
}
.btn:focus {
  outline: none;
}
.comment {
  width: 90%;
  border: solid 1px #ccc;
  border-radius: 25px;
  background-color: #ddd;
  height: 35px;
  padding-left: 10px;
  margin-left: 20px;
}
.comment:focus {
  outline: none;
}
.send-cmt {
  position: relative;
  margin-left: 93%;
  top: -28px;
  cursor: pointer;
}

h6 {
  text-align: center;
  font-weight: bold;
}
.short {
  text-align: center;
}
.price {
  text-align: center;
}
.buy {
  border-radius: 0px;
  width: 100%;
}
.reply {
  cursor: pointer;
}

@media only screen and (min-width: 762px) {
  .text {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-right: -5px;

    line-height: 25px;
  }

  .r-image {
    border-top-left-radius: 10px;

    border-bottom-left-radius: 10px;

    border-top-right-radius: 10px;

    border-bottom-right-radius: 10px;

    height: 160px;
    width: 160px;

    padding: 4px;
  }

  .btn {
    padding-top: 6px;

    height: 38px;
    width: 123px;
  }

  .title {
    font-size: 20px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
}
</style>
