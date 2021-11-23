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
                    <b-button title="Add Hyperlink" size="sm" variant="outline-primary" @click="$refs.document.click()">
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
              <b-avatar class="d-inline-block avat" variant="primary" :src="imageProfile"></b-avatar>
            </b-col>
            <b-col cols="9" class="pt-2" style="margin-left: -5px">
              <h5 class="m-0 font-weight-bolder">{{ profileNamePost }} profileNamePost</h5>
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
                    <b-button title="Add Hyperlink" size="sm" variant="outline-primary" @click="$refs.document.click()">
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
                <b-button @click="submitPost" variant="primary" block
                  ><b-icon icon="cursor-fill" variant="primary"></b-icon> Publish</b-button
                >
              </span>
            </b-col>
            <b-col cols="1" md="1" class="m-0 p-0"></b-col>
          </b-row>
        </b-modal>
      </div>
    </div>
    <Post
      v-for="(item, index) in owner_post"
      :key="index"
      :post="item"
      :mapvideo="() => mapvideo(item.media)"
      :mapmediae="() => mapmediae(item.media)"
      :businessLogo="item.profile_picture"
      :editPost="() => editPost(item)"
      :deletePost="() => deletePost(item)"
      
    />

    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import { AllPostFeatureMixin } from '@/mixins';
import Post from '@/components/businessOwner/ownerPostComponent';
export default {
  name: 'postNetwork',
  mixins: [AllPostFeatureMixin],

  components: {
    Post,
  },

  data() {
    return {
      page: 1,
      // post:this.$store.state.networkProfile.ownerPost,
      url: null,
      delete: [],
      edit_description: null,
      edit_image: null,
      edit_id: null,

      fullPage: false,
      images: [
        'https://i.wifegeek.com/200426/f9459c52.jpg',
        'https://i.wifegeek.com/200426/5ce1e1c7.jpg',
        'https://i.wifegeek.com/200426/5fa51df3.jpg',
        'https://i.wifegeek.com/200426/663181fe.jpg',
        'https://i.wifegeek.com/200426/2d110780.jpg',
        'https://i.wifegeek.com/200426/e73cd3fa.jpg',
        'https://i.wifegeek.com/200426/15160d6e.jpg',
        'https://i.wifegeek.com/200426/d0c881ae.jpg',
        'https://i.wifegeek.com/200426/a154fc3d.jpg',
        'https://i.wifegeek.com/200426/71d3aa60.jpg',
        'https://i.wifegeek.com/200426/d17ce9a0.jpg',
        'https://i.wifegeek.com/200426/7c4deca9.jpg',
        'https://i.wifegeek.com/200426/64672676.jpg',
        'https://i.wifegeek.com/200426/de6ab9c6.jpg',
        'https://i.wifegeek.com/200426/d8bcb6a7.jpg',
        'https://i.wifegeek.com/200426/4085d03b.jpg',
        'https://i.wifegeek.com/200426/177ef44c.jpg',
        'https://i.wifegeek.com/200426/d74d9040.jpg',
        'https://i.wifegeek.com/200426/81e24a47.jpg',
        'https://i.wifegeek.com/200426/43e2e8bb.jpg',
      ],
      imagees: ['https://i.wifegeek.com/200426/f9459c52.jpg', 'https://i.wifegeek.com/200426/5ce1e1c7.jpg'],
      ima: [
        'https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg',
        'https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg',
        'https://i.wifegeek.com/200426/5ce1e1c7.jpg',
      ],
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
  mounted() {
    this.url = this.$route.params.id;
  },

  methods: {
    nFormatter(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'G';
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
      }
      return num;
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
      //    formData2.append("media", this.createPost.hyperlinks);
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
    submitPost() {
      // let loader = this.$loading.show({
      //   container: this.fullPage ? null : this.$refs.loader,
      //   canCancel: true,
      //   onCancel: this.onCancel,
      //   color:"#e75c18"
      // });
      const fileImage = this.createPost.movies[0].target.files[0];
      this.fileImageArr = this.createPost.movies;
      let formData2 = new FormData();
      this.fileImageArr.forEach((value, index) => {
        formData2.append('media[' + index + ']', value.target.files[0]);
        console.log(value);
        console.log(value.target.files[0]);
        console.log('testingggg');
      });
      console.log(this.fileImageArr);
      formData2.append('type', 'image');
      //formData2.append("media", this.createPost.hyperlinks);
      formData2.append('content', this.createPost.postNetworkUpdate);
      this.axios
        .post('network/post/create/' + this.url, formData2, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log(response);
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
            // loader.hide()
          }
        });
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