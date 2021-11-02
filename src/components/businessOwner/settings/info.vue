<template>
  
    <b-container fluid>
      <b-container class="bv-example-row">
        <b-form>
        

          <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                :label="$t('businessowner.Business_Name')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                <b-form-input id="bname" placeholder="" required></b-form-input>
              </b-form-group>
            </b-container>
          </div>

          <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                :label="$t('businessowner.Category')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                       <b-form-select
            v-model="category"
            :options="categories"
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
                :label="$t('businessowner.Search_Keywords')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  :placeholder="$t('businessowner.Enter_something')"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </b-container>
          </div>

          <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                :label="$t('businessowner.Language')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                <b-form-select v-model="selected">
                  <b-form-select-option value="a">
                    --{{$t("businessowner.select_option")}}</b-form-select-option
                  >
                </b-form-select>
              </b-form-group>
            </b-container>
          </div>

          <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                :label="$t('businessowner.Time_zone')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                <b-form-select v-model="selected">
                  <b-form-select-option value="a">
                    --{{$t("businessowner.select_option")}}</b-form-select-option
                  >
                </b-form-select>
              </b-form-group>
            </b-container>
          </div>

          <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                :label="$t('businessowner.About')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  :placeholder="$t('businessowner.Enter_something')"
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
                :label="$t('businessowner.Phone_1')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                <b-row>
                  <b-col>
                    <b-form-select v-model="selected">
                      <b-form-select-option value="a">
                        --{{$t("businessowner.selectoption")}}</b-form-select-option
                      >
                    </b-form-select>
                  </b-col>

                  <b-col cols="8">
                    <b-form-input id="bname" placeholder=""></b-form-input>
                  </b-col>
                </b-row>
              </b-form-group>
            </b-container>
          </div>


            <div class="b-bottom ">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                :label="$t('businessowner.Phone_2')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                <b-row>
                  <b-col>
                    <b-form-select v-model="selected">
                      <b-form-select-option value="a">
                        --{{$t("businessowner.select_option")}}</b-form-select-option
                      >
                    </b-form-select>
                  </b-col>

                  <b-col cols="8">
                    <b-form-input id="bname" placeholder=""></b-form-input>
                  </b-col>
                </b-row>
              </b-form-group>
            </b-container>
          </div>

          <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                :label="$t('businessowner.Website')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                <b-form-input id="bname" placeholder="" required></b-form-input>
                <b-form-checkbox class="a-text text" id="" name="" value="">
                  {{$t("businessowner.This_Business_does_not_have_a_Website")}}
                </b-form-checkbox>
              </b-form-group>
            </b-container>
          </div>

          <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                :label="$t('businessowner.Email')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                <b-form-input id="bname" placeholder="" required></b-form-input>
                <b-form-checkbox class="a-text text" id="" name="" value="">
                  {{$t("businessowner.This_Business_does_not_have_a_Email")}}
                </b-form-checkbox>
              </b-form-group>
            </b-container>
          </div>

       




 <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                :label="$t('businessowner.Country')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                <country-select v-model="country" :country="country" topCountry="US"  class="form-control text" />
              </b-form-group>
            </b-container>
          </div>





          <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                :label="$t('businessowner.City')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                <b-form-input id="bname" placeholder="" required></b-form-input>
              </b-form-group>
            </b-container>
          </div>

          <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                :label="$t('businessowner.Neighbourhood')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                <b-form-input id="bname" placeholder="" required></b-form-input>
              </b-form-group>
            </b-container>
          </div>

          <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                :label="$t('businessowner.Three_Location_Description')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                <b-form-input id="bname" placeholder="" required></b-form-input>
              </b-form-group>
            </b-container>
          </div>

          <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                :label="$t('businessowner.Address')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                <b-form-checkbox id="" class="a-text text" name="" value="">
                  {{$t("businessowner.This_Business_has_an_address")}}</b-form-checkbox
                >

                <b-container>
                  <b-row class="text">
                    <b-col>
                      <p>{{$t("businessowner.Street_Address")}}</p>
                      <b-form-input name=""></b-form-input>
                    </b-col>
                    <b-col>
                      <p>{{$t("businessowner.City")}}</p>
                      <b-form-input name=""></b-form-input
                    ></b-col>
                    <b-col>
                      <p>{{$t("businessowner.Postal_Code")}}</p>
                      <b-form-input name=""></b-form-input
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
                :label="$t('businessowner.Business_Hours')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
                  <b-form-radio-group
                    class="a-text text"
                    :options="['Always Open', 'Open for selected hours']"
                    :aria-describedby="ariaDescribedby"
                  ></b-form-radio-group>
                  <br />
                  <b-container>
                    <b-row>
                      <b-col cols="6"
                        ><b-form-checkbox id="" class="a-text text" name="" value="">
                          {{$t("businessowner.Monday")}}</b-form-checkbox
                        ></b-col
                      >


                      <b-col><b-form-input name=""></b-form-input></b-col>-
                      -<b-col><b-form-input name=""></b-form-input></b-col>
                    </b-row>
                    <br />

                    <b-row>
                      <b-col cols="6"
                        ><b-form-checkbox id="" class="a-text text" name="" value="">
                          {{$t("businessowner.Tuesday")}}</b-form-checkbox
                        ></b-col
                      >
                      <b-col><b-form-input name=""></b-form-input></b-col>- -
                      <b-col><b-form-input name=""></b-form-input></b-col>
                    </b-row>
                    <br />

                    <b-row>
                      <b-col  cols="6"
                        ><b-form-checkbox id="" class="a-text text" name="" value="">
                          {{$t("businessowner.Wednesday")}}</b-form-checkbox
                        ></b-col
                      >
                      <b-col><b-form-input name=""></b-form-input></b-col>- -
                      <b-col><b-form-input name=""></b-form-input></b-col>
                    </b-row>
                    <br />

                    <b-row>
                      <b-col cols="6"
                        ><b-form-checkbox id="" class="a-text a-text text" name="" value="">
                          {{$t("businessowner.Thursday")}}</b-form-checkbox
                        ></b-col
                      >
                      <b-col><b-form-input name=""></b-form-input></b-col>- -
                      <b-col><b-form-input name=""></b-form-input></b-col>
                    </b-row>
                    <br />

                    <b-row>
                      <b-col cols="6"
                        ><b-form-checkbox id="" class="a-text text" name="" value="">
                          {{$t("businessowner.Friday")}}
                        </b-form-checkbox></b-col
                      >
                      <b-col><b-form-input name=""></b-form-input></b-col>- -
                      <b-col><b-form-input name=""></b-form-input></b-col>
                    </b-row>
                    <br />

                    <b-row>
                      <b-col cols="6"
                        ><b-form-checkbox id="" class="a-text text" name="" value="">
                          {{$t("businessowner.Saterday")}}
                        </b-form-checkbox></b-col
                      >
                      <b-col><b-form-input name=""></b-form-input></b-col>- -
                      <b-col><b-form-input name=""></b-form-input></b-col>
                    </b-row>
                    <br />

                    <b-row>
                      <b-col cols="6"
                        ><b-form-checkbox id="" name="" class="a-text text" value="">
                          {{$t("businessowner.Sunday")}}</b-form-checkbox
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
                :label="$t('businessowner.Post_Aproval')"
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
                  {{$t("businessowner.All-business_posts_must_be_approved_by_an_admin")}}
                </b-form-checkbox>
              </b-form-group>
            </b-container>
          </div>

          <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                :label="$t('businessowner.Keyword_Alerts')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                <b-form-textarea
                  id="textarea"
               
                  :placeholder="$t('businessowner.Enter_something')"
                  rows="3"
                  max-rows="6"
                ></b-form-textarea>
              </b-form-group>
            </b-container>
          </div>

          <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                :label="$t('businessowner.Marketplace')"
                label-size="md"
                label-class="font-weight-bold pt-0 username"
                class="mb-0"
              >
                <b-form-checkbox v-model="checked" name="check-button" switch>
                </b-form-checkbox>
              </b-form-group>
            </b-container>
          </div>

          <b-container>
            <b-link href="#foo" class="f-left text">{{$t("businessowner.Delete_Business_Identity")}}</b-link>
          </b-container>



            <div class="b-bottomm">
            <b-button variant="primary" class="a-button-l"
              >{{$t("businessowner.Save_Changes")}}</b-button
            >
            <br />
            <br />
          </div>

          
        </b-form>
      </b-container>

      <Footer />
    </b-container>

</template>

<script>
export default {
  name: "info",


   data() {
    return {
      

       category:'',
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
           { item: "Taxis service", name: "Taxis service" },

      ],
    }}
};
</script>

<style scoped>

.bv-example-row{
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
