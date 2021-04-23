<template>
  <div>
    <b-card>
      <div class="products ml-4">
        <div class="create" @click="createProduct">
          <div class="text">
            <b-icon icon="plus"></b-icon>
            <p>Add product/ Services</p>
          </div>
        </div>
        <div class="ml-4" v-for="post in posts" :key="post.id">
          <Product />
        </div>
      </div>
    </b-card>

    <b-modal hide-footer title="Add product" v-model="showModal">
      <b-form>

        <b-row>   <b-col cols="12" md="6">    


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
            v-model="text"
            type="text"
            required
          ></b-textarea>


        </b-form-group>

  
         </b-col>    <b-col cols="12" md="6">   





 

         <div class="image-upload-wrap">
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#createalbumModal"
                    >
                      <div class="drag-text">
                        <i class="fa fa-plus" ></i>
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
          <b-form-input
            class="mt-1"
            id="price"
         
          ></b-form-input>
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
          <b-form-input
            class="mt-1"
            id="conditions"
         
          ></b-form-input>
        </b-form-group>







  <b-form-checkbox
      id="checkbox-1"
     
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
     This Item Is  A Service ?
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
  </div>
</template>

<script>
import Product from "../product";
export default {
  data() {
    return {
      showModal: false,

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
    };
  },
  components: {
    Product
  },
  methods: {
    createProduct() {
      this.showModal = !this.showModal;
    }
  }
};
</script>

<style scoped>
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
}
</style>
