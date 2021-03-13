<template>
  <div>
    <b-card
      class="text-center mt-2 p-1 item"
    >
      <b-card-text>
        <h5> <b>Create your personalized website</b></h5>
        <p>Start with a template and make it your own, with easy drag and drop & 1000s of design features</p>
        <b-button variant="primary">Choose a Template</b-button>
        </b-card-text>
        <b-row>
            <b-col>
                <b>Current Plan</b>
            </b-col>
            <b-col>
                <b-button variant="outline-primary">Change</b-button>
            </b-col>
        </b-row>
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
  top: -30px;
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
