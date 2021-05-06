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

           <b-dropdown-item  @click="category('Vegetables')"  href="#">Vegetables</b-dropdown-item>

            <b-dropdown-item  @click="category('Fruits')" href="#">Fruits</b-dropdown-item>

             <b-dropdown-item  @click="category('Cereals')"  href="#">Cereals</b-dropdown-item>
      
              <b-dropdown-item  @click="category('Coffee')"  href="#">Coffee/Tea</b-dropdown-item> 

              
               <b-dropdown-item  @click="category('Finished_Branded_Products')"  href="#">   Finished Products  </b-dropdown-item> 


             </b-col>   


             <b-col cols="6">   
            

           <b-dropdown-item  @click="category('Oils')" href="#"> Oil</b-dropdown-item>

           <b-dropdown-item  @click="category('Raw_material')"  href="#">Raw material </b-dropdown-item>

            <b-dropdown-item  @click="category('Livestock')" href="#">Livestock</b-dropdown-item>

             <b-dropdown-item  @click="category('Spices')"  href="#">Spices</b-dropdown-item> 

            
              <b-dropdown-item  @click="category('Dairy')"  href="#">Dairy</b-dropdown-item> 
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

            <b-dropdown-item  @click="category('Phone accessory')"  href="#">Phone accessory</b-dropdown-item>

            <b-dropdown-item  @click="category('Phone')"  href="#">Computers,  Tablets, <br /> $ Assoceries</b-dropdown-item> 
              

              
             </b-col>   


             <b-col cols="6">   
             <b-dropdown-item  @click="category('Microwaves')"  href="#">Home Appliances</b-dropdown-item> 
              <b-dropdown-item  @click="category('Ac')"  href="#">Office Electronics </b-dropdown-item>
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

            <b-dropdown-item  @click="category('Phone accessory')"  href="#"> African Food </b-dropdown-item>

            <b-dropdown-item  @click="category('Phone')"  href="#"> Bars </b-dropdown-item> 
             <b-dropdown-item  @click="category('Ac')"  href="#"> Catering  </b-dropdown-item>
              <b-dropdown-item  @click="category('Ac')"  href="#">Asians </b-dropdown-item>
              

              
             </b-col>   


             <b-col cols="6">   
             <b-dropdown-item  @click="category('Microwaves')"  href="#"> Fast Food </b-dropdown-item> 
              <b-dropdown-item  @click="category('Ac')"  href="#">European Food </b-dropdown-item>
               <b-dropdown-item  @click="category('Ac')"  href="#">Pizza </b-dropdown-item>
                <b-dropdown-item  @click="category('Ac')"  href="#">More </b-dropdown-item>
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
           

           <b-dropdown-item  @click="category('Microwaves')"  href="#"> Mayorcouncils </b-dropdown-item> 
              <b-dropdown-item  @click="category('Ac')"  href="#"> Women accessories </b-dropdown-item>
               
             </b-col>   


             <b-col cols="6">   
             
             <b-dropdown-item  @click="category('Ac')"  href="#">Men Clothing </b-dropdown-item>
                <b-dropdown-item  @click="category('Ac')"  href="#">Men Clothing </b-dropdown-item>

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
           

           <b-dropdown-item  @click="category('Ac')"  href="#">Regions </b-dropdown-item>
                <b-dropdown-item  @click="category('Ac')"  href="#">Division </b-dropdown-item>
             </b-col>   


             <b-col cols="6">   
           <b-dropdown-item  @click="category('Ac')"  href="#">City </b-dropdown-item>
                <b-dropdown-item  @click="category('Ac')"  href="#">Sub-divisions </b-dropdown-item>
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
            

               <b-dropdown-item  @click="category('Ac')"  href="#">Hospital </b-dropdown-item>
                   <b-dropdown-item  @click="category('Ac')"  href="#">Pharmacies </b-dropdown-item>
                   


             </b-col>   


             <b-col cols="6">   
               <b-dropdown-item  @click="category('Ac')"  href="#">Clinic </b-dropdown-item>
                   <b-dropdown-item  @click="category('Ac')"  href="#">Carding </b-dropdown-item>
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
            

               <b-dropdown-item  @click="category('Ac')"  href="#">Handicraft </b-dropdown-item>
                   <b-dropdown-item  @click="category('Ac')"  href="#">Hotels </b-dropdown-item>
                   <b-dropdown-item  @click="category('Ac')"  href="#">Transport </b-dropdown-item>
                   <b-dropdown-item  @click="category('Ac')"  href="#">  Mens & Women  <br />   Grooming    </b-dropdown-item>
                   


             </b-col>   


             <b-col cols="6" class="p-2">   
               <b-dropdown-item  @click="category('Ac')"  href="#">Auto Mechanics </b-dropdown-item>
                   <b-dropdown-item  @click="category('Ac')"  href="#">Carding </b-dropdown-item>

                   <b-dropdown-item  @click="category('Ac')"  href="#"> Education </b-dropdown-item>
                   <b-dropdown-item  @click="category('Ac')"  href="#">Professiona <br />  Service </b-dropdown-item>
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

