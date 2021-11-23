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
              <b-icon-filter></b-icon-filter><span class="sr-only">Search</span>
            </template>
            <p class="font-weight-bolder px-3 m-0">Feedbacks Type</p>
            <b-dropdown-item @click="applyFilter('0')">Any</b-dropdown-item>
            <b-dropdown-item @click="applyFilter('Improvement')">Suggestion For Improvement</b-dropdown-item>
            <b-dropdown-item @click="applyFilter('Complain')">Complain</b-dropdown-item>
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
      <b-col v-if="feedbacks.per_page < feedbacks.total" cols="12">
        <span class="float-right">
          <b-pagination
            v-model="currentPage"
            :total-rows="feedbacks.total"
            :per-page="feedbacks.per_page"
            @change="handlePageChange"
            aria-controls="my-table"
          ></b-pagination>
        </span>
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
      currentPage: null,
      currentIndex: -1,
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
  computed: {
    feedbacks() {
      return this.$store.state.networkProfileFeedback.feedbacks;
    },
  },
  mounted(){
    this.url = this.$route.params.id;
    this.displayFeedback(); 
  },
  methods: {
    filterFeedback() {
      this.filterData = !this.filterData;
    },
    getRequestDatas(filterData, currentPage) {
      let data = "";
      if (filterData) {
        data = "/"+filterData;
      }else if (currentPage) {
        data = "/?page="+currentPage;
      }
      console.log(data);
      return data;
    },
    applyFilter(data){
      this.loading = true;
      this.filterData = data
      console.log("searching...");
      console.log(this.filterData);
      this.displayFeedback();
    },
    displayFeedback() {
      this.loading = true;
      const data = this.getRequestDatas(this.filterData, this.currentPage);
      this.$store
      .dispatch("networkProfileFeedback/getFeedbacks", this.url+"/feedback"+data)
      .then(() => {
        this.loading = false;
        console.log('ohh yeah');
      })
      .catch( err => {
        console.log({ err: err });
        this.loading = false;
      });
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
        this.displayFeedback();
        this.loading = false;
        console.log(response);
        console.log('ohh yeah');
        this.flashMessage.show({
          status: "success",
          message: "Feedback Deleted"
        });
      })
      .catch( err => {
         this.displayFeedback();
        console.log({ err: err });
        this.loading = false;
        this.flashMessage.show({
          status: "error",
          message: "Unable to Deleted Feedback"
        });
      });
		},
    handlePageChange(value) {
      this.currentPage = value;
      console.log(this.currentPage);
      this.displayFeedback();
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
