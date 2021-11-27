<template>
  <div>

  {{album}}
    <div class="row">
      <div class="container-fluid">
        <b-modal
          id="modalxl"
          ref="modalxl"
          centered
          hide-footer
          :title=" $t('businessowner.Upoad_Image')"
        >

        <br>   




    <div id="preview" ref="preview">
    <img v-if="img_url" :src="img_url" />

    

  </div>


  <br>
          <b-form-textarea id="textarea-small"
                    class="mb-2 border-none"
                    v-model="text"
                    :placeholder=" $t('businessowner.Enter_a_description') "> </b-form-textarea>

                    <br>

          <b-button @click="submitPost" variant="primary" block
            ><b-icon icon="cursor-fill" variant="primary"></b-icon>
             {{ $t('businessowner.Publish') }}</b-button
          >
        </b-modal>



         <div class="createp img-gall image-wrapp">
            <div class="">

               <input
            type="file"
            id="chosefile"
            @change="selectMoviesOutsidePost"
            accept="video/mpeg, video/mp4, image/*"
            hidden
            ref="movie"
          />

              <a  @click="$refs.movie.click()"  >
                <div class="drag-textt">
                  <fas-icon :icon="['fas', 'plus']" />
                  <h3> {{ $t('businessowner.Add_Item') }}</h3>
                </div>
              </a>
            </div>
          </div>





    <b-modal hide-footer size="xl"  id="Details" ref="Details">

            <img class="card-img"  :src="show_url"  alt="" />
            
           
          </b-modal>
        



        <div class="img-gall"   v-for="pictures in pictures" :key="pictures.id" >
          <a
            ><img
              class="card-img btn p-0 album-img"
             
              :src="pictures.media_url"
              alt=""
             @click="showPic(pictures.media_url)"
          /></a>   

         
          <div class="mediadesc">
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown m-0 p-0">
                <b-dropdown
                    size="sm"
                    class=" call-action"
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                  >
                    <template #button-content>

                      <b-icon icon="three-dots-vertical" color="white" variant="light" >   </b-icon>

                      


                    </template>
                 
                  <b-dropdown-item  @click="downloadPic(pictures.id)" > {{ $t('businessowner.Download') }}</b-dropdown-item>
                  <b-dropdown-item   @click="setProfilePic(pictures.id)"
                    > {{ $t('businessowner.Make_Profile_Picture') }}</b-dropdown-item
                  >
                  <b-dropdown-item @click="setCoverPic(pictures.id)" > {{ $t('businessowner.Make_Cover_Photo') }}</b-dropdown-item>
                  <b-dropdown-item   @click="deleteImage(pictures.id)" href="#"> {{ $t('businessowner.Delete') }}</b-dropdown-item>

                </b-dropdown>
              </li>
            </ul>
          </div>
        </div>

      
        
       
      <infinite-loading :identifier="infiniteId"   ref="infiniteLoading"   @infinite="infiniteHandler"></infinite-loading>



















        
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  props:['album'],
  

   computed: {
    pictures() {
      return this.$store.state.businessOwner.albumImages;
   
    },
  },

  methods: {


   
     infiniteHandler($state) {
     let urll="business/album/show/" + this.url + "/" + this.album+"/"+this.page
    this.$store.dispatch("profileOwner/loadMore",urll)
        .then(({ data }) => {
          console.log(data.data.media);
          if (data.data.media.length) { 
            this.page += 1;

            this.pictures.push(...data.data.media);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
   


    showPic(url){
      
      console.log(url);
         this.show_url=url;
         this.$refs["Details"].show();

    },


     downloadPic(image_id){

     

         console.log("downloading");


       
           let loader = this.$loading.show({
        container: this.fullPage,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });



       axios
        .get("business/download/media/" +this.url + "/" + image_id, {
          
        })
        .then((response) => {
         


          var fileURL = window.URL.createObjectURL(new Blob([response.data]));
     var fileLink = document.createElement('a');
  
     fileLink.href = fileURL;
     fileLink.setAttribute('download', 'file.jpg');
     document.body.appendChild(fileLink);
   
     fileLink.click();


          this.flashMessage.show({
            status: "success",

            message: "Image Downloaded",
          });

          loader.hide();
        }) .catch((err) => {
        this.sending = false;

        if (err.response.status == 422) {
          console.log({ err: err });

          this.flashMessage.show({
            status: "error",

            message: err.response.data.message,
          });

          loader.hide();
        } else {
          this.flashMessage.show({
            status: "error",

            message: "Unable to download ",
          });
          console.log({ err: err });

          loader.hide();
        }
      });




    },

    
    deleteImage(image_id) {    


      console.log("deleting ----------")

          
           let loader = this.$loading.show({
        container: this.fullPage,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });



       axios
        .post("business/delete/media/" +this.url + "/" + image_id, {
          name: this.name,
        })
        .then((response) => {
          console.log(response.data);

          this.flashMessage.show({
            status: "success",

            message: "Album Deleted",
          });

          loader.hide();
        }) .catch((err) => {
        this.sending = false;

        if (err.response.status == 422) {
          console.log({ err: err });

          this.flashMessage.show({
            status: "error",

            message: err.response.data.message,
          });

          loader.hide();
        } else {
          this.flashMessage.show({
            status: "error",

            message: "Unable to Delete your Image",
          });
          console.log({ err: err });

          loader.hide();
        }
      });



    },



//set an image as a cover photo





    setCoverPic(image_id) {

          
           let loader = this.$loading.show({
        container: this.fullPage,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });



       axios
        .post("business/make/coverpic/" +this.url + "/" +image_id, {
          name: this.name,
        })
        .then((response) => {
          console.log(response.data);

          this.flashMessage.show({
            status: "success",

            message: "cover Picture succesfully set",
          });

          loader.hide();
        }) .catch((err) => {
        this.sending = false;

        if (err.response.status == 422) {
          console.log({ err: err });

          this.flashMessage.show({
            status: "error",

            message: err.response.data.message,
          });

          loader.hide();
        } else {
          this.flashMessage.show({
            status: "error",

            message: "Unable to set your cover picture",
          });
          console.log({ err: err });

          loader.hide();
        }
      });



    },






    //set image as profile pic


    
    setProfilePic(image_id) {

          let self = this;  

   
           let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.creatform,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });



       axios
        .post("business/album/edit/" +this.url + "/" + self.album_id, {
          name: this.name,
        })
        .then((response) => {
          console.log(response.data);

          this.flashMessage.show({
            status: "success",

            message: "Profile Picture set",
          });

          loader.hide();
        }) .catch((err) => {
        this.sending = false;

        if (err.response.status == 422) {
          console.log({ err: err });

          this.flashMessage.show({
            status: "error",

            message: err.response.data.message,
          });

          loader.hide();
        } else {
          this.flashMessage.show({
            status: "error",

            message: "Unable to set your profile pic",
          });
          console.log({ err: err });

          loader.hide();
        }
      });



    },






    submitPost(){
     
        

        let loader = this.$loading.show({
                   
                    container: this.fullPage ? null : this.$refs.preview,
                    canCancel: true,
                    onCancel: this.onCancel,
                    color:"#e75c18"
                });


       let formData = new FormData();
        formData.append("media", this.profile_pic);

        formData.append("dob", this.text);


       this.axios
          .post("business/store/media/"+this.url+"/"+this.album, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((response) => {
            console.log(response);

           

            this.flashMessage.show({
              status: "success",

              message: "Profile Updated",

              blockClass: "custom-block-class",
            });


             loader.hide()
      this.$refs["modalxl"].hide();

          })

            .catch((err) => {
            console.log({ err: err });

            

            if (err.response.status == 422) {
              console.log({ err: err });
              

              this.flashMessage.show({
                status: "error",

                message: err.response.data.message,
                blockClass: "custom-block-class",
              });


               loader.hide()
      

            } else {
              this.flashMessage.show({
                status: "error",
                
                message: "Unable to upload your image",
                blockClass: "custom-block-class",
              });
              console.log({ err: err });

               loader.hide()
     
            }

          });





    },
    selectMoviesOutsidePost(e) {
      this.profile_pic = e.target.files[0];
      const file = e.target.files[0];
      this.img_url = URL.createObjectURL(file);

      console.log(this.img_url);

       this.$refs["modalxl"].show();

    },

    onClick(i) {
      this.index = i;
    },
  },


   mounted() {
    this.url = this.$route.params.id;
  },


 watch: {
        album: function(newVal) { 
           this.album_id = newVal
        }
      }
      ,
  data: function () {
    return {

      show_url:null,
      album_id:null,
      url:null,
      fullPage:null,
      img_url: null,
      profile_pic: null,
      text:null,
      page:1,
    
      
      infiniteId: +new Date(),
     
      index: 0,
    };
  },
};
</script>

<style scoped>


.call-action{

  border-radius: 50%;
  background: gray;
  height: 30px !important;
  width: 30px !important;
  font-weight: 50px !important;
  text-align: center;
  padding-right: 35px !important;
}
.text-design {
  align-items: first baseline;
}

.drop-color {
  color: black;
}

.botmediadess {
   
    text-align: center;
    bottom: -5%;
    width: 100%;
    font-size: 20px;
}



@media (min-width: 960px) {
  .album-img{

  height: 200px !important;
    object-fit: cover !important;
       
}


.drag-textt {
    
    height: 290px !important;
        padding-top: 95px;
}


  .img-gall {
    background-size: contain;
    cursor: pointer;
    margin: 10px;
    border-radius: 3px;
  }

  .image-wrapp {
    border: 4px dashed #e75c18;
    position: relative;

    position: relative;
    margin: 5px;
    float: left;
   
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }

  .img-gall {
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
    height: 200px;
  }

  @media (min-width: 1400px) {
    .lb-grid {
      height: 274px;
      margin-bottom: 8px;
    }
  }

  .img-gall {
    position: relative;
    margin: 5px;
    float: left;
    width: 19.1%;
    height: 200px;
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }

  .image-wrapp {
    border: 4px dashed #e75c18;
    position: relative;

    position: relative;
    margin: 5px;
    float: left;
   
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1331px) {

  .album-img{

  height: 300px !important;
    object-fit: cover !important;
}


.drag-textt {
    
    height: 290px !important;
        padding-top: 95px;
}



  .img-gall {
    background-size: contain;
    cursor: pointer;
    margin: 10px;
    border-radius: 3px;
  }

  .img-gall {
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

  .image-wrapp {
    border: 4px dashed #e75c18;
    position: relative;

    position: relative;
    margin: 5px;
    float: left;
   
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
}

@media (max-width: 762px) {

  .album-img{

  height: 200px !important;
    object-fit: cover !important;
}


.drag-textt {
    
    height: 190px !important;
        padding-top: 55px;
}



  .img-gall {
    background-size: contain;
    cursor: pointer;
    margin: 10px;
    border-radius: 3px;
  }

  .img-gall {
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

  .image-wrapp {
    border: 4px dashed #e75c18;
    position: relative;

    position: relative;
    margin: 5px;
    float: left;
   
    transition-duration: 0.4s;
    border-radius: 5px;
    -webkit-animation: winanim 0.5s;
    animation: winanim 0.5s;
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
  }
}

.drag-textt {
  text-align: center;
  font-weight: 100;
  text-transform: uppercase;
  color: #000;
}
</style>
