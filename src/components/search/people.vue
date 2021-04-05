<template>
  <div>
    <b-card class="card">
      <b-row>
        <b-col>
          <h4>
            <img class="img-fluid picture logo-img " src="@/assets/icons/people.png"  /> 


            <span class="ml-2">People</span>
          </h4>
        </b-col>
        <b-col class="col">
          <b-link class="lnk">See All</b-link>
        </b-col>
      </b-row>












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

          <b-col md="8" cols="8" sm="8" class="shift-left">
            <div>
              <b-row>
                <b-col md="8" sm="12">
                  <div class="e-name">
                    <h6>
                      <br />
                      howty Circlehead
                    </h6>
                  </div>
                </b-col>

                <b-col>
                  <div>
                    <b-row>
                      <b-col md="12" cols="6" sm="6" class="mt-md-2">
                        <b-button
                          block
                          variant="primary"
                          size="sm"
                          class="b-background"
                        >
                          <b-icon icon="chat"> </b-icon> Message
                        </b-button>
                      </b-col>

                      <b-col md="12" cols="6" sm="6" class="mt-md-2">
                        <b-button
                          block
                          size="sm"
                          class="b-background"
                          variant="primary"
                        >
                          <b-icon icon="plus-circle"> </b-icon> community
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

          <b-col md="8" cols="8" sm="8" class="shift-left">
            <div>
              <b-row>
                <b-col md="8" sm="12">
                  <div class="e-name">
                    <h6>
                      <br />
                      howty Circlehead
                    </h6>
                  </div>
                </b-col>

                <b-col>
                  <div>
                    <b-row>
                      <b-col md="12" cols="6" sm="6" class="mt-md-2">
                        <b-button
                          block
                          variant="primary"
                          size="sm"
                          class="b-background"
                        >
                          <b-icon icon="chat"> </b-icon> Message
                        </b-button>
                      </b-col>

                      <b-col md="12" cols="6" sm="6" class="mt-md-2">
                        <b-button
                          block
                          size="sm"
                          class="b-background"
                          variant="primary"
                        >
                          <b-icon icon="plus-circle"> </b-icon> community
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



















    </b-card>
  </div>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style scoped>



.logo-img{

  width: 40px;
}


h4{
  font-size: 20px;
}


@media only screen and (max-width: 768px) {
  



h4{
  font-size: 15px;
}

.logo-img{
  width: 30px;
}
.see-all-link{
  font-size: 10px;
}

}






.business {
  border-bottom: 1px solid #ccc;
}
.buttons {
  margin-left: 120px;
}
.lnk {
  margin-left: 260px;
}
p {
  margin-left: -210px;
}

.drop {
  left: 1px;
}
.community {
  border: none;
  display: flex;
}

.card {
  box-shadow: -1px 4px 20px -6px rgba(0, 0, 0, 0.7);
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

@media only screen and (max-width: 768px) {
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

</style>
