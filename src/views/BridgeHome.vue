<template>
  <div class="bridge-home">
    <site-header class="topbar" />

  <section class="p-0 pt-md-2 pb-2">
      
       <div class="container d-none d-md-block main-banner"  >
        <div class="row h-100">
          <div class="col-md-8 h-100 pl-0 "  > 
           
   
            <div style="background-image:url('/assets/home/desk-banner.png'); background-size: cover;     border-radius: 10px;" class="h-100"> 
             
            <div data-aos="zoom-out"  data-aos-duration="1000" style="position:absoulute; width:40%;" class="p-3">  <h3>  {{ $t("general.setup_an_ecommerce") }}   </h3>
            <p>  {{ $t("general.to_millions") }} </p> </div>
           
            <div data-aos="zoom-in"  data-aos-duration="1000" class="p-3"> 
              <router-link to="/signup"> <b-button variant="primary" class="buy-btn buy-btn-white m-2">{{ $t("general.go_digital") }}  <img src="/assets/home/logo.png" width= "35px" alt="">  </b-button> </router-link>
            </div>
         </div>
          </div>  

          <div class="col-md-4 h-100 pr-0"  >
            <div style="background-image:url('/assets/home/right-banner.jpg'); background-size: cover;     border-radius: 10px;" class="h-100"> 
            <div data-aos="zoom-out"  data-aos-duration="1000"  class="p-3">  <h3> {{ $t("general.find_product_and_services") }}  </h3>
            <p>  {{ $t("general.you_need_anytime_anywhere") }} </p> </div>
           
            <div class="p-3" > 
            <router-link to="/search">  <b-button variant="primary" class="buy-btn" style="    position: absolute; right: 10px; bottom: 30px;"> {{ $t("general.buy_now") }}  </b-button> </router-link>
             <br>
            </div>
            </div>
          </div>
        </div>
      </div>




      
      <div class="container d-block d-md-none main-banner p-0"  data-aos="zoom-out"  data-aos-duration="1000"  >
       
  <div v-if="showbanner1" class="h-100 pl-0 "    >
            <div style="background-image:url('/assets/home/phone-right-banner.jpg'); background-size: cover;" class="h-100"> 
             
            <div style="position:absoulute; width:40%;" class="p-3">  <h3>  {{ $t("general.setup_an_ecommerce") }}  </h3>
            <p>  {{ $t("general.to_millions") }} </p> </div>
           
            <div class="p-3"> 
           <router-link to="/signup">   <b-button variant="primary" class="buy-btn buy-btn-white m-2">{{ $t("general.go_digital") }}  <img src="/assets/home/logo.png" width= "35px" alt="">  </b-button> </router-link>
            </div>
         </div>
          </div> 
       
         <div v-if="showbanner2" class=" h-100 pr-0"    >
            <div style="background-image:url('/assets/home/phone-banner.jpg'); background-size: cover;" class="h-100"> 
            <div  class="p-3">  <h3> {{ $t("general.find_product_and_services") }}  </h3>
            <p> {{ $t("general.you_need_anytime_anywhere") }} </p> </div>
           
            <div class="p-3 mt-5"> 
            <router-link to="/search">  <b-button variant="primary" class="buy-btn mt-2" > {{ $t("general.buy_now") }}  </b-button> </router-link>
             <br>
            </div>
            </div>
              </div> 

      </div>

      <div class="container d-lg-none pb-3"> 
 
          <div class="d-flex text-center mt-3"> 
            <div class="m-auto d-flex">  
           <span @click="showBanner(1)" role="button" class="progress-indicator shadow  mr-1"  :class="{'progress-active':showbanner1}"> </span> 
           <span @click="showBanner(2)" role="button" class="progress-indicator shadow" :class="{'progress-active':showbanner2}" > </span>
           </div>
            </div>
       </div>



    </section>
 
    <section style="background: #f8f8f8" class="pt-1 pb-1">
      <div class="container pt-5  pb-5 " data-aos="zoom-out" data-aos-offset="70px" data-aos-duration="1500">
        <h3 class="text-center text-md-left"> <span>  {{ $t("general.About") }}  </span>  {{ $t("general.Us") }}   </h3>
        <p class="pt-2">
           {{ $t("general.help_small_and_medium_size") }}
        </p>

        <div class="row h-100">
          <div class="col-md-4 pt-2 ">
            <div class="about-box p-3 h-100"  data-aos="fade-up" data-aos-offset="70px" data-aos-duration="1500" >
              <h6>   {{ $t("general.sell_world_wide") }}  </h6>
              <p>
                {{ $t("general.all_in_one") }}
                
              </p>
              <div> <img src="assets/home/about_sell.png" alt=""> </div>
            </div>
          </div>

          <div class="col-md-4 pt-2">
            <div class=" about-box h-100 p-3"  data-aos="fade-up" data-aos-offset="70px" data-aos-duration="1500">
              <h6> {{ $t("general.buy_world_wide") }} </h6>
              <p>
              {{ $t("general.buy_world_wide_customers") }} 

              </p>
              <div> 
                <img src="assets/home/about_buy.png" alt="">
              </div>
            </div>
          </div>

          <div class="col-md-4 pt-2">
            <div class=" about-box h-100 p-3"  data-aos="fade-up" data-aos-offset="70px" data-aos-duration="1500">
              <h6> {{ $t("general.logistics_support") }} </h6>
              <p>{{ $t("general.we_support_businese_throughout") }}

      
              </p>
              <div> <img src="assets/home/about_sell.png" alt=""></div>
            </div>
          </div>
        </div>
      </div>
    </section>


 
    <section class="bg-white pb-3 pt-1" >
      
      <div class="container pt-2 pt-md-5 pb-3">
        <div class="market">
           <h3 data-aos="zoom-in" data-aos-offset="70px" data-aos-duration="1500">
            <span class="m-header-color"> {{ $t("general.buy_quality_product") }}  </span> {{ $t("general.from_ourMarket_place") }} 
          </h3>
          <p class="mt-2"> {{ $t("general.with_over_100_categories") }}
          </p>
          <!-- <div class="d-none d-lg-flex">
           <b-button @click="gotoSearch" variant="primary" class=" moreproducts-btn">
             {{ $t("general.more_products") }}  <b-icon icon="arrow-right"> </b-icon>
            </b-button>  
          </div> -->
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

           <!-- <div class=" d-lg-none text-center">
            <b-button variant="primary" class=" moreproducts-btn">
            {{ $t("general.more_products") }}  <b-icon icon="arrow-right"> </b-icon>
            </b-button>
          </div> -->

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

    <section class="bg-gradient">
      <div class="container ba-business pt-5 pb-5" >
        <div class="row">
          <div class="col-lg-6  order-2 order-md-1" data-aos="slide-left" data-aos-offset="70px" data-aos-duration="1500" >
            <!-- <img src="assets/home/forcus.png" alt="" /> -->
               <transition name="fade">
             <b-img  data-aos="slide-right" data-aos-offset="70px" data-aos-duration="1500"  :src="bridge_for_cus[currentNumber]" />
          
               </transition>

               <!-- <transition name="fade">
          
              <b-img  data-aos="slide-right" data-aos-offset="70px" data-aos-duration="1500" v-if="currentNumber==1"  :src="bridge_for_cus[currentNumber]" />
               </transition>
               <transition name="fade">

                <b-img  data-aos="slide-right" data-aos-offset="70px" data-aos-duration="1500" v-if="currentNumber==2"   :src="bridge_for_cus[currentNumber]" />
               </transition> -->
          </div>

          <div class="col-lg-6 order-1 order-md-2" data-aos="slide-right" data-aos-offset="70px" data-aos-duration="1500">
            <h3 class="white">
              <span class="m-header-color">Bridge Africa </span>  {{ $t("general.for_customers") }}
            </h3>
             <div class="border-left-biz mt-2"> 
            <div class="babiz-list " @mouseover="changephoto(0)" :class="{ active: currentNumber==0 }">
              <h5 class="white"> {{ $t("general.large_marketplace_and_digital") }}</h5>
              <p class="white">
                {{ $t("general.we_help_customers_online_to") }}
              </p>
            </div>

            <div class="babiz-list " @mouseover="changephoto(1)" :class="{ active: currentNumber==1 }">
              <h5 class="white"> {{ $t("general.localize_business_directory") }} </h5>
              <p class="white">
                {{ $t("general.we_help_you_easily_find") }}
              </p>
            </div>

            <div class="babiz-list " @mouseover="changephoto(2)" :class="{ active: currentNumber==2 }">
              <h5 class="white" > {{ $t("general.community_engageMent") }} </h5>
              <p class="white">
                {{ $t("general.follow_and_communicate_with") }}
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-whitee">
      <div class="container bafind bg-whitee  pt-5 pb-5"  data-aos="zoom-in-up" data-aos-offset="70px" data-aos-duration="1500">
        <div class="row px-md-5 px-2">
          <div class="col-lg-5 p-0 p-md-2 m-auto ">
            <video
              width="100%"
            
              style="object-fit:contain; border-radius: 10px;  border-radius:10px"
              controls
              poster="assets/home/quotevideo.jpg"
            >
              <source src="assets/video/intro_video.mp4" type="video/mp4" />
            </video>
          </div>

          <div class="col-lg-7  " id="quote">
            <h3>
              <span>{{ $t("general.let_help_u") }} </span>   {{ $t("general.find_products_and_services") }}
            </h3>

            <div class="m-left">
              <form novalidate @submit.prevent="validateUser">
                <div class="form pt-1 row">
                  <div class="col-md-12">

                 <md-field :class="getValidationClass('pname')">
                  <label for="name" class=" p-2">
                    {{ $t("general.looking_for_something") }}
                  </label>
                  <md-input
                    type="text"
                    name="name"
                    class="ba-input "
                    id="name"
                    v-model="form.pname"
                  />

                  <span class="md-error" v-if="!$v.form.pname.required">
                    required
                  </span>
                </md-field>



                  </div>

                  <div class="col-md-6">
                     <md-field :class="getValidationClass('quantity')">
                  <label for="qunatity" class="p-2">
                    {{ $t("general.Quantity") }}
                  </label>
                  <md-input
                     class="ba-input "
                    type="number"
                    name="qunatity"
                    id="quantity"
                    v-model="form.quantity"
                  />
                </md-field>
                  </div>

                  <div class="col-md-6">
                     
                  <md-field :class="getValidationClass('name')">
                  <label for="uname" class="p-2">
                    {{ $t("general.full_name") }}
                  </label>
                  <md-input
                    type="text"
                    name="uname"
                    id="uname"
                     class="ba-input "
                    v-model="form.name"
                  />

                  <span class="md-error" v-if="!$v.form.name.required">
                    {{ $t("auth.First_Name_is_required") }}
                  </span>
                </md-field>

                  </div>

                  <div class="col-md-6">
                     <md-field class="">
                  <label for="email" class="p-2">
                    {{ $t("general.Email") }}
                  </label>
                  <md-input
                    type="email"
                    name="email"
                    id="email"
                     class="ba-input "
                    v-model="form.email"
                  />
                </md-field>
                  </div>

                  <div class="col-md-6">
                  <md-field :class="getValidationClass('tel')">
                  <label for="name" class="p-2"> {{ $t("general.Tel") }} </label>
                  <md-input
                    type="number"
                    name="tel"
                    id="tel"
                     class="ba-input "
                    v-model="form.tel"
                  />

                  <span class="md-error" v-if="!$v.form.tel.required">
                    {{ $t("auth.tel_is_required") }}
                  </span>
                </md-field>
                  </div>
                  <div class="col-md-12 col-lg-6">
                    <b-button
                      type="submit"
                      variant="primary"
                      block
                      class="mb-3 quote-btn"
                    >
                      {{ $t("general.Request_For_Quotation") }}
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


<section> 

  <div class="container pt-5 pb-5"  data-aos="fade-left" data-aos-offset="70px" data-aos-duration="1500" > 
    <div class="row">
      
      <div class="col-md-6 ">
        <div class=""> 
        <div class=" m-auto mt-md-3  p-2 p-lg-5" style="border-radius: 15px;"> 
          <h3> <span> {{ $t("general.Tailor") }} </span> <br>     
       - {{ $t("general.Transformed") }} </h3>
   <div class="d-block">  
   <p > {{ $t("general.hire_a_professional_tailor") }} </p>
      </div>
        </div>
       <div class=" p-2 p-lg-5 text-left">  
    <b-button  @click="scrollTo" variant="primary" class="hire-btn"> {{ $t("general.hire_tailor") }} </b-button>
        </div>
         </div>
        </div> 


        <div class="col-md-6">
        <div>
          <img class="hire-tailor-img" src="assets/home/hire_professional.png" alt="">
        </div>
      </div>

       </div> </div>
</section>
    <section style="background: #f8f8f8">
      <div class="container explore-network pt-5 pb-5"   data-aos="zoom-in-down" data-aos-offset="70px" data-aos-duration="1500"  >
        <h3><span> {{ $t("general.Explore") }}  </span> {{ $t("general.Networks") }} </h3>
        <p>
          {{ $t("general.our_network_accounts") }}
        </p>

        <div class="row">
          <div class="col-md-6 mt-3">
            <div class="card h-100 p-3">
              <div class="row h-100">
                <div class="col-lg-7 order-2 order-lg-1 ">
                  <h5> Textile Artisans of Cameroon</h5>
                  <p>{{ $t("general.our_network_accounts") }}</p>
                  <div class="text-center"> 
                    <router-link to="network_follower/les-artisans-textile-du-cameroun-the-textile-artisans-of-cameroon-g0ax5dj1v">  <b-button variant="primary" class="mt-auto explore-btn"> {{ $t("general.view_more") }} </b-button> </router-link>
                  </div>
                </div>
                <div class="col-lg-5 order-1 order-lg-2">
                  <b-img-lazy
                    class="explore-network-img "
                    src="assets/images/fashion-designing-schools-in-cameroon-1.jpg"
                    alt="alternative"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 mt-3">
            <div class="card h-100 p-3">
              <div class="row">
                <div class="col-lg-7 order-2 order-lg-1">
                  <h5>PEA-Jeunes ({{ $t("general.agriculture") }})</h5>
                  <p>{{ $t("general.get_in_touch_with") }}</p>
                 <div class="text-center">  
                 <router-link to="network_follower/pea-jeunes-qgmhghur5">    <b-button variant="primary" class="explore-btn ">{{ $t("general.view_more") }}  </b-button> </router-link>  </div> 
                </div> 
                <div class="col-lg-5 order-1 order-lg-2">
                  <b-img-lazy
                    class="explore-network-img "
                    src="assets/images/csm_senegal-agriculture-food_georges_gobet_afp_35f00077fb_1.jpg"
                    alt="alternative"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-whitee">
      
      <div class="container resources pt-5 pb-5"  >
        <div class="row">
          <div class="col-lg-10">
            <h3>
              <span> {{ $t("general.digital_education") }}   </span> {{ $t("general.to_help_you_make_more_money") }}  
            </h3>
            <p>
              {{ $t("general.use_our_special_design_training") }} 
            </p>
          </div>

          <div class=" d-none d-lg-block col-lg-2 text-center m-auto">
            <b-icon icon="chevron-left" font-scale="2"> </b-icon>
            <b-icon icon="chevron-right" font-scale="2"> </b-icon>
          </div>
        </div>

        <Resources />
      </div>
    </section>

    <section class="bg-gradient">
      <div class="container crtv pt-3 pb-3 pt-md-5 pb-md-5"  >
        <div class="row">
          <div class="col-md-6">
            <h3 class="white">
              <span> {{ $t("general.checkout_our") }} Biz 
                 </span> {{ $t("general.show_on_crtv") }} </h3>
    

            <p class="mt-2" style="color:white"> {{ $t("general.bizconnect_show_is_a15_min") }}
               </p>

            <p class="mt-2" style="color:white"> {{ $t("general.the_show_is_aired") }}  </p>

           
          </div>

          <div class="col-md-6 m-auto">

          


       <div class="d-none d-lg-block mt-3 bridge-resources">
        <splide :options="options" class="r-image">

          <splide-slide v-for="(item,i) in crtv_vid" class="p-2" :key="item.id">
            

             <div class="crtv-ban d-flex"  :style="'background-image:url('+item.thumb+')'">  
                <span role="button" @click="playVideo(i)" style="position:absoulute;    color: red;" class="m-auto"> <b-icon font-scale="4" icon="play-circle"> </b-icon> </span>
           </div> 

          </splide-slide>

        </splide>
       </div>



      <div class="d-lg-none mt-3 bridge-resources">
        <splide :options="options" class="r-image">

          <splide-slide v-for="(item,i) in crtv_vidM" class="p-2" :key="item.id">
            

             <div class="crtv-ban d-flex"  :style="'background-image:url('+item.thumb+')'">  
                <span role="button" @click="playVideo(i)" style="position:absoulute;    color: red;" class="m-auto"> <b-icon font-scale="4" icon="play-circle"> </b-icon> </span>
           </div> 

          </splide-slide>

        </splide>
       </div>


           
          </div>
        </div>
      </div>
    </section>

    <section class="bg-whitee">
      <div class="container mt-1 mt-md-5 mb-2 mb-md-5 pb-2 pb-md-5  pt-3 pt-md-5 "  data-aos="zoom-in-up" data-aos-offset="70px" data-aos-duration="1500">
        <h3><span>  {{ $t("general.cameroon_focus") }}  </span>  {{$t('network.Marketplace')}}  </h3>
       

        <div  class="row ">  
         
          <div class="col-6 col-md-3 mt-2"> <span class="text-left">
           <h3>  7500+ </h3> 
            <span style="color:#9F9F9F"> {{ $t("general.7k_business") }} </span>  </span></div>
          <div class="col-6 col-md-3 mt-2">
             <span class="text-left">
           <h3> 13000+ </h3> 
          <span style="color:#9F9F9F"> {{ $t("general.13k_customers") }} </span>  </span
          >

          </div>
          <div class="col-6 col-md-3 mt-2">

            <span class="text-left">
           <h3>  100+ </h3> 
            <span style="color:#9F9F9F">   {{ $t("general.100_industries") }} </span> </span
          >

          </div>
           <div class="col-6 col-md-3 mt-2">
             <span class="text-left">
           <h3> 72H </h3> 
            <span style="color:#9F9F9F">   {{ $t("general.48h_respond_time") }} </span>   </span
          >
           </div>
        </div>
      </div>
    </section>

    <!-- upgrade account section -->
    <section class=" p-md-5" style="background: #f8f8f8">
      <div class="container"  data-aos="fade-up-left" data-aos-offset="70px" data-aos-duration="1500">
        <div class="row">
          <div class=" col-lg-7">
            <img class="upgrade-cover w-100" src="assets/home/upgrade_accoun.jpeg" alt="" />
          </div>
          <div class=" col-lg-5">
            <div class="lg-card card-lg p-ld-4  mr-lg-2 mt-lg-5 upgrade-side-box " data-aos="flip-left" data-aos-offset="70px" data-aos-duration="1500" >
              <h4 class="upgrade-text">
               <span>   {{ $t("general.upgrade_your_account") }}  </span>   {{ $t("general.start_selling_to_the") }} .
              </h4>
              <p>  {{ $t("general.while_you_can_use") }}
               
              </p>
              <div class="row">
                <div class="col-md-6">
                  <div class="d-flex">
                    
                    <img class="upgrade-acc-img" src="assets/home/Vector.svg" alt="">
                    <span>
                      <h6>  {{ $t("general.market_place_access") }} :</h6>
                      <p> {{ $t("general.unlimited_market_place_to_sell") }}
                        
                      </p>
                    </span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex">
                     <img class="upgrade-acc-img" src="assets/home/Vector.svg" alt="">
                    <span>
                      <h6>  {{ $t("general.online_buying_system") }}:</h6>
                      <p>
                        
                      {{ $t("general.sell_get_paid_and_recieive") }}  
                      </p>
                    </span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex">
                    <img class="upgrade-acc-img" src="assets/home/Vector.svg" alt="">
                    <span>
                     <h6>  {{ $t("general.rank_top_on_search") }} </h6>
                       <p>
                       {{ $t("general.business_on_advance") }}
                      </p>
                    </span>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="d-flex">
                    <img class="upgrade-acc-img" src="assets/home/Vector.svg" alt="">
                    <span>
                      <h6>  {{ $t("general.advance_messaging") }} :</h6>
                      <p>
                      {{ $t("general.reach_a_wider_community") }}.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div class="text-center"> <b-button variant="primary" class="upgrade-btn" >  {{ $t("general.Upgrade") }}  </b-button> </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  <section class="bg-whitee" >  
  
   <div class="container pt-6" > 
    <div class="d-flex">  
       <img class="mr-auto" style="    width: 80px;" src="assets/home/quote-left.svg" alt="">
    <div class="text-center">  
     <h3 >
        <span>  Hear from </span>  our customers
      </h3>
    
  </div>
   <img class="ml-auto" style="    width: 80px;" src="assets/home/quote-right.svg" alt="">
   </div>
    <Testimonial class="mt-3" /> </div>

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
import SiteFooter from "../components/site/siteFooter";
import SiteHeader from "../components/site/siteHeader";
import Testimonial from "../components/site/Testimonial";
import ProductDetails from "@/components/businessf/ProductDetails.vue";
import Products from "../components/site/products";
import { mapGetters, mapActions, mapMutations } from "vuex";
import axios from "axios";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { validationMixin } from "vuelidate";
import { required, sameAs, email, minLength } from "vuelidate/lib/validators";
import Resources from "../components/resources";

export default {
  components: {
    SiteHeader,
    Products,
    Resources,
    SiteFooter,
    Testimonial,LightBox,ProductDetails
  },

    mounted() {
    AOS.init();
    this.startRotation();
    this.bannerRotation();
  },

  data() {
    return {
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
      products:[],
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
        "assets/home/ba-community.png",
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
 height: 50px !important;
 padding-left: 1rem !important;
 padding-right: 1rem !important

 }


 .ba-input .form-control{
    
     background: #fafafa;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 35px rgba(0, 0, 0, 0.11);
  border-radius: 5px;
 height: 50px !important;
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

width: 274px;
height: 57.12px;

background: linear-gradient(323.09deg, #E07715 6.03%, #FF9E19 85.15%);
border-radius: 10px;
}

.buy-btn{
   
  height: 47.12px;
  background: linear-gradient(323.09deg, #E07715 6.03%, #FF9E19 85.15%);
border-radius: 10px; 
    width: 155px;
}


.quote-btn{

height: 57.12px;

background: linear-gradient(323.09deg, #E07715 6.03%, #FF9E19 85.15%);
border-radius: 10px;
}

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
 
  height: 357px;
    border-radius: 10px;
    border-radius: 20px;
    padding: 2rem;
    background-size: cover;
    background-repeat: no-repeat;

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
 height: 50px !important;

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
  border-radius: 20px;
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

   

    .nav-tabs .nav-link.active-tab-item {
    background-color: white !important;
    border-left: none;
    border-right: none;
    border-top: none;
    font-family: poppins !important;
    color: #455a64;
    border-bottom: 4px solid red !important;
    padding-left: 5px;
    padding-right: 5px;
    }

</style>
