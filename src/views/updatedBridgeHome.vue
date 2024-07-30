<template>
    <div class="bridge-home">
      <site-header class="topbar" />
  
 

<!-- <section class="p-0">
  <div>
    <div class="row">
      <div class="col-md-12 p-0">
        <div>
          <splide :options="options" class="r-image">
            <splide-slide>
              <div class="crtv-bans">
                <img src="assets/home/header_slide_1.png" alt="Image 1" class="slide-img">
                <button class="shop-now-btn">Shop Now</button>
              </div>
            </splide-slide>
            <splide-slide>
              <div class="crtv-bans">
                <img src="assets/home/header_slide_1.png" alt="Image 2" class="slide-img">
                <button class="shop-now-btn">Shop Now</button>
              </div>
            </splide-slide>
          </splide>
        </div>
      </div>
    </div>
  </div>
</section> -->

<section class="p-0">
  <div>
    <div class="row">
      <div class="col-md-12 p-0">
        <div class="position-relative">
          <splide :options="options" class="r-image">
            <splide-slide>
              <div class="crtv-bans">
                <img src="assets/home/header_slide_1.png" alt="Image 1" class="slide-img">
              </div>
            </splide-slide>
            <splide-slide>
              <div class="crtv-bans">
                <img src="assets/home/header_slide_1.png" alt="Image 2" class="slide-img">
              </div>
            </splide-slide>
          </splide>
          <button class="shop-now-btn"><span style=" border-bottom: 2px solid white; ">Shop Now</span></button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- <section class="product-section">
  <div class="container">
    <h2 class="section-title">Our Quality Products</h2>
    <p class="section-description">With over 100 categories of products, easily shop from businesses in Cameroon anytime, anywhere.</p>
    <div class="button-group">
      <button class="filter-button active">Available Cameroon</button>
      <button class="filter-button">Available Worldwide</button>
    </div>
    <div class="grid">
      <div v-for="(product, index) in products.slice(0, 8)" :key="index" class="grid-item">
        <img :src="product.image" :alt="product.title">
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
        <div class="bottom-info">
          <span class="price">{{ product.price }}</span>
          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</section> -->



<!-- <section class="product-section">
  <div class="container">
    <h3 class="section-title">Our Quality Products</h3>
    <p class="section-description">With over 100 categories of products, easily shop from businesses in Cameroon anytime, anywhere.</p>
    <div class="button-group">
      <button class="filter-button active">Available Cameroon</button>
      <button class="filter-button">Available Worldwide</button>
    </div>
    <div class="grid">
      <div v-for="(product, index) in products.slice(0, 8)" :key="index" class="grid-item">
        <div class="image-container">
          <img :src="product.image" :alt="product.title" class="product-image">
        </div>
        <div class="content-container">
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
        </div>
        <div class="bottom-info">
          <span class="price">{{ product.price }}</span>
          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</section> -->


<section class="product-section">
  <div class="container">
    <h3 class="sections-title"><span style="color: #E75B17;">Our</span> Quality Products</h3>
    <p class="section-description">With over 100 categories of products, easily shop from businesses in Cameroon anytime, anywhere.</p>
    <div class="button-group">
  <div class="button-start">
    <button class="filter-button">Available Cameroon</button>
    <button class="filter-button">Available Worldwide</button>
  </div>
  <div class="button-end">
    <button class="filter-button">
      Sort: Best Match
      <i class="fas fa-caret-down"></i> <!-- Font Awesome icon for the dropdown -->
    </button>
    <button class="filter-button"> <i class="fas fa-caret-down"></i></button>
  </div>
</div>
<div class="see-all-p">
  <p>See All Cameron</p>
</div>
    <div class="grid">
      <div v-for="(product, index) in products.slice(0, 8)" :key="index" class="grid-item">
        <div class="image-container">
          <img :src="product.image" :alt="product.title" class="product-image">
          <button class="favorite-button">
            <i class="fas fa-heart"></i>
          </button>
        </div>
        <div class="content-container">
        <div class="stock-status" :class="{'in-stock': product.inStock, 'out-of-stock': !product.inStock}">
          {{ product.inStock ? 'In Stock' : 'Out of Stock' }}
        </div>
          <h3>{{ product.title }}</h3>
          <p>{{ product.description }}</p>
        </div>
        <div class="bottom-info">
          <span class="price">{{ product.price }}</span>
          <button class="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</section>



   
      <section class="bg-white pb-3 pt-1">       
        <div class="container pt-2 pt-md-5 pb-3">
          <div class="market">
             <h3 data-aos="zoom-in" data-aos-offset="70px" data-aos-duration="1500">
              <span class="m-header-color"> {{ $t("general.buy_quality_product") }}  </span> {{ $t("general.from_ourMarket_place") }} 
            </h3>
            <p class="mt-2"> {{ $t("general.with_over_100_categories") }}
            </p>
            <b-tabs    active-nav-item-class="active-tab-item">
              <b-tab 
                :title="$t('general.avaliable_in_cameroon')" 
                title-link-class="title-linkClass"
              >
                <div class="product-slide" v-if="products.length"> 
               <splide :options="poptions" >
            <splide-slide v-for="item in products" class="p-4" :key="item.id">
              <div role="button" class="hotbizz text-center" @click="gotoproduct(item)">
                <b-img  :src="item.picture" class="p-image" />
                 <div class="hotbizcontent">
                  <div class="text-center hotbizname">
                   <h6 class="mt-4"> {{item.price}} Fcfa </h6> 
                  </div>
                </div> 
                </div>
            </splide-slide>
          </splide>
                </div>
              </b-tab>
              <b-tab
                :title="$t('general.avaliable_in_worlwide')" 
                title-link-class="title-linkClass"
              >
                <products type="international" />
              </b-tab>
            </b-tabs>
          </div>
        </div>  
      </section>
  
      <section class="pt-1 pb-1 bg-gradient">
        <div class="container pt-5  pb-5 " data-aos="zoom-out" data-aos-offset="70px" data-aos-duration="1500">
          <!-- <h3 class="text-center text-md-left"> <span>  {{ $t("general.About") }}  </span>  {{ $t("general.Us") }}   </h3> -->
          <div class="flex-container">
          <h3>
        <span class="line1">Sales channel</span><br>
        <span class="line2">Sell to Every Buyer,</span><br>
        <span class="line3">Everywhere</span>
         </h3>

         <p>{{ $t("general.help_small_and_medium_size") }} 
        <br>
         <b-button
          type="submit"
          variant="primary"
          block
          class="mb-3 mt-3 selling-btn"
          >
          Start Selling
          <span class="arrow-icon-wrapper">
              <i class="fas fa-arrow-right"></i>
          </span>
           </b-button>
          </p>
          </div>

  
          <div class="row h-100">
            <div class="col-md-4 pt-2">
              <div class="p-3 about-p"  data-aos="fade-up" data-aos-offset="70px" data-aos-duration="1500" >
                <div class="mb-3"> <img src="assets/home/new_about_5.png" alt=""> </div>
                <h6 class="bold">   {{ $t("general.sell_world_wide") }}  </h6>
                <p>
                  {{ $t("general.all_in_one") }}
                </p>
              </div>
            </div>
  
            <div class="col-md-4 pt-2">
              <div class="p-3 about-p"  data-aos="fade-up" data-aos-offset="70px" data-aos-duration="1500">
                <div class="mb-3"> 
                  <img src="assets/home/new_about_1.png" alt="">
                </div>
                <h6 class="bold"> {{ $t("general.buy_world_wide") }} </h6>
                <p>
                {{ $t("general.buy_world_wide_customers") }} 
                </p>
              </div>
            </div>
  
            <div class="col-md-4 pt-2">
              <div class="p-3 about-p"  data-aos="fade-up" data-aos-offset="70px" data-aos-duration="1500">
                <div class="mb-3"> <img src="assets/home/new_about_3.png" alt=""></div>
                <h6 class="bold"> {{ $t("general.logistics_support") }} </h6>
                <p>{{ $t("general.we_support_businese_throughout") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section style="background: #f8f8f8">
        <div class="container ba-business pt-5 pb-5">
          <div class="row">
            <div class="col-lg-6" data-aos="slide-right" data-aos-offset="70px" data-aos-duration="1500">
              <h3>
                <span class="m-header-color">Bridge Africa </span> {{ $t("general.for_busineses") }} 
              </h3>
              <p> {{ $t("general.sell_online_in_person") }}  </p>
  
              <div class="border-left-biz"> 
  
              <div class="babiz-list" @mouseover="changephoto(0)"  :class="{ active: currentNumber==0 }" >
                <h5> {{ $t("general.business_identity_and_oline") }} </h5>
                <p>
                  {{ $t("general.create_your_business_page") }}
                </p>
              </div>
  
              <div class="babiz-list "  @mouseover="changephoto(1)" :class="{ active: currentNumber==1 }" >
                <h5> {{ $t("general.online_business_database") }} </h5>
                <p>
                 {{ $t("general.make_your_business_visible") }} 
                </p>
              </div>
  
              <div class="babiz-list "  @mouseover="changephoto(2)" :class="{ active: currentNumber==2 }">
                <h5> {{ $t("general.unified_back_office") }} </h5>
                <p>
                   {{ $t("general.easily_manage_your_business") }}
  
                  
                </p>
              </div>
              </div>
            </div>
            <div class="col-lg-6" data-aos="slide-left" data-aos-offset="70px" data-aos-duration="1500">
              <!-- <img src="assets/home/forbiz.png" alt="" /> -->
  
                <b-img transition="fade" :src="bridge_for_biz[currentNumber]" />
            </div>
          </div>
        </div>
      </section>
  
      <section class="p-0 m-0" >
        <div class="container mt-0 p-0"  data-aos="zoom-in-up" data-aos-offset="70px" data-aos-duration="1500">
          <div class="row mt-0">
            <div class="col-lg-4 p-0 h-100 quote-img">
              <img src="assets/home/quotation.png" alt="">
            </div>
  
            <div class="col-lg-8 mt-md-5 align-items-center pl-lg-5 pl-md-5 quote-form" id="quote">
              
              <div class="m-left">
                <h3>
                  <span> {{ $t("general.let_help_u") }} </span>   {{ $t("general.find_products_and_services") }}
                </h3>
                <form novalidate @submit.prevent="validateUser">
                  <div class="form pt-1 row">
                    <div class="col-md-12">
  
                      <label for="name" class="pb-0 label-color">
                        {{ $t("general.looking_for_something") }}
                      </label>
                  <md-field :class="getValidationClass('pname')">
                    <md-input
                      type="text"
                      name="name"
                      class="ba-input"
                      id="name"
                      placeholder="Looking for something"
                      v-model="form.pname"
                    />
  
                    <span class="md-error" v-if="!$v.form.pname.required">
                      required
                    </span>
                  </md-field>
  
  
  
                    </div>
  
                    <div class="col-md-6">
                      <label for="qunatity" class="pb-0 label-color">
                        {{ $t("general.Quantity") }}
                      </label>
                  <md-field :class="getValidationClass('quantity')">
                    <md-input
                       class="ba-input "
                      type="tel"
                      name="qunatity"
                      id="quantity"
                      placeholder="Quantity"
                      v-model="form.quantity"
                    />
                  </md-field>
                    </div>
  
                    <div class="col-md-6">
                      <label for="uname" class="pb-0 label-color">
                        {{ $t("general.full_name") }}
                      </label>
                    <md-field :class="getValidationClass('name')">
                    <md-input
                      type="text"
                      name="uname"
                      id="uname"
                       class="ba-input"
                       placeholder="Full Name"
                      v-model="form.name"
                    />
  
                    <span class="md-error" v-if="!$v.form.name.required">
                      {{ $t("auth.First_Name_is_required") }}
                    </span>
                  </md-field>
  
                    </div>
  
                    <div class="col-md-6">
                      <label for="email" class="pb-0 label-color">
                        {{ $t("general.Email") }}
                      </label>
                       <md-field class="">
                    <md-input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                       class="ba-input"
                      v-model="form.email"
                    />
                  </md-field>
                    </div>
  
                    <div class="col-md-6">
                      <label for="name" class="pb-0 label-color"> {{ $t("general.Tel") }} </label>
                    <md-field :class="getValidationClass('tel')">
                    <md-input
                      type="tel"
                      name="tel"
                      id="tel"
                      placeholder="Tel."
                       class="ba-input "
                      v-model="form.tel"
                    />
  
                    <span class="md-error" v-if="!$v.form.tel.required">
                      {{ $t("auth.tel_is_required") }}
                    </span>
                  </md-field>
                    </div>
                    <div class="col-md-12 col-lg-5 mt-3">
                      <b-button
                        type="submit"
                        variant="primary"
                        block
                        class="quote-btn"
                      >
                        {{ $t("general.Request_For_Quotation") }}
                        <span class="arrow-icon-wrapper">
                <i class="fas fa-arrow-right"></i>
            </span>
                      </b-button>
                    </div>
                    <div></div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
     
  
  <section class="bg-whitee"> 
  
    <div class="container pt-5 pb-5 pl-lg-0 pr-lg-0"  data-aos="fade-left" data-aos-offset="70px" data-aos-duration="1500" > 
      <div class="row ">
        
        <div class="col-md-6 p-0">
          <div class=""> 
          <div class=" m-auto mt-md-3  p-2 " style="border-radius: 15px;"> 
            <h3> <span> {{ $t("general.Tailor") }} </span>    
         - {{ $t("general.Transformed") }} </h3>
     <div class="d-block">  
     <p style="color: black;"> {{ $t("general.hire_a_professional_tailor") }} </p>
        </div>
          </div>
         <div class=" p-2  text-left">  
      <b-button  @click="scrollTo" variant="primary" class="hire-btn"> {{ $t("general.hire_tailor") }}
        <span class="arrow-icon-wrapper">
                <i class="fas fa-arrow-right"></i>
            </span>
         </b-button>
          </div>
           </div>
          </div> 
  
  
          <div class="col-md-6">
          <div>
            <!-- <img class="hire-tailor-img" src="assets/home/hire_professional.png" alt=""> -->
             <video
                width="100%"
              
                style="object-fit:contain; border-radius: 10px;  border-radius:10px"
                controls
                poster="assets/home/hire_professional.png"
              >
                <source src="assets/video/intro_video.mp4" type="video/mp4" />
              </video>
          </div>
        </div>
  
         </div> </div>
  </section>
  <section class="bg-whitee network">
        <div class="container row  "  data-aos="zoom-in-up" data-aos-offset="70px" data-aos-duration="1500">
          <div class="col-3">
            <div class="card-container">
  <div class="card">
    <div class="card-content">
      <img src="assets/home/m_1.png" alt="Icon" class="icon">
      <span class="percentage">98%</span>
      <span class="text">Satisfaction</span>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <img src="assets/home/m_2.png" alt="Icon" class="icon">
      <span class="percentage">98%</span>
      <span class="text">Satisfaction</span>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <img src="assets/home/m_3.png" alt="Icon" class="icon">
      <span class="percentage">98%</span>
      <span class="text">Satisfaction</span>
    </div>
  </div>
  <div class="card">
    <div class="card-content">
      <img src="assets/home/m_3.png" alt="Icon" class="icon">
      <span class="percentage">98%</span>
      <span class="text">Satisfaction</span>
    </div>
  </div>
</div>


          </div>
          <div class="col-5">
            <img src="/assets/home/globe2.png"  alt=""> 
          </div>
          
          <div class="col-4">
  <div>
    <img src="/assets/home/logo.png"  alt="">
    <h3>
      <span>{{ $t("general.cameroon_focus") }}</span>
      Focused {{ $t('network.Marketplace') }}
    </h3>
    <h3 style="font-weight: normal;">
      Some of our statistics on stage performances in Cameroon
    </h3>
  </div>
  
  <div class="row mt-2">
    <div class="col-6 statistic-box">
      <span class="text-left">
        <h3>7500+</h3>
        <span style="color:#9F9F9F">{{ $t("general.7k_business") }}</span>
      </span>
    </div>
    <div class="col-6 statistic-box">
      <span class="text-left">
        <h3>13000+</h3>
        <span style="color:#9F9F9F">{{ $t("general.13k_customers") }}</span>
      </span>
    </div>
  </div>
  
  <div class="row mt-2">
    <div class="col-6 statistic-box">
      <span class="text-left">
        <h3>100+</h3>
        <span style="color:#9F9F9F">{{ $t("general.100_industries") }}</span>
      </span>
    </div>
    <div class="col-6 statistic-box">
      <span class="text-left">
        <h3>72H</h3>
        <span style="color:#9F9F9F">{{ $t("general.48h_respond_time") }}</span>
      </span>
    </div>
  </div>
</div>

        </div>
      </section>
     
  
      <section style="background: #F3F3F3">
        
        <div class="container resources pt-5 pb-4"  >
          <div class="text-center">
              <h3>
                <span> {{ $t("general.digital_education") }}   </span> <span style="color: black !important">{{ $t("general.to_help_you_make_more_money") }}  </span>
              </h3>
              <p class="pl-5 pr-5">
                {{ $t("general.use_our_special_design_training") }} 
              </p>
            </div>  
          <Resources />
        </div>
      </section>

      
      <section class="bg-whitee">
        
        <div class="container pt-5 pb-5"  >
          <div class="text-left">
              <h3>
                <span> {{ $t("general.television_show") }}   </span> <br> <span style="color: black !important">{{ $t("general.from_our_television_show") }}  </span>
              </h3>
            </div>  
            <TelevisionShow />
        </div>
      </section>

      <section class="bg-whitee faq">
        
        <div class="container pb-5"  >
          <div class="text-center">
              <h3 style="color: #e75b17">
                {{ $t("general.faq") }}
              </h3>
          </div>  
         <FAQ />
        </div>
      </section>
  
      <section class="bg-whitee">
        <div class="container mt-1 mt-md-5 mb-2 mb-md-5 pb-2 pb-md-5  pt-3 pt-md-5 "  data-aos="zoom-in-up" data-aos-offset="70px" data-aos-duration="1500">
        
        </div>
      </section>
   
      <SiteFooter />
      

    
  
   <ProductDetails
        @closemodal="closeDetailsProduct"
        :showModal="viewProduct"
        :product="product"
      />
  
  
   <LightBox
        ref="lightboxh"
        :media="crtv_show"
        :show-caption="true"
        :show-light-box="false"
       
     ></LightBox>
  
    </div>
  </template>
  
  <script>
  /**
   * this page is the home page of the system
   */
  import LightBox from "vue-it-bigger";
  import SiteFooter from "../components/home/updatedSiteFooter";
  import SiteHeader from "../components/home/updatedSiteHeader";
  import ProductDetails from "@/components/businessf/ProductDetails.vue";
  import Products from "../components/home/updatedProducts";
  import { mapGetters, mapActions, mapMutations } from "vuex";
  import axios from "axios";
  import AOS from 'aos'
  import 'aos/dist/aos.css'
  import { validationMixin } from "vuelidate";
  import { required, sameAs, email, minLength } from "vuelidate/lib/validators";
  import Resources from "../components/resources";
  import TelevisionShow from "../components/televisionShow";
  import FAQ from "../components/faq";
  
  export default {
    components: {
      SiteHeader,
      Products,
      Resources,
      TelevisionShow,
      FAQ,
      SiteFooter,
      LightBox,ProductDetails
    },
  
      mounted() {
      AOS.init();
      this.startRotation();
      this.bannerRotation();
    },
  
    data() {
      return {
        products: [
        {
          image: 'assets/home/header_slide_1.png',
          title: 'Set of bags and hats',
          description: 'Hand made set of bags and hats',
          price: '6 000,00 FCFA',
          inStock: true,
        },
        {
          image: 'assets/home/header_slide_1.png',
          title: 'Set of matching bags and hats',
          description: 'Hand made set of matching bags and hats',
          price: '5 000,00 FCFA',
          inStock: false,
        },
        {
          image: 'assets/home/header_slide_1.png',
          title: 'Hibiscus',
          description: 'Use this beautiful Hibiscus to keep your office material...',
          price: '5 000,00 FCFA',
          inStock: true,
        },
        {
          image: 'assets/home/header_slide_1.png',
          title: 'Faugipanier',
          description: 'Faugipanier D : 27cm H : 35cm Prix : 8 000 FCFA',
          price: '8 000,00 FCFA',
          inStock: true,
        },
        {
          image: 'assets/home/header_slide_1.png',
          title: 'Set of bags and hats',
          description: 'Hand made set of bags and hats',
          price: '6 000,00 FCFA',
          inStock: false,
        },
        {
          image: 'assets/home/header_slide_1.png',
          title: 'Set of matching bags and hats',
          description: 'Hand made set of matching bags and hats',
          price: '5 000,00 FCFA',
          inStock: true,
        },
        {
          image: 'assets/home/header_slide_1.png',
          title: 'Hibiscus',
          description: 'Use this beautiful Hibiscus to keep your office material...',
          price: '5 000,00 FCFA',
          inStock: false,
        },
        {
          image: 'assets/home/header_slide_1.png',
          title: 'Faugipanier',
          description: 'Faugipanier D : 27cm H : 35cm Prix : 8 000 FCFA',
          price: '8 000,00 FCFA',
          inStock: true,
        },
      ],
        expanded: true,
        location: "",
        word1: "",
        word2: "",
        slide: 0,
        sliding: null,
        showblock: true,
        showfadde: false,
        showfaddeB: true,
        currentNumber: 0,
        // products:[],
        placeholder: this.$t("home.Location"),
        img1: require("../assets/img/coach.png"),
        showbanner1:true,
        showbanner2:false,
          bridge_for_cus: [
           "assets/home/marketplace.png",
          "assets/home/search.png",
          "assets/home/community.png",
         
        ],
  
          bridge_for_biz: [
          "assets/home/new_ba_community.png",
          "assets/home/ba-search.png",
            "assets/home/ba-dashboard.png",
        ],
         
  
          poptions: {
          rewind: true,
          autoplay: false,
          perPage: 5,
          pagination: false,
          type: "loop",
          perMove: 1,
  
          breakpoints: {
            760: {
              perPage: 2,
              gap: "0rem",
            },
            992: {
              perPage: 3,
              gap: "1rem",
            },
          },
        },
  
        product:{},
        viewProduct:false,
  
       
         options: {
          rewind: true,
          autoplay: true,
          perPage: 1,
          pagination: false,
          type: "loop",
          perMove: 1,
  
          breakpoints: {
            760: {
              perPage: 1,
              gap: "0rem",
            },
            992: {
              perPage: 1,
              gap: "1rem",
            },
          },
        },
     
  
     
        crtv_showm:[
          {
            type: "youtube",
            thumb: "assets/home/crtv/1m.jpg",
            id: "fTs87IawpN4",
          },
  
           {
            type: "youtube",
            thumb: "assets/home/crtv/2m.jpg",
            id: "vO53J95E2GA",
          },
  
           {
            type: "youtube",
            thumb: "assets/home/crtv/3m.jpg",
            id: "EEsHZTkWNIU",
          },
  
           {
             type: "youtube",
            thumb: "assets/home/crtv/4m.jpg",
            id: "i0crKkQDJ6I",
          },
         ],
  
        
  
         crtv_showmf:[
          // {
          //   type: "youtube",
          //   thumb: "assets/home/crtv/1m.jpg",
          //   id: "fTs87IawpN4",
          // },
  
           {
            type: "youtube",
            thumb: "assets/home/crtv/2mf.jpg",
            id: "vO53J95E2GA",
          },
  
           {
            type: "youtube",
            thumb: "assets/home/crtv/3mf.jpg",
            id: "EEsHZTkWNIU",
          },
  
           {
             type: "youtube",
            thumb: "assets/home/crtv/4mf.jpg",
            id: "i0crKkQDJ6I",
          },
         ],
  
        
  
        
        crtv_showf:[
          // {
          //   type: "youtube",
          //   thumb: "assets/home/crtv/1f.jpg",
          //   id: "fTs87IawpN4",
          // },
  
           {
            type: "youtube",
            thumb: "assets/home/crtv/2f.jpg",
            id: "vO53J95E2GA",
          },
  
           {
            type: "youtube",
            thumb: "assets/home/crtv/3f.jpg",
            id: "EEsHZTkWNIU",
          },
  
           {
             type: "youtube",
            thumb: "assets/home/crtv/4f.jpg",
            id: "i0crKkQDJ6I",
          },
         ],
  
  
  
        crtv_show:[
          {
            type: "youtube",
            thumb: "assets/home/crtv/1.jpg",
            id: "fTs87IawpN4",
          },
  
           {
            type: "youtube",
            thumb: "assets/home/crtv/2.jpg",
            id: "vO53J95E2GA",
          },
  
           {
            type: "youtube",
            thumb: "assets/home/crtv/3.jpg",
            id: "EEsHZTkWNIU",
          },
  
           {
             type: "youtube",
            thumb: "assets/home/crtv/4.jpg",
            id: "i0crKkQDJ6I",
          },
         ],
        
  
        form: {
          pname: null,
          tel: null,
          name: null,
          quantity: null,
          email: null,
        },
  
        userSaved: false,
        sending: false,
        lastUser: null,
      };
    },
  
    mixins: [validationMixin],
    validations: {
      form: {
        pname: {
          required,
        },
  
        name: {
          required,
        },
  
        tel: {
          required,
        },
      },
    },
  
    props: {
      credentials: {
        type: Object,
        default: function () {
          return {
            keyword: "",
            placeholder: this.$t("home.All"),
          };
        },
      },
    },
  
    created() {
      window.addEventListener("load", this.onWindowLoad);
      this.getLocation();
  
      axios.get('guest/home/products').then(({ data }) => {
             
            this.products=data.data;
          })
          .catch((err) => {
            console.log({ err: err });
          }); 
  
  
    },
  
    computed: {
      ...mapGetters({
        hasLauchNetworkRequest: "social/INIT",
        user: "auth/profilConnected",
        auth: "auth/user",
        neigbourhoods: "auth/cities",
      }),
  
      query() {
        return this.credentials.location;
      },
  
      crtv_vidM(){
         if (this.$i18n.locale == "en") { 
          return this.crtv_showm; 
         } else{
           return this.crtv_showmf; 
         }
      },
  
      crtv_vid(){
         if (this.$i18n.locale == "en") { 
          return this.crtv_show; 
         } else{
           return this.crtv_showf; 
         }
      }
    },
  
    watch: {
      word2(newQuery) {
        axios.get(`visitor/search/city?city=${newQuery}`).then(({ data }) => {
          this.$store.commit("auth/setCities", data.data);
        });
      },
    },
  
    methods: {
  
       gotoproduct(pro){
   
       
       this.product =pro;
        this.viewProduct = true;
  
  
   },
  
   closeDetailsProduct() {
        this.viewProduct = false;
      },
  
  
       scrollTo() {
      window.scrollTo(2800,2800);
      this.form.pname=this.$t("general.hire_a_professional_tailor") ;
    },
  
    
      playVideo(index) {
       
        this.$refs.lightboxh.showImage(index);
      },
  
  
    gotoSearch(){
      this.$router.push(`/search`);
    },
  
      onWindowLoad() {      
        this.showfadde = true;
  
        setTimeout(() => {
         
        }, 2000);
      },
  
      showBanner(id){
      
        if(id==1){
         this.showbanner1=true;
           this.showbanner2=false;
        }else{
          this.showbanner2=true;
           this.showbanner1=false;
        }
      
      },
  
      bannernext(){
          if(this.showbanner1==true){
         this.showbanner1=false;
          this.showbanner2=true;
        }else{
         this.showbanner1=true;
          this.showbanner2=false;
        }
      },
  
      bannerRotation: function () {
        setInterval(this.bannernext, 10000);
      },
  
      changephoto(id){
        this.currentNumber=id;
      },
  
       startRotation: function () {
        this.timer = setInterval(this.next, 10000);
      },
  
      next: function () {
        if (this.currentNumber == 0) {
          this.currentNumber = 1;
          return
        } else if(this.currentNumber == 2){
          this.currentNumber =0 ;
          return
        }
        else if(this.currentNumber == 1){
          this.currentNumber =2 ;
          return
        }
      },
  
  
      getValidationClass(fieldName) {
        const field = this.$v.form[fieldName];
        if (field) {
          return {
            "md-invalid": field.$invalid && field.$dirty,
          };
        }
      },
  
      saveData() {
        this.$router.push({
          name: "quote",
          query: {
            name: this.form.pname,
            email: this.form.email,
            tel: this.form.tel,
            pname: this.form.pname,
            quantity: this.form.quantity,
          },
        });
      },
  
      validateUser() {
        this.$v.$touch();
        if (!this.$v.$invalid) {
          this.saveData();
        }
      },
  
      ...mapActions({
        getGeo: "business/getGeo",
        getNeigbourhoods: "auth/neigbourhoods",
      }),
  
      toggleinput() {
        this.$refs.mobileinput.style.display = "inline-flex";
      },
  
      getLocation() {
        const success = (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
  
          this.getGeo({ lat: latitude, lng: longitude });
  
          //time to get some neighbourhood mother fuckers ?lat=3.87374300&lng=11.49966000
          this.getNeigbourhoods({ lat: latitude, lng: longitude });
        };
  
        const error = (err) => {
          console.log(error);
        };
  
        // This will open permission popup
        navigator.geolocation.getCurrentPosition(success, error);
      },
  
      businessOwner() {
        this.$store
          .dispatch("homeRedirection/businessInfos")
          .then((res) => {
            this.$router.push({
              name: "BusinessOwner",
              params: { id: this.$store.state.homeRedirection.idbissf },
            });
            console.log(this.$store.state.homeRedirection.idbissf);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      search() {
        this.$router.push({ name: "Search" });
      },
  
      community() {
        this.$router.push({ name: "signup" });
      },
  
      Expanded(a) {
        if (a == 1) {
          this.expanded = false;
        } else if (a == 2) {
          this.expanded = true;
        }
      },
  
      /**
       * this fuction id for make a search
       * @private
       */
      getKeyword() {
        console.log(this.credentials.keyword, "---mm");
        if (!this.credentials.keyword) return false;
  
        if (this.$route.name != "Search") {
          console.log("the keyword is: ", this.credentials.keyword);
          // this.$store
          //   .dispatch("allSearch/SEARCH", {
          //     keyword: this.credentials.keyword,
          //   })
          //   .catch((err) => {
          //     console.log("Error erro!");
          //   });
  
          this.$router.push({
            name: "GlobalSearch",
            query: { keyword: this.credentials.keyword, location: this.word2 },
          });
        }
      },
  
      animation() {
        console.log("annimation----");
        var id = null;
        var elem = document.getElementById("Test_Video");
        var pos = 0;
        clearInterval(id);
        id = setInterval(frame, 5);
        function frame() {
          if (pos == 50) {
            clearInterval(id);
          } else {
            pos++;
            // elem.style.top = pos + 'px';
  
            elem.style.zIndex = "1";
            elem.style.left = pos + "px";
            if (pos == 50) {
              // document.getElementById("animation").removeEventListener("scroll")
              elem.style.left = 0 + "px";
            }
          }
        }
      },
    },
  };
  </script>
  
  <style>
  @media (max-width: 768px) {
  .quote-img {
    padding: 1rem !important;
  }
  .quote-form {
    margin: 1rem !important;
  }
  .quote-btn {
    width: 50%;
  }
}
  /* /////// */
.ba-input::placeholder {
  color: #A5A5A5; 
  opacity: 0.5; 
}
  .label-color{
    color: black;
  }
  /* /////// */
  .see-all-p{
    text-align: right;
    text-decoration: underline;
    color: #FF9E19;
  }
/* ////////// */
.product-section {
  padding: 20px;
  background-color: #f9f9f9;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.sections-title {
  font-size: 24px;
  color: #333;
  text-align: center;
  margin-bottom: 10px !important;
}

.section-description {
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.button-start,
.button-end {
  display: flex;
  gap: 10px;
}

.filter-button {
  padding: 10px 20px;
  margin: 0 5px;
  border: 1px solid #A4A4A4;
  background-color: white;
  color: #A4A4A4;
  cursor: pointer;
  border-radius: 50px;
}

.filter-button.active, .filter-button:hover {
  /* background-color: #ff9e19; */
  border: 1px solid #ff9e19;
  color: #ff9e19;
}
.filter-button i {
  margin-left: 5px;
}


/* //////////// */
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.grid-item {
  background-color: white;
  padding: 15px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  text-align: center;
  position: relative;
  flex: 1 1 calc(25% - 20px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.image-container {
  position: relative;
  width: 100%;
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
}

.stock-status {
  text-align: left;
  margin-top: 10px;
  border-radius: 5px;
  font-size: 12px;
  display: flex;
  justify-content: start;
}

.in-stock {
  color: #23C73D;
}

.out-of-stock {
  color: #dc3545;
}

.favorite-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 20px;
  color: red;
}

/* .favorite-button:hover {
  color: #e68a00;
} */

.content-container {
  flex-grow: 1;
}

.content-container h3 {
  font-size: 20px !important;
  line-height: 20px !important;
  color: #000000;
  text-align: left !important;
}

.content-container p {
  font-size: 14px !important;
  line-height: 20px !important;
  text-align: left !important;
  color: #000000;
}

.bottom-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.price {
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}

.add-to-cart {
  padding: 10px 20px;
  background-color: #ff9e19;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-to-cart:hover {
  background-color: #e68a00;
}





/*  ///////////////// */
  .statistic-box {
  border-left: 4px solid #E75B17; 
  padding-left: 10px; 
}

.card-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.network {
  display: flex;
  justify-content: center;
}

.card {
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon {
  width: 50px; 
  height: 50px; 
  margin-bottom: 10px;
}

.percentage {
  font-size: 24px;
  font-weight: bold;
  color: #000;
}

.text {
  font-size: 14px;
  color: #757575;
}


  @media only screen and (min-width: 960px) {
    .custom-container {
            padding-left: 150px; 
            padding-right: 150px; 
        }
        .flex-container  {
    margin: 30px 0;
}
  }
  @media only screen and (max-width: 760px) {
    .custom-container {
            padding-left: 20px; 
            padding-right: 20px; 
        }
  }
  .about-p{
    color: #ffffff;
  }
  .flex-container h3 {
    font-size: 22px;
}

.flex-container .line1 {
    font-size: 22px;
    color: #FFFFFF;
}

.flex-container .line2 {
    color: #E75B17;
}

.flex-container .line3 {
    color: #FFFFFF;
}

.flex-container p {
    color: #FFFFFF;
}

.flex-container {
        display: flex;
        align-items: center; 
    }
    .flex-container h3 {
        flex: 35%; 
        margin-right: 20px; 
    }
    .flex-container p {
        flex: 65%; 
        padding-top: 8px; 
    }
  .buy-btn-white{
    background: white !important;
    border-color:white !important;
    color: #455a64 !important;
  }
  
  .hire-tailor-img{
    max-height: 420px;
      border-radius: 10px;
  }
  
  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .v-enter-from,
  .v-leave-to {
    opacity: 0;
  }
  
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  .bridge-home .md-field.md-theme-default:after {
      background-color: white !important;
  }
  .md-field{
    padding-top:0 !important;
    margin: 0 !important;
    margin-bottom: 10px !important
  }
  .bridge-home .md-focused .p-2{
     padding: 0rem !important;
     margin-top: -10px;
  }
  
  .bridge-home .md-has-value .p-2{
     padding: 0rem !important;
     margin-top: -10px;
  }
  
  
  
  
  .ba-input {
      
       background: #fafafa;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.11);
    border-radius: 5px;
   height: 55px !important;
   padding-left: 1rem !important;
   padding-right: 1rem !important
  
   }
  
  
   .ba-input .form-control{
      
       background: #fafafa;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.11);
    border-radius: 5px;
   height: 55px !important;
   padding: 2px;
  
   }
  </style>
  
  <style scoped>
  
  .p-image{
      height: 150px;
      object-fit: cover;
    }
  
  
  .progress-indicator{
    width: 30px;
    height: 5px;
    border-radius: 5px;
  }
  
  .progress-active{
   background: #e75b17;
  }

  .hire-btn{
  width: 174px;
  height: 46px;
  background: linear-gradient(323.09deg, #E07715 6.03%, #FF9E19 85.15%);
  border-radius: 30px;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  }
  
  .buy-btn{
     
    /* height: 47.12px; */
    background: linear-gradient(323.09deg, #E07715 6.03%, #FF9E19 85.15%);
  border-radius: 10px; 
      width: 155px;
  }
  
  
  .quote-btn{
  height: 47.12px;
  background: linear-gradient(323.09deg, #E07715 6.03%, #FF9E19 85.15%);
  border-radius: 30px;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  }
  .selling-btn {
  /* width: 25%; */
  width: 174px;
  /* background: linear-gradient(to right, #FF9E19, #FF6200); */
  background: linear-gradient(323.09deg, #E07715 6.03%, #FF9E19 85.15%);
  border: none;
  border-radius: 30px;
  color: white;
  /* font-weight: bold; */
  /* padding: 10px 20px; */
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* .selling-btn:hover {
  background: linear-gradient(to right, #FF6200, #FF9E19);
} */

.selling-btn i {
  /* margin-left: 10px; */
}
.arrow-icon-wrapper {
  background-color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0;
  margin-left: auto;
}

.arrow-icon-wrapper i {
  color: #FF6200;
}

  /* .selling-btn{
    width: 25%;
  padding: 10px 20px;;
  background: linear-gradient(323.09deg, #E07715 6.03%, #FF9E19 85.15%);
  border-radius: 25px;
  }
  .selling-btn::after {
    content: '\2192'; 
    font-size: 24px;
    color: black; 
    right: 10px;
    width: 50px;
    height: 40px;
    background-color: white;
    border-radius: 50%;
    align-items: center;
  } */
  @media only screen and (max-width: 960px) { 
     .main-banner{
      height:400px;
     }
     .cover{
        border-radius: 10px;
     }
  
     .explore-network-img {
   
    object-fit: cover;
    border-radius: 10px;
    height: 210px !important;
  }
  }
  
  @media only screen and (min-width: 960px) {
     .main-banner{
      height:470px;
     }
  
     .cover{
          object-fit: revert !important;
     }
  }
  
  </style>
  
  <style>
  
  .cover{
    object-fit: cover;
  
  }
  .upgrade-btn{
    width: 207px;
  
  background: linear-gradient(323.09deg, #E07715 6.03%, #FF9E19 85.15%);
  border-radius: 10px;
  }
  
  .upgrade-text{
    font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
  }
  
  .upgrade-text span{
       color: #e75b17;
  }
  
  .pt-7{
    padding-top: 7rem;
  }
  
  .pt-6{
    padding-top: 6rem;
  }
  
  .crtv-ban {
   
    /* height: 357px; */
      border-radius: 10px;
      border-radius: 20px;
      padding: 2rem;
      /* background-size: cover;
      background-repeat: no-repeat; */
  
  }
  .crtv-bans {
  width: 100%;
  text-align: center;
}

.slide-img {
  max-width: 100%;
  max-height: 750px;
  height: auto;
  display: block;
  margin: 0 !important;
  width: 100%;
}
.position-relative {
  position: relative;
}

.shop-now-btn {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: transparent !important; 
  color: white;
  border: none !important;
 
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  z-index: 10; /* Ensure the button is on top */
}

.shop-now-btn:hover {
  /* background-color: #e68a00; */
  color: #E75B17;
}
  .request-quote {
    width: 416.64px;
  
    text-align: center;
  }
  
  .bg-whitee {
    background: white;
  }
  
  .ba-input {
    background: #fafafa;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.11);
    border-radius: 5px;
   height: 55px !important;
  
  }
  
  
  @media only screen and (max-width: 768px) {
  
  
    .upgrade-acc-img{
    width: 20px !important;
    margin-bottom: auto;
    margin-right: 10px;
  }
  .upgrade-cover{
    height: 290px !important;
      object-fit: contain !important;
      border-radius: 10px;
  }
  
  .upgrade-side-box{
   border: none;
  }
     
     .bridge-home h3 {
    font-family: "Poppins";
    font-style: normal;
   font-weight: 700;
  font-size: 22px;
  line-height: 33px;
  }
  
  .bridge-home h3 span {
    color: #e75b17;
  }
  
  
  .bridge-home h5 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
  font-size: 16px;
  line-height: 24px;
    align-items: center;
    text-transform: capitalize;
  }
  
  .bridge-home p {
    font-size: 14px;
    line-height: 26px;
  }
  
  
  
  }
  
  @media only screen and (min-width: 960px) {
     
  .upgrade-side-box{
  
   margin-left:-40%;
    /* margin-right:40%; */
  
     background: #FFFFFF;
  box-shadow: 0px 20px 55px rgba(0, 0, 0, 0.13);
  border-radius: 20px;
  padding: 2rem;
  }
  
  }
  
  
  @media only screen and (min-width: 768px) {
  
   .hire-dev{
  
  background: #FFFFFF;
  border: 1px solid #DEDEDE;
  box-shadow: 0px 4px 10px rgba(227, 227, 227, 0.25);
  border-radius: 15px;
  
   }
  
    .upgrade-acc-img{
    width: 20px !important;
    margin-bottom: auto;
    margin-right: 10px;
  }
  
  .upgrade-cover{
    height: 650px !important;
      object-fit: cover !important;
      border-radius: 10px;
  }
  
  
  
     .bridge-home h3 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 44px;
  }
  
  .bridge-home h3 span {
    color: #e75b17;
  }
   
   .explore-network-img {
    height: 100% !important;
    object-fit: cover;
    border-radius: 10px;
    
  }
  
  
  
  .bridge-home h5 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
    align-items: center;
    text-transform: capitalize;
  }
  
  .bridge-home p {
    font-size: 14px;
    line-height: 26px;
  }
  
  }
  
  
  
  .explore-btn{
    width: 207px;
  height: 43.5px;
  background: linear-gradient(323.09deg, #E07715 6.03%, #FF9E19 85.15%);
  border-radius: 10px;
  }
  
  
  
  .border-left-biz{
    border-left: solid 4px white;
  
  }
  
  .babiz-list{
        padding-left: 20px;
      margin-left: -4.5px;
    margin-top: 10px;
  }
  
  .babiz-list:hover {
    border-left: solid 4px #e75b17;
  }
  
  .border-left-biz .active{
      border-left: solid 4px #e75b17 !important;
  }
  .bg-white {
    background: white;
  }
  
  .bg-gradient {
    background: linear-gradient(278.76deg, #000000 1.01%, #434343 99%);
  }
  
  .moreproducts-btn {
    margin-left: auto;
        margin-bottom: -35px;
  }
  .orange-bg {
    background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
    border-radius: 10px;
    height: 520px;
  }
  
  .about-box {
    
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(187, 187, 187, 0.25);
  }
  
  .about-box img{
      max-height: 152px;
      width: 100%;
      object-fit: contain;
  }
  .about-box h6{
    font-size: 22px;
  line-height: 33px;
  }
  
  
  
  
  
  
  .ba-business h3 .m-header-color {
    color: #e75b17;
  }
  .orange-bg h6 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    line-height: 33px;
  
    display: flex;
    align-items: center;
  
    color: #000000;
  }
  
  .orange-bg h5 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 44px;
    /* or 110% */
    color: #ffffff;
  }
  
  .orange-bg button {
    width: 207px;
    height: 52px;
    background: #ffffff;
    border-radius: 5px;
    color: #e75b17;
    border-color: #ffffff;
  }
  
  .orange-bg p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
  }
  
  .bg-gray {
    height: 520px;
    background: linear-gradient(323.09deg, #1f1f1f 6.03%, #424242 85.15%);
    border-radius: 10px;
    color: white;
  }
  
  .bg-gray p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 42px;
  }
  
  .bg-gray small {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 26px;
  }
  
  .bg-gray .percent {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 60px;
    line-height: 44px;
  }
  
  .bg-gray button {
    width: 207px;
    height: 52px;
    background: #ffffff;
    border-radius: 5px;
    color: #e75b17;
    border-color: #ffffff;
  }
  </style>
  
  <style>
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }
  
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
  
  @media only screen and (max-width: 768px) {
    .selling-btn {
  background: linear-gradient(to right, #FF9E19, #FF6200);
  border: none;
  border-radius: 30px;
  color: white;
  /* font-weight: bold; */
  /* padding: 10px 20px; */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0 !important;
}
    .nav-tabs a:hover {
      color: #e75b17 !important ;
    }
    .bridge-home .nav-tabs .nav-link {
      border-radius: 0.25rem;
      font-size: 12px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .mbl-wrap {
      overflow: hidden;
      width: 100%;
      display: flex;
      flex-direction: row;
    }
    .nav.nav-tabs {
      flex-wrap: nowrap;
      white-space: nowrap;
      max-width: 500px;
      overflow: auto;
  
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE 10+ */
    }
    .nav.nav-tabs::-webkit-scrollbar {
      display: none;
    }
  }
  
  .nav-tabs:hover {
    background-color: transparent !important;
  }

  .nav-tabs a:hover{
      background:rgba(243, 243, 243, 1) !important;
      border-radius: 0px;
      color: #e75b17!important;
      border-top: none !important;
      border-left: none !important;
      border-right: none !important;
      border-bottom: none !important;
  }

  .nav-tabs .nav-item {
    padding-right: 10px !important;
  }
     
  
    .nav-tabs .nav-link.active-tab-item {
      background-color: rgba(243, 243, 243, 1) !important;
      border-right: none;
      border-top: none;
      font-family: poppins !important;
      color: #e75b17 !important;
      border-bottom: 2px solid #e75b17 !important;
      padding-left: 5px;
      padding-right: 8px !important;
      }
  
  </style>
  