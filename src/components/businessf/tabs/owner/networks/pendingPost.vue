<template>
  <div class="container">
    <b-row class="padding-post"> 
      <b-col cols="12" class="f-left">
    
        <div v-for="(post, index) in owner_post" :key="index" class="mb-4 border p-3 rounded">

          <div class="mb-2">
            <div class="f-left">
              <b-row class="px-md-3">
                <b-col cols="2" md="1" class="m-0 p-0">
                  <b-avatar
                    class="d-inline-block mt-1"
                    variant="primary"
                    :square="post.poster_type!=user"
                    :src="post.user_picture"
                    size="3.5rem"
                  ></b-avatar>
                </b-col>
                <b-col cols="10" md="11" class="pt-2">
                  <h6 class="m-0 font-weight-bolder">
                    {{ post.user_name }}
                    <span class="float-right">
                      <b-dropdown size="lg" variant="link" toggle-class="text-decoration-none" no-caret>
                        <template #button-content>
                          <b-icon-three-dots-vertical></b-icon-three-dots-vertical
                          ><span class="sr-only">{{ $t('network.Settings') }} </span>
                        </template>
                        <b-dropdown-item @click="approved(post.id, index)"  >
                          {{ $t('network.Approved') }}
                        </b-dropdown-item>
                        <b-dropdown-item @click="unapproved(post.id, index)" >
                          {{ $t('network.Unapproved') }}
                        </b-dropdown-item>
                      </b-dropdown>
                    </span>
                  </h6>
                  <p>
                    {{ moment(post.created_at).fromNow() }} - 
                    <span class="text-primary">{{ post.comment }}</span>
                  </p>    
                </b-col>
              </b-row>
              <!-- <b-row>
                <b-col cols="12" class="mt-2">
                  <p class="text-justify text">
                    {{ post.content }}
                  </p>
                </b-col>
              </b-row> -->
            </div>
          </div>
          <div class="m-0 p-0">
            <p class="post-text">
              <!--     :text="item.content.details"   -->
              <read-more
                v-if="post.content"
                :more-str="$t('search.read_more')"
                :text="post.content"
                link="#"
                :less-str="$t('search.read_less')"
                :max-chars="200"
              ></read-more>
              
            </p>
          </div>

               <div v-if="post.media"> 

          <div v-if="post.media.length > 0" class="">
            <span v-for="video in mapvideo(post.media)" :key="video">
              <youtube
                class="w-100 videoh"
                :video-id="getId(video)"
                :player-vars="playerVars"
                @playing="playing"
              ></youtube>
            </span>

            <light css=" " :cells="post.media.length" :items="mapmediae(post.media)"></light>
          </div>

      </div>
        </div>
      </b-col>
    </b-row>



     <infinite-loading
          @infinite="infiniteHandler"
          ref="AinfiniteLoading"
         
        >
          <div class="text-red" slot="no-more">
            {{ $t("network.No_More_Request") }}
          </div>
          <div class="text-red" slot="no-results">
            {{ $t("network.No_More_Request") }}
          </div>
        </infinite-loading>


    <b-row>
      <b-col>
      
      </b-col>
    </b-row>
  </div>
</template>

<script>
import light from '@/components/lightbox';

import moment from 'moment';
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'postNetwork',
  components: {
    light,
  },
  data() {
    return {
      playerVars: {
        autoplay: 0,
      },
      moment: moment,
      page: 1,
      owner_post:[],
      infiniteId: +new Date(),
      post: this.$store.state.businessOwner.ownerPost,
      url: null,
      delete: [],
      edit_description: null,
      edit_image: null,
      edit_id: null,
      uploadPercentage: 0,
      fullPage: false,
      images: ['https://i.wifegeek.com/200426/f9459c52.jpg'],
      imagees: ['https://i.wifegeek.com/200426/f9459c52.jpg', 'https://i.wifegeek.com/200426/5ce1e1c7.jpg'],
      ima: [
        'https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg',
        'https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg',
        'https://i.wifegeek.com/200426/5ce1e1c7.jpg',
      ],
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
    ...mapActions({
      approvedPost: 'networkSetting/approvedPost',
      unapprovedPost: 'networkSetting/unapprovedPost',
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
    },

    infiniteHandler($state) {
      let url = 'show/posts/pending/' + this.url + '?page=' + this.page;

     
      this.$store
        .dispatch('networkSetting/loadMore', url)
        .then(({ data }) => { console.log("------",data)
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

    approved(id, index) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.creatform,
        canCancel: true,
        onCancel: this.onCancel,
        color: '#e75c18',
      });

      
      let payload = {
        network_id:  this.url,
        post_id: id,
      };

     
      this.approvedPost(payload)
        .then(() => {
     
          this.$delete(this.owner_post, index);
          loader.hide();
        })
        .catch((err) => {
          if (err.response.status == 422) {
            console.log({ err: err });

            this.flashMessage.show({
              status: 'error',
              blockClass: 'custom-block-class',
              message: err.response.data.message,
            });

            loader.hide();
          } else {
            this.flashMessage.show({
              status: 'error',
              blockClass: 'custom-block-class',
              message: 'Unable to Approved  Post',
            });
            console.log({ err: err });

            loader.hide();
          }
        });
    },

    unapproved(id, index) {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.creatform,
        canCancel: true,
        onCancel: this.onCancel,
        color: '#e75c18',
      });

      
      let payload = {
        network_id:this.url,
        post_id: id,
      };
      this.unapprovedPost(payload)
        .then(() => {
          
            this.$delete(this.owner_post, index);
          loader.hide();
        })
        .catch((err) => {
          if (err.response.status == 422) {
            console.log({ err: err });

            this.flashMessage.show({
              status: 'error',
              blockClass: 'custom-block-class',
              message: err.response.data.message,
            });

            loader.hide();
          } else {
            this.flashMessage.show({
              status: 'error',
              blockClass: 'custom-block-class',
              message: 'Unable to Approved  Post',
            });
            console.log({ err: err });

            loader.hide();
          }
        });
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
    ...mapGetters({
      info: 'networkSetting/getNetwork',
    //  owner_post: 'networkSetting/allPendingPost',
    }),
  },
  mounted() {
    this.url = this.$route.params.id;
  },
};
</script>

<style>


@media (min-width: 762px) {

.padding-post{

  padding-Left:40px;
   padding-right:40px
}

}

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
    color: black;
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
    color: black;
  }

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
  .commentt[data-v-41fcb621] {
    width: 99%;
    border: solid 1 px #ccc;
    border-radius: 25 px;
    background-color: #ddd;
    height: 34 px;
    padding-left: 10 px;
    margin-left: 2%;
  }

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
    color: black;
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
