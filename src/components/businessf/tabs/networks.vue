<template>
  <div>
    <b-card v-if="networkShow">
        

<div class="s-card">
  <b-row>    <b-col md="12" lg="6" cols="12"  sm="12" class="mt-sm-2">    

 
                  
    <div class="people-style shadow">
      <b-row>
        <b-col md="3" cols="5" sm="5">
          <div style="height: 100%;">
            <img
              src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
              width="100%"
              height="90%"
              class="r-image"
            />
          </div>
        </b-col>
        <b-col md="6" cols="7" sm="7">
         <p class="text">
            <strong> Shipping Network </strong> <br />  <br />
            Public <br />
             20k Members <br />
             Business Name <br />
            
          </p>
        </b-col>

        <b-col md="3" cols="12" sm="12">
          <div class="s-button">
     <b-row>  <b-col md="12" cols="4" sm="4" class="mt-md-2">    

            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon class="ico" icon="plus-circle"> </b-icon> Community
            </b-button>

            </b-col>  

        <b-col md="12" sm="4" cols="4" class="mt-md-2">  

            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon class="ico" icon="chat"> </b-icon> Message
            </b-button>

            </b-col>  

            <b-col md="12" sm="4" cols="4" class="mt-md-2">  

            

            </b-col>  
   </b-row>

          </div>
        </b-col>
      </b-row>
    </div>

 </b-col>     <b-col lg="6"  md="12"  sm="12" class="mt-sm-2">  







    <div class="people-style shadow">
      <b-row>
        <b-col md="3" cols="5" sm="5">
          <div style="height: 100%;">
            <img
              src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
              width="100%"
              height="90%"
              class="r-image"
            />
          </div>
        </b-col>
        <b-col md="6" cols="7" sm="7">
         <p class="text">
            <strong> Shipping Network </strong> <br />  <br />
            Public <br />
             20k Members <br />
             Business Name <br />
            
          </p>
        </b-col>

        <b-col md="3" cols="12" sm="12">
          <div class="s-button">
     <b-row>  <b-col md="12" cols="4" sm="4" class="mt-md-2">    

            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon class="ico" icon="plus-circle"> </b-icon> Community
            </b-button>

            </b-col>  

        <b-col md="12" sm="4" cols="4" class="mt-md-2">  

            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon class="ico" icon="chat"> </b-icon> Message
            </b-button>

            </b-col>  

            <b-col md="12" sm="4" cols="4" class="mt-md-2">  

            

            </b-col>  
   </b-row>

          </div>
        </b-col>
      </b-row>
    </div>






 </b-col>  </b-row>






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

    <b-modal hide-footer title="Add network" v-model="showModal">
      <b-form>
        <b-form-input v-model="text" placeholder="network name"></b-form-input>
        <b-form-file class="mt-1" id="file-small" size="sm"></b-form-file>
        <b-button class="mt-2 " variant="primary"> Add</b-button>
      </b-form>
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
      data: [{ type: "minus" }, { type: "plus" }],
      posts: [
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
          state: "1",
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
        },
        {
          id: 1,
          image: "https://picsum.photos/300/150/?image=41",
          title: "Title 2",
          text:
            " Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit, earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.",
          state: "1",
        },
      ],
    };
  },
  methods: {
    openNetwork() {
      this.networkShow = false;
    },

    addNetwork() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style scoped>
.no-network {
  width: 100%;
  height: 500px;
  background-color: #ccc;
  border-radius: 10px;
  padding: 30px;
  margin-top: 10px;
}








@media only screen and (max-width: 768px) {
  




.btn {
  font-size: 10px;

  display: flex;

    padding-right: 90px;
}

h4{
  font-size: 15px;
}

}



.logo-img{

  width: 60px;
}



@media only screen and (min-width: 768px) {
  


.logo-img{

  width: 30px;
}

.see-all-link{
  font-size: 10px;
}

.btn {
  font-size: 10px;

  display: flex;

    padding-right: 90px;

        margin-left: -40px;
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
  margin-right:10px;

  background: white;

  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;
 

}


.s-card{
  height:450px; 
  overflow: auto; 
  overflow-x: hidden;
  border-radius:10px;
}

h4{
  color:black;
}


</style>
