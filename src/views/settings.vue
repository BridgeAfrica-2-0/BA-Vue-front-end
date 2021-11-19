<template>
  <div>
    <Navbar />

    <div class="container wahala">
      <b-row>
        <b-col cols="12" md="12" lg="9" xl="9">
          <div>
            <b-tabs pills :vertical="vertical" class="itzlala" nav-wrapper-class="w-15">
              <!-- NOTIFICATIONS TAB -->
              <b-tab title="Notifications">
                <b-card-text class="mt-3">
                  <b-row>
                    <b-col cols="12" md="12">
                      <SettingsNotifications/>
                    </b-col>
                  </b-row>
                </b-card-text>
              </b-tab>
              <b-tab :title="`${$t('settings.general')}`">
                <b-card-text class="mt-3">
                  <b-row>
                    <b-col cols="12" md="12">
                      <div>
                        <b-table-simple hover small caption-top responsive>
                          <b-tbody>
                            <b-tr>
                              <b-td class="a-text text"> {{ $t('settings.name') }} </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">Blezour Blec</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text"> {{ $t('settings.public_url') }} </b-td>

                              <b-td class="text"
                                ><b-link href="#">
                                  http://blec.bridgeafrica.com
                                </b-link>
                              </b-td>
                            </b-tr>

                            <br />

                            <b-tr>
                              <b-td class="a-text text"> {{ $t('settings.email') }} </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">BlezourBlec@gmail.com</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text">{{ $t('settings.phone') }} </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">+237 82325939</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text"> {{ $t('settings.dob') }} </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">21/08/2020</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text"> {{ $t('settings.gender') }} </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">Male</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text"> {{ $t('settings.country') }} </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">Cameroon</b-link>
                              </b-td>
                            </b-tr>

                            <br />

                            <b-tr>
                              <b-td class="a-text tetx"> {{ $t('settings.city') }} </b-td>

                              <b-td class="a-text text">
                                <b-link href="#">Yaounde</b-link>
                              </b-td>
                            </b-tr>
                            <br />

                            <b-tr>
                              <b-td class="a-text text"> {{ $t('settings.neighbourhood') }}</b-td>

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

              <b-tab :title="`${$t('settings.account_type')}`">
                <b-card class="mt-15 cent">
                  <div class="text-center">
                    <span class="username text-center mb-3">
                      <b> {{ $t('settings.upgrade_your_business_account') }} </b>
                    </span>
                  </div>

                  <div class="container">
                    <span class="text text-left">
                      <br />
                      {{ $t('settings.make_more_money') }}
                    </span>
                  </div>
                  <img src="@/assets/img/buynow.png" class="buynow" alt="buy now" />
                  <div class="container text-center">
                    <img src="@/assets/img/fruits.jpg" class="img-fluid banner" alt="Kitten" />

                    <b-button variant="primary" class="text-center mt-3">
                      {{ $t('settings.upgrade_now') }}
                    </b-button>
                  </div>
                </b-card>
              </b-tab>

              <b-tab :title="`${$t('settings.payment')}`">
                <b-card-text class="mt-3 text cent">
                  <h3 class="username">{{ $t('settings.chose_payment_method') }}</h3>

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

              <b-tab :title="`${$t('settings.password')}`">
                <b-card-text class="mt-3 text">
                  <h3 class="username">{{ $t('settings.change_current_password') }}</h3>
                  <br />

                  <div class="b-bottom">
                    <b-container>
                      <b-form-group
                        label-cols-lg="3"
                        :label="`${$t('settings.current_password')}`"
                        label-size="md"
                        label-class=" text"
                        class="mb-0"
                      >
                        <b-form-input id="bname" placeholder="" required></b-form-input>
                      </b-form-group>
                    </b-container>
                  </div>

                  <br />

                  <div class="b-bottom">
                    <b-container>
                      <b-form-group
                        label-cols-lg="3"
                        :label="`${$t('settings.new_password')}`"
                        label-size="md"
                        label-class=" text"
                        class="mb-0"
                      >
                        <b-form-input id="bname" placeholder="" required></b-form-input>
                      </b-form-group>
                    </b-container>
                  </div>

                  <br />

                  <div class="b-bottom">
                    <b-container>
                      <b-form-group
                        label-cols-lg="3"
                        :label="`${$t('settings.confirm_password')}`"
                        label-size="md"
                        label-class="text"
                        class="mb-0"
                      >
                        <b-form-input id="bname" placeholder="" required></b-form-input>
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
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import SettingsNotifications from '@/components/SettingsNotifications.vue'

export default {
  components: {
    Navbar,
    Footer,
    SettingsNotifications
  },

  computed: {
    vertical() {
      if (this.size > 992) return true;
      return false;
    },
  },

  data() {
    return {
      size: 0,
    };
  },

  mounted() {
    var that = this;
    window.onresize = function() {
      that.size = window.innerWidth;
      console.log(that);

      console.log('lolo');
    };

    if (that.size == '') {
      that.size = window.innerWidth;
      console.log('lolo');
    }
  },
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
