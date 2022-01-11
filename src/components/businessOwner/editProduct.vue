<template>
  <div>
    <b-modal
      v-model="canShowModal"
      hide-footer
      id="product-details"
      size="xl"
      title="Product Details"
      @close="closeModal"
    >
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
                v-model="product.name"
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
                v-model="product.description"
                required
              ></b-textarea>
            </b-form-group>
          </b-col>
          <b-col cols="12" md="6">
            <div class="image-upload-wrap" @click="findImage">
                  <img :src="url" alt="" id="image" style="width: 100%; height: 100%; z-index: 1" :class="!hide ? 'hide1' : '' ">
              
                <a href="#" data-toggle="modal" data-target="#createalbumModal" :class="hide ? 'hide1' : '' " >
                  <div class="drag-text ">
                    <i class="fa fa-plus"></i>
                    <h6>Product Image</h6>
                  </div>
                </a>
             
              <div>
                <input id="img" type="file" v-show="false" @change="pickImage">
              </div>
            </div>
          </b-col>
        </b-row>

        <b-form-group
          id="input-group-1"
          label="product Price"
          label-for="input-1"
          label-size="sm"
        >
          <b-form-input class="mt-1" id="price" v-model="product.price"></b-form-input>
        </b-form-group>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="1"
          unchecked-value="0"
          v-model="product.on_discount"
        >
          This Product Is On Discount
        </b-form-checkbox>

        <b-form-group
          id="conditions"
          label="Conditions"
          label-for="input-1"
          label-size="sm"
        >
          <b-form-input class="mt-1" id="conditions" v-model="product.condition"></b-form-input>
        </b-form-group>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="1"
          unchecked-value="0"
          v-model="product.is_service"
        >
          This Item Is A Service ?
        </b-form-checkbox>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="1"
          unchecked-value="0"
          v-model="product.in_stock"
        >
          In stock
        </b-form-checkbox>

        <b-form-checkbox
          id="checkbox-1"
          name="checkbox-1"
          value="1"
          unchecked-value="0"
          v-model="product.published"
        >
          Published
        </b-form-checkbox>

        <b-button class="mt-2 btn-block" variant="primary"> Update</b-button>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      viewProduct: false,
      canShowModal: false
    };
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    product: {
      type: Object,
      required: true,
    },
  },
  // watch: {
  //   showModal(newValue) {
  //     this.canShowModal = newValue;
  //   },
  // }

  methods: {
    findImage(){
      document.getElementById("img").click();
    },
  },
};
</script>
