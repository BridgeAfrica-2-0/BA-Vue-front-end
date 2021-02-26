<template>
  <div>
    <b-card>
      <b-row class="mb-1">
        <b-col cols="9" class="my-auto">
          <div class="d-inline-block">
            <b-row class="d-inline-block">
              <b-col cols="12">
                <b-row>
                  <b-col cols="12">
                    <span><b-link  class="primary">J. Circlehead</b-link></span>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12">
                    <p class="">
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
        <b-col cols="3" class="my-auto">
          <b-button class="float-right btn" size="sm"
            >Unfollow</b-button
          >
        </b-col>
      </b-row>
      <b-row class="mb-1">
        <b-col cols="9" class="my-auto">
          <div class="d-inline-block">
            <b-row class="d-inline-block">
              <b-col cols="12">
                <b-row>
                  <b-col cols="12">
                    <span><b-link  class="primary">J. Circlehead</b-link></span>
                  </b-col>
                </b-row>
                <b-row>
                  <b-col cols="12">
                    <p class="">
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
        <b-col cols="3" class="my-auto">
          <b-button class="float-right btn" size="sm"
            >Unfollow</b-button
          >
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.btn{
  background-color: #fff;
  color: #e75c18;
  border: solid 1px #e75c18;
}

.btn:hover{
  color: #fff;
  border: none;
  background-color: #e75c18;
}
@media only screen and (max-width: 768px) {
  .options {
    position: relative;
    left: -75px;
  }
}
</style>
