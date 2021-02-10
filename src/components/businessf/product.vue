<template>
  <div>
    <b-card
      @click="productDetails"
      title="Product name"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      class="mb-5 prod"
    >
      <b-card-text>
        <b-row>
          <b-col>
            <span class="discount"><strike>1500FCFA</strike></span>
            <p>1400FCFA</p>
          </b-col>
          <b-col class="col-3">
            <b-icon icon="check" variant="success"></b-icon>
          </b-col>
        </b-row>
      </b-card-text>
    </b-card>

    <b-modal
      v-model="viewProduct"
      hide-footer
      title="Product Details"
      size="lg"
    >
      <b-row>
        <b-col class="col-5">
          <b-img
            width="300"
            height="300"
            src="https://picsum.photos/600/300/?image=25"
          ></b-img>
        </b-col>
        <b-col>
          <h2>Product Name</h2>
          <p>$ 0.00 <span class="stock">In Stock</span></p>
          <hr />
          <b-row>
            <b-col>
              <b-button variant="warning">Message</b-button>

              <b-button class="ml-2" variant="success">Call Now</b-button>
            </b-col>
            <b-col>
              <b-button variant="outline-dark">Checkout on website</b-button>
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
            <b-col class="mt-1">
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
            <b-col class="col-2">
              <b-icon
                icon="share-fill"
                variant="primary"
                aria-hidden="true"
              ></b-icon>
            </b-col>
          </b-row>

          <b-row>
            <b-avatar class="mr-3"></b-avatar>
            <span class="mr-auto"
              >
              <input type="text" name="" placeholder="Post a Comment">
              <b-icon
                icon="cursor-fill"
                variant="primary"
                class="post"
                aria-hidden="true"
              ></b-icon>
              </span
          ></b-row>
          <Comment/>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>

<script>
import Comment from "./comment"
export default {
  data() {
    return {
      viewProduct: false,
    };
  },
  components:{
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
    },
  },
};
</script>

<style scoped>
.discount {
  color: orange;
}

p {
  text-align: left;
}

input{
    border-radius: 15px;
    padding: 5px;
    border: solid 1px #ccc;
    width: 250px;
}
input:focus{
    outline-color: none;
    border: none;
}
.post{
    position: relative;
    left: -24px;
}

.prod{
    max-width: 14rem;
    cursor: pointer;
}
.stock{
    color: green;
}
</style>
