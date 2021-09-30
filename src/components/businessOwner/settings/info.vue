<template>
  <b-container fluid>
    <b-container class="bv-example-row">
      <b-form>
        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Business Name"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-input id="bname" v-model="businessForm.name" name="name" required></b-form-input>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Category"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-select
                v-model="businessForm.category"
                :options="categories"
                name="category"
                class="mb-3"
                value-field="item"
                text-field="name"
              ></b-form-select>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Search Keywords"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-tags 
                input-id="tags-basic" 
                v-model="businessForm.Skeywords"
              ></b-form-tags>
            </b-form-group>
          </b-container>
        </div>

        <!-- <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Language"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-select id="timezone" v-model="time_zone" name="language">
                <option value="" selected="" disabled="true"> Select Language </option>
                <option>English</option>
                <option>Hindi</option>
              </b-form-select>
            </b-form-group>
          </b-container>
        </div> -->

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Time zone"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-select
                id="timezone"
                v-model="businessForm.time_zone"
                :options="timezones"
                name="timezone"
                value-field="value"
                text-field="label"
              >
              </b-form-select>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="About"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-textarea
                id="about"
                v-model="businessForm.about"
                placeholder="Enter something..."
                rows="3"
                max-rows="6"
              ></b-form-textarea>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom ">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Phone 1"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-row>
                <b-col>
                  <b-form-select v-model="selected">
                    <b-form-select-option value="a">
                      --select option</b-form-select-option
                    >
                  </b-form-select>
                </b-col>

                <b-col cols="8">
                  <b-form-input id="phone1" v-model="businessForm.phone1" name="phone1"></b-form-input>
                </b-col>
              </b-row>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom ">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Phone 2"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-row>
                <b-col>
                  <b-form-select v-model="selected">
                    <b-form-select-option value="a">
                      --select option</b-form-select-option
                    >
                  </b-form-select>
                </b-col>

                <b-col cols="8">
                  <b-form-input id="phone2" v-model="businessForm.phone2" name="phone2"></b-form-input>
                </b-col>
              </b-row>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Website"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-input id="bname" name="website" v-if="businessForm.website != 'website N/V'" v-model="businessForm.website" placeholder="http://wwww.example.com" required></b-form-input>
              <b-form-checkbox class="a-text text" id="" value="website N/V" name="nowebsite" unchecked-value="website A/V" v-model="businessForm.website">
                This Business does not have a Website
              </b-form-checkbox>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Email"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-input id="bname" name="email" v-if="businessForm.email != 'email N/V'" v-model="businessForm.email" required></b-form-input>
              <b-form-checkbox class="a-text text" id="" value="email N/V" name="noemail" unchecked-value="email A/V" v-model="businessForm.email">
                This Business does not have a Email
              </b-form-checkbox>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Country"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <country-select
                v-model="businessForm.country"
                :country="country"
                name="country"
                topCountry="US"
                class="form-control text"
              />
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="City"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-input id="bname" name="city" v-model="businessForm.city" required></b-form-input>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Neighbourhood"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-input id="bname" name="neighbourhood" v-mode="businessForm.neighbourhood" required></b-form-input>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Three Location Description"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-input id="bname" name="locationdesc" v-model="businessForm.locationdesc" required></b-form-input>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Address"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-checkbox id="" class="a-text text" name="Aaddress" v-model="Aaddress" value="address A/V">
                This Business has an address</b-form-checkbox
              >

              <b-container v-if="Aaddress">
                <b-row class="text">
                  <b-col>
                    <p>Street Address</p>
                    <b-form-input name="" v-model="businessForm.Aaddresses.Street"></b-form-input>
                  </b-col>
                  <b-col>
                    <p>City</p>
                    <b-form-input name="" v-model="businessForm.Aaddresses.City"></b-form-input
                  ></b-col>
                  <b-col>
                    <p>Postal Code</p>
                    <b-form-input name="" v-model="businessForm.Aaddresses.PostalCode"></b-form-input
                  ></b-col>
                </b-row>
                <br />
                <div>
                  <b-embed
                    type="iframe"
                    aspect="16by9"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                    allowfullscreen
                  ></b-embed>
                </div>
              </b-container>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Business Hours"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-group class="mb-0">
                <b-form-radio-group
                  v-model="openHours"
                  class="a-text text"
                  :options="['Always Open',  'Open for selected hours']"
                  value-field="value"
                  text-field="name"
                ></b-form-radio-group>
                <br />
                <b-container >
                  <b-row>
                    <b-col cols="6"
                      ><b-form-checkbox
                        id=""
                        class="a-text text"
                        name=""
                        value=""
                      >
                        Monday</b-form-checkbox
                      ></b-col
                    >

                    <b-col><b-form-input name="" v-model="Odays.mS"></b-form-input></b-col>-
                    -<b-col><b-form-input name="" v-model="Odays.mE"></b-form-input></b-col>
                  </b-row>
                  <br />

                  <b-row>
                    <b-col cols="6"
                      ><b-form-checkbox
                        id=""
                        class="a-text text"
                        name=""
                        value=""
                      >
                        Tuesday</b-form-checkbox
                      ></b-col
                    >
                    <b-col><b-form-input name="" v-model="Odays.mS"></b-form-input></b-col>- -
                    <b-col><b-form-input name="" v-model="Odays.mE"></b-form-input></b-col>
                  </b-row>
                  <br />

                  <b-row>
                    <b-col cols="6"
                      ><b-form-checkbox
                        id=""
                        class="a-text text"
                        name=""
                        value=""
                      >
                        Wednesday</b-form-checkbox
                      ></b-col
                    >
                    <b-col><b-form-input name=""></b-form-input></b-col>- -
                    <b-col><b-form-input name=""></b-form-input></b-col>
                  </b-row>
                  <br />

                  <b-row>
                    <b-col cols="6"
                      ><b-form-checkbox
                        id=""
                        class="a-text a-text text"
                        name=""
                        value=""
                      >
                        Thursday</b-form-checkbox
                      ></b-col
                    >
                    <b-col><b-form-input name=""></b-form-input></b-col>- -
                    <b-col><b-form-input name=""></b-form-input></b-col>
                  </b-row>
                  <br />

                  <b-row>
                    <b-col cols="6"
                      ><b-form-checkbox
                        id=""
                        class="a-text text"
                        name=""
                        value=""
                      >
                        Friday
                      </b-form-checkbox></b-col
                    >
                    <b-col><b-form-input name=""></b-form-input></b-col>- -
                    <b-col><b-form-input name=""></b-form-input></b-col>
                  </b-row>
                  <br />

                  <b-row>
                    <b-col cols="6"
                      ><b-form-checkbox
                        id=""
                        class="a-text text"
                        name=""
                        value=""
                      >
                        Saturday
                      </b-form-checkbox></b-col
                    >
                    <b-col><b-form-input name=""></b-form-input></b-col>- -
                    <b-col><b-form-input name=""></b-form-input></b-col>
                  </b-row>
                  <br />

                  <b-row>
                    <b-col cols="6"
                      ><b-form-checkbox
                        id=""
                        name=""
                        class="a-text text"
                        value=""
                      >
                        Sunday</b-form-checkbox
                      ></b-col
                    >
                    <b-col><b-form-input name=""></b-form-input></b-col>- -
                    <b-col><b-form-input name=""></b-form-input></b-col>
                  </b-row>
                  <br />
                </b-container>
              </b-form-group>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Post Approval"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0 text"
            >
              <b-form-checkbox
                id="checkbox-1"
                v-model="status"
                name="checkbox-1"
                value="accepted"
                unchecked-value="not_accepted"
                class="text"
              >
                All business posts must be approved by an admin
              </b-form-checkbox>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Keyword Alerts"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-tags 
                input-id="tags-basic" 
                v-model="businessForm.Akeywords"
              ></b-form-tags>
            </b-form-group>
          </b-container>
        </div>

        <div class="b-bottom">
          <b-container>
            <b-form-group
              label-cols-lg="3"
              label="Marketplace"
              label-size="md"
              label-class="font-weight-bold pt-0 username"
              class="mb-0"
            >
              <b-form-checkbox 
                v-model="businessForm.Marketplace"
                name="check-button" 
                switch
                value="1"
                unchecked-value="0"
              >
              </b-form-checkbox>
            </b-form-group>
          </b-container>
        </div>

        <b-container>
          <b-link href="#foo" class="f-left text"
            >Delete Business Identity</b-link
          >
        </b-container>

        <div class="b-bottomm">
          <b-button variant="primary" class="a-button-l" @click="updateInfo()">Save Changes</b-button>
          <br />
          <br />
        </div>
      </b-form>
    </b-container>

    <Footer />
  </b-container>
</template>

<script>
import { validationMixin } from "vuelidate";
import axios from "axios";
import { required, email, minLength } from "vuelidate/lib/validators";
export default {
  name: "info",
  mixins: [validationMixin],
  data() {
    return {
      categories: [
        { item: "Professional_and_home_service", name: "Professionals" },
        { item: "Agriculture ", name: "Agriculture " },
        { item: "Restaurant ", name: " Restaurant " },
        { item: "Electronics ", name: "Electronics " },
        { item: "Handicrafts", name: "Handicrafts" },
        { item: "clothing", name: "clothing" },
        { item: "Mechanics", name: "Mechanics" },
        { item: "Health_unit ", name: "Health unit " },
        { item: "Bars", name: "Bars" },
        { item: "Hair_and_beauty ", name: "Hair and beauty " },
        { item: "Real_estate ", name: "Real_estate " },
        { item: "Travelling ", name: "Travelling " },
        { item: "Hotels", name: "Hotels" },
        { item: "station", name: " station  " },
        { item: "Mayor_concils", name: "Mayor_concils" },
        { item: "Taxis service", name: "Taxis service" }
      ],
      timezones: [
        { label: "(GMT-12:00) International Date Line West", value: "-12" },
        { label: "(GMT-11:00) Midway Island, Samoa", value: "-11" },
        { label: "(GMT-10:00) Hawaii", value: "-10" },
        { label: "(GMT-09:00) Alaska", value: "-9" },
        { label: "(GMT-08:00) Pacific Time (US & Canada)", value: "-8" },
        { label: "(GMT-08:00) Tijuana, Baja California", value: "-8" },
        { label: "(GMT-07:00) Arizona", value: "-7" },
        { label: "(GMT-07:00) Chihuahua, La Paz, Mazatlan", value: "-7" },
        { label: "(GMT-07:00) Mountain Time (US & Canada)", value: "-7" },
        { label: "(GMT-06:00) Central America", value: "-6" },
        { label: "(GMT-06:00) Central Time (US & Canada)", value: "-6" },
        { label: "(GMT-05:00) Bogota, Lima, Quito, Rio Branco", value: "-5" },
        { label: "(GMT-05:00) Eastern Time (US & Canada)", value: "-5" },
        { label: "(GMT-05:00) Indiana (East)", value: "-5" },
        { label: "(GMT-04:00) Atlantic Time (Canada)", value: "-4" },
        { label: "(GMT-04:00) Caracas, La Paz", value: "-4" },
        { label: "(GMT-04:00) Manaus", value: "-4" },
        { label: "(GMT-04:00) Santiago", value: "-4" },
        { label: "(GMT-03:30) Newfoundland", value: "-3.5" },
        { label: "(GMT-03:00) Brasilia", value: "-3" },
        { label: "(GMT-03:00) Buenos Aires, Georgetown", value: "-3" },
        { label: "(GMT-03:00) Greenland", value: "-3" },
        { label: "(GMT-03:00) Montevideo", value: "-3" },
        { label: "(GMT-02:00) Mid-Atlantic", value: "-2" },
        { label: "(GMT-01:00) Cape Verde Is.", value: "-1" },
        { label: "(GMT-01:00) Azores", value: "-1" },
        { label: "(GMT+00:00) Casablanca, Monrovia, Reykjavik", value: "0" },
        { label: "(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London", value: "0", },
        { label: "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna", value: "1", },
        { label: "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague", value: "1", },
        { label: "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris", value: "1", },
        { label: "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb", value: "1" },
        { label: "(GMT+01:00) West Central Africa", value: "1" },
        { label: "(GMT+02:00) Amman", value: "2" },
        { label: "(GMT+02:00) Athens, Bucharest, Istanbul", value: "2" },
        { label: "(GMT+02:00) Beirut", value: "2" },
        { label: "(GMT+02:00) Cairo", value: "2" },
        { label: "(GMT+02:00) Harare, Pretoria", value: "2" },
        { label: "(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius", value: "2", },
        { label: "(GMT+02:00) Jerusalem", value: "2" },
        { label: "(GMT+02:00) Minsk", value: "2" },
        { label: "(GMT+02:00) Windhoek", value: "2" },
        { label: "(GMT+03:00) Kuwait, Riyadh, Baghdad", value: "3" },
        { label: "(GMT+03:00) Moscow, St. Petersburg, Volgograd", value: "3" },
        { label: "(GMT+03:00) Nairobi", value: "3" },
        { label: "(GMT+03:00) Tbilisi", value: "3" },
        { label: "(GMT+03:30) Tehran", value: "3.5" },
        { label: "(GMT+04:00) Abu Dhabi, Muscat", value: "4" },
        { label: "(GMT+04:00) Baku", value: "4" },
        { label: "(GMT+04:00) Yerevan", value: "4" },
        { label: "(GMT+04:30) Kabul", value: "4.5" },
        { label: "(GMT+05:00) Yekaterinburg", value: "5" },
        { label: "(GMT+05:00) Islamabad, Karachi, Tashkent", value: "5" },
        { label: "(GMT+05:30) Sri Jayawardenapura", value: "5.5" },
        { label: "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi", value: "5.5", },
        { label: "(GMT+05:45) Kathmandu", value: "5.75" },
        { label: "(GMT+06:00) Almaty, Novosibirsk", value: "6" },
        { label: "(GMT+06:00) Astana, Dhaka", value: "6" },
        { label: "(GMT+06:30) Yangon (Rangoon)", value: "6.5" },
        { label: "(GMT+07:00) Bangkok, Hanoi, Jakarta", value: "7" },
        { label: "(GMT+07:00) Krasnoyarsk", value: "7" },
        { label: "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi", value: "8", },
        { label: "(GMT+08:00) Kuala Lumpur, Singapore", value: "8" },
        { label: "(GMT+08:00) Irkutsk, Ulaan Bataar", value: "8" },
        { label: "(GMT+08:00) Perth", value: "8" },
        { label: "(GMT+08:00) Taipei", value: "8" },
      ],
      options: [
        { text: " Person", value: "person" },
        { text: " Business ", value: "business" },
      ],
      Aaddress:"",
      openHours:1,
      Odays: {
        mS:"",mE:"",
        tuS:"",tuE:"",
        wS:"",wE:"",
        thS:"",thE:"",
        fS:"",fE:"",
        saS:"",saE:"",
        suS:"",suE:"",
      },
      businessForm: {
        name: "",
        category: "",
        Skeywords: "",
        timezone: "",
        about: "",
        phone1: "",
        phone2: "",
        website: "",
        email: "",
        country: "",
        city: "",
        neighbourhood: "",
        locationdesc: "",
        Aaddresses: {
          Street: "",
          City: "",
          PostalCode: "",
        },
        // openHours:{
        //   monday:this.Odays.mS+'--'+this.Odays.mE,
        //   tuesday:this.Odays.tuS+'--'+this.Odays.tuE,
        //   wednesday:this.Odays.wS+'--'+this.Odays.wE,
        //   thursday:this.Odays.thS+'--'+this.Odays.thE,
        //   friday:this.Odays.fS+'--'+this.Odays.fE,
        //   satuday:this.Odays.saS+'--'+this.Odays.saE,
        //   sunday:this.Odays.suS+'--'+this.Odays.suE,
        // },
        Akeywords:"",
        Marketplace:"",
      }
    };
  },
  
  methods:{
    updateInfo: function(){
      return new Promise((resolve, reject) => {
        let formData = new FormData();
        formData.append("name", this.form.name);
        formData.append("role", this.form.role);
        this.axios.post("role/assignRole/{business}", formData)
        .then(response => {
          console.log(response);
          this.flashMessage.show({
            status: "success",
            message: "New Role Assigned"
          });
            
          resolve(true);
        })
        .catch(err => {
          console.log({ err: err });
          this.flashMessage.show({
            status: "error",
            message: "Unable to Assigned New Role"
          });
          resolve(false);
        });
      });
		},
  }
};
</script>

<style scoped>
.bv-example-row {
  font-size: 12px;
}
.b-bottom {
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 10px;
}
.tabs {
  width: 100%;
}
.i-width {
  width: 40%;
}
.b-bottomm {
  padding-bottom: 10px;
}
.f-left {
  float: left;
}
.a-button-l {
  align-content: right;
  float: right;
}
.a-text {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}
.a-align {
  text-align: left;
  padding-left: 10px;
  padding-right: 10px;
}
.settings {
  margin-left: 90%;
  position: relative;
  top: 40px;
}
@media only screen and (max-width: 768px) {
  .settings {
    top: -5px;
    left: -20px;
  }
}
</style>