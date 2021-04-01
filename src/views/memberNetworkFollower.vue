<template>
  <div>
    <Navbar />
    <b-container class="network">
      <b-row>
        <b-col class="col mb-3">
          <div>
            <b-avatar
              class="avatar"
              src="https://placekitten.com/300/300"
              size="160px"
            ></b-avatar>
            <h3>Network Name Here</h3>
            <b-button class="join-btn" variant="success"
              ><b-icon icon="check"></b-icon>Joined</b-button
            >
          </div>
          <div>
            <b-avatar src="https://placekitten.com/300/300"></b-avatar>
            <strong>
              Interacting as Mapoure Agrobusiness
            </strong>
            <div class="mt-2">
              <p>
                <fas-icon class="icon-color" :icon="['fas', 'briefcase']" />
                Business Name Here
              </p>
              <p>
                <fas-icon class="icon-color" :icon="['fas', 'globe']" /> Private
              </p>
              <p>
                <fas-icon class="icon-color" :icon="['fas', 'users']" /> 3.5k
                Members
              </p>
              <h5><b>About</b></h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit
                vel quae, commodi unde odio ut officia cumque laudantium ex
                itaque. Quod illo aspernatur modi minima totam, qui delectus
                corporis officiis nostrum inventore laborum voluptas autem quos!
                Possimus corrupti deserunt accusamus odit pariatur at aliquam ab
                totam tempora vel magnam, voluptatibus sed animi voluptate
                labore quasi maiores. <b-link>Read More</b-link>
              </p>
            </div>
            <hr />
            <b-row>
              <b-col>
                <b-avatar-group size="60px">
                  <b-avatar></b-avatar>
                  <b-avatar text="BV" variant="primary" size="sm"></b-avatar>
                  <b-avatar
                    src="https://placekitten.com/300/300"
                    variant="info"
                  ></b-avatar>
                </b-avatar-group>
              </b-col>
              <b-col class="col-4">
                <b-button variant="outline-primary" size="sm"
                  >+ Invite</b-button
                >
              </b-col>
            </b-row>
            <b-link>View All Members</b-link>
          </div>
        </b-col>
        <b-col class="col">
          <b-tabs content-class="mt-3" fill pills card>
            <b-tab title="Posts"><Posts /></b-tab>
            <b-tab title="Media"><Media /></b-tab>
            <b-tab title="Members"><Members /></b-tab>
            <b-tab title="Feedback"><Feedback /></b-tab>
          </b-tabs>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Posts from "../components/memberNetworkF/posts";
import Media from "../components/memberNetworkF/media/media";
import Members from "../components/memberNetworkF/members";
import Feedback from "../components/memberNetworkF/feedback";
export default {
  components: {
    Navbar,
    Footer,
    Posts,
    Media,
    Members,
    Feedback,
  },
};
</script>

<style scoped>
.avatar {
  margin-left: 190px;
}

.join-btn {
  margin-left: 220px;
}
h3 {
  text-align: center;
}

.icon-color {
  color: #e75c18;
}

.network{
  margin-top: 90px;
}
@media only screen and (max-width: 768px) {
  .avatar {
    margin-left: 90px;
  }
  .join-btn {
    margin-left: 120px;
  }
}
</style>
