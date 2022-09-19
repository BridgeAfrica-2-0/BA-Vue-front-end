<template>
  <div class="mt-3">
    <div class="">
      <b-card class="f-left" style="padding:0px; margin-left: -12px; margin-right: -12px;">
        <b-tabs active-nav-item-class="active-tab-item"  lazy content-class="mt-3 f-left">
          <b-tab  active>     
            
             <template slot="title">
            {{ $t('businessowner.People') }}
            <span class="spa-color">
              {{ nFormatter( total.total_people) }}
            </span>
          </template>
          
          
           <People @BlockUser="BlockUser"/> </b-tab>
          <b-tab>  
            
             <template slot="title">
            {{ $t('businessowner.Businesses') }}
            <span class="spa-color">
              {{ nFormatter( total.total_business) }}
            </span>
          </template>
          
           <Businesses @BlockUser="BlockUser"/> </b-tab>
          <b-tab>  
            
             <template slot="title">
            {{$t('businessowner.Network') }}
            <span class="spa-color">
              {{ nFormatter( total.total_network) }}
            </span>
          </template>
          
          
          
           <Network  @BlockUser="BlockUser"/> </b-tab>
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
      url: null,
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
    community() {
      this.$store
        .dispatch('profile/profilecommunity', null)
        .then(() => {
          console.log('hey yeah');
        })
        .catch(err => {
          console.log({ err: err });
        });
    },
    BlockUser(dataInfo) {
      console.log(dataInfo);
      let fd = new FormData();
      fd.append("banned_id", dataInfo.id);
      fd.append("banned_type", dataInfo.refernce);
      this.$store.dispatch("businessBlocking/block", {
        path: "community-banned/"+this.url,
        formData: fd
        })
      .then(response => {
        this.community();
        console.log(response);
        this.flashMessage.show({
          status: "success",
          message: dataInfo.refernce + " blocked"
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.flashMessage.show({
          status: "error",
          message: "Unable to blocked " + dataInfo.refernce
        });
      });
    },
  },
  mounted() {
    this.url = this.$route.params.id
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
