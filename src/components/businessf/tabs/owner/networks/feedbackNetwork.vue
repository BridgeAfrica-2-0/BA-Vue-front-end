<template>
  <div class="mt-3 container">
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
              <!-- <b-card>
                <b-skeleton width="85%"></b-skeleton>
                <b-skeleton width="55%"></b-skeleton>
                <b-skeleton width="70%"></b-skeleton>
              </b-card> -->
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
                    > <b-link><b-icon icon="trash-fill" variant="primary" aria-hidden="true"></b-icon></b-link>
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
          <div class="text-red" slot="no-more">{{ $t('general.No_More_Request') }}</div>
          <div class="text-red" slot="no-results">{{ $t('general.No_More_Request') }}</div>
        </infinite-loading>
      </b-col>
    </b-row>

    
    
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
      currentPage: 1,
      currentIndex: -1,
      feedbacks: [],
      options: [
        { value: "Improvement", text: this.$t('_for_Improvement') },
        { value: "Complain", text: this.$t('Complaints') }
      ],
      filters: [
        { value: "0", text: "Any" },
        { value: "Improvement", text: this.$t('general.Suggestion_for_Improvement')},
        { value: "Complain", text: this.$t('general.Complaints') }
      ],
      feedbackForm: {
        title: "Improvement",
        description: "",
      },
    };
  },
  computed:{
    
    islogin(){  return this.$store.getters["auth/isLogged"]; }
  },
  mounted(){
    this.islogin=this.$store.getters["auth/isLogged"];
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
        this.currentPage = 1;
         this.page = 0;
        this.filters=[]

        this.$nextTick(() => {
           this.$refs.infiniteLoading.attemptLoad();
        });
      });
    },

    infiniteHandler($state) {
     
      const data = this.getRequestDatas(this.filterData);
     
      let formData = new FormData();
      formData.append('keyword', data);
      console.log("network/"+this.url+"/feedbacks/"+this.currentPage)

      let url="network/"+this.url+"/feedbacks/"+this.currentPage;

        if(!this.islogin){
            url='guest/'+url;
          }

      this.axios
        .post(url, formData)
        .then(({ data }) => {
      
        let object = Object.values(data.data);
        if (object.length) {
     
          object.map((item) => {
            this.feedbacks.push(item);
          
          })
     
          this.currentPage += 1;
        
          this.loading = false;
          $state.loaded();
        } else {
          this.loading = false;
          $state.complete();
        }
      }) .catch((err) => {
        this.loading = false;
     
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
        this.feedbacks=[];
          this.currentPage = 1; 

        this.$nextTick(() => { 
          this.$refs.infiniteLoading.attemptLoad();
        });

        this.loading = false;
      
        this.flashMessage.show({
          status: "success",
          message: "Feedback Deleted"
        });
      })
      .catch( err => {

        this.currentPage = 0;
        this.filters=[]

        this.$nextTick(() => {
           this.$refs.infiniteLoading.attemptLoad();
        });
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
