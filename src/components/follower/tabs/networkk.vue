<template>
  <div>

    <fas-icon
      class="primary mr-2 pt-1 icon-size primary"
      :icon="['fas', 'handshake']"
    />
    {{ $t('profilefollower.Network') }}

    <hr />
    <b-modal id="modal-sm" size="sm" hide-header>
      {{ $t('profilefollower.Do_you_want_to_join_this_network') }} 
    </b-modal>


    <b-row>
        <b-col lg="6" sm="12" class="p-2 mb-2" v-for="item in network" :key="item.id">

    <div class="people-style shadow h-100">
      <b-row>
        <b-col md="3" xl="3" lg="3" cols="5" sm="3">  
          <div class="center-img">
            <img :src="item.image" class="r-image" />
          </div>
        </b-col>
        <b-col md="5" cols="7"  lg="7" xl="5" sm="5">
         

          <p class="textt">
            <strong class="net-title"> {{ item.name }} </strong> <br />
             <span class="m-1" v-for=" cat in item.categories" :key="cat "> {{cat}}  </span>
            <br />
            {{ item.followers }} {{ $t('profilefollower.Community') }} <br />

            <span class="location">
              <b-icon-geo-alt class="ico"></b-icon-geo-alt>
             {{ item.address }}
            </span>
            <br />

            <read-more
                v-if="item.description"
                more-str="read more"
                :text="item.description"
                link="#"
                less-str="read less"
                :max-chars="200"
              ></read-more>
          </p>
        </b-col>

        <b-col lg="12" md="4" xl="4" cols="12" sm="4">
          <div class="s-button">
            <b-row>
              <b-col md="12" lg="4" xl="12" sm="12" cols="4" class="mt-2">
                <b-button
                  block
                  size="sm"
                  class="b-background shadow"
                  variant="primary"
                >
                  <i class="fas fa-user-plus  fa-lg btn-icon "></i>
                  <span class="btn-com" v-b-modal.modal-sm>{{ $t('profilefollower.Community') }}</span>
                </b-button>
              </b-col>

              <b-col md="12" lg="4" xl="12" sm="12" cols="4" class="mt-2">
                <b-button
                  block
                  size="sm"
                  class="b-background shadow"
                  variant="primary"

                  ><i class="fas fa-envelope   fa-lg btn-icon "></i>
                  <span class="btn-text">{{ $t('profilefollower.Message') }}</span>
                </b-button>
              </b-col>

            <b-col md="12"  lg="4"  xl="12" sm="12" cols="4" class="mt-2"> 

            

            </b-col>  
   </b-row>

          </div>
        </b-col>
      </b-row>
    </div>
        </b-col>
        
    </b-row>

     <infinite-loading @infinite="infiniteHandler"></infinite-loading> 

  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["type"],
   data() {
    return {
      page: 1,
      foll_id:'',
       options: {
        rewind: true,
        autoplay: true,
        perPage: 1,
        pagination: false,

        type: "loop",
        perMove: 1
      }
    };
  },
  computed: {
   
        network(){
 
      

         return  this.$store.state.follower.profileNetwork; 
       
   }
   
  },



   mounted(){

      this.foll_id = this.$route.params.id;
     
  },

  methods:{ 

    
      
       infiniteHandler($state) {

     let url = "network?page=" + this.page+"&id="+this.foll_id;

         
          console.log( "network?page=" + this.page+"&id="+this.foll_id);
          if(this.page==1){
        
         this.network.splice(0);
        
      }
         
      axios
        .get(url + this.page)
        .then(({ data }) => {
          console.log(data.data);
          if (data.data.length) {
            
   if(this.page==1){
            this.network.push(...data.data); 
   }   
   this.page += 1;

            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

  }
  

};
</script>

<style scoped>


@media only screen and (min-width: 768px) {
.btn-text{

   margin-left: 8px;
}

.btn-com{
  margin-left:4px;
}
.btn-icon{
  margin-top:3px;
}

.center-img{
  margin-right: -60px;
}


}


@media only screen and (max-width: 768px) {

    

    .btn-icon{
  margin-top:3px;
}


.btn-text{

   margin-left: 5px;
}


.btn-com{
  margin-left:3px;
}


}

.btnpngs{
      width: 20px;
    margin-right: 5px;
}

.btn{
  border-radius: 5px;
}




.card {
  color: orange;
}

.s-button {
  align-content: center;
  text-align: center;

  padding: 15px;
}







@media only screen and (max-width: 768px) {
   .a-flex{
     margin-right: -15px;
   }


  .s-button {
  

  padding: 15px;
  margin-top: -15px;
}

.net-title{
  font-size: 16px;
   color:black;
 
 line-height: 35px;
  font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
}

.textt {
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

.location{

  margin-bottom: 30px;
}

.btn{
  padding-top: 6px;
  font-size:10px;

  Height : 28px;
Width:85px

}



.r-image {
  border-radius: 8px;

 Height : 100px;
Width:100px

}



}






@media only screen and (min-width: 768px) {

.net-title{
  font-size: 20px;
   color:black;
 
 line-height: 35px;
  font-family: 'Open Sans','Helvetica Neue',Helvetica,Arial,sans-serif;
}

.textt {
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

  margin-left: 30px;

  margin-right: -5px;

  line-height: 25px;
}

.location{

  margin-bottom: 30px;
}

.btn{
  padding-top: 6px;

  Height : 38px;
Width:123px

}



.r-image {
  border-radius: 8px;

 Height : 160px;
Width:160px

}



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
  

  display: flex;
}

.ico {
  margin-right: 5px;
}




@media only screen and (min-width: 768px) {
  .people-style {
  border-top-left-radius: 5px;

  border-bottom-left-radius: 5px;

  border-top-right-radius: 5px;

  border-bottom-right-radius: 5px;

  background: white;

  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;
  

  


  margin-right: 8px;
 

  padding: 7px;
}

}




@media only screen and (max-width: 768px) {
  .people-style {
  border-top-left-radius: 5px;

  border-bottom-left-radius: 5px;

  border-top-right-radius: 5px;

  border-bottom-right-radius: 5px;




  background: white;

  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;

  margin-right: 8px;
 

  padding: 7px;
}





.btn {
 

  display: flex;

    padding-right: 60px;
}

h4{
  font-size: 15px;
}

}






@media only screen and (max-width: 520px){

.btn {
    display: flex;
    
}
}

</style>
