<template>
  <div> 
    <!-- DOM to Create Post By A UserOwner-->  
    <b-card class="px-md-3 mb-3">
      <b-row class="mt-2">
        <b-col cols="2" md="1" class="m-md-0 p-0">
          <b-avatar
            variant="light"
            :square="'user' == profile.user_type ? false : true"
            class="img-fluid avat-comment"
            :src="profile.profile_picture"
          ></b-avatar>
        </b-col>
        <b-col cols="9" md="11" class="p-0 m-0 pr-3">
          <input
            :placeholder="$t('profileowner.Post_a_business_update')"
            v-b-modal.modal-xl
            class="comment commentt"
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
            multiple
            @change="selectMoviesOutsidePost"
            accept="video/mpeg, video/mp4, image/*"
            hidden
            ref="movie"
          />

          <b-row class="m-0 p-0">
            <!-- Add Movie -->
            <b-col cols="5" class="text-right m-0 p-0">
              <b-button
                :title="$t('profileowner.Add_Movie')"
                size="sm"
                variant="outline-primary"
                @click="$refs.movie.click()"
                class="post-btn"
              >
                <fas-icon class="icons" :icon="['fas', 'photo-video']" size="lg" />
                <span class="username"> {{ $t('profileowner.Photo_Video') }} </span>
              </b-button>
            </b-col>
            <!-- Attach File-->
            <b-col cols="4" class="text-right m-0 p-0">
              <input
                type="file"
                id="document2"
                @change="selectDocumentOutsidePost"
                multiple
                accept="application/pdf"
                hidden
                ref="document2"
              />
              <b-button
                :title="$t('profileowner.Add_Hyperlink')"
                size="sm"
                variant="outline-primary"
                @click="$refs.document2.click()"
                class="post-btn"
              >
                <fas-icon class="icons" :icon="['fas', 'file']" size="lg" />
                <span class="username">  {{$t('profileowner.Attach_File') }} </span>
              </b-button>
            </b-col>
            <!-- Post-->
            <b-col cols="3" class="text-right p-0 m-0">
              <b-button
                :title="$t('profileowner.Add_Hyperlink')"
                size="sm"
                variant="outline-primary"
                @click="createPost_"
                class="post-btn"
              >
                <fas-icon class="icons" :icon="['fas', 'paper-plane']" size="lg" />
                <span class="username"> {{ $t('profileowner.Post') }} </span>
              </b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-card>

    <!-- User Posts Listing Section-->

    <div class="">
      <div class="col-md-12 col-lg-12 d-flex align-items-stretch mb-lg-0" style="padding-left: 0; padding-top: 3px">
       
        <b-modal
          id="modal-edit"
          ref="modal-edit"
          centered
          hide-footer
          :title="$t('profileowner.Update_Post')"
          @hidden="resetPostData"
        >
          <b-row ref="loader">
            <b-col cols="1" class="m-0 p-0"></b-col>
            <b-col cols="2" class="m-0 p-0">
              <b-avatar class="d-inline-block avat" variant="light" :src="profile.profile_picture"></b-avatar>
            </b-col>
            <b-col cols="9" class="pt-2" style="margin-left: -5px">
              <h5 class="m-0 font-weight-bolder"></h5>
            </b-col>
          </b-row>
          <b-row>
            <b-col cols="1" md="1" cl ass="m-0 p-0"></b-col>
            <b-col cols="10" md="10" class="m-0 p-0">
              <br />
              <div class="cursor">
                <b-form-textarea
                  id="textarea-small"
                  autofocus
                  class="mb-2 border-none"
                  :placeholder="$t('profileowner.Post_a_business_update')"
                  v-model="edit_description"
                ></b-form-textarea>
              </div>
              <div class="bordder">
                <span class="float-left">
                  {{ $t('profileowner.Add_to_Your_Post') }}
                </span>
                <span class="float-right">
                  <b-button-group size="sm" class="">
                    <input id="video" type="file" hidden />
                    <input
                      id="image"
                      type="file"
                      hidden
                      multiple
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
                      :title="$t('profileowner.Add_Movie')"
                      size="sm"
                      variant="outline-primary"
                      @click="$refs.movies.click()"
                    >
                      <fas-icon class="icons" :icon="['fas', 'photo-video']" size="lg" />
                    </b-button>
                    <b-button
                      :title="$t('profileowner.Add_Hyperlink')"
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

              <div class="">
                <div v-for="hyperlink in createPost.hyperlinks" :key="hyperlink.fileName" class="bordder">
                  <span class="float-left"> {{ hyperlink.fileName }} </span>
                  <span class="float-right" @click="deleteItem(hyperlink.fileName)">
                    {{ $t('profileowner.delete') }}
                  </span>
                </div>

                <div id="preview" v-for="(movie, index) in edit_image" :key="movie.id">
                  <span class="upload-cancel" @click="deleteImage(index, movie)">
                    <b-icon icon="x-circle" class="oorange"> </b-icon>
                  </span>

                  <img :src="movie.media_url" />
                </div>
                <hr />

                <div v-for="movie in createPost.movies" :key="movie.fileName" class="">
                  <div id="preview">
                    <span class="upload-cancel" @click="deleteItem(movie.fileName)">
                      <b-icon icon="x-circle" class="oorange"> </b-icon>
                    </span>
                     
                     
                    <span> </span>
                    <img v-if="movie.fileType == 'image'" :src="movie.link" />

                    <video v-else width="97%" height="240" autoplay>
                      <source :src="movie.link" type="video/mp4" />
                    </video>

                  </div>
                </div> 
              </div>
             
              <span>
                <b-button @click="updatePost" variant="primary" block
                  ><b-icon icon="cursor-fill" variant="primary"></b-icon> {{ $t('profileowner.Publish') }}</b-button
                >
              </span>
            </b-col>
            <b-col cols="1" md="1" class="m-0 p-0"></b-col>
          </b-row>
        </b-modal>
        <!-- create post  lllllll -->

        <b-modal
          id="modal-xl"
          ref="modal-xl"
          centered
          hide-footer
          :title="$t('profileowner.Create_Post')"
          @hidden="resetPostData"
        >
          <b-row ref="loader">
            <b-col cols="1" class="m-0 p-0"></b-col>
            <b-col cols="2" class="m-0 p-0">
              <b-avatar class="d-inline-block avat" variant="light" :src="profile.profile_picture"></b-avatar>
            </b-col>
            <b-col cols="9" class="pt-2" style="margin-left: -5px">
              <h4 class="m-0 username">{{ info.user.name }}</h4>
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
                  autofocus
                  :placeholder="$t('profileowner.Post_a_business_update')"
                  v-model="createPost.postBusinessUpdate"
                ></b-form-textarea>
              </div>
              <div class="bordder">
                <span class="float-left">
                  {{ $t('profileowner.Add_to_Your_Post') }}
                </span>
                <span class="float-right">
                  <b-button-group size="sm" class="">
                    <input id="video" type="file" hidden />
                    <input
                      id="image"
                      type="file"
                      hidden
                      multiple
                      @change="selectMovies"
                      accept="video/mpeg,video/mp4,image/*"
                      ref="movies"
                    />
                    <input
                      id="document"
                      type="file"
                      multiple
                      @change="selectDocument"
                      hidden
                      accept="application/pdf"
                      ref="document"
                    />

                    <b-button
                      :title="$t('profileowner.Add_Movie')"
                      size="sm"
                      variant="outline-primary"
                      @click="$refs.movies.click()"
                    >
                      <fas-icon class="icons" :icon="['fas', 'photo-video']" size="lg" />
                    </b-button>
                    <b-button
                      :title="$t('profileowner.Add_Hyperlink')"
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

              <div class="">
                <div v-for="hyperlink in createPost.hyperlinks" :key="hyperlink.fileName" class="bordder">
                  <span class="float-left"> {{ hyperlink.fileName }} </span>
                  <span class="float-right" @click="deleteItem(hyperlink.fileName)">
                    {{ $t('profileowner.delete') }}
                  </span>
                </div>

                <div v-for="movie in createPost.movies" :key="movie.fileName" class="">
                  <div id="preview">
                    <span class="upload-cancel" @click="deleteItem(movie.fileName)">
                      <b-icon icon="x-circle" class="oorange"> </b-icon>
                    </span>

                    <span> </span>
                    <img v-if="movie.fileType == 'image'" :src="movie.link" />

                    <video v-else width="97%" height="240" autoplay>
                      <source :src="movie.link" type="video/mp4" />
                    </video>
                  </div>
                </div>
              </div>

              <b-progress
                v-if="isUploading"
                :value="uploadPercentage"
                variant="primary"
                class="m13"
                show-progress
                :animated="animate"
              ></b-progress>
              <hr />

              <span>
                <b-button @click="submitPost" variant="primary" block
                  ><b-icon icon="cursor-fill" variant="primary"></b-icon> {{ $t('profileowner.Publish') }}</b-button
                >
              </span>
            </b-col>
            <b-col cols="1" md="1" class="m-0 p-0"></b-col>
          </b-row>
        </b-modal>
      </div>
    </div>

    <Post
      v-for="item in owner_post"
      usertype="user"
      :key="item.updated_at"
      :post="item"
      :mapvideo="() => mapvideo(item.media)"
      :mapmediae="() => mapmediae(item.media)"
      :businessLogo="item.profile_picture"
      :editPost="() => editPost(item)"
      :deletePost="() => deletePost(item)"
    />

    <infinite-loading :identifier="infiniteId" ref="infiniteLoading" @infinite="infiniteHandler"></infinite-loading>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

import Post from '@/components/businessOwner/ownerPostComponent';

import axios from 'axios';

export default {
  name: 'postNetwork',
  components: {
    Post,
  },
  data() {
    return {
      playerVars: {
        autoplay: 0,
      },
      page: 1,
      infiniteId: +new Date(),
      post: this.$store.state.businessOwner.ownerPost,
      url: null,
      delete: [],
      edit_description: null,
      edit_image: null,
      edit_id: null,
      uploadPercentage: 0,
      fullPage: false,

      animate: true,
      isUploading: false,
      createPost: {
        postBusinessUpdate: '',
        movies: [],
        hyperlinks: [],
      },
      isSubmitted: false,
      fileImageArr: [],
    };
  },

  methods: {
    ...mapMutations({
      auth: 'auth/profilConnected',
      postRemove: 'profile/removePost',
      postUpdate: 'profile/UpdatePost',
      postCreate: 'profile/createPost',
    }),

    mapmediae(media) {
      let mediaarr = [];

      media.forEach((item) => {
        let type = this.checkMediaType(item.media_type);
        if (type != 'video') {
          mediaarr.push(item.media_url);
        }
      });

      return mediaarr;
    },

    mapvideo(media) {
      let mediaarr = [];

      media.forEach((item) => {
        let type = this.checkMediaType(item.media_type);
        if (type == 'video') {
          mediaarr.push(item.media_url);
        }
      });

      return mediaarr;
    },

    checkMediaType(media) {
      return media.split('/')[0];
    },

    getId(video_url) {
      return this.$youtube.getIdFromUrl(video_url);
    },

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

    reloads() {
      console.log('reoading');
      this.$store.commit('profile/ownerPost', []);
    },

    infiniteHandler($state) {
      console.log('user/post/' + this.page);
      let url = 'user/post/' + this.page;

      if (this.page == 1) {
       // this.owner_post.splice(0);
      }

      this.$store
        .dispatch('profile/loadMore', url)

        .then(({ data }) => {
          console.log(data);
          if (data.data.length) {
            this.page += 1;
           if (this.page != 1) {
            this.owner_post.push(...data.data);
           }
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
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.creatform,
        canCancel: true,
        onCancel: this.onCancel,
        color: '#e75c18',
      });

      const path = `user/post/delete/${post.post_id ? post.post_id : post.id}`;
      axios
        .delete(path)
        .then((response) => {
          this.postRemove(post.id);
          this.flashMessage.show({
            status: 'success',
            blockClass: 'custom-block-class',
            message: this.$t('profileowner.Post_Deleted'),
          });
          // this.reloads();
          this.page = 1;
          this.infiniteId += 1;
          loader.hide();
        })
        .catch((err) => {
          this.sending = false;

          if (err.response.status == 422) {
            console.log({ err: err });

            this.flashMessage.show({
              status: 'error',
              blockClass: 'custom-block-class',
               message: this.flashErrors(err.response.data.errors),
            });

            loader.hide();
          } else {
            this.flashMessage.show({
              status: 'error',
              blockClass: 'custom-block-class',
              message: this.$t('profileowner.Unable_to_Delete_your_Post'),
            });
            console.log({ err: err });

            loader.hide();
          }
        });
    },

    editPost(postarray) {
      this.edit_description = postarray.content;
      this.edit_image = postarray.media;
      this.edit_id = postarray.post_id ? postarray.post_id : postarray.id;

      console.log(this.edit_image);

      this.$refs['modal-edit'].show();
    },

    updatePost() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.loader,
        canCancel: true,
        onCancel: this.onCancel,
        color: '#e75c18',
      });

      this.fileImageArr = this.createPost.movies;

      let formData2 = new FormData();

      this.delete.forEach((value, index) => {
        formData2.append('deleteImg[' + index + ']', value.id);

        console.log(value);
      });

      this.fileImageArr.forEach((value, index) => {
       

         formData2.append('media[' + index + ']', value.thisfile);

        console.log(value);
      });

      formData2.append('type', 'image');

      formData2.append('content', this.edit_description);

      this.axios
        .post('user/post/update/' + this.edit_id, formData2, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          this.postUpdate(response.data.data);

          this.flashMessage.show({
            status: 'success',
            blockClass: 'custom-block-class',
            message: this.$t('profileowner.Content_successfuly_uploaded'),
          });

          this.page = 1;
          this.infiniteId += 1;

          loader.hide();

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

            loader.hide();
            this.$refs['modal-edit'].hide();
          } else {
            this.flashMessage.show({
              status: 'error',

              message: this.$t('profileowner.Unable_to_Update_your_post'),
              blockClass: 'custom-block-class',
            });
            console.log({ err: err });
            loader.hide();
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
      console.log(file);
   
      if (file.files) {
        console.log('logging start');
        let reader = new FileReader();
        reader.onload = (e) => {
          this.createPost.movies.push({
            target: event.target,
            // thisfile:this.$refs.movies.files[0],
              thisfile:event.target.files[0],
            movie: e.target.result,
            fileName: event.target.files[0].name,
            link: URL.createObjectURL(event.target.files[0]),
            fileType: e.target.result.match(/^data:([^/]+)\/([^;]+);/)[1] || [],
          });
          console.log();
        };
        reader.readAsDataURL(file.files[0]);
      }

      console.log(this.createPost.movies);
    },

    service(file) {
      let result = null;
      if (file.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          result = e.target.result;

          return result;
        };
        reader.readAsDataURL(file.files[0]);
      }
    },

    selectMoviesOutsidePost(event) {
      const file = event.target;

      if (file.files) {
        let reader = new FileReader();
        reader.onload = (e) => {
          this.createPost.movies.push({
            target: event.target,
            movie: e.target.result,
             thisfile:event.target.files[0],
            fileName: event.target.files[0].name,
            link: URL.createObjectURL(event.target.files[0]),
            fileType: e.target.result.match(/^data:([^/]+)\/([^;]+);/)[1] || [],
          });
        };
        reader.readAsDataURL(file.files[0]);
      }

      this.$refs['modal-xl'].show();
    },

    selectDocument(event) {
      console.log(event);
      this.createPost.hyperlinks.push({
        target: event.target,
        document: this.service(event.target),
         thisfile:event.target.files[0],
        fileName: event.target.files[0].name,
      });
    },

    selectDocumentOutsidePost(event) {
      console.log(event);
      this.createPost.hyperlinks.push({
        target: event.target,
        document: this.service(event.target),
         thisfile:event.target.files[0],
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
    },

    onCancel() {
      console.log('User cancelled the loader.');
    },

    ownerPost() {
      this.$store
        .dispatch('profile/ownerPost')
        .then(() => {
          console.log('hey yeah');
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },
    

 flashErrors(errors) {
      let err = "";
      Object.values(errors).forEach((element) => {
        err = element[0];
      });

      return err;
    },


    submitPost() {
      this.isUploading = true;
      let loader = this.$loading.show({
        container: this.$refs.loader,
        canCancel: true,
        onCancel: this.onCancel,
        color: '#e75c18',
      });

      let fileImage = null;

      let formData2 = new FormData();
      console.log(this.createPost.movies);
      if (this.createPost.movies[0]) {




        fileImage = this.createPost.movies[0].target.files[0];

        this.fileImageArr = this.createPost.movies;
        console.log(this.fileImageArr);

        this.fileImageArr.forEach((value, index) => {

          

          formData2.append('media[' + index + ']', value.thisfile);

          console.log(formData2);
        });
      }

      formData2.append('type', 'image');

      formData2.append('content', this.createPost.postBusinessUpdate);

      console.log(formData2);

      this.axios
        .post('user/post', formData2, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },

          onUploadProgress: function (progressEvent) {
            this.uploadPercentage = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100));
          }.bind(this),
        })
        .then((response) => {
          this.postCreate(response.data.data);

          this.flashMessage.show({
            status: 'success',
            blockClass: 'custom-block-class',
            message: this.$t('profileowner.Content_successfuly_uploaded'),
          });
          this.isUploading = false;
          loader.hide();
          this.$refs['modal-xl'].hide();

          this.$store.commit('businessOwner/ownerPost', []);

          this.page = 1;
          this.infiniteId += 1;
          console.log('post create complete');
        })
        .catch((err) => {
          if (err.response.status == 422) {
            

            this.flashMessage.show({
              status: 'error',

               message: this.flashErrors(err.response.data.errors),
              blockClass: 'custom-block-class',
            });

            loader.hide();
            this.isUploading = false;
          } else {
            this.flashMessage.show({
              status: 'error',

              message: this.$t('profileowner.Unable_to_Create_Your_Post'),
              blockClass: 'custom-block-class',
            });
            console.log({ err: err });
            loader.hide();
            this.isUploading = false;
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
      console.log('Resetting the post data');

      if (!this.isSubmitted) {
        this.createPost.hyperlinks = [];
        this.createPost.movies = [];
        this.createPost.postBusinessUpdate = '';
      }
    },
  },
  computed: {
    imageProfile() {
      return 'yoo';
    },

    info: function () {
      return this.$store.getters['profile/getUserPostIntro'];
    },

    ...mapGetters({
      profile: 'auth/profilConnected',
      owner_post: 'profile/getOwnerPost',
    }),
  },
  mounted() {
    this.url = this.$route.params.id;
  },
};
</script>

<style >
.h-lg-250 {
  height: 350px !important;
}

.lb-item {
  background-size: auto;
}
</style>

<style scoped>
.m13 {
  margin-bottom: -13px;
}

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
  margin-left: -10px;
  right: -97%;
  position: relative;
}

.upload-cancel:hover {
  color: orange;
  font-size: 24px;
}

.oorange {
  color: red;
  font-size: 20px;
  background: white;
  border-radius: 50%;
}

.h300px {
  height: 300px;
  overflow-x: hidden;
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
@media (max-width: 762px) {
  .usernamee {
    font-weight: 600;
    font-size: 15px;
  
  }

  .videoh {
    height: 200px !important;
  }
}
.inline-comment {
  width: 95%;
}

@media (min-width: 762px) {
  .videoh {
    height: 400px !important;
  }

  .usernamee {
    font-weight: 600;
    font-size: 20px;
   
  }

  
  .username {
    font-weight: 600;
    font-size: 20px;
    text-transform: capitalize;
   
  }

  .avat {
    width: 64px;
    height: 64px;
  }
  .send-cmt {
    position: relative;
    margin-left: 93%;
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
    font-size: 16px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;
  }
  .avat-comment {
    width: 40px;
    height: 40px;
  }
}
@media (max-width: 762px) {
  .commentt{
    width: 118% !important;
    border: solid 1 px #ccc;
    border-radius: 25 px;
    background-color: #ddd;
    height: 34 px;
    padding-left: 10 px;
    margin-left: -7% !important;
  }

  .post-btn {
    border: none !important;
    margin-right: 0px;
  }
  .send-cmt {
    position: relative;
    margin-left: 100%;
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
    font-size: 16px;
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
  width: 90%;
  border: solid 1px #ccc;
  border-radius: 25px;
  background-color: #ddd;
  height: 34px;
  padding-left: 10px;
  margin-left: 8%;
  
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
  width: 2px;
  height: 20%;
  background-color: gray;
  left: 5px;
  top: 10%;
  animation-name: blink;
  animation-duration: 1200ms;
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
  border: 1px solid gray;
  height: 50px;
  padding: 6px;
  border-radius: 10px;
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

.durationn {
  font-weight: 400;
  font-size: 15px;
  color: black;
}
</style>
<style>
@media (max-width: 762px) {
  .usernamee {
    font-weight: 600;
    font-size: 15px;
    text-transform: capitalize;
   
  }

  .videoh {
    height: 200px !important;
  }
}

@media (min-width: 762px) {
  .videoh {
    height: 400px !important;
  }
}

.custom-block-class {
  position: absolute;
  z-index: 1;
}
.post-text p {
  margin: 0px;
}
.toright {
  position: absolute;
  right: 1%;
}
</style>