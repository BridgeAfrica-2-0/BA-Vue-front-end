<template>
  <div >
    <Navbar />

    <div class="container-fluid">

    <b-card class="border mb-3 ">  

  <b-container>         
        
        <b-row> 
            
            <b-col cols="6" md="2" class="mb-2"> 
<div > 
                <b-row>
           
            
 <b-col cols="6"   > 
            
    <b-dropdown text=" Sort By" variant="outline-primary" block class="">

    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown> 

 </b-col>

  

 <b-col cols="6" class=""  > 
            
            
      <div class=" d-blockk  t-center"> 

    <b-dropdown text=" Category" block variant="outline-primary" style="margin-left:60px; float-right">

    <b-dropdown-item href="#">Action</b-dropdown-item>
    <b-dropdown-item href="#">Another action</b-dropdown-item>
    <b-dropdown-item href="#">Something else here</b-dropdown-item>
  </b-dropdown> 
  
  
  </div> 

  
    </b-col> 
  
                </b-row>  </div>
  
    </b-col> 






     
           






        
         <b-col cols="12" md="4">  <b-input-group class="my-auto input-size ">
           

            


           




            <b-form-input
              id="inline-form-input-name"
              class=" border shadow  w-50  mb-1"
              placeholder="Search "
            ></b-form-input>
          </b-input-group>  </b-col>  

          <b-col md="4">   <b-input-group class="my-auto input-size">
        

            <b-form-input
              id="inline-form-input-name"
              class=" border shadow  w-50  mb-1"
              placeholder="Location "
            ></b-form-input>


          </b-input-group>  </b-col>
         
           <b-col cols="12" md="2" class="t-center"> <b-button variant="primary" block> Search </b-button> </b-col>  
           
            </b-row>      </b-container>   </b-card>     


    <b-row>  <b-col md="3">      <b-card class="border  h-100  d-mobile">     <b-form-group
      label=" Shop By Category"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox
        v-for="option in options"
        v-model="selected"
        :key="option.value"
        :value="option.value"
        :aria-describedby="ariaDescribedby"
        name="flavour-3a"
      >
        {{ option.text }}
      </b-form-checkbox>
    </b-form-group>     
    
    
    
    
      </b-card> 
          
          
          
          
          
             </b-col>     <b-col >      <Market />   </b-col>   </b-row>

    </div>
  
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Market from "@/components/market/market";
export default {
  components: {
    Navbar,
    Footer,
    Market,
  },
  data() {
    return {

         selected: [], // Must be an array reference!
        options: [
          { text: 'Agriculture', value: 'Agriculture' },
          { text: 'Handicfraft', value: 'Handicfraft' },
          { text: 'Electronics', value: 'Electronics' },
             { text: 'Restaurant', value: 'Restaurant' },
          { text: 'clothing', value: 'clothing' }
        ]
     
}; }}
</script>









<style scoped>

.t-center{
    text-align: center;
    align-content: center;
}

.d-blockk{
              display: none;
       }


    @media only screen and (max-width: 768px) {
   
     .d-mobile{ 

         display: none;
       }


       .d-blockk{
           display: block;
       }

    }


       


</style>