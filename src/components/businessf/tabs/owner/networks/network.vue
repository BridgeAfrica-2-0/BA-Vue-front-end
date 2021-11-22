<template>
  <div>
    <b-modal id="modal-sm" size="sm" hide-header>
      {{ $t('network.Do_you_want_to_join_this_network') }} ?
    </b-modal>

    <div class="people-style shadow" v-for="item in network" :key="item.id">
      <b-row>
        <b-col md="3" xl="5" lg="5" cols="5" sm="3">
          <div class="center-img">
            <img :src="item.picture" class="r-image" />
          </div>
        </b-col>

        <b-col md="5" cols="7" lg="7" xl="7" sm="5">
          <p class="textt">
            <strong class="title"> {{ item.name }} </strong> <br />
            {{ item.category }}
            <br />
            {{ item.followers }} {{ $t('network.Community') }} <br />

            {{ item.about_network }} <b-link>{{ $t('network.Read_More') }} </b-link>
          </p>
        </b-col>

        <b-col lg="12" xl="12" md="4" cols="12" sm="4">
          <div class="s-button">
            <b-row>
              <b-col md="12" lg="4" xl="4" sm="12" cols="4" class="mt-2 text-center">
                <b-button
                  block
                  size="sm"
                  class="b-background shadow"
                  :class="item.is_follow !== 0 && 'u-btn'"
                  variant="primary"
                  @click="handleFollow(item)"
                >
                  <i class="fas fa-lg btn-icon" :class="item.is_follow !== 0 ? 'fa-user-minus' : 'fa-user-plus'"></i>
                  <span class="btn-com">{{ $t('network.Community') }} </span>
                </b-button>
              </b-col>

              <b-col md="12" lg="4" xl="4" sm="12" cols="4" class="mt-2 text-center">
                <b-button block size="sm" class="b-background shadow " variant="primary">
                  <i class="fas fa-envelope   fa-lg btn-icon "></i>
                  <span class="btn-text">{{ $t('network.Message') }} </span>
                </b-button>
              </b-col>

              <b-col md="12" lg="4" xl="4" sm="12" cols="4" class="mt-2 text-center">
                <b-button block size="sm" class="b-background shadow " variant="primary">
                  <i class="fas fa-map-marked-alt  fa-lg btn-icon "></i>
                  <span class="btn-text">{{ $t('network.Direction') }} </span>
                </b-button>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>

    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: ['type'],
  data() {
    return {
      page: 1,
      biz_id: null,
      network: [],
      options: {
        rewind: true,
        autoplay: true,
        perPage: 1,
        pagination: false,

        type: 'loop',
        perMove: 1,
      },
    };
  },

  computed: {
    old_network() {
      if (this.type == 'Follower') {
        return this.$store.state.businessOwner.NcommunityFollower.network_followers;
      } else {
        return this.$store.state.profile.NcommunityFollowing.network_following;
      }
    },
  },

  mounted() {
    this.biz_id = this.$route.params.id !== undefined ? this.$route.params.id : this.$router.push('notFound'); //! need some review
    // this.biz_id = this.$route.params.id !== undefined ? this.$route.params.id : 1; //! need some review
  },

  methods: {
    infiniteHandler($state) {
      console.log('loading network 1 1');

      const url =
        this.type === 'Follower'
          ? `business/community/network-follower/${this.biz_id}/`
          : `business/community/network-following/${this.biz_id}/`;

      axios
        .get(url + this.page)
        .then(({ data }) => {
          console.log('lading network after response');
          console.log(data);
          if (this.type == 'Follower') {
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
        .catch(err => {
          console.log({ err: err });
        });
    },

    async handleFollow(user) {
      const uri = user.is_follow === 0 ? `/follow-community` : `/unfollow`;
      const nextFollowState = user.is_follow === 0 ? 1 : 0;
      const data = {
        id: user.id,
        type: 'network',
      };

      await axios
        .post(uri, data)
        .then(response => {
          user.is_follow = nextFollowState;
        })
        .catch(err => console.log(err));
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

.u-btn {
  filter: grayscale(0.6);
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

  .title {
    font-size: 16px;
    color: black;

    line-height: 35px;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .textt {
    color: #000;

    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
  .title {
    font-size: 20px;
    color: black;

    line-height: 35px;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .textt {
    color: #000;

    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
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
    width: 110px;
    font-size: 12px;
    margin-left: -10px;

    padding-top: 8px;
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

@media only screen and (min-width: 992px) and (max-width: 1331px) {
  .btn {
    width: 98px;
    height: 33px;
    font-size: 12px;
    margin-left: -10px;
    padding-top: 8px;
  }
}
</style>