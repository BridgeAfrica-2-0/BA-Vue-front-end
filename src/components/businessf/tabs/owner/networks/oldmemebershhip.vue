<template>
  <div class="container">
    <div>
      <b-row>
        <b-col class="f-left">
          <h6 class="d-inline-block">
            {{ $t("network.Membership_Requests") }}
          </h6>
        </b-col>
        <b-col class="f-right">
          <span class="">35 {{ $t("network.Pending") }}</span>
        </b-col>
      </b-row>
    </div>

    <hr width="100%" />

    <b-row>
      <b-col cols="9" class="mx-auto">
        <b-input-group class="mb-2 px-md-3 mx-auto">
          <b-input-group-prepend is-text>
            <b-icon-search class="text-primary border-none"></b-icon-search>
          </b-input-group-prepend>
          <b-form-input
            aria-label="Text input with checkbox"
            :placeholder="$t('network.Search_Something')"
          ></b-form-input>
        </b-input-group>
      </b-col>

      <b-col cols="3">
        <b-button variant="primary" block class="mem-btn">
          {{ $t("network.Send_Request") }}
        </b-button>
      </b-col>
    </b-row>

    <br />

    <div v-for="i in 6" class="f-left" :key="i">
      <b-row>
        <b-col cols="12" md="6">
          <div class="people-style border shadow">
            <b-row class="mb-1">
              <b-col md="3" cols="4" sm="3" class="my-auto">
                <b-avatar
                  class="p-avater"
                  variant="primary"
                  src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
                  size="5em"
                ></b-avatar>
              </b-col>

              <b-col md="7" cols="7" sm="7" class="shift-left">
                <div>
                  <b-row>
                    <b-col md="12" xl="6" sm="12">
                      <div class="e-name">
                        <b-row>
                          <b-col
                            md="9"
                            lg="9"
                            cols="7"
                            sm="7"
                            xl="12"
                            class="mt-lg-2"
                          >
                            <h6 class="mt-3">
                              <b> howty blec </b>
                            </h6>
                          </b-col>

                          <b-col
                            md="3"
                            lg="3"
                            cols="5"
                            sm="5"
                            xl="11"
                            class="mt-3 mt-xl-0"
                          >
                            <h6 class="follower">
                              {{ $t("network.K_Follower ") }}
                            </h6>
                          </b-col>
                        </b-row>
                      </div>
                    </b-col>

                    <b-col lg="">
                      <div>
                        <b-row>
                          <b-col
                            md="6"
                            lg="6"
                            cols="6"
                            sm="6"
                            xl="12"
                            class="mt-xl-2 center"
                          >
                            <b-button
                              block
                              variant="primary"
                              size="sm"
                              class="b-background flexx pobtn"
                            >
                              <b-icon icon="chat" class="mr-1"> </b-icon
                              >{{ $t("network.Message") }}
                            </b-button>
                          </b-col>

                          <b-col
                            md="6"
                            lg="6"
                            cols="6"
                            sm="6"
                            xl="12"
                            class="mt-xl-2 btn-2 center"
                          >
                            <b-button
                              block
                              size="sm"
                              class="b-background flexx pobtn"
                              variant="primary"
                            >
                              <b-icon icon="plus-circle" class="mr-1"> </b-icon
                              >{{ $t("network.community") }}
                            </b-button>
                          </b-col>
                        </b-row>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </b-col>

              <b-col cols="1">
                <span class="float-right a-dots">
                  <b-dropdown
                    size="lg"
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                    class="a-dbutton"
                  >
                    <template #button-content>
                      <b-icon-three-dots-vertical></b-icon-three-dots-vertical
                      ><span class="sr-only">{{ $t("network.Settings") }}</span>
                    </template>
                    <b-dropdown-item href="#">
                      {{ $t("network.Approve") }}
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                      {{ $t("network.Reject") }}
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
              </b-col>
            </b-row>
          </div>
        </b-col>

        <b-col cols="12" md="6">
          <div class="people-style border shadow">
            <b-row class="mb-1">
              <b-col md="3" cols="4" sm="3" class="my-auto">
                <b-avatar
                  class="p-avater"
                  variant="primary"
                  src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
                  size="5em"
                ></b-avatar>
              </b-col>

              <b-col md="7" cols="7" sm="7" class="shift-left">
                <div>
                  <b-row>
                    <b-col md="12" xl="6" sm="12">
                      <div class="e-name">
                        <b-row>
                          <b-col
                            md="9"
                            lg="9"
                            cols="7"
                            sm="7"
                            xl="12"
                            class="mt-lg-2"
                          >
                            <h6 class="mt-3">
                              <b> howty blec </b>
                            </h6>
                          </b-col>

                          <b-col
                            md="3"
                            lg="3"
                            cols="5"
                            sm="5"
                            xl="11"
                            class="mt-3 mt-xl-0"
                          >
                            <h6 class="follower">
                              5{{ $t("network.K_Follower") }}
                            </h6>
                          </b-col>
                        </b-row>
                      </div>
                    </b-col>

                    <b-col lg="">
                      <div>
                        <b-row>
                          <b-col
                            md="6"
                            lg="6"
                            cols="6"
                            sm="6"
                            xl="12"
                            class="mt-xl-2 center"
                          >
                            <b-button
                              block
                              variant="primary"
                              size="sm"
                              class="b-background flexx pobtn"
                            >
                              <b-icon icon="chat" class="mr-1"> </b-icon>
                              {{ $t("network.Message") }}
                            </b-button>
                          </b-col>

                          <b-col
                            md="6"
                            lg="6"
                            cols="6"
                            sm="6"
                            xl="12"
                            class="mt-xl-2 btn-2 center"
                          >
                            <b-button
                              block
                              size="sm"
                              class="b-background flexx pobtn"
                              variant="primary"
                            >
                              <b-icon icon="plus-circle" class="mr-1"> </b-icon>
                              {{ $t("network.community") }}
                            </b-button>
                          </b-col>
                        </b-row>
                      </div>
                    </b-col>
                  </b-row>
                </div>
              </b-col>

              <b-col cols="1">
                <span class="float-right a-dots">
                  <b-dropdown
                    size="lg"
                    variant="link"
                    toggle-class="text-decoration-none"
                    no-caret
                    class="a-dbutton"
                  >
                    <template #button-content>
                      <b-icon-three-dots-vertical></b-icon-three-dots-vertical
                      ><span class="sr-only">{{ $t("network.Settings") }}</span>
                    </template>
                    <b-dropdown-item href="#">
                      {{ $t("network.Approve") }}
                    </b-dropdown-item>
                    <b-dropdown-item href="#">
                      {{ $t("network.Reject") }}
                    </b-dropdown-item>
                  </b-dropdown>
                </span>
              </b-col>
            </b-row>
          </div>
        </b-col>
      </b-row>
    </div>

    <b-row>
      <b-col cols="12">
        <span class="float-right">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "memberShip",
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" }
      ]
    };
  },
  computed: {
    rows() {
      return this.items.length;
    }
  }
};
</script>

<style scoped>
.a-center {
  text-align: center;
  align-content: center;
}

.f-left {
  text-align: left;
}

.f-right {
  text-align: right;
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

.a-dbutton {
  margin: 15px;

  margin-right: -20px;
  margin-top: 20px;
}

.b-background {
  background-color: #e75c18;
  color: white;

  border-top-left-radius: 4px;

  border-bottom-left-radius: 4px;

  border-top-right-radius: 4px;

  border-bottom-right-radius: 4px;
}

.people-style {
  border-top-left-radius: 40px;

  border-bottom-left-radius: 40px;

  border-top-right-radius: 45px;

  border-bottom-right-radius: 45px;

  height: 85px;

  background: white;

  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);

  margin-bottom: 10px;
}

.p-buttons {
  margin-right: 50px;
  margin-left: 50px;
  margin-bottom: 5px;
  margin-top: 7px;
  padding-right: 5px;
}

.e-name {
  margin-left: 20px;
}
.pp-avater {
  margin-right: -15px;
}
.a-text {
  margin-top: 2px;
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
  font-size: 10px;
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
}

@media only screen and (min-width: 1200px) {
  .btn {
    text-align: center;
  }

  .center {
    text-align: center;
  }
}
@media only screen and (max-width: 768px) {
  .p-avater {
    margin-right: -15px;
    margin-top: 3px;
  }

  .btn {
    width: 90px;
  }

  .btn-2 {
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

    margin-right: -15px;
    margin-left: -15px;
  }

  h6 {
    font-size: 15px;
  }

  h7 {
    font-size: 10px;
  }

  .shift-left {
    margin-left: -20px;
  }

  .btn {
    display: flex;
    font-size: 10px;
  }
}

.p-buttons {
  margin-right: 50px;
  margin-left: 50px;
  margin-bottom: 5px;
  margin-top: 7px;
  padding-right: 5px;
}

.p-avater {
  margin-right: -15px;
}
.a-text {
  margin-top: 2px;
}

@media only screen and (max-width: 400px) {
  .pobtn {
    font-size: 9px;
    width: 80px;
  }
}

.mem-btn {
  display: inline-flex;
}
</style>
