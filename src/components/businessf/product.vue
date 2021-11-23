<template>
  <div> <FlashMessage />
    <div class="people-style p-3 shadow">
      <b-row>
        <b-col cols="5" lg="4" sm="4" md="5">
          <div class="center-img">
            <img
              :src="product.picture"
              class="r-image cursor-pointer"
              @click="productDetails"
            />
          </div>
        </b-col>
        <b-col cols="7" sm="8" md="7">
          <p class="text">
            <strong class="title cursor-pointer" @click="productDetails">
              {{ product.name }}
            </strong>
            <br />
            <strong> Description </strong> <br />
            {{ product.description.substring(0, 30) }}
            <b-link v-if="product.description.length >= 30"> see more </b-link>
            <br />

            <span class="price">
              <strong> {{ product.price }} </strong>
            </span>
            <br />

            
          </p>
          
          
              <div class=" align-self-center  pos">
            <b-button variant="primary" 
              >buy now
            </b-button>
            </div>

            <div class=" align-self-center pos my-2">
            <b-button variant="primary" class="p-0" @click="handleAddToCard"
              >add to cart
            </b-button>
            </div>
            
          
        </b-col>
      </b-row>

      <!-- <div>
        <br />
      </div> -->
    <!-- </div> -->
    <!-- EDIT PRODUCT MODAL -->

    <b-modal hide-footer title="Edit product">
      <b-form>
        <b-row>
          <b-col cols="12" md="6">
            <b-form-group
              id="input-group-1"
              label="Product Name"
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
              label="Product Description"
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
                  <h6>Product Image</h6>
                </div>
              </a>
              <div></div>
            </div>
          </b-col>
        </b-row>

        <b-form-group
          id="input-group-1"
          label="product Price"
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
          This Product Is On Discount
        </b-form-checkbox>

        <b-form-group
          id="conditions"
          label="Conditions"
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
          This Item Is A Service ?
        </b-form-checkbox>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          In stock
        </b-form-checkbox>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="accepted"
          unchecked-value="not_accepted"
        >
          Published
        </b-form-checkbox>

        <b-button class="mt-2 btn-block" variant="primary"> Add</b-button>
      </b-form>
    </b-modal>

    <!-- PRODUCT DETAILS MODAL -->

    <ProductDetails
      @closemodal="closeDetailsProduct"
      :showModal="viewProduct"
      :product="product"
    />
  </div>
</template>

<script>
import ProductDetails from "./ProductDetails.vue";
export default {
  props: ["product"],
  data() {
    return {
      viewProduct: false,
    };
  },
  components: {
    ProductDetails,
  },

  computed : {
    getStatus(){
      return this.$store.state.cart.status ;
    }
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
    closeDetailsProduct() {
      this.viewProduct = false;
    },
    handleAddToCard() {
      console.log("add to card ", this.product.id);
      this.$store.dispatch("cart/addToCart", this.product.id)
      .then(response => {
       
        console.log("----",this.getStatus);

        this.flashMessage.show({
              status: 'success',
              message: this.getStatus,
              
            });
      })
      .catch((error) => {
        console.log(error);
          this.flashMessage.show({
              status: 'error',
              message: "error occur",
              
            });
      });;
    },
  },
};
</script>

<style scoped>
.discount {
  color: orange;
  margin-left: 60px;
}
.cursor-pointer {
  cursor: pointer;
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
  .pos{
    margin-left: 200px;
  }
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
    min-width: 123px;
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