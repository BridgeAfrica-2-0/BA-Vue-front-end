<template>
  <div>
    <b-container fluid style="padding-left:30px; padding-right:30px">
      <b-container
        class="bb-bottom"
        v-for="(post, index) in posts"
        :key="index"
      >
        <b-list class="d-flex align-items-center m-list">
          <b-avatar class="mr-3 profile-pic"></b-avatar>
          <span class="mr-auto username">
            {{ post.name }}
            <p class="duration">{{ post.time }}</p>
          </span>
          <span class=" ">
            <div>
              <b-dropdown
                size="lg"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <b-icon icon="three-dots-vertical" font-scale="1"></b-icon>
                </template>
                <b-dropdown-item href="#" @click="approvePost(post)">
                  Approve</b-dropdown-item
                >
                <b-dropdown-item href="#" @click="DisapprovePost(post)">
                  Un Approved
                </b-dropdown-item>
              </b-dropdown>
            </div>
          </span>
        </b-list>
        <p class="text">
          {{ post.text }}
        </p>
      </b-container>

      <b-col v-if="loader" class="loader">
        <b-spinner
          style="width: 7rem; height: 7rem;"
          variant="primary"
        ></b-spinner>
      </b-col>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "pending",
  components: {},
  data() {
    return {
      posts: [
        {
          name: "test",
          time: "2:20",
          text:
            "  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati iure qui nulla fuga, quas perferendis exercitationem. Amet similique quibusdam asperiores aspernatur nisi id velit iure voluptatibus laboriosam, ducimus est voluptatum.",
        },
      ],
    };
  },
  computed: {},
  beforeMount() {
    // get the ending post
    axios.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("access_token");
    this.getPosts();
  },
  methods: {
    getPosts() {
      // get pending posts
    },
    approvePost(post) {
      let data = {
        ids: [],
      };

      let item = {
        id: null,
      };
      item.id = post.id;
      data.ids.push(item);
      axios.post("/business/post-approve", data).then(() => {
        // code goes here
        this.getPosts();
      });
    },
    DisapprovePost(post) {
      axios
        .post()
        .then(() => {
          //code goes here
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.f-right {
  float: right;
}

.b-bottom {
  border-bottom: 1px solid;
}

.bb-bottom {
  border-bottom: 0.5px solid;
  border-color: aqua;
  margin-bottom: 7px;
  margin-top: 5px;
}
</style>
