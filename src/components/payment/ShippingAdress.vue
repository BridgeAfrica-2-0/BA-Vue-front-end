<template>
  <div class="bg-white">
    <div class="row">
      <div class="col-lg-8">
        <div class="row justify-content-between align-items-center top-div" v-if="!review">
          <div>
            <h4 class="title-style">{{ $t("general.SHIPPING") }}</h4>
          </div>
          <div>
            <button
              v-b-modal.create-shipping-modal
              type="submit"
              class="btn btn-primary hire-btn"
            >
              {{ $t("general.New_Address") }}
            </button>
          </div>
        </div>

        <!-- When review is true, only show title and Edit button -->
        <div
          v-if="review"
          class="d-flex justify-content-between align-items-center"
        >
          <!-- Title aligned to the left -->
          <h4 class="title-style">{{ $t("general.SHIPPING") }}</h4>

          <!-- Buttons aligned to the right -->
          <div>
            <!-- <b-button
              v-b-modal.edit-shipping-modal
              variant="primary"
              @click="goBack()"
              class="back-btn mr-2"
            >
              <i class="fas fa-arrow-alt-circle-left mr-2"></i>
              BACK
            </b-button> -->

            <b-button
              :v-b-modal="!review ? 'edit-shipping-modal' : null"
              variant="primary"
              @click="onEdit()"
              class="edit-btn"
            >
              <i class="fas mr-2">&#xf304;</i>
              {{ $t("general.Edit") }}
            </b-button>
          </div>
        </div>

        <!-- Shipping Address Details -->
        <b-card-title
          v-if="!review"
          class="headline-font-size font-weight-bold headline_and_btns mb-0"
        >
          <span>{{ $t("general.Shipping_Address") }}</span>
        </b-card-title>
        <div class="row">
          <div class="col-12">
            <CreateShippingModal @activeAddress="shipping" />
          </div>
          <div class="col-12">
            <CreateShippingModal
              :title="$t('general.Edit_Shipping_Address')"
              mode="edit"
              :editForm="shippingsTab[selectedIndex]"
              @activeAddress="shipping"
            />
          </div>
        </div>
        <!-- Active shipping address only when review is true -->
        <b-card-text v-if="review" class="mt-4">
          <div class="row">
            <div class="col-12">
              <div
                class="ship-add w-100 d-flex justify-content-between align-items-start"
              >
                <div class="d-inline-flex">
                  <div class="mb-3 d-flex justify-content-between">
                    <div class="flex-fill fixed-width">
                      <h5 class="h-color mb-2">{{ $t("general.Ship_to") }}</h5>
                      <p class="mb-1">{{ activeData?.name }}</p>
                      <p class="mb-1">
                        {{ activeData?.city }}, {{ activeData?.region }}, {{ activeData?.zip_code }}
                      </p>
                      <p class="">{{ activeData?.country }}</p>
                    </div>
                    <div class="flex-fill fixed-width">
                      <h5 class="h-color mb-2">
                        {{ $t("general.Contact_details") }}
                      </h5>
                      <p class="mb-1">{{ activeData?.email }}</p>
                      <p class="">{{ activeData?.phone }}</p>
                    </div>
                    <div class="flex-fill fixed-width">
                      <h5 class="h-color mb-2">
                        {{ $t("general.Shipping_speed") }}
                      </h5>
                      <p class="mb-1">Business Days</p>
                      <p class="">FREE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-card-text>

        <!-- Show all shipping addresses if review is false -->
        <hr v-if="!review" class="dotted-hr" />
        <b-card-text
          v-if="!review"
          class="mt-4 mr-0 w-100 d-flex justify-content-between align-items-start pl-3"
        >
          <div class="row bg-white" style="padding: 10px 20px 0 0px;">
            <div>
              <div
                class="ship-add w-100 d-flex justify-content-between align-items-start"
                v-for="(shipping_item, index) in shippingsTab"
                :key="shipping_item.id"
              >
                <div class="d-inline-flex" style="flex-grow: 1;">
                  <div class="operator-select-box mr-2">
                    <input 
                      type="radio"
                      :v-model="shipping_item.id"
                      @change="shipping(shipping_item)"
                      :checked="shipping_item.active == 1"
                      name="shipping"
                      value=""
                    />
                  </div>
                  <div class="mb-3 d-flex justify-content-between">
                    <div class="flex-fill fixed-width">
                      <h5 class="h-color">{{ $t("general.Ship_to") }}</h5>
                      <p class="mb-1">{{ shipping_item?.name }}</p>
                      <p class="mb-1">
                        {{ shipping_item?.city }}, {{ shipping_item?.region }}, {{ shipping_item?.zip_code }}
                      </p>
                      <p class="">{{ shipping_item?.country }}</p>
                    </div>
                    <div class="flex-fill fixed-width">
                      <h5 class="h-color">
                        {{ $t("general.Contact_details") }}
                      </h5>
                      <p class="mb-1">{{ shipping_item?.email }}</p>
                      <p class="">{{ shipping_item?.phone }}</p>
                    </div>
                    <div class="flex-fill fixed-width">
                      <h5 class="h-color">
                        {{ $t("general.Shipping_speed") }}
                      </h5>
                      <p class="mb-1">Business Days</p>
                      <p class="">FREE</p>
                    </div>
                  </div>
                </div>
                <div class="row ml-2" style="flex-grow: 1;">
                  <div>
                    <a
                      href="#"
                      v-b-modal.edit-shipping-modal
                      class="mr-1 mr-sm-2 icon-color"
                      @click.prevent="openEditModal(index)"
                    >
                      <i class="fas">&#xf304;</i>
                    </a>
                  </div>
                  <div class="ml-1">
                    <UpdatedConfirmOperation
                      :message="
                        $t(
                          'general.Do_you_want_to_delete_this_shipping_address'
                        )
                      "
                      @sendid="handleDeleteShipping"
                      :id_item="shipping_item?.id"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </b-card-text>
        <hr v-if="!review" class="dotted-hr" />

        <div class="row" v-if="loading">
          <div class="col-12 d-flex justify-content-center">
            <b-spinner
              variant="primary"
              large
              label="loading shipping..."
            ></b-spinner>
          </div>
        </div>
        <Order v-if="review" @unavailableProducts="handleUnavailableProducts" />
      </div>

      <div class="col-lg-4 mb-4">
        <OrderSummary :step="1" :handleSubmit="handleSubmit" :disable="buttonDisabled"/>
      </div>

      <b-modal
        v-model="showModal"
        @hidden="hideAuthModal"
        hide-footer
        size="xl"
        :hide-header-close="isCheckoutRoute"
        :no-close-on-backdrop="isCheckoutRoute"
        :no-fade="isCheckoutRoute"
        :backdrop="!isCheckoutRoute"
      >
        <login @success="success" @hideAuthModal="hideAuthModal" />
      </b-modal>
    </div>
  </div>
</template>

<script>
import UpdatedConfirmOperation from "./UpdatedConfirmOperation.vue";
import CreateShippingModal from "./CreateShippingModal.vue";
import OrderSummary from "../../components/order-summary/OrderSummary.vue";
import Order from "../../components/payment/Order.vue";
import login from "@/components/Login";

export default {
  name: "ShippingAddress",
  props: {
    review: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
      selectedShipping: null,
      selectedIndex: null,
      showModal: false,
      activeData: {},
      buttonDisabled: false,
      isCameroon: false
    };
  },
  components: {
    Order,
    UpdatedConfirmOperation,
    CreateShippingModal,
    OrderSummary,
    login,
  },
  methods: {
    handleEditClick() {
      this.$emit("edit-button-clicked");
    },
    shipping(data) {
      this.activeData = { ...data };
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
            .dispatch("checkout/getAllShippingAdd", { islogin: this.islogin })
            .then(() => {
              loader.hide();
            })
            .catch(() => {
              loader.hide();
            });
            this.$store.dispatch("checkout/shippingFee")
            .then(() => {
              this.buttonDisabled = false;
            })
           .catch((error) => {
          if (error) {
            console.log("Erro+++++++++++++++", error);
            this.buttonDisabled = true;
            this.flashMessage.show({
              status: "error",
              message: "The shipping address is not valid",
              time: 5000,
            });
          }
        });
          // this.shippingsTab();
          this.$store
            .dispatch("checkout/getCartt", this.$store.getters["auth/isLogged"])
            .then(() => {
              loader.hide();
            })
            .catch(() => {});
        })
        .catch(() => {});
    },
    hideAuthModal() {
      this.$store
      .dispatch("checkout/getAllShippingAdd", { islogin: this.islogin })
      .then(() => {
        this.selectedShipping = this.selectedShippingId;
        this.activeData = this.activeDataVal;

        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
      this.$store
      .dispatch("checkout/getCartSummary", { islogin: this.islogin })
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
      this.showModal = false;
    },
    success() {
      this.$store
      .dispatch("checkout/getAllShippingAdd", { islogin: this.islogin })
      .then(() => {
        this.selectedShipping = this.selectedShippingId;
        this.activeData = this.activeDataVal;

        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
      this.$store
      .dispatch("checkout/getCartSummary", { islogin: this.islogin })
      .then(() => {
        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
      this.showModal = false;
    },
    handleDeleteShipping(id) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.preview,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });
      this.$store
        .dispatch("checkout/deleteShippingAdd", id)
        .then(() => {
          loader.hide();
        })
        .catch((error) => {
          loader.hide();
          if (error) {
            this.flashMessage.show({
              status: "error",
              message: "The shipping address that is in use cannot be deleted",
              time: 5000,
            });
          }
        });
    },
    openEditModal(index) {
      this.selectedIndex = index;
      this.$bvModal.show("edit-shipping-modal");
    },
    handleSubmit() {
      console.log("calling handle submit", 2);
      if (this.review) {
        let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.preview,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });
        this.$store
          .dispatch("checkout/createOrder", {
            isLogin: this.$store.getters["auth/isLogged"],
            isLocal:  this.isCameroon,
            shipping_fee: this.shippingFee ? this.shippingFee: null,
            shipping_method: this.shippingMethod ? this.shippingMethod : null
          })
          .then(({ data }) => {
            this.$emit(
              "showoperator",
              data.data.total_orders_amount,
              data.data.order_ids
            );
            loader.hide();
          })
          .catch(() => {
            loader.hide();
          });
        // this.$emit("handleNextStep", 3);
      } else {
        this.$emit("handleNextStep", 2);
      }
    },
    goBack() {
      this.buttonDisabled = false;
      if (this.review) {
        this.$emit("handleNextStep", 1);
      } else {
        this.$emit("handleNextStep", 2);
      }
    },
    onEdit() {
      this.buttonDisabled = false;
      this.$emit("handleNextStep", 1);
    },
    handleUnavailableProducts(productNames) {      
      if(productNames.length > 0 && this.isCameroon) {
        this.buttonDisabled = true;
        this.flashMessage.show({
            status: "error",
            message: `${productNames}  not available for selected shipping Address`
          });
      }
    }
  },
  computed: {
    isCheckoutRoute() {
      return (
        this.$route.name === "checkout" || this.$route.path === "/checkout"
      );
    },
    islogin() {
      return this.$store.getters["auth/isLogged"];
    },
    shippingsTab() {
      return this.$store.state.checkout.allShipping;
    },
    shippingFee() {
      return this.$store.state.checkout.shippingFee;
    },
    shippingMethod() {
      return this.$store.state.checkout.shippingMethod;
    },
    selectedShippingId: {
      get() {
        const activeShipping = this.shippingsTab.find(
          (item) => item.active == 1
        );
        if(activeShipping?.id)
      {
        this.$store.dispatch("checkout/shippingFee");
      }
        return activeShipping ? activeShipping.id : null;
      },
      set(value) {
        this.selectedShipping = value;
      },
    },
    activeDataVal: {
      get() {
        const activeShipping = this.shippingsTab.find(
          (item) => item.active == 1
        );
        return activeShipping ? activeShipping : null;
      },
      set(value) {
        this.activeData = value;
      },
    },
  },
  mounted() {
    this.selectedShipping = this.selectedShippingId;
    this.activeData = this.activeDataVal;
    if(!this.review)
    {
    this.loading = true;
    this.$store
      .dispatch("checkout/getAllShippingAdd", { islogin: this.islogin })
      .then(() => {
        this.selectedShipping = this.selectedShippingId;
        this.activeData = this.activeDataVal;

        this.loading = false;
      })
      .catch(() => {
        this.loading = false;
      });
  }
     const isLocalVal = localStorage.getItem("isLocal");
     this.isCameroon = isLocalVal !== "false";
  },
  created() {
    this.selectedShipping = this.selectedShippingId;
    this.activeData = this.activeDataVal;
    if (!this.$store.getters["auth/isLogged"]) {
      this.showModal = true;
    }
  },
};
</script>

<style scoped>
/* .ship-add:not(:last-child){
	border-bottom: 1px solid #c2c0c0;
} */
input[type="radio"] {
  accent-color: #e07715;
}
.dotted-hr {
  border: 0;
  border-top: 2px dotted black;
  height: 0;
  margin: 20px 25px 20px 0;
  position: relative;
}
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
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border: none;
  font-weight: 600;
  border-radius: 10px;
}
.edit-btn {
  margin-top: 2%;
  width: 100px;
  height: 46px;
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 10px;
}
.back-btn {
  width: 100px;
  height: 46px;
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  border-radius: 10px;
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
.title-style {
  font-size: 20px!important;
  
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
