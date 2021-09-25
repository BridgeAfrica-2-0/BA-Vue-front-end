<template>
  <div class=" ">
    <b-card title="" class="">
      <b-container class="a-center">
          <!-- :src="require('@/assets/img/mayor.jpg')" -->
        <b-avatar
          :src="networkInfo[0].image"
          variant="primary"
          square
          rounded
          class="network-logo"
        >
        </b-avatar>

      </b-container>

      <br />

      <b-container>
        <b-row>
          <b-col cols="6">
            <h6 class="  m-0 p-0 a-center network-name "><b> {{ networkInfo[0].name }}</b></h6>
          </b-col>
          <b-col cols="6">
            <b-button
              variant="primary"
              size="sm"
              @click="addNetwork"
              style="width: 120px;"
              class="a-center"
            >
              <b-icon icon="pencil"></b-icon> Community
            </b-button>
          </b-col>
        </b-row>
      </b-container>

      <br />

      <b-card-text class="text-left">
        <b-container>
          <b-row>
            <b-col>
              <p class="a-center ">
                <b-icon icon="globe" variant="primary"></b-icon>
                <span class="pivate text"> Private </span>
              </p>
            </b-col>
            <b-col>
              <p class="a-center">
                <b-icon icon="people-fill" variant="primary"></b-icon>
                <span class="pivate text">
                  {{ nFormatter(networkInfo[0].commuity) }}
                  community 
                </span>
              </p>
            </b-col>
          </b-row>
        </b-container>
        <h6 class="mt-2 font-weight-bolder title ">About</h6>
        <p class="text-justify text">
          {{ networkInfo[0].description }}
          <span class="d-inline-block float-right">
            <a href="#">lire la Suite</a>
          </span>
        </p>
      </b-card-text>
    </b-card>
    
    <FlashMessage />

    <SidebarCommunity />

  </div>
</template>

<script>
import SidebarCommunity from "@/components/businessf/tabs/owner/networks/sidebarcommunity";
export default {
  name: "parent",
  data() {
    return {
      url: this.$route.params.id,
      networkShow: true,
      showModal: false,
      text: "",
      file: '',
      updateNetwork_form: {
        name: "",
        description: "",
        email: "",
        phone1: "",
        phone2: "",
        address: "",
        allow_business:""
      }
    };
  },
  components: {
    SidebarCommunity
  },
  computed: {
    networkInfo() {
      return this.$store.state.networkProfile.networkInfo;
    },
  },
  mounted(){
    this.getNetworkInfo() 
  },
  methods: {
    nFormatter: function(num) {
      if (num >= 1000000000) {
        return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
      }
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
      }
      if (num >= 1000) {
        return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
      }
      return num;
    },
    openNetwork() {
      this.networkShow = false;
    },
    addNetwork() {
      console.log("hello");
      this.showModal = !this.showModal;
    },
    getNetworkInfo() {
      this.$store
      .dispatch("networkProfile/getnetworkInfo", this.url)
      .then(() => {
        console.log('ohh yeah');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },
    updateNetwork: function(){
      this.axios.post("network/edit-informaions/"+this.url, this.updateNetwork_form)
      .then(() => {
        console.log(this.updateNetwork_form);
        this.flashMessage.show({
          status: "success",
          message: "Changes Made Successfuly"
        });
          
      })
      .catch(err => {
        console.log({ err: err });
        this.flashMessage.show({
          status: "error",
          message: "Unable To Make Changes "
        });
      });
    },
    submitFile(){
      let formData = new FormData();
      formData.append('image', this.file);
      this.axios.post( 'network/edit-profile-image/'+this.networkInfo[0].id, formData,
        {
          headers: {
              'Content-Type': 'multipart/form-data'
          }
        }
      )
      .then(() => {
        console.log(formData);
        this.flashMessage.show({
          status: "success",
          message: "Image Uploaded Successfuly"
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.flashMessage.show({
          status: "error",
          message: "Unable To Uploaded Image "
        });
      });
    },
    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    }
  }
};
</script>

<style>
.a-center {
  text-align: center;
  align-content: center;
  justify-content: center;
  display: flex;
}
.b-none {
  border-style: none;
}
.t-align {
  text-align: left;
}
.i-color {
  color: #e75c18;
}
@media only screen and (min-width: 768px) {
  .network-avatar-icon {
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 200px;
    margin-left: 200px;
    padding: 0px 0px;
    color: #ffff;
    background: #e75c18;
    border-radius: 25px;
    border: 4px solid #ffff;
  }
  .network-name {
    font-size: 20px;
  }
  .pivate {
    padding-left: 8px;
    text-align: left;
  }
  .network-logo {
    width: 200px !important;
    height: 200px !important;
  }
}
@media only screen and (max-width: 768px) {
  .network-logo {
    width: 200px !important;
    height: 200px !important;
  }
  .network-name {
    font-size: 16px;
  }
  .pivate {
    font-size: 12px;
    padding-left: 8px;
    text-align: left;
  }
  .network-avatar-icon {
    position: absolute;
    width: 2rem;
    height: 2rem;
    top: 200px;
    margin-left: 200px;
    padding: 0px 0px;
    color: #ffff;
    background: #e75c18;
    border-radius: 25px;
    border: 4px solid #ffff;
  }
}
</style>