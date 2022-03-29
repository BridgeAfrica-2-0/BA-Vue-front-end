<template>
  <div>



    <b-card class="border shadow " style="height:300px; ">
      <span class="">
        <h6 class="mybusi">
          <fas-icon class="icons" :icon="['fas', 'hands-helping']" size="lg" />
          <b> {{ $t('dashboard.My_Businesses') }} </b>  
        </h6>

      </span>
      <div class="s-card " style="overflow: -moz-scrollbars-vertical">

         <div v-if="business.length"> 
        
        <Business  :business="business"   />
         </div>


        <div  v-else >
          <b-row>
            <b-col>
              <div class="p-top">
                <br />
                <h6>{{ $t('dashboard.No_Business') }}</h6>
   <router-link to="profile_owner#business">
                <b-button variant="primary" class="busi-btn">  
                  {{ $t('dashboard.Add_Business') }}
                </b-button>
   </router-link>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
import Business from "@/components/dasboard/businesses";
export default {
  name: "emptybusiness",
  
  components: {
    Business,
    },
  
  computed: {
   

    business(){
    return this.$store.state.ProfileAndBusinessDetails.business;
    }
  }
};
</script>

<style scoped>
.p-top {
  padding-top: 20px;
  text-align: center;
  align-content: center;
}

@media only screen and (min-width: 768px) {
  .busi-btn {
    width: 133px;
    height: 38px;
    font-family: Helvetica Neue;
  }

  .mybusi {
    font-size: 20px;
    margin-left:20px
  }
}

@media only screen and (max-width: 768px) {
  .busi-btn {
    width: 115px;
    
    font-family: Helvetica Neue;

    font-size: 12px;
  }

  .mybusi {
    font-size: 12px;
  }
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

  margin-right: 8px;

  padding: 7px;
}
.s-card {
  height: 190px;
  overflow: auto;
  overflow-x: hidden;
  padding: 15px;

}

.card-body{
  padding-left: 1px !important;
    padding-right: 1px !important;
}
</style>
