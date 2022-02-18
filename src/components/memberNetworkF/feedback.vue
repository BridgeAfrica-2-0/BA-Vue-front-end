<template>
  <div>
    <b-card>
      <p class="title">
        <b>{{ $t('memnetwork.Your_Feedback_is_about') }}</b>
        <b class="text-center"><b-spinner v-if="spinner" variant="primary" label="Text Centered"></b-spinner></b>
      </p>
      <b-form-select
        required
        v-model="feedbackForm.title"
        :options="options"
      ></b-form-select>
      <p class="mt-2 username "><b>{{ $t('memnetwork.Brief_description_of_your_feedback') }}</b></p>
      <b-form-textarea
        id="textarea"
        v-model="feedbackForm.description"
        :placeholder="$t('memnetwork.Enter_something')"
        rows="3"
        class="text"
        max-rows="6"
        required
      ></b-form-textarea>
      <b-button class="float-right mt-2" variant="primary" @click="createFeedback()"> {{ $t('memnetwork.Submit') }}</b-button>
    </b-card>

    <fas-icon
      class="primary float-right mt-2 filter"
      :icon="['fas', 'filter']"
      @click="filterFeedback"
    />
    <b-card class="mt-3" v-if="filterData">
      <p class="primary text"><strong>{{ $t('memnetwork.Feedback_Type') }}</strong></p>
      <b-form-select
        required
        v-model="filterData"
        :options="filters"
        value-field="value"
        text-field="text"
      ></b-form-select>
      <b-row class="float-right mt-2">
        <b-col>
          <b-button class="reset">{{ $t('memnetwork.Reset') }}</b-button>
        </b-col>
        <b-col>
          <b-button variant="primary" @click="filterFeedback, applyFilter()" class="apply">{{ $t('memnetwork.') }}{{ $t('memnetwork.Apply') }}</b-button>
        </b-col>
      </b-row>
    </b-card>

    <b-card 
      :class="{ active: index == currentIndex }"
      v-for="(feedback, index) in feedbacks"
      :key="index"
      class="mt-5"
    >
      <div style="display:inline-flex">
        <b-avatar
          variant="primary"
          class="mt-2 avat"
          :src="feedback.profile_picture"
        ></b-avatar>

        <span class=" username  ml-3 mt-3">
          <strong>
            {{feedback.user_name}}
          </strong>
          <br />
          <small class="duration">
            {{  moment(feedback.created_at).fromNow() }} - <span class="primary">{{feedback.title}}</span>
          </small>
        </span>
      </div>

      <p class="mt-2 text ">
       {{feedback.description}}
      </p>
    </b-card>
    <b-row>
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
import moment from 'moment'

export default {
  data() {
    return {
      url: null,
      moment: moment,
      islogin:'',
      filter: "0",
      filterData: false,
      spinner: false,

      currentPage: 1,
      currentIndex: -1,
      feedbacks: [],

      options: [
        { value: "Improvement", text: this.$t('general.Suggestion_for_Improvement') },
        { value: "Complain", text: this.$t('general.Complaints')}
      ],
      filters: [
        { value: "0", text: "Any" },
         { value: "Improvement", text: this.$t('general.Suggestion_for_Improvement') },
        { value: "Complain", text: this.$t('general.Complaints')}
      ],
      feedbackForm: {
        title: "Improvement",
        description: "",
      },
    };
  },
  computed: {},
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

    applyFilter(){
      this.loading = true;
      this.feedbacks = [];
      this.filterData
  
      this.$nextTick(() => {
        this.currentPage = 1;
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
      });
    },
    infiniteHandler($state) {


      let url="network/"+this.url+"/feedbacks/"+this.currentPage;

        if(!this.islogin){
            url='guest/'+url;
          }



      const data = this.getRequestDatas(this.filterData);
   
      let formData = new FormData();
      formData.append('keyword', data);
      this.axios
        .post(url, formData)
        .then(({ data }) => {
        console.log(data);
        console.log(this.currentPage);
        console.log("converting to object");
        console.log(Object.values(data.data));
        let object = Object.values(data.data);
        if (object.length) {
          console.log("load more");
          object.map((item) => {
            this.feedbacks.push(item);
            console.log(item);
          })
          this.currentPage += 1;
          console.log(this.currentPage);
          console.log(...data.data);
          // this.feedbacks.push(...data.data);
          this.loading = false;
          $state.loaded();
        } else {
          console.log("No more data");
          this.loading = false;
          $state.complete();
        }
      }) .catch((err) => {
        this.loading = false;
        console.log({ err: err });
      })
    },

    createFeedback: function(){
      this.spinner = true;
      let formData = new FormData();
      formData.append('title', this.feedbackForm.title);
      formData.append('description', this.feedbackForm.description);
      console.log('title', this.feedbackForm.title);
      console.log('description', this.feedbackForm.description);
      this.axios.post("network/"+this.url+"/feedback/create", formData)
      .then(() => {
        this.feedbacks = [];
        this.$nextTick(() => {
          this.page = 0;
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:reset');
        });
        console.log('ohh yeah');
        this.spinner = false;
        this.flashMessage.show({
          status: "success",
          message: "You Just Created A New Feedback"
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.spinner = false;
        this.flashMessage.show({
          status: "error",
          message: this.$t('general.Unable_to_Create_Your_Feedback')
        });
      });
		},
    handlePageChange(value) {
      this.currentPage = value;
      console.log(this.currentPage);
      this.getMembers();
    },
  }
};
</script>

<style scoped>
.filter {
  cursor: pointer;
}
.reset {
  background-color: #bbb;
  border: none;
  color: white;
}
.apply {
  border: none;
}
.detail {
  position: relative;
  left: -197px;
}
@media only screen and (max-width: 768px) {
  .avat {
    width: 64px;
    height: 64px;
  }

  .detail {
    position: relative;
    left: -70px;
  }
}

@media only screen and (min-width: 768px) {
  .avat {
    width: 64px;
    height: 64px;
  }
}
</style>
