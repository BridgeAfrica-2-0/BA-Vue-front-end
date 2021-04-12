<template>
  <div>
    <navbar></navbar>

   

    <div class="text-justify  p-card ">

      <CarousselDashboard class="mm-top" /> <br />

      <b-row>
        <b-col  md="6" sm="12"  class="mt-2">
          <b-input-group class="my-auto input-size ">
            <template #append>
              <b-input-group-text class=" b-groupe  shadow "
                ><strong class="color-sit">
                  <b-icon-search></b-icon-search> </strong
              ></b-input-group-text>
            </template>


            


           




            <b-form-input
              id="inline-form-input-name"
              class=" border shadow  w-50 "
              placeholder="Search Bridge Africa"
            ></b-form-input>
          </b-input-group>
        </b-col>

        <b-col md="3" sm="12"   class="mt-2" >
          <b-input-group class="my-auto input-size">
            <template #append>
              <b-input-group-text class=" b-groupe shadow "
                ><strong class="color-sit">
                  <b-icon icon="chevron-down"> </b-icon> </strong
              ></b-input-group-text>
            </template>

            <b-form-select
              v-model="selected"
              :options="options"
              class=" w-25 wi-25 border shadow "
              value-field="item"
              text-field="name"
            ></b-form-select>
          </b-input-group>
        </b-col>

        <b-col md="3" sm="12"   class="mt-2" >
          <div v-if="selected != 'posts'">
            <b-input-group class="my-auto input-size">
              <template #append>
                <b-input-group-text class=" b-groupe  shadow "
                  ><strong class="color-sit">
                    <b-icon icon="chevron-down"> </b-icon> </strong
                ></b-input-group-text>
              </template>

              <b-form-select
                v-model="location"
                :options="filters"
                class=" w-25 wi-25 border shadow "
                value-field="item"
                text-field="name"
              ></b-form-select>
            </b-input-group>
          </div>

          <div v-if="selected == 'posts'">
            <b-input-group class="my-auto input-size">
              <template #append>
                <b-input-group-text class=" b-groupe shadow "
                  ><strong class="color-sit">
                    <b-icon icon="search"> </b-icon> </strong
                ></b-input-group-text>
              </template>

              <b-form-input
                id=" posted_by"
                class=" w-25 wi-25 border shadow "
                placeholder="Posted Date"
              ></b-form-input>
            </b-input-group>
          </div>
        </b-col>
      </b-row>

      <br />

      <b-row>
        <b-col md="3" sm="12"    class="mt-2" > </b-col>

        <b-col cols="3">
          <div v-if="selected == 'people'">
            <b-input-group class="my-auto input-size">
              <template #append>
                <b-input-group-text class=" b-groupe shadow "
                  ><strong class="color-sit">
                    <b-icon icon="chevron-down"> </b-icon> </strong
                ></b-input-group-text>
              </template>

              <b-form-select
                v-model="professio"
                :options="profession"
                class=" w-25 wi-25 border shadow "
                value-field="item"
                text-field="name"
              ></b-form-select>
            </b-input-group>
          </div>
        </b-col>

        <b-col md="3" sm="12"   class="mt-2" >
          <div v-if="selected == 'people'">
            <b-input-group class="my-auto input-size">
              <template #append>
                <b-input-group-text class=" b-groupe shadow "
                  ><strong class="color-sit">
                    <b-icon icon="chevron-down"> </b-icon> </strong
                ></b-input-group-text>
              </template>

              <b-form-select
                v-model="educatio"
                :options="education"
                class=" w-25 wi-25 border shadow "
                value-field="item"
                text-field="name"
              ></b-form-select>
            </b-input-group>
          </div>

          <div v-if="selected == 'business' || selected == 'network' || selected=='marketplace'">
            <b-input-group class="my-auto input-size">
              <template #append>
                <b-input-group-text class=" b-groupe shadow "
                  ><strong class="color-sit">
                    <b-icon icon="chevron-down"> </b-icon> </strong
                ></b-input-group-text>
              </template>

              <b-form-select
                v-model="category"
                :options="categories"
                class=" w-25 wi-25 border shadow "
                value-field="item"
                text-field="name"
              ></b-form-select>
            </b-input-group>
          </div>
        </b-col>

        <b-col md="3" sm="12"   class="mt-2" >
          <div v-if="selected == 'business' || selected == 'network' || selected=='marketplace'">
            <div class="a-center">
              <b-form-checkbox id="checkbox-1" name="checkbox-1">
                Show Map
              </b-form-checkbox>
            </div>
          </div>

          <div v-if="selected == 'people'">
            <b-input-group class="my-auto input-size">
              <template #append>
                <b-input-group-text class=" b-groupe shadow "
                  ><strong class="color-sit">
                    <b-icon icon="chevron-down"> </b-icon> </strong
                ></b-input-group-text>
              </template>

              <b-form-select
                v-model="workplac"
                :options="workplace"
                class=" w-25 wi-25 border shadow "
                value-field="item"
                text-field="name"
              ></b-form-select>
            </b-input-group>
          </div>

          <div v-if="selected == 'posts'">
            <b-input-group class="my-auto input-size">
              <template #append>
                <b-input-group-text class=" b-groupe shadow "
                  ><strong class="color-sit">
                    <b-icon icon="search"> </b-icon> </strong
                ></b-input-group-text>
              </template>

              <b-form-input
                id=" posted_by"
                class=" w-25 wi-25 border shadow "
                placeholder="Posted By"
              ></b-form-input>
            </b-input-group>
          </div>
        </b-col>
      </b-row>

      <br />

      <div v-if="selected == 'all'">
        <b-card class="shadow">
          <b-row>
            <b-col md="6" sm="12"  class="mt-2">
              <div style="p-div">
                <span>
                  <h4>  
                      <img class="img-fluid picture logo-img" src="@/assets/icons/bus.png"  /> 
                    BUSINESSES
                    <h6 style="float:right">
                      <b-link class="see-all-link"> <u> see all </u> </b-link>
                    </h6>
                  </h4>
                </span>



                
              </div>
              <div class="div-h"><Business /></div>
            </b-col>


            <b-col md="6" sm="12"  class="mt-20"  >
              <div class="p-div">
                <span>
                  <h4>    <img class="img-fluid picture logo-img" src="@/assets/icons/people.png"  /> 
                    People
                    <h6 style="float:right">
                      <b-link class="see-all-link"> <u> see all </u> </b-link>
                    </h6>
                  </h4>
                </span>
              </div>
              <div class="div-h"><People /></div>
            </b-col>
          </b-row>
        </b-card>
         <br />
      </div>
     

      <div v-if="selected == 'people'">
        <b-card class="shadow ">
          <span>
            <h4>    <img class="img-fluid picture logo-img " src="@/assets/icons/people.png"  /> 
              People
              <h6 style="float:right">
                <b-link class="see-all-link" > <u> see all </u> </b-link>
              </h6>
            </h4>
          </span>

          <div class="div-h">
            <b-row>
              <b-col> <People /> </b-col> <b-col> <People /> </b-col>
            </b-row>
          </div>
        </b-card>
        <br />
      </div>

      

      <div v-if="selected == 'business'">
        <b-card class="shadow ">
          <span>
            <h4>     <img class="img-fluid picture logo-img" src="@/assets/icons/bus.png"  /> 
              Business
              <h6 style="float:right">
                <b-link class="see-all-link"> <u> see all </u> </b-link>
              </h6>
            </h4>
          </span>

          <div class="div-h">
            <b-row>
              <b-col> <Business /> </b-col> <b-col> <Business /> </b-col>
            </b-row>
          </div>
        </b-card>
         <br />
      </div>

     

      <div v-if="selected == 'network'">
        <network-dashboard></network-dashboard> <br />
      </div>

      <Post v-if="selected == 'posts'" />

      <br />




      


     <div  v-if="selected == 'marketplace'" >
   


     <Market />
      

       
     <br />
  </div>





        <div  v-if="selectedb == 'owner'" >
  
<b-card class=" border shadow hselect" >   


   
   <b-row>    <b-col  md="6" sm="12">   <h6 class="font-weight-bolder text-design">
                Use Bridge Africa as Yourself or as one of your businesses
              </h6>   </b-col>    <b-col sm="12" md="6">    <b-form-select
                v-model="selectedb"
                :options="boptions"
              ></b-form-select>
            </b-col>    </b-row>
      

        </b-card>
     <br />
  </div>













     

      <div v-if="selectedb == 'owner'">
        <b-row>
          <b-col md="6" sm="12"  class="mt-2"> <Profile /> </b-col> <b-col md="6" sm="12"   class="mt-2"> <EmptyBusiness /> </b-col>
        </b-row>
        <br />
      </div>

      

      <div v-if="selectedb != 'owner'">
        <b-row>
          <b-col md="6" sm="12"    class="mt-2">    


             <div   >
     



<b-card class=" border shadow" style="height:350px">   



      
       
          
              <h4 class="font-weight-bolder text-design">
                Use Bridge Africa as Yourself or as one of your businesses
              </h4>
              <b-form-select
                v-model="selectedb"
                :options="boptions"
              ></b-form-select>
          
        
       


       

       

        </b-card>
    
  </div>    </b-col> <b-col md="6" sm="12"    class="mt-2"> <Map /> </b-col>
        </b-row>

      <br />
      </div>

      <div  v-if="selectedb != 'owner'">
        <b-row>   
        
          <b-col md="6" sm="12"    class="mt-2"> <BusinessDashboard /> </b-col> <b-col md="6" sm="12"    class="mt-2"> <Insights /> </b-col>
      
        </b-row>
      </div>
      <br />

      <comuniti-dashboard class="m-component"></comuniti-dashboard> <br />

      <div>
        <b-row>
          <b-col sm="12" md="8"  class="mt-3" > <CommunityActivity /> </b-col>
          <b-col sm="12" md="4"    class="mt-3"> <Tutorial /> </b-col>
        </b-row>
      </div>
      <br />

      <div>
        <b-row>
          <b-col sm="12" md="6"   class="mt-3" > <Hotbusiness /> </b-col> <b-col sm="12" md="6"  class="mt-3" > <Popularnetwork /> </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import CarousselDashboard from "@/components/dasboard/carousselDashboard";
import NetworkDashboard from "@/components/dasboard/networkDashboard";
import BusinessDashboard from "@/components/dasboard/businessDashboard";
import ComunitiDashboard from "@/components/dasboard/comunitiDashboard";
import Insights from "@/components/dasboard/insights";
import CommunityActivity from "@/components/dasboard/communityActivity";

import Tutorial from "@/components/dasboard/tutorial";

import Profile from "@/components/dasboard/profile";
import Post from "@/components/dasboard/post";

//import SelectBH from "@/components/dasboard/selectbusinessh";

import People from "@/components/dasboard/communityMember";
import Business from "@/components/dasboard/communitybusiness";

//import SelectBusiness from "@/components/dasboard/selectbusiness";
import Map from "@/components/dasboard/map";

import EmptyBusiness from "@/components/dasboard/emptybusiness";

import Popularnetwork from "@/components/dasboard/popularnetwork";
import Hotbusiness from "@/components/dasboard/hotbusiness";

import Market from "@/components/dasboard/market";


export default {
  name: "dashboard",
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

      map: false,


       boptions: [
        { value: "owner", text: "Owner's Name" },
        { value: "a", text: "Business Name 1" },
        { value: "b", text: "Business Name 2" },
        { value: "c", text: "Business Name 3" }
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
      categories: [
        { item: "any", name: "Category : Any" },
        { item: "restaurant", name: "Restaurant" },
        { item: "home service", name: "Home Services" },
        { item: "auto service", name: "Auto Services" },
        { item: "argiculture", name: "Agriculture" },
        { item: "technology", name: "Technology" }
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
    ComunitiDashboard,
    BusinessDashboard,
    NetworkDashboard,
    CommunityActivity,
    Tutorial,
    Insights,
    Popularnetwork,
    Hotbusiness,
    //SelectBusiness,
    Market,
    Map,
    Post,
    EmptyBusiness,
    //SelectBH,
    Profile,
    People,
    Business,
    CarousselDashboard,
    Navbar
  },
  methods: {}
};
</script>

<style scoped>



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
