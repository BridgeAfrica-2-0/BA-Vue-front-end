<template>
  <div>
<<<<<<< HEAD
    <fas-icon class="icons " :icon="['fas', 'store']" size="lg" /> Market
    <hr />

=======
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
    <div class="products ">
      <div class="col-md-6" v-for="(product, index) in products" :key="index">
        <Product :product="product" />
      </div>
      <b-col v-if="loader" class="load">
        <b-spinner
          style="width: 7rem; height: 7rem;"
          variant="primary"
        ></b-spinner>
      </b-col>
      <span v-if="products.length < 1 && !loader" class="no-product">
        <h3>No product to show !!</h3>
      </span>
    </div>
  </div>
</template>

<script>
import Product from "../product";
import axios from "axios";
export default {
  data() {
    return {
      showModal: false,
<<<<<<< HEAD
      load: false,
      loader: false,
      products: [],
      val: "",
      msg: "",
      success: false,
      action: null,
=======

      text: "",
      image: "",
      posts: [
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        }
      ],
      images: [
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41"
        },
        {
          id: 2,
          image: "https://picsum.photos/300/150/?image=41"
        }
      ]
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
    };
  },
  components: {
    Product
  },
  beforeMount() {
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("access_token");
    this.loader = true;
    this.getProducts();
  },
  methods: {
<<<<<<< HEAD
    getProducts() {
      axios
        .get("market/products/1")
        .then(res => {
          this.loader = false;
          this.products = res.data.data.data;
        })
        .catch(err => {
          console.log(err);
          this.loader = false;
        });
    },
  },
=======
    createProduct() {
      this.showModal = !this.showModal;
    }
  }
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
};
</script>

<style scoped>
.load {
  display: flex;
  justify-content: center;
}
.no-product {
  width: 100%;
  display: flex;
  justify-content: center;
}
.products {
  display: flex;
  flex-wrap: wrap;
}

.product:hover .overlay {
  opacity: 0.5;
  color: #e75d29;
}
.text-hover {
  position: relative;
  top: 80px;
}

.text-static {
  position: relative;
  top: -220px;
  left: 100px;
  color: white;
  font-weight: 200;
}

.product:hover .text-static {
  display: none;
}

.btn-view {
  background-color: transparent;
  border: none;
  color: white;
}

.btn-view:focus {
  outline-color: transparent;
  border: none;
}

.product-name {
  color: #e75d29;
  text-align: center;
}

.pic-name {
  position: relative;
  left: -200px;
  color: white;
  font-weight: 200;
  opacity: 0;
}

.sp:hover .pic-name {
  opacity: 1;
}

.pic {
  cursor: pointer;
  background-color: transparent;
}
.pic:hover {
  box-shadow: 5px 10px 8px 2px #888888;
}

.create {
  position: relative;
  height: 210px;
  color: #fff;
  background-color: #bbb;
  padding: 20px;
  width: 14rem;
  top: 5px;
  left: 10px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10px;
}

.text {
  margin-top: 50px;
}

.product {
  height: 190px;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .products {
    position: relative;
  }

  .product {
    margin-top: 20px;
  }

  .create {
    position: relative;
    height: 150px;
    left: 23px;
  }
  .text {
    margin-top: 30px;
  }
  .btn {
    font-size: 12px;
  }
}
</style>
