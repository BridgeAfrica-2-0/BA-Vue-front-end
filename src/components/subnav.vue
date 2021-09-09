<template>
  <div class="container-flex  mobi  d-none d-lg-none d-xl-block search">
    <b-row>
      <b-col cols="1" lg="2"> </b-col>
      <b-col cols="8" lg="10" style="text-align:left">
        <span style="display:inline-flex">
          <span
            @mouseover="onOverAgriculture"
            @click="onOverAgriculture"
            @mouseleave="onLeaveAgriculture"
          >
            <b-nav-item-dropdown
              id="dropdown-1"
              text=" Agriculture "
              ref="Agriculture"
            >
              <hr
                style="margin-top:-10px;  background-color:red; height:3px; width:40%; float:left "
              />
              <br />
              <div>
                <b-row>
                  <b-col cols="6">
                    <!--
             
              <b-dropdown-item  @click="category('Starch')" href="#"> Starch</b-dropdown-item>

               <b-dropdown-item  @click="category('Coffee')"  href="#">Coffee/Tea</b-dropdown-item>
               
               
               <b-dropdown-item  @click="category('Finished_Branded_Products')"  href="#">   Finished Products  </b-dropdown-item> 
              
               <b-dropdown-item  @click="category('Raw_material')"  href="#">Raw material </b-dropdown-item>
               
             <b-dropdown-item  @click="category('Spices')"  href="#">Spices</b-dropdown-item> 

             <b-dropdown-item  @click="category('Beans')"  href="#">Beans</b-dropdown-item>

  -->

                    <b-dropdown-item @click="category('Vegetables')" href="#"
                      ><img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/vegetable1.png"
                      />
                      Vegetables</b-dropdown-item
                    >

                    <b-dropdown-item @click="category('Fruits')" href="#"
                      ><img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/fruits.png"
                      />
                      Fruits</b-dropdown-item
                    >

                    <b-dropdown-item @click="category('Cereals')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/Cereals.png"
                      />
                      Cereals</b-dropdown-item
                    >

                    <b-dropdown-item @click="category('Starch')" href="#"
                      ><img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/starch.png"
                      />
                      Starch</b-dropdown-item
                    >
                  </b-col>

                  <b-col cols="6">
                    <b-dropdown-item @click="category('Oils')" href="#"
                      ><img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/oils.png"
                      />
                      Oil</b-dropdown-item
                    >

                    <b-dropdown-item @click="category('Livestock')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/livestock.png"
                      />
                      Livestock</b-dropdown-item
                    >

                    <b-dropdown-item @click="category('Dairy')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/dairy.png"
                      />
                      Dairy</b-dropdown-item
                    >

                    <b-dropdown-item @click="category('More')" href="#"
                      ><img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/more.png"
                      />
                      More</b-dropdown-item
                    >
                  </b-col>
                </b-row>
              </div>
            </b-nav-item-dropdown>
          </span>

          <span
            @mouseover="onOverElectronics"
            @click="onOverElectronics"
            @mouseleave="onLeaveElectronics"
          >
            <b-nav-item-dropdown
              @click="onOverElectronics"
              id=""
              ref="Electronics"
            >
              <template #button-content>
                <span class="drop-text"> Electronics </span>
              </template>

              <hr
                style="margin-top:-10px;  background-color:red; height:3px; width:40%; float:left "
              />
              <br />
              <div>
                <b-row>
                  <b-col cols="6">
                    <b-dropdown-item
                      @click="category('Phone accessory')"
                      href="#"
                    >
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/phone.png"
                      />
                      Phone</b-dropdown-item
                    >

                    <b-dropdown-item @click="category('Computers')" href="#">
                      <div>
                        <img
                          class="img-fluid picture logo-img"
                          src="@/assets/icons/computer.png"
                        />
                        Computers
                      </div>
                    </b-dropdown-item>
                  </b-col>

                  <b-col cols="6">
                    <b-dropdown-item
                      @click="category('Home Appliances')"
                      href="#"
                    >
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/home appliances.png"
                      />
                      Appliances</b-dropdown-item
                    >
                    <b-dropdown-item
                      @click="category('Office Electronics')"
                      href="#"
                    >
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/office electronics.png"
                      />
                      Office
                    </b-dropdown-item>
                  </b-col>
                </b-row>
              </div>
            </b-nav-item-dropdown>
          </span>

          <span @mouseover="onOverRestaurants" @mouseleave="onLeaveRestaurants">
            <b-nav-item-dropdown
              @click="onOverRestaurants"
              id=""
              ref="Restaurants"
            >
              <template #button-content>
                <span class="drop-text"> Restaurants </span>
              </template>

              <hr
                style="margin-top:-10px;  background-color:red; height:3px; width:40%; float:left "
              />
              <br />
              <div>
                <b-row>
                  <b-col cols="6">
                    <b-dropdown-item @click="category('African Food')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/African food.png"
                      />
                      African Food
                    </b-dropdown-item>

                    <b-dropdown-item @click="category('Bars')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/bars.png"
                      />
                      Bars
                    </b-dropdown-item>
                    <b-dropdown-item @click="category('Catering')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/catering.png"
                      />
                      Catering
                    </b-dropdown-item>

                    <b-dropdown-item
                      @click="category('European Food')"
                      href="#"
                    >
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/european food.png"
                      />
                      European <br />
                      <span class="mgmg"> Food </span>
                    </b-dropdown-item>
                  </b-col>

                  <b-col cols="6">
                    <b-dropdown-item @click="category('Fast Food')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/fast food.png"
                      />
                      Fast Food
                    </b-dropdown-item>
                    <b-dropdown-item @click="category('Asian food')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/Asia food.png"
                      />
                      Asian food
                    </b-dropdown-item>
                    <b-dropdown-item @click="category('Pizza')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/pizza.png"
                      />
                      Pizza
                    </b-dropdown-item>
                    <b-dropdown-item @click="category('Bakery')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/bakery.png"
                      />
                      Bakery
                    </b-dropdown-item>
                  </b-col>
                </b-row>
              </div>
            </b-nav-item-dropdown>
          </span>

          <span @mouseover="onOverClothing" @mouseleave="onLeaveClothing">
            <b-nav-item-dropdown @click="onOverClothing" id="" ref="Clothing">
              <template #button-content>
                <span class="drop-text"> Clothing </span>
              </template>

              <hr
                style="margin-top:-10px;  background-color:red; height:3px; width:35%; float:left "
              />
              <br />
              <div>
                <b-row>
                  <b-col cols="6">
                    <b-dropdown-item
                      @click="category('Tailoring_filters')"
                      href="#"
                    >
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/gromming.png"
                      />
                      Tailoring
                    </b-dropdown-item>

                    <b-dropdown-item
                      @click="category('Women clothing')"
                      href="#"
                    >
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/women clothing.png"
                      />
                      Women clothing
                    </b-dropdown-item>
                    <b-dropdown-item
                      @click="category('Women accessories')"
                      href="#"
                    >
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/women accesories.png"
                      />
                      Women <br />
                      <span class="mgmg"> Accessories </span>
                    </b-dropdown-item>
                  </b-col>

                  <b-col cols="6">
                    <b-dropdown-item @click="category('Men Clothing')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/men clothing.png"
                      />
                      Men Clothing
                    </b-dropdown-item>
                    <b-dropdown-item
                      @click="category('Men Accessories')"
                      href="#"
                    >
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/men accessories.png"
                      />
                      Men <br />
                      <span class="mgmg"> Accessories </span>
                    </b-dropdown-item>
                  </b-col>
                </b-row>
              </div>
            </b-nav-item-dropdown>
          </span>

          <span
            @mouseover="onOverMayorcouncils"
            @click="onOverMayorcouncils"
            @mouseleave="onLeaveMayorcouncils"
          >
            <b-nav-item-dropdown id="" ref="Mayorcouncils">
              <template #button-content>
                <span class="drop-text"> Public institution </span>
              </template>

              <hr
                style="margin-top:-10px;  background-color:red; height:3px; width:45%; float:left "
              />
              <br />
              <div>
                <b-row>
                  <b-col cols="6">
                    <b-dropdown-item
                      @click="category('Mayor Councils')"
                      href="#"
                    >
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/mayor council.png"
                      />
                      Mayor Councils
                    </b-dropdown-item>
                    <b-dropdown-item @click="category('Schools')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/school.png"
                      />
                      Schools
                    </b-dropdown-item>
                  </b-col>

                  <b-col cols="6">
                    <b-dropdown-item @click="category('Hospital')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/hospital.png"
                      />
                      Hospitals
                    </b-dropdown-item>
                    <b-dropdown-item @click="category('Ministries ')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/ministries.png"
                      />
                      Ministries
                    </b-dropdown-item>
                  </b-col>
                </b-row>
              </div>
            </b-nav-item-dropdown>
          </span>

          <span
            @mouseover="onOverHealthunits"
            @click="onOverHealthunits"
            @mouseleave="onLeaveHealthunits"
          >
            <b-nav-item-dropdown
              @click="onOverHealthunits"
              id=""
              ref="Healthunits"
            >
              <template #button-content>
                <span class="drop-text"> Health </span>
              </template>

              <hr
                style="margin-top:-10px;  background-color:red; height:3px; width:75px; float:left "
              />
              <br />
              <div>
                <b-row>
                  <b-col cols="6">
                    <b-dropdown-item @click="category('Hospital')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/hospital.png"
                      />
                      Hospital
                    </b-dropdown-item>
                    <b-dropdown-item @click="category('Pharmacies')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/pharmacy.png"
                      />
                      Pharmacies
                    </b-dropdown-item>
                  </b-col>

                  <b-col cols="6">
                    <b-dropdown-item @click="category('Clinic')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/clenic.png"
                      />
                      Clinic
                    </b-dropdown-item>
                    <b-dropdown-item @click="category('COVID-19')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/covid.png"
                      />
                      COVID-19
                    </b-dropdown-item>
                  </b-col>
                </b-row>
              </div>
            </b-nav-item-dropdown>
          </span>

          <span @mouseover="onOverMore">
            <b-nav-item-dropdown @click="onOverMore" id="" ref="More">
              <template #button-content>
                <span class="drop-text"> More </span>
              </template>

              <hr
                style="margin-top:-10px;  background-color:red; height:3px; width:70px; float:left "
              />
              <br />
              <div>
                <b-row>
                  <b-col cols="6">
                    <b-dropdown-item @click="category('Tailoring')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/gromming.png"
                      />
                      Tailoring
                    </b-dropdown-item>

                    <b-dropdown-item @click="category('Handicrafts')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/handicraft.png"
                      />
                      Handicraft
                    </b-dropdown-item>
                    <b-dropdown-item @click="category('Hotels')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/ministries.png"
                      />
                      Hotels
                    </b-dropdown-item>
                    <b-dropdown-item @click="category('Transport')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/transport.png"
                      />
                      Transport
                    </b-dropdown-item>
                    <b-dropdown-item @click="category('Grooming')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/gromming.png"
                      />
                      Mens & Women <br />
                      <span class="mgmg"> Grooming </span>
                    </b-dropdown-item>
                  </b-col>

                  <b-col cols="6">
                    <b-dropdown-item
                      @click="category('Auto Mechanics')"
                      href="#"
                    >
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/mechanics.png"
                      />
                      Auto Mechanics
                    </b-dropdown-item>
                    <b-dropdown-item @click="category('station')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/gas_station.png"
                      />
                      Station
                    </b-dropdown-item>

                    <b-dropdown-item @click="category('Education')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/education.png"
                      />
                      Education
                    </b-dropdown-item>
                    <b-dropdown-item @click="category('Professional')" href="#">
                      <img
                        class="img-fluid picture logo-img"
                        src="@/assets/icons/profesional.png"
                      />
                      Professional <br />
                      <span class="mgmg"> Service </span>
                    </b-dropdown-item>
                  </b-col>
                </b-row>
              </div>
            </b-nav-item-dropdown>
          </span>
        </span>

        <div></div>
      </b-col>

      <b-col cols="1" lg="2"> </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "subnav",

  methods: {
    category(category) {
      this.$emit("category", category);
    },

    onOverMore() {
      this.$refs.More.visible = true;
      this.$emit("parentcategory", "More");
    },
    onLeaveMore() {
      this.$refs.More.visible = false;
    },

    onOverAgriculture() {
      this.$refs.Agriculture.visible = true;

      this.$emit("parentcategory", "Agriculture");
    },

    onLeaveAgriculture() {
      this.$refs.Agriculture.visible = false;
    },

    onOverRestaurants() {
      this.$refs.Restaurants.visible = true;
      this.$emit("parentcategory", "Restaurants");
    },
    onLeaveRestaurants() {
      this.$refs.Restaurants.visible = false;
    },

    onOverElectronics() {
      this.$refs.Electronics.visible = true;
      this.$emit("parentcategory", "Electronics");
    },
    onLeaveElectronics() {
      this.$refs.Electronics.visible = false;
    },

    onOverClothing() {
      this.$refs.Clothing.visible = true;
      this.$emit("parentcategory", "Clothing");
    },
    onLeaveClothing() {
      this.$refs.Clothing.visible = false;
    },

    onOverMayorcouncils() {
      this.$refs.Mayorcouncils.visible = true;
      this.$emit("parentcategory", "Mayorcouncils");
    },
    onLeaveMayorcouncils() {
      this.$refs.Mayorcouncils.visible = false;
    },

    onOverHealthunits() {
      this.$refs.Healthunits.visible = true;
      this.$emit("parentcategory", "Healthunits");
    },
    onLeaveHealthunits() {
      this.$refs.Healthunits.visible = false;
    }
  }
};
</script>

<style scoped>
.logo-img {
  width: 25px;
}

.mgmg {
  margin-left: 30px;
}

@media only screen and (max-width: 768px) {
  .mobi {
    display: none;
  }
}

.a-center {
  align-content: center;
  text-align: center;
}

.drop-text {
  color: black;
}
</style>
