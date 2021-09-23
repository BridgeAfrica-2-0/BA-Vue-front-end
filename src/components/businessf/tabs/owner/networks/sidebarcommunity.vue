<template>
  <div class="lalala">
    <div class="border mt-2">
      <span>
        <h6 class="title m-3">
          <fas-icon class="icons" :icon="['fas', 'users']" size="lg" />
          <b> COMMUNITY </b> <span class="h4-color"> 7K</span>
        </h6>
      </span>
      <b-tabs pills content-class="mt-3  f-left ">
        <b-tab active>
          <template slot="title">
            People <span class="spa-color"> 7K </span>
          </template>
          <div>
            <b-row>
              <b-col>
                <b-tabs fill pills content-class="mt-3  f-left m-up">
                  <b-tab active>
                    <template slot="title">
                      Followers <span class="spa-color"> 7K </span>
                    </template>
                    <div class="s-comcard"><People :people="people" /></div>
                  </b-tab>
                  <b-tab>
                    <template slot="title">
                      Following <span class="spa-color"> 7K </span>
                    </template>
                    <div class="s-comcard"><People :people="people" /></div>
                  </b-tab>
                </b-tabs>
              </b-col>
            </b-row>
          </div>
        </b-tab>
        <b-tab>
          <template slot="title">
            Businesses <span class="spa-color"> 7K </span>
          </template>
          <div>
            <b-tabs fill pills content-class="mt-3  f-left m-up checkcheck">
              <b-tab active>
                <template slot="title">
                  Followers <span class="spa-color"> 7K </span>
                </template>
                <div class="s-comcard"><Business :business="business" /></div>
              </b-tab>
              <b-tab>
                <template slot="title">
                  Following <span class="spa-color"> 7K </span>
                </template>
                <div class="s-comcard"><Business :business="business" /></div>
              </b-tab>
            </b-tabs>
          </div>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>
<script>
import People from "./people";
import Business from "./business";
export default {
  name: "comunitiDashboard",
  components: {
    People,
    Business,
  },
    data() {
    return {
      url: null,
      people: [
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" }
      ],
      business: [
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" }
      ],
    };
  },
  computed: {
    rows() {
      return this.items.length;
    },
    userdetails() {
      return this.$store.state.networkProfileCommunity.userdetails;
    },
    businessdetails() {
      return this.$store.state.networkProfileCommunity.businessdetails;
    }
  },
  mounted(){
    this.url = this.$route.params.id;
    this.UserDetails();
    this.businessDetails();
  },
  methods:{    
    UserDetails() {
    this.$store
      .dispatch("networkProfileCommunity/getUserDetails", this.url)
      .then(() => {
        console.log('ohh year');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },
    businessDetails() {
    this.$store
      .dispatch("networkProfileCommunity/getBusinessDetails", this.url)
      .then(() => {
        console.log('ohh year');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },
  }
};
</script>

<style >
.lala .nav-fill {
  margin-top: -19px;
  border: 1px solid rgba(0, 0, 0, 0.125);
}

.spa-color {
  color: white;
  margin-left: 10px;
  font-size: 14px;
}

.h4-color {
  color: orangered;
  margin-left: 10px;
  font-size: 14px;
}

.m-up {
  margin-top: -5px;
}

@media only screen and (min-width: 768px) {
  .title {
    font-size: 20px;
  }
}

@media only screen and (min-width: 768px) {
  .title {
    font-size: 16px;
  }
}
</style>
