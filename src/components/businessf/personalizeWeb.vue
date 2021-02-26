<template>
  <div>
    <b-card class="mt-4" header-tag="header" footer-tag="footer">
      <template #header>
        <h6 class="mb-0 d-inline-block"><b>Your personalized website</b></h6>
      </template>
      <fas-icon class="view" :icon="['fas', 'eye']" />
      <b-img
        src="https://business.bridgeafrica.info/assets/img/portfolio/portfoliu2.png"
      ></b-img>
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
  left: 290px;
  cursor: pointer;
}
.view {
  position: relative;
  top: -60px;
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
</style>
