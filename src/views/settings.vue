<template>
  <div>
    <Navbar />

    <div class="container wahala">
      <b-row>
        <b-col cols="12" md="12" lg="9" xl="9">
          <div>
            <b-tabs
              pills
              :vertical="vertical"
              class="itzlala"
              nav-wrapper-class="w-15"
            >
              <b-tab title="General">
                <b-card-text class="mt-3">
                  <b-row>
                    <b-col cols="12" md="12">
                      <div>
                        <b-table-simple hover small caption-top responsive>
                          <b-tbody>
                            <b-tr>
                              <b-td class="a-text text"> Name </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">Blezour Blec</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text"> Public Url </b-td>

                              <b-td class="text"
                                ><b-link href="#">
                                  http://blec.bridgeafrica.com
                                </b-link>
                              </b-td>
                            </b-tr>

                            <br />

                            <b-tr>
                              <b-td class="a-text text"> Email </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">BlezourBlec@gmail.com</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text"> Phone </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">+237 82325939</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text"> DOB </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">21/08/2020</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text"> Gender </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">Male</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text"> Country </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">Cameroon</b-link>
                              </b-td>
                            </b-tr>

                            <br />

                            <b-tr>
                              <b-td class="a-text tetx"> City </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">Yaounde</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text"> Neighbourhood </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">Nkozoa</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <br />

                            <br />
                          </b-tbody>
                        </b-table-simple>
                      </div>
                    </b-col>
                  </b-row>
                </b-card-text>
              </b-tab>

              <b-tab title="Account Type">
                <b-card class="mt-15 cent">
                  <div class="text-center">
                    <span class="username text-center mb-3">
                      <b> Upgrade Your Business Account </b>
                    </span>
                  </div>

                  <div class="container">
                    <span class="text text-left">
                      <br />
                      Make more money by unlocking your marketplace features
                      where you can sell products and services directly to
                      customer and recieve instant payments
                    </span>
                  </div>
                  <img
                    src="@/assets/img/buynow.png"
                    class="buynow"
                    alt="buy now"
                  />
                  <div class="container text-center">
                    <img
                      src="@/assets/img/fruits.jpg"
                      class="img-fluid banner"
                      alt="Kitten"
                    />

                    <b-button variant="primary" class="text-center mt-3">
                      Upgrade Now
                    </b-button>
                  </div>
                </b-card>
              </b-tab>

              <b-tab title="Payment">
                <b-card-text class="mt-3 text cent">
                  <h3 class="username">Chose default payment method</h3>

                  <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
                    <b-form-radio-group
                      class="pt-2 text"
                      :options="['MTN Mobile Money']"
                      :aria-describedby="ariaDescribedby"
                    ></b-form-radio-group>
                  </b-form-group>

                  <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
                    <b-form-radio-group
                      class="pt-2 text"
                      :options="['Orange Money']"
                      :aria-describedby="ariaDescribedby"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-card-text>
              </b-tab>

              <b-tab title="Password">
                <b-card-text class="mt-3 text">
                  <h3 class="username">Change your current password</h3>
                  <br />

                  <div class="b-bottom">
                    <b-container>
                      <b-form-group
                        label-cols-lg="3"
                        label="Current Password"
                        label-size="md"
                        label-class=" text"
                        class="mb-0"
                      >
                        <b-form-input
                          id="bname"
                          placeholder=""
                          required
                        ></b-form-input>
                      </b-form-group>
                    </b-container>
                  </div>

                  <br />

                  <div class="b-bottom">
                    <b-container>
                      <b-form-group
                        label-cols-lg="3"
                        label="New Password"
                        label-size="md"
                        label-class=" text"
                        class="mb-0"
                      >
                        <b-form-input
                          id="bname"
                          placeholder=""
                          required
                        ></b-form-input>
                      </b-form-group>
                    </b-container>
                  </div>

                  <br />

                  <div class="b-bottom">
                    <b-container>
                      <b-form-group
                        label-cols-lg="3"
                        label="Confirm password"
                        label-size="md"
                        label-class="text"
                        class="mb-0"
                      >
                        <b-form-input
                          id="bname"
                          placeholder=""
                          required
                        ></b-form-input>
                      </b-form-group>
                    </b-container>
                  </div>

                  <br /> </b-card-text
              ></b-tab>
            </b-tabs>
          </div>
        </b-col>
        <b-col> </b-col>
      </b-row>
    </div>

    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default {
  components: {
    Navbar,
    Footer
  },

  computed: {
    vertical() {
      if (this.size > 992) return true;
      return false;
<<<<<<< HEAD
    },
=======
    }
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
  },

  data() {
    return {
<<<<<<< HEAD
      size: 0,
=======
      size: 0
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
    };
  },

  mounted() {
    var that = this;
    window.onresize = function() {
      that.size = window.innerWidth;
      console.log(that);

      console.log("lolo");
    };

    if (that.size == "") {
      that.size = window.innerWidth;
      console.log("lolo");
    }
<<<<<<< HEAD
  },
=======
  }
>>>>>>> 7f397c25f587f4d66699556ebaf14c056ee5b227
};
</script>

<style>
@media only screen and (max-width: 768px) {
  .wahala .nav-pills .nav-link {
    border-radius: 0.25rem;
    font-size: 12px;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>

<style scoped>
.buynow {
  width: 120px;
  margin-bottom: -80px;
  margin-left: -10px;
  position: relative;
}

.mt-15 {
  margin-top: 15px;
}

@media only screen and (min-width: 768px) {
  .cent {
    margin-left: 170px;
  }
}
</style>
