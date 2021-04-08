<template>
  <div>
    <Navbar />
    <b-container fluid >
      <b-row>
        <b-col cols="3">
          







          <b-card title="">
      <b-container class="a-center">
        <b-avatar
          size="6em"
          src="https://business.bridgeafrica.info/assets/img/pea.jpg"
          class="network-profile-image-profile"
        >
        </b-avatar>
       
      </b-container>

      <br />      

      <b-container>
        <b-row>
          <b-col cols="6">
            <h6 class="font-weight-bolder m-0 p-0 t-align">  Maketers Union Network</h6>
          </b-col>
          <b-col cols="6">
            <b-button variant="primary" block  size="sm"   style="width: 120px;"  >
              <b-icon icon="plus-circle"></b-icon> Community
            </b-button>
          </b-col>
        </b-row>
      </b-container>

      <br />

      <b-card-text class="text-left">
        

        <b-container>
          <b-row>
            <b-col>
              <p><b-icon icon="globe" variant="primary"></b-icon> Private</p>
            </b-col>
            <b-col>
              <p>
                <b-icon icon="people-fill" variant="primary"></b-icon> 3.5K
                Members
              </p>
            </b-col>
          </b-row>
        </b-container>

        <h6 class="mt-2 font-weight-bolder">About</h6>
        <p class="text-justify">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
          <span class="d-inline-block float-right">
            <a href="#">lire la Suite</a>
          </span>
        </p>
      </b-card-text>
    </b-card>



     




     
    <b-card class="mt-4" header-tag="header" footer-tag="footer">
      <p class="t-center">
        <b>Invite your followers to follow this Network</b>
      </p>
      <input class="form-control mb-2" placeholder="Search ..." type="text" />
      <fas-icon class="primary search" :icon="['fas', 'search']" />
      <b-card-text>











         
    <div class="people-style border shadow">
      <b-row class="">
        <b-col cols="4" class="my-auto">
          <b-avatar
            variant="primary"
            src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
            size="5em"
          ></b-avatar>
        </b-col>

        <b-col cols="">
          <div>
            <div class="e-name" style="margin-top: -9px;">
              <h6 >
                <br />
              <strong>  howty Circlehead  </strong>
              </h6>
            </div>

            <div class="p-buttons">
              <b-row>

                <b-col cols="2">
                 
                </b-col>

                <b-col cols="5">
                  <b-button
                    block
                    variant="primary"
                    size="sm"
                    class="b-background"
                  >
                    <b-icon icon="plus" class="ico"> </b-icon> Invite
                  </b-button>
                </b-col>
                <b-col cols="3">
                 
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>









         
    <div class="people-style border shadow">
      <b-row class="">
        <b-col cols="4" class="my-auto">
          <b-avatar
            variant="primary"
            src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
            size="5em"
          ></b-avatar>
        </b-col>

        <b-col cols="">
          <div>
            <div class="e-name" style="margin-top: -9px;">
              <h6 >
                <br />
              <strong>  howty Circlehead  </strong>
              </h6>
            </div>

            <div class="p-buttons">
              <b-row>

                <b-col cols="2">
                 
                </b-col>

                <b-col cols="5">
                  <b-button
                    block
                    variant="primary"
                    size="sm"
                    class="b-background"
                  >
                    <b-icon icon="plus" class="ico"> </b-icon> Invite
                  </b-button>
                </b-col>
                <b-col cols="3">
                 
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>














       
         
    <div class="people-style border shadow">
      <b-row class="">
        <b-col cols="4" class="my-auto">
          <b-avatar
            variant="primary"
            src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
            size="5em"
          ></b-avatar>
        </b-col>

        <b-col cols="">
          <div>
            <div class="e-name" style="margin-top: -9px;">
              <h6 >
                <br />
              <strong>  howty Circlehead  </strong>
              </h6>
            </div>

            <div class="p-buttons">
              <b-row>

                <b-col cols="2">
                 
                </b-col>

                <b-col cols="5">
                  <b-button
                    block
                    variant="primary"
                    size="sm"
                    class="b-background"
                  >
                    <b-icon icon="plus" class="ico"> </b-icon> Invite
                  </b-button>
                </b-col>
                <b-col cols="3">
                 
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>










      </b-card-text>

      <span class="float-right">
        <a class="primary" href="#">See More</a>
      </span>
    </b-card>









          
        </b-col>


        <b-col class="col">
          <b-tabs content-class="mt-3" fill pills >
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
  margin-left: 100px;
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




p {
  text-align: left;
}
.search {
  position: relative;
  top: -40px;
  left: 270px;
  cursor: pointer;
}
.btn-primary {
  background-color: #fff;
  border: solid 1px #e75c18;
  color: #e75c18;
}

.btn-primary:hover {
  background-color: #e75c18;
  color: #fff;
  border: none;
}

.t-center {
  text-align: center;
}

h6{
  font-size: 14px;
}


.btn {
  font-size: 10px;
  display: flex;

  padding-right: 60px;

  margin-right: 10px;
  padding-left: 10px;
}

.btn2 {
  margin-left: -15px;
}

.p-buttons {
  margin-left: -19px;

  padding: 9px;
}

.ename {
  text-align: left;
  margin-top: -15px;
}

.ico {
  margin-right: 5px;
}

.people-style {
  border-top-left-radius: 40px;

  border-bottom-left-radius: 40px;

  border-top-right-radius: 45px;

  border-bottom-right-radius: 45px;

  background: white;

  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);

  margin-bottom: 10px;
  margin-right: -10px;
  margin-left: -10px;
}




</style>
