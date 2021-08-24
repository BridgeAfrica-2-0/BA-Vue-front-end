<template>
  <div>
    <b-row>
      <b-col md="12" lg="5" xl="4" class="p-0 m-0">
        <b-card title="" header-tag="header" footer-tag="footer">
          <span class="m-1">
            <h6 class="title intro-head ">
              <b>
                <fas-icon
                  class=" icons"
                  :icon="['fas', 'exclamation-circle']"
                  size="lg"
                />
                Intro
              </b>
            </h6>
            <span class="float-right btn m-0 p-0 action-intro" v-b-modal.modal-5
              ><b-icon
                icon="pencil-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
            </span>
          </span>

          <b-card-text class="text-left username  intro-head">
            <p>
              <b-icon
                icon="briefcase-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
              <b> Work at: </b>
              <span class="text"> Current or Last Organization </span>
            </p>
            <p>
              <b-icon
                icon="book-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
              <b> Studied at: </b>
              <span class="text"> Last Education </span>
            </p>
            <p>
              <b-icon
                icon="house-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
              <b> Home Town : </b> <span class="text"> Dummy </span>
            </p>
            <p>
              <b-icon
                icon="geo-alt-fill"
                class="icon-size"
                variant="primary"
              ></b-icon
              ><b> Current City : </b> <span class="text"> Dummy </span>
            </p>
            <p>
              <b-icon
                icon="people-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
              <b> Community: </b> <span class="text"> 525 </span>
            </p>
          </b-card-text>
        </b-card>

        <b-modal id="modal-5" title=" Edit Intro">
          <div class="form-card">
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <label for="work_at"> Worked At :</label><br />
                  <input
                    type="text"
                    name="alias"
                    id="work_at"
                    placeholder="work at"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <label for="studied_at"> Studied At :</label><br />
                  <input
                    type="text"
                    name="alias"
                    id="studied_at"
                    placeholder="studied at"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <label for="home_town"> Home Town :</label><br />
                  <input
                    type="text"
                    name="alias"
                    id="home_town"
                    placeholder="home town"
                    class="form-control"
                  />
                </div>

                <div class="form-group">
                  <label for="city"> Current City :</label><br />
                  <input
                    type="text"
                    name="alias"
                    id="city"
                    placeholder="work at"
                    class="form-control"
                  />
                </div>
              </div>
            </div>
          </div>
        </b-modal>

        <Followers />

        <Community />

        <Media />
      </b-col>
      <b-col md="12" lg="7" xl="8" class="m-0 p-0 px-lg-4">
        <Owner_post />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import "@morioh/v-lightbox/dist/lightbox.css";

import Followers from "../../followers";
import Community from "./comunitiDashboard";
import Owner_post from "./owner_post";
import Media from "../../media";
// import CreatePost from "../../createPost";
// import Post from "../../post";
export default {
  name: "posts",
  components: {
    Followers,
    Media,
    Owner_post,
    Community
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
      ]
    };
  },

  methods: {
    chooseFiles: function() {
      console.log("helloo fucker");
      document.getElementById("fileUpload").click();
    }
  }
};
</script>

<style scoped>
.intro-head {
  margin-top: -20px;
}

.post-pic {
  max-width: 500px;
  max-height: 426px;
}

.clr {
  color: #e75c18;
}
@media (max-width: 576px) {
  .lb-grid {
    height: 200px;
  }
}
@media (min-width: 576px) {
  .lb-grid {
    height: 300px;
  }
}

.avatar-size {
  width: 60px;
}
@media (min-width: 768px) {
  .lb-grid {
    height: 350px;
  }
}
@media (min-width: 992px) {
  .lb-grid {
    height: 400px;
  }
}
@media (min-width: 1200px) {
  .lb-grid {
    height: 500px;
  }
}
@media (min-width: 1400px) {
  .lb-grid {
    height: 500px;
  }
}

@media (min-width: 768px) {
  .profile-pic {
    width: 64px;
    height: 64px;
  }

  .comment-pic {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 768px) {
  .profile-pic {
    width: 40px;
    height: 40px;
  }

  .comment-pic {
    width: 36px;
    height: 36px;
  }
}
</style>
