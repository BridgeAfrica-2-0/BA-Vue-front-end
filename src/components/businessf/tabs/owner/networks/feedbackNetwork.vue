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

            <b-dropdown-item
              href="#"
              action="suggestions"
              @click="getSuggestions"
              >suggestion for improvement</b-dropdown-item
            >
          </b-dropdown>
        </span>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12">
        <div v-for="post in 4" :key="post" :loading="load" class="mb-4">
          <b-card class="mb-2">
            <b-card-text>
              <b-row class="px-md-3">
                <b-col cols="2" md="1" class="m-0 p-0">
                  <b-avatar
                    class="d-inline-block"
                    variant="info"
                    :src="post.profileImage"
                    square
                    size="3.5rem"
                    rounded="xl"
                  ></b-avatar>
                </b-col>
                <b-col cols="10" md="11" class="pt-2">
                  <h5 class="m-0 font-weight-bolder  feedback-name ">
                    <b-link href="www.jackpot.com">
                      {{ post.profileName }}
                    </b-link>
                  </h5>
                  <p>{{ post.countDown }}</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="mt-2">
                  <p class="text-justify feedback-sent">
                    {{ post.postContent }}
                    <br />
                    <br />

                    {{ post.postContent }}
                  </p>
                </b-col>
              </b-row>
            </b-card-text>
          </b-card>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "feedbackNetwork",
  action: "feedback",
  data: () => ({
    feedbackPosts: [],
    Suggestions: [],
    load: null,
  }),
  async beforeMount() {
    if (this.action == "feedbacks") {
      await this.getFeedbacks();
    }
    if (this.action == "suggestions") {
      await this.getSuggestions();
    }
  },
  methods: {
    getFeedbacks() {
      this.load = true;
      axios
        .get()
        .then((res) => {
          this.feedbackPosts = res.data.reverse();
          this.load = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getSuggestions() {
      this.load = true;
      axios
        .get()
        .then((res) => {
          this.Suggestions = res.data.reverse();
          this.load = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
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
