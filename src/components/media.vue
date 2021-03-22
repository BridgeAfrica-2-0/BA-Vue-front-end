<template>
  <div>
    <b-card class="mt-4" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0 d-inline-block">Media</h6>
        <span class="float-right"
          ><b-icon icon="eye-fill" variant="primary"></b-icon> See All</span
        >
      </template>
      <b-card-text>
        <b-row>
          <b-col cols="6" v-for="i in 4" :key="i" class="p-1">
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
