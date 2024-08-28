<template>
  <div>
    <b-card>
      <div class="row">
        <div class="col-md-6 text-center">
          <b-icon icon="check-circle-fill" variant="primary" font-scale="2">
          </b-icon>
          <span class="mb-2">
            You're almost there, finish some basic account setup
          </span>
        </div>

        <div class="col-md-6 text-center pt-2">
          <router-link to="welcome?show=yes">
            <span class="mb-2 mt-1  primary"> Complete Profile </span>
            <b-icon icon="chevron-right" variant="primary"> </b-icon>
          </router-link>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "completeProfile",

  data() {
    return {};
  },
  computed: {}
};
</script>

<style scoped></style>
