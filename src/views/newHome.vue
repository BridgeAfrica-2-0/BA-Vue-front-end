<template>
  <div>
    <nav
      id="navbarExample"
      class="navbar navbar-expand-lg fixed-top navbar-light"
      aria-label="Main navigation"
    >
      <div class="container">
        <div style="display: contents" class="d-contents d-lg-none">
          <a class="nav-link d-block d-lg-none" href="#features">
            <b-icon
              icon="search"
              style="float: left"
              font-scale="1.5; margin-top:5px"
            ></b-icon
          ></a>

            <a
            href="https://home.maxinemoffett.com/"
            class="d-block d-lg-none"
            rel="home"
            style="margin-left: -15%"
          >
            <span class="logo" style="min-width: 148px"
              ><img
                src="https://home.maxinemoffett.com/wp-content/uploads/thegem-logos/logo_d2ecc795468a764490859da0a01cd521_1x.png"
              />
            </span>
          </a>
          <a href="#">
            <button
              class="navbar-toggler p-0 border-0"
              type="button"
              id="navbarSideCollapse"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
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
              <a class="nav-link active" aria-current="page" href="#header"
                >HOME</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">ABOUT US</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#details">CONTACT US</a>
            </li>

            <li class="menu-item-logo d-none d-lg-block">
              <div class="site-logo" style="width: 164px">
                <a href="https://home.maxinemoffett.com/" rel="home">
                  <span class="logo" style="min-width: 148px"
                    ><img
                      src="https://home.maxinemoffett.com/wp-content/uploads/thegem-logos/logo_d2ecc795468a764490859da0a01cd521_1x.png"
                    />
                  </span>
                </a>
              </div>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#features">SIGN UP</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#features">LOGIN</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#features">
                <b-icon
                  icon="search"
                  style="float: left"
                  font-scale="1.5; margin-top:5px"
                ></b-icon
              ></a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#features">
                <b-icon
                  icon="cart"
                  style="float: left"
                  font-scale="1.5; margin-top:5px"
                ></b-icon
              ></a>
            </li>
          </ul>
          <!-- <span class="nav-item">
              <a class="btn-solid-sm" href="#contact">Get quote</a>
          </span> -->
        </div>
      </div>
    </nav>
    <header id="header" class="header">
      <div class="container herro">
        <div class="row">
          <div class="col-lg-7 col-xl-6">
            <div class="text-container">
              <h1 class="h1-large">
                Connecting Busineses And Customers To Global E-commerce. Making
                It Easier For Them To Find Each Other
              </h1>

              <div>
                <b-input-group class="mb-2 float-right">
                  <b-form-input
                    aria-label="Text input with checkbox"
                    v-model="search"
                    :placeholder="$t('businessowner.Search_Something')"
                    class="search-form"
                  ></b-form-input>

                  <b-input-group-prepend is-text class="">
                    <b-icon-search class="border-none p-20"></b-icon-search>
                  </b-input-group-prepend>
                </b-input-group>

                <div class="d-inlin-flex mt-5 cat-btns">
                  <b-button class="cat-btn ml-1"> Tailors </b-button>
                  <b-button class="cat-btn  ml-1"> Agriculture </b-button>
                  <b-button class="cat-btn  ml-1 "> Handicraft </b-button>
                  <b-button class="cat-btn  ml-1"> Hair Dresser </b-button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-xl-6"></div>
        </div>
      </div>
    </header>

    <!-- about section -->
    <div class="container-flex">
      <div class="row">
        <div class="col-md-6 about-bg">
          <div class="about-pic"  />
        </div>

        <div class="col-md-6 pr-100 pl-100">
          <div style="vertical-align: middle;" class="pt-100">
            <h1 class="text-center mb-20 pb-25">ABOUT US</h1>

            <p class="text">
              We are a technology firm, on a mission to digitalise businesses
              and consumers in Africa. Through this platform, we help SMEs
              create websites, gain database visibility, sell online and
              network. We equally manage an online artisanal platform,
              cameroongallery.com, which helps craft artists sell their goods
              globally. Through our consulting services, we provide expert
              support to public and private entities.
            </p>

            <div class="text-center m-2 p-2 m-md-5 p-md-5">
              <b-button variant="outline-primary"> VIEW MORE </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- end about section -->

    <!-- start explore Busineses -->
    <div class="pb-100 pt-100">
      <div class="text-center pb-100">
        <h1 class="h1-text">EXPLORE BUSINESES</h1>
      </div>

      <div class="hotbiz">
        <splide :options="options" class="r-image">
          <splide-slide v-for="item in hotbiz" :key="item.id">
            <div class="hotbizz text-center">
              <img :src="item.picture" class="r-image" />

              <div class="hotbizcontent">
                <div class="text-center hotbizname">
                    

                 <router-link :to="'business/'+item.id" >  {{ item.name }} </router-link>

                  <div class="text-center"><hr class="primary divider" /></div>
                </div>

                <div class="text text-center">
                  {{ item.description.slice(0, 100) }}
                </div>
              </div>
            </div>
          </splide-slide>
        </splide>
      </div>
    </div>
    <!-- end explore busineses -->

    <!-- african print titles -->

    <div class="africanprints-overlay">
      <div class="africanprints">
        <div class="container text-center">
          <h1 class="h1-text white p-2 p-md-5">
            HELPING SMES GO DIGITAL, MAKE MONEY, AND TRADE WITH THE WORLD
          </h1>
        </div>
      </div>
    </div>
    <!-- end african print title -->

    <!-- how bridge works -->

    <div class="container">
      <h1 class="h1-text p-3 text-center">
        HOW BRIDGEAFRICA WORKS FOR BUSINESES
      </h1>
    </div>

    <div class="hbaworks">
      <div class="row">
        <div class="col-md-6 text-center">

          <div class="container" style="padding-left: 100px;"> 
          <img
            style="margin-top: -150px"
            src="https://home.maxinemoffett.com/wp-content/uploads/2022/05/Group-3809-1-579x1024.png"
            alt=""
          />

           </div>
        </div>

        <div class="col-md-6">
          <div class="container"> 
          <div class="d-inline-flex mt-5">
            <span class="p-2 m-2 mr-4">
              <h3 class="hbaworks-icon">
                <b-icon icon="search" variant="primary" scale="2"> </b-icon>
              </h3>
            </span>
            <span>
              <h3 class="hbaworks-header font-16 font-poppin">
                BUSINESS IDENTITY & ONLINE MARKETPLACE
              </h3>
              <p class="hba-works-text font-14 font-poppin ">
                We help businesses to easily create their websites, buy and sell
                online through our online marketplace
              </p>
            </span>
          </div>
         <br>  <br>
          <div class="d-inline-flex mt-5 font-poppin">
            <span class="p-2 m-2 mr-4">
              <h3 class="hbaworks-icon">
                <b-icon icon="search" variant="primary" scale="2"> </b-icon>
              </h3>
            </span>
            <span>
              <h3 class="hbaworks-header font-16 font-poppin">
                ONLINE BUSINESS DATABASE
              </h3>
              <p class="hba-works-text font-14 font-poppin">
                Our online business directory helps to make businesses visible and locatable , and enables consumers to search for and compare product prices
              </p>
            </span>
          </div>


<br>  <br>
          <div class="d-inline-flex mt-5">
            <span class="p-2 m-2 mr-4">
              <h3 class="hbaworks-icon">
                <b-icon icon="search" variant="primary" scale="2"> </b-icon>
              </h3>
            </span>
            <span>
              <h3 class="hbaworks-header font-16 font-poppin ">
                COMMUNITY ENGAGEMENT
              </h3>
              <p class="hba-works-text font-14 font-poppin">
               We allow businesses and consumers to follow one another , receive notifications and send direct messages
              </p>
            </span>
          </div>
        </div>
      </div></div>
    </div>

    <!-- african print titles -->

    <div class="africanprints-overlay"  style="margin-top:-200px">
      <div class="africanprints">
        <div class="container text-center">
          <h1 class="h1-text white p-1 p-md-5">
            HELPING SMES GO DIGITAL, MAKE MONEY, AND TRADE WITH THE WORLD
          </h1>
        </div>
      </div>
    </div>
    <!-- end african print title -->

    <div class="container">
      <h1 class="h1-text p-1 p-md-3 text-center">
        HOW BRIDGEAFRICA WORKS FOR CUSTOMERS
      </h1>
    </div>

    <div class="hbaworks">
      <div class="row">
        <div class="col-md-4">
          <div class="container text-right">   
          <div class="d-inline-flex mt-5">
            <span>
              <h3 class="hbaworks-header font-16 font-poppin">
                
       FINDING BUSINESS ONLINE
              </h3>
              <p class="hba-works-text font-14 font-poppin">
                Bridgeafrica.com help customer to find business with affordable price giving them room to compare sizes price and buy product at affordable price
              </p>
            </span>

            <span class="p-2 m-2 mr-4">
              <h3 class="hbaworks-icon">
                <b-icon icon="search" variant="primary"> </b-icon>
              </h3>
            </span>
          </div>
  <br>   <br>
          <div class="d-inline-flex mt-5">
            <span>
              <h3 class="hbaworks-header font-16 font-poppin">
               LARGE MARKET PLACE
              </h3>
              <p class="hba-works-text font-14 font-poppin">
               customer has access to a large market platform where they can search for business, user, products, network
and be able to navigate through the platform with easy and confident and find what they want
              </p>
            </span>

            <span class="p-2 m-2 mr-4">
              <h3 class="hbaworks-icon">
                <b-icon icon="search" variant="primary"> </b-icon>
              </h3>
            </span>
          </div>

        
           </div>
        </div>
        <div class="col-md-4 text-center">
          <img
            style="margin-top:-10px"
            src="https://home.maxinemoffett.com/wp-content/uploads/elementor/thumbs/Frame-3757-poppczshscggt8jfy8jjrq86hv1d65q8coghrc3z2y.png"
            alt=""
          />
        </div>
        <div class="col-md-4">

          <div class="container text-left">
          <div class="d-inline-flex mt-5">
            <span class="p-2 m-2 mr-4">
              <h3 class="hbaworks-icon">
                <b-icon icon="search" variant="primary"> </b-icon>
              </h3>
            </span>

            <span>
              <h3 class="hbaworks-header font-16 font-poppin">
                COMMUNICATION WITH THE BUSINESS
              </h3>
              <p class="hba-works-text font-14 font-poppin">
                  Customers can communicate directly with the business and get the products at a price that suits them.
              </p>
            </span>
          </div>
      <br>   <br>
          <div class="d-inline-flex mt-5">
            <span class="p-2 m-2 mr-4">
              <h3 class="hbaworks-icon">
                <b-icon icon="search" variant="primary"> </b-icon>
              </h3>
            </span>

            <span>
              <h3 class="hbaworks-header font-16 font-poppin">
              
              PAYMENT METHOD
              </h3>
              <p class="hba-works-text font-14 font-poppin">
                We have various method of payment for every customer, so customer can pay for their product anywhere and anytime.
              </p>
            </span>
          </div>

         
          </div>
        </div>
      </div>
    </div>

    <!-- end how bride africa works -->

    <!-- advance account section -->

    <div class="bg-dark">
      <div class="row">
        <div class="col-md-6">
          <div class="container">
            <h1 class="h1-text p-md-3 text-center text-left-md  white">CREATE AN ADVANCE ACCOUNT</h1>
          </div>
        </div>

        <div class="col-md-6"><hr class="mt-5 primary" /></div>
      </div>
    
      <div class="row">
        <div class="col-md-7"> 
          <div class="container"> 
          <div class="row">
            <div class="col-md-6">
              <div class="d-inline-flex mt-5">
                <span class="p-2 m-2 mr-4">
                  <h3 class="hbaworks-icon">
                    <b-icon icon="search" variant="primary"> </b-icon>
                  </h3>
                </span>

                <span>
                  <h3 class="hbaworks-header  white font-16 font-poppin">
                   ONLINE BUYING SYSTEM
                  </h3>
                  <p class="hba-works-text white  font-14 font-poppin">
                     Sell, get paid and receive your money directly on your Mobile Money account
                  </p>
                </span>
              </div>

              <div class="d-inline-flex mt-5">
                <span class="p-2 m-2 mr-4">
                  <h3 class="hbaworks-icon">
                    <b-icon icon="search" variant="primary"> </b-icon>
                  </h3>
                </span>

                <span>
                  <h3 class="hbaworks-header white font-16 font-poppin">
                  UNLIMITED LISTING  
                  </h3>
                  <p class="hba-works-text white  font-1 font-poppin">
                  Add as many as you want on your market
                  </p>
                </span>
              </div>
            </div>

            <div class="col-md-6">
              <div class="d-inline-flex mt-5">
                <span class="p-2 m-2 mr-4">
                  <h3 class="hbaworks-icon">
                    <b-icon icon="search" variant="primary"> </b-icon>
                  </h3>
                </span>

                <span>
                  <h3 class="hbaworks-header white  font-16 font-poppin">
                     Ranked  top on our search result
                  </h3>
                  <p class="hba-works-text white   font-14 font-poppin">
                     Businesses on advance account are ranked first (top) on our search result
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="col-md-5" style="margin-top:-80px">     

          <img
                class="quotes"
                src="https://home.maxinemoffett.com/wp-content/uploads/2016/04/5-3.jpg"
                alt="alternative"
              />

        </div>
      </div>
    </div>

    <!-- end advance account section -->
    <!-- start explore network section -->

    <div class=" pt-100">
      <div class="text-center pb-100">
        <h1 class="h1-text">EXPLORE NETWORKS</h1>
      </div>
    </div>

    <div>   

      <div>   
        <div class="row">     
        
           <div class="col-md-6 pl-21 pr-21"> 
             
             <h2 class="expln-header"> textile of cameroon </h2> 

             <p class="  font-14 font-poppin "> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
             
              </div>     
           
            <div class="col-md-6 pl-126 pr-21">       <img
                class="quotes"
                src="https://home.maxinemoffett.com/wp-content/uploads/2022/05/fashion-designing-schools-in-cameroon-1.jpg"
                alt="alternative"
              />   </div>
        
           </div>   </div>




            <div>   
        <div class="row">     
        
           <div class="col-md-7">      <img
                class="quotes"
                 src="https://home.maxinemoffett.com/wp-content/uploads/2022/05/csm_senegal-agriculture-food_georges_gobet_afp_35f00077fb_1.jpg"
                alt="alternative"
              />  </div>     
           
            <div class="col-md-5">  <h2 class="expln-header" > AGRICULTURE</h2>
            
            
            <p class=" font-14 font-poppin">   Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>  </div>
        
           </div>   </div>


     
         
    </div>

    <!-- end explore network section -->

  <!-- resources section -->
    <Resources />


    <!-- video section  -->


      <!-- start explore Busineses -->
    <div class="pb-100 pt-100">
      <div class="text-center pb-100">
        <h1 class="h1-text">  ENTREPRENEUR SPOTLIGHT  </h1>
      </div>

      <div class="hotbiz">
        <splide :options="optionss" class="r-image">
          <splide-slide v-for="item in videos" :key="item.id">
            
       <div class="container">  

       <div class="row">  
         
         <div class="col-md-5">  
            
            <div class="card video-card" >  
              
              <h3> {{item.name}} </h3> <br> <br>
              <span>  play video <br>   <hr class="primary"> </span>
              
               </div>

              
           
            </div>    
       
        <div class="col-md-7">  
          
        <div class="biz-konnect-video">

        
        
          <img
                class="quotes biz-cover"
                src="https://home.maxinemoffett.com/wp-content/uploads/2022/05/fashion-designing-schools-in-cameroon-1.jpg"
                alt="alternative"
              />    

            <div> <b-icon icon="play-circle"   scale="3" class="play-icon"></b-icon> </div> 

        <!-- <iframe
          width="1440"
          :src="item.video"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe> -->
        </div>



  </div> 
        
        
        </div>
</div>
       


          </splide-slide>
        </splide>
      </div>
    </div>


    <Newsletter class="mt-100" />
    <SiteFooter/>
   

   
  </div>
</template>

<script>
import axios from "axios";
import Newsletter from '../components/newsletter';
import Resources from '../components/resources';
import SiteFooter from '../components/site/siteFooter';
export default {
   components: {
    Newsletter,
    SiteFooter,
    Resources,
  },

  data() {
    return {
      hotbiz: [
        {
           "id":"3705",
          picture:"assets/images/usmano.png",
          name: "Gerar Fashion",
          description:
            "Customisation des bijoux, sac et chaussures avec du tissu pagne et formation sur la customisation",
        },
   


   {     "id":"3272",
          picture:"assets/images/Edo Raissa.png",
          name: "Aissa Couture",
          description:
            "Spécialité du tissu tissé, chemises, pantalon, décoration, set de table et autres.",
        },




        {    "id":"3709",
          picture:"assets/images/vin.png",
          name: "Saveurs du Lapin",
          description:
            "Entreprise de production de viande de lapin et autres produits connexes.",
        },


 {       "id":"3708",
          picture:"assets/images/okapi.png",
          name: "OKAPI",
          description:
            "OKAPI est spécialisé dans la transformation de fruits exotiques en jus naturelles et dérivés. Elle innove dans la conception de nouvelles saveurs originales.",
        },



      ],




        videos: [
        {
          video:"https://www.youtube.com/embed/EEsHZTkWNIU",
          name: "JOHN DEO",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th",
        },

        {
         video:"https://www.youtube.com/embed/EEsHZTkWNIU",
         
         name: "BILL JAMES",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th",
        },

        {
         video:"https://www.youtube.com/embed/EEsHZTkWNIU",
          name: "LARA CLARA",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since th",
        },

      
      ],



      options: {
        rewind: true,
        autoplay: true,
        perPage: 3,
        pagination: false,
        type: "loop",
        perMove: 1,

        breakpoints: {
          760: {
            perPage: 1,
            gap: "0rem",
          },
          992: {
            perPage: 2,
            gap: "1rem",
          },
        },
      },


       optionss: {
        rewind: true,
        autoplay: true,
        perPage: 1,
        pagination: false,
        type: "loop",
        perMove: 1,
      },
    };
  },

  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute("src", "/assets/js/scripts.js");
    document.head.appendChild(externalScript);

    this.loadbusineses();
  },

  methods: {
    loadbusineses() {
      let url = "guest/profile/hot/business/";

      axios
        .get(url)
        .then(({ data }) => {
          //   if (data.data.length) {
          //    //this.hotbiz=data.data;
          //   }
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
  },
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
 .mt-100{
   margin-top: 100px;
 }

 .expln-header{
   font-size: 36px;
   color: black;
   font-weight: 700;
   text-transform: uppercase;
 }


.bg-dark {
  background-color: #000000 !important;
}

.font-14{
  font-size: 14px !important;

}

.font-16{
  font-size: 16px !important;
  font-weight: bold;
}

.video-container{
   
  padding-top:50px;
  padding-bottom:50px;
}



 .biz-konnect-video {
  
    top: 0;
    content: '';
    width: 100%;
    height: 100%;
    left: 0;
       background-color: #783dff;
    opacity: 1;
    z-index: -1;


}

.biz-cover{
  opacity: 0.3;
  
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
  background-color: white;
  opacity: 0.5;
}

.r-image {
  height: 300px !important;
}

.pl-21{
   padding-left: 21px;
}

.pl-126{
  padding-left: 121px;
}

.pr-21{
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


.play-icon{
  position:absolute;
  margin-top: -40%;
  margin-left:50%;
  color:white;
}
.mb-20 {
  margin-bottom: 20px;
}

.cat-btns {
  text-align: left;
}

@media (min-width: 768px) {
  .herro {
    margin-top: 190px;
  }
  .cat-btn {
    background: white;
    opacity: 0.9px;
    border-radius: 5px;
    font-size: 14px;
  }


  .video-card{


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



  .video-card{


    align-items: center;
    display: flex;
    vertical-align: middle;
    padding-top: 5px;
  
}



  
.pl-21{
   padding-left: 21px;
}

.pl-126{
  padding-left: 121px;
}

.pr-21{
  padding-right: 21px;
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
}

.header {
  height: 100vh;
}

/* #primary-menu.no-responsive {
    text-align: left;
    white-space: nowrap;
    display: inline-block;
    font-size: 0;
    margin: 0 -20px;
} */

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

  #navbarsExampleDefault {
    padding-left: 100px;
    padding-right: 100px;
  }
}

.navbar-light .navbar-nav .show > .nav-link,
.navbar-light .navbar-nav .active > .nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
  color: rgba(0, 0, 0, 0.9);
  border: 1px solid;
}

.font-poppin{
  font-family: poppins;
}
</style>

<style>


.navbar-light .navbar-nav .nav-link {
  color: white !important;
}

.black-text .nav-item .nav-link {
  color: black !important;
}
</style>
