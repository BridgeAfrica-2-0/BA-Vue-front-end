<template>
  <div>
    <b-card
      @click="productDetails"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-5 prod"
    >
      <b-card-text>
        <h6>Product Name</h6>
        <p class="short">
          <small>Lorem ipsum dolor sit amet consectetur.</small>
        </p>

        <span class="discount price"><strike>1500XAF</strike></span>
        <p class="price">1400XAF</p>
      </b-card-text>
      <b-card-action>
        <b-button variant="primary" class="buy">Buy Now</b-button>
      </b-card-action>
    </b-card>

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
          <h2 class="mb-4 text-center">Product Name</h2>
          <p><span class="stock">In Stock</span></p>
          <p>0.00 XAF</p>
          <hr />
          <b-row>
            <b-col>
              <b-button variant="primary">Message</b-button>
            </b-col>
            <b-col>
              <b-button variant="outline-dark" class="float-right"
                >Checkout on website</b-button
              >
            </b-col>
          </b-row>
          <hr />
          <h5>Product Detail</h5>
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
                  placeholder="Post a Comment"
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
                          <h5 class="time">5 minutes ago</h5>
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
                      23 &nbsp; &nbsp; &nbsp; <a href="#">Reply</a>
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
                              <h5 class="time">5 minutes ago</h5>
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
                          23 &nbsp; &nbsp; &nbsp; <a href="#">Reply</a>
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
                              <h5 class="time">5 minutes ago</h5>
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
                          <i
                            class="fa heart  fa-heart-o"
                            aria-hidden="true"
                          ></i>
                          23 &nbsp; &nbsp; &nbsp; <a href="#">Reply</a>
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
                        placeholder="Post a Comment"
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
                          <h5 class="time">5 minutes ago</h5>
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
                      23 &nbsp; &nbsp; &nbsp; <a href="#">Reply</a>
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
</template>

<script>
export default {
  data() {
    return {
      viewProduct: false
    };
  },
  components: {},
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
