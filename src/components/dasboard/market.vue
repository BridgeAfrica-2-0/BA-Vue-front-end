<template>
  <div>
    <b-card class="border shadow ">
      <span>
        <h4>
          {{$t("dashboard.Market")}}
          <h6 style="float:right">
            <b-link> <u> see all </u> </b-link>
          </h6>
        </h4>
      </span>

      <div class=" s-card  p-tab">
        <b-row>
          <b-col md="3" lg="2" sm="6">
            <b-card
              @click="productDetails"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-5 prod"
            >
              <b-card-text>
                <h6>{{$t("dashboard.Product_Name")}}</h6>
                <p class="short">
                  <small>Lorem ipsum dolor sit amet consectetur.</small>
                </p>

                <span class="discount price"><strike>1500XAF</strike></span>
                <p class="price">1400XAF</p>
              </b-card-text>
              <div>
                <b-button variant="primary" class="buy">{{$t("dashboard.Buy_Now")}}</b-button>
              </div>
            </b-card>
          </b-col>

          <b-col md="3" lg="2" sm="6">
            <b-card
              @click="productDetails"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-5 prod"
            >
              <b-card-text>
                <h6>{{$t("dashboard.Product_Name")}}</h6>
                <p class="short">
                  <small>Lorem ipsum dolor sit amet consectetur.</small>
                </p>

                <span class="discount price"><strike>1500XAF</strike></span>
                <p class="price">1400XAF</p>
              </b-card-text>
              <div>
                <b-button variant="primary" class="buy">{{$t("dashboard.Buy_Now")}}</b-button>
              </div>
            </b-card>
          </b-col>

          <b-col md="3" lg="2" sm="6">
            <b-card
              @click="productDetails"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-5 prod"
            >
              <b-card-text>
                <h6>{{$t("dashboard.Product_Name")}}</h6>
                <p class="short">
                  <small>Lorem ipsum dolor sit amet consectetur.</small>
                </p>

                <span class="discount price"><strike>1500XAF</strike></span>
                <p class="price">1400XAF</p>
              </b-card-text>
              <div>
                <b-button variant="primary" class="buy">{{$t("dashboard.Buy_Now")}}</b-button>
              </div>
            </b-card>
          </b-col>

          <b-col md="3" lg="2" sm="6">
            <b-card
              @click="productDetails"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-5 prod"
            >
              <b-card-text>
                <h6>{{$t("dashboard.Product_Name")}}</h6>
                <p class="short">
                  <small>Lorem ipsum dolor sit amet consectetur.</small>
                </p>

                <span class="discount price"><strike>1500XAF</strike></span>
                <p class="price">1400XAF</p>
              </b-card-text>
              <div>
                <b-button variant="primary" class="buy">{{$t("dashboard.Buy_Now")}}</b-button>
              </div>
            </b-card>
          </b-col>

          <b-col md="3" lg="2" sm="6">
            <b-card
              @click="productDetails"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-5 prod"
            >
              <b-card-text>
                <h6>{{$t("dashboard.Product_Name")}}</h6>
                <p class="short">
                  <small>Lorem ipsum dolor sit amet consectetur.</small>
                </p>

                <span class="discount price"><strike>1500XAF</strike></span>
                <p class="price">1400XAF</p>
              </b-card-text>
              <div>
                <b-button variant="primary" class="buy">{{$t("dashboard.Buy_Now")}}</b-button>
              </div>
            </b-card>
          </b-col>

          <b-col md="3" lg="2" sm="6">
            <b-card
              @click="productDetails"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              class="mb-5 prod"
            >
              <b-card-text>
                <h6>{{$t("dashboard.Product_Name")}}</h6>
                <p class="short">
                  <small>Lorem ipsum dolor sit amet consectetur.</small>
                </p>

                <span class="discount price"><strike>1500XAF</strike></span>
                <p class="price">1400XAF</p>
              </b-card-text>
              <div>
                <b-button variant="primary" class="buy">{{$t("dashboard.Buy_Now")}}</b-button>
              </div>
            </b-card>
          </b-col>
        </b-row>

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
              <h2 class="mb-4 text-center">{{$t("dashboard.Product_Name")}}</h2>
              <p><span class="stock">{{$t("dashboard.In_Stock")}}</span></p>
              <p>0.00 XAF</p>
              <hr />
              <b-row>
                <b-col>
                  <b-button variant="primary">{{$t("dashboard.Message")}}</b-button>
                </b-col>
                <b-col>
                  <b-button variant="outline-dark" class="float-right"
                    >{{$t("dashboard.Checkout_on_website")}}</b-button
                  >
                </b-col>
              </b-row>
              <hr />
              <h5>{{$t("dashboard.Product_Detail")}}</h5>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corporis quod, reprehenderit neque atque recusandae laborum quia
                vel, assumenda repellendus rem ab ex, odio aperiam quidem id
                deleniti commodi consequatur optio.
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
                  <input
                    placeholder="Post a Comment"
                    class="comment"
                    type="text"
                  />

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
    </b-card>
  </div>
</template>

<script>
import Comment from "@/components/comment";
export default {
  data() {
    return {
      viewProduct: false
    };
  },
  components: {
    Comment
  },
  methods: {
    /**
     * Used to view produduct details
     * @param id
     * @return void
     */
    productDetails() {
      this.viewProduct = true;
    }
  }
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
</style>
