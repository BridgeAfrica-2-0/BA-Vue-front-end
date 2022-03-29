<template>
  <b-container class="container-fluid">
  
  <br>  
  <h5 class="text-center">   {{$t('settings.delete_account')}}  </h5>

  <br>

  <p>  

 {{$t('settings.delete_info')}}
  </p>

  

  <p>   {{$t('settings.for_more_information_visit')}}  <router-link to="privacy">   {{$t('settings.privacy_policy')}}  </router-link> </p>

<div class="text-center">    
  <b-button variant="primary" @click="deleteAccount" class="float-right" >  {{$t('settings.delete_account')}}  </b-button>

  </div>
  

  </b-container>
</template>

<script>

import axios from "axios";

export default {
  name: "delete",
 
  data() {
    return {
     
    };
  },

  
  methods: {
    
  

  
   deleteAccount() {



      this.$confirm(
        {
          message: this.$t(`settings.are_you_sure`),
          button: {
            no: this.$t(`settings.No`),
            yes: this.$t(`settings.Yes`)
          },
          /**
          * Callback Function
          * @param {Boolean} confirm
          */
          callback: confirm => {

            if (confirm) {
              // ... do something
      let loader = this.$loading.show({
          container: this.fullPage ? null : this.$refs.loader,
          canCancel: true,
          onCancel: this.onCancel,
          color: "#e75c18",
        });
        
      
       axios
        .delete('profile/user-account')
       .then(response => {
        
          loader.hide();
        this.flashMessage.show({
          status: "success",
          message: "Account Deleted"
        });

         this.$router.push({ name: "Login" });
      })
      .catch(err => {
           loader.hide();
        console.log({ err: err });
        this.flashMessage.show({
          status: "error",
          message: "Unable to delete account "
        });
      });
            }     
          }
        }
      )




    },




  },
};
</script>


