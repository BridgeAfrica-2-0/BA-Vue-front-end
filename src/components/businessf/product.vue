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
          <p>$ 0.00 <span class="stock">In Stock</span></p>
          <p><strike>$ 0.00</strike></p>
          <hr />
          <b-row>
            <b-col>
              <b-button variant="primary">Message</b-button>

              <b-button class="ml-2" variant="success">Call Now</b-button>
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
          <b-row>
            <b-col cols="1" class="mx-auto">
              <b-avatar class="mr-2" size=""></b-avatar>
            </b-col>
            <b-col cols="11">
              <b-input-group class="my-auto">
                <template #append>
                  <b-input-group-text class=""
                    ><strong class="color-site">
                      <b-icon-cursor-fill></b-icon-cursor-fill> </strong
                  ></b-input-group-text>
                </template>
                <b-form-input
                  placeholder="Search Bridge Africa"
                  class="border-right-0"
                ></b-form-input>
              </b-input-group>
            </b-col>
          </b-row>
          <Comment />
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
</style>
