<template>


<!-- <header class="position-relative"> -->


    <div class="container-flex home-nav "> 

     <b-navbar toggleable="lg" class=" p-0 border-bottom "  >
        <div class="container p-0 m-0"> 
    <!-- <b-navbar toggleable="lg" variant="faded" type="light"> -->
        <div class="col-md-12 col-lg-2 col-xl-2 text-center p-0 p-lg-2">
          <a class="d-inline-block align-top mt-1 float-left" href="#">
            <img src="@/assets/logo.png" alt="" class="balogo desktop mobile1" loading="lazy" />
            <!-- <img src="@/assets/img/BAC-clear-dotted-logo.png" alt="" class="balogo mobile" loading="lazy" /> -->
          </a>
        </div>
      
      <div class="d-flex w-100 p-0">

        <b-navbar-toggle target="nav-collapse" class="b-none"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mr-auto ">
            <b-nav-item  class=" text-center">
    
          <span class=" font-arvo nav-span " ><router-link :to="{name: 'Bridge-home'}" :class="currentRouteName == 'Bridge-home' ? 'active' : ''">{{ $t("general.Home") }}  </router-link></span>
           <hr class="mobile navstyle" />
            </b-nav-item>
            <b-nav-item  class="ml-md-1  text-center" >
              <span class=" font-arvo nav-span "> <router-link :to="{name: 'about'}" :class="currentRouteName == 'about' ? 'active' : ''">{{ $t("general.About_Us") }}</router-link></span>
               <hr class="mobile navstyle" />
            </b-nav-item>
            <b-nav-item  class="ml-md-1  text-center" >
              <span class=" font-arvo nav-span "> <router-link :to="{name: 'contact'}" :class="currentRouteName == 'contact' ? 'active' : ''" >{{ $t("general.Contact_Us") }}</router-link> </span>
               <hr class="mobile navstyle" />
            </b-nav-item>


          <div class="d-block d-lg-none">  
           
            <b-nav-item v-if="!islogin" class="ml-md-1  text-center">
              <span class="  nav-span "> <router-link :to="{name: 'Login'}">{{ $t("general.Login") }} </router-link> </span>
               <hr class="mobile navstyle" />

            </b-nav-item>

            <b-nav-item v-if="islogin" class="ml-md-1  text-center">
              <span class="  nav-span "> <router-link :to="{name: 'dashboard'}">{{ $t("general.dashboard") }} </router-link> </span>
               <hr class="mobile navstyle" />

            </b-nav-item>

            <b-nav-item  class="ml-md-1">
              <div class="border-right" style="border-right:1px solid black"> </div>
            </b-nav-item>
            
            <b-nav-item v-if="!islogin" class="ml-md-1  text-center">
              <span class=" nav-span "> <router-link :to="{name: 'signup'}">{{ $t("general.Sign_Up") }}</router-link> </span>
              <hr class="mobile navstyle" />
            </b-nav-item>

            
           
              <b-nav-item v-if="islogin" @click="logout" class="ml-md-1  text-center">
              <span class="  nav-span ">  {{ $t("general.Logout") }} </span>
               <hr class="mobile navstyle" /> 

            </b-nav-item>

            <b-nav-item  class="ml-md-1  text-center">
          
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
            
             <b-navbar-nav class="mr-auto d-none d-lg-flex "> 

            <b-nav-item class="ml-md-1">   
               <b-input-group class="binput">
              <b-input-group-prepend @click="Search">
       <div class="border" style="color:#495057 !important"> <b-icon  style="color:red" class="mt-2 ml-2" icon="search"></b-icon> </div> 
    </b-input-group-prepend>
    
     <b-form-input v-on:keyup.enter='Search' style="border-left:none" type="search" v-model="keyword" placeholder="Search "></b-form-input> </b-input-group> </b-nav-item>
              <b-nav-item class="ml-md-1 m-auto">  
               <span class="nav-span" style="color:#455a64"> <b-icon icon="person" font-scale="1.8"> </b-icon> </span> 
               </b-nav-item>   
             
             
             <b-nav-item v-if="!islogin" class="ml-md-1 m-auto">
              <span class="  nav-span "> <router-link :to="{name: 'Login'}">{{ $t("general.Login") }} </router-link> </span>
               <hr class="mobile navstyle" />
              </b-nav-item>
             
              <div class="border-right m-auto" style=" height: 20px;"> </div>
           
            <b-nav-item  v-if="!islogin" class="ml-md-1 m-auto">
              <span class=" nav-span "> <router-link :to="{name: 'signup'}">{{ $t("general.Sign_Up") }}</router-link> </span>
              <hr class="mobile navstyle" />
            </b-nav-item>

             <b-nav-item v-if="islogin" class="ml-md-1 m-auto">
              <span class="  nav-span "> <router-link :to="{name: 'dashboard'}">{{ $t("general.dashboard") }} </router-link> </span>
               <hr class="mobile navstyle" />
            
             </b-nav-item>
                <b-nav-item v-if="islogin" @click="logout" class="ml-md-1 m-auto">
              <span class="  nav-span ">  {{ $t("general.Logout") }}</span>
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

      </div> </div>
    </b-navbar>
 
      </div>
  <!-- </header>  -->
</template>
<script>
/**
 * this component is the header of the site page of the system
 */

import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data(){
    return {
      img: require("../../assets/img/about/en.png"),
      lang: 'EN',
      keyword:'',
     
    }
  },
  created(){
     this.islogin = this.$store.getters["auth/isLogged"];
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },

     islogin(){  return this.$store.getters["auth/isLogged"]; },
  },

  methods:{


    ...mapActions({
      Logout: "auth/logout",
    }),


/**
 * this fuction is use to change the user language
 * @private
 */  

    logout: async function () {
      let loader = this.$loading.show({
        container: this.$refs.formContainer,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      const requestForReset = await this.$repository.share.switch(
        null,
        "reset"
      );

      if (requestForReset.success) {
        const response = await this.$repository.notification.logOut();

        if (response.success) {
          loader.hide();
        
          this.Logout();
        }
        return false;
      }
      loader.hide();
    },


    Search() {
      if (!this.keyword) return false;

      if (this.$route.name != "Search") {
        this.$router.push({
          name: "GlobalSearch",
          query: { keyword: this.keyword },
        });
      }
    },

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

.binput {
    background: #fafafa;
    border: 1px solid #e7e7e7;
    box-shadow: 0px 10px 35px rgb(0 0 0 / 11%);
    border-radius: 5px;
}


 a{
    color: #455a64 !important;
  }
@import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.b-none{
  border: none !important;
}
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
  color: #e75c18 !important;
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
    width: 165px ;
   
  }
  .mobile{
    display: none;
  }
}
</style>
