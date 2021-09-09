<template>
  <div>
    <b-card class="mt-4" header-tag="header" footer-tag="footer">
      <h6 class="mb-3 d-inline-block title">
        <fas-icon
          class=" mr-2 pt-1 icons "
          :icon="['fas', 'file-image']"
          size="lg"
        />
        <b> Media </b>
      </h6>

      <span class="float-right">
        <b-link
          ><b-icon icon="eye-fill" variant="primary"> </b-icon> View All
        </b-link></span
      >

      <b-card-text>
        <b-row>
          <b-col cols="4" v-for="i in 6" :key="i" class="p-1">
            <img
              class="mb-2 img-fluid"
              src="@/assets/img/m2.jpg"
              alt="Fluid image"
            />
          </b-col>
        </b-row>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
