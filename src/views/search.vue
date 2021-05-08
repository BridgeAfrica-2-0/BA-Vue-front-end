<template>
  <div style="overflow-y: hidden; ">


   <Nav />

   <SubNav   @category="getCategory"  @parentcategory="getparentCategory"    style="margin-top:-25px"  />

   

    
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

    <hr style="margin-top:-0px" />


    <div class="d-block d- d-sm-block  d-md-none d-lg-none">        
      
       <b-row >     
           
           <b-col cols="3">   
           
          

              
           <b-link class="cat"  @click="SetCat('Agriculture')" > Agriculture  </b-link>

                
           </b-col>

           <b-col cols="3">   
      

            

             <b-link class="cat"  @click="SetCat('Restaurants')" > Restaurants  </b-link>

           </b-col>


           <b-col cols="3">   
             
          
            
              <b-link class="cat"  @click="SetCat('Clothing')" > Clothing  </b-link>
           </b-col>


           <b-col cols="3">   
     
             

             <b-link class="cat"  @click="SetCat('MC')" > MC  </b-link>

           </b-col>



           <b-col cols="3">   
           
          
           <b-link class="cat"  @click="SetCat('Electronics')" > Electronics  </b-link>
              
           

                
           </b-col>

           <b-col cols="3">   
      

            
             <b-link class="cat"  @click="SetCat('Handicraft')" > Handicraft  </b-link>

           </b-col>


           <b-col cols="3">   
             
          

               <b-link class="cat"  @click="SetCat('HU')" > HU  </b-link>
           </b-col>


           <b-col cols="3">   
     
            

              <b-link class="cat"  @click="SetCat('HU')" > HU  </b-link>

           </b-col>



       </b-row>
      
      
       </div>









    <div class="container-fluid medium-filters ">      

     <b-row>          
      <b-col cols="3">

        <b-button class="shadow border  mob-btn" id="show-btn"   v-b-modal="'myModall'"  > Filter </b-button>   

      </b-col>



      <b-modal ref="myfilters"  id="myModall" hide-footer title=" ">

        
             
 
<div class="d-block d- d-sm-block  d-md-none d-lg-none" >  
   <b-form-checkbox
        v-for="category in selectcategories"
         @change="switchcategories"
        :key="category.value"
        :value="category.value"
        v-model="default_category"
        name="flavour-4a" 
       
        class="m-1 s br-3"
        
      >

    {{ category.text }}

      </b-form-checkbox>

      <hr />







      <h6>  Filters  </h6>

   <b-form-checkbox
        v-for="agriculture in categories_filters"
        v-model="selectedfilter"
        :key="agriculture.value"
        :value="agriculture.value"
       
        name="flavour-4a" 
        class="m-1   br-3"
        
      >

    {{ agriculture.text }}
      </b-form-checkbox>






  </div>


      <div class="d-block text-center">
               

                <Filters      v-bind:filterType="selectedId"   v-bind:Selectedcategory="Selectedcategory"    v-bind:Selectedparentcategory="Selectedparentcategory"    />           
      </div>

    </b-modal>





     </b-row>


    </div>






    <div class="container-fluid mobile-filters">      

     <b-row>          
      <b-col cols="5">

        <b-button class="shadow border  mob-btn" id="show-btn" @click="showFilters" > Filter </b-button>

      </b-col>







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
          
  

         <Filters  v-bind:filterType="selectedId"    v-bind:Selectedcategory="Selectedcategory"   v-bind:Selectedparentcategory="Selectedparentcategory"     />      
          

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
      Setcategoryr:"all",
      Selectedcategory:"all",
      Selectedparentcategory:"Agriculture",
      bottomSelectedId: 0,
      location: "any",
      category: "any",
      post: "any",
      map: false,
      selectedfilter:"",

       default_category:"Agriculture" ,
  

  selectcategories:[],

  categories_filters: [],
      items: [
        { label: "All " },

        { label: "Business" },
        { label: "People" },
        { label: "Network" },
        { label: "Market" },
        { label: "Post" },
      ],

      
      
              


       agriculture_filters: [
        { value: "Vegetables", text: "Vegetables" },
        { value: "Starch", text: "Starch" },
      
        { value: "Fruits", text: "Fruits" },
       
        { value: "Cereals", text: "Cereals" },
        { value: "Oils", text: "Oils" },
        { value: "Coffee", text: "Coffee" },
        { value: "Spices", text: "Spices" },

         { value: "Finished_Branded_Products", text: "Branded Products" },

          { value: "Livestock", text: "Livestock" },

           { value: "Dairy", text: "Dairy" },

           
        { value: "Raw_material", text: "Raw material " },
       

      ],





         Electronics_filters: [
        { value: "Phone and accessories", text: "Phone and accessories" },
        { value: "Home Appliances", text: "Home Appliances" },
      
        { value: "Computers, Tablets and accessories", text: "Computers, Tablets and accessories" },
       
        { value: "Office Electronics", text: "Office Electronics " },

       
       

      ],



      

 restaurants_filters: [

     { value: "African food", text: "African food" },
     
        { value: "Fast_food ", text: "Fast food " },
        { value: "European food", text: "European food" },
        { value: "French_restaurant", text: "French Restaurant " },
        
         { value: "Asian food", text: "Asian food" },

        { value: "Bars", text: "Bars" },

        { value: "Vegetarian", text: "Vegetarian" },
        
          { value: "Delivery", text: "Delivery" },
           { value: "Catering", text: "Catering" },
            { value: "Pizza", text: "Pizza" },
             { value: "Bakery", text: "Bakery" },
              
                
                

      ],





              
 Handicrafts_filters: [
        { value: "Home Decor ", text: "Home Decor" },
        { value: "Textile", text: "Textile" },
               

      ],


  


  
      
 Mechanics_filters: [
        { value: "Car care", text: "Car care " },
        { value: "Parking", text: "Spare parts " },
        { value: "Spare parts", text: "Car dealers" },

        { value: "Auto Dealers", text: "Auto Dealers" },

        
             
                

      ],



      

 Health_unit_filters : [
        { value: "Hospitals", text: "Hospitals" },
        { value: "Clinics", text: "Clinics" },

        { value: "COVID-19", text: "COVID-19" },

        { value: "Pharmacies", text: "Pharmacies " },
        
      ],








       



      



       Finished_Branded_Products_filters: [

        { value: "Peanuts", text: "Peanuts" },
        { value: "Chocolate", text: "Chocolate" },
      
        { value: "Jam", text: "Jam" },

       

      ],






      
       Coffee_filters: [

        { value: "tea", text: "Tea" },
        { value: "coffe", text: "Coffe" },
      
        
       

      ],




      Dairy_filters: [

        { value: "Yoghurts", text: "Yoghurts" },
        { value: "coffe", text: "Coffe" },

         { value: "Milk", text: "Milk" },
          { value: "Butter", text: "Butter" },
           { value: "Cheese", text: "Cheese" },
            { value: "Ice_cream", text: "Ice cream " },
      
        
       

      ],


  

      
       Oils_filters: [

        { value: "Coconut_oils", text: "Coconut oils" },
        { value: "Palm_oil", text: "Palm oil" },

         { value: "Groundnut_oil", text: " Groundnut oil " },


        
      
        
       

      ],










      Beans_filters: [

        { value: "Red_beans", text: "Red beans" },
        { value: "Black_beans", text: "Black beans" },

         { value: "White_beans", text: "White beans" },
          { value: "Senegalese_beans", text: "Senegalese beans" },
           { value: "Koki_beans", text: "Koki beans" },
           
      
        
       

      ],







     
 
  
     Spices_filters: [
        { value: "Green_spices", text: "Green spices" },
        { value: "Ginger", text: "Ginger" },
      
        { value: "Garlic", text: "Garlic" },
        { value: "Djansang", text: "Djansang" },

        { value: "Curry", text: "Curry" },

        { value: "white_pepper", text: "white pepper" },

        { value: "Penja", text: "Penja" },
        
         
       

      ],





  
     starch_filters: [
        { value: "Cocoyam", text: "Cocoyam" },
        { value: "Cassava", text: "Cassava" },
      
        { value: "Plantains", text: "Plantains" },
        { value: "Potatoes", text: "Potatoes" },

        { value: "Yams", text: "Yams" },

        { value: "Garri", text: "Garri" },
        { value: "Okra", text: "Okra" },
        { value: "Corn", text: "Corn" },
        { value: "Groundnuts", text: "Groundnuts" },
         { value: "Bobolo", text: "Bobolo " },
         
       

      ],


      Cereals_filters: [
        { value: "Wheat", text: "Wheat" },
        { value: "Rice", text: "Rice" },
      
        { value: "Maize", text: "Maize" },
        { value: "Oat", text: "Oat" },

        { value: "Barley", text: "Barley" },

        { value: "Millet", text: "Millet" },
        
         
       

      ],


 
  





  
       Livestock_filters: [
        { value: "Chicken", text: "Chicken" },
        { value: "Beef", text: "Beef" },
      
        { value: "Pork", text: "Pork" },
        { value: "Bushmeat", text: "Bushmeat" },
        { value: "Goats", text: "Goats" },
        { value: "Duck", text: "Duck" },
        { value: "Lambs", text: "Lambs" },
        { value: "Rabbits", text: " Rabbits " },
        { value: "Snails", text: "Snails " },
         { value: "Eggs", text: "Eggs " },
          { value: "Smoked_fish", text: "Smoked fish " },
           { value: "Crayfish", text: "Crayfish " },
            { value: "Smoked_fish", text: "Smoked fish " },
             { value: "Smoked_beef", text: "Smoked beef " },
              { value: "Smoked_chicken", text: "Smoked chicken " },
              
              { value: "Mackerel", text: "Mackerel " },

              { value: "Bar_fish", text: "Bar fish " },

              { value: "Tilapia_fish", text: "Tilapia fish " },

              { value: "Carp_fish", text: "Carp fish " },

              { value: "Jawbone_fish", text: "Jawbone fish " },

               { value: "Belt_fish", text: "Belt fish " },

                { value: "Sardines_fish", text: "Sardines fish" },

                 { value: "Crabs", text: "Crabs" },

      ],





       Vegetables_filters: [
        { value: "Cucumbers", text: "Cucumbers" },
        { value: "Tomato", text: "Tomato" },
      
        { value: "Pepper", text: "Pepper" },
        { value: "Carrots", text: "Carrots" },
        { value: "Egusi", text: "Egusi" },
        { value: "Salad", text: "Salad" },
        { value: "Okra", text: "Okra" },
        { value: "Green_leaf", text: "Green leaf" },
        { value: "huckleberry", text: "huckleberry " },
         { value: "Waterleaf", text: "Waterleaf " },
          { value: "Bitter_leaf", text: "Bitter Leaf " },
       

      ],




       Fruits_filters: [
        { value: "Lemon", text: "Lemon" },
        { value: "Orange", text: "Orange" },
      
        { value: "Papaya", text: "Papaya" },
        { value: "Pineapples", text: "Pineapples" },
        { value: "Apples", text: "Apples" },
        { value: "Strawberries", text: "Strawberries" },
        { value: "Watermelon", text: "Watermelon" },
        { value: "Coconut", text: "Coconut" },
        { value: "Mangoes", text: "Mangoes " },
         { value: "Avocado", text: "Avocado " },
          { value: "Plums", text: "Plums " },
       

      ],







      optionsnav: {
        activeColor: "#1d98bd",
      },
    };
  },

  methods: {

    SetCat(cat){
      
      
        
       this.Setcategoryr = cat;


      switch(cat) {


                      

               case 'Agriculture': this.selectcategories = this.agriculture_filters;  
              
        console.log(this.Setcategoryr);
               break;






      }

       

    },

    getCategory(value){
       this.Selectedcategory=value;
    }
    ,


    getparentCategory(value){
    
        this.Selectedparentcategory=value;

     //   console.log(this.Selectedparentcategory);

    },





    
    switchcategories(){
    
   

      switch(this.default_category) {
  
  
        
   case 'Fruits': this.categories_filters = this.Fruits_filters;  
   break;
   case 'Coffee': this.categories_filters = this.Coffee_filters;  
   break;
   case 'Finished_Branded_Products': this.categories_filters = this.Finished_Branded_Products_filters;  
   break;
   case 'Vegetables': this.categories_filters = this.Vegetables_filters;  
   break;
   

  case 'Starch': this.categories_filters = this.starch_filters;
      
   break;

   case 'Oils': this.categories_filters = this.Oils_filters;   

   break;

   case 'Cereals': this.categories_filters = this.Cereals_filters; 
   
   break;
   case 'Raw_material': this.categories_filters = this.Raw_material_filters;  
   
   break;

   case 'Livestock': this.categories_filters = this.Livestock_filters;  
   
   break;
   case 'Spices': this.categories_filters = this.Spices_filters;  
   break;

   case 'Dairy': this.categories_filters = this.Dairy_filters;   
   break;
   case 'Beans': this.categories_filters = this.Beans_filters;   
   
  
      
   break;


   
    

      }

    },


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

.cat{
  margin:2px;
}

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

