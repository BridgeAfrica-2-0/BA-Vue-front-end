<template>
  <div>
    <b-row>
      <b-col md="12" lg="5" xl="4" class="p-0 m-0">
        <!-- User Posts SideBar-->
        <b-card title="" header-tag="header" footer-tag="footer">
          <span class="m-1">
            <h2 class="title intro-head ">
              <b>
                <fas-icon
                  class=" icons"
                  :icon="['fas', 'exclamation-circle']"
                  size="lg"
                />
                Intro
              </b>
            </h2>
            <span class="float-right btn m-0 p-0 action-intro" v-b-modal.modal-5
              ><b-icon
                icon="pencil-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
            </span>
          </span>

          <!-- User Post Intro-->
          <b-card-text class="text-left username  intro-head">
            <p>
              <b-icon
                icon="briefcase-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
              <b> Work at: </b>
              <span class="text">
                {{ $store.getters.getUserPostIntro.workedAt }}
              </span>
            </p>
            <p>
              <b-icon
                icon="book-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
              <b> Studied at: </b>
              <span class="text">
                {{ $store.getters.getUserPostIntro.studiedAt }}</span
              >
            </p>
            <p>
              <b-icon
                icon="house-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
              <b> Home Town : </b>
              <span class="text">
                {{ $store.getters.getUserPostIntro.homeTown }}
              </span>
            </p>
            <p>
              <b-icon
                icon="geo-alt-fill"
                class="icon-size"
                variant="primary"
              ></b-icon
              ><b> Current City : </b>
              <span class="text">
                {{ $store.getters.getUserPostIntro.currentCity }}
              </span>
            </p>
            <p>
              <b-icon
                icon="people-fill"
                class="icon-size"
                variant="primary"
              ></b-icon>
              <b> Community: </b>
              <span class="text">
                {{ $store.getters.getUserPostIntro.numbersOfFollowers }}
              </span>
            </p>
          </b-card-text>
        </b-card>

        <!-- Modal Box User Posts Form To Edit Intro-->
        <!--        <b-modal id="modal-5" title=" Edit Intro">-->
        <!--          <div class="form-card">-->
        <!--            <div class="row">-->
        <!--              <div class="col-md-12">-->
        <!--                <form>-->
        <!--                  <div>-->
        <!--                    <div class="form-group">-->
        <!--                      <label for="work_at"> Worked At :</label><br />-->
        <!--                      <input-->
        <!--                              type="text"-->
        <!--                              name="alias"-->
        <!--                              id="work_at"-->
        <!--                              placeholder="work at"-->
        <!--                              class="form-control"-->
        <!--                              ref="work_at"-->
        <!--                              :value="userProfileOwner.workedAt"-->
        <!--                      />-->
        <!--                    </div>-->

        <!--                    <div class="form-group">-->
        <!--                      <label for="studied_at"> Studied At :</label><br />-->
        <!--                      <input-->
        <!--                              type="text"-->
        <!--                              name="alias"-->
        <!--                              id="studied_at"-->
        <!--                              placeholder="studied at"-->
        <!--                              class="form-control"-->
        <!--                              :value="userProfileOwner.studiedAt"-->
        <!--                              ref="studied_at"-->
        <!--                      />-->
        <!--                    </div>-->

        <!--                    <div class="form-group">-->
        <!--                      <label for="home_town"> Home Town :</label><br />-->
        <!--                      <input-->
        <!--                              type="text"-->
        <!--                              name="alias"-->
        <!--                              id="home_town"-->
        <!--                              placeholder="home town"-->
        <!--                              class="form-control"-->
        <!--                              :value="userProfileOwner.homeTown"-->
        <!--                              ref="home_town"-->
        <!--                      />-->
        <!--                    </div>-->

        <!--                    <div class="form-group">-->
        <!--                      <label for="city"> Current City :</label><br />-->
        <!--                      <input-->
        <!--                              type="text"-->
        <!--                              name="alias"-->
        <!--                              id="city"-->
        <!--                              placeholder="work at"-->
        <!--                              class="form-control"-->
        <!--                              :value="userProfileOwner.currentCity"-->
        <!--                              ref="city"-->
        <!--                      />-->
        <!--                    </div>-->
        <!--                  </div>-->
        <!--                </form>-->
        <!--              </div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </b-modal>-->

        <b-modal
          id="modal-5"
          title=" Edit Intro"
          ref="modal"
          @show="resetModal"
          @hidden="resetModal"
          @ok="handleOk"
        >
          <div class="form-card">
            <div class="row">
              <div class="col-md-12">
                <form ref="form" @submit.stop.prevent="handleSubmit">
                  <b-form-group
                    label="Worked At :"
                    label-for="work_at"
                    invalid-feedback="worked at is required"
                    :state="workedAtState"
                  >
                    <b-form-input
                      id="work_at"
                      placeholder="work_at"
                      :state="workedAtState"
                      required
                      v-model="userProfileOwnerInput.workedAt"
                      :class="{
                        'is-valid': userProfileOwnerInput.workedAt !== '',
                        'is-invalid': userProfileOwnerInput.workedAt === ''
                      }"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label="Studied At :"
                    label-for="studied_at"
                    invalid-feedback="studied at is required"
                    :state="studiedAtState"
                  >
                    <b-form-input
                      id="studied_at"
                      placeholder="studied at"
                      :state="studiedAtState"
                      required
                      v-model="userProfileOwnerInput.studiedAt"
                      :class="{
                        'is-valid': userProfileOwnerInput.studiedAt !== '',
                        'is-invalid': userProfileOwnerInput.studiedAt === ''
                      }"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label="Home Town :"
                    label-for="home_town"
                    invalid-feedback="home town at is required"
                    :state="homeTownState"
                  >
                    <b-form-input
                      id="home_town"
                      placeholder="home town"
                      :state="homeTownState"
                      required
                      v-model="userProfileOwnerInput.homeTown"
                      :class="{
                        'is-valid': userProfileOwnerInput.homeTown !== '',
                        'is-invalid': userProfileOwnerInput.homeTown === ''
                      }"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group
                    label="Current City :"
                    label-for="city"
                    invalid-feedback="current city is required"
                    :state="currentCityState"
                  >
                    <b-form-input
                      id="city"
                      placeholder="Current City"
                      :state="currentCityState"
                      required
                      v-model="userProfileOwnerInput.currentCity"
                      :class="{
                        'is-valid': userProfileOwnerInput.currentCity !== '',
                        'is-invalid': userProfileOwnerInput.currentCity === ''
                      }"
                    ></b-form-input>
                  </b-form-group>
                </form>
              </div>
            </div>
          </div>
        </b-modal>

        <!-- User Profile Post Followers-->
        <!--<Followers />-->

        <!-- User Profile Post Community-->
        <Community />

        <!-- User Profile Post Media-->
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

//import Followers from "../../followers";
import Community from "./comunitiDashboard";
import Owner_post from "./owner_post";
import Media from "../../media";
export default {
  name: "posts",
  components: {
    //Followers,
    Media,
    Owner_post,
    Community
  },
  created() {
    console.log("Load User Info");
    this.$store.dispatch('loadUserPostIntro', null)
            .then( response => {
              console.log( 'Load User Intro test+++++ res')
              console.log(response)
              console.log( "Load User Intro Finish Loading" );
              this.userProfileOwner = this.$store.getters.getUserPostIntro;
              this.userProfileOwnerInput.workedAt = this.userProfileOwner.workedAt;
              this.userProfileOwnerInput.studiedAt = this.userProfileOwner.studiedAt;
              this.userProfileOwnerInput.homeTown = this.userProfileOwner.homeTown;
              this.userProfileOwnerInput.currentCity = this.userProfileOwner.currentCity;
              this.userProfileOwnerInput.numbersOfFollowers = this.userProfileOwner.numbersOfFollowers;
              return response
            })
            .catch( error => { console.log( error ) });

  },
  mounted() {
    //this.userProfileOwner = this.$store.getters.getUserPostIntro;
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
      userProfileOwner: {
        workedAt: "Current or Last Organization",
        studiedAt: "Last Education",
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
    checkFormValidity() {
      //const valid = this.$refs.form.checkValidity();
      this.workedAtState = this.userProfileOwnerInput.workedAt !== "";
      this.studiedAtState = this.userProfileOwnerInput.studiedAt !== "";
      this.homeTownState = this.userProfileOwnerInput.homeTown !== "";
      this.currentCityState = this.userProfileOwnerInput.currentCity !== "";
      return (
        this.studiedAtState &&
        this.workedAtState &&
        this.homeTownState &&
        this.currentCityState
      );
    },
    resetModal() {
      this.workedAtState = null;
      this.studiedAtState = null;
      this.homeTownState = null;
      this.currentCityState = null;
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return;
      }

      console.log("Send User Info Post");
      //console.log(this.userProfileOwnerInput);
      this.$store.dispatch("editPostUserIntro", {
        workedAt: this.userProfileOwnerInput.workedAt,
        studiedAt: this.userProfileOwnerInput.studiedAt,
        homeTown: this.userProfileOwnerInput.homeTown,
        currentCity: this.userProfileOwnerInput.currentCity,
        numbersOfFollowers: this.userProfileOwnerInput.numbersOfFollowers
      });

      // Hide the modal manually
      this.$nextTick(() => {
        this.$bvModal.hide("modal-5");
      });
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
