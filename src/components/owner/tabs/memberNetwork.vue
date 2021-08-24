<template>
  <div class="mt-3">
    <div class="">
      <b-card
        class="f-left"
        style="padding:0px; margin-left: -12px;
    margin-right: -12px;"
      >
        <b-tabs pills content-class="mt-3 f-left">
          <b-tab title="People" active>
            <People :people="profile_community.people" />
          </b-tab>

          <b-tab title="Businesses">
            <Businesses :business="profile_community.business" />
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
import People from "./people/people";
import Businesses from "./businesses/businesses";

export default {
  name: "memberNetwork",
  components: {
    People,
    Businesses
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
      ],
      profile_community: {
        people: {
          followers: [
            {
              id: 1,
              picture:
                "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
              name: "howty Itz blec",
              community: 5000,
              messages: [],
              communities: []
            },
            {
              id: 2,
              picture:
                "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
              name: "howty Itz blec",
              community: 5000,
              messages: [],
              communities: []
            },
            {
              id: 3,
              picture:
                "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
              name: "howty Itz blec",
              community: 5000,
              messages: [],
              communities: []
            },
            {
              id: 4,
              picture:
                "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
              name: "howty Itz blec",
              community: 5000,
              messages: [],
              communities: []
            },
            {
              id: 5,
              picture:
                "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
              name: "howty Itz blec",
              community: 5000,
              messages: [],
              communities: []
            }
          ],
          followings: [
            {
              id: 1,
              picture:
                "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
              name: "howty Itz blec",
              community: 5000,
              messages: [],
              communities: []
            },
            {
              id: 2,
              picture:
                "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
              name: "howty Itz blec",
              community: 5000,
              messages: [],
              communities: []
            },
            {
              id: 3,
              picture:
                "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
              name: "howty Itz blec",
              community: 5000,
              messages: [],
              communities: []
            },
            {
              id: 4,
              picture:
                "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
              name: "howty Itz blec",
              community: 5000,
              messages: [],
              communities: []
            },
            {
              id: 5,
              picture:
                "https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg",
              name: "howty Itz blec",
              community: 5000,
              messages: [],
              communities: []
            }
          ]
        },
        business: {
          followers: [
            {
              id: 1,
              picture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              name: "Super Car ltd",
              category: "Car marketing",
              community: 20000,
              city: "Douala",
              country: "Cameroon",
              about_description:
                "super best car seller in the world adipisicing elit. lorem epsep his is",
              communities: [],
              messages: [],
              directions: []
            },
            {
              id: 2,
              picture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              name: "Super Car ltd",
              category: "Car marketing",
              community: 20000,
              city: "Douala",
              country: "Cameroon",
              about_description:
                "super best car seller in the world adipisicing elit. lorem epsep his is",
              communities: [],
              messages: [],
              directions: []
            },
            {
              id: 3,
              picture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              name: "Super Car ltd",
              category: "Car marketing",
              community: 20000,
              city: "Douala",
              country: "Cameroon",
              about_description:
                "super best car seller in the world adipisicing elit. lorem epsep his is",
              communities: [],
              messages: [],
              directions: []
            },
            {
              id: 4,
              picture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              name: "Super Car ltd",
              category: "Car marketing",
              community: 20000,
              city: "Douala",
              country: "Cameroon",
              about_description:
                "super best car seller in the world adipisicing elit. lorem epsep his is",
              communities: [],
              messages: [],
              directions: []
            },
            {
              id: 5,
              picture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              name: "Super Car ltd",
              category: "Car marketing",
              community: 20000,
              city: "Douala",
              country: "Cameroon",
              about_description:
                "super best car seller in the world adipisicing elit. lorem epsep his is",
              communities: [],
              messages: [],
              directions: []
            }
          ],
          followings: [
            {
              id: 1,
              picture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              name: "Super Car ltd",
              category: "Car marketing",
              community: 20000,
              city: "Douala",
              country: "Cameroon",
              about_description:
                "super best car seller in the world adipisicing elit. lorem epsep his is",
              communities: [],
              messages: [],
              directions: []
            },
            {
              id: 2,
              picture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              name: "Super Car ltd",
              category: "Car marketing",
              community: 20000,
              city: "Douala",
              country: "Cameroon",
              about_description:
                "super best car seller in the world adipisicing elit. lorem epsep his is",
              communities: [],
              messages: [],
              directions: []
            },
            {
              id: 3,
              picture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              name: "Super Car ltd",
              category: "Car marketing",
              community: 20000,
              city: "Douala",
              country: "Cameroon",
              about_description:
                "super best car seller in the world adipisicing elit. lorem epsep his is",
              communities: [],
              messages: [],
              directions: []
            },
            {
              id: 4,
              picture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              name: "Super Car ltd",
              category: "Car marketing",
              community: 20000,
              city: "Douala",
              country: "Cameroon",
              about_description:
                "super best car seller in the world adipisicing elit. lorem epsep his is",
              communities: [],
              messages: [],
              directions: []
            },
            {
              id: 5,
              picture:
                "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg",
              name: "Super Car ltd",
              category: "Car marketing",
              community: 20000,
              city: "Douala",
              country: "Cameroon",
              about_description:
                "super best car seller in the world adipisicing elit. lorem epsep his is",
              communities: [],
              messages: [],
              directions: []
            }
          ]
        }
      }
    };
  },
  provide() {
    return {};
  },
  created() {
    console.log("Load User Profile Community start+++++++");
    this.$store
      .dispatch("loadUserProfileCommuntity", null)
      .then(response => {
        console.log(response);
        console.log("Load User Profile Community end response (3) +++++++");
      })
      .catch(error => {
        console.log("Error from server or from browser error (2) ++++");
        console.log(error);
      })
      .finally(() => {
        console.log("Finally Load User Profile Community +++++");
        this.profile_community = JSON.parse(
          JSON.stringify(this.$store.getters.getProfileCommunity)
        );
        console.log(this.profile_community);
      });
  },
  computed: {
    rows() {
      return this.items.length;
    }
  }
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
  align-content: flex-start;
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
