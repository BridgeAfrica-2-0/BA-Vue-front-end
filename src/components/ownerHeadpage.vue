<template>
  <div class="p-0">
    <b-container fluid class="p-0 gradient">
      <!-- Owner Header Page Up-->
      <div class="container-flex">
        <img :src="user.cover_image" class="img-fluid  banner" alt="Kitten" />
      </div>

      <!-- Owner Header Page Down -->
      <div class="container-fluid p-63">
        <b-row class="mt-md-2 text-left">
          <b-col cols="12" md="12" class="m-0 p-0 text-left put-top ">
            <!-- Avatar profile picture-->
            <b-avatar
              :src="user.profile_picture"
              class="  avat  text-center"
              badge-variant="primary"
              badge-offset="10px"
            ></b-avatar>
            <b-icon
              icon="camera-fill"
              class="avatar-header-icon btn cursor-pointer size"
              v-b-modal.modal-4
            ></b-icon>

            <!-- profile user identity-->
            <span style="display: inline-block;">
              <h6 class=" profile-name text-center ">
                <b> <b-link>{{ user.profile_name }}</b-link> </b><br />
                <span class="duration"> {{ user.number_of_follower }} Community </span>
              </h6>
            </span>

            <!-- Action Edit/Change Cover Button-->
            <div class="">
              <div class="text-box">
                <div class=" ">
                  <span class="float-right profileedit-btn  put-topbtn ">
                    <b-button
                      variant="primary"
                      class="  d-none d-md-inline edit-btn"
                      v-b-modal.coverphoto
                    >
                      <fas-icon
                        class="mr-2"
                        :icon="['fas', 'pencil-alt']"
                        size="lg"
                      />
                      Edit
                    </b-button>
                    <b-dropdown
                      id="dropdown-1"
                      class="float-right options dot-btn mt-2 mt-sm-2 mt-md-0 mr-3"
                      no-caret
                      variant="outline"
                      style="{ 'border-color': '#ffD20'; 'color':  '#ffD20' }"
                    >
                      <template #button-content>
                        <b-icon-three-dots></b-icon-three-dots>
                      </template>
                      <b-dropdown-item v-b-modal.coverphoto>
                        Change Cover
                      </b-dropdown-item>
                      <b-dropdown-item
                        >Invite Friends On Bridge Africa</b-dropdown-item
                      >
                      <b-dropdown-item>View As</b-dropdown-item>
                    </b-dropdown>
                  </span>
                </div>
              </div>
            </div>

            <!-- first modal box  to change/edit the profile picture -->
            <b-modal id="modal-4" title="Upload Profile Picture" ref="my-modal">
              <div class="w3-container">
                <div class="row pb-3">
                  <div
                    class="col-sm-6 text-center"
                    style="border-right:1px solid #dee2e6;"
                    @click="$refs.fileInput.click()"
                  >
                    <h1>
                      <fas-icon class="primary" :icon="['fas', 'upload']" />
                    </h1>
                    <div>
                      <input
                        type="file"
                        id="profile-imag"
                        hidden
                        name="img"
                        accept="image/*"
                        @change="onFileSelected"
                        ref="fileInput"
                      />
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

            <!-- second modal box  to change/edit the big cover photo -->
            <b-modal id="coverphoto" title="Upload Cover Image" ref="my-modal"
              ><div class="w3-container">
                <div class="row pb-3">
                  <div
                    class="col-sm-6 text-center"
                    style="border-right:1px solid #dee2e6;"
                    @click="$refs.fileInput_2.click()"
                  >
                    <h1>
                      <fas-icon class="primary" :icon="['fas', 'upload']" />
                    </h1>
                    <div>
                      <input
                        type="file"
                        hidden
                        id="cover-imag"
                        name="img"
                        accept="image/*"
                        @change="onFileSelected_2"
                        ref="fileInput_2"
                      />
                    </div>
                    <h4>Upload A New Cover Image</h4>
                  </div>
                  <div class="col-sm-6 text-center">
                    <h1>
                      <fas-icon class="primary" :icon="['fas', 'edit']" />
                    </h1>
                    <h4>Edit Your Cover Image</h4>
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
  name: "ownerheadPage",
  data() {
    return {
      user: {
        profile_name: "TONTON LA FORCE",
        number_of_follower: 1.4,
        profile_picture: "https://placekitten.com/400/300",
        cover_image: ""
      }
    };
  },
  created() {
    /**
     *
     *I get the path of image store in localStorage
     * @type {string}
     */
    this.user.profile_picture = this.$store.getters.getUser[0].profilePicture;
    this.user.cover_image = this.$store.getters.getUser[0].coverImage;
    this.user.profile_name = this.$store.getters.getUser[0].profileName;
    this.user.number_of_follower = this.$store.getters.getUser[0].numbersOfFollowers;
  },
  methods: {
    /**
     *this function selects picture file
     * @param event
     */
    onFileSelected(event) {
      //console.log(this.$refs);
      console.log("File Input Passed");
      let file = event.target;
      let fileImage = null;
      if (file.files) {
        var reader = new FileReader();
        reader.onload = e => {
          localStorage.setItem("profile_image", e.target.result);
          this.user.profile_picture = e.target.result;
        };
        fileImage = file.files[0];
        const fd = new FormData();
        fd.append("file", fileImage, fileImage.name);
        //console.log(fileImage);
        reader.readAsDataURL(file.files[0]);
        this.$store.dispatch("changeProfilePicture", { profilePicture: file });
      }
      this.$refs["my-modal"].hide();
    },
    onFileSelected_2(event) {
      //console.log(this.$refs);
      //console.log("File Input Passed");
      let file = event.target;
      let fileImage = null;
      if (file.files) {
        var reader = new FileReader();
        reader.onload = e => {
          localStorage.setItem("cover_image", e.target.result);
          this.user.cover_image = e.target.result;
        };
        fileImage = file.files[0];
        this.$store.dispatch("changeCoverImage", { cover_image: file });
        console.log(fileImage);
        reader.readAsDataURL(file.files[0]);
      }
      this.$refs["my-modal"].hide();
    }
  }
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
    margin-top: -45px !important;
  }

  .put-topbtn {
    margin-top: -50px !important;
  }

  .profileedit-btn {
    margin-top: 5px;
  }

  .avatar-header-icon {
    width: 25px;
    height: 25px;
    position: absolute;

    margin-left: -20px;
    top: 47px;

    background-color: #e75c18;
    color: white;
    border-radius: 24px;
    padding: 6px;
  }

  .banner {
    height: 180px;

    width: 100%;

    object-fit: cover !important;
  }

  .avat {
    width: 84px;
    height: 84px;
  }

  .profile-name {
    /*font-size: 18px !important;*/
    font-size: 32px;
    margin-top: -0px;
    margin-left: 30px;
    position: absolute;
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
    margin-top: -75px !important;
  }

  .put-topbtn {
    margin-top: -100px !important;
  }

  .profileedit-btn {
    margin-top: 10px;
  }

  .profile-name {
    font-size: 32px;
    margin-top: -10px;
    margin-left: 30px;
    position: absolute;
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

    width: 100%;
    object-fit: cover !important;
  }

  .edit-btn {
    width: 146px;
    height: 40px;
    background-color: #ffd200;
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

/*
.gradient{

  background-image: linear-gradient(1deg, black, transparent);  */
/*  background-image: url("../assets/img/profile_back.png");

}
 */

.edit-btn:hover {
  border-color: #b39500 !important ;
  background-color: #b39500 !important ;
}

.btn:focus {
  border-color: #b39500 !important;
  background-color: #b39500 !important ;
}

.btn:active {
  border-color: #e4c229 !important;
  background-color: #b39500 !important ;
}

.displayNone {
  display: none !important;
}
</style>
