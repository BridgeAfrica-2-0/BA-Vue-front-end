<template>
  <div>
    <Navbar />

    <b-container fluid class="content wahala">
      <b-row>
        <b-col lg="5" xl="4" class=" ">
          <Parent />
        </b-col> 

        <b-col class="col mt-sm-3">
          <b-tabs content-class="mt-3" lazy fill pills>
            <b-tab :title="$t('memnetwork.Posts')"><Posts /></b-tab>
            <b-tab :title="$t('memnetwork.Media')"><Media :type="'network'" :isEditor="false"/></b-tab>
            <b-tab :title="$t('memnetwork.Members')"><Members from="follower" /></b-tab>
            <b-tab :title="$t('memnetwork.Feedback')"><Feedback /></b-tab>
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
import Posts from "../components/memberNetworkF/postNetwork";
import Parent from "../components/memberNetworkF/parent";
import Media from "@/components/owner/tabs/media";
//import Members from "../components/memberNetworkF/members"; 
import Members from '@/components/businessf/tabs/owner/networks/member';
import Feedback from "../components/memberNetworkF/feedback";

import { WhoIsIt } from "@/mixins";
export default {
  mixins:[WhoIsIt],
  components: {
    Navbar,
    Footer,
    Posts,
    Media,
    Members,
    Parent,
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

.network {
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

@media only screen and (min-width: 768px) {
  .content {
    padding-left: 35px;
    padding-right: 35px;
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

h6 {
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
