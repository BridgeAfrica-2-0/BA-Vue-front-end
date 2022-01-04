<template>
  <div class="mt-3">
    <div class="">
      <b-card class="f-left" style="padding:0px; margin-left: -12px; margin-right: -12px;">
        <b-tabs pills lazy content-class="mt-3 f-left">
          <b-tab :title="$t('businessowner.People')" active> <People @BlockUser="BlockUser"/> </b-tab>
          <b-tab :title="$t('businessowner.Businesses')"> <Businesses @BlockUser="BlockUser"/> </b-tab>
          <b-tab :title="$t('businessowner.Network')"> <Network @BlockUser="BlockUser"/> </b-tab>
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
        { id: 1, first_name: 'Fred', last_name: 'Flintstone' },
        { id: 2, first_name: 'Wilma', last_name: 'Flintstone' },
        { id: 3, first_name: 'Barney', last_name: 'Rubble' },
        { id: 4, first_name: 'Betty', last_name: 'Rubble' },
        { id: 5, first_name: 'Pebbles', last_name: 'Flintstone' },
        { id: 6, first_name: 'Bamm Bamm', last_name: 'Rubble' },
        { id: 7, first_name: 'The Great', last_name: 'Gazzoo' },
        { id: 8, first_name: 'Rockhead', last_name: 'Slate' },
        { id: 9, first_name: 'Pearl', last_name: 'Slaghoople' },
      ],
    };
  },

  methods: {
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
    this.community();
  },

  computed: {
    rows() {
      return this.items.length;
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
