<template>
  <div>
    <FlashMessage />
    <!-- DOM to Create Post By A UserOwner-->
    <b-card class="px-md-3 mb-3 mt-2">
      <b-row class="mt-2">
        <b-col cols="3" md="1" class="m-md-0 p-md-0">
          <b-avatar variant="primary" class="img-fluid avat-comment" :src="business_logo"></b-avatar>
        </b-col>
        <b-col cols="9" md="11" class="p-0 m-0 pr-3">
          <input placeholder="Post a business update" v-b-modal.modal-xl class="comment" type="text" />
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
                <fas-icon class="icons" :icon="['fas', 'photo-video']" size="lg" />
                <span class="username"> Photo/ Video</span>
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
              <b-button title="Add Hyperlink" size="sm" variant="outline-primary" @click="createPost_" class="post-btn">
                <fas-icon class="icons" :icon="['fas', 'paper-plane']" size="lg" />
                <span class="username"> Post </span>
              </b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <div class="pending-post-view pt-2 mt-3">
        <p>
          Your 3 Post(s) are pending for approval.&nbsp;&nbsp;&nbsp;&nbsp;<a
            @click="this.$router.push({ name: '/pendingPost' })"
            style="color: #e75c18; text-decoration: underline"
            >View All</a
          >
        </p>
      </div>
    </b-card>

    <!-- User Posts Listing Section-->
    <b-card class="px-md-3">
      <div class="">
        <div class="col-md-12 col-lg-12 d-flex align-items-stretch mb-lg-0" style="padding-left: 0; padding-top: 3px">
          <!-- <b-button v-b-modal.modal-xl variant="primary">xl modal</b-button> -->
          <!-- Modal For Create Post User-->
          <!--   edit array   -->
          <b-modal id="modal-edit" ref="modal-edit" centered hide-footer title="Update Post" @hidden="resetPostData">
            <b-row ref="loader">
              <b-col cols="1" class="m-0 p-0"></b-col>
              <b-col cols="2" class="m-0 p-0">
                <b-avatar class="d-inline-block avat" variant="primary" :src="imageProfile"></b-avatar>
              </b-col>
              <b-col cols="9" class="pt-2" style="margin-left: -5px">
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
                    placeholder="Post a network update"
                    v-model="edit_description"
                    :class="{
                      'is-valid': createPost.postNetworkUpdate !== '',
                      'is-invalid': createPost.postNetworkUpdate === '',
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

                      <b-button title="Add Movie" size="sm" variant="outline-primary" @click="$refs.movies.click()">
                        <fas-icon class="icons" :icon="['fas', 'photo-video']" size="lg" />
                      </b-button>
                      <b-button
                        title="Add Hyperlink"
                        size="sm"
                        variant="outline-primary"
                        @click="$refs.document.click()"
                      >
                        <fas-icon class="icons" :icon="['fas', 'file']" size="lg" />
                      </b-button>
                    </b-button-group>
                  </span>
                </div>
                <br />
                <div v-for="hyperlink in createPost.hyperlinks" :key="hyperlink.fileName" class="bordder">
                  <span class="float-left"> {{ hyperlink.fileName }} </span>
                  <span class="float-right" @click="deleteItem(hyperlink.fileName)">delete </span>
                </div>
                <div v-for="(movie, index) in edit_image" :key="movie.id" class="">
                  <div id="preview">
                    <span class="upload-cancel" @click="deleteImage(index, movie)">
                      <b-icon icon="x-circle" class="oorange"> </b-icon>
                    </span>
                    <img :src="movie.media_url" />
                  </div>
                </div>
                <br />
                <div v-for="movie in createPost.movies" :key="movie.fileName" class="">
                  <div id="preview">
                    <span class="upload-cancel" @click="deleteItem(movie.fileName)">
                      <b-icon icon="x-circle" class="oorange"> </b-icon>
                    </span>
                    <img :src="movie.link" />
                  </div>
                </div>
                <br />

                <span>
                  <b-button @click="updatePost" variant="primary" block
                    ><b-icon icon="cursor-fill" variant="primary"></b-icon> Publish</b-button
                  >
                </span>
              </b-col>
              <b-col cols="1" md="1" class="m-0 p-0"></b-col>
            </b-row>
          </b-modal>

          <b-modal id="modal-xl" ref="modal-xl" centered hide-footer title="Create Post" @hidden="resetPostData">
            <b-row ref="loader">
              <b-col cols="1" class="m-0 p-0"></b-col>
              <b-col cols="2" class="m-0 p-0">
                <b-avatar class="d-inline-block avat" variant="primary" :src="profile.profile_picture"></b-avatar>
              </b-col>
              <b-col cols="9" class="pt-2" style="margin-left: -5px">
                <h5 class="m-0 font-weight-bolder">{{ profile.name }}</h5>
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
                    v-model="createPost.postNetworkUpdate"
                    :class="{
                      'is-valid': createPost.postNetworkUpdate !== '',
                      'is-invalid': createPost.postNetworkUpdate === '',
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

                      <b-button title="Add Movie" size="sm" variant="outline-primary" @click="$refs.movies.click()">
                        <fas-icon class="icons" :icon="['fas', 'photo-video']" size="lg" />
                      </b-button>
                      <b-button
                        title="Add Hyperlink"
                        size="sm"
                        variant="outline-primary"
                        @click="$refs.document.click()"
                      >
                        <fas-icon class="icons" :icon="['fas', 'file']" size="lg" />
                      </b-button>
                    </b-button-group>
                  </span>
                </div>
                <br />
                <div v-for="hyperlink in createPost.hyperlinks" :key="hyperlink.fileName" class="bordder">
                  <span class="float-left"> {{ hyperlink.fileName }} </span>
                  <span class="float-right" @click="deleteItem(hyperlink.fileName)"> delete </span>
                </div>

                <div v-for="movie in createPost.movies" :key="movie.fileName" class="">
                  <div id="preview">
                    <span class="upload-cancel" @click="deleteItem(movie.fileName)">
                      <b-icon icon="x-circle" class="oorange"> </b-icon>
                    </span>

                    <img :src="movie.link" />
                  </div>
                </div>
                <br />
                <span>
                  <b-button @click="submitPost" variant="primary" block :disabled="loading">
                    <b-icon v-if="!loading" icon="cursor-fill" variant="primary"></b-icon>
                    <b-spinner v-else small></b-spinner>
                    Publish</b-button
                  >
                </span>
              </b-col>
              <b-col cols="1" md="1" class="m-0 p-0"></b-col>
            </b-row>
          </b-modal>
        </div>
      </div>

      <!--<b-row
        class="mt-4"
        v-for="item in $store.getters.getPostLists"
        :key="item.post_id"
      >-->
      <!--
      <b-row class="mt-4" v-for="item in owner_post" :key="item.post_id">
        
        <b-col cols="12" class="mt-4">
          <b-row>
            <b-col cols="2" md="1" class="m-0 p-0">
              <b-avatar
                class="d-inline-block avat"
                variant="primary"
                :src="item.logo_path"
              ></b-avatar>
            </b-col>
            <b-col cols="10" md="11" class="pt-2">
              <h5 class="m-0 font-weight-bolder">
                {{ item.bussines_name }}
                <span class="float-right">
                  <b-dropdown variant="outline-primary" size="sm" no-caret>
                    <template #button-content>
                      <b-icon icon="three-dots" aria-hidden="true"></b-icon>
                    </template>
                    <b-dropdown-item-button
                      variant="info"
                      @click="editPost(item)"
                    >
                      <b-icon icon="pencil" aria-hidden="true"></b-icon>
                      Edit
                    </b-dropdown-item-button>

                    <b-dropdown-item-button
                      variant="danger"
                      @click="deletePost(item)"
                    >
                      <b-icon icon="trash-fill" aria-hidden="true"></b-icon>
                      Delete
                    </b-dropdown-item-button>
                  </b-dropdown>
                </span>
              </h5>
              <p class="duration">{{ moment(item.created_at).fromNow() }}</p>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="12" class="mt-2">
              <p class="post-text">
                <read-more
                  more-str="read more"
                  :text="item.content"
                  link="#"
                  less-str="read less"
                  :max-chars="200"
                ></read-more>
              </p>
            </b-col>
          </b-row>

          <b-row>
            <b-col v-if="item.media.length > 0" cols="12" class="mt-2">
              <div class="">
                <lightbox
                  :cells="item.media.length"
                  :items="
                    item.media.map(function (a) {
                      return a.media_url;
                    })
                  "
                ></lightbox>
              </div>
            </b-col>
            <b-col cols="12" class="mt-2">

            </b-col>
            <b-col class="mt-1">
              <span @click="onLike" class="mr-3"
                ><b-icon
                  icon="suit-heart"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                {{ nFormatter(item.likes_count) }}
              </span>
              <span
                ><b-icon
                  icon="chat-fill"
                  variant="primary"
                  aria-hidden="true"
                ></b-icon>
                {{ nFormatter(item.comment_count) }}
              </span>
              <span>
                <ShareButton
                  type="network"
                  :post="{ post_id: item.post_id, user_id: item.user_id }"
                />
              </span>
            </b-col>
          </b-row>

          <b-row class="mt-2">
            <b-col cols="3" md="1" class="m-md-0 p-md-0">
              <b-avatar
                variant="primary"
                class="img-fluid avat-comment"
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
        <b-col cols="12" class="mt-4">
          <Comment
            v-for="comment in item.comments"
            :key="comment.id"
            :comment="comment"
          />
        </b-col>
      </b-row> -->
      <Post v-for="item in owner_post" :key="item.post_id" :item="item" />
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
    </b-card>
  </div>
</template>

<script>
import Post from './postNetworkComponent';
import moment from 'moment';
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'postNetwork',
  components: {
    Post,
  },
  data() {
    return {
      moment: moment,
      page: 1,
      loading: false,
      // post:this.$store.state.networkProfile.ownerPost,
      url: null,
      delete: [],
      edit_description: null,
      edit_image: null,
      edit_id: null,
      comments: [],
      fullPage: false,

      createPost: {
        // profile_picture: this.$store.getters.getProfilePicture,
        postNetworkUpdate: '',
        movies: [],
        hyperlinks: [],
      },
      isSubmitted: false,
      fileImageArr: [],
    };
  },

  computed: {
    ...mapGetters({
      profile: 'auth/profilConnected',
    }),

    imageProfile() {
      return 'yoo';
    },

    business_logo() {
      return this.$store.state.networkProfile.networkInfo.logo_path;
    },
    owner_post() {
      return this.$store.state.networkProfile.ownerPost;
    },
    profileNamePost() {
      return 'yoo';
    },
  },

  created() {
    this.getAuth();
    this.url = this.$route.params.id;
  },

  beforeCreate() {
    this.$repository.share.switch(this.$route.params.id, 'network');
  },

  methods: {
    ...mapMutations({
      auth: 'auth/profilConnected',
    }),

    async getAuth() {
      const response = await this.$repository.share.WhoIsConnect({ networkId: this.$route.params.id });

      if (response.success) this.auth(response.data);
    },
    
    infiniteHandler($state) {
      this.axios
        .get('network/show/post/' + this.url + '/' + this.page)
        .then(({ data }) => {
          // commit('ownerPost', data.data);
          //  console.log(data);
          if (data.data.length) {
            this.page += 1;
            this.owner_post.push(...data.data);
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    deletePost(post) {
      console.log(post);

      // let loader = this.$loading.show({
      //   container: this.fullPage ? null : this.$refs.creatform,
      //   canCancel: true,
      //   onCancel: this.onCancel,
      //   color: "#e75c18",
      // });
      this.axios
        .post('network/delete/post/' + post.post_id, {
          name: this.name,
        })
        .then((response) => {
          console.log(response.data);
          this.ownerPost();
          this.flashMessage.show({
            status: 'success',
            blockClass: 'custom-block-class',
            message: 'Post Deleted',
          });
          // loader.hide();
        })
        .catch((err) => {
          this.sending = false;

          if (err.response.status == 422) {
            console.log({ err: err });

            this.flashMessage.show({
              status: 'error',
              blockClass: 'custom-block-class',
              message: err.response.data.message,
            });
            // loader.hide();
          } else {
            this.flashMessage.show({
              status: 'error',
              blockClass: 'custom-block-class',
              message: 'Unable to Delete your Post',
            });
            console.log({ err: err });

            // loader.hide();
          }
        });
    },

    editPost(postarray) {
      this.edit_description = postarray.content;
      this.edit_image = postarray.media;
      this.edit_id = postarray.post_id;
      console.log(this.edit_image);

      this.$refs['modal-edit'].show();
    },

    updatePost() {
      // let loader = this.$loading.show({
      //   container: this.fullPage ? null : this.$refs.loader,
      //   canCancel: true,
      //   onCancel: this.onCancel,
      //   color:"#e75c18"
      // });
      //  const fileImage = this.createPost.movies[0].target.files[0];
      this.fileImageArr = this.createPost.movies;
      let formData2 = new FormData();
      this.delete.forEach((value, index) => {
        formData2.append('deleteImg[' + index + ']', value.id);
        console.log(value);
      });
      this.fileImageArr.forEach((value, index) => {
        formData2.append('media[' + index + ']', value.target.files[0]);
        console.log(value);
      });
      formData2.append('type', 'image');
      formData2.append('content', this.edit_description);
      this.axios
        .post('network/edit/post/' + this.edit_id, formData2, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log(response);
          this.ownerPost();
          this.flashMessage.show({
            status: 'success',
            blockClass: 'custom-block-class',
            message: 'Content successfuly uploaded',
          });
          // loader.hide();
          this.$refs['modal-edit'].hide();
        })
        .catch((err) => {
          if (err.response.status == 422) {
            console.log({ err: err });
            console.log(err.response.data.message);
            this.flashMessage.show({
              status: 'error',
              message: err.response.data.message,
              blockClass: 'custom-block-class',
            });
            // loader.hide()
            this.$refs['modal-edit'].hide();
          } else {
            this.flashMessage.show({
              status: 'error',

              message: 'Unable to Update your post',
              blockClass: 'custom-block-class',
            });
            console.log({ err: err });
            // loader.hide()
            this.$refs['modal-edit'].hide();
          }
        });
    },

    chooseImage: function () {},
    chooseVideo: function () {
      document.getElementById('chosefile').click();
    },
    chooseDocument() {
      document.getElementById('chosefile').click();
    },
    selectMovies(event) {
      const file = event.target;
      if (file.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          //localStorage.setItem("cover_image", e.target.result);
          //this.user.cover_image = e.target.result;
          //console.log( "It pass")
          //console.log( result );
          this.createPost.movies.push({
            target: event.target,
            movie: e.target.result,
            fileName: event.target.files[0].name,
            link: URL.createObjectURL(event.target.files[0]),
          });
        };
        reader.readAsDataURL(file.files[0]);
      }
    },
    service(file) {
      let result = null;
      if (file.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
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
        fileName: event.target.files[0].name,
        link: URL.createObjectURL(event.target.files[0]),
      });
      this.$refs['modal-xl'].show();
    },
    selectDocument(event) {
      console.log(event);
      this.createPost.hyperlinks.push({
        target: event.target,
        document: this.service(event.target),
        fileName: event.target.files[0].name,
      });
    },
    selectDocumentOutsidePost(event) {
      console.log(event);
      this.createPost.hyperlinks.push({
        target: event.target,
        document: this.service(event.target),
        fileName: event.target.files[0].name,
      });
      this.$refs['modal-xl'].show();
    },
    createPost_() {
      this.$refs['modal-xl'].show();
    },

    deleteItem(name) {
      const newHyperlinks = this.createPost.hyperlinks.filter((item) => item.fileName.trim() !== name.trim());
      const movies = this.createPost.movies.filter((item) => item.fileName.trim() !== name.trim());
      this.createPost.hyperlinks = [...newHyperlinks];
      this.createPost.movies = [...movies];
    },

    deleteImage(id, eve) {
      this.edit_image.splice(id, 1);
      this.delete.push({
        id: eve.id,
      });
      console.log(this.delete);
    },

    onCancel() {
      console.log('User cancelled the loader.');
    },

    ownerPost() {
      this.$store
        .dispatch('networkProfile/ownerPost', this.url)
        .then(() => {
          console.log('hey yeah');
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    async submitPost() {
      
      this.loading = true;

      this.fileImageArr = this.createPost.movies;

      let formData2 = new FormData();
      //console.log(this.fileImageArr)

      this.fileImageArr.forEach((value, index) => {
        formData2.append('media[' + index + ']', value.target.files[0]);
        console.log(value);
        console.log(value.target.files[0]);
        console.log('testingggg');
      });

      formData2.append('type', 'image');
      //formData2.append("media", this.createPost.hyperlinks);
      formData2.append('content', this.createPost.postNetworkUpdate);
      await this.axios
        .post('network/post/create/' + this.url, formData2, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(() => {
          this.flashMessage.show({
            status: 'success',
            blockClass: 'custom-block-class',
            message: 'Content successfuly uploaded',
          });
          // loader.hide()
          this.$refs['modal-xl'].hide();
          this.ownerPost();
        })
        .catch((err) => {
          if (err.response.status == 422) {
            console.log({ err: err });
            console.log(err.response.data.message);
            this.flashMessage.show({
              status: 'error',
              message: err.response.data.message,
              blockClass: 'custom-block-class',
            });
            // loader.hide()
          } else {
            this.flashMessage.show({
              status: 'error',
              message: 'Unable to Create Your Post',
              blockClass: 'custom-block-class',
            });
            console.log({ err: err });
          }
        });
      this.loading = false;
    },

    showModal() {
      this.$refs['modal-3'].show();
    },
    hideModal() {
      this.$refs['modal-3'].hide();
    },
    resetPostData() {
      console.log('Test');
      console.log('Reinitialisation des donnees du POST');
      if (!this.isSubmitted) {
        this.createPost.hyperlinks = [];
        this.createPost.movies = [];
        this.createPost.postNetworkUpdate = '';
      }
    },
  },
};
</script>

<style scoped>
.custom-block-class {
  position: absolute;
  z-index: 1;
}

#preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

.upload-cancel {
  z-index: 1;

  margin-top: -40%;
  float: right;
}
.upload-cancel:hover {
  color: orange;
  font-size: 24px;
}

.oorange {
  color: red;
  font-size: 20px;
}

#preview img {
  object-fit: cover;
  width: 100% !important;
  height: 200px !important;
}

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
    text-align: left;
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
    text-align: left;
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
<style>
.custom-block-class {
  position: absolute;
  z-index: 1;
}
</style>