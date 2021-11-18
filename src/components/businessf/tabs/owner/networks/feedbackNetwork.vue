<template>
  <div class="mt-3 container">
    <b-row> </b-row>
    <b-row>
      <b-col cols="12">
        <span class="float-right">
          <b-dropdown
            size="lg"
            variant="link"
            toggle-class="text-decoration-none pull-left"
            right
            class="pull-left"
            no-caret
          >
            <template #button-content>
              <b-icon-filter></b-icon-filter><span class="sr-only">{{ $t('network.Search') }}</span>
            </template>
            <p class="font-weight-bolder px-3 m-0">{{ $t('network.Feedbacks_Type') }}</p>
            <b-dropdown-item @click="applyFilter('0')">{{ $t('network.Any') }}</b-dropdown-item>
            <b-dropdown-item @click="applyFilter('Improvement')">{{ $t('network.Suggestion_For_Improvement') }}</b-dropdown-item>
            <b-dropdown-item @click="applyFilter('Complain')">{{ $t('network.Complain') }}</b-dropdown-item>
          </b-dropdown>
        </span>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div 
          :class="{ active: index == currentIndex }"
          v-for="(feedback, index) in feedbacks"
          :key="index"
          class="mb-4"
        >
          <b-skeleton-wrapper :loading="loading">
            <template #loading>
              <b-card>
                <b-skeleton width="85%"></b-skeleton>
                <b-skeleton width="55%"></b-skeleton>
                <b-skeleton width="70%"></b-skeleton>
              </b-card>
            </template>
            <b-card class="mb-2">
              <b-card-text>
                <b-row class="px-md-3">
                  <b-col cols="2" md="1" class="m-0 p-0">
                    <b-avatar
                      class="d-inline-block"
                      variant="info"
                      :src="feedback.profile_picture"
                      square
                      size="3.5rem"
                      rounded="xl"
                    ></b-avatar>
                  </b-col>
                  <b-col cols="8" md="10" class="pt-2">
                    <h5 class="m-0 font-weight-bolder feedback-name">
                      <b-link>  {{feedback.user_name}} </b-link>
                    </h5>
                    <p>{{  moment(feedback.created_at).fromNow() }} - <span class="primary">{{feedback.title}}</span></p>
                  </b-col>
                  <b-col cols="2" md="1" class="float-right">
                    <span 
                      @click="deleteFeedback(feedback.id)"
                    > <b-link><b-icon icon="trash-fill" aria-hidden="true"></b-icon></b-link>
                    </span>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12" class="mt-2">
                    <p class="text-justify feedback-sent"> {{feedback.description}} </p>
                  </b-col>
                </b-row>
              </b-card-text>
            </b-card>
          </b-skeleton-wrapper>
        </div>
      </b-col>
      <b-col col="12">
        <infinite-loading @infinite="infiniteHandler" ref="infiniteLoading">
          <div class="text-red" slot="no-more">No More Request</div>
          <div class="text-red" slot="no-results">No More Request</div>
        </infinite-loading>
      </b-col>
    </b-row>

    <FlashMessage />
    
  </div>
</template>

<script>

import moment from 'moment';
export default {
  name: "feedbackNetwork",
  data() {
    return {
      url: null,
      moment: moment,
      filter: "0",
      filterData: false,
      loading: false,
      currentPage: 0,
      currentIndex: -1,
      feedbacks: [],
      options: [
        { value: "Improvement", text: "Suggestion for Improvement" },
        { value: "Complaints", text: "Complaints" }
      ],
      filters: [
        { value: "0", text: "Any" },
        { value: "Improvement", text: "Suggestion for Improvement" },
        { value: "Complaints", text: "Complaints" }
      ],
      feedbackForm: {
        title: "Improvement",
        description: "",
      },
    };
  },
  mounted(){
    this.url = this.$route.params.id;
  },
  methods: {
    filterFeedback() {
      this.filterData = !this.filterData;
    },
    getRequestDatas(filterData) {
      let data = "";
      if (filterData) {
        console.log("Status true");
        if (filterData == 0) 
          data = "";
        else
          data = filterData;
      }
      console.log(data);
      return data;
    },
    applyFilter(data){
      this.loading = true;
      this.feedbacks = [];
      this.filterData = data
      console.log("searching...");
      console.log(this.filterData);
      this.$nextTick(() => {
        this.page = 0;
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
      });
    },

    infiniteHandler($state) {
      console.log("loop");
      const data = this.getRequestDatas(this.filterData);
      console.log('keyword: '+data);
      let formData = new FormData();
      formData.append('keyword', data);
      // this.$store
      //   .dispatch("networkProfileMembers/getMembers", {
      //     path: this.url+"/members/list/"+this.page,
      //     formData: formData
      //   })
      this.axios
        .post("network/"+this.url+"/feedbacks/"+this.currentPage, formData)
        .then(({ data }) => {
        console.log(data);
        console.log(this.currentPage);
        if (data.data.length) {
          this.page += 1;
          console.log(this.currentPage);
          console.log(...data.data);
          this.feedbacks.push(...data.data);
          this.loading = false;
          $state.loaded();
        } else {
          this.loading = false;
          $state.complete();
        }
      }) .catch((err) => {
        this.loading = false;
        console.log({ err: err });
      })
    },

    deleteFeedback: function(user_id){
      this.loading = true;
      let info = {
        user_id: user_id,
        url: this.url,
      };
      this.$store
      .dispatch("networkProfileFeedback/feedbackRequests", {
        method:'DELETE',
        data: info
      })
      .then(response => {
        this.$nextTick(() => {
          this.page = 0;
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        });
        this.loading = false;
        console.log(response);
        console.log('ohh yeah');
        this.flashMessage.show({
          status: "success",
          message: "Feedback Deleted"
        });
      })
      .catch( err => {
        this.$nextTick(() => {
          this.page = 0;
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        });
        console.log({ err: err });
        this.loading = false;
        this.flashMessage.show({
          status: "error",
          message: "Unable to Deleted Feedback"
        });
      });
		},
  }
};
</script>

<style scoped>
@media (min-width: 762px) {
  .feedback-name {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
  }
  .feedback-sent {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
}
@media (max-width: 762px) {
  .feedback-name {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
  .feedback-sent {
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }
}
</style>
