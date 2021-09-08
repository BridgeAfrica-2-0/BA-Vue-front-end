<template>
  <b-container>
    <div class="b-bottomn">
      <b-button variant="primary" class="a-button-l" @click="updateGeneralInfo()">Save Changes</b-button>
      <br />
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Business Visibility"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group class="mb-0">
            <b-form-radio-group
              class="pt-2"
              :options="businessVisibility"
              :aria-describedby="ariaDescribedby"
              v-model="visibility"
              name="visibility"
              value-field="value"
              text-field="label"
            ></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Posting Permissions"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-group class="mb-0">
            <b-form-radio-group
              class="pt-2"
              :options="postingPermissions"
              :aria-describedby="ariaDescribedby"
              v-model="permissions"
              name="permissions"
              value-field="value"
              text-field="label"
            ></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Post Approval"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-checkbox
            id="checkbox-1"
            v-model="post_approval"
            name="post_approval"
            value="1"
            unchecked-value="0"
          >
            All business posts must be approved by an admin
          </b-form-checkbox>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Keyword Alerts"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-textarea
            id="textarea"
            v-model="keywords_alert"
            name="keywords_alert"
            placeholder="Enter something..."
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </b-container>
    </div>

    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Marketplace"
          label-size="md"
          label-class="font-weight-bold pt-0"
          class="mb-0"
        >
          <b-form-checkbox v-model="marketplace" name="marketplace" switch>
          </b-form-checkbox>
        </b-form-group>
      </b-container>
    </div>

    <b-container>
      <b-link href="#foo" class="f-left">Delete Business Identity</b-link>
    </b-container>
  </b-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import axios from "axios";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "general",
  mixins: [validationMixin],
  data(){
      return{
        businessVisibility: [
          { label: "Published", value: "publish" },
          { label: "Unpublish", value: "unpublish" },
        ],
        postingPermissions: [ 
          { label: 'Admin only', value: 'publish' }, 
          { label: 'Allow visitors/followers to post', value: 'unpublish'}
        ],
        form: {
            visibility: '',
            permissions: '',
            post_approval: '',
            keywords_alert: '',
            marketplace: '',
            show: false,
        }
      }
  },
  validations: {
    form: {
      visibility: {
        required,
      },
      permissions: {
        required,
      },
      post_approval: {
        required,
      },
      keywords_alert: {
        required,
      },
      marketplace: {
        required,
      },
    },
  },
  methods:{
    updateGeneralInfo: function(){
      return new Promise((resolve, reject) => {
        let formData = new FormData();
        formData.append("visibility", this.form.visibility);
        formData.append("permissions", this.form.permissions);
        formData.append("post_approval", this.form.post_approval);
        formData.append("keywords_alert", this.form.keywords_alert);
        formData.append("marketplace", this.form.marketplace);
        
        this.axios.post("business/general/update/2", formData)
        .then(response => {
          console.log(response);
          this.flashMessage.show({
            status: "success",
            message: "Changes Made Successfuly"
          });
            
          resolve(true);
        })
        .catch(err => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: "Unable To Make Changes "
          });
          resolve(false);
        });
      });
    }
  }
};
</script>

<style scoped>
.b-bottom {
  margin-top: 20px;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 0.5px solid;
  border-color: gray;
}
.b-bottomn {
 
  margin-bottom: 30px;
  padding-bottom: 10px;
}
.f-left {
  float: left;
}
.tabs {
  width: 100%;
}
.a-button-l {
  margin-bottom: 1000px;
  align-content: right;
  float: right;
}
.a-text {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}
@media only screen and (max-width: 768px) {
  .settings {
    top: -5px;
    left: -20px;
  }
}
</style>