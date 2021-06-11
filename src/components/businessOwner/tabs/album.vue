<template>
  <div>
   

        <div class="row">
          <div class="container-fluid"  v-if="showalbum == false " >
            <div class="one2">
              <div class="createp img-gall image-wrapp">
                <div class=" " >
                  <a
                    href="#"
                       v-b-modal.createalbumModal
                  >
                    <div class="drag-textt">
                      <fas-icon :icon="['fas', 'plus']" />
                      <h3>Create Album</h3>
                    </div>
                  </a>
                </div>
              </div>



              <b-modal hide-footer title="Create album" id="createalbumModal" >
      <b-form>
        <b-form-input placeholder="Album name"></b-form-input>
        <b-button class="mt-2" variant="primary"> Create</b-button>
      </b-form>
    </b-modal>




   



              <div class="createp img-gall predit2"  @click="showlbum">  
                <a href="#!">
                  <img
                    class="card-img"
                    src="@/assets/img/wankue-filler.jpg"
                    alt=""
                  />
                  <div class="createdesc botmedia">
                    <div class="botmediades">
                      <h6>Profile Picture</h6>
                      <p>36 Items</p>
                    </div>
                  </div>
                </a>



                  <div class="mediadesc">
                <ul class="navbar-nav pull-right">
                  <li class="nav-item dropdown">
                    <b-dropdown
                      size="sm"
                      class="float-right"
                      variant="link"
                      toggle-class="text-decoration-none"
                      no-caret
                    >
                      <template #button-content>
                        <fas-icon
                          class="drop-color font-weight-bolder"
                          :icon="['fas', 'ellipsis-v']"
                        />
                      </template>
                  
                      <b-dropdown-item href="#"
                        >Edit</b-dropdown-item
                      >
                      
                      <b-dropdown-item href="#">Delete</b-dropdown-item>
                    </b-dropdown>
                  </li>
                </ul>
              </div>


              </div>


              <div class="createp img-gall predit2"     @click="showlbum">
                <a href="#!">
                  <img
                    class="card-img"
                    src="@/assets/img/wankue-filler.jpg"
                    alt=""
                  />
                  <div class="createdesc botmedia">
                    <div class="botmediades">
                      <h6>Cover Photos</h6>
                      <p>36 Items</p>
                    </div>
                  </div>
                </a>


                 <div class="mediadesc">
                <ul class="navbar-nav pull-right">
                  <li class="nav-item dropdown">
                    <b-dropdown
                      size="sm"
                      class="float-right"
                      variant="link"
                      toggle-class="text-decoration-none"
                      no-caret
                    >
                      <template #button-content>
                        <fas-icon
                          class="drop-color font-weight-bolder"
                          :icon="['fas', 'ellipsis-v']"
                        />
                      </template>
                  
                      <b-dropdown-item href="#"
                        >Edit</b-dropdown-item
                      >
                      
                      <b-dropdown-item href="#">Delete</b-dropdown-item>
                    </b-dropdown>
                  </li>
                </ul>
              </div>
              </div>





              <div class="createp img-gall predit2">
                <a href="#!">
                  <img
                    class="card-img"
                    src="@/assets/img/wankue-filler.jpg"
                    alt=""
                  />
                  <div class="createdesc botmedia">
                    <div class="botmediades">
                      <h6>Custom Album 1</h6>
                      <p>13 Items</p>
                    </div>
                  </div>
                </a>



                 <div class="mediadesc">
                <ul class="navbar-nav pull-right">
                  <li class="nav-item dropdown">
                    <b-dropdown
                      size="sm"
                      class="float-right"
                      variant="link"
                      toggle-class="text-decoration-none"
                      no-caret
                    >
                      <template #button-content>
                        <fas-icon
                          class="drop-color font-weight-bolder"
                          :icon="['fas', 'ellipsis-v']"
                        />
                      </template>
                  
                      <b-dropdown-item href="#"
                        >Edit</b-dropdown-item
                      >
                      
                      <b-dropdown-item href="#">Delete</b-dropdown-item>
                    </b-dropdown>
                  </li>
                </ul>
              </div>

              </div>


              <div class="createp img-gall predit2"   @click="showlbum"  >
                <a href="#!">
                  <img
                    class="card-img"
                    src="@/assets/img/wankue-filler.jpg"
                    alt=""
                  />
                  <div class="createdesc botmedia">
                    <div class="botmediades">
                      <h6>Custom Album 2</h6>
                      <p>23 Items</p>
                    </div>
                  </div>
                </a>


                 <div class="mediadesc">
                <ul class="navbar-nav pull-right">
                  <li class="nav-item dropdown">
                    <b-dropdown
                      size="sm"
                      class="float-right"
                      variant="link"
                      toggle-class="text-decoration-none"
                      no-caret
                    >
                      <template #button-content>
                        <fas-icon
                          class="drop-color font-weight-bolder"
                          :icon="['fas', 'ellipsis-v']"
                        />
                      </template>
                  
                      <b-dropdown-item href="#"
                        >Edit</b-dropdown-item
                      >
                      
                      <b-dropdown-item href="#">Delete</b-dropdown-item>
                    </b-dropdown>
                  </li>
                </ul>
              </div>



              </div>





              <div class="createp img-gall predit2"  @click="showlbum" >
                <a href="#!">
                  <img
                    class="card-img"
                    src="@/assets/img/wankue-filler.jpg"
                    alt=""
                  />
                  <div class="createdesc botmedia">
                    <div class="botmediades">
                      <h6>Custom Album 3</h6>
                      <p>33 Items</p>
                    </div>
                  </div>
                </a>

                 <div class="mediadesc">
                <ul class="navbar-nav pull-right">
                  <li class="nav-item dropdown">
                    <b-dropdown
                      size="sm"
                      class="float-right"
                      variant="link"
                      toggle-class="text-decoration-none"
                      no-caret
                    >
                      <template #button-content>
                        <fas-icon
                          class="drop-color font-weight-bolder"
                          :icon="['fas', 'ellipsis-v']"
                        />
                      </template>
                  
                      <b-dropdown-item href="#"
                        >Edit</b-dropdown-item
                      >
                      
                      <b-dropdown-item href="#">Delete</b-dropdown-item>
                    </b-dropdown>
                  </li>
                </ul>
              </div>

              </div>
            </div>








            <div class="two2 d-none">
              <div class="row">
                <div class="container">
                  <div class="col-md-4 mx-auto">
                    <form>
                      <div class="form-group col-md-12 text-center mb-3">
                        <ul class="navbar-nav">
                          <li class="nav-item dropdown">
                            <a
                              class="nav-link dropdown-toggle1"
                              href="#"
                              id="navbarDropdown"
                              role="button"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                              >Custom Album 1
                              <i class="fa fa-caret-down" aria-hidden="true"></i
                            ></a>
                            <div
                              class="dropdown-menu dropdown-menu-right"
                              aria-labelledby="navbarDropdown"
                            >
                              <a
                                class="dropdown-item"
                                data-toggle="modal"
                                data-target="#namealbumModal"
                                >Edit Name</a
                              >
                              <a class="dropdown-item">Delete Album</a>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="input-group col-md-12 text-center mb-4 selec">
                        <label
                          class="col-md-4 control-label pr-0 text-design"
                          for="name"
                          >14 Items -
                        </label>
                        <div class="col-md-5 pl-0 pr-0">
                          <select id="gender" class="form-control w-100">
                            <option>Public</option>
                            <option>Private</option>
                          </select>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>









            </div>
          </div>
        </div>


<!-- show  images in an album -->


<div class="container-flex"   v-if="showalbum == true "  >  
      

      <b-button variant="outline-primary" size="sm" @click="hidealbum"> Back </b-button>     <span class="text-center ml-2">      Album Name  </span>
    
      <Images />    </div>


      
  </div>
</template>

<script>

import Images from "./images";

export default {
  components: {Images},
  methods: {


      hidealbum(){

         this.showalbum=false;
      },



       showlbum(){

         this.showalbum=true;
      },


      
    onClick(i) {
      this.index = i;
    }
  },
  data: function() {
      
    return {

        showalbum: false,


      images: [
        "https://placekitten.com/801/800",
        "https://placekitten.com/802/800",
        "https://placekitten.com/803/800",
        "https://placekitten.com/804/800",
        "https://placekitten.com/805/800",
        "https://placekitten.com/806/800",
        "https://placekitten.com/807/800",
        "https://placekitten.com/808/800",
        "https://placekitten.com/809/800"
      ],
      imagees: [
        "https://i.wifegeek.com/200426/f9459c52.jpg",
        "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
        "https://i.wifegeek.com/200426/5fa51df3.jpg",
        "https://i.wifegeek.com/200426/663181fe.jpg",
        "https://i.wifegeek.com/200426/2d110780.jpg",
        "https://i.wifegeek.com/200426/e73cd3fa.jpg",
        "https://i.wifegeek.com/200426/15160d6e.jpg",
        "https://i.wifegeek.com/200426/d0c881ae.jpg",
        "https://i.wifegeek.com/200426/a154fc3d.jpg",
        "https://i.wifegeek.com/200426/71d3aa60.jpg",
        "https://i.wifegeek.com/200426/d17ce9a0.jpg",
        "https://i.wifegeek.com/200426/7c4deca9.jpg",
        "https://i.wifegeek.com/200426/64672676.jpg",
        "https://i.wifegeek.com/200426/de6ab9c6.jpg",
        "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
        "https://i.wifegeek.com/200426/4085d03b.jpg",
        "https://i.wifegeek.com/200426/177ef44c.jpg",
        "https://i.wifegeek.com/200426/d74d9040.jpg",
        "https://i.wifegeek.com/200426/81e24a47.jpg",
        "https://i.wifegeek.com/200426/43e2e8bb.jpg"
      ],
      index: 0
    };
  }
};
</script>

<style>
.text-design {
  align-items: first baseline;
}

.drop-color {
  color: black;
}



@media (min-width: 960px) {

.img-gall {
 
  background-size: contain;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}




.image-wrapp{
  border: 4px dashed #e75c18;
    position: relative;

     position: relative;
    margin: 5px;
    float: left;
    width: 46.5%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
}


.img-gall{
    position: relative;
    margin: 5px;
    float: left;
    width: 20%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
}

@media (min-width: 1400px) {
  .lb-grid {
    height: 274px;
    margin-bottom: 8px;
  }
}




.img-gall{
    position: relative;
    margin: 5px;     
    float: left;
    width: 19.1%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
}



.image-wrapp{
  border: 4px dashed #e75c18;
    position: relative;

     position: relative;
    margin: 5px;
    float: left;
    width: 46.5%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
}



}



@media only screen and (min-width:768px) and (max-width: 1331px) {

   
   

.img-gall {

  background-size: contain;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}


.img-gall{
    position: relative;
    margin: 5px;
    float: left;
    width: 31%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
}




.image-wrapp{
  border: 4px dashed #e75c18;
    position: relative;

     position: relative;
    margin: 5px;
    float: left;
    width: 46.5%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
}



}

@media (max-width: 762px) {


.img-gall {

  background-size: contain;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}


.img-gall{
    position: relative;
    margin: 5px;
    float: left;
    width: 46.5%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
}




.image-wrapp{
  border: 4px dashed #e75c18;
    position: relative;

     position: relative;
    margin: 5px;
    float: left;
    width: 46.5%;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
}


}





.drag-textt{

    text-align: center;
    font-weight: 100;
    text-transform: uppercase;
    color: #000;
}

</style>


