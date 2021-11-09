<template>
  <div>
    <div class="s-cardd">
      <div class="people-style border shadow">
        <b-row class="mb-1">
          <b-col md="3" cols="4" sm="4" class="my-auto">
            <b-avatar
              class="p-avater"
              variant="primary"
              :src="member.profile_picture"
            ></b-avatar>
          </b-col>

          <b-col md="8" cols="8" sm="8">
            <div>
              <b-row class="shift">
                <b-col md="12" lg="6" xl="6">
                  <div class="e-name">
                    <b-row>
                      <b-col md="6" lg="12" cols="6" xl="12" class="mt-lg-2">
                        <div class="mt-3 mt-lg-0 mt-xl-0 username">
                          <b> {{ member.name }} </b>
                        </div>
                      </b-col>

                      <b-col
                        md="6"
                        lg="12"
                        cols="6"
                        xl="12"
                        class="mt-3 mt-lg-1 mt-xl-3"
                      >
                        <h6 class="follower m-15">
                          {{  member.communityNum }}
                          Community
                        </h6>
                      </b-col>
                      <b-col @click="$emit('BlockUser', member.id)" md="6" lg="12" cols="6" xl="12" class="mt-3 mt-lg-1 mt-xl-3" style="cursor:pointer;">
                        <b-icon font-scale="1" icon="exclamation-octagon" v-b-tooltip.hover title="Block This User" variant="danger"></b-icon>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>

                <b-col lg="6" xl="6" cols="12" md="12">
                  <div>
                    <b-row class="mt-lg-0">
                      <b-col
                        md="6"
                        lg="12"
                        cols="6"
                        xl="12"
                        class="mt-2 mt-lg-2 mt-xl-2 btn-2 center"
                      >
                        <b-button
                          block
                          variant="primary"
                          size="sm"
                          class="b-background flexx pobtn shadow"
                        >
                          <i class="fas fa-envelope fa-lg btn-icon"></i>
                          <span class="btn-text">Message</span>
                        </b-button>
                      </b-col>

                      <b-col
                        md="6"
                        lg="12"
                        cols="6"
                        xl="12"
                        class="mt-2 mt-lg-2 mt-xl-2 btn-2 center"
                        :class="member.is_follow === 0 && 'u-btn'"
                      >
                        <b-button
                          block
                          size="sm"
                          class="b-background flexx pobtn shadow"
                          variant="primary"
                          @click="handleFollow(member)"
                        >
                          <i
                            class="fas fa-lg btn-icon"
                            :class="member.is_follow === 0 ? 'fa-user-minus' : 'fa-user-plus'"></i>
                          <span class="btn-com">Community</span>
                        </b-button>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  props: ["member"],
  methods: {
    async handleFollow(user) {
      const uri = user.is_follow === 0 ? `/follow-community` : `/unfollow`;
      const nextFollowState = user.is_follow === 0 ? 1 : 0;
      const data = {
        id: user.id,
        type: 'user',
      };

      await axios
        .post(uri, data)
        .then(response => {
          user.is_follow = nextFollowState;
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .s-cardd {
    padding-left: 20px;
    padding-right: 20px;
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
    padding-left: 6px;
    padding-right: 1px;
  }
}
@media only screen and (min-width: 768px) {
  .btnpngs {
    width: 20px;
    margin-right: 5px;
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
    background: white;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;
    margin-right: 1px;
    margin-left: 1px;
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
    margin-left: 1px;
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
    height: 1.2em;
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
.follower {
  font-size: 12px !important;
}
</style>