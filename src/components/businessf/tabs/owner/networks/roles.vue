<template>
  <b-container>
    
    <h5 class="a-text">{{ $t('network.Assign_Role') }}</h5>

    <b-container class="b-bottom">
      <b-row>
        <b-col cols="7">
          <b-form-group
            label-cols-lg="3"
            :label="$t('network.User')"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
            <b-form-select
              id="follower"
              v-model="form.name"
              :options="followers"
              name="followers"
              value-field="user_id"
              text-field="fullname"
              class="mb-3"
            ></b-form-select>
          </b-form-group>
        </b-col>

        <b-col cols="3">
          <b-form-group
            label-cols-lg="3"
            :label=" $t('network.Role')"
            label-size="md"
            label-class="font-weight-bold pt-0"
            class="mb-0"
          >
           <b-form-select
              id="roles"
              v-model="form.role"
              :options="roles"
              name="roles"
              value-field="id"
              text-field="name"
              class="mb-3"
            ></b-form-select>
          </b-form-group>
        </b-col>

        <b-col cols="2">
          <b-button variant="primary" class="" @click="assignRole()">
            <b-spinner v-if="SPassign" small type="grow"></b-spinner> {{ $t('network.Assign') }}
          </b-button>
        </b-col>
      </b-row>

      <p class="text">
       {{ $t('network.Admin_can_manage_all_aspects_of_the_Business_Identity') }}.   
       {{ $t('network.They_can_create_posts_and_send_messages_through_inbox') }}.
        {{ $t('network.They_can_respond_to_the_delete_comments') }}, 
        {{ $t('network.Approve_posts') }}, 
        {{ $t('network.view_insights') }},
         {{ $t('network.manage_the_business_settings') }},
        {{ $t('network.update_Business_profile') }},
         {{ $t('network.assign_roles_and_payments') }}.
      </p>
      <br />
      <p class="text">
        {{ $t('network.Editor_can_create_posts_and_send_messages_through_inbox') }}, 
        {{ $t('network.They_can_respond_to_and_delete_comments') }}, 
        {{ $t('network.Approve_posts') }}, 
        {{ $t('network.view_insights') }}.
      </p>
    </b-container>

    <div class="b-bottom">
      <b-container>
        <h5 class="a-text">{{ $t('network.Existing_Editors') }}</h5>
        <div >
          <b-list-group v-for=" ( editor , index) in editors" :key="editor.user_id">
            <b-list class="d-flex align-items-center m-list">
              <b-avatar 
                class="mr-3" 
                :text="editor.fullname.charAt(0)"
                :src="editor.profile_picture"
                size="4em"
              ></b-avatar>
              <span class="mr-auto">{{editor.fullname}}</span>
              <span>
                <div>
                  <b-dropdown
                    size="lg"
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                  >
                    <template #button-content>
                      <b-icon
                        icon="three-dots-vertical"
                       variant="primary"
                        font-scale="1"
                      ></b-icon>
                    </template>
                    <b-dropdown-item href="#" @click="$bvModal.show('edit-editor'); selectObject(editor)">{{ $t('network.Edit') }}</b-dropdown-item>
                     <b-dropdown-item href="#" @click="deleteEditorr(editor,index)"> {{ $t('network.delete') }} </b-dropdown-item> 
                  </b-dropdown>
                </div>
              </span>
            </b-list>
          </b-list-group>

           <infinite-loading
          @infinite="EinfiniteHandler"
          ref="EinfiniteLoading"
          :identifier="einfiniteId" >
        
         <div class="text-red" slot="no-more">
            {{ $t("network.No_More_Request") }}
          </div>
          <div class="text-red" slot="no-results">
            {{ $t("network.No_More_Request") }}
          </div>
        </infinite-loading>


        </div>
      

        <div>
          <b-modal id="edit-editor" hide-footer>
            <template #modal-title>
              EDIT EDITOR: {{clickedObject.fullname}}
            </template>
            <div class="d-block text-center">
               <b-form-group
                  label-cols-lg="3"
                  :label=" $t('network.Role')"
                  label-size="md"
                  label-class="font-weight-bold pt-0"
                  class="mb-0"
                >
                  <b-form-select
                    id="role"
                    v-model="form.role"
                    :options="roles"
                    name="role"
                    value-field="id"
                    text-field="name"
                    class="mb-3"
                  >
                  </b-form-select>
                </b-form-group>
            </div>
            <b-button class="mt-3" block variant="primary" @click="$bvModal.hide('edit-editor'); editEditor(clickedObject)">{{ $t('network.EDIT') }}</b-button>
          </b-modal>

          <b-modal id="delete-editor" hide-footer>
            <template #modal-title>
              !!! <code>WARRING</code> !!!
            </template>
            <div class="d-block text-center">
              <h3>{{ $t('network.You_Are_About_To_Delete') }}: {{clickedObject.fullname}}!</h3>
            </div>
            <b-button class="mt-3" block @click="$bvModal.hide('delete-editor'); deleteEditor(clickedObject)">{{ $t('network.Delete') }}</b-button>
          </b-modal>
        </div>
      </b-container>
    </div>

  </b-container>
</template>

<script>
export default {
  name: "roles",
  data() {
			return {
        url: null,
        SPassign: false,
        editors:[],
         editorspage: 1,
         einfiniteId:1,
        clickedObject: {},
        form: {
          name: "",
          role: "",
        },
        
			}
	},

  computed: {
    followers() {
      return this.$store.state.NetworkSettings.followers;
    },
    roles() {
       return this.$store.state.NetworkSettings.roles;
    },
    old_editors() {
      return this.$store.state.NetworkSettings.editors;
    },
  },
 
  mounted(){
    this.url = this.$route.params.id
    this.getFollowers() 
    this.getRoles() 
    this.displayEditor() 
  },

  methods:{




    
    deleteEditorr(editor, index){
     
       
      
       this.$confirm(
        {
          message: `Are you sure?`,
          button: {
            no: 'No',
            yes: 'Yes'
          },
          /**
          * Callback Function
          * @param {Boolean} confirm
          */
          callback: confirm => {
            if (confirm) {
                   
                


      this.$store
        .dispatch("NetworkSettings/deleteEditor", {
          path: "network/"+this.url+"/remove/editor/"+editor.user_id,
        })
        .then(({ data }) => {
        console.log(data);
     
         this.$delete(this.editors, index);

        this.flashMessage.show({
          status: "success",
          message: this.$t('network.Editor_Deleted')
        });
          
      })
      .catch(err => {
        console.log({ err: err });
        this.flashMessage.show({
          status: "error",
          message: this.$t('network.Unable_To_Delete_Editor')
        });
      });



            }
          }
        }
      )

    },


     EinfiniteHandler($state) {
    

      let lien = "";
     
        lien = "network/" + this.$route.params.id + "/members/editor/" + this.editorspage;
     

      this.axios
        .post(lien)
        .then(({ data }) => {
          if (data.data.editor.length) {
            this.editors.push(...data.data.editor);
           
            this.editorspage += 1;
            $state.loaded();
          } else {
            $state.complete();
          }
        })
        .catch((err) => {
        
        });
    },




     
    getFollowers() {
      console.log("getFollowers");
      this.$store
      .dispatch("NetworkSettings/getfollowers", this.url)
      .then(() => {
        console.log('ohh yeah');
      })
      .catch(err => {
        console.log({ err: err });
      });
    },
    getRoles() {
    this.$store
      .dispatch("NetworkSettings/getroles")
      .then(() => {
        console.log('ohh yeah');
      })
      .catch( err => {
        console.log({ err: err });
      });
    },
    displayEditor() {
    this.$store
      .dispatch("NetworkSettings/geteditors", this.url)
      .then(() => {
        console.log('ohh yeah');
      })
      .catch( err => {
        console.log({ err: err });
      });
    },
    editEditor: function(clickedObject){
      console.log(clickedObject);
      let formData = new FormData();
      formData.append('user_id', clickedObject.user_id);
      formData.append('role', this.form.role);
      this.$store
        .dispatch("NetworkSettings/updateEditor", {
          path: "roles/"+this.url+"/assign",
          formData: formData,
        })
        .then(({ data }) => {
        console.log(data);
        console.log('ohh yeah');
        
       
      
        this.flashMessage.show({
          status: "success",
          message: this.$t('network.New_Role_Updated')
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.flashMessage.show({
          status: "error",
          message: this.$t('network.Unable_to_Update_New_Role')
        });
      });
		},
    assignRole: function(){
      this.SPassign = true;
      let formData = new FormData();
      formData.append('user_id', this.form.name);
      formData.append('role', this.form.role);
      console.log('user_id: ', this.form.name);
      console.log('role: ', this.form.role);
      console.log(formData);
      this.$store
        .dispatch("NetworkSettings/updateEditor", {
          path: "roles/"+this.url+"/assign",
          formData: formData,
        })
        .then(({ data }) => {

           this.einfiniteId +=1
        
      this.$refs.EinfiniteLoading.attemptLoad();
        console.log(data);
        console.log('ohh yeah');
        this.getFollowers();
        this.displayEditor();
        this.SPassign = false;
        this.flashMessage.show({
          status: "success",
          message: this.$t('network.New_Role_Assigned')
        });
          
      })
      .catch(err => {
        console.log({ err: err });
        this.SPassign = false;
        this.flashMessage.show({
          status: "error",
          message: this.$t('network.Unable_to_Assigned_New_Role')
        });
      });
		},
    deleteEditor: function(clickedObject){
      console.log("deleteEditor");
      this.$store
        .dispatch("NetworkSettings/deleteEditor", {
          path: "network/role/delete/"+clickedObject.user_id,
        })
        .then(({ data }) => {
        console.log(data);
        console.log('ohh yeah');
        this.displayEditor();
        this.flashMessage.show({
          status: "success",
          message: this.$t('network.Editor_Deleted')
        });
          
      })
      .catch(err => {
        console.log({ err: err });
        this.flashMessage.show({
          status: "error",
          message: this.$t('network.Unable_To_Delete_Editor')
        });
      });
		},

    

    selectObject(object){

			this.clickedObject = object

      
		},

  },

};
</script>

<style scoped>
.m-list {
  margin-bottom: 15px;
  margin-top: 10px;
}

.b-bottom {
  margin-top: 20px;
  margin-bottom: 30px;
  padding-bottom: 10px;
  width: 100%;

  border-bottom: 1px solid;
}

.tabs {
  width: 100%;
}

.f-left {
  float: left;
}

.a-button-l {
  /*align-content: right;*/
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


  .assign-btn{
    margin-top:30px
  }
}
</style>