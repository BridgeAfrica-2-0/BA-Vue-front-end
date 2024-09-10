<template>
  <div class="col-8">
    <div class="row justify-content-between top-div">
      <div>
        <h4 class="title-style">  {{ $t("general.SHIPPING") }}</h4>
      </div>
      <div>
      <b-button v-b-modal.create-shipping-modal type="submit" variant="primary" class="hire-btn">
            {{ $t("general.New_Address") }}
      </b-button>     
      </div>
      
    </div>
    <b-card-title class="headline-font-size font-weight-bold headline_and_btns mb-0">
      <span>{{ $t("general.Shipping_Address") }}</span>
      <!-- <div class="buttons">
				<button class="btnx" @click="loadActualComponent3"><i class="fas fa-arrow-alt-circle-right"></i> Complete checkout</button>
				<button class="backBtn" @click="loadActualComponent1"><i class="fas fa-arrow-alt-circle-left"></i> Back</button>
			</div> -->
    </b-card-title>
    <div class="row">
      <div class="col-12">
        <CreateShippingModal />
      </div>
      <div class="col-12">
        <CreateShippingModal
          :title="$t('general.Edit_Shipping_Address')"
          mode="edit"
          :editForm="shippingsTab[selectedIndex]"
        />
      </div>
    </div>
    <b-card-text
      class="mt-4 mr-0 w-100 d-flex justify-content-between align-items-start"
    >
      <div class="row w-100">
        <div class=" dotted-border">
        <div
					class="ship-add w-100  d-flex justify-content-between align-items-start"
					v-for="(shipping_item,index) in shippingsTab"
					:key="shipping_item.id"
				>  <div class="d-inline-flex">


                        <div class="col-1">


	   <input type="radio" :v-model="shipping_item.id"  @change="shipping(shipping_item)"   :checked="shipping_item.active==1"     name="shipping" value="">   </div>

<div class="mb-3 d-flex justify-content-between">
  <div class="flex-fill fixed-width">
    <h5 class="h-color">Ship To</h5>
    <p class="mb-1">{{ shipping_item.name }}</p>
    <p class="mb-1">{{ shipping_item.city }},{{ shipping_item.region }}</p>
    <p class="">{{ shipping_item.country }}</p> 
  </div>

  <div class="flex-fill fixed-width">
    <h5 class="h-color">Contact Details</h5>
    <p class="mb-1">{{ shipping_item.email }}</p>
    <p class="">{{ shipping_item.phone }}</p>
  </div>

  <div class="flex-fill fixed-width">
    <h5 class="h-color">Shipping Speed</h5>
    <p class="mb-1">Business Days</p>
    <p class="">FREE</p>
  </div>
</div>



					</div>
						<div class="row ml-2">
              <div>
                <a
                  href="#"
                  v-b-modal.edit-shipping-modal
                  class="mr-1 mr-sm-2 icon-color"
                  @click.prevent="openEditModal(index)"
                  >
                  <i  class='fas'>&#xf304;</i>
                  </a>
              </div>
              <div class="ml-1">
                <UpdatedConfirmOperation
										:message="$t('general.Do_you_want_to_delete_this_shipping_address')"
										@sendid="handleDeleteShipping"
										:id_item="shipping_item.id"
									/>
              </div>

						</div>
        </div>
      </div>
        </div>
    </b-card-text>
    <div class="row" v-if="loading">
      <div class="col-12 d-flex justify-content-center">
        <b-spinner
          variant="primary"
          large
          label="loading shipping..."
        ></b-spinner>
      </div>
    </div>
  </div>
</template>

<script>
import UpdatedConfirmOperation from "./UpdatedConfirmOperation.vue";
import CreateShippingModal from "./CreateShippingModal.vue";
export default {
  name: "ShippingAddress",
  data() {
    return {
      loading: false,
      selectedShipping: null,
      selectedIndex: null,
    };
  },
  components: {
    UpdatedConfirmOperation,
    CreateShippingModal,
  },

  methods: {
    shipping(data) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.preview,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });
      this.$store
        .dispatch("checkout/choseShipping", {
          id: data,
          isLogin: this.$store.getters["auth/isLogged"],
        })
        .then(() => {
          
          this.$emit("RefreshSipping");
          loader.hide();

          this.$store
            .dispatch("checkout/getCartt", this.$store.getters["auth/isLogged"])
            .then(() => {
              loader.hide();
            })
            .catch(() => {});
        })
        .catch(() => {});
    },

    handleDeleteShipping(id) {
      this.$store.dispatch("checkout/deleteShippingAdd", id)
      .then(() => {
        this.$flashMessage.success({
          message: "Shipping address deleted successfully",
          time: 3000,
        });
      })
      .catch((error) => {
        this.flashMessage.show({
              status: "error",
              message: "The shipping address that is in use can not be deleted",
              time: 5000,
            });
      });
    },
    showConfirmModal() {
      this.$emit("showconfirm");
    },

    loadActualComponent3() {
      this.$emit("loadActualComponent3");
    },

    loadActualComponent1() {
      this.$emit("loadActualComponent1");
    },
    openEditModal(index) {
    this.selectedIndex = index;
    this.$bvModal.show('edit-shipping-modal');
  }
  
  },
  computed: {
    shippingsTab() {
      console.log(this.$store.state.checkout.allShipping);
      return this.$store.state.checkout.allShipping;
    },
    selectedShippingId: {
      get() {
        // Find the active shipping item and return its ID
        const activeShipping = this.shippingsTab.find(
          (item) => item.active == 1
        );
        return activeShipping ? activeShipping.id : null;
      },
      set(value) {
        // Directly set the data property rather than the computed property
        this.selectedShipping = value;
      },
    },
  },
  mounted() {
    this.loading = true;
    this.$store
      .dispatch("checkout/getAllShippingAdd")
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  },
  created() {
    // Initialize selectedShipping with the ID of the active shipping item if available
    this.selectedShipping = this.selectedShippingId;
  },
};
</script>

<style scoped>
/* .ship-add:not(:last-child){
	border-bottom: 1px solid #c2c0c0;
} */
 .title-style {
  font-size: 30px !important;
  font-weight: 700 !important;
  color: black;
 }
.top-div {
  margin-left: 1px !important;
  margin-right: 18px !important;
  margin-bottom: 20px !important;
}
.hire-btn {
  margin-top: 2%;
  width: 160px;
  height: 46px;
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 10px;
}
.dotted-border {
    border-top: 2px dotted #455a64; 
    border-bottom: 2px dotted #455a64; 
    padding: 10px 0; 
  }
 .icon-color {
  color: black;
 }
 .h-color {
  color: black;
 }
.fixed-width {
  text-align: start;
  width: 200px; 
  margin-right: 10px; 
}

.fixed-width:last-child {
  margin-right: 0; 
}
.title-font-size {
  font-size: 18px !important;
}
.btnx {
  /* display: inline-block; */
  font-weight: 400;
  color: white;
  background-color: #e75c18;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  text-transform: capitalize;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  float: right;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.btnx:hover {
  color: #fff;
  background-color: #cc4d0d;
  border-color: #cc4d0d;
}

.headline_and_btns {
  display: flex;
  justify-content: space-between;
}

@media screen and (max-width: 600px) {
  .headline_and_btns {
    flex-direction: column;
    align-items: flex-start;
  }

  .buttons {
    margin-top: 7px;
    margin-bottom: -12px;
  }
}

@media screen and (max-width: 376px) {
  .btnx,
  .backBtn {
    float: left;
  }

  .btnx {
    margin-right: 6px;
    margin-bottom: 4px;
  }
}

@media screen and (max-width: 290px) {
  .btnx {
    padding: 0.275rem 0.65rem;
    font-size: 0.9rem;
    /* line-height: 1.5; */
  }
}
</style>
