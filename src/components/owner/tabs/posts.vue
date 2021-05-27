<template>
  <div>
    <b-row>
      <b-col md="12" lg="5" xl="4" class="p-0 m-0">
        <b-card title="" header-tag="header" footer-tag="footer">
         
           <span class="m-3 ">

           <h6 class="mb-0 d-inline-block title "> <b> Intro  </b> </h6>
            <span class="float-right btn m-0 p-0 action-intro"  
            v-b-modal.modal-5

              ><b-icon icon="pencil-fill" variant="primary"></b-icon> Edit</span
            >
   

           </span>


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

        <Community />


        <Media />

      </b-col>
      <b-col md="12" lg="7" xl="8" class="m-0 p-0 px-lg-4">





   <Owner_post />


















      </b-col>
    </b-row>
  </div>
</template>

<script>
import "@morioh/v-lightbox/dist/lightbox.css";

import Followers from "../../followers";
import Community from "./comunitiDashboard";
import Owner_post from "./owner_post";
import Media from "../../media";
export default {
  name: "posts",
  components: {
    
    Followers,
    Media,
    Owner_post,
    Community,
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

.post-pic{
  max-width: 500px;
  max-height: 426px;
}

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


@media (min-width: 768px) {
  .profile-pic {
    width: 64px;
    height: 64px;
  }

  .comment-pic{
    width: 40px;
    height: 40px;
  }

}

@media (max-width: 768px) {
  .profile-pic {
    width: 40px;
    height: 40px;
  }

  .comment-pic{
    width: 36px;
    height: 36px;
  }

}



</style>
