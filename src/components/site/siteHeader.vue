<template>


<!-- <header class="position-relative"> -->


    <div class="container-flex"> 

     <b-navbar toggleable="lg" >
      
    <!-- <b-navbar toggleable="lg" variant="faded" type="light"> -->
        <div class="col-md-12 col-lg-2 col-xl-2 text-center">
          <a class="d-inline-block align-top mt-1" href="#">
            <img src="@/assets/logo.png" alt="" class="balogo desktop mobile1" loading="lazy" />
            <!-- <img src="@/assets/img/BAC-clear-dotted-logo.png" alt="" class="balogo mobile" loading="lazy" /> -->
          </a>
        </div>

      <div class="container p-0">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mr-auto ">
            <b-nav-item >

              <span class=" font-arvo nav-span " ><router-link :to="{name: 'newHome'}" :class="currentRouteName == 'newHome' ? 'active' : ''">{{ $t("general.Home") }}</router-link></span>
              <hr class="mobile navstyle" />
            </b-nav-item>
            <b-nav-item  class="ml-md-1" >
              <span class=" font-arvo nav-span "> <router-link :to="{name: 'about'}" :class="currentRouteName == 'about' ? 'active' : ''">{{ $t("general.About_Us") }}</router-link></span>
               <hr class="mobile navstyle" />
            </b-nav-item>
            <b-nav-item  class="ml-md-1" >
              <span class=" font-arvo nav-span "> <router-link :to="{name: 'contact'}" :class="currentRouteName == 'contact' ? 'active' : ''" >{{ $t("general.Contact_Us") }}</router-link> </span>
               <hr class="mobile navstyle" />
            </b-nav-item>


          <div class="d-block d-md-none">  
         
            <b-nav-item class="ml-md-1">
              <span class="  nav-span "> <router-link :to="{name: 'Login'}">{{ $t("general.Login") }} </router-link> </span>
               <hr class="mobile navstyle" />

            </b-nav-item>
            <b-nav-item  class="ml-md-1">
              <span class=" nav-span "> <router-link :to="{name: 'signup'}">{{ $t("general.Sign_Up") }}</router-link> </span>
              <hr class="mobile navstyle" />
            </b-nav-item>

            <b-nav-item  class="ml-md-1 ">
          
              <b-dropdown variant="ligth">
                  <template #button-content>
                   <img :src="img" class="size poslang" alt=""> <span class="poslang">{{lang}}</span>
                  </template>
                   <b-dropdown-item  @click="change('en')"> <img src="../../assets/img/about/en.png" class="size" alt=""> EN</b-dropdown-item>
                  <b-dropdown-item @click="change('fr')" ><img src="../../assets/img/la-france.png" class="size" alt=""> FR</b-dropdown-item>
                </b-dropdown>
            
            </b-nav-item> 

           </div>
            </b-navbar-nav>
        </b-collapse>
            
             <b-navbar-nav class="mr-auto "> 

            <b-nav-item class="ml-md-1">  <b-form-input v-model="text" placeholder="Search "></b-form-input> </b-nav-item>
              <b-nav-item class="ml-md-1 m-auto">  
               <span class="nav-span"> <b-icon icon="person" font-scale="2"> </b-icon> </span> 
               </b-nav-item>   
            
             <b-nav-item class="ml-md-1 m-auto">
              <span class="  nav-span "> <router-link :to="{name: 'Login'}">{{ $t("general.Login") }} </router-link> </span>
               <hr class="mobile navstyle" />
              </b-nav-item>

            <b-nav-item  class="ml-md-1 m-auto">
              <span class=" nav-span "> <router-link :to="{name: 'signup'}">{{ $t("general.Sign_Up") }}</router-link> </span>
              <hr class="mobile navstyle" />
            </b-nav-item>

            
             <b-nav-item  class="ml-md-1 m-auto">
          
                <b-dropdown variant="ligth">
                  <template #button-content>
                   <img :src="img" class="size poslang" alt=""> <span class="poslang">{{lang}}</span>
                  </template>
                   <b-dropdown-item  @click="change('en')"> <img src="../../assets/img/about/en.png" class="size" alt=""> EN</b-dropdown-item>
                  <b-dropdown-item @click="change('fr')" ><img src="../../assets/img/la-france.png" class="size" alt=""> FR</b-dropdown-item>
                </b-dropdown>
            
            </b-nav-item> 


               </b-navbar-nav>

      </div>
    </b-navbar>
 <hr class="w-100">
      </div>
  <!-- </header>  -->
</template>
<script>
/**
 * this component is the header of the site page of the system
 */
export default {
  data(){
    return {
      img: require("../../assets/img/about/en.png"),
      lang: 'EN'
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },

  methods:{

/**
 * this fuction is use to change the user language
 * @private
 */
    change(lang){
      this.$i18n.locale = lang;

      if(lang == 'en'){
        this.img = require("../../assets/img/about/en.png");
        this.lang = 'EN'
      }else {
        this.img = require("../../assets/img/la-france.png");
         this.lang = 'FR'
      }
    }
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');


.size{
  height: 15px;
  width: 15px;
}
@media (min-width: 992px)
{

.poslang{
  /* margin-bottom: 10px; */
}
.navbar-expand-lg {
    
    padding-right: 0px;
    justify-content: center;
}
}


.nav-span {
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  color: #282828;

}

.nav-item.active .nav-link span {
  color: #e75c18 !important;
}
.nav-item:hover .nav-link span {
  color: #e75c18 !important;
}
.active{
  color: #e75c18;
}
.container{
  margin-left: 10px !important;
  margin-right: 50px !important;
}

@media only screen and (max-width: 768px) {
  .pos{
     margin-top: -20px;
  }
.mobile1{
  width: 140px !important;
}
  
  .balogo{
    width: 70px ;
   
  }
  .desktop{
    /* display: none; */
    width: 200px;
  }

  .navstyle{
    width: 130%;
    margin-left: -13px;
    margin-bottom: -10px;
  }

  .navbar-toggler {
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
    position: absolute !important;
    top: 18px !important;
    right: 13px !important;
}

.poslang{
    margin-right: 10px;
    margin-left: -10px;
}
}

@media only screen and (min-width: 768px) {
  .balogo{
    width: 200px ;
   
  }
  .mobile{
    display: none;
  }
}
</style>
