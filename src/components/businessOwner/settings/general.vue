<template>
  <b-container v-if="business_form">
    <div class="b-bottomn">
      <b-button variant="primary" class="a-button-l" @click="updateGeneralInfo()">
        <b-spinner v-if="SPupdateGeneralInfo" small type="grow"></b-spinner> {{ $t('businessowner.Save_Changes') }}
      </b-button>
      <br />
    </div>
    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('businessowner.Business_Visibility')"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0 text"
        >
          <b-form-group class="mb-0" >
            <b-form-radio-group
              class="pt-2"
              :options="businessVisibility"
              v-model="business_form.visibility"
              name="visibility"
              type="text"
              value-field="value"
              text-field="label"
              required
            ></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-container>
      <hr />
    </div>

    <div class="">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('businessowner.Posting_Permissions')"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0 text"
        >
          <b-form-group class="mb-0" >
            <b-form-radio-group
              class="pt-2"
              :options="postingPermissions"
              v-model="permission"
              name="permissions"
              type="text"
              value-field="value"
              text-field="label"
              required
            ></b-form-radio-group>
          </b-form-group>
        </b-form-group>
      </b-container>

      <hr />
    </div>

    <div v-if="business_form.permissions == 'Allow editor to post'" class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('businessowner.Post_Approval')"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0"
        >
          <b-form-checkbox
            v-model="business_form.post_approval"
            name="post_approval"
            value="1"
            unchecked-value="0"
          >
            {{ $t('businessowner.All_business_posts_must_be_approved_by_an_admin') }}
          </b-form-checkbox>
        </b-form-group>
      </b-container>
      <hr />
    </div>

    <div class="">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('businessowner.Keyword_Alerts')"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0 text"
        >
          <b-form-tags
            input-id="tags-separators"
            v-model="business_form.keywords_alert"
            tag-variant="primary"
            separator=" ,;"
            :limit="limit"
            :tag-validator="validator"
            :placeholder="$t('general.Enter_new_keywords_alert_separated_by_space_comma_or_semicolon')"
            no-add-on-enter
            required
          ></b-form-tags>
        </b-form-group>
      </b-container>
      <hr />
    </div>

    <div class="">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          :label="$t('businessowner.Marketplace')"
          label-size="md"
          label-class="font-weight-bold pt-0 username"
          class="mb-0"
        >
          <b-form-checkbox 
            v-model="business_form.marketplace" 
            name="marketplace" 
            switch
            value="1"
            unchecked-value="0"
            required
          >
          </b-form-checkbox>
        </b-form-group>
      </b-container>
      <hr />
    </div>

    <b-container>
      <b-link href="#" class="f-left" @click="$bvModal.show('delete-business'); selectObject(business[0])">{{ $t('businessowner.Delete_Business_Identity') }}</b-link>
      <div>
        <b-modal id="delete-business" hide-footer>
          <template #modal-title>
            !!! <code>{{ $t('businessowner.DELETE_BUSINESS') }}</code> !!! 
          </template>
          <div class="d-block text-center">
            <h3>{{ $t('businessowner.Delete_Business') }}: {{clickedObject.business_id}}!</h3>
          </div>
          <b-button class="mt-2" style="float:right" variant="primary" @click="$bvModal.hide('delete-business'); deleteBusiness(clickedObject.business_id)">{{ $t('businessowner.Delete_Business') }}</b-button>
          <b-button class="mt-2 " style="float:right" @click="$bvModal.hide('delete-business')">{{ $t('businessowner.Cancel') }}</b-button>
        </b-modal>
      </div>
    </b-container>
  </b-container>
  <b-container v-else>
    <div class="text-center">
      <b-spinner variant="primary" style="width: 3rem; height: 3rem;" label="Large Spinner Text Centered"></b-spinner>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "general",
  data(){
      return{
        url: null,
        SPupdateGeneralInfo: false,
        clickedObject: {},
        limit: 20,
        busiess_id: "",
        businessVisibility: [
          { label: this.$t('businessowner.Published'), value: "publish" },
          { label: this.$t('businessowner.Unpublish'), value: "unpublish" },
        ],
        postingPermissions: [ 
          { label: this.$t('businessowner.Admin_only'), value: 'Admin only' }, 
          { label: this.$t('businessowner.Allow_editor_to_post'), value: 'Allow editor to post'}
        ],
        permission: null,
        business_form: null
      }
  },
  
  computed: {
    business() {
      return this.$store.state.businessGeneral.business;
    }
  },

  watch : {
    permission:function(val) {
      console.log(val);
      this.business_form.permissions = this.permission;
      console.log("permissions: "+this.business_form.permissions);
      this.business_form.post_approval = "0";
      console.log("Unchecked: "+this.business_form.post_approval);
    }
  },
  
  mounted() {
    this.url = this.$route.params.id !== undefined ? this.$route.params.id : this.$router.push('notFound');
    this.getBusiness();
  },

  methods:{
    validator(tag) {
      return tag.length > 2 && tag.length < 20
    },

    getBusiness() {
      console.log("getBusiness")
    this.$store
      .dispatch("businessGeneral/getbusiness", "general/infoSettings/" + this.url)
      .then(() => {
        console.log("this.business", this.business);
        this.permission = this.business.permissions;
        this.business_form = {
          visibility: this.business.visibility,
          permissions: this.business.permissions,
          post_approval: this.business.post_approval,
          keywords_alert: this.business.keywords_alert,
          marketplace: this.business.marketplace,
        };
        console.log('business data available');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },

    updateGeneralInfo: function(){
      this.SPupdateGeneralInfo = !this.SPupdateGeneralInfo;
      let formData = new FormData();
      formData.append('visibility', this.business_form.visibility);
      formData.append('permissions', this.business_form.permissions);
      formData.append('post_approval', this.business_form.post_approval);
      formData.append('keywords_alert', String(this.business_form.keywords_alert));
      console.log(String(this.business_form.keywords_alert));
      formData.append('marketplace', this.business_form.marketplace);
      console.log(formData);
      this.axios.post("business/general/update/"+this.url, formData)
      .then(() => {
        this.getBusiness();
        console.log(this.business_form);
        this.SPupdateGeneralInfo = !this.SPupdateGeneralInfo;
        this.flashMessage.show({
          status: "success",
          message: this.$t('businessowner.Changes_Made_Successfuly')
        });  
      })
      .catch(err => {
        console.log({ err: err });
        this.SPupdateGeneralInfo = !this.SPupdateGeneralInfo;
        this.flashMessage.show({
          status: "error",
          message: this.$t('businessowner.Unable_To_Make_Changes')
        });
      });
    },

    deleteBusiness: function(busiess_id){
      console.log("busiess_id: "+busiess_id);
      this.axios.delete(`business/general/delete/${busiess_id}`)
      .then(() => {
        console.log('ohh yeah');
        console.log(`business/general/delete/${busiess_id}`);
        this.flashMessage.show({
          status: "success",
          message: this.$t('businessowner.Business_Deleted')
        });
          
      })
      .catch(err => {
        console.log({ err: err });
        this.flashMessage.show({
          status: "error",
          message: this.$t('businessowner.Unable_To_Delete_Business')
        });
      });
		},

    selectObject(object){
			this.clickedObject = object
		},
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
  .btn{
    font-size: 12px;
  }
}
</style>
