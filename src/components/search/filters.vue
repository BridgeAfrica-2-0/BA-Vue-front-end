<template>
  <div>

     
    
       
    


  <div  v-if="filterType == '1' || filterType == '4' " >       
     <h6> Category  </h6> 
   <b-form-checkbox
        v-for="category in categories"
        v-model="default_category"
        :key="category.item"
        :value="category.item"
       
        name="flavour-4a" button
        @change="switchcategories"
        class="m-1 shadow border br-3"
        inline
      >

    {{ category.name }}

      </b-form-checkbox>

      <hr />



  

   <b-form-checkbox
        v-for="agriculture in categories_filters"
        v-model="selectedfilter"
        :key="agriculture.value"
        :value="agriculture.value"
        @change="switchcategoriesfilters"
        name="flavour-4a" button
        class="m-1 shadow border br-3"
        inline
      >

    {{ agriculture.text }}
      </b-form-checkbox>


      
   <b-form-checkbox
        v-for="agriculture in categories_sub_filters"
        v-model="yayaya"
        :key="agriculture.value"
        :value="agriculture.value"
        
        name="flavour-4a" button
        class="m-1 shadow border br-3"
        inline
      >

    {{ agriculture.text }}
      </b-form-checkbox>



       <b-form-group
              label-cols-lg="3"
              label="Region"
              label-size="md"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
            </b-form-group>              

            <b-form-select v-model="selected">
              <b-form-select-option value="a">
                Yaounde
              </b-form-select-option>
            </b-form-select>

            <br />

           




            
            <b-form-group
              label-cols-lg="3"
              label="Division"
              label-size="md"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
            </b-form-group>              

            <b-form-select v-model="selected">
              <b-form-select-option value="a">
                My Location
              </b-form-select-option>
            </b-form-select>

            <br />

            <hr />








            <b-form-group
              label-cols-lg="12"
              label="Neighbourhood"
              label-size="md"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <b-form-checkbox id="" class="a-text" name="" value="">
                Buea</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                Tiko</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                Limbe</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                MUtengene</b-form-checkbox
              >
            </b-form-group>

            <br />

            <hr />

            <b-form-group
              label-cols-lg="12"
              label="Distance"
              label-size="md"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <b-form-checkbox id="" class="a-text" name="" value="">
                3km</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                9km</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                15km</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                25km</b-form-checkbox
              >
            </b-form-group>


      <div>
        <span  v-if="filterType == '4' " >   
    <label for="range-2">Price Range</label>
    <b-form-input id="range-2" v-model="priceRange" type="range" min="1000" max="200000000" step="0.5"></b-form-input>
    <div class="mt-2"> min: 1000  Max: {{ priceRange }}</div>

        </span>
  </div>
  



 </div>


       
  
   
  <div  v-if="filterType == '0'" >    
       
            <b-form-group
              label-cols-lg="3"
              label="Region"
              label-size="md"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
            </b-form-group>              

            <b-form-select v-model="selected">
              <b-form-select-option value="a">
                Yaounde
              </b-form-select-option>
            </b-form-select>

            <br />

           




            
            <b-form-group
              label-cols-lg="3"
              label="Division"
              label-size="md"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
            </b-form-group>              

            <b-form-select v-model="selected">
              <b-form-select-option value="a">
                My Location
              </b-form-select-option>
            </b-form-select>

            <br />

            <hr />








            <b-form-group
              label-cols-lg="12"
              label="Neighbourhood"
              label-size="md"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <b-form-checkbox id="" class="a-text" name="" value="">
                Buea</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                Tiko</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                Limbe</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                MUtengene</b-form-checkbox
              >
            </b-form-group>

            <br />

            <hr />

            <b-form-group
              label-cols-lg="12"
              label="Distance"
              label-size="md"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
              <b-form-checkbox id="" class="a-text" name="" value="">
                3km</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                9km</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                15km</b-form-checkbox
              >

              <b-form-checkbox id="" class="a-text" name="" value="">
                25km</b-form-checkbox
              >
            </b-form-group>
  </div>






  
  <div  v-if="filterType == '3'" >   
    
     <b-form-group
              label-cols-lg="3"
              label="Location"
              label-size="md"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
            </b-form-group>              

            <b-form-select v-model="selected">
              <b-form-select-option value="a">
                Yaounde
              </b-form-select-option>
            </b-form-select>

            <br />

    
     </div>




     
  <div  v-if="filterType == '2'" >   
    
     <b-form-group
              label-cols-lg="3"
              label="Profession"
              label-size="md"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
            </b-form-group>              

             <b-form-input  placeholder="Search Profession"></b-form-input>

            <br />



            <b-form-checkbox
      id="checkbox-1"
     
      name="checkbox-1"
      
      
    >
      Community
    </b-form-checkbox>

    
     </div>







      
  <div  v-if="filterType == '5'" >   
    
     <b-form-group
              label-cols-lg="12"
              label="Posted Date"
              label-size="md"
              label-class="font-weight-bold pt-0"
              class="mb-0"
            >
            </b-form-group>              

             <b-form-datepicker id="example-datepicker" v-model="value" class="mb-2"> </b-form-datepicker>

            <br />



            <b-form-checkbox
      id="checkbox-1"
     
      name="checkbox-1"
      
      
    >
      Community
    </b-form-checkbox>

    
     </div>









 




  </div>

   
</template>

<script>



export default {
  name: "filters",

  props: ['filterType'],




  data() {
    return {
      slide: 0,
      sliding: null,

       priceRange: '1000',

      selected: "all",
      location: "any",
      category: "any",
      post: "any",
       selectedb: "owner",
      
      educatio: "any",

      professio: "any",

      workplac: "any",
      agriculture:"",
      default_category:"Agriculture" ,

      selectedfilter:"",

      map: false,


      categories: [
        { item: "Professional_and_home_service", name: "Professionals" },
        { item: "Agriculture ", name: "Agriculture " },
        { item: "Restaurant ", name: " Restaurant " },
        { item: "Electronics ", name: "Electronics " },
        { item: "Handicrafts", name: "Handicrafts" },
        { item: "clothing", name: "clothing" },
        { item: "Mechanics", name: "Mechanics" },
        { item: "Health_unit ", name: "Health unit " },
        { item: "Bars", name: "Bars" },
        { item: "Hair_and_beauty ", name: "Hair and beauty " },
        { item: "Real_estate ", name: "Real_estate " },
        { item: "Travelling ", name: "Travelling " },
         { item: "Hotels", name: "Hotels" },
          { item: "station", name: " station  " },
           { item: "Mayor_concils", name: "Mayor_concils" },
           { item: "Taxis service", name: "Taxis service" },
      ],

      categories_filters:[],

      categories_sub_filters:[],




       agriculture_filters: [
        { value: "Vegetables", text: "Vegetables" },
        { value: "Food", text: "Food" },
      
        { value: "Fruits", text: "Fruits" },
        { value: "Meat", text: "Meat" },
        { value: "Cereals", text: "Cereals" },
        { value: "Oils", text: "Oils" },
        { value: "Fungi", text: "Fungi" },
        { value: "Eggs", text: "Eggs" },
        { value: "Raw_material", text: "Raw material " },
       

      ],


       electronics: [
        { value: "Phone", text: "Phone" },
        { value: "Laptop", text: "Laptop" },
        { value: "Microwaves", text: "Microwaves" },
        { value: "Ac", text: "Ac" },
        { value: "Phone_accessory", text: "Phone accessory" }
      ],





       station: [
        { value: "Phone", text: "Phone" },
        { value: "Laptop", text: "Laptop" },
        { value: "Microwaves", text: "Microwaves" },
        { value: "Ac", text: "Ac" },
        { value: "Phone_accessory", text: "Phone accessory" }
      ],


        clothing: [
        { value: "male", text: "male" },
        { value: "female", text: "female" },
        
      ],









   



 restaurants: [
        { value: "Fast_food ", text: "Fast food " },
        { value: "French_restaurant", text: "French Restaurant " },
        { value: "Chinese", text: "Chinese" },
        { value: "Vegetarian", text: "Vegetarian" },
         { value: "Thai", text: "Thai" },
          { value: "Pizza", text: "Pizza" },
           { value: "Burger", text: "Burger" },
            { value: "Salad", text: "Salad" },
             { value: "Indian", text: "Indian" },
              { value: "Chicken_shop", text: "Chicken shop" },
               { value: "Fish_chips ", text: "Fish chips " },
                { value: "Hot_pot", text: "Hot pot" },
                

      ],




      
 Mechanics: [
        { value: "Auto_repair ", text: "Auto repair " },
        { value: "Parking", text: "Parking " },
        { value: "Car_dealers", text: "Car dealers" },
        { value: "Motorcycle_dealers", text: "Motorcycle_dealers" },
         { value: "Car_wash", text: "Car_wash" },
          { value: "Tires", text: "Tires" },
           { value: "Auto_glass_services", text: "Auto_glass_services" },
           
             { value: "Car_renting", text: "Car_renting" },
             
                

      ],



            
 Handicrafts: [
        { value: "Textiles_crafts ", text: "Textiles crafts" },
        { value: "Functional crafts", text: "Functional crafts " },
        { value: "Paper_crafts", text: "Paper crafts" },
        { value: "Decorative_crafts", text: "Decorative crafts" },
         { value: "Fashion_crafts", text: "Fashion crafts" },

         
             
                

      ],



 



  
 Health_unit : [
        { value: "Hopistal ", text: "Hopistal " },
        { value: "clinic", text: "Clinic " },
        
                

      ],








  
 Pharmacies : [
        { value: "Fast_food ", text: "Fast food " },
        { value: "French_restaurant", text: "French Restaurant " },
        { value: "Chinese", text: "Chinese" },
        { value: "Vegetarian", text: "Vegetarian" },
         { value: "Thai", text: "Thai" },
          { value: "Pizza", text: "Pizza" },
           { value: "Burger", text: "Burger" },
            { value: "Salad", text: "Salad" },
             { value: "Indian", text: "Indian" },
              { value: "Chicken_shop", text: "Chicken shop" },
               { value: "Fish_chips ", text: "Fish chips " },
                { value: "Hot_pot", text: "Hot pot" },
                

      ],










  
 Educations : [
        { value: "Fast_food ", text: "Fast food " },
        { value: "French_restaurant", text: "French Restaurant " },
        { value: "Chinese", text: "Chinese" },
        { value: "Vegetarian", text: "Vegetarian" },
         { value: "Thai", text: "Thai" },
          { value: "Pizza", text: "Pizza" },
           { value: "Burger", text: "Burger" },
            { value: "Salad", text: "Salad" },
             { value: "Indian", text: "Indian" },
              { value: "Chicken_shop", text: "Chicken shop" },
               { value: "Fish_chips ", text: "Fish chips " },
                { value: "Hot_pot", text: "Hot pot" },
                

      ],




      
  
 Hair_and_beauty  : [
        { value: "massage ", text: "massage " },
        { value: "skin_care", text: "skin care " },
        { value: "hair_care", text: "hair care" },
        { value: "hair_salon", text: "hair salon" },
         { value: "training", text: "training" },
          { value: "tattoo", text: "tattoo" },
           { value: "makeup_salon", text: "makeup_salon" },
            { value: "teeth_whitening", text: "teeth whitening" },
             { value: "nail_salon", text: "nail salon" },
                

      ],

 





  
 Bars: [
        { value: "wineries ", text: "wineries" },
        { value: "nightclub", text: "nightclub " },
        { value: "snack", text: "snack" },
        { value: "drinks", text: "drinks" },
         { value: "natural", text: "natural" },
          
                

      ],




      
 Travelling : [
        { value: "bus_park ", text: "bus park " },
        { value: "car_parks ", text: "car parks  " },
        { value: "train_parks", text: "train parks " },
        { value: "ship", text: "ship" },

                

      ],


      
 Hotels  : [
        { value: "5_stars ", text: "5 stars " },
        { value: "4_stars", text: "4 stars " },
        { value: "3_stars", text: "3_stars" },
        { value: "Urban_hotel", text: "Urban_hotel" },
         { value: "Resorts", text: "Resorts" },
         
                

      ],




 Professional_and_home_service  : [
        { value: "Legal_service", text: "Legal service " },
        { value: "Professional_services", text: "Professional services  " },
        { value: "Home_service ", text: "Home service " },
        { value: "Financial_service", text: "Financial service " },
         
                

      ],


  

  

 Legal_service  : [
        { value: "Lawyers", text: "Lawyers " },
        { value: "Business_consulting", text: "Business consulting  " },
        { value: "Patent_law ", text: "Patent law " },
        { value: "Patent_law", text: "Patent law" },

        { value: "Public_relations", text: "Public relations" },
         
                

      ],


   
  male : [
        { value: "Shoes", text: "Shoes " },
        { value: "Watch", text: "Watch " },
        { value: "Perfume", text: "Perfume " },
        { value: "Shirt", text: "Shirt " },
        { value: "Bags", text: "Bags " },
        { value: "Jeans", text: "Jeans " },
        { value: "Cap", text: "Cap " },
        { value: "Gloves", text: "Gloves " },
        { value: "Suit", text: "Suit " },
        { value: "Singlet", text: "Singlet  " },
        { value: "sweater ", text: "sweater" },
        
         
                

      ],




female : [
        { value: "Shoes", text: "Shoes " },
        { value: "Watch", text: "Watch " },
        { value: "Perfume", text: "Perfume " },
        { value: "Shirt", text: "Shirt " },
        { value: "Bags", text: "Bags " },
        { value: "Jeans", text: "Jeans " },
        { value: "Cap", text: "Cap " },
        { value: "Gloves", text: "Gloves " },
        { value: "Suit", text: "Suit " },
        { value: "Singlet", text: "Singlet  " },
        { value: "sweater ", text: "sweater" },

        { value: "Gown ", text: "Gown" },
        { value: "Tops ", text: "Tops" },
        { value: "sweater ", text: "sweater" },
        
         
                

      ],









Professional_services  : [
        { value: "Web_designers", text: "Web designers " },
        { value: "Graphic_designers", text: "Graphic designers  " },
        { value: "Architect ", text: "Architect " },
        { value: "Patent_law", text: "Patent law" },

        { value: "Life_coach", text: "Life coach" },
            { value: "Marketers ", text: "Marketers " },
                { value: "Advertising ", text: "Advertising " },
                    { value: "Office_cleaning  ", text: "Office cleaning  " },

                        { value: "Billing_service", text: " Billing service" },

                            { value: "Wholesale ", text: "Wholesale " },
                            
                                { value: "Translation_service  ", text: "Translation service  " },
                                 { value: "Employment_agency  ", text: "Employment agency  " },
                                  { value: "Private_investigators ", text: "Private investigators " },
                                   { value: "Personal_assistants ", text: "Personal assistants " },
                                    { value: "Protocol ", text: "Protocol " },
         
                

      ],




 Home_service : [
        { value: "Electrician", text: "Electrician " },
        
         { value: "Plumbing", text: "Plumbing" },
          { value: "Carpeting", text: "Carpeting" },
           { value: "Gardeners", text: "Gardeners" },
           
             { value: "Painters", text: "Painters" },
             

           
                

      ],


       Financial_service : [
        { value: "Insurance", text: "Insurance " },
        
         { value: "Investing", text: "Investing" },
          { value: "Banks", text: "Banks" },
           

           
                

      ],













 Real_estate : [
        { value: "apartment", text: "apartment " },
        { value: "property_management", text: "property management " },
        { value: "university_housing", text: "university housing" },
        { value: "home_staging", text: "home_staging" },
         { value: "commercial", text: "commercial" },
          { value: "developers", text: "developers" },
           
                

      ],
 

      
 Mayor_councils : [
        { value: "Town ", text: "Town " },
        { value: "City", text: "City " },
   
                

      ],


  


    Taxis_service : [
        { value: "Urban ", text: "Urban" },
        { value: "Airport", text: "Airport " },
        { value: "Renting", text: "Renting" },
        
                

      ],
 





       


      optionss: [
        { id: "all", label: "All" },
        { id: "business", label: "Business" },
        { id: "people", label: "People" },
        { id: "network", label: "Network" },
        { id: "marketplace", label: "Markeplace", notEnabled: true },
        { id: "posts", label: "Posts" }
      ],

      options: [
        { item: "all", name: "All" },
        { item: "business", name: "Business" },
        { item: "people", name: "People" },
        { item: "network", name: "Network" },
        { item: "marketplace", name: "Markeplace", notEnabled: false },
        { item: "posts", name: "Posts" }
      ],
      filters: [
        { item: "any", name: "Location : Any" },
        { item: "yaounde", name: "Yaounde, Cameroon" },
        { item: "dhaka ", name: "Dhaka, Bangladesh" },
        { item: "new york", name: "New York, United States" },
        { item: "douala", name: "Douala, Cameroon" },
        { item: "karachi", name: "Karachi, Pakistan" }
      ],
      
      posts: [
        { item: "any", name: "Post: Any" },
        { item: "people", name: "People I am following" },
        { item: "business", name: "Businesses i am following" },
        { item: "networks", name: "Networks I am following" }
      ],

      education: [
        { item: "any", name: "Education: Any" },
        { item: "ub", name: "University Of Buea" },
        { item: "uba", name: "University Of Yaounde" },
        { item: "uy", name: "University Of Yaounde 1" }
      ],

      profession: [
        { item: "any", name: "Profession: Any" },
        { item: "engineer", name: "Engineen" },
        { item: "teacher", name: "Teacher" },
        { item: "farmer", name: "Farmer" }
      ],

      workplace: [
        { item: "any", name: "Post: Any" },
        { item: "yaounde", name: "Yaounde" },
        { item: "douala", name: "Douala" },
        { item: "Buea", name: "Buea" }
      ],

      sponsoredBusinesses: [
        { title: "Business 1" },
        { title: "Business 2" },
        { title: "Business 3" },
        { title: "Business 4" }
      ]
    };
  },
  components: {
   
  },

  

  methods: {

     switchcategoriesfilters(){

           
    console.log('hello blec');
    console.log(this.selectedfilter);

           switch(this.selectedfilter) {
               case 'male': this.categories_sub_filters = this.male;
               break;

               case 'female': this.categories_sub_filters = this.female;
               break;
 

               case 'Legal_service': this.categories_sub_filters = this.Legal_service;
               break;

 
               case 'Professional_services': this.categories_sub_filters = this.Professional_services;
               break;

	 
               case 'Home_service': this.categories_sub_filters = this.Home_service;
               break;

 
               case 'Financial_service': this.categories_sub_filters = this.Financial_service;
               break;



           }
     },

    switchcategories(){
    
    console.log('hello blec');
    console.log(this.default_category);

      switch(this.default_category) {
  case 'Professional_and_home_service': this.categories_filters = this.Professional_and_home_service;
      
   break;

   case 'Agriculture ': this.categories_filters = this.agriculture_filters;
      
   break;



  case 'Restaurant ': this.categories_filters = this.restaurants;
  break;

  case 'Electronics ': this.categories_filters = this.electronics;
  break;





  case 'Mechanics': this.categories_filters = this.Mechanics;
  break;

  case 'Handicrafts': this.categories_filters = this.Handicrafts;
  break;


  case 'Health_unit ': this.categories_filters = this.Health_unit;
  break;

  

  case 'Bars': this.categories_filters = this.Bars;
  break;

  case 'Hair_and_beauty ': this.categories_filters = this.Hair_and_beauty;
  break;

  

  case 'Real_estate ': this.categories_filters = this.Real_estate;
  break;

  case 'Travelling ': this.categories_filters = this.Travelling;
  break;
  

  case 'Hotels': this.categories_filters = this.Hotels;
  break;

  
  case 'station': this.categories_filters = this.station;
  break;

  
  case 'Mayor_concils ': this.categories_filters = this.Mayor_concils;
  break;

  
  case 'Taxis_service ': this.categories_filters = this.Taxis_service;
  break;


   case 'clothing': this.categories_filters = this.clothing;
  break;
  
  



   
    

      }

    },

  }
};
</script>

<style scoped>

.br-3{
    border-radius: 5px;;
}

.logo-img{

  width: 60px;
}

@media only screen and (max-width: 768px) {
  



h4{
  font-size: 15px;
}

.logo-img{
  width: 30px;
}
.see-all-link{
  font-size: 10px;
}

}




.p-card {
  margin: 10px;

  border: 0px;
}

.search-form {
  margin-top: 10px;
  margin-bottom: 20px;
  text-align: right;
}

.m-component {
  margin: -20px;
}

.w-50 {
  width: 50%;
  height: 50px;
}




select option {
  margin: 40px;
  background: white;
  color: black;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.4);
}







.wi-25 {
  width: 25%;
  height: 50px;
}

.b-groupe {
  background-color: orangered;

  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  border-style: none;
  color: white;
}

.custom-select {
display:inherit;
}

.color-sit {
  color: white;
}

select {
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";
}

.a-center {
  align-content: center;
  text-align: center;

  margin-top: 15px;
}



.div-h {
  height: 350px;
  overflow: auto;
  overflow-x: hidden;
}
</style>

<style>  




</style>
