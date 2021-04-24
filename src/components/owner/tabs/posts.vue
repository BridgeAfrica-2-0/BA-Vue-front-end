<template>
  <div>
    <b-row>
      <b-col md="3" class="p-0 m-0">
        <b-card title="" header-tag="header" footer-tag="footer">
          <template #header>
            <h6 class="mb-0 d-inline-block">Intro</h6>
            <span class="float-right btn m-0 p-0 action-intro"  
            v-b-modal.modal-5

              ><b-icon icon="pencil-fill" variant="primary"></b-icon> Edit</span
            >
          </template>
          <b-card-text class="text-left">
            <p>
             <b> <b-icon icon="briefcase-fill" variant="primary"></b-icon> Work at:</b>
              Current or Last Organization
            </p>
            <p>
             <b> <b-icon icon="book-fill" variant="primary"></b-icon> Studied at:</b>
              Last Education
            </p>
            <p>
           <b>   <b-icon icon="house-fill" variant="primary"></b-icon> Home Town
              Name: </b>Dummy
            </p>
            <p>
            <b>  <b-icon icon="geo-alt-fill" variant="primary"></b-icon> Current
              City Name: </b> Dummy
            </p>
            <p>
            <b>  <b-icon icon="people-fill" variant="primary"></b-icon> Community: </b> 525
            </p>
          </b-card-text>
        </b-card>



      
    <b-modal id="modal-5" title=" Edit Profile"> 
      
      
      
          <div class="form-card">
              <div class="row">
                <div class="col-md-6">
                  

                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="username"> DOB :</label><br />
                    <input
                      type="date"
                      name="dob"
                      id="dob"
                      placeholder="Busness Name"
                      class="form-control"
                    />
                  </div>

                  <div class="form-group">
                    <label for="alias">Gender:</label><br />
                    <select id="category" class="form-control">
                      <option value="" selected="" disabled="">
                        Select Gender
                      </option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>other</option>
                    </select>
                  </div>

                  <div class="form-group">
                    <label for="country"> Country :</label><br />

                      <country-select v-model="country" :country="country" topCountry="US"  class="form-control" />
  
                    



                  </div>

                  <div class="form-group">
                    <label for="city"> City :</label><br />
                    <input
                      type="text"
                      name="alias"
                      id="city"
                      placeholder="country"
                      class="form-control"
                    />
                  </div>

                  <div class="form-group">
                    <label for="Neighbor"> Neighbor :</label><br />
                    <input
                      type="text"
                      name="alias"
                      id="Neighbor"
                      placeholder="Neighbor"
                      class="form-control"
                    />
                  </div>
                </div>
              </div>
            </div>
      
      
      
      
      
       </b-modal>

        

        <Followers />
        <Media />
      </b-col>
      <b-col md="9" class="m-0 p-0 px-lg-4">
        <b-card class="px-md-3">
          <b-row>
            <b-col cols="2" md="1" class="m-0 p-0">
              <b-avatar
                class="d-inline-block"
                variant="primary"
                src="https://placekitten.com/300/300"
              ></b-avatar>
            </b-col>
            <b-col cols="10" md="11" class="m-0 p-0">
              <b-form-textarea
                id="textarea-small"
                size="sm"
                class="mb-2"
                placeholder="Whats On Your, <Name Here> ?"
              ></b-form-textarea>
              <span class="float-left">
                <b-button-group size="sm" class="">
                  <b-button
                    title="Add Image"
                    size="sm"
                    variant="outline-primary"
                  >
                    <b-icon icon="card-image" aria-hidden="true"></b-icon>
                  </b-button>
                  <b-button
                    title="Add Movie"
                    size="sm"
                    variant="outline-primary"
                  >
                    <b-icon
                      icon="camera-video-fill"
                      aria-hidden="true"
                    ></b-icon>
                  </b-button>
                  <b-button   @click="chooseFiles()"
                    title="Add Hyperlink"
                    size="sm"
                    variant="outline-primary"
                  >
                    <b-icon icon="link-45deg" aria-hidden="true"></b-icon>
                  </b-button>
                </b-button-group>
              </span>
              <span class="float-right">

                <input id="fileUpload" type="file" hidden>

                <b-button variant="outline-primary"  size="sm"
                  ><b-icon icon="cursor-fill" variant="primary"></b-icon>
                  Publish</b-button
                >
              </span>
            </b-col>
          </b-row>

          <b-row class="mt-4">
            <b-col cols="12" class="mt-4">
              <b-row>
                <div class="media">
                  <img
                    src="@/assets/img/wankue-filler.jpg"
                    alt="John Doe"
                    class="mr-2 rounded-circle avatar-size"
                  />
                  <div class="media-body">
                    <h4 class="mb-0">John Doe</h4>
                    <p>Lorem ipsum...</p>
                  </div>
                  <ul class="navbar-nav pull-right purple float-right my-auto">
                    <li class="nav-item dropdown">
                      <b-dropdown
                        size="sm"
                        class=""
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
                        <b-dropdown-item href="#">
                          <fas-icon
                            class="drop-color font-weight-bolder"
                            :icon="['fas', 'edit']"
                          />
                          Edit</b-dropdown-item
                        >
                        <b-dropdown-item href="#">
                          <fas-icon
                            class="drop-color font-weight-bolder"
                            :icon="['fas', 'trash-alt']"
                          />
                          Delete</b-dropdown-item
                        >
                      </b-dropdown>
                    </li>
                  </ul>
                </div>
              </b-row>
              <b-row>
                <b-col cols="12" class="mt-2">
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.😛
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="mt-2">
                  <img
                    class="img-fluid"
                    src="@/assets/img/photo1.jpg"
                    alt="Photo1"
                  />
                </b-col>
                <b-col class="mt-1">
                  <span class="mr-3"
                    ><b-icon
                      icon="suit-heart"
                      variant="primary"
                      aria-hidden="true"
                    ></b-icon>
                    23</span
                  >
                  <span
                    ><b-icon
                      icon="chat-fill"
                      variant="primary"
                      aria-hidden="true"
                    ></b-icon>
                    123</span
                  >
                </b-col>
              </b-row>
              <b-row class="mt-2">
                <b-col cols="3" md="1" class="m-md-0 p-md-0">
                  <b-avatar
                    variant="info"
                    class="img-fluid"
                    src="https://placekitten.com/300/300"
                  ></b-avatar>
                </b-col>
                <b-col cols="9" md="11" class="p-0 m-0 pr-3">
                  <b-input-group class="my-auto w-100 rounded">
                    <template #append>
                      <b-input-group-text class=""
                        ><strong class="clr">
                          <b-icon-cursor-fill></b-icon-cursor-fill> </strong
                      ></b-input-group-text>
                    </template>
                    <b-form-input
                      placeholder="Add A Comment"
                      class="border-right-0"
                    ></b-form-input>
                  </b-input-group>
                </b-col>
              </b-row>
            </b-col>
          </b-row>

          <b-row class="mt-4">
            <b-col cols="12" class="mt-4">
              <b-row>
                <div class="media">
                  <img
                    src="@/assets/img/wankue-filler.jpg"
                    alt="John Doe"
                    class="mr-2 rounded-circle avatar-size"
                  />
                  <div class="media-body">
                    <h4 class="mb-0">John Doe</h4>
                    <p>Lorem ipsum...</p>
                  </div>
                  <ul class="navbar-nav pull-right purple float-right my-auto">
                    <li class="nav-item dropdown">
                      <b-dropdown
                        size="sm"
                        class=""
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
                        <b-dropdown-item href="#">
                          <fas-icon
                            class="drop-color font-weight-bolder"
                            :icon="['fas', 'edit']"
                          />
                          Edit</b-dropdown-item
                        >
                        <b-dropdown-item href="#">
                          <fas-icon
                            class="drop-color font-weight-bolder"
                            :icon="['fas', 'trash-alt']"
                          />
                          Delete</b-dropdown-item
                        >
                      </b-dropdown>
                    </li>
                  </ul>
                </div>
              </b-row>
              <b-row>
                <b-col cols="12" class="mt-2">
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.😛
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="mt-2">
                  <lightbox :cells="2" :items="imagees"></lightbox>
                </b-col>
                <b-col class="mt-1">
                  <span class="mr-3"
                    ><b-icon
                      icon="suit-heart"
                      variant="primary"
                      aria-hidden="true"
                    ></b-icon>
                    23</span
                  >
                  <span
                    ><b-icon
                      icon="chat-fill"
                      variant="primary"
                      aria-hidden="true"
                    ></b-icon>
                    123</span
                  >
                </b-col>
              </b-row>
              <b-row class="mt-2">
                <b-col cols="3" md="1" class="m-md-0 p-md-0">
                  <b-avatar
                    variant="info"
                    class="img-fluid"
                    src="https://placekitten.com/300/300"
                  ></b-avatar>
                </b-col>
                <b-col cols="9" md="11" class="p-0 m-0 pr-3">
                  <b-input-group class="my-auto w-100 rounded">
                    <template #append>
                      <b-input-group-text>
                        ><strong class="clr">
                          <b-icon-cursor-fill></b-icon-cursor-fill> </strong
                      ></b-input-group-text>
                    </template>
                    <b-form-input
                      placeholder="Add A Comment"
                      class="border-right-0"
                    ></b-form-input>
                  </b-input-group>
                </b-col>
              </b-row>
            </b-col>
          </b-row>

          <b-row class="mt-4">
            <b-col cols="12" class="mt-4">
              <b-row>
                <div class="media">
                  <img
                    src="@/assets/img/wankue-filler.jpg"
                    alt="John Doe"
                    class="mr-2 rounded-circle avatar-size"
                  />
                  <div class="media-body">
                    <h4 class="mb-0">John Doe</h4>
                    <p>Lorem ipsum...</p>
                  </div>
                  <ul class="navbar-nav pull-right purple float-right my-auto">
                    <li class="nav-item dropdown">
                      <b-dropdown
                        size="sm"
                        class=""
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
                        <b-dropdown-item href="#">
                          <fas-icon
                            class="drop-color font-weight-bolder"
                            :icon="['fas', 'edit']"
                          />
                          Edit</b-dropdown-item
                        >
                        <b-dropdown-item href="#">
                          <fas-icon
                            class="drop-color font-weight-bolder"
                            :icon="['fas', 'trash-alt']"
                          />
                          Delete</b-dropdown-item
                        >
                      </b-dropdown>
                    </li>
                  </ul>
                </div>
              </b-row>
              <b-row>
                <b-col cols="12" class="mt-2">
                  <p>
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has
                    survived not only five centuries, but also the leap into
                    electronic typesetting, remaining essentially unchanged.😛
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="mt-2">
                  <lightbox :cells="4" :items="images"></lightbox>
                </b-col>
                <b-col class="mt-1">
                  <span class="mr-3"
                    ><b-icon
                      icon="suit-heart"
                      variant="primary"
                      aria-hidden="true"
                    ></b-icon>
                    23</span
                  >
                  <span
                    ><b-icon
                      icon="chat-fill"
                      variant="primary"
                      aria-hidden="true"
                    ></b-icon>
                    123</span
                  >
                </b-col>
              </b-row>
              <b-row class="mt-2">
                <b-col cols="3" md="1" class="m-md-0 p-md-0">
                  <b-avatar
                    variant="info"
                    class="img-fluid"
                    src="https://placekitten.com/300/300"
                  ></b-avatar>
                </b-col>
                <b-col cols="9" md="11" class="p-0 m-0 pr-3">
                  <b-input-group class="my-auto w-100 rounded">
                    <template #append>
                      <b-input-group-text class=""
                        ><strong class="clr">
                          <b-icon-cursor-fill></b-icon-cursor-fill> </strong
                      ></b-input-group-text>
                    </template>
                    <b-form-input
                      placeholder="Add A Comment"
                      class="border-right-0"
                    ></b-form-input>
                  </b-input-group>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import "@morioh/v-lightbox/dist/lightbox.css";

import Followers from "../../followers";
import Media from "../../media";
export default {
  name: "posts",
  components: {
    
    Followers,
    Media,
  },


  
  data() {
    return {
      images: [
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
        "https://i.wifegeek.com/200426/43e2e8bb.jpg",
      ],
      imagees: [
        "https://i.wifegeek.com/200426/f9459c52.jpg",
        "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
      ],
    };
  },



  methods: {
    chooseFiles: function() {
      console.log("helloo fucker");
        document.getElementById("fileUpload").click()
    }
    },



};
</script>

<style scoped>

.clr{
  color: #E75C18;
}
@media (max-width: 576px) {
  .lb-grid {
    height: 200px;
  }
}
@media (min-width: 576px) {
  .lb-grid {
    height: 300px;
  }
}

.avatar-size{
  width:60px;
  
}
@media (min-width: 768px) {
  .lb-grid {
    height: 350px;
  }
}
@media (min-width: 992px) {
  .lb-grid {
    height: 400px;
  }
}
@media (min-width: 1200px) {
  .lb-grid {
    height: 500px;
  }
}
@media (min-width: 1400px) {
  .lb-grid {
    height: 500px;
  }
}
</style>
