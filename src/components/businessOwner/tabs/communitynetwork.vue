<template>
  <div class="p-2">
    <b-modal id="modal-sm" size="sm" hide-header>
      {{ $t("businessowner.Do_you_want_to_join_this_network") }}?
    </b-modal>

    <b-row>
      <b-col lg="6" sm="12" class="p-2" v-for="item in network" :key="item.id">
        <div class="people-style shadow">
          <b-row>
            <b-col md="3" xl="3" lg="3" cols="5" sm="3">
              <div class="center-img">
                <img :src="item.picture" class="r-image" />
              </div>
            </b-col>
            <b-col md="5" cols="7" lg="7" xl="5" sm="5">
              <p class="textt">
                <router-link :to="{name: 'Membar Network Follower', params: {id:item.id}}">
                  <strong class="title">{{ item.name }}</strong>
                </router-link>
                <br />
                {{ item.category }}
                <br />
                {{ item.followers }} {{ $t("businessowner.Community") }} <br />

                <span class="location">
                  <b-icon-geo-alt class="ico"></b-icon-geo-alt>
                  {{ item.location_description }}
                </span>
                <br />

                <read-more
                  more-str="read more"
                  class="readmore"
                  :text="item.about_network"
                  link="#"
                  less-str="read less"
                  :max-chars="50"
                >
                </read-more>
                
                <b-icon
                  font-scale="1"
                  icon="exclamation-octagon"
                  v-b-tooltip.hover
                  title="Block This Network"
                  variant="danger"
                  @click="$emit('BlockUser', item.id)"
                  style="cursor: pointer"
                ></b-icon>
              </p>
            </b-col>

            <b-col lg="12" md="4" xl="4" cols="12" sm="4">
              <div class="s-button">
                <b-row>
                  <b-col md="12" lg="4" xl="12" sm="12" cols="4" class="mt-2">
                    <b-button
                      block
                      size="sm"
                      class="b-background shadow"
                      :class="item.is_follow !== 0 && 'u-btn'"
                      variant="primary"
                      :id="'followbtn' + item.id"
                      @click="handleFollow(item)"
                    >
                      <i
                        class="fas fa-lg btn-icon"
                        :class="
                          item.is_follow !== 0
                            ? 'fa-user-minus'
                            : 'fa-user-plus'
                        "
                      ></i>
                      <span class="btn-com">{{
                        $t("businessowner.Community")
                      }}</span>
                    </b-button>
                  </b-col>

                  <b-col md="12" lg="4" xl="12" sm="12" cols="4" class="mt-2">
                    <BtnCtaMessage :element="item" type="network" />
                  </b-col>

                  <b-col md="12" lg="4" xl="12" sm="12" cols="4" class="mt-2">
                    <b-button
                      block
                      size="sm"
                      :id="'followbtn'+item.id"
                      class="b-background flexx pobtn shadow mr-lg-3 mr-xl-3"
                      :class="item.is_follow !== 0 && 'u-btn'"
                      variant="primary"
                      @click="networkJoin(item)"
                    >
                      <i
                        class="fas fa-lg btn-icon"
                        :class="item.is_follow !== 0 ? 'fa-user-minus' : 'fa-user-plus'"
                      ></i>
                        <span class="btn-com">Join</span>
                    </b-button>
                  </b-col>

                </b-row>
              </div>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>

    <infinite-loading
      :identifier="infiniteId"
      @infinite="infiniteHandler"
      ref="infiniteLoading"
    ></infinite-loading>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["type", "searchh"],
  data() {
    return {
      page: 1,
      biz_id: null,
      infiniteId: +new Date(),
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
    network() {
      if (this.type == "Follower") {
        return this.$store.state.businessOwner.NcommunityFollower
          .network_followers;
      } else {
        return this.$store.state.profile.NcommunityFollowing.network_following;
      }
    },
  },

  mounted() {
    this.biz_id = this.$route.params.id;
  },

  methods: {

    networkJoin: async function(item){
      const status = item.is_follow

      const request = !status ? await this.$repository.share.jointNetwork({id: item.id , type: "network"}) : await this.$repository.share.removeNetwork({id: item.id , type: "network"})
      
      if (request.success){
        item = Object.assign(item, {is_follow: status ? 0 : 1})
        this.flashMessage.show({
          status: "success",
          title: request.data,
        });
      }
    },

    cta(data) {
      console.log(data);
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
    search() {
      console.log("search started");
      console.log(this.type);

      if (this.type == "Follower") {
        console.log("follower");
        this.$store.commit("profile/setNcommunityFollower", {
          network_followers: [],
          total_network_follower: 0,
        });
      } else {
        this.$store.commit("profile/setNcommunityFollowing", {
          network_following: [],
          total_network_following: 0,
        });
      }

      this.page = 1;
      this.infiniteId += 1;

      this.$refs.infiniteLoading.attemptLoad();
    },

    async handleFollow(user) {
      document.getElementById("followbtn" + user.id).disabled = true;
      const uri = user.is_follow === 0 ? `/follow-community` : `/unfollow`;
      const nextFollowState = user.is_follow === 0 ? 1 : 0;
      const data = {
        id: user.id,
        type: "network",
      };

      await axios
        .post(uri, data)
        .then((response) => {
          user.is_follow = nextFollowState;
          document.getElementById("followbtn" + user.id).disabled = false;
        })
        .catch((err) => {
          console.log(err);
          document.getElementById("followbtn" + user.id).disabled = false;
        });
    },

    infiniteHandler($state) {
      let url = null;

      if (this.type == "Follower") {
        url = "business/community/network-follower/" + this.biz_id + "/";
      } else {
        url = "business/community/network-following/" + this.biz_id + "/";
      }

      console.log(url + this.page + "?keyword=" + this.searchh);
      axios
        .get(url + this.page + "?keyword=" + this.searchh)
        .then(({ data }) => {
          console.log("lading network after response");
          console.log(data);
          if (this.type == "Follower") {
            if (data.data.network_followers.length) {
              this.page += 1;
              this.network.push(...data.data.network_followers);

              $state.loaded();
            } else {
              $state.complete();
            }
          } else {
            if (data.data.network_following.length) {
              this.page += 1;

              this.network.push(...data.data.network_following);

              $state.loaded();
            } else {
              $state.complete();
            }
          }
        })
        .catch((err) => {
          console.log({ err: err });
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

  .center-img {
    margin-right: -60px;
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

.btnpngs {
  width: 20px;
  margin-right: 5px;
}

.btn {
  border-radius: 5px;
}

.card {
  color: orange;
}

.s-button {
  align-content: center;
  text-align: center;

  padding: 15px;
}

@media only screen and (max-width: 768px) {
  .a-flex {
    margin-right: -15px;
  }

  .s-button {
    padding: 15px;
    margin-top: -15px;
  }

  .net-title {
    font-size: 16px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .textt {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: -30px;

    margin-right: -5px;

    line-height: 25px;
  }

  .location {
    margin-bottom: 30px;
  }

  .btn {
    padding-top: 6px;
    font-size: 10px;

    height: 28px;
    width: 85px;
  }

  .r-image {
    border-radius: 8px;

    height: 100px;
    width: 100px;
  }
}

@media only screen and (min-width: 768px) {
  .net-title {
    font-size: 20px;
    color: black;

    line-height: 35px;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .textt {
    color: #000;

    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-weight: normal;
    font-size: 14px;
    line-height: 30px;
    color: rgba(117, 114, 128, 1);
    text-align: left;

    font-weight: normal;
    line-height: 20px;
    font-style: normal;

    padding: 1px;
    text-align: left;

    margin-left: 30px;

    margin-right: -5px;

    line-height: 25px;
  }

  .location {
    margin-bottom: 30px;
  }

  .btn {
    padding-top: 6px;

    height: 38px;
    width: 123px;
  }

  .r-image {
    border-radius: 8px;

    height: 160px;
    width: 160px;
  }
}

.stock {
  color: green;
}

.b1 {
  width: 100px;
  margin-left: -20px;
}

.b2 {
  width: 120px;

  margin-left: -15px;
}

.btn {
  display: flex;
}

.ico {
  margin-right: 5px;
}

@media only screen and (min-width: 768px) {
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
}

@media only screen and (max-width: 768px) {
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

  .btn {
    display: flex;

    padding-right: 60px;
  }

  h4 {
    font-size: 15px;
  }
}

@media only screen and (max-width: 520px) {
  .btn {
    display: flex;
  }
}
</style>
