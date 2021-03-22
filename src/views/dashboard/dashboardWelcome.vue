<template>
  <div>
    <navbar></navbar>
    <b-container fluid="xl" class="text-justify mt-3 order-sm-1">
      <b-row>
        <b-col md="3">
          <b-card title="" header-tag="header" footer-tag="footer">
            <template #header>
              <h6 class="mb-0 d-inline-block">Intro</h6>
              <span class="float-right btn m-0 p-0 mt-1 action-intro"
                ><b-icon icon="pencil-fill" variant="primary"></b-icon> Edit
                Profile</span
              >
            </template>
            <img
              src="https://dashboard.bridgeafrica.info/resources/images/profile-pic.jpg"
              class="info-image"
            />
            <b-card-text class="text-left text-size mt-2">
              <p>
                <b-icon icon="briefcase-fill" variant="primary"></b-icon> Work
                at: Current or Last Organization
              </p>
              <p>
                <b-icon icon="book-fill" variant="primary"></b-icon> Studied at:
                Last Education
              </p>
              <p>
                <b-icon icon="house-fill" variant="primary"></b-icon> Home Town
                Name:Dummy
              </p>
              <p>
                <b-icon icon="geo-alt-fill" variant="primary"></b-icon> Current
                City Name:Dummy
              </p>
              <p>
                <b-icon icon="people-fill" variant="primary"></b-icon> Followed
                by: 525
              </p>
            </b-card-text>
          </b-card>

          <b-card class="text-center mt-2 p-2">
            <div class="">
              <h6 class="font-weight-bolder">
                Invite friends on Bridge Africa
              </h6>
              <b-button variant="outline-primary" class="btn-block mt-2">
                <b-icon-plus></b-icon-plus> Invite</b-button
              >
            </div>
          </b-card>
        </b-col>
        <b-col md="9">
          <b-card class="p-2">
            <h3 class="font-weight-bolder">
              Welcome to Bridge Africa, Maxine
            </h3>
            <hr width="100%" />

            <div class="d-flex flex-row align-items-center px-1">
              <div class="my-border rounded-circle welcome-section-number mr-2">
                1
              </div>
              <div class="h5 font-weight-bold mb-0">Follow People</div>
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
                    >Follow
                  </b-button>
                </span>
              </p>
              <hr width="100%" />
            </div>
            <h5 class="px-1"><a href="#">See All</a></h5>
            <br />
            <br />

            <div class="d-flex flex-row align-items-center px-1">
              <div class="my-border rounded-circle welcome-section-number mr-2">
                2
              </div>
              <div class="h5 font-weight-bold mb-0">Follow Bussiness</div>
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
                    >Follow
                  </b-button>
                </span>
              </p>
              <hr width="100%" />
            </div>
            <h5 class="px-1"><a href="#">See All</a></h5>
            <br />
            <br />

            <div class="d-flex flex-row align-items-center px-1">
              <div class="my-border rounded-circle welcome-section-number mr-2">
                3
              </div>
              <div class="h5 font-weight-bold mb-0">
                Update your profile picture
              </div>
            </div>
            <hr width="100%" />
            <div class="h-100 w-100">
              <div class="mx-auto text-center my-5">
                <b-button variant="outline-primary" class="my-2">
                  Upload Picture</b-button
                >
                <p class="m-0">Or</p>
                <p class="mb-2">No Profile Pic</p>
                <p class="my-0"><a href="#">Take A Photo</a></p>
                <p class="my-2">With Your webcam</p>
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
                    Get to know your setting <br />
                    <span class="small"
                      >Control how you share information <br />
                      with people or business</span
                    >
                  </div>
                </div>
              </b-col>
              <b-col cols="5">
                <p class="">
                  <b-button variant="outline-primary" class="my-2 float-right">
                    Upload Picture</b-button
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
