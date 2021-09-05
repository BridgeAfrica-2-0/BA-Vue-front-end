<template>
  <div>
    <Navbar />
    <b-container class="mt-5">
      <b-row>
        <b-col>
          <div class="box">
            <h1>Forget Password</h1>
            <p>Enter your mobile number or email:</p>
            <input
              type="text"
              name=""
              class="form-control"
              placeholder="Enter e-mail"
            />
            <b-button class="btn mt-2">Recover Password</b-button>
            <p class="mt-3">
              <small
                >Don't have an account?
                <b-link class="link">SignUp</b-link></small
              >
            </p>
          </div>
        </b-col>
        <b-col>
          <b-img
            src="https://profile.bridgeafrica.info/assets/img/photoh1.jpg"
            width="600"
          ></b-img>
        </b-col>
      </b-row>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import Footer from "../components/footer";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style scoped>
.box {
  width: 80%;
}
.btn {
  background-color: #e75c18;
  border: none;
}

.btn:hover {
  background-color: #e75c18;
  border: none;
}
.link {
  color: #e75c18;
  text-decoration: none;
}
</style>
