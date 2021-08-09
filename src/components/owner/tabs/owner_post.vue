<template>
  <div>
    <!-- DOM to Create Post By A UserOwner-->
    <b-card class="px-md-3 mb-3">
      <b-row class="mt-2">
        <b-col cols="3" md="1" class="m-md-0 p-md-0">
          <b-avatar
            variant="primary"
            class="img-fluid avat-comment"
            :src="imageProfile"
          ></b-avatar>
        </b-col>
        <b-col cols="9" md="11" class="p-0 m-0 pr-3">
          <input
            placeholder="Post a business update"
            v-b-modal.modal-xl
            class="comment"
            type="text"
          />
          <fas-icon class="primary send-cmt" :icon="['fas', 'paper-plane']" />
        </b-col>
      </b-row>
      <hr width="100%" class="m-up" />
      <b-row>
        <b-col cols="12" md="12" class="m-0 p-0">
          <input
            type="file"
            id="chosefile"
            @change="selectMoviesOutsidePost"
            accept="video/mpeg, video/mp4, image/*"
            hidden
            ref="movie"
          />
          <b-row class="m-0 p-0">
            <!-- Add Movie -->
            <b-col cols="5" class="text-right m-0 p-0">
              <b-button
                title="Add Movie"
                size="sm"
                variant="outline-primary"
                @click="$refs.movie.click()"
                class="post-btn"
              >
                <fas-icon
                  class="icons"
                  :icon="['fas', 'photo-video']"
                  size="lg"
                />
                <span class="username"> Photo/ Video </span>
              </b-button>
            </b-col>
            <!-- Attach File-->
            <b-col cols="4" class="text-right m-0 p-0">
              <input
                type="file"
                id="document2"
                @change="selectDocumentOutsidePost"
                accept="application/pdf"
                hidden
                ref="document2"
              />
              <b-button
                title="Add Hyperlink"
                size="sm"
                variant="outline-primary"
                @click="$refs.document2.click()"
                class="post-btn"
              >
                <fas-icon class="icons" :icon="['fas', 'file']" size="lg" />
                <span class="username"> Attach File </span>
              </b-button>
            </b-col>
            <!-- Post-->
            <b-col cols="3" class="text-right p-0 m-0">
              <b-button
                title="Add Hyperlink"
                size="sm"
                variant="outline-primary"
                @click="createPost_"
                class="post-btn"
              >
                <fas-icon
                  class="icons"
                  :icon="['fas', 'paper-plane']"
                  size="lg"
                />
                <span class="username"> Post </span>
              </b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card>

    <!-- User Posts Listing Section-->
    <b-card class="px-md-3">
      <div class="">
        <div
          class="col-md-12 col-lg-12 d-flex align-items-stretch mb-lg-0"
          style="padding-left: 0; padding-top: 3px;"
        >
          <!-- <b-button v-b-modal.modal-xl variant="primary">xl modal</b-button> -->
          <!-- Modal For Create Post User-->
          <b-modal
            id="modal-xl"
            ref="modal-xl"
            centered
            hide-footer
            title="Create Post"
            @hidden="resetPostData"
          >
            <b-row>
              <b-col cols="1" class="m-0 p-0"></b-col>
              <b-col cols="2" class="m-0 p-0">
                <b-avatar
                  class="d-inline-block avat"
                  variant="primary"
                  :src="imageProfile"
                ></b-avatar>
              </b-col>
              <b-col cols="9" class="pt-2" style="margin-left:-5px">
                <h5 class="m-0 font-weight-bolder">{{ profileNamePost }}</h5>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="1" md="1" cl ass="m-0 p-0"></b-col>
              <b-col cols="10" md="10" class="m-0 p-0">
                <br />
                <div class="cursor">
                  <b-form-textarea
                    id="textarea-small"
                    class="mb-2 border-none"
                    placeholder="Post a business update"
                    v-model="createPost.postBusinessUpdate"
                    :class="{
                      'is-valid': createPost.postBusinessUpdate !== '',
                      'is-invalid': createPost.postBusinessUpdate === ''
                    }"
                  ></b-form-textarea>

                  <i></i>
                </div>
                <div class="bordder">
                  <span class="float-left"> Add to Your Post </span>
                  <span class="float-right">
                    <b-button-group size="sm" class="">
                      <input id="video" type="file" hidden />
                      <input
                        id="image"
                        type="file"
                        hidden
                        @change="selectMovies"
                        accept="video/mpeg,video/mp4,image/*"
                        ref="movies"
                      />
                      <input
                        id="document"
                        type="file"
                        @change="selectDocument"
                        hidden
                        accept="application/pdf"
                        ref="document"
                      />

                      <b-button
                        title="Add Movie"
                        size="sm"
                        variant="outline-primary"
                        @click="$refs.movies.click()"
                      >
                        <fas-icon
                          class="icons"
                          :icon="['fas', 'photo-video']"
                          size="lg"
                        />
                      </b-button>
                      <b-button
                        title="Add Hyperlink"
                        size="sm"
                        variant="outline-primary"
                        @click="$refs.document.click()"
                      >
                        <fas-icon
                          class="icons"
                          :icon="['fas', 'file']"
                          size="lg"
                        />
                      </b-button>
                    </b-button-group>
                  </span>
                </div>
                <br />
                <div
                  v-for="hyperlink in createPost.hyperlinks"
                  :key="hyperlink.fileName"
                  class="bordder"
                >
                  <span class="float-left"> {{ hyperlink.fileName }} </span>
                  <span
                    class="float-right"
                    @click="deleteItem(hyperlink.fileName)"
                  >
                    delete
                  </span>
                </div>
                <div
                  v-for="movie in createPost.movies"
                  :key="movie.fileName"
                  class="bordder"
                >
                  <span class="float-left"> {{ movie.fileName }} </span>
                  <span class="float-right" @click="deleteItem(movie.fileName)">
                    delete
                  </span>
                </div>
                <br />

                <span>
                  <b-button @click="submitPost" variant="primary" block
                    ><b-icon icon="cursor-fill" variant="primary"></b-icon>
                    Publish</b-button
                  >
                </span>
              </b-col>
              <b-col cols="1" md="1" class="m-0 p-0"></b-col>
            </b-row>
          </b-modal>
        </div>
      </div>

      <!-- User Posts Listing Section-->
      <b-row
        class="mt-4"
        v-for="item in $store.getters.getPostLists"
        :key="item.post_id"
      >
        <b-col cols="12" class="mt-4">
          <b-row>
            <b-col cols="2" md="1" class="m-0 p-0">
              <b-avatar
                class="d-inline-block avat"
                variant="primary"
                :src="$store.getters.getProfilePicture"
              ></b-avatar>
            </b-col>
            <b-col cols="10" md="11" class="pt-2">
              <h5 class="m-0 font-weight-bolder">
                {{ item.profileName }}
                <span class="float-right">
                  <b-dropdown variant="outline-primary" size="sm" no-caret>
                    <template #button-content>
                      <b-icon icon="three-dots" aria-hidden="true"></b-icon>
                    </template>

                    <!--
                            <b-dropdown-item-button>
                              <b-icon icon="lock-fill" aria-hidden="true"></b-icon>
                              Locked <span class="sr-only">(Click to unlock)</span>
                            </b-dropdown-item-button>
                            <b-dropdown-divider></b-dropdown-divider>

                            -->

                    <b-dropdown-item-button variant="info">
                      <b-icon icon="pencil" aria-hidden="true"></b-icon>
                      Edit
                    </b-dropdown-item-button>

                    <b-dropdown-item-button variant="danger">
                      <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                      Delete
                    </b-dropdown-item-button>
                  </b-dropdown>
                </span>
              </h5>
              <p class="duration">{{ item.timeCountDown }} Ago</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" class="mt-2">
              <p class="post-text">
                <read-more
                  more-str="read more"
                  :text="item.content.details"
                  link="#"
                  less-str="read less"
                  :max-chars="200"
                ></read-more>
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col v-if="item.content.movies.length > 0" cols="12" class="mt-2">
              <div v-for="movie in item.content.movies" :key="movie.target" class="">
                <img
                  class="img-fluid post-container "
                  :src="movie.movie"
                  alt="Photo1"
                />
              </div>
            </b-col>
            <b-col
              v-if="item.content.movies.length <= 0"
              cols="12"
              class="mt-2"
            >
              <div class="">
                <img
                  class="img-fluid post-container "
                  :src="$store.getters.getProfilePicture"
                  alt="Photo1"
                />
              </div>
            </b-col>
            <b-col class="mt-1">
              <span class="mr-3"
                ><b-icon
                  icon="suit-heart"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                {{ item.likes.length }}</span
              >
              <span
                ><b-icon
                  icon="chat-fill"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                {{ item.comments.length }}</span
              >

              <span>
                <fas-icon class="primary ml-3" :icon="['fas', 'share']" />
              </span>
            </b-col>
          </b-row>

          <b-row class="mt-2">
            <b-col cols="3" md="1" class="m-md-0 p-md-0">
              <b-avatar
                variant="primary"
                class="img-fluid avat-comment"
                :src="$store.getters.getProfilePicture"
              ></b-avatar>
            </b-col>
            <b-col cols="9" md="11" class="p-0 m-0 pr-3">
              <input placeholder="Post a Comment" class="comment" type="text" />

              <fas-icon
                class="primary send-cmt"
                :icon="['fas', 'paper-plane']"
              />
            </b-col>
          </b-row>
        </b-col>

        <Comment
          v-for="comment in item.comments"
          :key="comment.comment_id"
          :comment="comment"
        />
      </b-row>
    </b-card>
  </div>
</template>

<script>
import Comment from "../comment";

export default {
  name: "postNetwork",

  components: {
    Comment
  },
  data() {
    return {
      images: [
        "https://i.wifegeek.com/200426/f9459c52.jpg",
        "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
        "https://i.wifegeek.com/200426/5fa51df3.jpg",
        "https://i.wifegeek.com/200426/663181fe.jpg",
        "https://i.wifegeek.com/200426/2d110780.jpg",
        "https://i.wifegeek.com/200426/e73cd3fa.jpg",
        "https://i.wifegeek.com/200426/15160d6e.jpg",
        "https://i.wifegeek.com/200426/d0c881ae.jpg",
        "https://i.wifegeek.com/200426/a154fc3d.jpg",
        "https://i.wifegeek.com/200426/71d3aa60.jpg",
        "https://i.wifegeek.com/200426/d17ce9a0.jpg",
        "https://i.wifegeek.com/200426/7c4deca9.jpg",
        "https://i.wifegeek.com/200426/64672676.jpg",
        "https://i.wifegeek.com/200426/de6ab9c6.jpg",
        "https://i.wifegeek.com/200426/d8bcb6a7.jpg",
        "https://i.wifegeek.com/200426/4085d03b.jpg",
        "https://i.wifegeek.com/200426/177ef44c.jpg",
        "https://i.wifegeek.com/200426/d74d9040.jpg",
        "https://i.wifegeek.com/200426/81e24a47.jpg",
        "https://i.wifegeek.com/200426/43e2e8bb.jpg"
      ],
      imagees: [
        "https://i.wifegeek.com/200426/f9459c52.jpg",
        "https://i.wifegeek.com/200426/5ce1e1c7.jpg"
      ],

      ima: [
        "https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
        "https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg",
        "https://i.wifegeek.com/200426/5ce1e1c7.jpg"
      ],
      createPost: {
        profile_picture: this.$store.getters.getProfilePicture,
        postBusinessUpdate: "",
        movies: [],
        hyperlinks: []
      },
      isSubmitted: false
    };
  },
  created() {
    //console.log(this.$store.getters.getUser);
    //this.createPost.profile_picture = localStorage.getItem("profile_image");
    //console.log("Tester les listing des Posts");
    //console.log(this.$store.getters.getUser[0].posts);
    this.$store
      .dispatch("loadPostsList", null)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    chooseImage: function() {
      //console.log(this.$store.getters.getUser[0]);
    },

    chooseVideo: function() {
      document.getElementById("chosefile").click();
    },

    chooseDocument() {
      document.getElementById("chosefile").click();
    },
    selectMovies(event) {
      const file = event.target;
      if (file.files) {
        let reader = new FileReader();
        reader.onload = e => {
          //localStorage.setItem("cover_image", e.target.result);
          //this.user.cover_image = e.target.result;
          //console.log( "It pass")
          //console.log( result );
          this.createPost.movies.push({
            target: event.target,
            movie: e.target.result,
            fileName: event.target.files[0].name
          });
        };
        reader.readAsDataURL(file.files[0]);
      }
    },
    service(file) {
      let result = null;
      if (file.files) {
        let reader = new FileReader();
        reader.onload = e => {
          result = e.target.result;
          //localStorage.setItem("cover_image", e.target.result);
          //this.user.cover_image = e.target.result;
          //console.log( "It pass")
          //console.log( result );
          return result;
        };
        reader.readAsDataURL(file.files[0]);
      }
    },
    selectMoviesOutsidePost(event) {
      console.log(event);
      this.createPost.movies.push({
        target: event.target,
        movie: this.service(event.target),
        fileName: event.target.files[0].name
      });
      this.$refs["modal-xl"].show();
    },
    selectDocument(event) {
      console.log(event);
      this.createPost.hyperlinks.push({
        target: event.target,
        document: this.service(event.target),
        fileName: event.target.files[0].name
      });
    },
    selectDocumentOutsidePost(event) {
      console.log(event);
      this.createPost.hyperlinks.push({
        target: event.target,
        document: this.service(event.target),
        fileName: event.target.files[0].name
      });
      this.$refs["modal-xl"].show();
    },
    createPost_() {
      this.$refs["modal-xl"].show();
    },
    deleteItem(name) {
      const newHyperlinks = this.createPost.hyperlinks.filter(
        item => item.fileName.trim() !== name.trim()
      );
      const movies = this.createPost.movies.filter(
        item => item.fileName.trim() !== name.trim()
      );
      this.createPost.hyperlinks = [...newHyperlinks];
      this.createPost.movies = [...movies];
    },
    submitPost() {
      if (this.createPost.postBusinessUpdate.trim() === "") {
        this.$refs["modal-xl"].show();
        return;
      }
      this.isSubmitted = true;
      console.log("Send New Post");
      console.log(this.createPost);
      this.$store.dispatch("createPost", {
        postBusinessUpdate: this.createPost.postBusinessUpdate,
        movies: this.createPost.movies,
        hyperlinks: this.createPost.hyperlinks
      });
      this.$refs["modal-xl"].hide();
    },
    showModal() {
      this.$refs["modal-3"].show();
    },
    hideModal() {
      this.$refs["modal-3"].hide();
    },
    resetPostData() {
      console.log("Test");
      console.log("Reinitialisation des donnees du POST");
      if (!this.isSubmitted) {
        this.createPost.hyperlinks = [];
        this.createPost.movies = [];
        this.createPost.postBusinessUpdate = "";
      }
    }
  },
  computed: {
    imageProfile() {
      console.log("Image Profile Post");
      return this.$store.getters.getProfilePicture;
    },
    profileNamePost() {
      console.log("Profile Name");
      console.log(this.$store.getters.getUser[0]);
      return this.$store.getters.getUser[0].createPost.profileNamePost;
    }
  }
};
</script>

<style scoped>
.pending-post-view {
  background-color: #8bd06c;
  border-color: #000;
  border: solid 3px;
}

.action-intro {
  font-size: 1rem;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.row.sub-sidebar-2.pending-post-view {
  background-color: #8bd06c;
  border-color: #000;
  border: solid 3px;
}

.color-site {
  color: #e75c18;
}

@media (min-width: 762px) {
  .avat {
    width: 64px;
    height: 64px;
  }

  .send-cmt {
    position: relative;
    margin-left: 95%;
    top: -28px;
    cursor: pointer;
  }

  .post-btn {
    border: none !important;
    margin-right: 50px;
  }

  .post-container {
    max-width: 500px;
    max-height: 462px;
  }

  .post-text {
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  .avat-comment {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 762px) {
  .post-btn {
    border: none !important;
    margin-right: 0px;
  }

  .send-cmt {
    position: relative;
    margin-left: 90%;
    top: -28px;
    cursor: pointer;
  }

  .avat {
    width: 40px;
    height: 40px;
  }

  .avat-comment {
    width: 36px;
    height: 36px;
  }

  .post-text {
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
  }
}

.comment-box {
  margin-left: -40px;
  position: relative;
  background-color: white;
}

.comment-input {
  border-radius: 24px;
  height: 34px;
  width: 315px;
}

.comment {
  width: 100%;
  border: solid 1px #ccc;
  border-radius: 25px;
  background-color: #ddd;
  height: 34px;
  padding-left: 10px;
}

.comment:focus {
  outline: none;
}

.time {
  position: relative;
  margin-left: 80px;
  top: -28px;
}

.border-none {
  border: none;
  height: 100px;
}

.cursor {
  position: relative;
}

.cursor i {
  position: absolute;
  width: 1px;
  height: 20%;
  background-color: gray;
  left: 5px;
  top: 10%;
  animation-name: blink;
  animation-duration: 800ms;
  animation-iteration-count: infinite;
  opacity: 1;
}

.cursor input:focus + i {
  display: none;
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.bordder {
  border: 1px solid #e75c18;
  height: 50px;
  padding: 6px;
}

.username {
  color: black;
}

.btn {
  border-radius: 5px;
  text-align: center;
}

.btn:hover {
  background-color: #ccc;
}

.lb-grid {
  height: 274px;
  margin-bottom: 8px;
}

.post-btn {
  border: none !important;
  margin-right: 50px;
}

.m-up {
  margin-top: -5px;
}

.is-valid {
  border-color: green;
}
.is.invalid {
  border-color: red;
}
</style>
