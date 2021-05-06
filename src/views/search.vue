<template>
  <div style="overflow-y: hidden; ">


   <Nav />

   <SubNav   @category="getCategory"   style="margin-top:-25px"  />

   

    
<hr style="margin-top:-0px" />
    <div class="container searchly">
      <ly-tab
        v-model="selectedId"
        :items="items"
        :options="optionsnav"
        activeColor="#e75c18"
        @change="handleChange"
      >
      </ly-tab>
    </div>









    <div class="container-fluid medium-filters ">      

     <b-row>          
      <b-col cols="3">

        <b-button class="shadow border  mob-btn" id="show-btn" @click="showFilters" > Filter </b-button>

      </b-col>



      <b-modal ref="myfilters" hide-footer title=" ">
      <div class="d-block text-center">
               

                <Filters  v-bind:filterType="selectedId"   v-bind:Selectedcategory="Selectedcategory"    />           
      </div>
    </b-modal>





     </b-row>


    </div>






    <div class="container-fluid mobile-filters">      

     <b-row>          
      <b-col cols="5">

        <b-button class="shadow border  mob-btn" id="show-btn" @click="showFilters" > Filter </b-button>

      </b-col>



      <b-modal ref="myfilters" hide-footer title=" ">
      <div class="d-block text-center">
               

                <Filters  v-bind:filterType="selectedId"     />           
      </div>
    </b-modal>





      <b-col cols="3" md >
  
     <b-button class="shadow border   mob-btn "  @click="togglelist"  > List </b-button>

      </b-col>


      <b-col cols="4">

     <b-button class="shadow border   mob-btn "   @click="togglemap()"> Map </b-button>

      </b-col>


     </b-row>


    </div>










    <div class="container-flex p-md-3 p-t-0 upp">
      <b-row class="p-3">
        <b-col cols="0" md="0" xl="3" class="leftblock">
          <div id="all" class="ml-3">
          
  

             <Filters  v-bind:filterType="selectedId"    v-bind:Selectedcategory="Selectedcategory"     />     
          

          </div>
        </b-col>






        

        <b-col cols="12"  md="8" lg="8" xl="6" ref="middleblock">


          <div class="container-flex a-flex"   >
           

               <!--filter for all takes just two fields at a time  -->

               <div id="all" v-if="selectedId == '0'"  >
              <h6>Sponsored Result</h6>
            
             <div>

              <Sponsor />

              </div>

              <h6>Businesses</h6>

              <Business />

              <span class="float-right mb-3"> see more </span> <br />

              <hr />

              <h6>People</h6>

              <People />
              <span class="float-right mb-3"> see more </span> <br />

              <hr />

              <h6>Network</h6>

              <Network />
              <span class="float-right mb-3"> see more </span> <br />

              <hr />

              Market

              <Market />

              <span class="float-right mb-3"> see more </span> <br />

              <hr />

              <h6>Post</h6>

              <Post />

              <span class="float-right mb-3"> see more </span> <br />

              <hr />

               </div>

              <!--  select just businesses      -->

              <div id="businesses" v-if="selectedId == '1'" >

             
              <h6>Businesses</h6>

              <Business />

              <Business />

              <Business />

              <Business />


              </div>

              <!-- filter out only people -->



              <div id="people" v-if="selectedId == '2'" >

             
              <h6>People</h6>

              <People />

              <People />

              <People />

              <People />


              </div>


              <!-- filter out just the network  -->



              <div id="people" v-if="selectedId == '3'" >

             
              <h6>Networks</h6>

              <Network />

              <Network />

              <Network />

              <Network />


              </div>

              <!-- Filter out just the market place -->


              <div id="people" v-if="selectedId == '4'" >

             
              <h6>Market</h6>

              <Market />

              <Market />

              <Market />

              <Market />


              </div>



              <!-- Filter out just the post  -->


              <div id="people" v-if="selectedId == '5'" >

             
              <h6>Post</h6>

              <Post />
               <hr />

              <Post />
              <hr />

              <Post />
              <hr />

              <Post />


              </div>












              
               




          </div>

     






        </b-col>

        <b-col cols="12" md="4" lg="4" xl="3" class="showmap" ref="mapblock">   <div id="map" style="margin-top: 20px;" class="" > <Map />   </div> </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import LyTab from "@/tab/src/index.vue";

import Map from "@/components/search/map";

import Business from "@/components/search/business";
import People from "@/components/search/people";
import Network from "@/components/search/network";
import Post from "@/components/search/posts";
import Market from "@/components/search/market";
import Nav from "@/components/navbar";

import Filters from "@/components/search/filters";

import SubNav from "@/components/subnav";

import Sponsor from "@/components/search/sponsoredBusiness";

export default {
  components: {
    LyTab,
    Nav,
    SubNav,
    Filters,
    Map,
    Business,
    Sponsor,
    People,
    Network,
    Post,
    Market,

    // Footer,
  },
  data() {
    return {
      selected: "all",
      selectedId: 0,
      Selectedcategory:"all",
      bottomSelectedId: 0,
      location: "any",
      category: "any",
      post: "any",
      map: false,

      items: [
        { label: "All " },

        { label: "Business" },
        { label: "People" },
        { label: "Network" },
        { label: "Market" },
        { label: "Post" },
      ],
      optionsnav: {
        activeColor: "#1d98bd",
      },
    };
  },

  methods: {

    getCategory(value){
       this.Selectedcategory=value;
    }
    ,


    handleChange(item, index) {
      console.log(item, index);
    },


  showFilters(){
     
      this.$refs['myfilters'].show();
  },

    togglemap(){
 
   this.$refs.mapblock.style.display = "block";   
   this.$refs.middleblock.style.display = "none"; 

 },


  togglelist(){
 
   this.$refs.mapblock.style.display = "none";   
   this.$refs.middleblock.style.display = "block"; 

 },


    
  },
};
</script>

<style scoped>

.upp{

  margin-top:-20px;
}



@media only screen and (max-width: 768px) {

.medium-filters{
    display:none;
  }
      
  .showmap {
    display: none;
  }

 .mob-btn{
  background-color: white;
  color: black;
  border-color: white;
  width: 80px;
  border-radius: 5px;
 }

 
.mobile-filters{
  display: block;
}



  .d-logo{
    display: none;
  }

  .a-center {
  margin-right: 0px;
  margin-left: 0px;
}

  
  }


  
@media only screen and (min-width: 968px) {

  


  .showmap {
    display: block;
  }
 
 .a-center {
  margin-right: 200px;
  margin-left: -100px;
}
.mobile-filters{
  display: none;
}

  
  .d-logo{
     display: block;
  }
  
  }




.input-size {
  height: 55px;
}

.logo-image {
  margin-left: 50px;
}

.input-group-text {
  background-color: white;
}



.searchnav {
  margin: 3px;
}

.t-center {
  text-align: center;
  align-content: center;
}

.d-blockk {
  display: none;
}

@media only screen and (min-width: 768px) {
  .d-mobile {
    display: none;
  }






  .d-blockk {
    display: none;
  }
}

.m-30 {
  margin-left: -30px;
}

.br-0 {
  border-radius: 0px;
  height: 50px;
}

.br {
  border: 1px solid #ced4da;
}

@media only screen and (max-width: 768px) {
   .a-flex{
     margin-right: -15px;
     margin-left: -15px;
   }
   
   }


</style>


<style >
li .nav-link:hover {
    background-color: white;
    color: #fff;
}




@media only screen and (max-width: 1201px) {
       
      

      
  .leftblock{
       display: none;
  }
    

}






@media only screen and (min-width: 1204px) {

      
  .leftblock{
    display: block;
  }
}




@media only screen and (min-width: 768px) and (max-width:1140px)  {

  .medium-filters{
    display:block;
  }

  .mobile-filters{
  display: none;
}


}


@media only screen and (min-width: 1140px) {
 
 .medium-filters{
    display:none;
  }

}
</style>

