<template>
  <div>
    <navbar></navbar>
    <b-container fluid="xl" class="text-justify mt-3 order-sm-1">
      <b-row>
        <b-col md="3">
          <b-card title="" header-tag="header" footer-tag="footer">
            <template #header>
              <h6 class="mb-0 d-inline-block">{{ $t("dashboard.Intro") }}</h6>
              <span class="float-right btn m-0 p-0 mt-1 action-intro"
                ><b-icon icon="pencil-fill" variant="primary"></b-icon>
                {{ $t("dashboard.Edit_Profile") }}</span
              >
            </template>
            <img
              src="https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg"
              class="info-image"
            />
            <b-card-text class="text-left text-size mt-2">
              <p>
                <b-icon icon="briefcase-fill" variant="primary"></b-icon>
                {{ $t("dashboard.Work_at") }}:
                {{ $t("dashboard.Current_or_Last_Organization") }}
              </p>
              <p>
                <b-icon icon="book-fill" variant="primary"></b-icon>
                {{ $t("dashboard.Studied_at") }}:
                {{ $t("dashboard.Last_Education") }}
              </p>
              <p>
                <b-icon icon="house-fill" variant="primary"></b-icon>
                {{ $t("dashboard.Home_Town_Name") }}:Dummy
              </p>
              <p>
                <b-icon icon="geo-alt-fill" variant="primary"></b-icon>
                {{ $t("dashboard.Current_City_Name") }}:Dummy
              </p>
              <p>
                <b-icon icon="people-fill" variant="primary"></b-icon>
                {{ $t("dashboard.Followed_by") }}: 525
              </p>
            </b-card-text>
          </b-card>

          <b-card class="text-center mt-2 p-2">
            <div class="">
              <h6 class="font-weight-bolder">
                {{ $t("dashboard.Invite_friends_on_Bridge_Africa") }}
              </h6>
              <b-button variant="outline-primary" class="btn-block mt-2">
                <b-icon-plus></b-icon-plus>
                {{ $t("dashboard.Invite") }}</b-button
              >
            </div>
          </b-card>
        </b-col>
        <b-col md="9">
          <b-card class="p-2">
            <h3 class="font-weight-bolder">
              {{ $t("dashboard.Welcome_to_Bridge_Africa") }}, Maxine
            </h3>
            <hr width="100%" />

            <div class="d-flex flex-row align-items-center px-1">
              <div class="my-border rounded-circle welcome-section-number mr-2">
                1
              </div>
              <div class="h5 font-weight-bold mb-0">
                {{ $t("dashboard.Follow_People") }}
              </div>
            </div>
            <hr width="100%" />

            <div v-for="i in 2" :key="i">
              <p class="">
                <span class="">
                  <b-avatar
                    class="d-inline-block bg-transparent"
                    src="https://dashboard.bridgeafrica.info/resources/images/logo.png"
                    size="3.5rem"
                  ></b-avatar>
                  <h5 class="m-0 font-weight-bolder d-inline-block ml-2">
                    John Sena
                  </h5>
                </span>
                <span class="float-right mt-1">
                  <b-button variant="outline-primary" class="mt-2"
                    >{{ $t("dashboard.Follow") }}
                  </b-button>
                </span>
              </p>
              <hr width="100%" />
            </div>
            <h5 class="px-1">
              <a href="#">{{ $t("dashboard.See_All") }}</a>
            </h5>
            <br />
            <br />

            <div class="d-flex flex-row align-items-center px-1">
              <div class="my-border rounded-circle welcome-section-number mr-2">
                2
              </div>
              <div class="h5 font-weight-bold mb-0">
                {{ $t("dashboard.Follow_Bussiness") }}
              </div>
            </div>
            <hr width="100%" />

            <div v-for="i in 2" :key="i">
              <p class="">
                <span class="">
                  <b-avatar
                    class="d-inline-block bg-transparent"
                    src="https://dashboard.bridgeafrica.info/resources/images/logo.png"
                    size="3.5rem"
                  ></b-avatar>
                  <h5 class="m-0 font-weight-bolder d-inline-block ml-2">
                    John Sena
                  </h5>
                </span>
                <span class="float-right mt-1">
                  <b-button variant="outline-primary" class="mt-2"
                    >{{ $t("dashboard.Follow") }}
                  </b-button>
                </span>
              </p>
              <hr width="100%" />
            </div>
            <h5 class="px-1">
              <a href="#">{{ $t("dashboard.See_All") }}</a>
            </h5>
            <br />
            <br />

            <div class="d-flex flex-row align-items-center px-1">
              <div class="my-border rounded-circle welcome-section-number mr-2">
                3
              </div>
              <div class="h5 font-weight-bold mb-0">
                {{ $t("dashboard.Update_your_profile_picture") }}
              </div>
            </div>
            <hr width="100%" />
            <div class="h-100 w-100">
              <div class="mx-auto text-center my-5">
                <b-button variant="outline-primary" class="my-2">
                  {{ $t("dashboard.Upload_Picture") }}</b-button
                >
                <p class="m-0">{{ $t("dashboard.Or") }}</p>
                <p class="mb-2">{{ $t("dashboard.No_Profile_Pic") }}</p>
                <p class="my-0">
                  <a href="#">{{ $t("dashboard.Take_A_Photo") }}</a>
                </p>
                <p class="my-2">{{ $t("dashboard.With_Your_webcam") }}</p>
              </div>
            </div>
            <hr width="100%" />
            <br />

            <b-row>
              <b-col cols="7">
                <div class="d-flex flex-row align-items-center px-1">
                  <div
                    class="my-border rounded-circle welcome-section-number mr-2"
                  >
                    3
                  </div>
                  <div class="h5 font-weight-bold mb-0">
                    {{ $t("dashboard.Get_to_know_your_setting") }} <br />
                    <span class="small"
                      >{{ $t("dashboard.Control_how_you_share_information") }}
                      <br />
                      {{ $t("dashboard.with_people_or_business") }}</span
                    >
                  </div>
                </div>
              </b-col>
              <b-col cols="5">
                <p class="">
                  <b-button variant="outline-primary" class="my-2 float-right">
                    {{ $t("dashboard.Upload_Picture") }}</b-button
                  >
                </p>
              </b-col>
            </b-row>
            <hr width="100%" />
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default {
  name: "dashboardWelcome",
  components: { Navbar, Footer }
};
</script>

<style scoped>
.action-intro {
  font-size: 0.8rem;
  font-family: Arial, sans-serif;
}
.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 0.5rem;
}
.text-size {
  font-size: 13px;
}
.info-image {
  vertical-align: middle;
  border-style: none;
  width: -moz-available;
  height: 227px;
}
.text-blue {
  color: dodgerblue;
}

.img-left {
  vertical-align: middle;
  border-style: none;
  width: inherit;
  height: inherit;
}
hr {
  border: solid 1px gainsboro;
}

.rounded-circle {
  border-radius: 50% !important;
}

.my-border {
  border: 2px solid #dee2e6 !important;
  border-color: #e75c18 !important;
}

.welcome-section-number {
  width: 40px;
  height: 40px;
  text-align: center;
  vertical-align: middle;
  line-height: 40px;
  font-weight: bold;
  color: #e75c18;
}

.small,
small {
  font-size: 80%;
  font-weight: 400;
}
</style>
