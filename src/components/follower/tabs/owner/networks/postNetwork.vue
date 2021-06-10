<template>
<div>

    <b-card class="px-md-3 mb-3 mt-2">
    


     <b-row class="mt-2">
          <b-col cols="3" md="1" class="m-md-0 p-md-0">
            <b-avatar
                variant="primary"
                class="img-fluid avat-comment"
                src="https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg"
               
                

            ></b-avatar>
          </b-col>
          <b-col cols="9" md="11" class="p-0 m-0 pr-3">
            
            
            <input placeholder="Post a business update"   v-b-modal.modal-xl  class="comment" type="text" />

              <fas-icon
                class="primary send-cmt"
                :icon="['fas', 'paper-plane']"
              />

          </b-col>
        </b-row>





 <hr width="100%" class="m-up" />

 
  <b-row>    
       <b-col cols="12" md="12" class="m-0 p-0"> 


         <b-row  class="m-0 p-0">   <b-col cols="5" class="text-right m-0 p-0">     <b-button
                      title="Add Movie"
                      size="sm"
                     
                      variant="outline-primary"
                       @click="chooseVideo()"  
                        class="post-btn"
                  >
                     <fas-icon class="icons" :icon="['fas', 'photo-video']" size="lg" /> <span class="username"> Photo/Video </span>

                
                  </b-button>
                  
   </b-col>       <b-col cols="4" class="text-right m-0 p-0">    <b-button
                      title="Add Hyperlink"
                      size="sm"
                      variant="outline-primary"
                      
                       @click="chooseDocument()"
                       class="post-btn"
                  >
                     <fas-icon class="icons" :icon="['fas', 'file']" size="lg" /> <span class="username"> Attach File  </span>
                  </b-button>  </b-col>       
                  
                  
                  
                   <b-col cols="3" class="text-right p-0 m-0"> <b-button
                      title="Add Hyperlink"
                      size="sm"       
                      variant="outline-primary"
                      
                       @click="chooseDocument()"
                       class="post-btn"
                  >
                                                   
                     
                     
                     
                     
                     <fas-icon class="icons" :icon="['fas', 'paper-plane']" size="lg"  />
              
              
              
              <span class="username"> Post  </span>
                  </b-button>  </b-col> </b-row>
         
         
              
               </b-col>          </b-row>

               

 <div class="pending-post-view pt-2 mt-3">
        <p>Your 3 Post(s) are pending for approval.&nbsp;&nbsp;&nbsp;&nbsp;<a href="#" style="color: #e75c18; text-decoration:underline;">View All</a></p>
      </div>


       
   



       



    <div class="">

    <div class="col-md-12 col-lg-12 d-flex align-items-stretch mb-lg-0" style="padding-left: 0; padding-top: 3px;">
     
   <!-- <b-button v-b-modal.modal-xl variant="primary">xl modal</b-button> -->
      
  <b-modal id="modal-xl" centered hide-footer  title="Create Post">     
    
    
    
          


          <b-row>
             <b-col cols="1" class="m-0 p-0">  </b-col>
          <b-col cols="2"  class="m-0 p-0">
            <b-avatar
                class="d-inline-block avat"
                variant="primary"
                src="https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg"
               square
               rounded
            ></b-avatar>
          </b-col>
          <b-col cols="9"  class="pt-2" style="margin-left:-5px">
            <h5 class="m-0 font-weight-bolder">
               Agrobusiness
             
            </h5>
            
          </b-col>

         

        </b-row>


        



    
    
       <b-row>
      <b-col cols="1" md="1" class="m-0 p-0">
        
      </b-col>
      <b-col cols="10" md="10" class="m-0 p-0">



       


        
         
           
            



        <br />
        <div class="cursor">
        <b-form-textarea
            id="textarea-small"
           
            class="mb-2 border-none"
            placeholder="Post a business update"
        ></b-form-textarea>

        <i></i>
        </div>
   <div class="bordder">  
        <span class="float-left"> Add to Your Post  </span>
        <span class="float-right">
                <b-button-group size="sm" class="">
                  

                  
                      <input id="video" type="file" hidden>
                       <input id="image" type="file" hidden>
                        <input id="document" type="file" hidden>

                    
                      
                     
                  
                  <b-button
                      title="Add Movie"
                      size="sm"
                      
                      variant="outline-primary"
                       @click="chooseVideo()"  
                  >
                    <fas-icon class="icons" :icon="['fas', 'photo-video']" size="lg" />
                  </b-button>
                  <b-button
                      title="Add Hyperlink"
                      size="sm"
                      variant="outline-primary"
                       @click="chooseDocument()"
                  >
                  <fas-icon class="icons" :icon="['fas', 'file']" size="lg" /> 
                  </b-button>
                </b-button-group>
              </span>

   </div>
              <br />

        <span >
                <b-button variant="primary" block
                ><b-icon icon="cursor-fill" variant="primary"></b-icon>
                  Publish</b-button
                >
              </span>
      </b-col>

      <b-col cols="1" md="1" class="m-0 p-0">
        
      </b-col>



      
    </b-row>
    
    
    </b-modal>





    </div>

    </div>


  </b-card>



  <b-card class="mt-2">
    

    <b-row class="mt-4">
      <b-col cols="12" class="mt-4">
        <b-row>
          <b-col cols="2" md="1" class="m-0 p-0">
            <b-avatar
                class="d-inline-block avat"
                variant="primary"
                src="https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg"
                
                square
                rounded
            ></b-avatar>
          </b-col>
          <b-col cols="10" md="11" class="pt-2">
            <h5 class="m-0 font-weight-bolder">
              Heavy Gym
              <span class="float-right">
                      <b-dropdown variant="outline-primary" size="sm" no-caret>
                        <template #button-content>
                          <b-icon icon="three-dots" aria-hidden="true"  ></b-icon>
                        
                        </template>


                        <!--
                        <b-dropdown-item-button>
                          <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                          Locked <span class="sr-only">(Click to unlock)</span>
                        </b-dropdown-item-button>
                        <b-dropdown-divider></b-dropdown-divider>
                        
                        -->


                        <b-dropdown-item-button variant="info">
                          <b-icon icon="pencil" aria-hidden="true"></b-icon>
                          Edit
                        </b-dropdown-item-button>



                        <b-dropdown-item-button variant="danger">
                          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                          Delete
                        </b-dropdown-item-button>



                      </b-dropdown>
                    </span>
            </h5>
            <p class="duration">1h Ago</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" class="mt-2">
            <p class="post-text">
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
            <div class="">
            <img
                class="img-fluid post-container "
                src="https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg"
                alt="Photo1"
            />

            </div>
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
                variant="primary"
                class="img-fluid avat-comment"
                src="https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg"
               
                square

                rounded="xl"
            ></b-avatar>
          </b-col>
          <b-col cols="9" md="11" class="p-0 m-0 pr-3">
            
            
            <input placeholder="Post a Comment" class="comment" type="text" />

              <fas-icon
                class="primary send-cmt"
                :icon="['fas', 'paper-plane']"
              />

          </b-col>
        </b-row>

          <Comment />
      </b-col>
    </b-row>
   

  </b-card> 

  <b-card class="mt-2">

    <b-row class="mt-4">
      <b-col cols="12" class="mt-4">
        <b-row>
          <b-col cols="2" md="1" class="m-0 p-0">
            <b-avatar
                class="d-inline-block avat"
                variant="primary"
                src="https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg"
                square
                rounded
            ></b-avatar>
          </b-col>
          <b-col cols="10" md="11" class="pt-2">
            <h5 class="m-0 font-weight-bolder">
              Heavy Gym
              <span class="float-right">
                     

     <b-dropdown variant="outline-primary" size="sm" no-caret>
                        <template #button-content>
                          <b-icon icon="three-dots" aria-hidden="true"  ></b-icon>
                        
                        </template>


                        <!--
                        <b-dropdown-item-button>
                          <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                          Locked <span class="sr-only">(Click to unlock)</span>
                        </b-dropdown-item-button>
                        <b-dropdown-divider></b-dropdown-divider>
                        
                        -->


                        <b-dropdown-item-button variant="info">
                          <b-icon icon="pencil" aria-hidden="true"></b-icon>
                          Edit
                        </b-dropdown-item-button>



                        <b-dropdown-item-button variant="danger">
                          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                          Delete
                        </b-dropdown-item-button>



                      </b-dropdown>




                    </span>
            </h5>
            <p class="duration">1h Ago</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" class="mt-2">
            <p class="post-text">
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
                variant="primary"
                class="img-fluid avat-comment"
                src="https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg"
               
                square

                rounded="xl"
            ></b-avatar>
          </b-col>
          <b-col cols="9" md="11" class="p-0 m-0 pr-3">
            
            
            <input placeholder="Post a Comment" class="comment" type="text" />

              <fas-icon
                class="primary send-cmt"
                :icon="['fas', 'paper-plane']"
              />

          </b-col>
        </b-row>

          <Comment />
      </b-col>
    </b-row> 


  </b-card>    



  <b-card class="mt-2"> 

    <b-row class="mt-4">
      <b-col cols="12" class="mt-4">
        <b-row>
          <b-col cols="2" md="1" class="m-0 p-0">
            <b-avatar
                class="d-inline-block avat"
                variant="primary"
                src="https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg"
               square
               rounded
            ></b-avatar>
          </b-col>
          <b-col cols="10" md="11" class="pt-2">
            <h5 class="m-0 font-weight-bolder">
              Heavy Gym
              <span class="float-right">
                     <b-dropdown variant="outline-primary" size="sm" no-caret>
                        <template #button-content>
                          <b-icon icon="three-dots" aria-hidden="true"  ></b-icon>
                        
                        </template>


                        <!--
                        <b-dropdown-item-button>
                          <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                          Locked <span class="sr-only">(Click to unlock)</span>
                        </b-dropdown-item-button>
                        <b-dropdown-divider></b-dropdown-divider>
                        
                        -->


                        <b-dropdown-item-button variant="info">
                          <b-icon icon="pencil" aria-hidden="true"></b-icon>
                          Edit
                        </b-dropdown-item-button>



                        <b-dropdown-item-button variant="danger">
                          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                          Delete
                        </b-dropdown-item-button>



                      </b-dropdown>
                    </span>
            </h5>
            <p class="duration">1h Ago</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" class="mt-2">
            <p class="post-text">
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
          <b-col cols="12">
            <b-row class="mt-2">
              <b-col cols="3" md="1" class="m-md-0 p-md-0">
                <b-avatar
                    variant="primary"
                    class="img-fluid avat-comment "
                
                    src="https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg"
                    square
                ></b-avatar>
              </b-col>
              <b-col cols="9" md="11" class="p-0 m-0 pr-3">
              
              
            <input placeholder="Post a Comment" class="comment" type="text" />

              <fas-icon
                class="primary send-cmt"
                :icon="['fas', 'paper-plane']"
              />

              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>


  </b-card>  



  <b-card class="mt-2">

    <b-row class="mt-4">
      <b-col cols="12" class="mt-4">
        <b-row>
          <b-col cols="2" md="1" class="m-0 p-0">
            <b-avatar
                class="d-inline-block avat"
                variant="info"
                src="https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg"
               square
               rounded="xl"
            ></b-avatar>
          </b-col>
          <b-col cols="10" md="11" class="pt-2">
            <h5 class="m-0 font-weight-bolder">
              Heavy Gym
              <span class="float-right">
                      <b-dropdown variant="outline-primary" size="sm" no-caret>
                        <template #button-content>
                          <b-icon icon="three-dots" aria-hidden="true"  ></b-icon>
                        
                        </template>


                        <!--
                        <b-dropdown-item-button>
                          <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                          Locked <span class="sr-only">(Click to unlock)</span>
                        </b-dropdown-item-button>
                        <b-dropdown-divider></b-dropdown-divider>
                        
                        -->


                        <b-dropdown-item-button variant="info">
                          <b-icon icon="pencil" aria-hidden="true"></b-icon>
                          Edit
                        </b-dropdown-item-button>



                        <b-dropdown-item-button variant="danger">
                          <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                          Delete
                        </b-dropdown-item-button>



                      </b-dropdown>
                    </span>
            </h5>
            <p class="duration">1h Ago</p>
          </b-col>
        </b-row>
        <b-row>
          <b-col cols="12" class="mt-2">
            <p class="post-text">  
              Lorem Ipsum has been the industry's standard dummy text ever
              since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.😛
            </p>
          </b-col>
        </b-row>
        <b-row>
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
          <b-col cols="12">
            <b-row class="mt-2">
              <b-col cols="3" md="1" class="m-md-0 p-md-0">
                <b-avatar
                    variant="primary"
                    class="img-fluid avat-comment"
                    src="https://www.fivesquid.com/pics/t2/1594480468-145752-1-1.jpg"
                    
                    square
                ></b-avatar>
              </b-col>
              <b-col cols="9" md="11" class="p-0 m-0 pr-3">
                <b-input-group class="my-auto w-100 rounded">
                 
                 
                 
            <input placeholder="Post a Comment" class="comment" type="text" />

              <fas-icon
                class="primary send-cmt"
                :icon="['fas', 'paper-plane']"
              />

                </b-input-group>
              </b-col>
            </b-row>
          </b-col>

            <Comment />
        </b-row>
      </b-col>
    </b-row>
  </b-card>


</div>            
</template>

<script>
import Comment from "./comment";

export default {
name: "postNetwork",
 components: {
    Comment
    
    
    
  },
  data() {
    return {
      images: [
        "https://i.wifegeek.com/200426/f9459c52.jpg",
          "https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
        "https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg",
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
      imagees: [
          "https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
        "https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg"
      ]
    };
  },




  
  methods: {
   


    chooseImage: function() {
     
        document.getElementById("image").click()
    },


chooseVideo: function() {
     
        document.getElementById("video").click()
    },



chooseDocument: function() {
   
        document.getElementById("document").click()
    },




    showModal() {
        this.$refs['modal-3'].show()
      },
      hideModal() {
        this.$refs['modal-3'].hide()
      },

     

  }
}

</script>

<style scoped>


    .pending-post-view {
  background-color: #8BD06C;
  border-color: #000;
  border: solid 3px;
}




.action-intro {
  font-size: 1rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
      
.row.sub-sidebar-2.pending-post-view {
  background-color: #8BD06C;
  border-color: #000;
  border: solid 3px;
}

.color-site {
  color: #e75c18;
}




@media (min-width: 762px) {

.avat{
     
      width: 64px;
      height: 64px;  
}   



.send-cmt {
  position: relative;
  margin-left: 95%;
  top: -28px;
  cursor: pointer;
}



.post-btn{

  border: none !important;
    margin-right: 50px;
}


.post-container{
  max-width: 500px;
  max-height: 462px;
}



.post-text{
     

     font-size: 14px;
      font-family: Arial, Helvetica, sans-serif;
}

.avat-comment{
   width: 40px;
      height: 40px;  
}



}



@media (max-width: 762px) {


  .post-btn{

  border: none !important;
    margin-right: 0px;
}


.send-cmt {
  position: relative;
  margin-left: 90%;
  top: -28px;
  cursor: pointer;
}


.avat{
     
      width: 40px;
      height: 40px;  
}   


.avat-comment{
   width: 36px;
      height: 36px;  
}


.post-text{
     

     font-size: 12px;
      font-family: Arial, Helvetica, sans-serif;
}




}


.comment-box{


    margin-left: -40px;
    position: relative;
    background-color: white;
   
   

}


.comment-input{
   border-radius: 24px;
   height: 34px;
   width:315px;
}




.comment {
  width: 100%;
  border: solid 1px #ccc;
  border-radius: 25px;
  background-color: #ddd;
  height: 34px;
  padding-left: 10px;
}
.comment:focus {
  outline: none;
}

.time {
  position: relative;
  margin-left: 80px;
  top: -28px;
}

.border-none{
  border: none;
  height: 100px;

}


.cursor {
	position: relative;
}
.cursor	i {
	position: absolute;
	width: 1px;
	height: 20%;
	background-color: gray;
	left: 5px;
	top: 10%;
	animation-name: blink;
	animation-duration: 800ms;
	animation-iteration-count: infinite;
	opacity: 1;
}


.cursor input:focus + i {
	display: none;
}



@keyframes blink {
	from { opacity: 1; }
	to { opacity: 0; }
}

.bordder{

  border: 1px solid #e75c18 ;
  height: 50px;
  padding: 6px;
}

.username{
  color: black;
}


.btn{
  border-radius: 5px;
  text-align: center;    

}

.btn:hover{
  background-color: #ccc;
}

</style>

<style> 


.lb-grid {
    height: 274px;
    margin-bottom: 8px;
}




.m-up{

  margin-top:-5px;
 
}

</style>