<template>
  <div>
    <b-row class="mb-1 body">
      <b-col cols="9" class="my-auto">
        <div class="d-inline-block">
          <b-row class="d-inline-block">
            <b-col cols="12">
              <b-row>
                <b-col>
                  <b-avatar variant="primary" text="BV" size="80"></b-avatar>
                  <span><b-link class="mt-2 name">J.Circlehead</b-link></span>
                </b-col>
              </b-row>
              <b-row class="icons">
                <b-col cols="12">
                  <p class="detail">
                    Cameroon,
                    <span class="desktop"
                      ><b-icon icon="house" class="primary"></b-icon> 2,
                      <b-icon icon="globe" class="primary"></b-icon> 3,
                      <b-icon icon="people" class="primary"></b-icon> 3,
                    </span>
                  </p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col cols="3">
        <b-row class="btns">
          <b-col>
            <b-button variant="primary" size="sm" class="">
              +Community</b-button
            >
          </b-col>
          <b-col>
            <b-button class="main-btn" variant="outline-primary" size="sm">
              <b-icon icon="chat-fill"></b-icon>
              Message</b-button
            >
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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
  .main-btn{
    display: flex;
  }
@media only screen and (max-width: 768px) {
  .name{
    position: relative;
    left: 90px;
    top: -70px;
  }
  .btns{
    position: relative;
    top: 100px;
    left: -140px;
  }
  .main-btn{
    position: relative;
    left: 110px;
    top: -30px;
  }
  .icons{
    margin-top: -40px;
  }
  .body{
    margin-left: -40px;
  }
}
</style>
