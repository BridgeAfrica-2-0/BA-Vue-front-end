<template>

  <div>
    <form novalidate autocomplete="off" class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100 p-card">
        <md-card-header>
          <div class="md-title center f-22">
           {{ $t('verification.Verification') }}
          </div>
        </md-card-header>

        <md-card-content>
        
          <div class="center">
           
          </div>

          <br />

       
 <div v-if="!verify_method">   


       <b-row class="row  border "> 
<b-col cols="10" >  
        <div class="d-inline-flex   mt-3 mb-3" > 
          <span class="mr-4">   <b-icon icon="envelope" variant="primary"  font-scale="3"  ></b-icon>   </span>  
          
         <span class=" ml-3 md-title   l-20 "> Via Email To <br>   {{this.$store.state.auth.user.user.email}}  </span>  

        </div>

 </b-col>
             <b-col  class="d-" cols="1"> 
            <span class=" float-right mt-3 ">  <b-button  @click="verifyMethod('email')">    <b-icon icon="chevron-right" variant=""  class="mt-1 " font-scale="2"  ></b-icon>    </b-button>  </span>  
             </b-col>
       </b-row>






  <div class="row   border mt-3 "> 
<b-col cols="10" >  
        <div class="d-inline-flex   mt-3 mb-3" > 
          <span class="mr-4">   <b-icon icon="telephone" variant="primary"  font-scale="3"  ></b-icon>   </span>  
          
           <span class=" ml-3 md-title   l-20 "> Via SMS To <br>    {{this.$store.state.auth.user.user.phone}}  </span>  

        </div>

 </b-col>
             <div class=" col-1"> 
            <span class="ml-4  float-right mt-3 ">   <b-button @click="verifyMethod('tel')" >    <b-icon icon="chevron-right" variant=""  class="mt-1 " font-scale="2"  ></b-icon>    </b-button>        </span>  
           </div>
 </div>



 <br /> <br /> 
  <br /> <br /> 
         
  </div>


   

     <div v-if="verify_method">   
          <md-field>
              <label for="otp"> {{ $t('verification.OTP') }}</label>

              <md-input
                type="text"
                name="otp"
                id="otp"
                v-model="token"
                required
              />
            </md-field>

            <br />


         

          <div class="md-layout md-gutter">
         

           
              <br />

          </div>
          
          </div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <div v-if="verify_method">  
          <div class="center">
            
             


                <b-button
              class="buttonn"
              @click.prevent="Verify"
              :disabled="sending"
              variant="primary"
              type="submit"
            >
              {{ $t("verification.Verify") }}
            </b-button>



          
            
          </div>

          <br>
           <br>
          

           <p class="mt-5 mt-md-2">
            {{ $t('verification.Didnt_recieved_the_verification_OTP') }}
            <b-link @click.prevent="resendOtp()"> {{ $t('verification.Resend_OTP') }} </b-link>

          </p>

        </div>


        <div></div>

        <div>
          <br />
          <br />

          <br /> <br /> 

        </div>
      </md-card>

      <div class="md-layout-item md-size-50 md-small-size-100 b-div"></div>

    </form>

    <hr class="localfoter" />

   
  </div>

</template>

<script>
import { validationMixin } from "vuelidate";
import "vue-material/dist/vue-material.min.css";
import { mapActions } from "vuex";
import axios from "axios";
import "@/assets/default.css";
import { required, email } from "vuelidate/lib/validators";
export default {

  name: "FormValidation",
  boolean: true,
  mixins: [validationMixin],
  data: () => ({
    form: {
      password: null,
      email: null
    },

    langs: ["en", "fr"],
      token: "",
      verify_method:false,
      chosemethod:"",
    userSaved: false,
    sending: false,
    lastUser: null
  }),
  validations: {
    form: {
      password: {
        required
      },
      email: {
        required,
        email
      }
    }
  },
  methods: {







verifyMethod(metho){



      this.chosemethod=metho;

       let url="";
       if( this.chosemethod=='tel'){  
          url="user/phone/sendOtp";
       }else{
         url="user/email/sendOtp";
       }
       this.sending = true;
      console.log(this.$store.state.auth.user.user.phone);

      this.$store
        .dispatch("auth/sendOtp", {
          url:url,
          email: this.$store.state.auth.user.user.email,
          phone: this.$store.state.auth.user.user.phone
        })
        .then(response => {
           this.sending = false;
         this.verify_method=true;
        })
        .catch(err => {
          console.log({ err: err });

         
         this.sending = false;
         this.verify_method=true;

        });
    

      

},




      resendOtp() {

        let url="";
       if( this.chosemethod=='tel'){  
          url="user/phone/sendOtp";
       }else{
         url="user/email/sendOtp";
       }



         this.sending = true;
   
      axios
        .post(url, {
          phone: this.$store.state.auth.user.user.phone,
           email: this.$store.state.auth.user.user.email
        })
        .then(response => {
          if (response.status === 200) {
            console.log("response: ", response);
            this.flashMessage.show({
              status: "success",
              title: this.$t("verification.Successfully_Send"),
              message: this.$t(
                "verification.SMS_successfully_send_check_your_inbox"
              ),
            });

             this.sending = false;
          } else {
            console.log(response.data);
          }
        })
        .catch((err) => {
          console.log({ err: err });


         
          if (err.response.status == 422) {
            console.log({ err: err });
            console.log(err.response.data.message);

            this.flashMessage.show({
              status: "error",

              message: this.flashErrors(err.response.data.errors),
               blockClass: "custom-block-class",
            });
          }

          else {
            this.flashMessage.show({
              status: "error",
              
              message: this.$t('auth.resend_otp_failed'),
            });
            console.log({ err: err });
          }

       this.sending = false;


        });
    },

    Verify() {
  
       this.sending = true;
      console.log(this.$store.state.auth.user.user.phone);
      this.$store
        .dispatch("auth/verify", {
          OTP: this.token,

          email: this.$store.state.auth.user.user.email,
          phone: this.$store.state.auth.user.user.phone
        })
        .then(response => {
           this.sending = false;

          this.$router.push({ name: "welcome" });
        })
        .catch((err) => {
          console.log({ err: err });


         

           if (err.response.status == 422) {
            console.log({ err: err });
            console.log(err.response.data.message);

            this.flashMessage.show({
              status: "error",

             message: this.$t('verification.Unable_to_verify_your_account'),
               blockClass: "custom-block-class",
            });
          }

          else {
            this.flashMessage.show({
              status: "error",
              
              message: this.$t('auth.resend_otp_failed'),
            });
            console.log({ err: err });
          }

    this.sending = false;



        });
    }

    ,
    getValidationClass(fieldName) { 
      const field = this.$v.form[fieldName];
      if (field) {
        return {
          "md-invalid": field.$invalid && field.$dirty
        };
      }
    },

    setLang(data){
        
         console.log(data);
          this.$i18n.locale = data;
         this.$store.commit("auth/setAppLanguage", data);
    },

    flashErrors(errors) {
      let err = "";
      if(errors){   
      Object.values(errors).forEach((element) => {
        err = element[0];
      });

      }

      return err;
    },

   

    clearForm() {
      this.$v.$reset();

      this.form.password = null;
      this.form.email = null;
    },
    saveUser() {
      this.sending = true;

      this.login();
    },

  

  }

};
</script>

<style scoped>

.w-90{
  width: 90%;
}

.l-20{
  line-height: 20px;
  font-size: 18px;
}

.buttonn {
  width: 150px !important;
}

.vl {
  border-left: 1px solid green;
  height: 50px;
}

.f-right {
  float: left;
}

.f-left {
  float: right;
}

.m-left {
  align-content: left;
  text-align: left;
}
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
.md-checkbox {
  display: flex;
}
.b-color {
  background-color: orange;
  color: white;
}
.p-card {
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 80px;
  padding-bottom: 80px;
}
.b-div {
  background-image: url("ash.jpg");
  background-position: center;
  background-size: cover;
}
.t-center {
  text-align: center;
}

.center {
  align-content: center;
  text-align: center;
}

.b-w {
  width: 230px;
}

.f-22 {
  font-size: 22px;
}
.f-12 {
  font-size: 12px;
}
@media only screen and (max-width: 768px) {
  .p-card {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 10px;
    padding-bottom: 100px;
  }
}

.localfoter {
  margin-top: -10px;
}
</style>
