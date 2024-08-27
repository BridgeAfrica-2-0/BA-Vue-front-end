<template>
  <div>
    <b-row>
      <b-col md="12" lg="5" xl="4" class="p-0 m-0">
        <!-- User Posts SideBar-->
        <b-card title="" header-tag="header" footer-tag="footer">
          <span class="m-1">
            <h2 class="title intro-head">
              <fas-icon
                class="icons"
                :icon="['fas', 'exclamation-circle']"
                size="lg"
              />
              {{ $t("profileowner.Intro") }}
            </h2>
            <span class="float-right btn m-0 p-0 action-intro" @click="editPage"
              ><b-icon
                icon="pencil-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
            </span>
          </span>
          <!-- User Post Intro-->
          <b-card-text class="text-left username intro-head">
            <p>
              <b-icon
                icon="briefcase-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
              {{ $t("profileowner.Work_at") }}:
              <span v-if="info.user_experience">
                <span
                  class="text"
                  v-for="exp in info.user_experience.slice(0, 1)"
                  :key="exp.id"
                >
                  {{ exp.company_name }}
                </span>
              </span>
            </p>
            <p>
              <b-icon
                icon="book-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
              {{ $t("profileowner.Studied_at") }}:
              <span v-if="info.user_education != null">
                <span
                  v-for="edu in info.user_education.slice(0, 1)"
                  :key="edu.id"
                  class="text"
                >
                  {{ edu.school_name }}</span
                >
              </span>
            </p>
            <p>
              <b-icon
                icon="house-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
              {{ $t("profileowner.Home_Town") }} :
              <span class="text">
                {{ info.user.home_town }}
              </span>
            </p>
            <p>
              <b-icon
                icon="geo-alt-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
              {{ $t("profileowner.Current_City") }} :
              <span class="text">
                {{ info.user.city }}
              </span>
            </p>
            <p>
              <b-icon
                icon="people-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
              {{ $t("profileowner.Community") }}:
              <span class="text">
                {{ nFormatter(total.total_community) }}
              </span>
            </p>
          </b-card-text>
        </b-card>

        <b-modal
          id="modal-5"
          :title="$t('profileowner.Edit_Intro')"
          ref="modal"
          @ok="handleOk"
        >
          <div class="">
            <p>
              <b> {{ $t("profileowner.Work_at") }}: </b>
              <span v-if="info.user_experience">
                <span
                  class="text"
                  v-for="exp in info.user_experience.slice(0, 1)"
                  :key="exp.id"
                >
                  {{ exp.company_name }}
                </span>
              </span>
            </p>
            <p>
              <b> {{ $t("profileowner.Studied_at") }}: </b>

              <span v-if="info.user_education != null">
                <span
                  v-for="edu in info.user_education.slice(0, 1)"
                  :key="edu.id"
                  class="text"
                >
                  {{ edu.school_name }}
                </span>
              </span>
            </p>
            <p>
              <b> {{ $t("profileowner.Home_Town") }} : </b>
              <span class="text">
                {{ info.user.neighbor }}
              </span>
            </p>
            <p>
              <b> {{ $t("profileowner.Current_City") }} : </b>
              <span class="text">
                {{ info.user.city }}
              </span>
            </p>
          </div>
          <!-- </b-modal> -->

          <b> {{ $t("profileowner.Studied_at") }}: </b>
          <span
            v-for="edu in info.user_education.slice(0, 1)"
            :key="edu.id"
            class="text"
          >
            {{ edu.school_name }}</span
          >
          <!-- </p> -->
          <p>
            <b-icon
              @click="switchTab('about')"
              icon="pencil"
              class="eedit"
              variant=""
            ></b-icon>

            <b> {{ $t("profileowner.home_town") }}: </b>
            <span class="text">
              {{ info.user.neighbor }}
            </span>
          </p>
          <p>
            <b-icon
              @click="switchTab('about')"
              icon="pencil"
              class="eedit"
              variant=""
            ></b-icon>
            <b> {{ $t("profileowner.current_city") }} : </b>
            <span class="text">
              {{ info.user.city }}
            </span>
          </p>
          <!-- </div> -->
        </b-modal>

        <Community />

        <Media @on:media="value => redirectToMedia(value)" />
      </b-col>

      <b-col md="12" lg="7" xl="8" class="m-0 p-0 px-lg-4 post-padding ">
        <owner-post />
      </b-col>
    </b-row>
  </div>
</template>

<script>
import "@morioh/v-lightbox/dist/lightbox.css";
//import Followers from "../../followers";
import Community from "../sidebarcommunity";
//import Community from "./comunitiDashboard";
import OwnerPost from "./owner_post";
import Media from "../media";
// import CreatePost from "../../createPost";
// import Post from "../../post";
export default {
  name: "posts",
  components: {
    //Followers,
    Media,
    OwnerPost,
    Community
  },

  created() {
    this.workedAt = this.$t("profileowner.Current_or_Last_Organization");
    this.studiedAt = this.$t("profileowner.Last_Education");

    this.$store
      .dispatch("profile/loadUserPostIntro", null)
      .then(response => {
        this.userProfileOwner = this.$store.getters["profile/getUserPostIntro"];
        this.userProfileOwnerInput.workedAt = this.userProfileOwner.workedAt;
        this.userProfileOwnerInput.studiedAt = this.userProfileOwner.studiedAt;
        this.userProfileOwnerInput.homeTown = this.userProfileOwner.homeTown;
        this.userProfileOwnerInput.currentCity = this.userProfileOwner.currentCity;
        this.userProfileOwnerInput.numbersOfFollowers = this.userProfileOwner.numbersOfFollowers;
        return response;
      })
      .catch(error => {
        console.log(error);
      });

    this.$store
      .dispatch("profile/getImages")
      .then(response => {})
      .catch(error => {
        console.log({ error: error });
      });
  },

  computed: {
    info: function() {
      return this.$store.getters["profile/getUserPostIntro"];
    },

    total() {
      return this.$store.state.profile.Tcommunity;
    }
  },

  data() {
    return {
      userProfileOwner: {
        workedAt: null,
        studiedAt: null,
        homeTown: "Dummy",
        currentCity: "Dummy",
        numbersOfFollowers: 256
      },
      userProfileOwnerInput: {
        workedAt: "",
        studiedAt: "",
        homeTown: "",
        currentCity: "",
        numbersOfFollowers: 0
      },
      workedAtState: null,
      studiedAtState: null,
      homeTownState: null,
      currentCityState: null
    };
  },

  methods: {
    redirectToMedia: function(value) {
      console.log("redirectToMedia in posts");
      if (value) this.$emit("on:media", true);
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

    handleOk(bvModalEvt) {},

    switchTab(index) {
      this.$refs["modal"].hide();
      this.$router.push("profile_owner#" + index);
    },

    editPage() {
      this.$router.push("profile_owner");
      this.$router.push("profile_owner#about");
    }
  }
};
</script>

<style scoped>
.eedit:hover {
  font-size: 18px;
  color: #e75c18;
}
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

@media (min-width: 1200px) {
  .profile-pic {
    width: 64px;
    height: 64px;
  }
  .comment-pic {
    width: 40px;
    height: 40px;
  }

  .post-padding {
    padding-left: 60px !important;
    padding-right: 70px !important;
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
