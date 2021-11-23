<template>
  <b-container>
    <div class="s-card">



      <div v-for="request in requests" :key="request.id" class="people-style border shadow">
        <b-skeleton-wrapper :loading="loading">
          <template #loading>
            <b-card>
              <b-skeleton width="85%"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="70%"></b-skeleton>
            </b-card>
          </template>
            
        <b-row class="mb-1">
          <b-col md="3" cols="4" sm="3" lg="3" class="my-auto">
            <b-avatar
              class="p-avater"
              variant="primary"
              :src="request.profile_picture"
            ></b-avatar>
          </b-col>

          <b-col md="8" cols="8" lg="8" sm="8">
            <div>
              <b-row class="shift">
                <b-col md="12" lg="12" xl="6" sm="6">
                  <div class="e-name">
                    <b-row>
                      <b-col
                        md="6"
                        lg="6"
                        cols="6"
                        sm="12"
                        xl="12"
                        class="mt-lg-2"
                      >
                        <div class="mt-2 mt-lg-0 mt-xl-0 username">
                          <b> {{request.fullname}} </b>
                        </div>
                      </b-col>

                      <b-col
                        md="6"
                        lg="6"
                        cols="6"
                        sm="12"
                        xl="12"
                        class="mt-3 mt-lg-2 mt-xl-0"
                      >
                        <h6 class="follower">5K {{ $t('network.Community') }}</h6>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>

                <b-col lg="12" xl="6" cols="12" sm="6" md="12">
                  <div>
                    <b-row class="mt-lg-0">
                      <b-col
                        md="6"
                        lg="6"
                        cols="6"
                        sm="12"
                        xl="12"
                        class="mt-2 mt-lg-2 mt-xl-2 btn-2 center"
                      >
                        <b-button
                          block
                          variant="primary"
                          size="sm"
                          class="b-background flexx pobtn shadow"
                          @click="ApproveRequest(request.user_id)"
                        >
                          <span class="btn-text text-center">{{ $t('network.Approve') }}</span>
                        </b-button>
                      </b-col>

                      <b-col
                        md="6"
                        lg="6"
                        cols="6"
                        sm="12"
                        xl="12"
                        class="mt-2 mt-lg-2 mt-xl-2 btn-2 center"
                      >
                        <b-button
                          block
                          size="sm"
                          class="b-background flexx pobtn shadow text-center"
                          variant="primary"
                          @click="DeclineRequest(request.user_id)"
                        >
                          <span class="btn-com text-center">{{ $t('network.Decline') }}</span>
                        </b-button>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
        </b-skeleton-wrapper>
      </div>
      <b-row>
        <b-col cols="12">
          <infinite-loading @infinite="infiniteHandler" ref="infiniteHandler" :identifier="infiniteId">
            <div class="text-red" slot="no-more">{{ $t('network.No_More_Request') }}</div>
            <div class="text-red" slot="no-results">{{ $t('network.No_More_Request') }}</div>
          </infinite-loading>
        </b-col>
      </b-row>

      <FlashMessage />
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      url:null,
      page:0,
      loading: false,
    }
  },
  computed: {
    requests() {
      return this.$store.state.networkProfileMemberRequest.requests;
    },
  },
  mounted() {
    this.url = this.$route.params.id;
  },
  methods: {
    infiniteHandler($state) {
       console.log("loop");
      this.axios
      .get("network/"+this.url+"/members/users/request/"+this.page)
      .then(({ data }) => {
        console.log("// convert array to th object");
        let obj = Object.assign({}, data);
        console.log(obj);
       console.log(data);
       console.log(this.page);
        if (data.data.length) {
        this.page += 1;
        console.log(this.page);
        console.log(...data.data);
        this.requests.push(...data.data);
          $state.loaded();
          } else {
          $state.complete();
        }
      }) .catch((err) => {
          console.log({ err: err });
      })
    },
    ApproveRequest: function(user_id){
      this.loading = true;
      console.log('user_id: ', user_id);
      this.axios.get("network/"+this.url+"/members/request/approve/"+user_id)
      .then(() => {
        this.infiniteHandler();
        // this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        console.log('ohh yeah');
        this.loading = false;
        this.flashMessage.show({
          status: "success",
          message: this.$t('network.Request_Approved')
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.loading = false;
        this.flashMessage.show({
          status: "error",
          message: this.$t('network.Unable_to_Approve_Request')
        });
      });
    },
    DeclineRequest: function(user_id){
      this.loading = true;
      console.log('user_id: ', user_id);
      this.axios.get("network/"+this.url+"/members/request/decline/"+user_id)
      .then(() => {
        this.infiniteHandler();
        // this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        console.log('ohh yeah');
        this.loading = false;
        this.flashMessage.show({
          status: "success",
          message: this.$t('network.Request_Deleted')
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.loading = false;
        this.flashMessage.show({
          status: "error",
          message: this.$t('network.Unable_to_Deleted_Request')
        });
      });
    },
  }
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
    padding-left: 5px;
    padding-right: 5px;
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
  display: inline-block;
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
  display: none;
}
.btn {
  text-align: center;
}
.pobtn {
  text-align: center;
}
</style>
