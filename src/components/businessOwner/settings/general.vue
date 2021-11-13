<template>
  <b-container v-if="business_form">
    <FlashMessage />
    <div class="b-bottomn">
      <b-button variant="primary" class="a-button-l" @click="updateGeneralInfo()">
        <b-spinner v-if="SPupdateGeneralInfo" small type="grow"></b-spinner> Sauvegarder les modifications
      </b-button>
      <br />
    </div>
    <div class="b-bottom">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Business Visibility"
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
          label="Autorisations de publication"
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
          label="Après l'approbation"
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
            Tous les messages commerciaux doivent être approuvés par un administrateur
          </b-form-checkbox>
        </b-form-group>
      </b-container>
      <hr />
    </div>

    <div class="">
      <b-container>
        <b-form-group
          label-cols-lg="3"
          label="Alertes de mots clés"
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
            placeholder="Entrez de nouveaux mots-clés_alert séparés par un espace, une virgule ou un point-virgule"
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
          label="Marché"
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
      <b-link href="#" class="f-left" @click="$bvModal.show('delete-business'); selectObject(business[0])">Delete Business Identity</b-link>
      <div>
        <b-modal id="delete-business" hide-footer>
          <template #modal-title>
            !!! <code>SUPPRIMER L'AFFAIRE</code> !!! 
          </template>
          <div class="d-block text-center">
            <h3>Supprimer l'entreprise: {{clickedObject.business_id}}!</h3>
          </div>
          <b-button class="mt-2" style="float:right" variant="primary" @click="$bvModal.hide('delete-business'); deleteBusiness(clickedObject.business_id)">supprimer l'entreprise</b-button>
          <b-button class="mt-2 " style="float:right" @click="$bvModal.hide('delete-business')">Cancel</b-button>
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
          { label: "Publié", value: "publish" },
          { label: "Dépublier", value: "unpublish" },
        ],
        postingPermissions: [ 
          { label: 'Administrateur uniquement', value: 'Admin only' }, 
          { label: 'Autoriser l éditeur à publier', value: 'Allow editor to post'}
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
    this.url = this.$route.params.id;
    this.getBusiness();
  },

  methods:{
    validator(tag) {
      return tag.length > 2 && tag.length < 20
    },

    getBusiness() {
    this.$store
      .dispatch("businessGeneral/getbusiness", this.url)
      .then(() => {
        console.log("this.business", this.business);
        this.permission = this.business[0].permissions;
        this.business_form = {
          visibility: this.business[0].visibility,
          permissions: this.business[0].permissions,
          post_approval: this.business[0].post_approval,
          keywords_alert: this.business[0].keywords_alert,
          marketplace: this.business[0].marketplace[0].marketplace,
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
          message: "Changes Made Successfuly"
        });  
      })
      .catch(err => {
        console.log({ err: err });
        this.SPupdateGeneralInfo = !this.SPupdateGeneralInfo;
        this.flashMessage.show({
          status: "error",
          message: "Unable To Make Changes"
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
          message: "Business Deleted"
        });
          
      })
      .catch(err => {
        console.log({ err: err });
        this.flashMessage.show({
          status: "error",
          message: "Unable To Delete Business"
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