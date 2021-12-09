<template>
  <div>
    
  

    <Post
      v-for="(item, index) in owner_post"
      usertype="user"
      :key="index"
      :post="item"
      :mapvideo="() => mapvideo(item.media)"
      :mapmediae="() => mapmediae(item.media)"
      :businessLogo="item.profile_picture"
       :editPost="() => editPost(item)"
      :deletePost="() => deletePost(item)"
    
    />

    <infinite-loading
      :identifier="infiniteId"
      ref="infiniteLoading"
      @infinite="infiniteHandler"
    >
  <div slot="no-more">No more message</div>
  <div slot="no-results" class="card">No more Post </div>     </infinite-loading>
  </div>
</template>

<script>
import Post from "@/components/businessOwner/ownerPostComponent";

import axios from "axios";

export default {
  name: "postNetwork",
  components: {
    Post,
  },
  data() {
    return {
      playerVars: {
        autoplay: 0,
      },
      owner_post:[],
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
      images: ["https://i.wifegeek.com/200426/f9459c52.jpg"],
      imagees: [
        "https://i.wifegeek.com/200426/f9459c52.jpg",
        "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
      ],
      ima: [
        "https://pbs.twimg.com/media/DoNa_wKUUAASSCF.jpg",
        "https://pbs.twimg.com/media/DKO62sVXUAA0_AL.jpg",
        "https://i.wifegeek.com/200426/5ce1e1c7.jpg",
      ],
      animate: true,
      isUploading: false,
      createPost: {
        postBusinessUpdate: "",
        movies: [],
        hyperlinks: [],
      },
      isSubmitted: false,
      fileImageArr: [],
    };
  },

  methods: {
    mapmediae(media) {
      let mediaarr = [];

      media.forEach((item) => {
        let type = this.checkMediaType(item.media_type);
        if (type != "video") {
          mediaarr.push(item.media_url);
        }
      });

      return mediaarr;
    },

    mapvideo(media) {
      let mediaarr = [];

      media.forEach((item) => {
        let type = this.checkMediaType(item.media_type);
        if (type == "video") {
          mediaarr.push(item.media_url);
        }
      });

      return mediaarr;
    },

    checkMediaType(media) {
      return media.split("/")[0];
    },

    getId(video_url) {
      return this.$youtube.getIdFromUrl(video_url);
    },

    nFormatter(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
      }
      return num;
    },

    reloads() {
      console.log("reoading");
      this.$store.commit("profile/ownerPost", []);
    },

    


    
    infiniteHandler($state) {
     
      let url= "user/post/" + this.page+"?id="+this.url;
      
       this.$store.dispatch("follower/loadMore",url)
     
        .then(({ data }) => {
          console.log(data);
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
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.creatform,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      const path = `user/post/delete/${post.post_id ? post.post_id : post.id}`;
      axios
        .delete(path)
        .then((response) => {
          this.flashMessage.show({
            status: "success",
            blockClass: "custom-block-class",
            message: this.$t("profileowner.Post_Deleted"),
          });
          this.reloads();
          this.page = 1;
          this.infiniteId += 1;
          loader.hide();
        })
        .catch((err) => {
          this.sending = false;

          if (err.response.status == 422) {
            console.log({ err: err });

            this.flashMessage.show({
              status: "error",
              blockClass: "custom-block-class",
              message: err.response.data.message,
            });

            loader.hide();
          } else {
            this.flashMessage.show({
              status: "error",
              blockClass: "custom-block-class",
              message: this.$t("profileowner.Unable_to_Delete_your_Post"),
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

      this.$refs["modal-edit"].show();
    },

    updatePost() {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.loader,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      this.fileImageArr = this.createPost.movies;

      let formData2 = new FormData();

      this.delete.forEach((value, index) => {
        formData2.append("deleteImg[" + index + "]", value.id);

        console.log(value);
      });

      this.fileImageArr.forEach((value, index) => {
        formData2.append("media[" + index + "]", value.target.files[0]);

        console.log(value);
      });

      formData2.append("type", "image");

      formData2.append("content", this.edit_description);

      this.axios
        .post("user/post/update/" + this.edit_id, formData2, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          console.log(response);

          this.flashMessage.show({
            status: "success",
            blockClass: "custom-block-class",
            message: this.$t("profileowner.Content_successfuly_uploaded"),
          });

          this.reloads();
          this.page = 1;
          this.infiniteId += 1;

          loader.hide();

          this.$refs["modal-edit"].hide();
        })
        .catch((err) => {
          if (err.response.status == 422) {
            console.log({ err: err });
            console.log(err.response.data.message);

            this.flashMessage.show({
              status: "error",

              message: err.response.data.message,
              blockClass: "custom-block-class",
            });

            loader.hide();
            this.$refs["modal-edit"].hide();
          } else {
            this.flashMessage.show({
              status: "error",

              message: this.$t("profileowner.Unable_to_Update_your_post"),
              blockClass: "custom-block-class",
            });
            console.log({ err: err });
            loader.hide();
            this.$refs["modal-edit"].hide();
          }
        });
    },

    chooseImage: function () {},
    chooseVideo: function () {
      document.getElementById("chosefile").click();
    },
    chooseDocument() {
      document.getElementById("chosefile").click();
    },

    selectMovies(event) {
      const file = event.target;

      if (file.files) {
        console.log("logging start");
        let reader = new FileReader();
        reader.onload = (e) => {
          this.createPost.movies.push({
            target: event.target,
            movie: e.target.result,
            fileName: event.target.files[0].name,
            link: URL.createObjectURL(event.target.files[0]),
            fileType: e.target.result.match(/^data:([^/]+)\/([^;]+);/)[1] || [],
          });
          console.log();
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
            fileName: event.target.files[0].name,
            link: URL.createObjectURL(event.target.files[0]),
            fileType: e.target.result.match(/^data:([^/]+)\/([^;]+);/)[1] || [],
          });
        };
        reader.readAsDataURL(file.files[0]);
      }

      this.$refs["modal-xl"].show();
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
      this.$refs["modal-xl"].show();
    },
    createPost_() {
      this.$refs["modal-xl"].show();
    },

    deleteItem(name) {
      const newHyperlinks = this.createPost.hyperlinks.filter(
        (item) => item.fileName.trim() !== name.trim()
      );
      const movies = this.createPost.movies.filter(
        (item) => item.fileName.trim() !== name.trim()
      );
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
      console.log("User cancelled the loader.");
    },

    ownerPost() {
      this.$store
        .dispatch("profile/ownerPost")
        .then(() => {
          console.log("hey yeah");
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },

    submitPost() {
      this.isUploading = true;
      let loader = this.$loading.show({
        container: this.$refs.loader,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      });

      let fileImage = null;

      let formData2 = new FormData();
      console.log(this.createPost.movies);
      if (this.createPost.movies[0]) {
        fileImage = this.createPost.movies[0].target.files[0];

        this.fileImageArr = this.createPost.movies;
        console.log(this.fileImageArr);

        this.fileImageArr.forEach((value, index) => {
          formData2.append("media[" + index + "]", value.target.files[0]);
        });
      }

      formData2.append("type", "image");

      formData2.append("content", this.createPost.postBusinessUpdate);

      console.log(formData2);

      this.axios
        .post("user/post", formData2, {
          headers: {
            "Content-Type": "multipart/form-data",
          },

          onUploadProgress: function (progressEvent) {
            this.uploadPercentage = parseInt(
              Math.round((progressEvent.loaded / progressEvent.total) * 100)
            );
          }.bind(this),
        })
        .then((response) => {
          console.log(response);

          this.flashMessage.show({
            status: "success",
            blockClass: "custom-block-class",
            message: this.$t("profileowner.Content_successfuly_uploaded"),
          });
          this.isUploading = false;
          loader.hide();
          this.$refs["modal-xl"].hide();

          this.$store.commit("businessOwner/ownerPost", []);
          this.reloads();
          this.page = 1;
          this.infiniteId += 1;
          console.log("post create complete");
        })
        .catch((err) => {
          if (err.response.status == 422) {
            console.log({ err: err });
            console.log(err.response.data.message);

            this.flashMessage.show({
              status: "error",

              message: err.response.data.message,
              blockClass: "custom-block-class",
            });

            loader.hide();
            this.isUploading = false;
          } else {
            this.flashMessage.show({
              status: "error",

              message: this.$t("profileowner.Unable_to_Create_Your_Post"),
              blockClass: "custom-block-class",
            });
            console.log({ err: err });
            loader.hide();
            this.isUploading = false;
          }
        });
    },

    showModal() {
      this.$refs["modal-3"].show();
    },
    hideModal() {
      this.$refs["modal-3"].hide();
    },
    resetPostData() {
      console.log("Resetting the post data");

      if (!this.isSubmitted) {
        this.createPost.hyperlinks = [];
        this.createPost.movies = [];
        this.createPost.postBusinessUpdate = "";
      }
    },
  },
  computed: {
    imageProfile() {
      return "yoo";
    },

    info: function () {
      return this.$store.getters["profile/getUserPostIntro"];
    },

    old_owner_post() {
      return this.$store.state.profile.ownerPost;
    },

    profileNamePost() {
      return "yoo";
    },
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