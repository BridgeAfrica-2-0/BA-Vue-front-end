<template>
  <div>
    <b-row class="mb-1">
      <b-col cols="9" class="my-auto">
        <div class="d-inline-block">
          <b-row class="d-inline-block">
            <b-col cols="12">
              <b-row>
                <b-col>
                  <b-avatar variant="primary" text="BV" size="3.5em"></b-avatar>
                  <span><b-link class="mt-2 name">J. Circlehead</b-link></span>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <p class="detail">
                    Cameroon,
                    
                  </p>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </b-col>
      <b-col cols="3">
        <b-row>
          <b-col class="a-left">
        <div>

            <b-button variant="outline-primary" size="sm" class=" a-button">
              +Community</b-button
            >
            </div>
          </b-col>
          <b-col class="a-left">
            <div>
            <b-button variant="outline-primary" class="a-button" size="sm">
              <b-icon icon="chat"></b-icon>
              Message</b-button
            >

            </div>
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
  left: 65px;
  top: -30px;
}
.name {
  position: relative;
  top: -10px;
  left: 10px;
}

.a-left{
  text-align: left;
  align-content: left;
}
</style>
