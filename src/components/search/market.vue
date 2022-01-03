<template>
  <div  v-if="islogin" >
    <b-spinner
      v-if="prodLoader"
      variant="primary"
      :label="$t('search.Spinning')"
    ></b-spinner>

    <b-alert v-if="products.data.length === 0" show variant="warning"
      ><a href="#" class="alert-link">
        {{ $t("search.No_product_available_for_that_search") }}!
      </a></b-alert
    >
    <div
      v-for="(prod, index) in products.data"
      :key="index"
      class="people-style shadow h-100"
    >
      <b-row>
        <b-col lg="12" xl="4" md="4" cols="12" sm="4">
          <div class="center-img">
            <img :src="prod.picture" class="r-image" />
          </div>
        </b-col>
        <b-col lg="12" xl="4" md="4" cols="12" sm="4">
          <div class="flx100">
            <p class="textt">
              <strong class="title">
                <router-link to="'business/' + item.id">
                  {{ prod.name }}
                </router-link>
              </strong>
              <br />

              <span class="price">
                <strong> {{ prod.price }} Fcfa </strong>
              </span>
              <br />
              <strong> {{ $t("search.Description") }} </strong>
              <br />

              <read-more
                :more-str="$t('search.read_more')"
                class="readmore"
                :text="prod.description"
                link="#"
                :less-str="$t('search.read_less')"
                :max-chars="100"
              >
              </read-more>
            </p>
          </div>
        </b-col>

        <b-col lg="12" xl="4" md="4" cols="12" sm="4">
          <div class="s-button">
            <b-row>
              <b-col
                md="12"
                lg="4"
                xl="12"
                sm="12"
                cols="4"
                class="mt-2 text-center"
              >
                <b-button variant="primary" @click="AddToCard(prod.id, true)"
                  ><span> {{ $t("search.Buy_now") }} </span>
                </b-button>
              </b-col>

              <b-col
                md="12"
                lg="4"
                xl="12"
                sm="12"
                cols="4"
                class="mt-2 text-center"
              >
                <b-button variant="primary" @click="AddToCard(prod.id)"
                  ><span>Add to Cart</span>
                </b-button>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>

    <!-- pagination -->
    <b-pagination
      v-if="products.next || products.previous"
      v-model="currentPage"
      :total-rows="total"
      :per-page="per_page"
      aria-controls="my-table"
      @change="changePage"
      align="center"
      :disabled="products.data.length > 0 ? false : true"
    ></b-pagination>
    <!-- End pagination -->

    <b-modal hide-footer :title="$t('search.Edit_product')">
      <b-form>
        <b-row>
          <b-col cols="12" md="6">
            <b-form-group
              id="input-group-1"
              :label="$t('search.Product_Name')"
              label-for="input-1"
              label-size="sm"
            >
              <b-form-input
                id="input-1"
                class="mt-1"
                type="text"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-1"
              :label="$t('search.Product_Description')"
              label-for="input-1"
              label-size="sm"
            >
              <b-textarea
                id="input-1"
                class="mt-2"
                type="text"
                required
              ></b-textarea>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <div class="image-upload-wrap">
              <a href="#" data-toggle="modal" data-target="#createalbumModal">
                <div class="drag-text">
                  <i class="fa fa-plus"></i>
                  <h6>{{ $t("search.Product_Image") }}</h6>
                </div>
              </a>
              <div></div>
            </div>
          </b-col>
        </b-row>

        <b-form-group
          id="input-group-1"
          :label="$t('search.product_Price')"
          label-for="input-1"
          label-size="sm"
        >
          <b-form-input class="mt-1" id="price"></b-form-input>
        </b-form-group>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          {{ $t("search.This_Product_Is_On_Discount") }}
        </b-form-checkbox>

        <b-form-group
          id="conditions"
          :label="$t('search.Conditions')"
          label-for="input-1"
          label-size="sm"
        >
          <b-form-input class="mt-1" id="conditions"></b-form-input>
        </b-form-group>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          {{ $t("search.This_Item_Is_A_Service") }} ?
        </b-form-checkbox>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          {{ $t("search.In_stock") }}
        </b-form-checkbox>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          {{ $t("search.Published") }}
        </b-form-checkbox>

        <b-button class="mt-2 btn-block" variant="primary">
          {{ $t("search.Add") }}</b-button
        >
      </b-form>
    </b-modal>

    <b-modal
      v-model="viewProduct"
      hide-footer
      :title="$t('search.Product_Details')"
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
          <h2 class="mb-4 text-center">{{ $t("search.Product_Name") }}</h2>
          <p>
            <span class="stock">{{ $t("search.In_Stock") }}</span>
          </p>
          <p>0.00 XAF</p>
          <hr />
          <b-row>
            <b-col>
              <BtnCtaMessage :element="item" type="business" />
            </b-col>
            <b-col>
              <b-button variant="outline-dark" class="float-right">{{
                $t("search.Checkout_on_website")
              }}</b-button>
            </b-col>
          </b-row>
          <hr />
          <h5>{{ $t("search.Product_Detail") }}</h5>
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
          <div class="col-md-12 pt-2 pb-2 m-0">
            <div class="post-footer">
              <div class="input-group post-div">
                <a class="pull-left pr-2" href="#">
                  <img
                    class="post-userim"
                    src="@/assets/img/photo1.jpg"
                    alt="avatar"
                  />
                </a>
                <input
                  :placeholder="$t('search.Post_a_Comment')"
                  class="form-control adco comment"
                  type="text"
                />

                <fas-icon
                  class="primary send-cmt"
                  :icon="['fas', 'paper-plane']"
                />
              </div>
              <ul class="comments-list allcomment pl-0 mt-4">
                <li class="comment">
                  <a class="pull-left pr-4" href="#">
                    <img
                      class="post-userim"
                      src="@/assets/img/photo2.jpg"
                      alt="avatar"
                    />
                  </a>
                  <div class="comment-body">
                    <div class="comment-body-in">
                      <div class="comment-heading">
                        <div class="pull-left">
                          <h5 class="user">Gavino Free</h5>
                          <h5 class="time">{{ $t("search.5_minutes_ago") }}</h5>
                        </div>
                      </div>
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries<span
                          class="text-size"
                          >😛</span
                        >
                      </p>
                    </div>
                    <div class="col-md-12 pt-2 pl-0 mb-3">
                      <b-icon
                        icon="suit-heart"
                        variant="primary"
                        aria-hidden="true"
                      ></b-icon>
                      23 &nbsp; &nbsp; &nbsp;
                      <a href="#">{{ $t("search.Reply") }}</a>
                    </div>
                  </div>
                  <ul class="comments-list">
                    <li class="comment">
                      <a class="pull-left pr-4" href="#">
                        <img
                          class="post-userim"
                          src="@/assets/img/photo2.jpg"
                          alt="avatar"
                        />
                      </a>
                      <div class="comment-body">
                        <div class="comment-body-in">
                          <div class="comment-heading">
                            <div class="pull-left">
                              <h5 class="user">Gavino Free</h5>
                              <h5 class="time">
                                {{ $t("search.5_minutes_ago") }}
                              </h5>
                            </div>
                          </div>
                          <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five
                            centuries<span class="text-size">😛</span>
                          </p>
                        </div>
                        <div class="col-md-12 pt-2 pl-0 mb-3">
                          <b-icon
                            icon="suit-heart"
                            variant="primary"
                            aria-hidden="true"
                          ></b-icon>
                          23 &nbsp; &nbsp; &nbsp;
                          <a href="#">{{ $t("search.Reply") }}</a>
                        </div>
                      </div>
                    </li>
                    <li class="comment">
                      <a class="pull-left pr-4" href="#">
                        <img
                          class="post-userim"
                          src="@/assets/img/photo2.jpg"
                          alt="avatar"
                        />
                      </a>
                      <div class="comment-body">
                        <div class="comment-body-in">
                          <div class="comment-heading">
                            <div class="pull-left">
                              <h5 class="user">Gavino Free</h5>
                              <h5 class="time">
                                {{ $t("search.5_minutes_ago") }}
                              </h5>
                            </div>
                          </div>
                          <p>
                            Lorem Ipsum has been the industry's standard dummy
                            text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five
                            centuries<span class="text-size">😛</span>
                          </p>
                        </div>
                        <div class="col-md-12 pt-2 pl-0 mb-3">
                          <i class="fa heart fa-heart-o" aria-hidden="true"></i>
                          23 &nbsp; &nbsp; &nbsp;
                          <a href="#">{{ $t("search.Reply") }}</a>
                        </div>
                      </div>
                    </li>
                    <div class="input-group post-div">
                      <a class="pull-left pr-4" href="#">
                        <img
                          class="post-userim"
                          src="@/assets/img/photo1.jpg"
                          alt="avatar"
                        />
                      </a>
                      <input
                        placeholder="$t('search.Post_a_Comment')"
                        class="form-control adco comment"
                        type="text"
                      />

                      <fas-icon
                        class="primary send-cmt"
                        :icon="['fas', 'paper-plane']"
                      />
                    </div>
                  </ul>
                </li>
              </ul>
              <ul class="comments-list allcomment pl-0 mt-4">
                <li class="comment">
                  <a class="pull-left pr-4" href="#">
                    <img
                      class="post-userim"
                      src="@/assets/img/photo2.jpg"
                      alt="avatar"
                    />
                  </a>
                  <div class="comment-body">
                    <div class="comment-body-in">
                      <div class="comment-heading">
                        <div class="pull-left">
                          <h5 class="user">Gavino Free</h5>
                          <h5 class="time">{{ $t("search.5_minutes_ago") }}</h5>
                        </div>
                      </div>
                      <p>
                        Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries<span
                          class="text-size"
                          >😛</span
                        >
                      </p>
                    </div>
                    <div class="col-md-12 pt-2 pl-0 mb-3">
                      <b-icon
                        icon="suit-heart"
                        variant="primary"
                        aria-hidden="true"
                      ></b-icon>
                      23 &nbsp; &nbsp; &nbsp;
                      <a href="#">{{ $t("search.Reply") }}</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-modal>
  </div>
   <div v-else> 
         <login />
    
     </div>
</template>

<script>
import login from "@/components/search/login";
export default {
  data() {
    return {
      viewProduct: false,
      total: 0,
      per_page: 10,
      list: [],
      islogin:true,
      currentPage: 1,
      nextLoad: false,
    };
  },
  computed: {
    products() {
      return this.$store.getters["marketSearch/getProducts"];
    },
    prodLoader() {
      return this.$store.getters["marketSearch/getLoader"];
    },

    getStatus() {
      return this.$store.state.cart.status;
    },
  },

  components: {
 
    login
  },

  created() {
     this.islogin=this.$store.getters["auth/isLogged"];
     
     console.log(this.islogin);
    this.getProducts();

  },

  methods: {
    changePage(value) {
      // this.$store.commit("marketSearch/setProducts", '');
      // this.$store.commit("marketSearch/setLoader", true);

      // this.prodLoader = true;
      this.currentPage = value;

      this.$store
        .dispatch("marketSearch/nextPage", this.currentPage)
        .then((res) => {
          console.log("products list: ");
          console.log(this.products);
          // this.prodLoader = false;
        })
        .catch((err) => {
          // this.prodLoader = false;
          console.log("products error: ");
          console.error(err);
        });
    },

    async getProducts() {
      // this.prodLoader = true;
      await this.$store
        .dispatch("marketSearch/getProducts")
        .then((res) => {
          console.log("products list: ");
          console.log(this.products);
          // this.prodLoader = false;
          this.total = this.products.total;
        })
        .catch((err) => {
          // this.prodLoader = false;
          console.log("loader: ", this.prodLoader);
          console.log("products error: ");
          console.error(err);
        });
    },

    buyNow() {
      this.AddToCard();
      this.$router.push({ name: "payment" });
    },

    AddToCard(id, val) {
      console.log("add to card ", id);
      this.$store
        .dispatch("cart/addToCart", id)
        .then((response) => {
          console.log("----", this.getStatus);

          this.flashMessage.show({
            status: "success",
            message: this.getStatus,
          });
          if (val) this.$router.push({ name: "payment" });
        })
        .catch((error) => {
          console.log(error);
          this.flashMessage.show({
            status: "error",
            message: "error occur",
          });
        });
    },
  },
};
</script>

<style scoped>
/* ED css */
button.pagination {
  width: 50px;
}

/* Not ED */
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

  .marge {
    margin-left: 200px;
  }
  .pos {
    margin-left: 200px;
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
