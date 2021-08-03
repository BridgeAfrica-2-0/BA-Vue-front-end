<template>
  <div >
    <form novalidate class="md-layout" @submit.prevent="validateUser">
     
      <md-card class="md-layout-item md-size-50 md-small-size-100 p-card">
        <md-card-header>
          <div class="md-title center">Sign Up On Bridge Africa</div>
        </md-card-header>

        <md-card-content>

 

           <div class="center">

         <b-row>  <b-col cols="12" md="6" lg="12" xl="6">  <md-button  @click.prevent="authProvider('facebook')"   class="  md-raised md-primary b-w">  <b-icon icon="facebook" aria-hidden="true"></b-icon> Sign Up With Facebook</md-button>   </b-col> 
          
        
          <b-col cols="12" md="6" lg="12" xl="6">  <md-button  @click.prevent="authProvider('google')"   class=" b-color b-w" style="color:white;" > <b-icon icon="google" aria-hidden="true"></b-icon> Sign Up with Google</md-button> </b-col>
          
          
            </b-row>       
     
     
      
    
    
    </div>

    <br/>

<p class="t-center"> -OR- </p>




          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100 m-left">
             

                <md-field   :class="getValidationClass('firstName')" >
            <label for="first_name">First Name</label>
            <md-input type="text" name="firstName" id="firstName"  v-model="form.firstName" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.firstName.required">First Name  is required</span>
           
          </md-field>


            </div>

            <div class="md-layout-item md-small-size-100">
              



                <md-field   :class="getValidationClass('lastName')" >
            <label for="lastName"> Last Name</label>
            <md-input type="text" name="lastName" id="lastName"  v-model="form.lastName" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.lastName.required">First Name  is required</span>
           
          </md-field>



            </div>
          </div>








            <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>



          <md-field :class="getValidationClass('tel')" >
            <label for="tel">Tel</label>
            <md-input type="number" name="tel" id="tel" v-model="form.tel"  />
             <span class="md-error" v-if="!$v.form.tel.required">Tel is required</span>
           
          </md-field>





           <md-field :class="getValidationClass('password')" >
            <label for="password">Password</label>
            <md-input type="password" name="password" id="password"  v-model="form.password" :disabled="sending" />

             <span class="md-error" v-if="!$v.form.password.required">Password is required</span>
           
          </md-field>


         

   
           <md-field  :class="getValidationClass('password')" >
            <label for="confirmPassword">Confirm Password</label>
            <md-input type="password" name="confirmPassword" id="confirmPassword"  v-model="form.confirmPassword" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.confirmPassword.required">Password is required</span>
           
          </md-field>



       

   

        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />




    <div>

        <b-row>  <b-col cols="6">    <md-button  type="submit" class="b-color f-left "  style="color:white;"  :disabled="sending" >  Sign Up </md-button>
            </b-col>   <b-col cols="6">   <b-link href="/login" class="f-right">  <md-button class=" md-raised ">Login</md-button>  </b-link>    </b-col>  </b-row>
     
     
       


    </div>


    <div>  

      <br/>
      <br/>
      

      <label> By Signing Up  you agree to Bridge Africa's  </label> <br/>  
      
       <label>  <b-link href="#">Terms and conditions </b-link> &    <b-link href="#">Privacy policies</b-link>    </label>  </div>


       
      </md-card>






       <div class="md-layout-item md-size-50 md-small-size-100 b-div" > 
        
      
       </div>






      <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import axios from 'axios'

  
  

   
  import {
    required,
    email,
    minLength,
  
  } from 'vuelidate/lib/validators'

  
  

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
       baseurl: process.env.baseURL,
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        age: null,
        email: null,
        password:null,

       confirmPassword:null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {

      form: {
        firstName: {
          required,
        
        },

        lastName: {
          required,
      
        },


        password: {
          required,
         
        },


       confirmPassword: {
          required,
          minLength: minLength(4)
        },

        
        tel: {
          required,
        
        },
       
        email: {
          required,
          email
        }
      }
    },
    methods: {


      authProvider(provider) {
        let self = this;
        this.$auth.authenticate(provider).then(response => {
            self.socialLogin(provider,response)
        }).catch(err => {
            console.log({err:err})
        })
    },
    

    socialLogin(provider,response) {
        this.$http.post('user/social/'+provider, response).then(response => {
            return response.data.token;
        }).catch(err => {
            console.log({err:err})
        })
    },

      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]
        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
       
        this.form.email = null
        this.password=null
        this.confirmPassword=null
      },
      saveUser () {
                   
                       this.sending = true
   
                    axios.post('user/register', {
                        first_name: this.form.firstName,
                         last_name: this.form.LastName,
                        email: this.form.email,
                        password: this.form.password,
                        tel:this.form.tel,
                        password_confirmation:this.form.password
                    })
                        .then(response => {
                            if (response.data.success) {
                              console.log(response.data);
                                window.location.href = "/login"
                            } else {

                               console.log(response.data);
                             
                                this.error = response.data.message

                                this.sending = false
                            }
                        })
                        .catch(function (error) {
                            console.error(error);
                        });
              


        
      },
      validateUser () {

        
        this.$v.$touch()
        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    }

   
    
  }
</script>

<style  scoped>

.f-right{
    float: left;
}

.f-left{
    float: right;
}
.m-left{
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
  .b-color{
    background-color: orange;
    color: white;
  }


.p-card{
    padding-left: 90px;
    padding-right:90px;
    padding-top: 30px;
    padding-bottom: 30px;
  }


@media only screen and (max-width: 768px) {


  .p-card{
    padding-left: 10px;
    padding-right:10px;
    padding-top: 10px;
    padding-bottom: 100px;
  }


}


.center{
    align-content: center;
    text-align: center;
}


.b-w{
    width: 230px;
}


  .b-div{
    background-image: url("ash.jpg");
     background-position: center;
     background-size: cover;
  }
  .t-center{
    text-align: center;
  }
  .b-primary{
    background-color: #425e9e ;
  }
  
</style>