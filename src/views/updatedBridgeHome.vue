<template>
  <div class="bridge-home">
    <site-header class="topbar" @change:currency="emitChangeCurrency" />

    <!-- <section class="p-0">
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
                <img src="assets/home/slide2.png" alt="Image 2" class="slide-img">
              </div>
            </splide-slide>
          </splide>
          <button class="shop-now-btn"><span class="shop-span">SHOP NOW</span></button>
        </div>
      </div>
    </div>
  </div>
</section> -->

    <section class="p-0">
      <div class="top-slider">
        <div class="row">
          <div class="col-md-12 p-0">
            <div class="position-relative">
              <splide :options="options" class="r-image">
                <splide-slide>
                  <div class="crtv-bans">
                    <v-lazy-image src="assets/home/header_slide_1.png" alt="Image 1" class="slide-img" />
                  </div>
                </splide-slide>
                <splide-slide>
                  <div class="crtv-bans">
                    <v-lazy-image src="assets/home/slide_2.png" alt="Image 2" class="slide-img" />
                  </div>
                </splide-slide>
              </splide>
              <router-link to="/search">
                <button class="shop-now-btn">
                  <span class="shop-span">{{ $t("general.shop_now") }}</span>
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="product-section">
      <div class="container p-0">
        <h3 class="sections-title">
          <span style="color: #E75B17;">{{ $t("general.our") }}</span> {{ $t("general.quality_products") }}
        </h3>
        <p class="section-description">
          {{ $t("general.with_over_100_categories") }}
        </p>
        <div class="button-group">
          <div class="button-start">
            <button class="filter-button" :class="{ active: activeTab === 'cameroon' }"
              @click="setActiveTab('cameroon')">
              {{ $t("general.avaliable_in_cameroon") }}
            </button>
            <button class="filter-button" :class="{ active: activeTab === 'worldwide' }"
              @click="setActiveTab('worldwide')">
              {{ $t("general.avaliable_in_worlwide") }}
            </button>
          </div>
        </div>
        <div v-if="activeTab === 'cameroon'">
          <div class="see-all-p">
            <router-link to="/search">
              <p>{{ $t("general.see_all_cameroon") }}</p>
            </router-link>
          </div>
          <div v-if="loading" class="m-auto">
            <div class="loader">
              <i class="fas fa-spinner fa-spin"></i>
            </div>
          </div>
          <div v-else class="grid">
            <div v-for="(product, index) in products.slice(0, 8)" :key="index" class="grid-item">
              <div class="image-container mb-2" @click="goToDetail(product.id)">
                <v-lazy-image :src="product.picture" :alt="product.name" class="product-image" />
              </div>
              <div class="content-container">
                <div class="stock-status" :class="{
                  'in-stock': product.in_stock,
                  'out-of-stock': !product.in_stock
                }">
                  {{ product.in_stock ? "In Stock" : "Out of Stock" }}
                </div>
                <h3 class="font-weight-bold" @click="goToDetail(product.id)">{{ product.name }}</h3>
                <p>
                  {{
                    product.description.length > 50
                      ? product.description.slice(0, 50) + "..."
                      : product.description
                  }}
                </p>
              </div>
              <div class="bottom-info">
                <span class="price">{{ product.price | locationPrice(rate, currencySelected) }} </span>
                <div class="desktop-buttons w-100">
                  <div class="d-flex justify-content-between w-100 mt-1">
                    <button class="buy-now-btn" @click="navigateToCart(product)">
                      <span style="font-size: 12px !important; font-weight: bold;">{{ $t("general.buy_now") }}</span>
                      <span class="arrow-icon">
                        <i class="fas fa-arrow-right"></i>
                      </span>
                    </button>
                    <button v-if="product.in_stock" class="add-to-cart" @click="handleAddToCard(product)">
                      <span class="px-2" style="font-size: 12px; font-weight: bold;">{{ $t("general.Add_to_Cart")
                        }}</span>
                    </button>
                  </div>
                </div>
                <div class="mobile-buttons w-100">
                  <div class="d-flex justify-content-between w-100 mt-1">
                    <button class="buy-now-btn" @click="navigateToCart(product)">
                      <span style="font-size: 12px !important; font-weight: bold;">{{ $t("general.buy_now") }}</span>
                    </button>
                    <button class="add-to-cart" @click="handleAddToCard(product)">
                      <b-icon icon="cart-plus"></b-icon><span class="px-1"
                        style="font-size: 12px; font-weight: bold;">Cart</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 'worldwide'">
          <products type="international" />
        </div>
      </div>
    </section>

    <section style="background: #FFFFFF" class="ba-section">
      <div class="container ba-business pt-5 pb-5">
        <div class="row">
          <div class="col-lg-6" data-aos="slide-right" data-aos-offset="70px" data-aos-duration="1500">
            <h3 class="ba-title">
              <span class="m-header-color">Bridge Africa </span> <br />
              <span style="color: black;">{{ $t("general.for_busineses") }}
              </span>
            </h3>
            <p class="ba-description" style="color: black;">
              {{ $t("general.sell_online_in_person") }}
            </p>

            <div class="border-left-biz">
              <div class="babiz-list d-flex">
                <span class="p-1 create-your-shop">
                  <v-lazy-image src="assets/home/ba_business_1.png" alt="Icon" class="icon-spacing" />
                </span>
                <div class="bottom-border">
                  <h5>
                    {{ $t("general.business_identity_and_oline") }}
                  </h5>
                  <p>
                    {{ $t("general.create_your_business_page") }}
                  </p>
                </div>
              </div>
              <div class="babiz-list d-flex">
                <span class="p-1 ship-globally">
                  <v-lazy-image src="assets/home/ba_business_2.png" alt="Icon" class="icon-spacing" />
                </span>
                <div class="bottom-border">
                  <h5>
                    {{ $t("general.online_business_database") }}
                  </h5>
                  <p>
                    {{ $t("general.make_your_business_visible") }}
                  </p>
                </div>
              </div>
              <div class="babiz-list d-flex">
                <span class="p-1 get-paid">
                  <v-lazy-image src="assets/home/ba_business_3.png" alt="Icon" class="icon-spacing" />
                </span>
                <div class="bottom-border">
                  <h5>
                    {{ $t("general.unified_back_office") }}
                  </h5>
                  <p>
                    {{ $t("general.easily_manage_your_business") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 pl-5" data-aos="slide-left" data-aos-offset="70px" data-aos-duration="1500">
            <div>
              <video width="100%" style="object-fit:contain; border-radius: 10px;" autoplay muted loop
                poster="assets/home/ba_business.png">
                <source src="assets/video/ba_for_business.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="background: #FFFFFF" class="ba-section-mobile">
      <div class="container ba-business pt-5 pb-5">
        <h3 class="ba-title">
          <span class="m-header-color">Bridge Africa </span> <br />
          <span style="color: black;">{{ $t("general.for_busineses") }} </span>
        </h3>
        <p class="ba-description" style="color: black;">
          {{ $t("general.sell_online_in_person") }}
        </p>
        <div class="row">
          <div class="col-lg-6 ba-video" data-aos="slide-left" data-aos-offset="70px" data-aos-duration="1500">
            <div>
              <video width="100%" style="object-fit:contain; border-radius: 10px;" autoplay muted loop
                poster="assets/home/ba_business.png">
                <source src="assets/video/ba_for_business.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
          <div class="col-lg-6" data-aos="slide-right" data-aos-offset="70px" data-aos-duration="1500">
            <div class="border-left-biz">
              <div class="babiz-list d-flex">
                <span class="p-1 create-your-shop">
                  <v-lazy-image src="assets/home/ba_business_1.png" alt="Icon" class="icon-spacing" />
                </span>
                <div class="bottom-border">
                  <h5>
                    {{ $t("general.business_identity_and_oline") }}
                  </h5>
                  <p>
                    {{ $t("general.create_your_business_page") }}
                  </p>
                </div>
              </div>
              <div class="babiz-list d-flex">
                <span class="p-1 ship-globally">
                  <v-lazy-image src="assets/home/ba_business_2.png" alt="Icon" class="icon-spacing" />
                </span>
                <div class="bottom-border">
                  <h5>
                    {{ $t("general.online_business_database") }}
                  </h5>
                  <p>
                    {{ $t("general.make_your_business_visible") }}
                  </p>
                </div>
              </div>
              <div class="babiz-list d-flex">
                <span class="p-1 get-paid">
                  <v-lazy-image src="assets/home/ba_business_3.png" alt="Icon" class="icon-spacing" />
                </span>
                <div class="bottom-border">
                  <h5>
                    {{ $t("general.unified_back_office") }}
                  </h5>
                  <p>
                    {{ $t("general.easily_manage_your_business") }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-1 pb-1 bg-gradient sales-channel-section">
      <div class="container pt-5  pb-5 " data-aos="zoom-out" data-aos-offset="70px" data-aos-duration="1500"
        convertCurrency>
        <div class="flex-container">
          <h3>
            <span class="line1">{{ $t("general.sales_channel") }}</span><br />
            <span class="line2">{{ $t("general.sell_to_every_buyer") }},</span><br />
            <span class="line3">{{ $t("general.everywhere") }}</span>
          </h3>

          <p>
            {{ $t("general.help_small_and_medium_size") }}
            <br />
            <router-link to="/search">
              <b-button type="submit" variant="primary" block class="mb-3 mt-3 selling-btn">
                {{ $t("general.start_selling") }}
                <span class="arrow-icon-wrapper">
                  <i class="fas fa-arrow-right"></i>
                </span>
              </b-button>
            </router-link>
          </p>
        </div>

        <div class="row h-100 start-selling-desktop">
          <div class="col-md-4 pt-2">
            <div class="p-3 about-p" data-aos="fade-up" data-aos-offset="70px" data-aos-duration="1500">
              <div class="mb-3">
                <v-lazy-image src="assets/home/new_about_5.png" alt="" />
              </div>
              <h6 class="bold">{{ $t("general.sell_world_wide") }}</h6>
              <p>
                {{ $t("general.all_in_one") }}
              </p>
            </div>
          </div>

          <div class="col-md-4 pt-2">
            <div class="p-3 about-p" data-aos="fade-up" data-aos-offset="70px" data-aos-duration="1500">
              <div class="mb-3">
                <v-lazy-image src="assets/home/new_about_1.png" alt="" />
              </div>
              <h6 class="bold">{{ $t("general.buy_world_wide") }}</h6>
              <p>
                {{ $t("general.buy_world_wide_customers") }}
              </p>
            </div>
          </div>

          <div class="col-md-4 pt-2">
            <div class="p-3 about-p" data-aos="fade-up" data-aos-offset="70px" data-aos-duration="1500">
              <div class="mb-3">
                <v-lazy-image src="assets/home/new_about_3.png" alt="" />
              </div>
              <h6 class="bold">{{ $t("general.logistics_support") }}</h6>
              <p>{{ $t("general.we_support_businese_throughout") }}</p>
            </div>
          </div>
        </div>
        <div class="row start-selling-mobile">
          <div class="col-md-12 p-0">
            <div class="position-relative">
              <splide :options="options" class="r-image">
                <splide-slide>
                  <div class="col-md-4 pt-2">
                    <div class="p-3 about-p" data-aos="fade-up" data-aos-offset="70px" data-aos-duration="1500">
                      <div class="mb-3">
                        <v-lazy-image src="assets/home/new_about_5.png" alt="" />
                      </div>
                      <h6 class="bold">{{ $t("general.sell_world_wide") }}</h6>
                      <p>
                        {{ $t("general.all_in_one") }}
                      </p>
                    </div>
                  </div>
                </splide-slide>
                <splide-slide>
                  <div class="col-md-4 pt-2">
                    <div class="p-3 about-p" data-aos="fade-up" data-aos-offset="70px" data-aos-duration="1500">
                      <div class="mb-3">
                        <v-lazy-image src="assets/home/new_about_1.png" alt="" />
                      </div>
                      <h6 class="bold">{{ $t("general.buy_world_wide") }}</h6>
                      <p>
                        {{ $t("general.buy_world_wide_customers") }}
                      </p>
                    </div>
                  </div>
                </splide-slide>
                <splide-slide>
                  <div class="col-md-4 pt-2">
                    <div class="p-3 about-p" data-aos="fade-up" data-aos-offset="70px" data-aos-duration="1500">
                      <div class="mb-3">
                        <v-lazy-image src="assets/home/new_about_3.png" alt="" />
                      </div>
                      <h6 class="bold">
                        {{ $t("general.logistics_support") }}
                      </h6>
                      <p>{{ $t("general.we_support_businese_throughout") }}</p>
                    </div>
                  </div>
                </splide-slide>
              </splide>
              <router-link to="/search" class="mobile-start-selling-btn">
                <b-button type="submit" variant="primary" class="mb-3 mt-3 selling-btn-mobile">
                  Start Selling
                  <span class="arrow-icon-wrapper">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </b-button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-whitee">
      <div class="container pt-5 pb-5">
        <div class="text-center">
          <h3>
            <span> {{ $t("general.our") }} </span>
            <span style="color: black !important">{{ $t("general.categories") }}
            </span>
          </h3>
          <p class="our-category-description" style="color: black !important">
            {{ $t("general.categories_sub_title") }}
          </p>
        </div>
        <Categories />
      </div>
    </section>

    <section class="p-0 m-0 bg-color">
      <div class="container mt-0 p-0" data-aos="zoom-in-up" data-aos-offset="70px" data-aos-duration="1500">
        <div class="row mt-0">
          <div class="col-lg-4 p-0 h-100 quote-img">
            <v-lazy-image src="assets/home/quotation.png" alt="" />
          </div>

          <div class="col-lg-8 mt-md-5 align-items-center pl-lg-5 pl-md-5 quote-form" id="quote">
            <div class="m-left">
              <h3>
                <span> {{ $t("general.let_help_u") }} </span>
                <span style="color: black;">{{
                  $t("general.find_products_and_services")
                  }}</span>
              </h3>
              <form novalidate @submit.prevent="validateUser">
                <div class="form pt-1 row">
                  <div class="col-md-12 p-0">
                    <label for="name" class="pb-0 label-color">
                      {{ $t("general.looking_for_something") }}
                    </label>
                    <md-field :class="getValidationClass('pname')">
                      <md-input type="text" name="name" class="ba-input" id="name"
                        :placeholder="$t('general.input_product_keyword_or_name')" v-model="form.pname" />

                      <span class="md-error" v-if="!$v.form.pname.required">
                        required
                      </span>
                    </md-field>
                  </div>

                  <div class="col-md-6 p-0 pr-2">
                    <label for="qunatity" class="pb-0 label-color">
                      {{ $t("general.Quantity") }}
                    </label>
                    <md-field :class="getValidationClass('quantity')">
                      <md-input class="ba-input " type="tel" name="qunatity" id="quantity"
                        :placeholder="$t('general.quantity')" v-model="form.quantity" />
                    </md-field>
                  </div>

                  <div class="col-md-6 p-0">
                    <label for="uname" class="pb-0 label-color">
                      {{ $t("general.full_name") }}
                    </label>
                    <md-field :class="getValidationClass('name')">
                      <md-input type="text" name="uname" id="uname" class="ba-input"
                        :placeholder="$t('general.full_name')" v-model="form.name" />

                      <span class="md-error" v-if="!$v.form.name.required">
                        {{ $t("auth.First_Name_is_required") }}
                      </span>
                    </md-field>
                  </div>

                  <div class="col-md-6 p-0">
                    <label for="email" class="pb-0 label-color">
                      {{ $t("general.Email") }}
                    </label>
                    <md-field class="">
                      <md-input type="email" name="email" id="email" placeholder="Email" class="ba-input"
                        v-model="form.email" />
                    </md-field>
                  </div>

                  <div class="col-md-6 p-0">
                    <label for="name" class="pb-0 label-color">
                      {{ $t("general.Tel") }}
                    </label>
                    <md-field :class="getValidationClass('tel')">
                      <md-input type="tel" name="tel" id="tel" placeholder="Tel." class="ba-input "
                        v-model="form.tel" />

                      <span class="md-error" v-if="!$v.form.tel.required">
                        {{ $t("auth.tel_is_required") }}
                      </span>
                    </md-field>
                  </div>
                  <div class="col-md-12 col-lg-5 mt-3 quote-btn-div p-0">
                    <b-button type="submit" variant="primary" class="quote-btn">
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

    <section class="p-0 m-0 quotation-form-mobile">
      <div class="container mt-0" data-aos="zoom-in-up" data-aos-offset="70px" data-aos-duration="1500">
        <div class="row mt-0">
          <div class="text-center">
            <h3> {{ $t("general.looking_for_something_special") }} ?</h3>
            <p style="color: black;" class="px-2"> Explore Cameroon's products and services. From custom tailoring to
              local crafts, we've got you covered.to Measure tailoring service that represents outstanding value for
              money</p>
          </div>
          <div class="col-lg-4 h-100 quote-img">
            <v-lazy-image src="assets/home/quotation-img-mobile.png" alt="" />
          </div>

          <div class="col-lg-8 mt-md-5 align-items-center pl-lg-5 pl-md-5 quote-form" id="quote">
            <div class="m-left">
              <form novalidate @submit.prevent="validateUser">
                <div class="form pt-1 row">
                  <div class="col-md-12 p-0">
                    <label for="name" class="pb-0 label-color">
                      {{ $t("general.looking_for_something") }}
                    </label>
                    <md-field :class="getValidationClass('pname')">
                      <md-input type="text" name="name" class="ba-input" id="name"
                        placeholder="Input Product Keyword or Name" v-model="form.pname" />

                      <span class="md-error" v-if="!$v.form.pname.required">
                        required
                      </span>
                    </md-field>
                  </div>

                  <div class="col-md-6 p-0">
                    <label for="qunatity" class="pb-0 label-color">
                      {{ $t("general.Quantity") }}
                    </label>
                    <md-field :class="getValidationClass('quantity')">
                      <md-input class="ba-input " type="tel" name="qunatity" id="quantity" placeholder="Quantity"
                        v-model="form.quantity" />
                    </md-field>
                  </div>

                  <div class="col-md-6 p-0">
                    <label for="uname" class="pb-0 label-color">
                      {{ $t("general.full_name") }}
                    </label>
                    <md-field :class="getValidationClass('name')">
                      <md-input type="text" name="uname" id="uname" class="ba-input" placeholder="Full Name"
                        v-model="form.name" />

                      <span class="md-error" v-if="!$v.form.name.required">
                        {{ $t("auth.First_Name_is_required") }}
                      </span>
                    </md-field>
                  </div>

                  <div class="col-md-6 p-0">
                    <label for="email" class="pb-0 label-color">
                      {{ $t("general.Email") }}
                    </label>
                    <md-field class="">
                      <md-input type="email" name="email" id="email" placeholder="Email" class="ba-input"
                        v-model="form.email" />
                    </md-field>
                  </div>
                  <div class="col-md-6 p-0">
                    <label for="name" class="pb-0 label-color">
                      {{ $t("general.Tel") }}
                    </label>
                    <md-field :class="getValidationClass('tel')">
                      <md-input type="tel" name="tel" id="tel" placeholder="Tel." class="ba-input "
                        v-model="form.tel" />

                      <span class="md-error" v-if="!$v.form.tel.required">
                        {{ $t("auth.tel_is_required") }}
                      </span>
                    </md-field>
                  </div>
                  <div class="col-md-12 col-lg-5 mt-3 quote-btn-div p-0">
                    <b-button type="submit" variant="primary" class="quote-btn">
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

    <!-- background: linear-gradient(to right, #FFF 20%, rgba(255, 234, 224, 0.3) 50%, #FFF 100%); -->
    <section style="background-color: white;" class="tailor-section">
      <div class="container pt-5 pb-5 pl-lg-0 pr-lg-0 border-class" data-aos="fade-left" data-aos-offset="70px"
        data-aos-duration="1500">
        <div class="row ">
          <div class="col-md-6 p-0 tailor-content">
            <div class="">
              <div class=" m-auto mt-md-3  p-2 " style="border-radius: 15px;">
                <h3>
                  <span> {{ $t("general.Tailor") }} </span>
                  <span style="color: black;">- {{ $t("general.Transformed") }}
                  </span>
                </h3>
                <div class="d-block">
                  <p style="color: black;">
                    {{ $t("general.hire_a_professional_tailor") }}
                  </p>
                </div>
              </div>
              <div class=" p-2 hire-btn-div">
                <b-button @click="scrollTo" variant="primary" class="hire-btn">
                  {{ $t("general.hire_tailor") }}
                  <span class="arrow-icon-wrapper">
                    <i class="fas fa-arrow-right"></i>
                  </span>
                </b-button>
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="hire-div">
              <video width="100%" style="object-fit:contain; border-radius: 10px;  border-radius:10px" controls
                poster="assets/home/new_hire.png">
                <source src="assets/video/intro_video.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-whitee network camroon-focus-desktop">
      <div class="container row  mt-3" data-aos="zoom-in-up" data-aos-offset="70px" data-aos-duration="1500">
        <div class="col-2 mt-5">
          <div class="card-container">
            <div class="card">
              <div class="card-content">
                <div class="row">
                  <div class="col-4 pr-0">
                    <v-lazy-image src="assets/home/m_1.png" alt="Icon" class="icon" />
                  </div>
                  <div class="col-8 card-padding">
                    <div class="d-flex flex-column">
                      <span class="percentage">4</span>
                      <span class="text">{{ $t("general.countries") }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="row">
                  <div class="col-3 pr-0">
                    <v-lazy-image src="assets/home/m_2.png" alt="Icon" class="icon" />
                  </div>
                  <div class="col-9 card-padding">
                    <div class="d-flex flex-column">
                      <span class="percentage pl-1">500+</span>
                      <span class="text">{{ $t("general.deals_globally") }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-content">
                <div class="row">
                  <div class="col-4 pr-0">
                    <v-lazy-image src="assets/home/m_3.png" alt="Icon" class="icon" />
                  </div>
                  <div class="col-8 card-padding">
                    <div class="d-flex flex-column">
                      <span class="percentage">70M+</span>
                      <span class="text">Revenue</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-content">
                <div class="row">
                  <div class="col-4 pr-0">
                    <v-lazy-image src="assets/home/m_4.png" alt="Icon" class="icon" />
                  </div>
                  <div class="col-8 card-padding">
                    <div class="d-flex flex-column">
                      <span class="percentage">98%</span>
                      <span class="text">Satisfaction</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-5 mt-5">
          <v-lazy-image src="/assets/home/new_globe.png" alt="" />
        </div>

        <div class="col-5 pl-5 mt-5">
          <div class="row">
            <div class="col-12 d-flex align-items-center pl-0">
              <v-lazy-image src="/assets/home/new_logo.svg" alt="" class="logo-img" />
              <h3 class="mb-0 market-heading">
                <span>{{ $t("general.cameroon_focus") }}</span>
                <span style="color: black;"> {{ $t("general.focused_marketplace") }}</span>
              </h3>
            </div>
            <div class="col-12 pl-0">
              <h3 class="statistics">
                {{ $t("general.Some_of_our_statistics") }}
              </h3>
            </div>
          </div>

          <div class="row mt-4">
            <div class="col-6 statistic-box">
              <span class="text-left">
                <h3>7500+</h3>
                <span style="color: black;">{{
                  $t("general.7k_business")
                  }}</span>
              </span>
            </div>
            <div class="col-6 statistic-box">
              <span class="text-left">
                <h3>13000+</h3>
                <span style="color: black;">{{
                  $t("general.13k_customers")
                  }}</span>
              </span>
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-6 statistic-box">
              <span class="text-left">
                <h3>100+</h3>
                <span style="color: black;">{{
                  $t("general.100_industries")
                  }}</span>
              </span>
            </div>
            <div class="col-6 statistic-box">
              <span class="text-left">
                <h3>72H</h3>
                <span style="color: black;">{{
                  $t("general.48h_respond_time")
                  }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-whitee network camroon-focus-mobile">
      <div class="container text-center  mt-3" data-aos="zoom-in-up" data-aos-offset="70px" data-aos-duration="1500">
        <v-lazy-image src="/assets/home/new_logo.svg" alt="" class="logo-img m-auto" />
        <h3 class="mb-0 market-heading text-center">
          <span>{{ $t("general.cameroon_focus") }}</span>
          <span style="color: black;">Focused {{ $t("network.Marketplace") }}</span>
        </h3>
        <h3 class="statistics text-center">
          {{ $t("general.Some_of_our_statistics") }}
        </h3>
        <div class="d-flex row">
          <div class="col-4 mt-5">
            <div class="card-container">
              <div class="card">
                <div class="card-content">
                  <div class="row">
                    <div class="col-4 pr-0">
                      <v-lazy-image src="assets/home/m_1.png" alt="Icon" class="icon" />
                    </div>
                    <div class="col-8 card-padding">
                      <div class="d-flex flex-column">
                        <span class="percentage">4</span>
                        <span class="text">{{ $t("general.countries") }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-content">
                  <div class="row">
                    <div class="col-3 pr-0">
                      <v-lazy-image src="assets/home/m_2.png" alt="Icon" class="icon" />
                    </div>
                    <div class="col-9 card-padding">
                      <div class="d-flex flex-column">
                        <span class="percentage pl-1">500+</span>
                        <span class="text">{{ $t("general.deals_globally") }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-content">
                  <div class="row">
                    <div class="col-4 pr-0">
                      <v-lazy-image src="assets/home/m_3.png" alt="Icon" class="icon" />
                    </div>
                    <div class="col-8 card-padding">
                      <div class="d-flex flex-column">
                        <span class="percentage">70M+</span>
                        <span class="text">Revenue</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-content">
                  <div class="row">
                    <div class="col-4 pr-0">
                      <v-lazy-image src="assets/home/m_4.png" alt="Icon" class="icon" />
                    </div>
                    <div class="col-8 card-padding">
                      <div class="d-flex flex-column">
                        <span class="percentage">98%</span>
                        <span class="text">Satisfaction</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-8 mt-5">
            <v-lazy-image src="/assets/home/globe-mobile.png" alt="" />
          </div>
        </div>

        <div class="col-12">
          <div class="row mt-4">
            <div class="col-3 statistic-box">
              <span class="text-left">
                <h3>7500+</h3>
                <span style="color: black;">{{
                  $t("general.7k_business")
                  }}</span>
              </span>
            </div>
            <div class="col-3 statistic-box">
              <span class="text-left">
                <h3>13000+</h3>
                <span style="color: black;">{{
                  $t("general.13k_customers")
                  }}</span>
              </span>
            </div>
            <div class="col-3 statistic-box">
              <span class="text-left">
                <h3>100+</h3>
                <span style="color: black;">{{
                  $t("general.100_industries")
                  }}</span>
              </span>
            </div>
            <div class="col-3 statistic-box">
              <span class="text-left">
                <h3>72H</h3>
                <span style="color: black;">{{
                  $t("general.48h_respond_time")
                  }}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section style="background: #F3F3F3">
      <div class="container resources pt-5 pb-4">
        <div class="text-center">
          <h3>
            <span> {{ $t("general.digital_education") }} </span>
            <span style="color: black !important">{{ $t("general.to_help_you_make_more_money") }}
            </span>
          </h3>
          <p style="color: black !important">
            {{ $t("general.use_our_special_design_training") }}
          </p>
        </div>
        <Resources />
      </div>
    </section>

    <section class="bg-whitee">
      <div class="container television-section">
        <div class="television-show-title">
          <h3>
            <span> {{ $t("general.television_show") }} </span> <br />
            <span style="color: black !important">{{ $t("general.from_our_television_show") }}
            </span>
          </h3>
        </div>
        <TelevisionShow />
      </div>
    </section>

    <section class="bg-whitee faq">
      <div class="container pb-5">
        <div class="text-center">
          <h3 style="color: #e75b17">
            {{ $t("general.faq") }}
          </h3>
        </div>
        <FAQ />
      </div>
    </section>

    <section class="bg-whitee">
      <div class="container mt-1 mt-md-5 mb-2 mb-md-5 pb-2 pb-md-5  pt-3 pt-md-5 " data-aos="zoom-in-up"
        data-aos-offset="70px" data-aos-duration="1500"></div>
    </section>

    <SiteFooter />
    <div class="bottom-bar">
      <span>©2021 Bridge Africa</span>
    </div>

    <ProductDetails @closemodal="closeDetailsProduct" :showModal="viewProduct" :product="product" />

    <LightBox ref="lightboxh" :media="crtv_show" :show-caption="true" :show-light-box="false"></LightBox>
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
import AOS from "aos";
import "aos/dist/aos.css";
import { validationMixin } from "vuelidate";
import { required, sameAs, email, minLength } from "vuelidate/lib/validators";
import Resources from "../components/resources";
import TelevisionShow from "../components/televisionShow";
import Categories from "../components/categories";
import FAQ from "../components/faq";
import VLazyImage from "v-lazy-image/v2";

import { LocalisationMixins } from "@/mixins"



import {
  buildByLocalisation,
} from "@/application/products"

export default {
  components: {
    SiteHeader,
    Resources,
    TelevisionShow,
    Categories,
    Products,
    FAQ,
    SiteFooter,
    LightBox,
    ProductDetails,
    VLazyImage,
  },

  mounted() {
    AOS.init();
    this.startRotation();
    this.bannerRotation();
  },

  data() {
    return {
      activeTab: "cameroon",
      products: [],
      infiniteId: +new Date(),
      loading: true,
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
      showbanner1: true,
      showbanner2: false,
      bridge_for_cus: [
        "assets/home/marketplace.png",
        "assets/home/search.png",
        "assets/home/community.png"
      ],

      bridge_for_biz: [
        "assets/home/new_ba_community.png",
        "assets/home/ba-search.png",
        "assets/home/ba-dashboard.png"
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
            gap: "0rem"
          },
          992: {
            perPage: 3,
            gap: "1rem"
          }
        }
      },

      product: [],
      viewProduct: false,

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
            gap: "0rem"
          },
          992: {
            perPage: 1,
            gap: "1rem"
          }
        }
      },

      crtv_showm: [
        {
          type: "youtube",
          thumb: "assets/home/crtv/1m.jpg",
          id: "fTs87IawpN4"
        },

        {
          type: "youtube",
          thumb: "assets/home/crtv/2m.jpg",
          id: "vO53J95E2GA"
        },

        {
          type: "youtube",
          thumb: "assets/home/crtv/3m.jpg",
          id: "EEsHZTkWNIU"
        },

        {
          type: "youtube",
          thumb: "assets/home/crtv/4m.jpg",
          id: "i0crKkQDJ6I"
        }
      ],

      crtv_showmf: [
        // {
        //   type: "youtube",
        //   thumb: "assets/home/crtv/1m.jpg",
        //   id: "fTs87IawpN4",
        // },

        {
          type: "youtube",
          thumb: "assets/home/crtv/2mf.jpg",
          id: "vO53J95E2GA"
        },

        {
          type: "youtube",
          thumb: "assets/home/crtv/3mf.jpg",
          id: "EEsHZTkWNIU"
        },

        {
          type: "youtube",
          thumb: "assets/home/crtv/4mf.jpg",
          id: "i0crKkQDJ6I"
        }
      ],

      crtv_showf: [
        // {
        //   type: "youtube",
        //   thumb: "assets/home/crtv/1f.jpg",
        //   id: "fTs87IawpN4",
        // },

        {
          type: "youtube",
          thumb: "assets/home/crtv/2f.jpg",
          id: "vO53J95E2GA"
        },

        {
          type: "youtube",
          thumb: "assets/home/crtv/3f.jpg",
          id: "EEsHZTkWNIU"
        },

        {
          type: "youtube",
          thumb: "assets/home/crtv/4f.jpg",
          id: "i0crKkQDJ6I"
        }
      ],

      crtv_show: [
        {
          type: "youtube",
          thumb: "assets/home/crtv/1.jpg",
          id: "fTs87IawpN4"
        },

        {
          type: "youtube",
          thumb: "assets/home/crtv/2.jpg",
          id: "vO53J95E2GA"
        },

        {
          type: "youtube",
          thumb: "assets/home/crtv/3.jpg",
          id: "EEsHZTkWNIU"
        },

        {
          type: "youtube",
          thumb: "assets/home/crtv/4.jpg",
          id: "i0crKkQDJ6I"
        }
      ],

      form: {
        pname: null,
        tel: null,
        name: null,
        quantity: null,
        email: null
      },

      userSaved: false,
      sending: false,
      lastUser: null
    };
  },

  mixins: [validationMixin, LocalisationMixins],

  validations: {
    form: {
      pname: {
        required
      },

      name: {
        required
      },

      tel: {
        required
      }
    }
  },

  props: {
    credentials: {
      type: Object,
      default: function () {
        return {
          keyword: "",
          placeholder: this.$t("home.All")
        };
      }
    }
  },

  filters: {
    locationPrice: function (ev, rate, currency) {
      const symbol = currency?.symbol ? currency?.name : 'XAF'
      return rate ? `${(ev / rate).toFixed(2)} ${symbol}` : `${ev} ${symbol}`
    }
  },


  async created() {
    this.loading = true;

    this.onInit()
    localStorage.setItem("searchTab", 0);
    window.addEventListener("load", this.onWindowLoad);
    this.getLocation();
    // axios
    //   .get("guest/home/products")
    //   .then(({ data }) => {
    //     this.products = data.data;
    //     this.loading = false;
    //   })
    //   .catch(err => {
    //     console.log({ err: err });
    //     this.loading = false;
    //   });


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

    crtv_vidM() {
      if (this.$i18n.locale == "en") {
        return this.crtv_showm;
      } else {
        return this.crtv_showmf;
      }
    },

    crtv_vid() {
      if (this.$i18n.locale == "en") {
        return this.crtv_show;
      } else {
        return this.crtv_showf;
      }
    },
    islogin() {
      return this.$store.getters["auth/isLogged"];
    },
    getStatus() {
      return this.$store.state.cart.status;
    }
  },

  watch: {
    countrySelected(newValue) {
      console.log(newValue)
      this.onInit()
    },
    word2(newQuery) {
      axios.get(`visitor/search/city?city=${newQuery}`).then(({ data }) => {
        this.$store.commit("auth/setCities", data.data);
      });
    }
  },

  methods: {

    goToDetail(id) {
      this.$router.push(`/product-details/${id}`);
    },

    async emitChangeCurrency(ev) {

      // currencyMap[]
    },
    async onInit(currency = null) {

      const isGlobal = this.countrySelected?.sigle == 'CM' ? false : true
      const { api } = buildByLocalisation(isGlobal)

      api()
        .then(({ data }) => {
          this.products = data.data;
          this.loading = false;
        })
        .catch(err => {
          console.log({ err: err });
          this.loading = false;
        });
    },

    setActiveTab(tab) {
      this.activeTab = tab;
    },
    gotoproduct(pro) {
      this.product = pro;
      this.viewProduct = true;
    },
    handleAddToCard(product) {
      this.$store
        .dispatch("cart/addToCart", { product, islogin: this.islogin })
        .then(response => {
          this.flashMessage.show({
            status: "success",
            message: this.getStatus
          });
        })
        .catch(err => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: "error occur"
          });
        });
    },
    navigateToCart(product) {
      this.handleAddToCard(product);
      this.$router.push("/cart");
    },

    closeDetailsProduct() {
      this.viewProduct = false;
    },

    scrollTo() {
      window.scrollTo(2800, 2800);
      this.form.pname = this.$t("general.hire_a_professional_tailor");
    },

    playVideo(index) {
      this.$refs.lightboxh.showImage(index);
    },

    gotoSearch() {
      this.$router.push(`/search`);
    },

    onWindowLoad() {
      this.showfadde = true;

      setTimeout(() => { }, 2000);
    },

    showBanner(id) {
      if (id == 1) {
        this.showbanner1 = true;
        this.showbanner2 = false;
      } else {
        this.showbanner2 = true;
        this.showbanner1 = false;
      }
    },

    bannernext() {
      if (this.showbanner1 == true) {
        this.showbanner1 = false;
        this.showbanner2 = true;
      } else {
        this.showbanner1 = true;
        this.showbanner2 = false;
      }
    },

    bannerRotation: function () {
      setInterval(this.bannernext, 10000);
    },

    changephoto(id) {
      this.currentNumber = id;
    },

    startRotation: function () {
      this.timer = setInterval(this.next, 10000);
    },

    next: function () {
      if (this.currentNumber == 0) {
        this.currentNumber = 1;
        return;
      } else if (this.currentNumber == 2) {
        this.currentNumber = 0;
        return;
      } else if (this.currentNumber == 1) {
        this.currentNumber = 2;
        return;
      }
    },

    getValidationClass(fieldName) {
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
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
          quantity: this.form.quantity
        }
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
      getNeigbourhoods: "auth/neigbourhoods"
    }),

    toggleinput() {
      this.$refs.mobileinput.style.display = "inline-flex";
    },

    getLocation() {
      const success = position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        this.getGeo({ lat: latitude, lng: longitude });

        //time to get some neighbourhood mother fuckers ?lat=3.87374300&lng=11.49966000
        this.getNeigbourhoods({ lat: latitude, lng: longitude });
      };

      const error = err => {
        console.log(error);
      };


      // This will open permission popup
      navigator.geolocation.getCurrentPosition(success, error);
    },

    businessOwner() {
      this.$store
        .dispatch("homeRedirection/businessInfos")
        .then(res => {
          this.$router.push({
            name: "BusinessOwner",
            params: { id: this.$store.state.homeRedirection.idbissf }
          });
          console.log(this.$store.state.homeRedirection.idbissf);
        })
        .catch(err => {
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
          query: { keyword: this.credentials.keyword, location: this.word2 }
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
    }
  }
};
</script>

<style>
.mobile-buttons {
  display: none !important;
}

.start-selling-mobile {
  display: none !important;
}

.ba-section-mobile {
  display: none;
}

.ba-video {
  padding-left: 3rem;
}

.television-show-title {
  text-align: left;
}

.camroon-focus-mobile .col-12 {
  padding-left: 3rem;
  padding-top: 3rem;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  border-left: 1.1em solid rgb(231, 91, 23) !important;
}

.market-heading {
  font-size: 30px !important;
  line-height: 36px !important;
}

.create-your-shop {
  height: 30px !important;
  width: 45px;
  border-radius: 50%;
  background-color: #fee6db;
}

.ship-globally {
  height: 30px !important;
  width: 30px;
  border-radius: 50%;
  background-color: #e8fbee;
}

.get-paid {
  height: 30px !important;
  width: 30px;
  border-radius: 50%;
  background-color: #f2e8fb;
}

/* .d-flex img {
  width : 16px !important;
  height: 16px !important;
  margin-left: 3px;
  margin-top: -4px;
} */
.statistics {
  font-size: 25px !important;
  font-weight: normal !important;
  color: black !important;
  line-height: 40px !important;
}

.logo-img {
  width: 60px !important;
  margin-right: 30px;
  max-width: 100%;
}

.bottom-border {
  border-bottom: 2px solid #ebebeb;
  margin-left: 20px;
  opacity: 0.7;
}

.bottom-border:hover {
  border-bottom: 2px solid #e75b17;
  opacity: 0.9;
  color: black !important;
}

.padding-img {
  padding-left: 20px;
}

/* //////////// */
.icon-spacing {
  width: 20px;
  width: 16px !important;
  height: 16px !important;
  margin-left: 3px;
  margin-top: -4px;
}

/* //////////////// */

.bg-color {
  background-color: #f3f3f3;
}

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
  color: #a5a5a5;
  opacity: 1;
}

.ba-input {
  background-color: white !important;
}

.label-color {
  color: black;
}

/* /////// */
.see-all-p {
  text-align: right;
  text-decoration: underline;
  color: #ff9e19;
}

.see-all-p a {
  color: #ff9e19;
}

.see-all-p :hover {
  text-align: right;
  text-decoration: underline;
  color: #ff9e19;
}

/* ////////// */
.product-section {
  padding: 20px;
  background-color: #ffffff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.sections-title {
  font-size: 24px;
  color: black;
  text-align: center;
  margin-bottom: 10px !important;
}

.section-description {
  font-size: 16px;
  color: black;
  text-align: center;
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.button-start,
.button-end {
  display: flex;
  gap: 10px;
}

.filter-button {
  padding: 10px 20px;
  margin: 0 5px;
  border: 1px solid #a4a4a4;
  background-color: white;
  color: #a4a4a4;
  cursor: pointer;
  border-radius: 50px;
}

.filter-button.active,
.filter-button:hover {
  border: 1px solid #e75b17;
  color: #e75b17;
}

.filter-button i {
  margin-left: 5px;
}

/* Responsive Styles */
@media (max-width: 768px) {
  .padding-img {
    padding-left: 2px;
  }

  .button-group {
    flex-direction: column;
  }

  .button-start,
  .button-end {
    width: 100%;
    justify-content: center;
    margin-bottom: 10px;
  }

  .filter-button {
    padding: 5px !important;
    font-size: 12px;
    height: fit-content;
    width: 100%;
    margin: 5px 0;
  }
}

/* //////////// */
.grid {
  /* display: flex;
  flex-wrap: wrap;
  gap: 20px; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.grid-item {
  background-color: white;
  border: 1px solid #e0e0e0;
  text-align: center;
  position: relative;
  flex: 1 1 calc(25% - 20px);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
}

.image-container {
  position: relative;
  width: 100%;
  height: 200px !important;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  /* padding: 1px 10px; */
}

.product-image {
  height: 200px !important;
  width: 100%;
  /* height: 50% !important; */
  object-fit: cover;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  cursor: pointer;
  /* border-radius: 6px; */
}

.stock-status {
  text-align: left;
  border-radius: 5px;
  font-size: 12px;
  display: flex;
  justify-content: start;
  margin-bottom: 5px;
}

.in-stock {
  color: #23c73d;
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
  color: #f5f5f5;
}

.content-container {
  padding: 0px 15px;
}

.content-container h3 {
  font-size: 17px !important;
  line-height: 20px !important;
  color: #000000;
  text-align: left !important;
  cursor: pointer;
}

.content-container p {
  font-size: 14px !important;
  line-height: 20px !important;
  text-align: left !important;
  color: #000000;
}

.bottom-info {
  padding: 2px 15px 10px 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /*  */
  justify-content: space-between;
}

.price {
  font-weight: bold;
  font-size: 16px;
  color: #333;
  margin-bottom: 5px;
}

.add-to-cart {
  padding: 5px 7px;
  cursor: pointer;
  height: auto;
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border: none;
  border-radius: 30px;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.add-to-cart:hover {
  background-color: #e68a00;
}

.buy-now-btn {
  padding: 5px 5px;
  cursor: pointer;
  height: auto;
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border: none;
  border-radius: 30px;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-left: 12px !important;
}

.buy-now-btn:hover {
  background-color: #e68a00;
}

.buy-now-btn .arrow-icon {
  margin-left: 3px !important;
}

.arrow-icon {
  background-color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0;
  margin-left: 10px;
}

.arrow-icon i {
  color: #ff6200;
}

/*  ///////////////// */
.statistic-box {
  border-left: 4px solid #e75b17;
  padding-left: 10px;
  color: black;
}

.globe-img {
  height: 488px !important;
  width: 488px !important;
  max-width: 500px;
}

.card-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.network {
  display: flex;
  justify-content: center;
}

.card {
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.card-content {
  display: flex;
  flex-direction: column;
}

.card-padding {
  padding-left: 5px !important;
  text-align: left;
}

.icon {
  width: 30px;
  height: 50px;
}

.percentage {
  font-size: 22px;
  font-weight: bold;
  color: #000;
}

.text {
  font-size: 12px;
  color: black;
  margin-top: 5px;
}

.camroon-focus-mobile {
  display: none;
}

@media only screen and (min-width: 960px) {
  .custom-container {
    padding-left: 150px;
    padding-right: 150px;
  }

  .flex-container {
    margin: 30px 0;
  }
}

@media only screen and (max-width: 760px) {
  .custom-container {
    padding-left: 20px;
    padding-right: 20px;
  }
}

.about-p {
  color: #ffffff;
}

.flex-container h3 {
  font-size: 22px;
}

.our-category-description {
  padding-left: 3rem;
  padding-right: 3rem;
}

.flex-container .line1 {
  font-size: 22px;
  color: #ffffff;
}

.flex-container .line2 {
  color: #e75b17;
}

.flex-container .line3 {
  color: #ffffff;
}

.flex-container p {
  color: #ffffff;
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

.buy-btn-white {
  background: white !important;
  border-color: white !important;
  color: #455a64 !important;
}

.hire-tailor-img {
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

.md-field {
  padding-top: 0 !important;
  margin: 0 !important;
  margin-bottom: 10px !important;
}

.bridge-home .md-focused .p-2 {
  padding: 0rem !important;
  margin-top: -10px;
}

.bridge-home .md-has-value .p-2 {
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
  padding-right: 1rem !important;
}

.ba-input .form-control {
  background: #fafafa;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.11);
  border-radius: 5px;
  height: 55px !important;
  padding: 2px;
}
</style>

<style scoped>
.p-image {
  height: 150px;
  object-fit: cover;
}

.progress-indicator {
  width: 30px;
  height: 5px;
  border-radius: 5px;
}

.progress-active {
  background: #e75b17;
}

.hire-btn {
  height: 40px;
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border-radius: 30px;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding-left: 20px;
}

.hire-btn-div {
  text-align: left;
}

.hire-div {
  max-height: 400px;
  max-width: 500px;
}

.border-class {
  border-bottom: 1px solid #dcdcdc;
}

.buy-btn {
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border-radius: 10px;
  width: 155px;
}

.quote-btn {
  height: 47.12px;
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border-radius: 30px;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  padding: 15px;
  padding-left: 20px !important;
}

.selling-btn {
  width: 174px;
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border: none;
  border-radius: 30px;
  color: white;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
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
  margin-left: 15px;
}

.arrow-icon-wrapper i {
  color: #ff6200;
}

@media only screen and (max-width: 960px) {
  .main-banner {
    height: 400px;
  }

  .cover {
    border-radius: 10px;
  }

  .explore-network-img {
    object-fit: cover;
    border-radius: 10px;
    height: 210px !important;
  }
}

@media only screen and (min-width: 960px) {
  .main-banner {
    height: 470px;
  }

  .cover {
    object-fit: revert !important;
  }
}
</style>

<style>
.cover {
  object-fit: cover;
}

.upgrade-btn {
  width: 207px;

  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border-radius: 10px;
}

.upgrade-text {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 44px;
}

.upgrade-text span {
  color: #e75b17;
}

.pt-7 {
  padding-top: 7rem;
}

.pt-6 {
  padding-top: 6rem;
}

.crtv-ban {
  border-radius: 10px;
  border-radius: 20px;
  padding: 2rem;
}

.r-image {
  position: relative;
}

.crtv-bans {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 700px;
}

.crtv-bans img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
  margin-bottom: 30px;
  border-radius: 5px;
  font-size: 44px;
  font-weight: 600;
  cursor: pointer;
  z-index: 10;
  /* Ensure the button is on top */
}

.top-slider .splide__arrow--prev {
  margin-left: 20px;
}

.top-slider .splide__arrow--next {
  margin-right: 20px;
}

.shop-span {
  padding-bottom: 5px;
  border-bottom: 2px solid white;
}

.shop-span:hover {
  border-bottom: 2px solid #e75b17;
  color: #e75b17;
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
  .upgrade-acc-img {
    width: 20px !important;
    margin-bottom: auto;
    margin-right: 10px;
  }

  .upgrade-cover {
    height: 290px !important;
    object-fit: contain !important;
    border-radius: 10px;
  }

  .upgrade-side-box {
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
  .upgrade-side-box {
    margin-left: -40%;
    /* margin-right:40%; */

    background: #ffffff;
    box-shadow: 0px 20px 55px rgba(0, 0, 0, 0.13);
    border-radius: 20px;
    padding: 2rem;
  }
}

@media only screen and (min-width: 768px) {
  .hire-dev {
    background: #ffffff;
    border: 1px solid #dedede;
    box-shadow: 0px 4px 10px rgba(227, 227, 227, 0.25);
    border-radius: 15px;
  }

  .upgrade-acc-img {
    width: 20px !important;
    margin-bottom: auto;
    margin-right: 10px;
  }

  .upgrade-cover {
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

.explore-btn {
  width: 207px;
  height: 43.5px;
  background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
  border-radius: 10px;
}

.border-left-biz {
  border-left: none !important;
}

.babiz-list {
  padding-left: 0 !important;
  margin-left: 0 !important;
  margin-top: 40px;
  border-left: none !important;
}

.babiz-list:hover {
  border-bottom: none !important;
  border-left: none !important;
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

.about-box img {
  max-height: 152px;
  width: 100%;
  object-fit: contain;
}

.about-box h6 {
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

.resources p {
  padding: 0 3rem;
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

.television-section {
  padding-bottom: 3rem;
  padding-top: 3rem;
}

.splide__pagination {
  display: none !important;
}

@media only screen and (max-width: 768px) {
  .selling-btn {
    background: linear-gradient(to right, #ff9e19, #ff6200);
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
    color: #e75b17 !important;
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

    scrollbar-width: none;
    /* Firefox */
    -ms-overflow-style: none;
    /* IE 10+ */
  }

  .nav.nav-tabs::-webkit-scrollbar {
    display: none;
  }
}

.nav-tabs:hover {
  background-color: transparent !important;
}

.nav-tabs a:hover {
  background: rgba(243, 243, 243, 1) !important;
  border-radius: 0px;
  color: #e75b17 !important;
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

.bottom-bar {
  display: flex;
  justify-content: center;
  background-color: #2d2d2d;
  padding: 5px 0;
  color: white;
}

@media screen and (max-width: 431px) {
  .top-slider {
    height: 200px;
  }

  .row {
    margin: 0 !important;
  }

  .button-group {
    display: none !important;
  }

  .see-all-p {
    display: none !important;
  }

  .shop-now-btn {
    font-size: 25px;
    bottom: -15px;
  }

  .shop-span {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .shop-span::after {
    content: "";
    position: absolute;
    bottom: 20%;
    left: 30px;
    right: 30px;
    height: 3px;
    background-color: #fff;
  }

  .crtv-bans {
    height: 200px;
  }

  .crtv-bans img {
    width: 100%;
    height: auto;
    object-fit: fill;
  }

  .splide__arrow {
    top: 50% !important;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  .image-container {
    height: 150px !important;
  }

  .product-image {
    height: 150px !important;
  }

  .content-container {
    padding: 0px 5px;
  }

  .content-container h3 {
    font-size: 15px !important;
    margin: 0;
  }

  .content-container p {
    font-size: 14px !important;
    margin: 0;
    margin-bottom: 5px;
  }

  .stock-status {
    margin-bottom: 3px;
  }

  .bottom-info {
    padding: 2px 5px 10px 5px;
  }

  .product-section {
    padding-bottom: 0px !important;
  }

  .ba-section-mobile {
    display: block;
  }

  .ba-video {
    padding: 0px !important;
  }

  .ba-section {
    display: none;
    padding: 0 20px;
  }

  .ba-business {
    padding-top: -20px !important;
  }

  .ba-business .ba-description {
    text-align: center !important;
  }

  .ba-title {
    text-align: center;
  }

  .sales-channel-section .flex-container {
    display: unset !important;
    text-align: center !important;
  }

  .selling-btn {
    width: auto !important;
  }

  .selling-btn-mobile {
    width: 174px;
    background: linear-gradient(323.09deg, #e07715 6.03%, #ff9e19 85.15%);
    border: none;
    border-radius: 30px !important;
    color: white;
    display: inline-flex !important;
    align-items: center;
    justify-content: center;
    font-weight: 700 !important;
    font-size: 15px !important;
    padding: 2px 2px 2px 20px !important;
  }

  .selling-btn-mobile .arrow-icon-wrapper {
    margin-left: auto;
  }

  .start-selling-desktop {
    display: none !important;
  }

  .start-selling-mobile {
    display: block !important;
  }

  .selling-btn {
    display: none !important;
  }

  .mobile-start-selling-btn {
    display: flex !important;
    justify-content: center;
    text-align: center;
  }

  .our-category-description {
    padding: 0 12px !important;
  }

  .quote-btn {
    width: auto !important;
    padding: 0 !important;
    padding-right: 3px !important;
  }

  .quote-btn-div {
    text-align: center;
  }

  .arrow-icon-wrapper {
    width: 42px !important;
    height: 42px !important;
  }

  .tailor-content {
    text-align: center !important;
  }

  .hire-btn-div {
    text-align: center !important;
  }

  .hire-btn {
    height: 42.12px !important;
    padding: 0 !important;
    padding: 5px 3px 5px 20px !important;
  }

  .hire-btn .arrow-icon-wrapper {
    width: 40px !important;
    height: 40px !important;
  }

  .accordion {
    padding: 0 !important;
  }

  .resources p {
    padding: 0 30px;
  }

  .television-show-title {
    text-align: center;
  }

  .tailor-section {
    display: none;
  }

  .camroon-focus-desktop {
    display: none;
  }

  .camroon-focus-mobile {
    display: block;
    padding-bottom: 40px;
  }

  .market-heading {
    font-size: 26px !important;
  }

  .statistics {
    font-size: 18px !important;
    line-height: 30px !important;
    margin-top: 20px;
    padding: 0 28px;
  }

  .camroon-focus-mobile .col-4,
  .camroon-focus-mobile .col-8,
  .camroon-focus-mobile .col-12,
  .camroon-focus-mobile .col-3,
  .camroon-focus-mobile .row {
    padding: 0;
  }

  .camroon-focus-mobile img {
    width: 100%;
    margin-left: 10px;
  }

  .camroon-focus-mobile .card {
    padding: 5px;
  }

  .camroon-focus-mobile .card-content img {
    width: 20px;
    height: 20px;
    margin-left: 0;
  }

  .camroon-focus-mobile .card-content .percentage {
    font-size: 16px;
    padding-left: 0 !important;
  }

  .camroon-focus-mobile .card-content .text {
    font-size: 9px;
    margin-top: 0;
  }

  .statistic-box {
    padding-left: 8px !important;
  }

  .statistic-box h3 {
    font-size: 16px !important;
    margin: 0;
    padding: 0;
  }

  .statistic-box span {
    font-size: 10px !important;
  }

  .create-your-shop,
  .ship-globally,
  .get-paid {
    width: 75px;
    display: flex !important;
    align-items: center;
    justify-content: center;
  }

  .ship-globally {
    width: 42px;
  }

  .get-paid {
    width: 37px;
  }

  .section-description {
    padding: 0 30px !important;
  }

  .quote-form {
    padding: 0 !important;
  }

  .desktop-buttons {
    display: none !important;
  }

  .mobile-buttons {
    display: block !important;
  }

  .television-section {
    padding-bottom: 1rem !important;
    padding-top: 2rem !important;
  }

  .television-section .splide__arrow--prev {
    margin-left: 5px !important;
  }

  .television-section .splide__arrow--next {
    margin-right: 5px !important;
  }

  .television-section .splide__arrow {
    top: 28% !important;
  }
}
</style>
