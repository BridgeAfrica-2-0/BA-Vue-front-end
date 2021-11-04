<template>
  <div class="p-0">
    <b-container fluid class="p-0 gradient">
      <div class="container-flex">
        <img src="@/assets/img/banner.jpg" class="img-fluid  banner" alt="Kitten" />
      </div>

      <div class="container p-63">
        <b-row class="mt-md-2 text-center">
          <b-col cols="12" md="12" class="m-0 p-0 text-center put-top ">
            <b-avatar
              src="https://placekitten.com/400/300"
              class="  avat  text-center"
              badge-variant="primary"
              badge-offset="10px"
            >
            </b-avatar>

            <b-icon icon="camera-fill" class="avatar-header-icon btn cursor-pointer size" v-b-modal.modal-4></b-icon>

            <div class="">
              <div class="text-box">
                <span>
                  <h6 class=" profile-name text-center ">
                    <b> Blezour Blec </b> <br />
                    <span class="duration"> 1.5k Community </span>
                  </h6>
                </span>

                <div class=" ">
                  <span class="float-right profileedit-btn  put-topbtn ">
                    <b-button variant="primary" class="edit-btn  d-none d-md-inline" v-b-modal.coverphoto>
                      <fas-icon class="mr-2" :icon="['fas', 'pencil-alt']" size="lg" />
                      Edit
                    </b-button>

                    <b-dropdown
                      id="dropdown-1"
                      class="float-right options dot-btn mt-2 mt-sm-2 mt-md-0 mr-3"
                      no-caret
                      variant="outline"
                      style="border-color: #ffD20; color:  #ffD20"
                    >
                      <template #button-content>
                        <b-icon-three-dots></b-icon-three-dots>
                      </template>

                      <b-dropdown-item v-b-modal.coverphoto> Change Cover</b-dropdown-item>

                      <b-dropdown-item>Invite Friends On Bridge Africa</b-dropdown-item>

                      <b-dropdown-item>View As</b-dropdown-item>
                    </b-dropdown>
                  </span>
                </div>
              </div>
            </div>

            <b-modal id="modal-4" title="Upload Profile Picture">
              <div class="w3-container">
                <div class="row pb-3">
                  <div class="col-sm-6 text-center" style="border-right:1px solid #dee2e6;" @click="chooseProfile1()">
                    <h1>
                      <fas-icon class="primary" :icon="['fas', 'upload']" />
                    </h1>
                    <div>
                      <input type="file" id="profile-imag" hidden name="img" accept="image/*" />
                    </div>
                    <h4>Upload a New picture</h4>
                  </div>

                  <div class="col-sm-6 text-center">
                    <h1>
                      <fas-icon class="primary" :icon="['fas', 'edit']" />
                    </h1>
                    <h4>Edit Your New picture</h4>
                  </div>
                </div>
              </div>
            </b-modal>

            <!-- second modal box  to edit the big cover photo -->

            <b-modal id="coverphoto" title="Upload Profile Picture">
              <div class="w3-container">
                <div class="row pb-3">
                  <div class="col-sm-6 text-center" style="border-right:1px solid #dee2e6;" @click="chooseProfile2()">
                    <h1>
                      <fas-icon class="primary" :icon="['fas', 'upload']" />
                    </h1>
                    <div>
                      <input type="file" hidden id="cover-imag" name="img" accept="image/*" />
                    </div>
                    <h4>Upload a New picture</h4>
                  </div>

                  <div class="col-sm-6 text-center">
                    <h1>
                      <fas-icon class="primary" :icon="['fas', 'edit']" />
                    </h1>
                    <h4>Edit Your New picture</h4>
                  </div>
                </div>
              </div>
            </b-modal>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'ownerheadPage',

  methods: {
    chooseProfile2: function() {
      document.getElementById('cover-imag').click();
    },

    chooseProfile1: function() {
      document.getElementById('profile-imag').click();
    },
  },
};
</script>

<style scoped>
.text-box {
  margin-top: 1.5rem;
  text-align: left;
}

.position-loup {
  display: none;
}

.img-avatar {
  width: 6em;
  height: 6em;
  margin-top: 10px;
}

@media (max-width: 575.98px) {
  .text-box {
    margin: 0px;
    margin-top: 7px;
    text-align: left;
  }

  .position-loup {
    margin-top: -27px;
    display: inherit;
  }
}
@media (max-width: 768px) {
  .options {
    margin-right: -5px;
  }
}
@media (min-width: 992px) {
}
@media (min-width: 1200px) {
}
@media (min-width: 1400px) {
  .header-group {
    float: right;
    margin-top: -20px;
    margin-right: 20px;
  }
}

@media (max-width: 760px) {
  .put-top {
    margin-top: -125px !important;
  }

  .put-topbtn {
    margin-top: -150px !important;
  }

  .profileedit-btn {
    margin-top: 5px;
  }

  .avatar-header-icon {
    width: 25px;
    height: 25px;
    position: absolute;

    margin-left: -20px;
    top: 87px;

    background-color: #e75c18;
    color: white;
    border-radius: 24px;
    padding: 6px;
  }

  .banner {
    height: 180px;

    object-fit: cover !important;
  }

  .avat {
    width: 142px;
    height: 142px;
  }

  .profile-name {
    font-size: 32px;
  }

  .dot-btn {
    height: 33px;
    margin-left: 3px;
  }

  .edit-btn {
    width: 112px;
    height: 33px;
    background-color: #ffd200;
    border-color: #ffd200;
  }
}

@media (min-width: 760px) {
  .put-top {
    margin-top: -155px !important;
  }

  .put-topbtn {
    margin-top: -190px !important;
  }

  .profileedit-btn {
    margin-top: 10px;
  }

  .profile-name {
    font-size: 32px;
  }

  .avatar-header-icon {
    width: 2em;
    height: 2em;
    position: absolute;

    top: 100px;
    margin-left: -20px;
    background-color: #e75c18;
    color: white;
    border-radius: 24px;
    padding: 6px;
  }

  .avat {
    width: 168px;
    height: 168px;
  }
  .banner {
    height: 426px;

    object-fit: cover !important;
  }

  .edit-btn {
    width: 146px;
    height: 40px;
    background-color: #ffd200;
    border-color: #e4c229;
  }

  .edit-btn:hover {
    border-color: #b39500;
  }

  .edit-btn:focus {
    border-color: #b39500;
  }

  .edit-btn:active {
    border-color: #e4c229;
  }

  .dot-btn {
    height: 40px;
    margin-left: 3px;
  }

  .p-63 {
    padding-right: 63px;
    padding-left: 63px;
  }
}

.gradient {
  /* background-image: linear-gradient(1deg, black, transparent);  */
  background-image: url('../assets/img/profile_back.png');
}
</style>
