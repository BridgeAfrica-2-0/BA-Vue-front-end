<template>
  <div class="">

    <b-card v-if="networkShow">
      <div class="networks ml-4">
        

        <div class="ml-2 mt-2" >





       <b-row >  
         
         <b-col >  <div class="create" @click="addNetwork">
          <div class="text">
           
            <p>Add Network</p>
          </div>
        </div>  </b-col> 
         
         
         
         <b-col cols="12" md="4" v-for="post in posts" :key="post.id">   
                    
    <div class="people-style shadow">
      <b-row>
        <b-col md="6" xl="6" lg="6" cols="6"  sm="6">
          <div style="height: 100%;">
            <img
              src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
              width="100%"
              height="90%"
              class="r-image"
            />
          </div>
        </b-col>
        <b-col md="6" cols="6" sm="6">
         <p class="text">
            <strong> Shipping Network </strong> <br />  <br />
            Public <br />
             20k Members <br />
             Business Name <br />
            <b> Approved </b>
            
          </p>
        </b-col>

        
      </b-row>
    </div>
</b-col>    </b-row>







        </div>
      </div>
    </b-card>
    <div class="h-100 w-100" v-if="!networkShow">
      <div class="mx-auto text-center my-5">
        <h2 class="my-3">Builds networks around your Business</h2>
        <p class="my-2">Create network to stay in touch with just the people</p>
        <p class="my-2">you want Engage, share, Make Plans and much more</p>
        <p class="my-3"><b-button variant="primary">Add network</b-button></p>
      </div>
    </div>



    <b-modal hide-footer title="Add network"   size="lg"  v-model="showModal">

      <b-container>  
      <b-form>



      <span class="inline">     <div style="width: 20%;">
            <img
              src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
              width="100%"
              height="90%"
              class="r-image"
            />
          </div >   <span class="ml-3 fs-8"> Business Name <br />  Business Category </span> </span>  <br /> 


  




<div class="row sub-sidebar-2 pending-post-view mt-4 pb-0 ">

    <div class="col-md-12 col-lg-12 d-flex align-items-stretch mb-lg-0" style="padding-left: 0; padding-top: 3px;">
      <a class="nav-link text-dark" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <b-icon-info-circle-fill
            scale="1.5"
        ></b-icon-info-circle-fill>
      </a>
      <div class="post-pending pt-2">
        <p>Approval Required <br /> Bridge Africa admin will review your request to create a network and notify you upon approval you can the change the network settings and invite people to join your network   </p>
      </div>

    </div>

    </div>



    

              <b-form-group
                label-cols-lg="12"
                label="Network Name"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-input id="network_name" placeholder="" required>  </b-form-input>
              </b-form-group>

             
          
               

               <b-form-group
                label-cols-lg="12"
                label=" Brief Description"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Enter something..."
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>






          <b-form-group
                label-cols-lg="12"
                label="Purpose Of Network"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder=""
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>


           












              <b-form-group
                label-cols-lg="12"
                label="Special Needs"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder=" "
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>


          






            <b-form-group
                label-cols-md="6"
                label="Allow Business to join network"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-checkbox v-model="checked" name="check-button" switch>
                </b-form-checkbox>
              </b-form-group>




        <b-button class="mt-2 " style="float:right" variant="primary" > Add Network</b-button>
      </b-form>




       </b-container>



    </b-modal>












  </div>
</template>

<script>
export default {
  data() {
    return {
      networkShow: true,
      showModal: false,
      text: "",
      posts: [
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis."
        }
      ]
    };
  },
  methods: {
    openNetwork() {
      this.networkShow = false;
    },

    addNetwork() {
      this.showModal = !this.showModal;
    }
  }
};
</script>

<style scoped>

.post-pending{

  font-size: 12;
  text-align: left;
  
}
.no-network {
  width: 100%;
  height: 500px;
  background-color: #ccc;
  border-radius: 10px;
}

.white-box {
  position: relative;
  width: 60%;
  background-color: #fff;
  min-height: 200px;
  left: 200px;
  top: 100px;
  padding: 20px;
}

.prod {
  max-width: 14rem;
  cursor: pointer;
}

h2,
p {
  text-align: center;
}

.networks {
  display: flex;
  flex-wrap: wrap;
}

.approved {
  color: green;
}
.pending {
  color: yellow;
}

.network:hover .overlay {
  opacity: 0.5;
  color: #e75d29;
}

.network:hover .text-static {
  display: none;
}

.btn-view {
  background-color: transparent;
  border: none;
  color: white;
}

.btn-view:focus {
  outline-color: transparent;
  border: none;
}

.network-name {
  color: #e75d29;
  text-align: center;
}

.pic-name {
  position: relative;
  left: -200px;
  color: white;
  font-weight: 200;
  opacity: 0;
}

.sp:hover .pic-name {
  opacity: 1;
}

.pic {
  cursor: pointer;
  background-color: transparent;
}
.pic:hover {
  box-shadow: 5px 10px 8px 2px #888888;
}

.create {
  position: relative;
  height: 210px;
  color: #fff;
  background-color: #bbb;
  padding: 20px;
 
  height: 200px;
  margin: 30px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  margin-bottom: 10;
}

.text {
  margin-top: 50px;
}

.network {
  height: 190px;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .networks {
    position: relative;
    left: -25px;
  }

  .network {
    margin-top: 20px;
  }

  .create {
    height: 150px;
  }
  .text {
    margin-top: 30px;
  }

  .white-box {
    position: relative;
    width: 80%;
    background-color: #fff;
    min-height: 200px;
    left: 35px;
    top: 100px;
    padding: 20px;
  }
  .btn {
    margin-left: 60px;
  }
}




.row.sub-sidebar-2.pending-post-view {
  background-color: #8BD06C;
  border-color: #000;
  border: solid 3px;
}




@media only screen and (max-width: 760px) {

.btn{

font-size: 12px;
    width: 100px;

}

h4{
  font-size: 15px;
}


.pop{
  font-size: 15px;
}
}

.card {
  color: orange;
}

.s-button {
  align-content: center;
  text-align: center;

  padding: 15px;
}
.text {
  color: #000;
  font-size: 15px;

  text-align: left;

  margin-left: -15px;

  margin-right: -15px;
}
.stock {
  color: green;
}

.b1 {
  width: 100px;
  margin-left: -20px;
}

.b2 {
  width: 120px;

  margin-left: -15px;
}

.btn {
  font-size: 13px;

  display: flex;
}

.ico {
  margin-right: 5px;
}

.r-image {
  
 border-top-left-radius: 10px;

  border-bottom-left-radius: 10px;

  border-top-right-radius: 10px;

  border-bottom-right-radius: 10px;


  width: 100%;

height: 100%;
}

.people-style {
  border-top-left-radius: 10px;

  border-bottom-left-radius: 10px;

  border-top-right-radius: 5px;

  border-bottom-right-radius: 5px;

  background: white;

  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;
  margin-right: 8px;
 

}

h4{
  color: black;
}


.s-card{
  height:450px; 
  overflow: auto; 
  overflow-x: hidden;

}

.inline{

      display: inline-flex;
}


.fs-8{
  font-size: 15px;
}


</style>
