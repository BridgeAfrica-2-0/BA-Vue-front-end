<template>
  <div class="mt-3">
    <div class="lal">
      <b-card
        class="f-left"
        style="padding:0px; margin-left: -12px;
    margin-right: -12px;"
      >
        <b-tabs pills lazy content-class="mt-3 f-left">
          <b-tab  active>

               <template slot="title">
           {{ $t('profileowner.People')}} <span class="spa-color"> {{ nFormatter(total.total_people)}}  </span>
          </template>


            <People @BlockUser="BlockUser" />
          </b-tab>

          <b-tab>

              <template slot="title">
           {{ $t('profileowner.Businesses')}} <span class="spa-color"> {{ nFormatter(total.total_business)}}  </span>
          </template>


            <Businesses @BlockUser="BlockUser" />
          </b-tab>

          <b-tab >

              <template slot="title">
           {{ $t('profileowner.Network')}} <span class="spa-color"> {{ nFormatter(total.total_network)}}  </span>
          </template>

            <Network @BlockUser="BlockUser" />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import People from "./people/people";
import Businesses from "./businesses/businesses";
import Network from "./network/network";

export default {
  name: "memberNetwork",
  components: {
    People,
    Businesses,
    Network,
  },
	computed: {
			total() {
				return this.$store.state.profile.Tcommunity;
			},
      rows() {
        return this.items.length;
      }
	},
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
        .dispatch("profile/profilecommunity", null)
        .then(() => {
          console.log("hey yeah");
        })
        .catch(err => {
          console.log({ err: err });
        });
    },
    BlockUser(dataInfo) {
      console.log(dataInfo);
      let fd = new FormData();
      fd.append("id", dataInfo.id);
      fd.append("type", dataInfo.refernce);
      this.$store.dispatch("profile/Block", {
        path: "block/entity",
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
      this.isLoading = true;

     
    console.log("Load User Profile Community start+++++++");
    this.community();
    
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

.card-body{
  padding: 2px;
}
</style>
