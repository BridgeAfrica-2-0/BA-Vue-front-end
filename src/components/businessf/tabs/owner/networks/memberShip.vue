<template>
  <div class="container">
    <div>
      <b-row>
        <b-col class="f-left">
          <h6 class=" d-inline-block">
            Membership Requests
          </h6>
        </b-col>
        <b-col class="f-right"> <span class="">35 Pending</span> </b-col>
      </b-row>
    </div>

    <hr width="100%" />








    <b-row>
           
      <b-col cols="9" class="mx-auto">


        <b-input-group class="mb-2 px-md-3 mx-auto">
          <b-input-group-prepend is-text>
            <b-icon-search class="text-primary border-none"></b-icon-search>
          </b-input-group-prepend>
          <b-form-input
            aria-label="Text input with checkbox"
            placeholder="Search Something"
          ></b-form-input>
        </b-input-group>


      </b-col>

      <b-col cols="3">  <b-button variant="primary" block > Send Request </b-button>   </b-col>

    </b-row>

    <br/>









    <div v-for="i in 6" class="f-left" :key="i">  

        
        
        <b-row>




        <b-col cols="12" md="6" >    
        
            <div class="people-style border shadow">
              <b-row class="mb-1">
                <b-col cols="6" class="" style="display:inline-flex">

                  <b-avatar class="p-avater" variant="primary" src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg" size="5em"></b-avatar>
               

               
                  <div class="e-name">
                    <h6>
                      <br />
                      howty Circlehead  
                    </h6>
                  </div>
                </b-col>

                <b-col cols="5">

                  <div class="p-buttons" >
                    <b-button
                      block
                      variant="primary"
                      size="sm"
                      class="b-background"
                      style="display:inline-flex"
                    >
                      <b-icon icon="chat"> </b-icon> Message
                    </b-button>

                    <b-button
                      block
                      size="sm"
                      class="b-background"
                      variant="primary"
                      style="display:inline-flex"
                    >
                      <b-icon icon="plus-circle"> </b-icon> community
                    </b-button>
                  </div>
                </b-col>

                <b-col cols="1">   
                  
                  
                      <span class="float-right a-dots">
          <b-dropdown
            size="lg"
            variant="link"
            toggle-class="text-decoration-none"
            no-caret  
            class="a-dbutton"
          >
            <template #button-content>
              <b-icon-three-dots-vertical></b-icon-three-dots-vertical
              ><span class="sr-only">Settings</span>
            </template>
            <b-dropdown-item href="#">
              Approve
            </b-dropdown-item>
            <b-dropdown-item href="#">
              Reject
            </b-dropdown-item>
          </b-dropdown>
        </span>      </b-col>

              </b-row>
            </div>




   </b-col>

  




        
        
        

        <b-col cols="12" md="6">    
        
            <div class="people-style border shadow">
              <b-row class="mb-1">
                <b-col cols="6" class="" style="display:inline-flex">

                  <b-avatar class="p-avater" variant="primary" src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg" size="5em"></b-avatar>
               

               
                  <div class="e-name">
                    <h6>
                      <br />
                      howty Circlehead
                    </h6>
                  </div>
                </b-col>

                <b-col cols="5">

                  <div class="p-buttons" >
                    <b-button
                      block
                      variant="primary"
                      size="sm"
                      class="b-background"
                      style="display:inline-flex"
                    >
                      <b-icon icon="chat"> </b-icon> Message
                    </b-button>

                    <b-button
                      block
                      size="sm"
                      class="b-background"
                      variant="primary"
                      style="display:inline-flex"
                    >
                      <b-icon icon="plus-circle"> </b-icon> community
                    </b-button>
                  </div>
                </b-col>

                <b-col cols="1">   
                  
                  
                      <span class="float-right a-dots">
          <b-dropdown
            size="lg"
            variant="link"
            toggle-class="text-decoration-none"
            no-caret  
            class="a-dbutton"
          >
            <template #button-content>
              <b-icon-three-dots-vertical></b-icon-three-dots-vertical
              ><span class="sr-only">Settings</span>
            </template>
            <b-dropdown-item href="#">
              Approve
            </b-dropdown-item>
            <b-dropdown-item href="#">
              Reject
            </b-dropdown-item>
          </b-dropdown>
        </span>      </b-col>

              </b-row>
            </div>




   </b-col>

  




        
        
        
        
        
        
        


   </b-row>  

    </div>

    <b-row>
      <b-col cols="12">
        <span class="float-right">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "memberShip",
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" }
      ]
    };
  },
  computed: {
    rows() {
      return this.items.length;
    }
  }
};
</script>

<style scoped>
.a-center {
  text-align: center;
  align-content: center;
}

.f-left {
  text-align: left;
}

.f-right {
  text-align: right;
}





.detail {
  position: relative;
  left: 65px;
  top: -30px;
}
.name {
  position: relative;
  top: -10px;
  left: 10px;
}

.a-left{
  text-align: left;
  align-content: left;
}






hr {
  border: solid 1px dimgray;
}

.btn {
  background-color: #fff;
  color: #e75c18;
  border: solid 1px #e75c18;
}

.btn:hover {
  color: #fff;
  border: none;
  background-color: #e75c18;
}

f-right {
  text-align: right;
  align-content: right;
}

.f-left {
  text-align: left;
  align-content: left;
}
@media only screen and (max-width: 768px) {
  .options {
    position: relative;
    left: -75px;
  }
}

.detail {
  position: relative;
  left: 92px;
  top: -30px;
}
.name {
  position: relative;
  top: -10px;
  left: 10px;
}


.a-dbutton{

  margin: 15px;
}

.b-background {
  background-color:#e75c18;
  color: white;


  border-top-left-radius: 4px;

  border-bottom-left-radius: 4px;

  border-top-right-radius: 4px;

  border-bottom-right-radius: 4px;
}

.people-style {
  border-top-left-radius: 40px;

  border-bottom-left-radius: 40px;

  border-top-right-radius: 45px;

  border-bottom-right-radius: 45px;

  height: 85px;

  background: white;

  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);

  margin-bottom: 10px;
 
}

.p-buttons {
  margin-right: 50px;
margin-left: 50px;
margin-bottom: 5px;
margin-top: 7px;
padding-right: 5px;
}

.e-name {
      margin-left: 20px;

}
.pp-avater {
  margin-right: -15px;
}
.a-text {
  margin-top: 2px;
}



</style>
