
<template>
  <div>




           

                    
    <div class="people-style shadow">
      <b-row>
        <b-col cols="6" lg="4">
          <div >
            <img
              src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
              
              class="r-image"
            />
          </div>

          
        </b-col>
        <b-col cols="6" >
         <p class="text">
            <strong class="title"> Sneakers Blec cc </strong> <br /> <strong> Description </strong>  <br />
            This is just a dummy text dumy dummy things are always dummy and dummy add  things are always dummy  hjykt   
            <b-link> see more   </b-link>   <br />
             
            <span class="price"> <strong> 12,000 Fcfa  </strong> </span> <br />
            
          </p>
        </b-col>

        

        
      </b-row>


      <div>


          <span class="marketbtn"> <b-button variant="primary" class="buybtn" @click="productDetails" > Buy </b-button>  <b-button variant="primary" class="buybtn"> Visit Shop </b-button>  </span>
            
          <br />    

        </div>


    </div>







                    
    <div class="people-style shadow">
      <b-row>
        <b-col cols="6" lg="4">
          <div style="height: 100%;">
            <img
              src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
              width="100%"
              height="90%"
              class="r-image"
            />
          </div>

          
        </b-col>
        <b-col cols="6" >
         <p class="text">
            <strong class="title"> Sneakers Blec cc </strong> <br /> <strong> Description </strong>  <br />
            This is just a dummy text dumy dummy things are always dummy and dummy    things are always dummy add hjykt   
            <b-link> see more   </b-link>   <br />
             
            <span class="price"> <strong> 12,000 Fcfa  </strong> </span> <br />
            
          </p>
        </b-col>

        

        
      </b-row>


      <div>


          <span class="marketbtn"> <b-button variant="primary" class="buybtn" @click="productDetails" > Buy </b-button>  <b-button variant="primary" class="buybtn"> Visit Shop </b-button>  </span>
            
          <br />    

        </div>

        
    </div>















      


           <div class=" ">







    <b-modal
      v-model="viewProduct"
      hide-footer
      title="Product Details"
      size="xl"
    >
      <b-row>
        <b-col cols="5" class="mx-auto">
          <b-img
            class="img-fluid"
            src="https://picsum.photos/600/300/?image=25"
          ></b-img>
        </b-col>
        <b-col>
          <h2 class="mb-4 text-center">Product Name</h2>
          <p><span class="stock">In Stock</span></p>
          <p>0.00 XAF</p>
          <hr />
          <b-row>
            <b-col>
              <b-button variant="primary">Message</b-button>
            </b-col>
            <b-col>
              <b-button variant="outline-dark" class="float-right"
                >Checkout on website</b-button
              >
            </b-col>
          </b-row>
          <hr />
          <h5>Product Detail</h5>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quod, reprehenderit neque atque recusandae laborum quia vel,
            assumenda repellendus rem ab ex, odio aperiam quidem id deleniti
            commodi consequatur optio.
          </p>
          <hr />
          <b-row>
            <b-col class="">
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
            <b-col class="">
              <b-icon
                class="float-right"
                icon="share-fill"
                variant="primary"
                aria-hidden="true"
              ></b-icon>
            </b-col>
          </b-row>
          <br />
          <b-row class="mt-2">
            <b-col>
              <b-avatar
                variant="info"
                src="https://placekitten.com/300/300"
                size="2rem"
              ></b-avatar>
              <input placeholder="Post a Comment" class="comment" type="text" />

              <fas-icon
                class="primary send-cmt"
                :icon="['fas', 'paper-plane']"
              />
            </b-col>
          </b-row>
          <Comment />
          <b-row>
            <b-col class="col-1"></b-col>
            <b-col>
              <Comment />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-modal>











           </div>


  </div>
</template>

<script>
import Comment from "@/components/comment";
export default {
  data() {
    return {
      viewProduct: false,
    };
  },
  components: {
    Comment,
  },
  methods: {
    /**
     * Used to view produduct details
     * @param id
     * @return void
     */
    productDetails() {
      this.viewProduct = true;
    },
  },
};
</script>

<style scoped>

.buybtn{
  width: 100px;
}

.marketbtn{
  margin-left: 30px;
  margin-bottom: 3px;
}

.price{

  font-size: 18px;
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
  padding: 3px;
  padding-bottom:6px;
 

}


@media only screen and (max-width: 768px) {



  
.text {
  color: #000;
  
    font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117,114,128,1);
    text-align: left;

Font-weight: normal ;
Line-height:20px ;
font-style:normal;


padding: 1px;
  text-align: left;

  margin-left: -30px;

  margin-right: -5px;

  line-height: 25px;
}



.r-image {
  
 border-top-left-radius: 10px;

  border-bottom-left-radius: 10px;

  border-top-right-radius: 10px;

  border-bottom-right-radius: 10px;


  width: 125px;

height: 125px;
padding: 4px;
}


.title{
  font-size: 16px;
   color:black;
 
 line-height: 35px;
  font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
}



}




@media only screen and (min-width: 768px) {




title{
  font-size: 20px;
   color:black;
 
 line-height: 35px;
  font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
}

.text {
  color: #000;
  
    font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117,114,128,1);
    text-align: left;

Font-weight: normal ;
Line-height:20px ;
font-style:normal;


padding: 1px;
  text-align: left;

  margin-left: -10px;

  margin-right: -5px;

  line-height: 25px;
}




.r-image {
  
 border-top-left-radius: 10px;

  border-bottom-left-radius: 10px;

  border-top-right-radius: 10px;

  border-bottom-right-radius: 10px;


  width: 200px;

height: 200px;
padding: 4px;
}


}




.discount {
  color: orange;
  margin-left: 60px;
}

p {
  text-align: left;
}

input {
  border-radius: 15px;
  padding: 5px;
  border: solid 1px #ccc;
  width: 250px;
}
input:focus {
  outline-color: none;
  border: none;
}
.post {
  position: relative;
  left: -24px;
}

.prod {
  max-width: 14rem;
  cursor: pointer;
}
.stock {
  color: green;
}
.btn:focus {
  outline: none;
}
.comment {
  width: 90%;
  border: solid 1px #ccc;
  border-radius: 25px;
  background-color: #ddd;
  height: 35px;
  padding-left: 10px;
  margin-left: 20px;
}
.comment:focus {
  outline: none;
}
.send-cmt {
  position: relative;
  margin-left: 93%;
  top: -28px;
  cursor: pointer;
}

h6 {
  text-align: center;
  font-weight: bold;
}
.short {
  text-align: center;
}
.price {
  text-align: center;
}
.buy {
  border-radius: 0px;
  width: 100%;
}
.reply {
  cursor: pointer;
}
</style>
