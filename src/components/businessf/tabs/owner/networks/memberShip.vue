<template>
<div>



      
<b-container>

       <b-row> <b-col class="f-left">  <h5 class=" d-inline-block">
        Membership Requests
    </h5>  </b-col >  <b-col class="f-right">  <span class="">35 Pending</span>  </b-col>  </b-row>


</b-container>   

     

      <hr width="100%" />


      <div v-for="i in 6" class="f-left" :key="i">
        <p class="">
            <span class="">
              <b-avatar
                  class="d-inline-block"
                  variant="info"
                  src="https://business.bridgeafrica.info/assets/img/team/3.png"
                  size="3.5rem"
              ></b-avatar>
              <p class="m-0  d-inline-block ml-2">
                Mapoure Agrobusiness
              </p>
            </span>
          <span class="float-right mt-1">
              <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none" no-caret>
          <template #button-content>
            <b-icon-three-dots-vertical></b-icon-three-dots-vertical><span class="sr-only">Settings</span>
          </template>
          <b-dropdown-item href="#">
            Approve
          </b-dropdown-item>
          <b-dropdown-item href="#">
            Reject
          </b-dropdown-item>
          </b-dropdown>
            </span>
        </p>
       
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
        { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
        { id: 3, first_name: 'Barney', last_name: 'Rubble' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' }
      ]
    }
  },
  computed: {
    rows() {
      return this.items.length
    }
    }
}
</script>

<style scoped>

.a-center{
  text-align: center;
  align-content: center;
}

.f-left{

  text-align: left;
}


.f-right{
  text-align: right;
}
</style>