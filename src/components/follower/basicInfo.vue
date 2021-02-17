<template>
  <div>
    <b class="basic">Basic Infomation</b>
    <hr />
    <div class="basic row">
      <div class="col">
        Date Of Birth:
      </div>
      <div class="col">
        {{ dateOfBirth }}
      </div>
    
     
    </div>
    <div class=" basic row">
      <div class="col">
        Gender:
      </div>
      <div class="col">
        {{ gender }}
      </div>
    </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      dateOfBirth: "20/20/2020",
      gender: "Male",
    };
  },
  methods: {},
};
</script>

<style scoped>
.details {
  display: flex;
}
@media only screen and (max-width: 768px) {
  .basic{
    margin-left: 20px;
  }
}
</style>
