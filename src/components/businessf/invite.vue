<template>
  <div>
    <b-card class="mt-4" header-tag="header" footer-tag="footer">
      <p class="t-center">
        <b>{{$t("businessf.Invite_your_followers_to_follow_this_business")}}</b>
      </p>
      <input class="form-control mb-2" :placeholder="$t('businessf.Search')" type="text" />
      <fas-icon class="primary search" :icon="['fas', 'search']" />
      <b-card-text>











         
    <div class="people-style border shadow">
      <b-row class="">
        <b-col cols="4" class="my-auto">
          <b-avatar
            variant="primary"
            src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
            size="5em"
          ></b-avatar>
        </b-col>

        <b-col cols="">
          <div>
            <div class="e-name" style="margin-top: -9px;">
              <h6 >
                <br />
              <strong>  howty Circlehead  </strong>
              </h6>
            </div>

            <div class="p-buttons">
              <b-row>

                <b-col cols="2">
                 
                </b-col>

                <b-col cols="5">
                  <b-button
                    block
                    variant="primary"
                    size="sm"
                    class="b-background"
                  >
                    <b-icon icon="plus" class="ico"> </b-icon> {{$t("businessf.Invite")}}
                  </b-button>
                </b-col>
                <b-col cols="3">
                 
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>









         
    <div class="people-style border shadow">
      <b-row class="">
        <b-col cols="4" class="my-auto">
          <b-avatar
            variant="primary"
            src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
            size="5em"
          ></b-avatar>
        </b-col>

        <b-col cols="">
          <div>
            <div class="e-name" style="margin-top: -9px;">
              <h6 >
                <br />
              <strong>  howty Circlehead  </strong>
              </h6>
            </div>

            <div class="p-buttons">
              <b-row>

                <b-col cols="2">
                 
                </b-col>

                <b-col cols="5">
                  <b-button
                    block
                    variant="primary"
                    size="sm"
                    class="b-background"
                  >
                    <b-icon icon="plus" class="ico"> </b-icon> {{$t("businessf.Invite")}}
                  </b-button>
                </b-col>
                <b-col cols="3">
                 
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>














       
         
    <div class="people-style border shadow">
      <b-row class="">
        <b-col cols="4" class="my-auto">
          <b-avatar
            variant="primary"
            src="https://i.pinimg.com/originals/ee/bb/d0/eebbd0baab26157ff9389d75ae1fabb5.jpg"
            size="5em"
          ></b-avatar>
        </b-col>

        <b-col cols="">
          <div>
            <div class="e-name" style="margin-top: -9px;">
              <h6 >
                <br />
              <strong>  howty Circlehead  </strong>
              </h6>
            </div>

            <div class="p-buttons">
              <b-row>

                <b-col cols="2">
                 
                </b-col>

                <b-col cols="5">
                  <b-button
                    block
                    variant="primary"
                    size="sm"
                    class="b-background"
                  >
                    <b-icon icon="plus" class="ico"> </b-icon> {{$t("businessf.Invite")}}
                  </b-button>
                </b-col>
                <b-col cols="3">
                 
                </b-col>
              </b-row>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>










      </b-card-text>

      <span class="float-right">
        <a class="primary" href="#">{{$t("businessf.See_More")}}</a>
      </span>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
p {
  text-align: left;
}
.search {
  position: relative;
  top: -40px;
  left: 270px;
  cursor: pointer;
}
.btn-primary {
  background-color: #fff;
  border: solid 1px #e75c18;
  color: #e75c18;
}

.btn-primary:hover {
  background-color: #e75c18;
  color: #fff;
  border: none;
}

.t-center {
  text-align: center;
}

h6{
  font-size: 14px;
}


.btn {
  font-size: 10px;
  display: flex;

  padding-right: 60px;

  margin-right: 10px;
  padding-left: 10px;
}

.btn2 {
  margin-left: -15px;
}

.p-buttons {
  margin-left: -19px;

  padding: 9px;
}

.ename {
  text-align: left;
  margin-top: -15px;
}

.ico {
  margin-right: 5px;
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
  margin-right: -10px;
  margin-left: -10px;
}




</style>
