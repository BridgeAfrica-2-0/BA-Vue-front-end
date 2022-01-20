<template>
  <!-- Contact Us Form -->
  <section class="contact-us-form mt-3">
    <div class="d-flex justify-content-center">
      <img
        src="../../assets/img/about/logo-21.png"
        alt="Logo"
        class="contact-img"
      />
    </div>
    <h5 class="text-light font-arvo text-center mt-5 text-capitalize contact-heading px-2">
      digitalzins busingess and consumers in afica
    </h5>
    <h3 class="text-light text-center font-arvo text-uppercase contact-heading my-5">
      Contact US
    </h3>
    <div class="px-5">
          <b-form @submit="Contact" >
      <div class="row mx-md-4 mx-2">
        <div class="col-md-4">
          <b-form-input
            v-model="contact.name"
            placeholder="Name*"
            required
            class="sub-input d-block mx-auto my-3 contact-input name"
          ></b-form-input>
        </div>
        <div class="col-md-4">
          <b-form-input
            v-model="contact.email"
            placeholder="Email*"
            type="email"
            required
            class="sub-input d-block mx-auto my-3 contact-input email"
          ></b-form-input>
        </div>
        <div class="col-md-4">
          <b-form-input
            v-model="contact.website"
            placeholder="Website"
            class="sub-input d-block mx-auto my-3 contact-input website"
          ></b-form-input>
        </div>
        <div class="col-md-12">
          <b-form-textarea
            id="textarea"
            v-model="contact.message"
            placeholder="Enter something...*"
            required
            rows="3"
            min-rows="6"
            class="sub-input my-3 contact-msg"
          ></b-form-textarea>
        </div>
        <div class="col-md-2 my-5">
          <b-button variant="primary"  type="submit" class="font-weight-bold font-arvo text-uppercase btn-block"
            >Submit Message</b-button
          >
        </div>
         
      </div>
       </b-form>
    </div>
  </section>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      contact: {
        name: '',
        email: '',
        website: '',
        message: '',
      },
    };
  },
  methods : {

    Contact(event){
      event.preventDefault()
      console.log(this.contact)
      axios.post("contact/create",this.contact)
      .then(res =>{
          console.log(res)
          this.flashMessage.show({
        status: "success",
        message: "your message was submited successfuly",
         blockClass: "custom-block-class",
      })
      })
      .catch (err =>{
        console.log(err)
         this.flashMessage.show({
        status: "error",
        message: "error unable to send your message",
         blockClass: "custom-block-class",
      })
             
      })
    }
  }
};
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Arvo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
.font-arvo {
  font-family: 'Arvo', serif;
}
.font-rob {
  font-family: 'Roboto', Sans-serif;
}
.font-poppin {
  font-family: 'Poppins', sans-serif;
}
.font-source {
  font-family: 'Source Sans Pro', sans-serif;
}
.font-mont {
  font-family: 'Montserrat', sans-serif;
}

.sub-input {
  background-color: #181828;
  border: none;
  color: #ffffff;
  outline: none;
  width: 84%;
  padding: 14px;
}
.sub-input:focus {
  background-color: #181828;
  border: none;
  color: #ffffff;
  outline: none;
  width: 84%;
  box-shadow: none;
}
.contact-us-form {
  width: 100%;
  min-height: 100vh;
  background-image: url('../../assets/img/about/blocks-image-05-img20.jpg');
}
.contact-img {
  margin-top: 5.5rem;
  width: 35%;
}
.contact-heading {
  letter-spacing: 0.05em;
}
.contact-input {
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 16px 18px;
  background-position: 98% 50%;
  cursor: auto;
  width: 100%;
}
.contact-input:focus {
  width: 100%;
}
.contact-input.name {
  background-image: url('../../assets/icons/user.png');
}
.contact-input.email {
  background-image: url('../../assets/icons/envelope.png');
}
.contact-input.website {
  background-image: url('../../assets/icons/world-wide-web.png');
}
.contact-msg {
  width: 100%;
}
.contact-msg:focus {
  width: 100%;
}
</style>
