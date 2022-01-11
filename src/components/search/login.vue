<template>
  <div class="text-center">

<b-alert class="mt-5" show variant="warning"> Login to access this page  </b-alert>

 
   <router-link to="login">
                <b-button variant="primary" class="md-raised mt-2 btn-size" 
                  >{{ $t("auth.login") }}
                </b-button>
              </router-link>



  </div>
</template>  


<script>
export default {
  name: "login",
};
</script>

<style scoped>
 
 .btn-size{
     width: 100px;
 }
</style>