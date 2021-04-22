<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
     
      <md-card class="md-layout-item md-size-50 md-small-size-100 p-card">
        <md-card-header>
          <div class="md-title center">Login To Bridge Africa</div>
        </md-card-header>

        <md-card-content>

 

         <div class="center">

         <b-row>  <b-col cols="12" md="6" lg="12" xl="6">  <md-button class="  md-raised md-primary b-w">  <b-icon icon="facebook" aria-hidden="true"></b-icon> Login With Facebook</md-button>   </b-col> 
          
        
          <b-col cols="12" md="6" lg="12" xl="6">  <md-button class="  b-color b-w" style="color:white;" > <b-icon icon="google" aria-hidden="true"></b-icon> Login  with Google</md-button> </b-col>
          
          
            </b-row>       
     
     
      
    
    
    </div>

    <br/>

<p class="t-center"> -OR- </p>

            <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
          </md-field>



           <md-field >
            <label for="password">Password</label>
            <md-input type="password" name="password" id="password"  v-model="form.password" :disabled="sending" />
           
          </md-field>


         





          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100 m-left">
             


                 <b-form-checkbox
      id="checkbox-1"
     
      name="checkbox-1"
      value="accepted"
      unchecked-value="not_accepted"
    >
     Remeber Me
    </b-form-checkbox>




            </div>

            <div class="md-layout-item md-small-size-100">
              <br/>
           <b-link>     <label >Forget Password</label>   </b-link>
            </div>
          </div>




        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

  

   <div>

        <b-row>  <b-col cols="6">     <md-button type="submit" :disabled="sending" class="b-color  f-left "  style="color:white;" >Login</md-button>
            </b-col>   <b-col cols="6">   <b-link href="/signup"> <md-button class=" md-raised f-right ">Sign Up</md-button>  </b-link>    </b-col>  </b-row>
     
     
       


    </div>


    <div>
     
      
     
    </div>


    <div>  

      <br/>
      <br/>
      

      <label> By Loging in you agree to Bridge Africa's  </label> <br/>  
      
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
    boolean: true,
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
    padding-top: 80px;
    padding-bottom: 80px;
  }
  .b-div{
    background-image: url("ash.jpg");
     background-position: center;
     background-size: cover;
  }
  .t-center{
    text-align: center;
  }

  .center{
    align-content: center;
    text-align: center;
}


.b-w{
    width: 230px;
}




@media only screen and (max-width: 768px) {


  .p-card{
    padding-left: 10px;
    padding-right:10px;
    padding-top: 10px;
    padding-bottom: 100px;
  }


}


</style> 