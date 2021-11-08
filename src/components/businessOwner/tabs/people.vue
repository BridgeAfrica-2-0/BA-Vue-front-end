<template>
  <div>
    <div class="s-cardd">
      <div class="people-style border shadow">
        <b-row class="mb-1">
          <b-col md="3" cols="4" lg="3" class="my-auto">
            <b-avatar
              class="p-avater"
              variant="primary"
              :src="people.profile_picutre"
            ></b-avatar>
          </b-col>

          <b-col md="8" cols="8" lg="8">
            <div>
              <b-row class="shift">
                <b-col md="12" lg="12" sm="12" cols="12">
                  <div class="e-name">
                    <b-row>
                      <b-col md="6" lg="6" cols="6" sm="6" class="mt-lg-2">
                        <div class="mt-2 mt-lg-0 mt-xl-0 username">
                          <b> {{ people.name }} </b>
                        </div>
                      </b-col>

                      <b-col
                        md="6"
                        lg="6"
                        cols="6"
                        sm="6"
                        class="mt-3 mt-lg-2 mt-xl-2"
                      >
                        <h6 class="follower">
                          {{ people.followers }} Community
                        </h6>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>

                <b-col lg="12" xl="12" cols="12" sm="12" md="12">
                  <div class="e-name">
                    <b-row class="mt-lg-0">
                      <b-col
                        md="6"
                        lg="6"
                        cols="6"
                        sm="6"
                        xl="6"
                        class="mt-2 mt-lg-2 mt-xl-2 btn-2 center"
                      >
                        <b-button
                          block
                          variant="primary"
                          size="sm"
                          class="b-background flexx pobtn shadow mr-lg-3 mr-xl-3"
                        >
                          <i class="fas fa-envelope   fa-lg btn-icon "></i>
                          <span class="btn-text">Message</span>
                        </b-button>
                      </b-col>

                      <b-col
                        md="6"
                        lg="6"
                        cols="6"
                        sm="6"
                        xl="6"
                        class="mt-2 mt-lg-2 mt-xl-2 btn-2 center"
                      >
                        <b-button
                          block
                          size="sm"
                          class="b-background flexx pobtn shadow mr-lg-3 mr-xl-3"
                          variant="primary"
                        >
                          <i class="fas fa-user-plus  fa-lg btn-icon "></i>
                          <span class="btn-com">Community</span>
                        </b-button>
                      </b-col>
                    </b-row>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["people"],
};
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .btn-text {
    margin-left: 8px;
  }

  .btn-com {
    margin-left: 4px;
  }
  .btn-icon {
    margin-top: 3px;
  }
}

@media only screen and (max-width: 768px) {
  .btn-icon {
    margin-top: 3px;
  }

  .btn-text {
    margin-left: 5px;
  }

  .btn-com {
    margin-left: 3px;
  }
}

@media only screen and (max-width: 768px) {
  .btnpngs {
    width: 16px;
    margin-right: 5px;
  }

  .s-ccard {
    padding-left: 7px;
    padding-right: 5px;
  }
}

@media only screen and (min-width: 768px) {
  .btnpngs {
    width: 20px;
    margin-right: 5px;
  }
}

.btn {
  border-radius: 5px;
}

.flexx {
  display: inline-flex;
}

.memfollower {
  margin-left: 20px;
  font-size: 12px;
}
.detail {
  position: relative;
  left: 65px;
  top: -30px;
}
.name {
  position: relative;
  top: -10px;
  left: 10px;
}

.a-left {
  text-align: left;
  align-content: left;
}

hr {
  border: solid 1px dimgray;
}

.btn {
  background-color: #fff;
  color: #e75c18;
  border: solid 1px #e75c18;
}

.btn:hover {
  color: #fff;
  border: none;
  background-color: #e75c18;
}

f-right {
  text-align: right;
  align-content: right;
}

.f-left {
  text-align: left;
  align-content: left;
}

@media only screen and (max-width: 768px) {
  .options {
    position: relative;
    left: -75px;
  }
}

.detail {
  position: relative;
  left: 92px;
  top: -30px;
}
.name {
  position: relative;
  top: -10px;
  left: 10px;
}

.b-background {
  background-color: #e75c18;
  color: white;

  border-top-left-radius: 4px;

  border-bottom-left-radius: 4px;

  border-top-right-radius: 4px;

  border-bottom-right-radius: 4px;
}

.follower {
  font-size: 12px;
}

.people-style {
  border-top-left-radius: 40px;

  border-bottom-left-radius: 40px;

  border-top-right-radius: 45px;

  border-bottom-right-radius: 45px;

  background: white;

  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  margin: 5px;
  margin-bottom: 10px;
}

@media only screen and (min-width: 1200px) {
  .btn {
    width: 123px;
    height: 38px;
    font-size: 14px;
    padding-top: 8px;
  }

  .center {
    text-align: left;
  }
}

@media only screen and (max-width: 768px) {
  .p-avater {
    margin-right: -15px;
    margin-top: 3px;
  }

  .btn-2 {
    margin-left: 0px;
    width: 90px;
  }

  .btn-1 {
    margin-left: 0px;
    width: 90px;
  }

  .people-style {
    border-top-left-radius: 40px;

    border-bottom-left-radius: 40px;

    border-top-right-radius: 45px;

    border-bottom-right-radius: 45px;

    background: white;

    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;

    margin-right: 2px;
    margin-left: 2px;
  }

  h6 {
    font-size: 15px;
  }

  h7 {
    font-size: 10px;
  }

  .btn {
    display: flex;
    font-size: 10px;
  }
}

@media only screen and (max-width: 520px) {
  .p-avater {
    margin-right: -15px;
    margin-top: 3px;
  }

  .btn {
    width: 90px;
  }

  .btn-2 {
    width: 90px;
  }

  .btn-1 {
    margin-left: -20px;
    width: 90px;
  }

  .people-style {
    border-top-left-radius: 40px;

    border-bottom-left-radius: 40px;

    border-top-right-radius: 45px;

    border-bottom-right-radius: 45px;

    background: white;

    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    margin-bottom: 10px;

    margin-right: 2px;
    margin-left: 2px;
  }

  h6 {
    font-size: 15px;
  }

  h7 {
    font-size: 10px;
  }

  .btn {
    display: flex;
    font-size: 10px;
  }
}

@media only screen and (min-width: 764px) {
  .p-buttons {
    margin-right: 50px;
    margin-left: 50px;
    margin-bottom: 5px;
    margin-top: 7px;
    padding-right: 5px;
  }

  .p-avater {
    width: 75px;
    height: 75px;
    margin-bottom: -4px;
    margin-left: -5px;
  }

  .btn {
    width: 105px;
    height: 38px;
    font-size: 12px;
    padding-top: 8px;
  }

  .center {
    text-align: left;
  }

  .username {
    font-size: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    height: 1.2em;
    white-space: nowrap;
  }

  .follower {
    font-size: 10px;
  }

  .shift {
    margin-left: -40px;
  }
}

@media only screen and (min-width: 764px) and (max-width: 991.18px) {
  .center {
    text-align: left;
  }
}

@media only screen and (max-width: 762px) {
  .username {
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    width: 100%;
    height: 1.2em;
    white-space: nowrap;
  }

  .btn {
    width: 85px;
    height: 28px;
    font-size: 10px;
  }

  .p-avater {
    width: 75px;
    height: 75px;
    margin-bottom: -8px;
    margin-left: -5px;
    margin-top: -4px;
  }

  .shift {
    margin-left: -40px;
  }

  .follower {
    font-size: 10px;
    text-align: left;
  }

  .center {
    text-align: left;
  }

  .a-text {
    margin-top: 2px;
  }

  .pobtn {
    font-size: 10px;
  }
  .e-name {
    text-align: left;
    margin-left: -20px;
  }
}

@media only screen and (max-width: 521px) {
  .e-name {
    text-align: left;
  }
}

@media only screen and (min-width: 992px) and (max-width: 1331px) {
  .btn {
    width: 115px;
    height: 30px;
    font-size: 12px;
    padding-top: 8px;
  }
}
</style>
