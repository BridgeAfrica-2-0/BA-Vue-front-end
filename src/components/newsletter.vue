<template>
 
    <section class="subscribe  bg-black w-100">
      <div class="row">
        <div class="col-md-4 px-md-0 d-none d-md-block">
          <img src="../assets/img/about/contact2-img18.png" alt="Women" class="sub-img" />
        </div>
        <div class="col-md-4 px-md-0">
          <div class="bg-black sub-div d-flex flex-column justify-content-center">
            <h5 class="text-light font-arvo text-center">{{$t("about.SUBSCRIBE_FOR_NEWSLETTER")}}</h5>
            <h2 class="text-light font-arvo text-center sub-heading">{{$t("about.STAY_IN_TOUCH")}}</h2>
            <b-form-input
              v-model="subEmail"
              :placeholder="$t('about.Your_Email_Address')"
              class="sub-input d-block mx-auto my-3"
            ></b-form-input>

            <b-button pill variant="primary" class="font-arvo sub-btn d-block mx-auto py-md-2 mt-md-3"
              >{{$t("about.Subscribe_To_News")}}</b-button
            >
          </div>
        </div>
        <div class="col-md-4 px-md-0 d-none d-md-block">
          <img
            src="../assets/img/about/Gem-Lane-contact-img19.jpg"
            alt="Calling Man"
            class="sub-img"
          />
        </div>
      </div>
    </section>
</template>


      
<script>


export default {
  name: "Newsletter",

  data(){
    return{
      subEmail:''
    }
  }
 
};
</script>
<style scoped>

.bg-black {
  background-color: #000000;
  color: #000000;
}
.color-white {
  color: #ffffff;
}
      
.sub-img {
  width: 100%;
  height: 350px;
  object-fit: cover;
}
.sub-div {
  width: 100%;
  min-height: 350px;
}
.sub-heading {
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-top: 10px;
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
.sub-btn {
  width: 84%;
  font-size: 19px;
  letter-spacing: 0.05em;
  font-weight: bold;
}
.contact-us-form {
  width: 100%;
  min-height: 100vh;
  background-image: url('../assets/img/about/blocks-image-05-img20.jpg');
}
</style>