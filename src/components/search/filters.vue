<template>
  <div>

      <h6> Category </h6>
    
       
  

  
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
        v-model="selected"
        :key="agriculture.value"
        :value="agriculture.value"
        
        name="flavour-4a" button
        class="m-1 shadow border br-3"
        inline
      >

    {{ agriculture.text }}
      </b-form-checkbox>







  </div>

   
</template>

<script>



export default {
  name: "filters",
  data() {
    return {
      slide: 0,
      sliding: null,

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

      map: false,


      categories: [
        { item: "any", name: "Category : Any" },
        { item: "Agriculture ", name: "Agriculture " },
        { item: "Restaurant ", name: " Restaurant " },
        { item: "Electronics ", name: "Electronics " },
        { item: "Handicrafts", name: "Handicrafts" },
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



 



  
 Health_unit : [
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

    switchcategories(){
    
    console.log('hello blec');
    console.log(this.default_category);

      switch(this.default_category) {
  case 'Agriculture ': this.categories_filters = this.agriculture_filters;
      
   break;
  case 'Restaurant ': this.categories_filters = this.restaurants;
  break;

  case 'Electronics ': this.categories_filters = this.Electronics;
  break;





  case 'Mechanics': this.categories_filters = this.Mechanics;
  break;

  case 'Handicrafts ': this.categories_filters = this.Handicrafts;
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
  

  case 'Hotels ': this.categories_filters = this.Hotels;
  break;

  
  case 'station ': this.categories_filters = this.station;
  break;

  
  case 'Mayor_concils ': this.categories_filters = this.Mayor_concils;
  break;

  
  case 'Taxis_service ': this.categories_filters = this.Taxis_service;
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
