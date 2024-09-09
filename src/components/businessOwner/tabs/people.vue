<template>
  <div>
    <div class="s-cardd">
      <Person
        v-for="item in users"
        :key="item.id"
        :person="item"
        @getTotalCommunity="getTotalCommunity"
      />
    </div>

    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import axios from "axios";
import { isGuestUser } from "@/helpers";
import Person from "@/components/Person";

export default {
  props: ["type"],
  data() {
    return {
      page: 1,
      biz_id: null,
      users: [],
      options: {
        rewind: true,
        autoplay: true,
        perPage: 1,
        pagination: false,

        type: "loop",
        perMove: 1
      },
      isGuestUser: isGuestUser
    };
  },

  components: {
    Person
  },

  mounted() {
    this.biz_id =
      this.$route.params.id !== undefined
        ? this.$route.params.id
        : this.$router.push("notFound"); //! need some review
    // this.biz_id = this.$route.params.id !== undefined ? this.$route.params.id : 1; //! need some review
  },

  computed: {
    activeAccount() {
      return this.$store.getters["auth/profilConnected"];
    }
  },

  methods: {
    cta(data) {
      console.log(data);
      this.$store.commit("businessChat/setSelectedChat", data);
      let path = "";
      if (this.activeAccount.user_type == "business") {
        path = "/business_owner/" + this.activeAccount.id;
      } else if (this.activeAccount.user_type == "network") {
        path = "/";
      } else path = "/messaging";
      this.$router.push({
        path: `/business_owner/${this.activeAccount.id}`,
        query: { tabId: 1, msgTabId: 0 }
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

    infiniteHandler($state) {
      let url = "";

      if (this.isGuestUser()) {
        url =
          this.type === "Follower"
            ? `guest/business/community/people-follower/${this.biz_id}/`
            : `guest/business/community/people-following/${this.biz_id}/`;
      } else {
        url =
          this.type === "Follower"
            ? `business/community/people-follower/${this.biz_id}/`
            : `business/community/people-following/${this.biz_id}/`;
      }
      axios
        .get(url + this.page)
        .then(({ data }) => {
          if (this.type == "Follower") {
            if (data.data.user_followers.length) {
              this.page += 1;

              this.users.push(...data.data.user_followers);
              $state.loaded();
            } else {
              $state.complete();
            }
          } else {
            if (data.data.user_following.length) {
              this.page += 1;

              this.users.push(...data.data.user_following);
              $state.loaded();
            } else {
              $state.complete();
            }
          }
        })
        .catch(err => {
          console.log({ err: err });
        });
    },

    businessCommunityTotal() {
      const dispatchMethod = this.isGuestUser()
        ? "businessGuest/businessCommunityTotal"
        : "businessOwner/businessCommunityTotal";

      this.$store
        .dispatch(dispatchMethod, this.biz_id)
        .then(() => {
          console.log("hey yeah");
        })
        .catch(err => {
          console.log({ err: err });
        });
    },

    async handleFollow(user) {
      document.getElementById("followbtn" + user.id).disabled = true;
      const uri = user.is_follow === 0 ? `/follow-community` : `/unfollow`;
      const nextFollowState = user.is_follow === 0 ? 1 : 0;
      const data = {
        id: user.id,
        type: "user"
      };

      await axios
        .post(uri, data)
        .then(({ data }) => {
          console.log(data);
          user.is_follow = nextFollowState;
          document.getElementById("followbtn" + user.id).disabled = false;

          this.businessCommunityTotal();
        })

        .catch(err => {
          console.log({ err: err });
          document.getElementById("followbtn" + user.id).disabled = false;
        });
    }
  }
};
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .s-cardd {
    padding-left: 6px;
    padding-right: 6px;
    height: 400px;
  }

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

  .s-cardd {
    padding-left: 4px;
    padding-right: 4px;
    height: 400px;
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

.u-btn {
  filter: grayscale(0.6);
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
  font-size: 10px;
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
}

@media only screen and (min-width: 1200px) {
  .btn {
    width: 123px;
    height: 38px;
    font-size: 12px;
  }

  .center {
    text-align: left;
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

@media only screen and (min-width: 764px) {
  .p-buttons {
    margin-right: 50px;
    margin-left: 50px;
    margin-bottom: 5px;
    margin-top: 7px;
    padding-right: 5px;
  }

  .p-avater {
    width: 75px;
    height: 75px;
    margin-bottom: -4px;
    margin-left: -5px;
  }

  .btn {
    width: 123px;
    height: 38px;
    font-size: 12px;
  }

  .center {
    text-align: left;
  }

  .username {
    font-size: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    height: 1.2em;
    white-space: nowrap;
  }

  .follower {
    font-size: 10px;
  }

  .shift {
    margin-left: -40px;
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
    width: 97px;
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
    margin-left: -20px;
  }
}

@media only screen and (max-width: 521px) {
  .e-name {
    text-align: left;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1421px) {
  .btn {
    width: 115px;
    height: 38px;
    font-size: 12px;
  }
}
</style>
