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
      v-for="(feedback, index) in feedbacks.data"
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
    <b-row v-if="feedbacks.per_page < feedbacks.total">
      <b-col cols="12">
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
import moment from 'moment'

export default {
  data() {
    return {
      url: null,
      moment: moment,

      filter: "0",
      filterData: false,
      spinner: false,

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

    applyFilter(){
      console.log("searching...");
      console.log(this.filterData);
      this.displayFeedback();
    },

    displayFeedback() {
      const data = this.getRequestDatas(this.filterData, this.currentPage);
      this.$store
      .dispatch("networkProfileFeedback/getFeedbacks", this.url+"/feedback"+data)
      .then(() => {
        console.log('ohh yeah');
      })
      .catch( err => {
        console.log({ err: err });
      });
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
        this.displayFeedback();
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
          message: "Unable to Create Feedback"
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
