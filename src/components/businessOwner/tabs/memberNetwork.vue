<template>
  <div class="mt-3">
    <div class="">
      <b-card class="f-left" style="padding:0px; margin-left: -12px; margin-right: -12px;">
        <b-tabs pills lazy content-class="mt-3 f-left">
          <b-tab  active>     
            
             <template slot="title">
            {{ $t('businessowner.People') }}
            <span class="spa-color">
              {{ nFormatter( total.total_user_follower) }}
            </span>
          </template>
          
          
           <People /> </b-tab>
          <b-tab>  
            
             <template slot="title">
            {{ $t('businessowner.Businesses') }}
            <span class="spa-color">
              {{ nFormatter( total.total_business_follower) }}
            </span>
          </template>
          
           <Businesses /> </b-tab>
          <b-tab>  
            
             <template slot="title">
            {{$t('businessowner.Network') }}
            <span class="spa-color">
              {{ nFormatter( total.total_network_follower) }}
            </span>
          </template>
          
          
          
           <Network /> </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>   
</template>   

<script>
import People from '@/components/businessOwner/tabs/people/people';
import Businesses from '@/components/businessOwner/tabs/businesses/businesses';
import Network from '@/components/businessOwner/tabs/network/network';

export default {
  name: 'memberNetwork',
  components: {
    People,
    Businesses,
    Network,
  },
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
       
      ],
    };
  },

  methods: {
   

      nFormatter(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
      }
      return num;
    }, 



  },
  mounted() {
    this.isLoading = true;

    console.log('Load User Profile Community start+++++++');
  
  },

  computed: {
    total() {
      return this.$store.state.businessOwner.Tcommunity;
    },
  },
};
</script>

<style scoped>
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

.card-body {
  padding: 2px;
}
</style>
