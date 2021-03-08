<template>
  <div>
    <div class="row">
        <h6 class="col-md-12"><b>Basic Information</b></h6>
        <hr>
      </div>
      <div class="row mb-1">
        <div class="col-md-4">Date Of Birth</div>
        <div class="col-md-4">1-January-2001</div>
        <div class="col-md-4"><button type="button" class="btn btn-outline-primary float-md-right" data-toggle="modal" data-target="#dobModal">Edit</button></div>
      </div>
      <div class="row">
        <div class="col-md-4">Gender</div>
        <div class="col-md-4">Male</div>
        <div class="col-md-4">
          <button type="button" class="btn btn-outline-primary float-md-right" data-toggle="modal" data-target="#genderModal">Edit</button>
        </div>
      </div>
      <div class="row mb-4 mt-3">
        <div class="col">
          <h6 class="mb-0"><b>Contact Information</b></h6>
          <hr>
          <div class="row mt-3 mb-3">
            <div class="col-md-4">Mobile Phone</div>
            <div class="col-md-4">+1- 234-567-8912</div>
          </div>
          <a href="#" data-toggle="modal" data-target="#phoneModal"> + Add Other Phones</a>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col">
          <h6 class="mb-0"><b>Business Visited</b></h6>
          <hr>
          <div class="media border-botmediatom mb-4">
            <img src="@/assets/img/wankue-filler.jpg" alt="John Doe" class="mr-2" style="width:60px;">
            <div class="media-body">
              <b>Business Name Here</b>
              <p class="mb-1">Category Name here - 1.1 M Followers </p>
              <p><a href="#">Get Directions</a></p>
            </div>
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown">
                <b-dropdown id="dropdown-dropup" dropdown variant="primary-outline">
                  <b-dropdown-item href="#">Edit</b-dropdown-item>
                  <b-dropdown-item href="#">Delete</b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
          <div class="media">
            <img src="@/assets/img/wankue-filler.jpg" alt="John Doe" class="mr-2" style="width:60px;">
            <div class="media-body">
              <b>Business Name Here</b>
              <p class="mb-1">Category Name here - 1.1 M Followers </p>
              <p><a href="#">Get Directions</a></p>
            </div>
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown">
                <b-dropdown id="dropdown-dropup" dropdown variant="primary-outline">
                  <b-dropdown-item href="#">Edit</b-dropdown-item>
                  <b-dropdown-item href="#">Delete</b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
          <a href="#" data-toggle="modal" data-target="#addbusinessModal"><fas-icon
                        class="primary float-left mr-1 mt-1"
                        :icon="['fas', 'plus-circle']"
                    /> Add a Business</a>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col">
          <h6 class="mb-0"><b>Places you lived</b></h6>
          <hr>
          <!--  <h6><b>Cameroon, South Africa</b></h6>
           <p>Current City</p> -->
          <hr>
          <!-- <h6><b>New York, United States</b></h6>
          <p>Home City</p> -->
          <a href="#" data-toggle="modal" data-target="#currentcityModal"> <fas-icon
                        class="primary float-left mr-1 mt-1"
                        :icon="['fas', 'plus-circle']"
                    /> Add your current city</a><br>
          <a href="#" data-toggle="modal" data-target="#hometownModal"> <fas-icon
                        class="primary float-left mr-1 mt-1"
                        :icon="['fas', 'plus-circle']"
                    /> Add your home town</a>
        </div>
      </div>
      <div class="row mb-4">
        <div class="col">
          <h6 class="mb-0"><b>Web &amp; Social Links</b></h6>
          <hr>
          <div class="media">
            <div class="media-body">
              <a href="#" data-toggle="modal" data-target="#websiteModal"> <fas-icon
                        class="primary float-left mr-1 mt-1"
                        :icon="['fas', 'plus-circle']"
                    /> Add a Website</a><br>
              <fas-icon
                  class="primary float-left mr-1 mt-1"
                  :icon="['fas', 'globe']"
              /> <a href="#">https://www.myname.com/</a><br>
            </div>
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown">
                <b-dropdown id="dropdown-dropup" dropdown variant="primary-outline">
                  <b-dropdown-item href="#">Edit</b-dropdown-item>
                  <b-dropdown-item href="#">Delete</b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
          <div class="media mt-4">
            <div class="media-body">
              <a href="#" data-toggle="modal" data-target="#sociallinkModal"> <fas-icon
                        class="primary float-left mr-1 mt-1"
                        :icon="['fas', 'plus-circle']"
                    /> Add a social link</a><br>
              <a href="#">www.instagram.com/bridgeafrica</a><br>
              <a href="#"><fas-icon
                  class="primary float-left mr-1 mt-1"
                  :icon="['fab', 'instagram']"
              /> www.snapchat.com/bridgeafrica</a><br>
            </div>
            <ul class="navbar-nav pull-right">
              <li class="nav-item dropdown">
                <b-dropdown id="dropdown-dropup" dropdown variant="primary-outline">
                  <b-dropdown-item href="#">Edit</b-dropdown-item>
                  <b-dropdown-item href="#">Delete</b-dropdown-item>
                </b-dropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
};
</script>

<style scoped>
.details {
  display: flex;
}
@media only screen and (max-width: 600px) {
}
</style>
