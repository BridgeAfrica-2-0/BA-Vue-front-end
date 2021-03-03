<template>
<div>
  <navbar />
  <b-container fluid="xl" class="text-justify mt-3 order-sm-1">
    <b-row>
      <b-col md="4">
        <b-row>
          <b-col cols="12" class="text-center px-3">
            <b-avatar
                src="https://business.bridgeafrica.info/assets/img/pea.jpg"
                class="network-profile-image-profile"
            >
            </b-avatar>
            <b-icon-plus class="network-avatar-icon"></b-icon-plus>
            <div class="mt-3 ml-2">
              <h2 class="font-weight-bolder m-0 p-0">Network Name Here</h2>
              <b-button variant="success" class="mt-2"
              ><b-icon-check class="mr-2"></b-icon-check>  Joined <b-icon-chevron-down class="ml-2"></b-icon-chevron-down></b-button
              >
            </div>
            <br>
            <b-card title="">
              <b-card-text class="text-left">
                <p>
                  <b-icon icon="briefcase-fill" variant="primary"></b-icon> Business Name Here
                </p>
                <p>
                  <b-icon icon="globe" variant="primary"></b-icon> Private
                </p>
                <p>
                  <b-icon icon="people-fill" variant="primary"></b-icon> 3.5K Members
                </p>
                <h6 class="mt-2 font-weight-bolder">About</h6>
                <p class="text-justify">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  <span class="d-inline-block float-right"> <a href="#">lire la Suite</a> </span>
                </p>
              </b-card-text>
            </b-card>

            <b-card class="mt-4" header-tag="header" footer-tag="footer">
              <template #header>
                <b-avatar-group size="30px" class="float-left">
                  <b-avatar></b-avatar>
                  <b-avatar text="BV" variant="primary"></b-avatar>
                  <b-avatar
                      src="https://placekitten.com/300/300"
                      variant="info"
                  ></b-avatar>
                  <b-avatar text="OK" variant="danger"></b-avatar>
                  <b-avatar variant="warning"></b-avatar>
                </b-avatar-group>
                <b-button variant="outline-primary" class="d-inline-block float-right" size="sm"
                ><b-icon-plus class=""></b-icon-plus>  Invite </b-button
                >
              </template>

              <b-list-group-item class="d-flex align-items-center m-0 p-2">
                <b-avatar
                    variant="info"
                    src="https://placekitten.com/300/300"
                    class="mr-3"
                ></b-avatar>
                <span class="mr-auto font-weight-bolder">Username</span>
              </b-list-group-item>
              <b-list-group-item class="d-flex align-items-center m-0 p-2">
                <b-avatar
                    variant="info"
                    src="https://placekitten.com/300/300"
                    class="mr-3"
                ></b-avatar>
                <span class="mr-auto font-weight-bolder">Username</span>
              </b-list-group-item>
              <b-list-group-item class="d-flex align-items-center m-0 p-2">
                <b-avatar
                    variant="info"
                    src="https://placekitten.com/300/300"
                    class="mr-3"
                ></b-avatar>
                <span class="mr-auto font-weight-bolder">Username</span>
              </b-list-group-item>
              <b-list-group-item class="d-flex align-items-center m-0 p-2">
                <b-avatar
                    variant="info"
                    src="https://placekitten.com/300/300"
                    class="mr-3"
                ></b-avatar>
                <span class="mr-auto font-weight-bolder">Username</span>
              </b-list-group-item>
              <b-card-text class="mt-2">
                <span class="float-right"> <a href="">View All Members</a> </span>
              </b-card-text>
            </b-card>

            <b-card class="mt-2" header-tag="header" footer-tag="footer">
              <template #header>
                <h5 class="float-left">Admin tools</h5>
              </template>
              <b-card-text>
                <p class="p-0 m-0">
                  <span class="float-left">
                  <b-icon-person-plus></b-icon-person-plus> Membership Request
                  </span>
                  <span class="count_number">
                    2
                  </span>
                </p>
                <br>
                <br>
                <p class="text-primary font-weight-bolder">
                  <span class="float-left">
                  <b-icon-chat-fill></b-icon-chat-fill> Pending Posts
                  </span>
                </p>
                <br>
                <p class="">
                  <span class="float-left">
                  <b-icon-star-fill></b-icon-star-fill> Pending Feedbacks
                  </span>
                </p>
                <br>
                <p class="">
                  <span class="float-left">
                  <b-icon-bell-fill></b-icon-bell-fill> Keywords Alerts
                  </span>
                </p>
                <br>
                <p class="">
                  <span class="float-left">
                  <b-icon-gear-fill></b-icon-gear-fill> Settings
                  </span>
                </p>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
      <b-col md="8" class="order-sm-0">
        <b-row>
          <b-col cols="12">
            <b-tabs content-class="mt-1" fill pills>
              <b-tab title="Posts" active>
                <post-network></post-network>
              </b-tab>
              <b-tab title="Media">
                <media-network></media-network>
              </b-tab>
              <b-tab title="Members">
                <member-network></member-network>
              </b-tab>
              <b-tab title="Feedback">
                <feedback-network></feedback-network>
              </b-tab>
            </b-tabs>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
  <Footer />
</div>
</template>

<script>
import navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FeedbackNetwork from "@/components/businessf/tabs/owner/networks/feedbackNetwork";
import MediaNetwork from "@/components/businessf/tabs/owner/networks/mediaNetwork";
import MemberNetwork from "@/components/businessf/tabs/owner/networks/memberNetwork";
import PostNetwork from "@/components/businessf/tabs/owner/networks/postNetwork";

export default {
name: "networks",
  components: {
    PostNetwork,
    MemberNetwork,
    MediaNetwork,
    FeedbackNetwork,
    navbar,
    Footer
  },
}
</script>

<style scoped>
.network-profile-image-profile {
  width: 12rem;
  height: 12rem;
  bottom: 5px;
  right: 5px;
}

.network-avatar-icon {
  position: absolute;
  width: 3rem;
  height: 3rem;
  top: 77px;
  right: 81px;
  padding: 0px 0px;
  color: #ffff;
  background: #E75C18;
  border-radius: 25px;
  border: 4px solid #ffff;
}

.count_number {
  padding: 0px 5px;
  float: right;
  background: #ce4b0b;
  border-radius: 24px;
  color: white;
}

</style>