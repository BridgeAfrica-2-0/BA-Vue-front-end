<template>
  <div>
    <b-container fluid>
      <img
        src="@/assets/img/banner.jpg"
        class="img-fluid header-pic"
        alt="Kitten"
      />



      <div  class="container-fluid">
        <b-row class="mt-md-2">
          <b-col cols="10" md="6" class="m-0 p-0">
            <b-avatar
              src="https://placekitten.com/400/300"
              class=" float-left avat mr-5"
              badge-variant="primary"
              badge-offset="10px"
              size="70"
            >
            </b-avatar>

            <b-icon
              icon="camera-fill"
              class="avatar-header-icon btn cursor-pointer"
              v-b-modal.modal-4
            ></b-icon>



            <b-modal id="modal-4" title="Upload Profile Picture">
              <div class="w3-container">
                <div class="row pb-3">
                  <div
                    class="col-sm-6 text-center"
                    style="border-right:1px solid #dee2e6;"
                  >
                    <h1>
                      <fas-icon class="primary" :icon="['fas', 'upload']" />
                    </h1>
                    <div>
                      <input type="file" id="img" name="img" accept="image/*" />
                    </div>
                    <h4>Upload a New picture</h4>
                  </div>

                  <div class="col-sm-6 text-center">
                    <h1>
                      <fas-icon class="primary" :icon="['fas', 'edit']" />
                    </h1>
                    <h4>Edit Your New picture</h4>
                  </div>
                </div>
              </div>
            </b-modal>











            <!-- second modal box  to edit the big cover photo -->





            
            <b-modal id="coverphoto" title="Upload Profile Picture">
              <div class="w3-container">
                <div class="row pb-3">
                  <div
                    class="col-sm-6 text-center"
                    style="border-right:1px solid #dee2e6;"
                  >
                    <h1>
                      <fas-icon class="primary" :icon="['fas', 'upload']" />
                    </h1>
                    <div>
                      <input type="file" id="img" name="img" accept="image/*" />
                    </div>
                    <h4>Upload a New picture</h4>
                  </div>

                  <div class="col-sm-6 text-center">
                    <h1>
                      <fas-icon class="primary" :icon="['fas', 'edit']" />
                    </h1>
                    <h4>Edit Your New picture</h4>
                  </div>
                </div>
              </div>
            </b-modal>






            <div class="my-auto">
              <div class="text-box">
                <span>
                  <h5
                    class="font-weight-bolder m-0 p-0 ml-2 d-inline-block header-text1"
                  >
                    User Name
                  </h5>
                  
                  <br />
                  <p class="m-0 ml-2 d-inline-block header-text2">
                    1.5k Community
                  </p>
                </span>





               


              </div>
            </div>
          </b-col>

          <b-col cols="2" md="6" class="">
            <div class="my-auto options">
              <span class="float-right">
                
                
                <b-dropdown id="dropdown-1" class="float-right options" variant="primary">
                  <template #button-content>
                    <b-icon-three-dots></b-icon-three-dots>
                  </template>


      <b-dropdown-item
               v-b-modal.coverphoto >change cover photo</b-dropdown-item
                  >



                  <b-dropdown-item
                    >Invite Friends On Bridge Africa</b-dropdown-item
                  >



                  <b-dropdown-item>View As</b-dropdown-item>
                </b-dropdown>
              </span>
            </div>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "ownerheadPage"
};
</script>

<style scoped>
.avatar-header-icon {
  width: 2em;
  height: 2em;
  position: absolute;
  left: 57px;
  top: 51px;
  background-color: #e75c18;
  color: white;
  border-radius: 24px;
  padding: 6px;
}

.text-box {
  margin-top: 1.5rem;
  text-align: left;
}

.position-loup {
  display: none;
}

.img-avatar {
  width: 6em;
  height: 6em;
  margin-top: 10px;
}

@media (max-width: 575.98px) {
  .img-avatar {
    width: 5em;
    height: 5em;
    margin-top: 5px;
  }

  

  .avatar-header-icon {
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    left: 63px;
    top: 51px;    
    background-color: #e75c18;
    color: white;
    border-radius: 24px;
    padding: 4px;
  }

  .text-box {
    margin: 0px;
    margin-top: 7px;
    text-align: left;
  }

  .position-loup {
    margin-top: -27px;
    display: inherit;
  }
}
@media (max-width: 768px) {

  .options{
margin-right: -8px;
  }
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
}
@media (min-width: 1400px) {
  .img-avatar {
    width: 4em;
    height: 4em;
  }

  .header-group {
    float: right;
    margin-top: -20px;
    margin-right: 20px;
  }
}
</style>
