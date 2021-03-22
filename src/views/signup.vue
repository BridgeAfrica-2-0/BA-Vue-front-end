<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
     
      <md-card class="md-layout-item md-size-50 md-small-size-100 p-card">
        <md-card-header>
          <div class="md-title">Sign Up On Bridge Africa</div>
        </md-card-header>

        <md-card-content>

 

           <div>
     
      <md-button class="  md-raised md-primary">  <b-icon icon="facebook" aria-hidden="true"></b-icon> Sign Up With Facebook</md-button>
      <md-button class="  b-color" style="color:white;" > <b-icon icon="google" aria-hidden="true"></b-icon> Sign Up with Google</md-button>
    </div>

    <br/>

<p class="t-center"> -OR- </p>




          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100 m-left">
             

                <md-field >
            <label for="first_name">First Name</label>
            <md-input type="text" name="firstName" id="firstName"  v-model="form.firstName" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.firstName.required">First Name  is required</span>
           
          </md-field>


            </div>

            <div class="md-layout-item md-small-size-100">
              



                <md-field >
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



          <md-field >
            <label for="tel">Tel</label>
            <md-input type="number" name="tel" id="tel" v-model="form.tel"  />
           
          </md-field>





           <md-field >
            <label for="password">Password</label>
            <md-input type="password" name="password" id="password"  v-model="form.password" :disabled="sending" />
           
          </md-field>


         

   
           <md-field >
            <label for="re-password">Confirm Password</label>
            <md-input type="password" name="password" id="password"  v-model="form.password" :disabled="sending" />
           
          </md-field>



       



        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />




    <div>
     
      <md-button  type="submit" class="b-color "  style="color:white;"  :disabled="sending" >  Sign Up </md-button>
       <b-link href="/login">  <md-button class=" md-raised ">Login</md-button>  </b-link>
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
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        age: null,
        email: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
        lastName: {
          required,
          minLength: minLength(3)
        },
        age: {
          required,
          maxLength: maxLength(3)
        },
        gender: {
          required
        },
        email: {
          required,
          email
        }
      }
    },
    methods: {
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
        this.form.age = null
        this.form.gender = null
        this.form.email = null
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
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
