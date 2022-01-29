<template>
  <b-container>
    <div class="s-card">

      <h6 class="font-weight-bolder">
          {{ $t("network.All_Members") }} 
        </h6>
        <hr width="100%" />

   

           <div  v-for="(editor, index)  in requests" :key="index">

              <p class="">
                <span class="d-inline-flex">
                  <b-avatar
                    class="d-inline-block"
                    variant="primary"
                    :src="editor.profile_picture"
                    :text="editor.fullname.charAt(0)"
                    size="3.5rem"
                  ></b-avatar>
                  <h5 class="m-0 mt-2 bold username d-inline-block ml-2">
                   

                    <router-link
                        :to="'/profile/'+editor.user_id"
                      >
                          {{ editor.fullname }}
                      </router-link>

                  </h5>
                </span>
                <span class="float-right mt-1">
                  <b-dropdown
                    size="lg"
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                  >
                    <template #button-content>
                      <b-icon-three-dots-vertical  variant="primary"></b-icon-three-dots-vertical
                      ><span class="sr-only">{{ $t("network.Settings") }}</span>
                    </template>
                    <b-dropdown-item
                      href="#"
                    @click="ApproveRequest(editor.user_id, index)"
                    >
                     {{ $t('network.Approve') }}
                    </b-dropdown-item>
                    <b-dropdown-item
                      href="#"
                      @click="DeclineRequest(editor.user_id, index )"
                    >
                      <b-icon-trash-fill variant="primary"></b-icon-trash-fill>
                      {{ $t('network.Decline') }}
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
              </p>
            </div>



      <b-row>
        <b-col cols="12">
        <infinite-loading ref="InfiniteLoading" @infinite="infiniteHandler">
            <div class="text-red" slot="no-more">{{ $t('network.No_More_Request') }}</div>
            <div class="text-red" slot="no-results">{{ $t('network.No_More_Request') }}</div>
        </infinite-loading>
        </b-col>
      </b-row>
   
     <h6 class="font-weight-bolder">
          {{ $t("network.Bussiness") }}
        </h6>
        <hr width="100%" />

         <b-row class="mt-4">
      <b-col cols="12">

           <div  v-for="(editor, index)  in business" :key="index">

              <p class="">
                <span class=" d-inline-flex ">
                  <b-avatar
                    class="d-inline-block"
                    square
                    variant="primary"
                    :src="editor.profile_picture"
                    :text="editor.fullname.charAt(0)"
                    size="3.5rem"
                  ></b-avatar>
                  <h5 class="m-0 mt-2 bold username d-inline-block ml-2">
                   

                    <router-link
                        :to="'/profile/'+editor.user_id"
                      >
                          {{ editor.fullname }}
                      </router-link>

                  </h5>
                </span>
                <span class="float-right mt-1">
                  <b-dropdown
                    size="lg"
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                  >
                    <template #button-content>
                      <b-icon-three-dots-vertical  variant="primary"></b-icon-three-dots-vertical
                      ><span class="sr-only">{{ $t("network.Settings") }}</span>
                    </template>
                    <b-dropdown-item
                      href="#"
                      @click="BApproveRequest(editor.user_id, index)"
                    >
                     

                     {{ $t('network.Approve') }}

                    </b-dropdown-item>
                    <b-dropdown-item
                      href="#"
                       @click="BDeclineRequest(editor.user_id, index )"
                    >
                      
                    {{ $t('network.Decline') }}

                    </b-dropdown-item>
                  </b-dropdown>
                </span>
              </p>
            </div>

      </b-col>   

         </b-row>



      <b-row>
        <b-col cols="12">
        <infinite-loading ref="BInfiniteLoading" @infinite="BinfiniteHandler">
            <div class="text-red" slot="no-more">{{ $t('network.No_More_Request') }}</div>
            <div class="text-red" slot="no-results">{{ $t('network.No_More_Request') }}</div>
        </infinite-loading>
        </b-col>
      </b-row>
    
    </div>






  </b-container>
</template>

<script>
export default {
  data() {
    return {
      url:null,
      page:1,

      businesspage:1,

      loading: false,
      requests: [],

      business:[],
    }
  },

  mounted() {
    this.url =  this.$route.params.id !== undefined ? this.$route.params.id : this.$router.push('notFound');
  },
  methods: {


    infiniteHandler($state) {
       console.log("loop");
       console.log("network/"+this.url+"/members/users/request/"+this.page);
      this.axios
      .get("network/"+this.url+"/members/users/request/"+this.page)
      .then(({ data }) => {
       console.log(data);
       console.log(this.page);
        if (data.data.length) {
        this.page += 1;
        console.log(this.page);
        console.log(...data.data);
        this.requests.push(...data.data);
          $state.loaded();
          } else {
          $state.complete();
        }
      }) .catch((err) => {
          console.log({ err: err });
      })
    },    




      BinfiniteHandler($state) {


      this.axios
      .get("network/"+this.url+"/members/business/request/"+this.businesspage)
      .then(({ data }) => {
      
        if (data.data.length) {
        this.businesspage += 1;
       
        this.business.push(...data.data);
          $state.loaded();
          } else {   
          $state.complete();
        }
      }) .catch((err) => {
          console.log({ err: err });
      })
    },




    ApproveRequest: function(user_id, index){
    
      console.log('user_id: ', user_id);
      this.axios.get("network/"+this.url+"/members/request/approve/"+user_id)
      .then(() => {
      

       this.$delete(this.requests,index);

        this.loading = false;
        this.flashMessage.show({
          status: "success",
          message: this.$t('network.Request_Approved')
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.loading = false;
        this.flashMessage.show({
          status: "error",
          message: this.$t('network.Unable_to_Approve_Request')
        });
      });
    },





    
    BApproveRequest: function(user_id, index){
    
      console.log('user_id: ', user_id);
      this.axios.get("network/"+this.url+"/members/business/request/approve/"+user_id)  
      .then(() => {
      

       this.$delete(this.business,index);

        this.loading = false;
        this.flashMessage.show({
          status: "success",
          message: this.$t('network.Request_Approved')
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.loading = false;
        this.flashMessage.show({
          status: "error",
          message: this.$t('network.Unable_to_Approve_Request')
        });
      });
    },






    
    BDeclineRequest: function(user_id, index ){
      this.loading = true;
      console.log('user_id: ', user_id);
      this.axios.get("network/"+this.url+"/business/request/decline/"+user_id)
      .then(() => {
        

        this.$delete(this.business,index);   

       
        this.flashMessage.show({
          status: "success",
          message: this.$t('network.Request_Deleted')
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.loading = false;
        this.flashMessage.show({
          status: "error",
          message: this.$t('network.Unable_to_Deleted_Request')
        });
      });
    },


    
    DeclineRequest: function(user_id, index ){
      this.loading = true;
      console.log('user_id: ', user_id);
      this.axios.get("network/"+this.url+"/members/business/request/decline/"+user_id)
      .then(() => {
          

        this.$delete(this.requests,index);   

       
        this.loading = false;
        this.flashMessage.show({
          status: "success",
          message: this.$t('network.Request_Deleted')
        });
      })
      .catch(err => {
        console.log({ err: err });
        this.loading = false;
        this.flashMessage.show({
          status: "error",
          message: this.$t('network.Unable_to_Deleted_Request')
        });
      });
    },
  }
};
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .btn-text {
    margin-left: 8px;
  }
  .btn-com {
    margin-left: 4px;
  }
  .btn-icon {
    margin-top: 3px;
  }
}
@media only screen and (max-width: 768px) {
  .btn-icon {
    margin-top: 3px;
  }
  .btn-text {
    margin-left: 5px;
  }
  .btn-com {
    margin-left: 3px;
  }
}
@media only screen and (max-width: 768px) {
  .btnpngs {
    width: 16px;
    margin-right: 5px;
  }
  .s-card {
    padding-left: 5px;
    padding-right: 5px;
  }
}
@media only screen and (min-width: 768px) {
  .btnpngs {
    width: 20px;
    margin-right: 5px;
  }
}
.btn {
  border-radius: 5px;
}
.flexx {
  display: inline-block;
}
.memfollower {
  margin-left: 20px;
  font-size: 12px;
}
.detail {
  position: relative;
  left: 65px;
  top: -30px;
}
.name {
  position: relative;
  top: -10px;
  left: 10px;
}
.a-left {
  text-align: left;
  align-content: left;
}
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
f-right {
  text-align: right;
  align-content: right;
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
.detail {
  position: relative;
  left: 92px;
  top: -30px;
}
.name {
  position: relative;
  top: -10px;
  left: 10px;
}
.b-background {
  background-color: #e75c18;
  color: white;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
}
.follower {
  font-size: 10px;
}
.people-style {
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
  background: white;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin-bottom: 10px;
}
@media only screen and (min-width: 1200px) {
  .btn {
    width: 123px;
    height: 38px;
    font-size: 14px;
  }
  .center {
    text-align: right;
  }
}
@media only screen and (max-width: 768px) {
  .p-avater {
    margin-right: -15px;
    margin-top: 3px;
  }
  .btn-2 {
    margin-left: 0px;
    width: 90px;
  }
  .btn-1 {
    margin-left: 0px;
    width: 90px;
  }
  .people-style {
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
    background: white;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;
  }
  h6 {
    font-size: 15px;
  }
  h7 {
    font-size: 10px;
  }
  .btn {
    display: flex;
    font-size: 10px;
  }
}
@media only screen and (max-width: 520px) {
  .p-avater {
    margin-right: -15px;
    margin-top: 3px;
  }
  .btn {
    width: 90px;
  }
  .btn-2 {
    margin-left: -15px;
    width: 90px;
  }
  .btn-1 {
    margin-left: -20px;
    width: 90px;
  }
  .people-style {
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
    background: white;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;
  }
  h6 {
    font-size: 15px;
  }
  h7 {
    font-size: 10px;
  }
  .btn {
    display: flex;
    font-size: 10px;
  }
}
@media only screen and (min-width: 764px) {
  .p-buttons {
    margin-right: 50px;
    margin-left: 50px;
    margin-bottom: 5px;
    margin-top: 7px;
    padding-right: 5px;
  }
  .p-avater {
    width: 95px;
    height: 95px;
    margin-bottom: -4px;
    margin-left: -5px;
  }
  .btn {
    width: 123px;
    height: 38px;
    font-size: 14px;
  }
  .center {
    text-align: right;
  }
  .username {
    font-size: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    height: 1.5em;
    white-space: nowrap;
  }
  .follower {
    font-size: 10px;
    margin-top: 5px;
  }
}
@media only screen and (min-width: 764px) and (max-width: 991.18px) {
  .center {
    text-align: left;
  }
}
@media only screen and (max-width: 762px) {
  .username {
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    height: 1.2em;
    white-space: nowrap;
  }
  .btn {
    width: 85px;
    height: 28px;
    font-size: 10px;
  }
  .p-avater {
    width: 75px;
    height: 75px;
    margin-bottom: -8px;
    margin-left: -5px;
    margin-top: -4px;
  }
  .shift {
    margin-left: -40px;
  }
  .follower {
    font-size: 10px;
    text-align: left;
  }
  .center {
    text-align: left;
  }
  .a-text {
    margin-top: 2px;
  }
  .pobtn {
    font-size: 10px;
  }
  .e-name {
    text-align: left;
  }
}
@media only screen and (max-width: 521px) {
  .e-name {
    text-align: left;
    margin-left: -20px;
  }
}
.follower {
  display: none;
}
.btn {
  text-align: center;
}
.pobtn {
  text-align: center;
}
</style>
