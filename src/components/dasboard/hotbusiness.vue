import Businesses from '@/components/follower/tabs/businesses';
<template>
  <div>

      <b-card class="border shadow "> 

        <span> <h4>   <img class="img-fluid picture" src="@/assets/icons/bus.png" style="width: 60px;" />  HOT BUSINESSES  <h6 style="float:right">    <b-link> <u> see all </u>  </b-link>    </h6>  </h4>   </span>




           <div class=" s-card  p-tab">

    <div class="people-style border shadow ">
      <b-row>
        <b-col cols="3">
          <div style="height: 100%;">
            <img
              src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
              width="100%"
              height="90%"
              class="r-image"
            />
          </div>
        </b-col>
        <b-col cols="6">
          <p class="text">
            <strong> Super Car ltd </strong> <br />
            <strong> Category : </strong> Car marketing <br />
            <strong> Community : </strong> 20k <br />
            <strong> Location :</strong> cameroon <br />
            <strong> Keyword :</strong> car,swag <br />

            <strong>About:</strong> super best car seller in the world
            adipisicing elit. <b-link>Read More</b-link>
          </p>
        </b-col>

        <b-col cols="3">
          <div class="s-button">
            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon class="ico" icon="plus-circle"> </b-icon> Community
            </b-button>

            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon class="ico" icon="chat"> </b-icon> Message
            </b-button>

            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon icon="direction" class="ico"> </b-icon> Direction
            </b-button>
          </div>
        </b-col>
      </b-row>
    </div>







 <div class="people-style border shadow ">
      <b-row>
        <b-col cols="3">
          <div style="height: 100%;">
            <img
              src="http://www.seafreightagenciesbarbados.com/files/2014/12/shiping.jpg"
              width="100%"
              height="90%"
              class="r-image"
            />
          </div>
        </b-col>
        <b-col cols="6">
          <p class="text">
            <strong> Shipping Coor- ltd </strong> <br />
            <strong> Category : </strong> Goods shipping <br />
            <strong> Community : </strong> 20k <br />
            <strong> Location :</strong> cameroon <br />
            <strong> Keyword :</strong> car,swag <br />

            <strong>About:</strong> super best car seller in the world
            adipisicing elit. <b-link>Read More</b-link>
          </p>
        </b-col>

        <b-col cols="3">
          <div class="s-button">
            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon class="ico" icon="plus-circle"> </b-icon> Community
            </b-button>

            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon class="ico" icon="chat"> </b-icon> Message
            </b-button>

            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon icon="direction" class="ico"> </b-icon> Direction
            </b-button>
          </div>
        </b-col>
      </b-row>
    </div>








     <div class="people-style border shadow ">
      <b-row>
        <b-col cols="3">
          <div style="height: 100%;">
            <img
              src="https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg"
              width="100%"
              height="90%"
              class="r-image"
            />
          </div>
        </b-col>
        <b-col cols="6">
          <p class="text">
            <strong> Buildingx internationa ltd </strong> <br />
            <strong> Category : </strong> Car marketing <br />
            <strong> Community : </strong> 20k <br />
            <strong> Location :</strong> cameroon <br />
            <strong> Keyword :</strong> car,swag <br />

            <strong>About:</strong> super best car seller in the world
            adipisicing elit. <b-link>Read More</b-link>
          </p>
        </b-col>

        <b-col cols="3">
          <div class="s-button">
            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon class="ico" icon="plus-circle"> </b-icon> Community
            </b-button>

            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon class="ico" icon="chat"> </b-icon> Message
            </b-button>

            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon icon="direction" class="ico"> </b-icon> Direction
            </b-button>
          </div>
        </b-col>
      </b-row>
    </div>








     <div class="people-style border shadow ">
      <b-row>
        <b-col cols="3">
          <div style="height: 100%;">
            <img
              src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/8076/1601635839903/front-left-side-47.jpg"
              width="100%"
              height="90%"
              class="r-image"
            />
          </div>
        </b-col>
        <b-col cols="6">
          <p class="text">
            <strong> Super Ford Car ltd </strong> <br />
            <strong> Category : </strong> Car marketing <br />
            <strong> Community : </strong> 20k <br />
            <strong> Location :</strong> cameroon <br />
            <strong> Keyword :</strong> car,swag <br />

            <strong>About:</strong> super best car seller in the world
            adipisicing elit. <b-link>Read More</b-link>
          </p>
        </b-col>

        <b-col cols="3">
          <div class="s-button">
            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon class="ico" icon="plus-circle"> </b-icon> Community
            </b-button>

            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon class="ico" icon="chat"> </b-icon> Message
            </b-button>

            <b-button block size="sm" class="b-background" variant="primary">
              <b-icon icon="direction" class="ico"> </b-icon> Direction
            </b-button>
          </div>
        </b-col>
      </b-row>
    </div>

           </div>

</b-card>

  </div>
</template>

<script>
export default {
  props: ["title", "image"]
};
</script>

<style scoped>
.card {
  color: orange;
}


h4{

  color: black;
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
  border-radius: 8px;
}

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
 

  padding: 7px;
}




.s-card{
  height:450px; 
  overflow: auto; 
  overflow-x: hidden;

}

</style>
