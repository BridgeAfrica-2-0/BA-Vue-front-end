<template>

<div class="container  mobi" >

    <b-row >       <b-col cols="1">  </b-col >        <b-col cols="10">   

  <span style="display:inline-flex">     
      
      
         <b-nav-item-dropdown  right   >

             <template #button-content>
      <span class="drop-text"> Agriculture   </span>
    </template>


          <b-dropdown-item href="/search?category=Vegetables">Food</b-dropdown-item>
           <b-dropdown-item href="/search?category=Vegetables">Vegetables</b-dropdown-item>
            <b-dropdown-item href="/search?category=Vegetables">Fruits</b-dropdown-item>
             <b-dropdown-item href="/search?category=Vegetables">Cereals</b-dropdown-item>
              <b-dropdown-item href="/search?category=Vegetables">Oils</b-dropdown-item>
               <b-dropdown-item href="/search?category=Fungi">Fungi</b-dropdown-item>
                <b-dropdown-item href="/search?category=Eggs">Eggs</b-dropdown-item>
                <b-dropdown-item href="/search?category=Rawmaterial">Raw material</b-dropdown-item>
               

        </b-nav-item-dropdown>
        



        
        <b-nav-item-dropdown  right>

            
             <template #button-content>
      <span class="drop-text"> Restaurants   </span>
    </template>


    <b-dropdown-item href="/search?category=Eggs">Fast food </b-dropdown-item>
    <b-dropdown-item href="/search?category=Eggs">French restaurant </b-dropdown-item>
    <b-dropdown-item href="/search?category=Eggs">Chinese </b-dropdown-item>
    <b-dropdown-item href="/search?category=Eggs">Vegetarian</b-dropdown-item>

    <b-dropdown-item href="/search?category=Eggs">Thai</b-dropdown-item>
    <b-dropdown-item href="/search?category=Eggs">Pizza</b-dropdown-item>
    <b-dropdown-item href="/search?category=Eggs">Food stan </b-dropdown-item>
    <b-dropdown-item href="/search?category=Eggs">Burger</b-dropdown-item>
    <b-dropdown-item href="/search?category=Eggs">Fish chips</b-dropdown-item>
    <b-dropdown-item href="/search?category=Eggs">Chicken shop</b-dropdown-item>
    <b-dropdown-item href="/search?category=Eggs">Hot pot </b-dropdown-item>
    <b-dropdown-item href="/search?category=Eggs">Indian</b-dropdown-item>
   </b-nav-item-dropdown>
        
        

         <b-nav-item-dropdown text="" right>
      <template #button-content>
      <span class="drop-text"> Electronics   </span>
    </template>
            
            <b-dropdown-item href="/search?category=Eggs">Phone</b-dropdown-item>
    <b-dropdown-item href="/search?category=Eggs">  Laptop </b-dropdown-item>
    <b-dropdown-item href="/search?category=Eggs">  Microwaves </b-dropdown-item>
    <b-dropdown-item href="/search?category=Eggs"> Ac </b-dropdown-item>
    <b-dropdown-item href="/search?category=Eggs">Phone accessory</b-dropdown-item>

        </b-nav-item-dropdown>



        
        
        <b-nav-item-dropdown text="" right>
      <template #button-content>
      <span class="drop-text"> Clothing   </span>
    </template>
            
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>
        
        
         
        <b-nav-item-dropdown text="Mayor Councils" right>

            <template #button-content>
      <span class="drop-text"> Mayor Councils   </span>
    </template>

<b-dropdown-item href="/search?category=Eggs"> Town </b-dropdown-item>
    <b-dropdown-item href="/search?category=Eggs"> City </b-dropdown-item>

        </b-nav-item-dropdown> 
        
        
        
        
        
         
        <b-nav-item-dropdown text="Health Units" right>
             <template #button-content>
      <span class="drop-text"> Health Units   </span>
    </template>
          
          <b-dropdown-item href="/search?category=Eggs"> Public </b-dropdown-item>
    <b-dropdown-item href="/search?category=Eggs"> Private </b-dropdown-item>

        </b-nav-item-dropdown> 
        
    
        
         
        <b-nav-item-dropdown   text="More" type="dark"  right>
            
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> 
        
        
         </span>  

         </b-col>



         <b-col cols="1" > </b-col>

           </b-row>


</div>
  
</template>

<script>
export default {
  name: "subnav"
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

