<template>
  
    <b-container fluid>
      <b-container class="bv-example-row">
        <b-form>
          <div class="b-bottomm">
            <b-button variant="primary" class="a-button-l"
              >Save Changes</b-button
            >
            <br />
            <br />
          </div>

          <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                label="Business Name"
                label-size="md"
                label-class="font-weight-bold pt-0"
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
                label="Category"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-select v-model="selected">
                  <b-form-select-option value="a">
                    --select option</b-form-select-option
                  >
                </b-form-select>
              </b-form-group>
            </b-container>
          </div>

          <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                label="Search Keywords"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Enter something..."
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
                label="Language"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-select v-model="selected">
                  <b-form-select-option value="a">
                    --select option</b-form-select-option
                  >
                </b-form-select>
              </b-form-group>
            </b-container>
          </div>

          <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                label="Time zone"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-select v-model="selected">
                  <b-form-select-option value="a">
                    --select option</b-form-select-option
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
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Enter something..."
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
                label="Phone"
                label-size="md"
                label-class="font-weight-bold pt-0"
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
                label="Website"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-input id="bname" placeholder="" required></b-form-input>
                <b-form-checkbox class="a-text" id="" name="" value="">
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
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-input id="bname" placeholder="" required></b-form-input>
                <b-form-checkbox class="a-text" id="" name="" value="">
                  This Business does not have a Email
                </b-form-checkbox>
              </b-form-group>
            </b-container>
          </div>

          <div class="b-bottom">
            <b-container>
              <b-form-group
                label-cols-lg="3"
                label="City"
                label-size="md"
                label-class="font-weight-bold pt-0"
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
                label="Neighbourhood"
                label-size="md"
                label-class="font-weight-bold pt-0"
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
                label="Three Location Description"
                label-size="md"
                label-class="font-weight-bold pt-0"
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
                label="Address"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-checkbox id="" class="a-text" name="" value="">
                  This Business has an address</b-form-checkbox
                >

                <b-container>
                  <b-row>
                    <b-col>
                      <p>Street Address</p>
                      <b-form-input name=""></b-form-input>
                    </b-col>
                    <b-col>
                      <p>City</p>
                      <b-form-input name=""></b-form-input
                    ></b-col>
                    <b-col>
                      <p>Postal Code</p>
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
                label="Business Hours"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-group class="mb-0" v-slot="{ ariaDescribedby }">
                  <b-form-radio-group
                    class="a-text"
                    :options="['Always Open', 'Open for selected hours']"
                    :aria-describedby="ariaDescribedby"
                  ></b-form-radio-group>
                  <br />
                  <b-container>
                    <b-row>
                      <b-col cols="6"
                        ><b-form-checkbox id="" class="a-text" name="" value="">
                          Monday</b-form-checkbox
                        ></b-col
                      >


                      <b-col><b-form-input name=""></b-form-input></b-col>-
                      -<b-col><b-form-input name=""></b-form-input></b-col>
                    </b-row>
                    <br />

                    <b-row>
                      <b-col cols="6"
                        ><b-form-checkbox id="" class="a-text" name="" value="">
                          Tuesday</b-form-checkbox
                        ></b-col
                      >
                      <b-col><b-form-input name=""></b-form-input></b-col>- -
                      <b-col><b-form-input name=""></b-form-input></b-col>
                    </b-row>
                    <br />

                    <b-row>
                      <b-col  cols="6"
                        ><b-form-checkbox id="" class="a-text" name="" value="">
                          Wednesday</b-form-checkbox
                        ></b-col
                      >
                      <b-col><b-form-input name=""></b-form-input></b-col>- -
                      <b-col><b-form-input name=""></b-form-input></b-col>
                    </b-row>
                    <br />

                    <b-row>
                      <b-col cols="6"
                        ><b-form-checkbox id="" class="a-text" name="" value="">
                          Thursday</b-form-checkbox
                        ></b-col
                      >
                      <b-col><b-form-input name=""></b-form-input></b-col>- -
                      <b-col><b-form-input name=""></b-form-input></b-col>
                    </b-row>
                    <br />

                    <b-row>
                      <b-col cols="6"
                        ><b-form-checkbox id="" class="a-text" name="" value="">
                          Friday
                        </b-form-checkbox></b-col
                      >
                      <b-col><b-form-input name=""></b-form-input></b-col>- -
                      <b-col><b-form-input name=""></b-form-input></b-col>
                    </b-row>
                    <br />

                    <b-row>
                      <b-col cols="6"
                        ><b-form-checkbox id="" class="a-text" name="" value="">
                          Saterday
                        </b-form-checkbox></b-col
                      >
                      <b-col><b-form-input name=""></b-form-input></b-col>- -
                      <b-col><b-form-input name=""></b-form-input></b-col>
                    </b-row>
                    <br />

                    <b-row>
                      <b-col cols="6"
                        ><b-form-checkbox id="" name="" class="a-text" value="">
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
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="status"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
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
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-textarea
                  id="textarea"
                  v-model="text"
                  placeholder="Enter something..."
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
                label="Marketplace"
                label-size="md"
                label-class="font-weight-bold pt-0"
                class="mb-0"
              >
                <b-form-checkbox v-model="checked" name="check-button" switch>
                </b-form-checkbox>
              </b-form-group>
            </b-container>
          </div>

          <b-container>
            <b-link href="#foo" class="f-left">Delete Business Identity</b-link>
          </b-container>
        </b-form>
      </b-container>

      <Footer />
    </b-container>

</template>

<script>
export default {
  name: "info"
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
