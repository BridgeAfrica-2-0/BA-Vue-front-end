<template>
  <div class="mt-3">
    <div>
      <b-tabs pills content-class="mt-3 f-left">
        <b-tab :title="$t('network.People')" active> 

           <template slot="title">
            {{ $t("network.People") }}
            <span class="spa-color">
              {{ nFormatter(userdetails.total_people) }}
            </span>
          </template>


         <People /> 
        </b-tab>

        
        <b-tab > 

           <template slot="title">
            {{ $t("network.Businesses") }}
            <span class="spa-color">
              {{ nFormatter(businessdetails.total_Business)  }}
            </span>
          </template>


          <Businesses /> 
        </b-tab>
        <b-tab > 

           <template slot="title">
            {{ $t('network.Network') }}
            <span class="spa-color">
              {{ nFormatter(networkdetails.total_Network) }}
            </span>
          </template>


          <Networks /> 
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import People from "./people/people";
import Businesses from "./businesses/businesses";
import Networks from "./networks/networks";

export default {
  name: "memberNetwork",
  components: {
    People,
    Businesses,
    Networks
  },

   methods: {
    nFormatter: function(num) {
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
    }
   },

    computed: {
    userdetails() {
      return this.$store.state.networkProfileCommunitySidebar.userdetails;
    },
    businessdetails() {
      return this.$store.state.networkProfileCommunitySidebar.businessdetails;
    },
    networkdetails() {
      return this.$store.state.networkProfileCommunitySidebar.networkdetails;
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
</style>
