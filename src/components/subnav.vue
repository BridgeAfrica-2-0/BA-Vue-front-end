<template>

<div class="container-flex  mobi" >

    <b-row >       <b-col cols="1">  </b-col >        <b-col cols="10" style="text-align:center">   

  <span style="display:inline-flex">     
      
      
        



          <span @mouseover="onOverAgriculture" >

    <b-nav-item-dropdown id="dropdown-1" text=" Agriculture " ref="Agriculture"  >
      <hr style="margin-top:-10px;  background-color:red; height:3px; width:70px; float:left "  />  <br />
    <div>
      <b-row>  
        <b-col cols="6">
             
              <b-dropdown-item  @click="category('Starch')" href="#"> Starch</b-dropdown-item>

           <b-dropdown-item  @click="category('Vegetables')"  href="#"><img class="img-fluid picture logo-img" src="@/assets/icons/vegetable1.png"  />Vegetables</b-dropdown-item>

            <b-dropdown-item  @click="category('Fruits')" href="#"><img class="img-fluid picture logo-img" src="@/assets/icons/fruits.png"  />Fruits</b-dropdown-item>

             <b-dropdown-item  @click="category('Cereals')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  />Cereals</b-dropdown-item>
      
              <b-dropdown-item  @click="category('Coffee')"  href="#">Coffee/Tea</b-dropdown-item> 

              
               <b-dropdown-item  @click="category('Finished_Branded_Products')"  href="#">   Finished Products  </b-dropdown-item> 


             </b-col>   


             <b-col cols="6">   
            

           <b-dropdown-item  @click="category('Oils')" href="#"><img class="img-fluid picture logo-img" src="@/assets/icons/oils.png"  /> Oil</b-dropdown-item>

           <b-dropdown-item  @click="category('Raw_material')"  href="#">Raw material </b-dropdown-item>

            <b-dropdown-item  @click="category('Livestock')" href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/livestock.png"  /> Livestock</b-dropdown-item>

             <b-dropdown-item  @click="category('Spices')"  href="#">Spices</b-dropdown-item> 

            
              <b-dropdown-item  @click="category('Dairy')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/dairy.png"  /> Dairy</b-dropdown-item> 
              <b-dropdown-item  @click="category('Beans')"  href="#">Beans</b-dropdown-item>

   
             


             </b-col> 
      

      </b-row>

    </div>
    </b-nav-item-dropdown>

  </span>







   <span  @mouseover="onOverElectronics" >

         <b-nav-item-dropdown @click="onOverElectronics"   id=""  ref="Electronics"  >

       <template #button-content>
      <span class="drop-text"> Electronics   </span>
    </template>



      <hr style="margin-top:-10px;  background-color:red; height:3px; width:70px; float:left "  />  <br />
    <div>
      <b-row>  
        <b-col cols="6">   

            <b-dropdown-item  @click="category('Phone accessory')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/phone.png"  /> Phone accessory</b-dropdown-item>

            <b-dropdown-item  @click="category('Computers')"  href="#"> <div>    <b-row>  <b-col cols="6"> <img class="img-fluid picture logo-img" src="@/assets/icons/computer.jpg"  />  </b-col> <b-col cols="6">  Computers, <br /> Tablets & <br /> Assoceries  </b-col>  </b-row>   </div>  </b-dropdown-item> 
              

              
             </b-col>   


             <b-col cols="6">   
             <b-dropdown-item  @click="category('Home Appliances')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/home appliances.png"  /> Home Appliances</b-dropdown-item> 
              <b-dropdown-item  @click="category('Office Electronics')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/office electronics.png"  /> Office Electronics </b-dropdown-item>
             </b-col> 
      

      </b-row>

    </div>
    </b-nav-item-dropdown>

   </span>    






   <span  @mouseover="onOverRestaurants">

         <b-nav-item-dropdown @click="onOverRestaurants"   id=""  ref="Restaurants"  >

       <template #button-content>
      <span class="drop-text"> Restaurants   </span>
    </template>



      <hr style="margin-top:-10px;  background-color:red; height:3px; width:70px; float:left "  />  <br />
    <div>
      <b-row>  
        <b-col cols="6">   

            <b-dropdown-item  @click="category('African Food')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  />  African Food </b-dropdown-item>

            <b-dropdown-item  @click="category('Bars')"  href="#">  <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  /> Bars </b-dropdown-item> 
             <b-dropdown-item  @click="category('Catering')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  /> Catering  </b-dropdown-item>
              <b-dropdown-item  @click="category('Asian food')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  />	Asian food </b-dropdown-item>
              

              
             </b-col>   


             <b-col cols="6">   
             <b-dropdown-item  @click="category('Fast Food')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  /> Fast Food </b-dropdown-item> 
              <b-dropdown-item  @click="category('European Food')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  /> European Food </b-dropdown-item>
               <b-dropdown-item  @click="category('Pizza')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  />Pizza </b-dropdown-item>
                <b-dropdown-item  @click="category('Bakery')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  />Bakery </b-dropdown-item>
             </b-col> 
      

      </b-row>

    </div>
    </b-nav-item-dropdown>

   </span>








   <span  @mouseover="onOverClothing" >

         <b-nav-item-dropdown @click="onOverRestaurants"   id=""  ref="Clothing"  >

       <template #button-content>
      <span class="drop-text"> Clothing   </span>
    </template>



      <hr style="margin-top:-10px;  background-color:red; height:3px; width:70px; float:left "  />  <br />
    <div>
      <b-row>  
        <b-col cols="6">   
           

           <b-dropdown-item  @click="category('Women clothing')"  href="#">  <img class="img-fluid picture logo-img" src="@/assets/icons/women clothing.png"  />   Women clothing </b-dropdown-item> 
              <b-dropdown-item  @click="category('Women accessories')"  href="#">   <img class="img-fluid picture logo-img" src="@/assets/icons/phone.png"  />   Women accessories </b-dropdown-item>
               
             </b-col>   


             <b-col cols="6">   
             
             <b-dropdown-item  @click="category('Men Clothing')"  href="#">  <img class="img-fluid picture logo-img" src="@/assets/icons/men clothing.png"  />   Men Clothing </b-dropdown-item>
                <b-dropdown-item  @click="category('Men Accessories')"  href="#">  <img class="img-fluid picture logo-img" src="@/assets/icons/men accessories.png"  />   Men Accessories </b-dropdown-item>

             </b-col> 
      

      </b-row>

    </div>
    </b-nav-item-dropdown>

   </span>






  
   <span  @mouseover="onOverMayorcouncils" >

         <b-nav-item-dropdown   id=""  ref="Mayorcouncils"  >

       <template #button-content>
      <span class="drop-text"> Mayor Councils   </span>
    </template>



      <hr style="margin-top:-10px;  background-color:red; height:3px; width:70px; float:left "  />  <br />
    <div>
      <b-row>  
        <b-col cols="6">   
           

           <b-dropdown-item  @click="category('Mayor Councils')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  /> Mayor Councils </b-dropdown-item>
                <b-dropdown-item  @click="category('Schools')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  /> Schools </b-dropdown-item>
             </b-col>   


             <b-col cols="6">   
           <b-dropdown-item  @click="category('Hospitals')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  /> Hospitals </b-dropdown-item>
                <b-dropdown-item  @click="category('Ministries ')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  />Ministries  </b-dropdown-item>
             </b-col> 
      

      </b-row>

    </div>
    </b-nav-item-dropdown>

   </span>














   





   <span  @mouseover="onOverHealthunits" >

         <b-nav-item-dropdown @click="onOverHealthunits"   id=""  ref="Healthunits"  >

       <template #button-content>
      <span class="drop-text"> Health Units   </span>
    </template>



      <hr style="margin-top:-10px;  background-color:red; height:3px; width:70px; float:left "  />  <br />
    <div>
      <b-row>  
        <b-col cols="6">   
            

               <b-dropdown-item  @click="category('Hospital')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  /> Hospital </b-dropdown-item>
                   <b-dropdown-item  @click="category('Pharmacies')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  /> Pharmacies </b-dropdown-item>
                   


             </b-col>   


             <b-col cols="6">   
               <b-dropdown-item  @click="category('Clinic')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  /> Clinic </b-dropdown-item>
                   <b-dropdown-item  @click="category('COVID-19')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  /> COVID-19 </b-dropdown-item>
             </b-col> 
      

      </b-row>

    </div>
    </b-nav-item-dropdown>

   </span>






   
   <span  @mouseover="onOverMore">

         <b-nav-item-dropdown @click="onOverMore"   id=""  ref="More"  >

       <template #button-content>
      <span class="drop-text"> More   </span>
    </template>



      <hr style="margin-top:-10px;  background-color:red; height:3px; width:70px; float:left "  />  <br />
    <div>
      <b-row>  
        <b-col cols="6" class="p-2">   
            

               <b-dropdown-item  @click="category('Ac')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  /> Handicraft </b-dropdown-item>
                   <b-dropdown-item  @click="category('Ac')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  />Hotels </b-dropdown-item>
                   <b-dropdown-item  @click="category('Ac')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  />Transport </b-dropdown-item>
                   <b-dropdown-item  @click="category('Ac')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  /> Mens & Women  <br />   Grooming    </b-dropdown-item>
                   


             </b-col>   


             <b-col cols="6" class="p-2">   
               <b-dropdown-item  @click="category('Ac')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  />Auto Mechanics </b-dropdown-item>
                   <b-dropdown-item  @click="category('Ac')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  />Carding </b-dropdown-item>

                   <b-dropdown-item  @click="category('Ac')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  /> Education </b-dropdown-item>
                   <b-dropdown-item  @click="category('Ac')"  href="#"> <img class="img-fluid picture logo-img" src="@/assets/icons/Cereals.png"  /> Professiona <br />  Service </b-dropdown-item>
             </b-col> 
      

      </b-row>

    </div>
    </b-nav-item-dropdown>

   </span>












  
     
















        
    
        
        
        
         </span>  




          <div >


   
  </div>















         </b-col>



         <b-col cols="1" > </b-col>

           </b-row>







           


</div>
  
</template>

<script>
export default {
  name: "subnav",

   methods: {

     category(category){
        


        this.$emit('category', category);

     },
  



     onOverMore() {
        this.$refs.More.visible = true;
      },
      onLeaveMore() {
        this.$refs.More.visible = false;
      },



      onOverAgriculture() {
        this.$refs.Agriculture.visible = true;
          
           this.$emit('parentcategory', 'Agriculture');

      },



      onLeaveAgriculture() {
        this.$refs.Agriculture.visible = false;
      },


       onOverRestaurants() {
        this.$refs.Restaurants.visible = true;
      },
      onLeaveRestaurants() {
        this.$refs.Restaurants.visible = false;
      },



        onOverElectronics() {
        this.$refs.Electronics.visible = true;
        this.$emit('parentcategory', 'Electronics');
      },
      onLeaveElectronics() {
        this.$refs.Electronics.visible = false;
      },

 

      onOverClothing() {
        this.$refs.Clothing.visible = true;
      },
      onLeaveClothing() {
        this.$refs.Clothing.visible = false;
      },


  
      onOverMayorcouncils() {
        this.$refs.Mayorcouncils.visible = true;
      },
      onLeaveMayorcouncils() {
        this.$refs.Mayorcouncils.visible = false;
      },




 onOverHealthunits() {
        this.$refs.Healthunits.visible = true;
      },
      onLeaveHealthunits() {
        this.$refs.Healthunits.visible = false;
      },







      
    }

};
</script>

<style scoped>


.logo-img{
  width: 50px;
}




@media only screen and (max-width: 768px) {
.mobi{

    display: none;
}

}


.a-center{
    align-content: center;
    text-align:center;
}

.drop-text{
  color: black;
}
 

</style>

