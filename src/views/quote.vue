<template>
  <div>
    <nav
      id="navbarExample"
      class="navbar navbar-expand-lg fixed-top navbar-light"
      aria-label="Main navigation"
    >
      <div class="container">
        <div style="display: contents" class="d-contents d-lg-none">
          <router-link to="/search">
            <a class="nav-link d-block d-lg-none">
              <b-icon
                icon="search"
                style="float: left"
                font-scale="3"
                variant="primary"
              ></b-icon
            ></a>
          </router-link>

          <router-link to="/">
            <a class="d-block d-lg-none" rel="home" style="margin-left: -15%">
              <span class="logo" style="min-width: 148px"
                ><img id="mwhitelogo" src="assets/images/bawhitelogo.png" />

                <img
                  class="d-none"
                  id="mblacklogo"
                  width="148px"
                  src="assets/images/black_logo.png"
                />
              </span>
            </a>
          </router-link>

          <a href="#">
            <button
              class="navbar-toggler p-0 border-0 mr-3 white mt-2"
              type="button"
              id="navbarSideCollapse"
              aria-label="Toggle navigation"
            >
              <fas-icon class="primary" :icon="['fa', 'bars']" size="lg" />
            </button>
          </a>
        </div>

        <div
          class="navbar-collapse offcanvas-collapse"
          id="navbarsExampleDefault"
        >
          <ul
            id="primary-menu"
            class="navbar-nav ms-auto navbar-nav-scroll no-responsive"
          >
            <li class="nav-item">
              <router-link to="/">
                <a class="nav-link active" aria-current="page" href="#header">{{
                  $t("general.Home")
                }}</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'about' }">
                <a class="nav-link" href="#services">
                  {{ $t("general.About_Us") }}
                </a></router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'contact' }">
                <a class="nav-link" href="#details"
                  >{{ $t("general.Contact_Us") }}
                </a>
              </router-link>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#details"> </a>
            </li>

            <li class="nav-item menu-item-logo d-none d-lg-block">
              <div class="site-logo" style="width: 164px">
                <a href="/" rel="home">
                  <span class="logo" style="min-width: 148px; margin-left: 30%"
                    ><img
                      class=""
                      id="whitelogo"
                      src="assets/images/bawhitelogo.png"
                    />

                    <img
                      class="d-none"
                      id="blacklogo"
                      src="assets/images/black_logo.png"
                    />
                  </span>
                </a>
              </div>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'signup' }">
                <a class="nav-link" href="#features">{{
                  $t("general.Sign_Up")
                }}</a>
              </router-link>
            </li>

            <li class="nav-item">
              <router-link :to="{ name: 'Login' }">
                <a class="nav-link" href="#features">{{
                  $t("general.Login")
                }}</a>
              </router-link>
            </li>

            <li class="nav-item">
              <b-dropdown variant="ligth white">
                <template #button-content>
                  <img class="size poslang" alt="" />
                  <span class="poslang mt-2"></span>
                </template>
                <b-dropdown-item @click="change('en')">
                  <b-img-lazy
                    src="../assets/img/about/en.png"
                    class="size poslang"
                    alt=""
                  />
                  EN</b-dropdown-item
                >
                <b-dropdown-item @click="change('fr')"
                  ><b-img-lazy
                    src="../assets/img/la-france.png"
                    class="size poslang"
                    alt=""
                  />
                  FR</b-dropdown-item
                >
              </b-dropdown>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div id="loadingg" @click="closeLoad">
      <semipolar-spinner
        :animation-duration="2000"
        :size="65"
        :color="'#ff1d5e'"
        class="loading-image"
      />
    </div>
    <header id="header" class="header">
      <div class="container herro">
        <div class="row">
          <div class="col-lg-7 col-xl-6">
            <div class="text-container">
              <sequential-entrance fromLeft delay="2000">
                <h1 class="h1-large">Request for Quotation</h1>
              </sequential-entrance>
            </div>
          </div>
          <div class="col-lg-5 col-xl-6"></div>
        </div>
      </div>
    </header>

    <!-- start of inauering form  -->

    <!-- bridge africa missions -->

    <div class="pt-50"> 

     

      
        <div class="row px-md-5 px-2">
          <div class="col-xl-6">
            <form novalidate class="md-layout" @submit.prevent="validateUser">
            <div class="md-layout-item md-small-size-100 m-left">
              <!-- 
             <div class="form mt-2 pt-2 pl-5 "> 
              <h1 class="h1-text "> Tell suppliers what you need  </h1>
             </div> -->

              <div class="">
                <b-card>
                  <h5>Basic product information</h5>

                  <md-field :class="getValidationClass('pname')">
                    <label for="pname" class=""> Product name </label>
                    <md-input
                      type="text"
                      name="pname"
                      id="name"
                      v-model="form.pname"
                    />

                    <span class="md-error" v-if="!$v.form.pname.required">
                      Name is required
                    </span>
                  </md-field>

                  <md-field :class="getValidationClass('category')">
                    <label for="category" class=""> Categories </label>

                    <md-select
                      v-model="form.category"
                      name="category"
                      id="category"
                    >
                      <md-option
                        v-for="cat in pcategories"
                        :key="cat.id"
                        :value="cat.id"
                      >
                        {{ cat.name }}
                      </md-option>
                    </md-select>

                    <span class="md-error" v-if="!$v.form.category.required">
                      category is required
                    </span>
                  </md-field>

                  <md-field :class="getValidationClass('quantity')">
                    <label for="qunatity" class=""> Quantity </label>
                    <md-input
                      class="white"
                      type="number"
                      name="qunatity"
                      id="quantity"
                      v-model="form.quantity"
                    />

                    <span class="md-error" v-if="!$v.form.quantity.required">
                      Name is required
                    </span>
                  </md-field>

                  <div class="row">
                    <div class="col-md-6">
                      <md-field :class="getValidationClass('budget')">
                        <label for="budget" class=""> Max Budget </label>
                        <md-input
                          class="white"
                          type="number"
                          name="budget"
                          id="budget"
                          v-model="form.budget"
                        />

                        <span class="md-error" v-if="!$v.form.budget">
                          Max Budget is required
                        </span>
                      </md-field>
                    </div>

                    <div class="col-md-6">
                      <md-field :class="getValidationClass('pmethod')">
                        <label for="pmethod" class=""> Payment Method </label>
                        <md-input
                          class="white"
                          type="text"
                          name="pmethod"
                          id="pmethod"
                          v-model="form.pmethod"
                        />

                        <span class="md-error" v-if="!$v.form.pmethod">
                          Payment method is required
                        </span>
                      </md-field>
                    </div>
                  </div>

                  <md-field>
                    <label>Textarea</label>
                    <md-textarea v-model="form.description"></md-textarea>
                  </md-field>

                  <md-field>
                    <md-input
                      type="file"
                      name="attachement"
                      id="attachement"
                      v-model="form.attachement"
                      :disabled="sending"
                    />
                  </md-field>
                </b-card>

                <b-card class="mt-3">
                  <h5>Shipping & Payment</h5>

                  <md-field class="">
                    <label for="qunatity" class=""> Shipping method </label>
                    <md-input
                      class="white"
                      type="text"
                      name="shipping"
                      id="shipping"
                      v-model="form.shipping"
                    />
                  </md-field>

                  <div class="md-field md-theme-default md-select">
                    <country-select
                      v-model="form.country"
                      topCountry="US"
                      class="md-input form-control"
                    />
                  </div>

                  <div class="md-field md-theme-default md-select">
                    <region-select
                      v-model="form.region"
                      class="md-input form-control"
                    />
                  </div>

                  <md-field class="">
                    <label for="l-time" class=""> Lead Time </label>
                    <md-input
                      class="white"
                      type="text"
                      name="ltime"
                      id="l-time"
                      v-model="form.ltime"
                    />

                    day(s) after supplier receives the initial payment
                  </md-field>

                  <md-field class="">
                    <label for="budget" class=""> Payment method </label>
                    <md-input
                      class=""
                      type="text"
                      name="p-nethod"
                      id="budget"
                      v-model="form.pmethod"
                    />
                  </md-field>
                </b-card>

                <b-card class="mt-3 p-1 text-center">
                  <b-button
                    variant="outline-primary"
                    type="submit"
                    class="mb-3"
                  >
                    Submit Form
                  </b-button>
                </b-card>
              </div>
            </div>

             </form>
          </div>
     

      <div class="col-xl-6 p-0  b-div"> 
             
             
             
            </div>


            


        </div>
     

      
    </div>

    <!-- end of inquiring form  -->
  </div>
</template>

<script>
import { required, sameAs, email, minLength } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";
import axios from "axios";

export default {
  name: "FormValidation",
  mixins: [validationMixin],

  data: () => ({
    baseurl: process.env.baseURL,

    form: {
      quantity: null,
      pname: null,
      category: null,
      budget: null,
      email: null,
      pmethod: null,
      description: null,
      country: "",
      region: "",

      shipping: "",
      ltime: "",

      attachement: null,
    },

    userSaved: false,
    sending: false,
    lastUser: null,
  }),

  validations: {
    form: {
      pname: {
        required,
      },

      category: {
        required,
      },

      budget: {
        required,
      },

      pmethod: {
        required,
      },

      quantity: {
        required,
      },
    },
  },

  computed: {
    pcategories() {
      return this.$store.state.auth.categories;
    },

    postInfo() {
      return this.$store.state.auth.quote;
    },
  },

  mounted() {
    this.categories();

    this.form.name = this.$route.query.name;
    this.form.email = this.$route.query.email;
    this.form.tel = this.$route.query.tel;
    this.form.pname = this.$route.query.pname;
    this.form.quantity = this.$route.query.quantity;
  },

  methods: {
    categories() {
      this.$store
        .dispatch("auth/categories")
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    closeLoad() {
      this.removeFadeOut(document.getElementById("loadingg"), 2000);
    },

    flashErrors(errors) {
      let err = "";
      Object.values(errors).forEach((element) => {
        err = element[0];
      });

      return err;
    },

    saveForm() {
      this.sending = true;
      axios
        .post("guest/enquiry-form/product", {
          name: this.form.name,
          product_name: this.form.pname,
          email: this.form.email,
          category_id: this.form.category,
          phone: this.form.tel,
          quantity: this.form.quantity,
          max_budget: this.form.budget,
          payment_method: this.form.pmethod,

          details: this.form.description,
          shipping_location: this.form.shipping,

          country: this.form.country,
          time_of_shipping: this.form.shipping,
          city: this.form.region,
          attachment: this.form.attachement,
        })
        .then(({ data }) => {
          this.sending = false;

          this.flashMessage.show({
            status: "success",
            title: "Successfully Send",
          });
        })
        .catch((err) => {
          this.sending = false;

          if (err.response.status == 422) {
            console.log({ err: err });
            console.log(err.response.data.message);

            this.flashMessage.show({
              status: "error",

              message: this.flashErrors(err.response.data.errors),
              blockClass: "custom-block-class",
            });
          } else {
            this.flashMessage.show({
              status: "error",
              title: "error sending form",
            });
            console.log({ err: err });
          }
        });
    },

    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty,
        };
      }
    },

    validateUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.saveForm();
      }
    },
  },
};
</script>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");



.b-div {
  background-image: url("ash.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}



.pt-50 {
  padding-top: 50px;
}
.home-icon {
  font-size: 35px;
}

.fade-transition {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter,
.fade-leave {
  opacity: 0;
  visibility: hidden;
}

#loading {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.8;
  background-color: white;
  z-index: 99;
}

#loading-image {
  z-index: 100;
}

.advance_pic {
  height: 450px;
  object-fit: cover;
}

.mt-100 {
  margin-top: 100px;
}

.icon-tbg {
  border: 1.5px solid white;
  text-align: center;
  width: 50px;
  height: 50px;
  vertical-align: middle;
  align-content: center;
  margin-left: 40%;
}

.about-box1:hover .icon-tbg {
  background: rgb(255, 255, 255, 0.15);
}

.about-box1:hover .icon-tbg,
.about-box1:hover ~ .icon-tbg {
  color: #fff;
  background-color: #000;
}

.about-box1:hover {
  opacity: 0.5;
  background: rgb(255, 255, 255, 0.15);
}

.poslang {
  width: 20px !important;
}

.mt-100 {
  margin-top: 100px;
}

.bg-dark {
  background-color: #000000 !important;
}

.font-14 {
  font-size: 14px !important;
}

.font-16 {
  font-size: 16px !important;
  font-weight: bold;
}

.video-container {
  padding-top: 50px;
  padding-bottom: 50px;
}

.biz-konnect-video {
  top: 0;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  background-color: #783dff;
  opacity: 1;
  z-index: -1;
}

.biz-cover {
  opacity: 0.8;
}

.biz-konnect-video iframe {
  min-height: 100vh;
}

.hotbizcontent {
  padding: 25px;
}

.divider {
  margin-left: 35%;
  margin-right: 35%;
}

.hotbizname {
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 700;
}

.hotbizz:hover {
  background-color: orange;
  opacity: 0.8;
}

.r-image {
  height: 410px !important;
  object-fit: contain;
}

.pl-21 {
  padding-left: 21px;
}

.pl-126 {
  padding-left: 121px;
}

.pr-21 {
  padding-right: 21px;
}
.h1-large {
  color: white;
  font-weight: 600;
}
.pl-100 {
  padding-left: 100px;
}

.pr-100 {
  padding-right: 100px;
}
.pb-25 {
  padding-bottom: 25px;
}

.p-100 {
  padding: 100px;
}

.pb-100 {
  padding-bottom: 100px;
}
.h1-text {
  font-style: normal;
  color: black;
  font-weight: 700;
}

.pt-100 {
  padding-top: 100px;
}

.play-icon {
  position: absolute;
  margin-top: -30%;
  margin-left: 50%;
  color: white;
}
.mb-20 {
  margin-bottom: 20px;
}

.cat-btns {
  text-align: left;
}
.cat-btn:hover {
  background: #e75c18;
  border-color: #e75c18;
}

.cat-btn:active {
  background: #e75c18;
  border-color: #e75c18;
}
.cat-btn:focus {
  background: #e75c18;
  border-color: #e75c18;
}
@media (min-width: 768px) {
  .herro {
    margin-top: 190px;
  }

  .expln-header {
    font-size: 36px;
    color: black;
    font-weight: 700;
    text-transform: uppercase;
  }

  .advance-account-fit {
    margin-top: -95px;
  }
  .cat-btn {
    background: white;
    opacity: 0.9px;
    border-radius: 5px;
    font-size: 14px;
  }

  .video-card {
    height: 70%;
    width: 100%;
    float: right;
    top: 20%;
    right: -150px;
    align-items: center;
    display: flex;
    vertical-align: middle;
    padding-top: 15%;
    position: absolute;

    z-index: 999;
  }
}

@media (max-width: 768px) {
  .expln-header {
    font-size: 18px;
    color: black;
    font-weight: 700;
    text-transform: uppercase;
  }

  .pl-126 {
    padding-left: 0px;
  }

  .pr-21 {
    padding-right: 0px;
  }

  .h1-text {
    font-size: 18px;
  }
  .herro {
    margin-top: 220px;
  }
  .cat-btn {
    background: white;
    opacity: 0.9px;
    border-radius: 5px;
    font-size: 12px;
    padding: 5px;
  }

  .video-card {
    align-items: center;
    display: flex;
    vertical-align: middle;
    padding-top: 5px;
  }

  .pl-21 {
    padding-left: 21px;
  }

  .h1-large {
    color: white;
    font-weight: 600;
  }
  .pl-100 {
    padding-left: 50px;
  }

  .pr-100 {
    padding-right: 50px;
  }
  .pb-25 {
    padding-bottom: 25px;
  }

  .p-100 {
    padding: 50px;
  }

  .pb-100 {
    padding-bottom: 50px;
  }
}

.search-form {
  height: 50px;
  opacity: 0.9px;
  border-radius: 5px 0px 0px 5px;
}

.input-group-text {
  padding-left: 20px;
  padding-right: 20px;
  color: white;
  background: #e75c18;
  border-radius: 0px 5px 5px 0px;
  border-color: #e75c18;
}
.fixed-top {
  background: transparent;
  position: absolute !important;
}

.header {
  height: 200px;
}

@media (min-width: 768px) {
  .navbar-collapse ul {
    padding: 0;
    display: table;
    width: 100%;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
  .navbar-collapse ul li {
    display: table-cell;
  }

  .pl-126 {
    padding-left: 121px;
  }

  .pr-21 {
    padding-right: 21px;
  }

  #navbarsExampleDefault {
    padding-left: 1px;
    padding-right: 1px;
  }
}

.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
  border: 1px solid;
}

.font-poppin {
  font-family: poppins;
}

.nav-link {
  text-transform: capitalize;
}

.nav-item {
  text-align: center;
}

.pr-15 {
  padding: 15%;
}
</style>

<style scoped>
.navbar-light .navbar-nav .nav-link {
  color: white !important;
}

.black-text .nav-item .nav-link {
  color: black !important;
}
</style>

