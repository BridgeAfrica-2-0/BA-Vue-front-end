<template>
  <div>
    <b-row class="mb-1">
      <b-col cols="9" class="my-auto">
        <div class="d-inline-block">
          <b-row class="d-inline-block">
            <b-col cols="12">
              <b-row>
                <b-col>
                  <b-avatar variant="primary" text="BV" size="80"></b-avatar>
                  <span><b-link class="mt-2 name">J. Circlehead</b-link></span>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12">
                  <p class="detail">
                    {{ $t("businessowner.Cameroon") }},
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
        <b-row>
          <b-col>
            <b-button variant="primary" size="sm" class="">
              +{{ $t("businessowner.Community") }}</b-button
            >
          </b-col>
          <b-col>
            <b-button variant="outline-primary" size="sm">
              <b-icon icon="chat-fill"></b-icon>
              {{ $t("businessowner.Message") }}</b-button
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
</style>
