<template>
  <div>

     <Person v-for="item in people_around" :key="item.id" :person="item"  />

  

    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import Person from "@/components/Person";
import axios from "axios";
export default {
  components: {
    Person
  },
  data() {
    return {
      page: 2,
      // people_around:[],
      options: {
        rewind: true,
        autoplay: true,
        perPage: 1,

        pagination: false,

        type: "loop",
        perMove: 1,
      },
    };
  },

  computed: {
    people_around() {
      return this.$store.state.auth.peopleAround;
    },
    activeAccount() {
      return this.$store.getters["auth/profilConnected"];
    },
  },
  methods: {
    cta_business(data) {
     
      this.$store.commit("businessChat/setSelectedChat", data);

      let path = "";
      if (this.activeAccount.user_type == "business") {
        path = "/business_owner/" + this.activeAccount.id;
      } else if (this.activeAccount.user_type == "network") {
        path = "/";
      } else path = "/messaging";

      // this.$router.push({ path: `${path}`, query: { tabId: 1, msgTabId: 1 } });
      this.$router.push({
        path: `/business_owner/${this.activeAccount.id}`,
        query: { tabId: 1, msgTabId: 0 },
      });
    },

    count(number) {
      if (number >= 1000000) {
        return number / 1000000 + "M";
      }
      if (number >= 1000) {
        return number / 1000 + "K";
      } else return number;
    },

    async handleFollow(user) {
   
      document.getElementById("followbtn" + user.id).disabled = true;
      const uri = user.is_follow === 0 ? `/follow-community` : `/unfollow`;
      const nextFollowState = user.is_follow === 0 ? 1 : 0;
      const data = {
        id: user.id,
        type: "user",
      };

      await axios
        .post(uri, data)
        .then(({ data }) => {
        
          user.is_follow = nextFollowState;
          document.getElementById("followbtn" + user.id).disabled = false;
        })

        .catch((err) => {
         
          document.getElementById("followbtn" + user.id).disabled = false;
        });
    },

    async infiniteHandler($state) {
      let url = "people/around?page=" + this.page;

    

      await axios
        .get(url)
        .then(({ data }) => {
         

          if (data.data.length) {
            this.people_around.push(...data.data);
            this.page += 1;

            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
         
        });
    },
  },
};
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .btn-text {
    margin-left: 8px;
  }

  .btn-com {
    margin-left: 4px;
  }
  .btn-icon {
    margin-top: 3px;
  }
}

@media only screen and (max-width: 768px) {
  .btn-icon {
    margin-top: 3px;
  }

  .btn-text {
    margin-left: 5px;
  }

  .btn-com {
    margin-left: 3px;
  }
}

@media only screen and (max-width: 768px) {
  .btnpngs {
    width: 16px;
    margin-right: 5px;
  }

  .s-card {
    margin-right: -15px;
    margin-left: -15px;
  }
}

@media only screen and (min-width: 768px) {
  .btnpngs {
    width: 20px;
    margin-right: 5px;
  }
}

.btn {
  border-radius: 5px;
}

.flexx {
  display: inline-flex;
}

.memfollower {
  margin-left: 20px;
  font-size: 12px;
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

.a-left {
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

.b-background {
  background-color: #e75c18;
  color: white;

  border-top-left-radius: 4px;

  border-bottom-left-radius: 4px;

  border-top-right-radius: 4px;

  border-bottom-right-radius: 4px;
}

.follower {
  font-size: 14px;
  margin-top: 5px;
}

.people-style {
  border-top-left-radius: 40px;

  border-bottom-left-radius: 40px;

  border-top-right-radius: 45px;

  border-bottom-right-radius: 45px;

  background: white;
  padding-right: 2px;
  padding-left: 6px;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;
}

@media only screen and (min-width: 1200px) {
  .btn {
    width: 123px;
    height: 38px;
    font-size: 14px;
  }

  .center {
    text-align: right;
  }
}

@media only screen and (max-width: 768px) {
  .p-avater {
    margin-right: -15px;
    margin-top: 3px;
  }

  .btn-2 {
    margin-left: 0px;
    width: 90px;
  }

  .btn-1 {
    margin-left: 0px;
    width: 90px;
  }

  .people-style {
    border-top-left-radius: 40px;

    border-bottom-left-radius: 40px;

    border-top-right-radius: 45px;

    border-bottom-right-radius: 45px;
    padding-right: 2px;
    padding-left: 6px;

    background: white;

    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;
  }

  h6 {
    font-size: 15px;
  }

  h7 {
    font-size: 10px;
  }

  .btn {
    display: flex;
    font-size: 10px;
  }
}

@media only screen and (max-width: 520px) {
  .p-avater {
    margin-right: -15px;
    margin-top: 3px;
  }

  .btn {
    width: 90px;
  }

  .btn-2 {
    margin-left: -15px;
    width: 90px;
  }

  .btn-1 {
    margin-left: -20px;
    width: 90px;
  }

  .people-style {
    border-top-left-radius: 40px;

    border-bottom-left-radius: 40px;

    border-top-right-radius: 45px;

    border-bottom-right-radius: 45px;

    background: white;

    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;

    margin-right: 1px;
    margin-left: 2px;
  }

  h6 {
    font-size: 15px;
  }

  h7 {
    font-size: 10px;
  }

  .btn {
    display: flex;
    font-size: 10px;
  }

  .m-15 {
    margin-left: -15px;
  }
}

@media only screen and (min-width: 764px) {
  .p-buttons {
    margin-right: 50px;
    margin-left: 50px;
    margin-bottom: 5px;
    margin-top: 7px;
    padding-right: 5px;
  }

  .p-avater {
    width: 95px;
    height: 95px;
    margin-bottom: -4px;
    margin-left: -5px;
  }

  .btn {
    width: 123px;
    height: 38px;
    font-size: 14px;
  }

  .center {
    text-align: right;
  }

  .username {
    font-size: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    height: 1.5em;
    white-space: nowrap;
  }

  .follower {
    font-size: 10px;
    margin-top: 5px;
  }
}

@media only screen and (min-width: 764px) and (max-width: 991.18px) {
  .center {
    text-align: left;
  }
}

@media only screen and (max-width: 762px) {
  .username {
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    height: 1.2em;
    white-space: nowrap;
  }

  .btn {
    width: 85px;
    height: 28px;
    font-size: 10px;
  }

  .p-avater {
    width: 75px;
    height: 75px;
    margin-bottom: -8px;
    margin-left: -5px;
    margin-top: -4px;
  }

  .shift {
    margin-left: -40px;
  }

  .follower {
    font-size: 10px;
    text-align: left;
  }

  .center {
    text-align: left;
  }

  .a-text {
    margin-top: 2px;
  }

  .pobtn {
    font-size: 10px;
  }
  .e-name {
    text-align: left;
  }
}

@media only screen and (max-width: 521px) {
  .e-name {
    text-align: left;
    margin-left: -20px;
  }
}
</style>

<style>
.follower {
  font-size: 12px !important;
}
</style>
