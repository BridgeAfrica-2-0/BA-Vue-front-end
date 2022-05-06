<template>
  <div class="mt-3"> 
    <div>
      <b-tabs lazy pills content-class="mt-3 f-left">
        <b-tab :title="$t('network.add_People')" active> 




      <div class="form-group">
                      <label for="country" class="username">
                        {{ $t("network.select_users") }} :</label
                      ><br />

                      <multiselect
                    v-model="selectedpeople"
                     
                     :internal-search="false"
                      @search-change="people" 
                      :hide-selected="true"

                    :placeholder="$t('network.Search')"
                    label="fullname"
                    track-by="user_id"
                    :options="peoples"
                    :multiple="true"
                    :taggable="true"
                  
                  ></multiselect>

         </div>



         <b-button variant="primary" class="mt-3 mb-3 float-right"  @click="addMembers" > {{$t('network.add_members')}}  </b-button>



        </b-tab>

        
        <b-tab > 

           <template slot="title">
            {{ $t("network.add_Businesses") }}
           
          </template>


             

      <div class="form-group">
                      <label for="country" class="username">
                        {{ $t("network.select_businesses") }} :</label
                      ><br />

                      <multiselect
                    v-model="selectedbusiness"
                     
                     :internal-search="false"
                      @search-change="business" 
                      :hide-selected="true"

                    :placeholder="$t('network.Search')"
                    label="name"
                    track-by="business_id"
                    :options="busineses"
                    :multiple="true"
                    :taggable="true"
                  
                  ></multiselect>

         </div>



         <b-button variant="primary" class="mt-3 mb-3 float-right"  @click="addBusiness" > {{$t('network.add_Businesses')}}  </b-button>





        </b-tab>
      
      </b-tabs>
    </div>
  </div>
</template>

<script>

import Multiselect from "vue-multiselect";

export default {
  name: "addmember",
  components: {
      Multiselect,
  },

  data() {
    return {  
      net_id:this.$route.params.id,
      selectedpeople:null,
      selectedbusiness:null

    }},

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




 addBusiness(){

         let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.preview,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      }); 


    let formData2 = new FormData();  

      formData2.append("businessID", this.selectedbusinessArr.toString());

      this.axios.post(`network/${this.net_id}/businesses/add`, formData2)
        .then(() => {
        
          loader.hide();  
        
          this.hideModal();
   
          this.flashMessage.show({
            status: "success",
            message: "Business added",
            blockClass: "custom-block-class",
          });

        })
        .catch((err) => {
          console.log({ err: err });
            loader.hide();
   
            this.flashMessage.show({
            status: "error",
            message: err.response.data.message,
            blockClass: "custom-block-class",
          });

        });

    },



    addMembers(){

         let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.preview,
        canCancel: true,
        onCancel: this.onCancel,
        color: "#e75c18",
      }); 


    let formData2 = new FormData();  

      formData2.append("userID", this.selectedpeopleArr.toString());

      this.axios.post(`network/${this.net_id}/users/add`, formData2)
        .then(() => {
        
          loader.hide();

           this.hideModal();

         
          this.flashMessage.show({
            status: "success",
            message: "members added",
            blockClass: "custom-block-class",
          });

        })
        .catch((err) => {
          console.log({ err: err });

     

            loader.hide();

            this.flashMessage.show({
            status: "error",
            message: err.response.data.message,
            blockClass: "custom-block-class",
          });

        });

    },




 hideModal(){
      
      this.selectedpeople=[];
 this.selectedbusiness=[];

 this.$emit("hideModal");
 },

     people(keyword) {

      let url=`network/${this.net_id}/search-all-users?keyword=${keyword}`
      this.$store
        .dispatch("networkProfile/users", url)
        .then(() => {
        
        })
        .catch((err) => {
          console.log({ err: err });
        });
    },




     business(keyword) {
      
        let url=`network/${this.net_id}/search-all-businesses?keyword=${keyword}`
      this.$store
        .dispatch("networkProfile/busineses", url)
        .then(() => {
        
        })
        .catch((err) => {
          console.log({ err: err });
        });

    },


   },

    computed: {



selectedpeopleArr: function() {
      let selectedUsers = [];

      this.selectedpeople.forEach((item) => {
        
          selectedUsers.push(item.user_id);
        
      });
      return selectedUsers;
    },



    selectedbusinessArr: function() {
      let selectedUsers = [];

      this.selectedbusiness.forEach((item) => {
        
          selectedUsers.push(item.business_id);
        
      });
      return selectedUsers;
    },



    peoples() {

     return this.$store.state.networkProfile.users;

     
    },

    busineses() {
      return this.$store.state.networkProfile.businesses;
    },
    
  },


};
</script>

<style scoped>
hr {
  border: solid 1px dimgray;
}

.btn {
  background-color: #fff;
  color: #e75c18;
  border: solid 1px #e75c18;
}

.btn:hover {
  color: #fff;
  border: none;
  background-color: #e75c18;
}

.f-left {
  text-align: left;
  align-content: left;
}
@media only screen and (max-width: 768px) {
  .options {
    position: relative;
    left: -75px;
  }
}
</style>
