<template>
  <div>
    <b-row class="mb-5">
      <b-col cols="12">
        <div class="h-100 w-100">
          <div class="mx-auto text-center my-5">
            <h2 class="my-3 font-weight-bolder">
              Create personalised website for your business
            </h2>
            <p class="my-2">
              Start with a template and male it your own, with easy drag and drop & 1000s of design features
            </p>
            <br /><br />
            <b-col class="my-3" cols="8" offset-md="2">
              <p class="d-inline-block float-left">
                <b-icon-card-image class="select-temp"></b-icon-card-image>
                <span class="d-block">Select a template</span>
              </p>
              <hr width="80%" class="row-step" />
              <p class="d-inline-block float-right">
                <b-icon-cursor-fill class="select-temp2"></b-icon-cursor-fill>
                <span class="d-block">Launch</span>
              </p>
            </b-col>
          </div>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="10" offset-md="1">
        <b-row>
          <b-col md="6">
            <b-card header-tag="header" footer-tag="footer">
              <template #header>
                <p>
                  <span class="float-right">
                    Selected Template
                  </span>
                </p>
              </template>
              <p class="mt-1 m-0 p-0">
                <span class="float-left m-0 p-0"> Template Name <strong class="color-site">Free</strong> </span>
                <span class="float-right p-0 m-0">
                  <b-link href="#foo">Choose Another Template</b-link>
                </span>
              </p>
              <img src="https://business.bridgeafrica.info/assets/img/temp.png" alt="" class="template-pic" />
            </b-card>
          </b-col>
          <b-col md="6">
            <div id="fileUpdate" v-on:click="upload">
              <div id="fileUpdate-left">
                <b-icon-image-fill class="upload-pic-icon" aria-hidden="true"></b-icon-image-fill>
                <p class="upload-text">Add Company logo</p>
              </div>
              <div id="fileName"></div>
            </div>
            <b-form-file v-model="prod_photo" id="prod_photo" class="mt-3 d-none" plain></b-form-file>
            <b-form-group id="fieldset-1" label="Website Title*" label-for="input-1" class="mt-3">
              <b-form-input id="input-1" v-model="title" trim></b-form-input>
            </b-form-group>

            <b-form-group id="fieldset-1" label="Pick a subdomain name*" label-for="input-1">
              <b-form-input id="input-1" v-model="title" trim placeholder="http://"></b-form-input>
            </b-form-group>
            <b-row>
              <b-col cols="12">
                <div class="message my-auto mx-auto text-center px-3 py-2">
                  <div class="d-inline-block">
                    <b-icon-info-circle-fill scale="1.5"></b-icon-info-circle-fill>
                  </div>
                  <div class="d-inline-block">
                    <h5 class="font-weight-bolder text-left mt-2">
                      You are currently subscribed to free plan
                    </h5>
                    <p class="text-left text-design">
                      You can get access to features like mapping your domain, premium template, premium support and
                      much more. Simply upgrade your plan.
                    </p>
                  </div>

                  <p class="text-right">
                    <b-link href="/business_owner/create_website_plan">Change Plan</b-link>
                  </p>
                </div>
              </b-col>
            </b-row>
            <b-row class="mt-2">
              <b-col cols="12" class="m-0 pr-3">
                <b-button variant="outline-dark" class="ml-3 float-left" size="sm">Cancel</b-button>
                <b-button variant="primary" class="ml-3 float-right" size="sm">Save & Open Editor</b-button>
                <b-button variant="primary" class="ml-3 float-right" size="sm">Save</b-button>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'createWebsiteStep2',
  data() {
    return {
      prod_photo: '',
      title: '',
    };
  },
  computed: {},
  methods: {
    upload() {
      let formFile = document.getElementById('prod_photo');
      formFile.click();
    },
  },
};
</script>

<style scoped>
.select-temp {
  border: 1px solid;
  padding: 13px;
  font-size: 71px;
  border-radius: 50px;
  background-color: #64a148;
  color: #fff;
}
.select-temp2 {
  border: 1px solid;
  padding: 13px;
  font-size: 71px;
  border-radius: 50px;
  background-color: #64a148;
  color: #fff;
}
.list-complete {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
}
.list-complete-item {
  transition: transform 1s;
  flex: 1 1 25%;
  /*height: 200px;*/
  padding: 10px;
  /*   display: inline-block;
    margin-right: 10px; */
}
.list-complete-img {
  object-fit: cover;
  height: 100%;
  width: 100%;
}
.list-complete-enter, .list-complete-leave-to
  /* .list-complete-leave-active for <2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}
.row-step {
  position: relative;
  flex: 1;
  height: 1px;
  margin: 0.5rem 0 0 0;
  content: '';
  background-color: rgb(100 161 72);
  width: 72%;
  left: -14px;
  top: 36px;
}
.color-site {
  color: #e75c18;
}
.template-pic {
  width: 100%;
  width: -moz-available; /* WebKit-based browsers will ignore this. */
  width: -webkit-fill-available; /* Mozilla-based browsers will ignore this. */
  border: 3px solid black;
}
.customInputFile {
  display: block;
  margin: 0 0 10px 0;
  cursor: pointer;
}
div#fileUpdate-left {
  text-align: center;
  padding: 30px 1px;
  background-color: #f1f1f1;
  border-style: dotted dashed;
  border-color: #9a9a9a;
  cursor: pointer;
}
.upload-pic-icon {
  color: #707070;
  background-color: inherit;
  border: unset;
  padding: 0;
  cursor: pointer;
}
.upload-text {
  color: #707070;
  font-weight: 600;
  margin-bottom: 0;
}
.form-group label {
  color: #707070;
  font-weight: bolder;
}
.message {
  background-color: #8bd06c;
  border-color: #000;
}
.text-design {
  font-size: 12px;
  margin-top: 3px;
}
</style>
