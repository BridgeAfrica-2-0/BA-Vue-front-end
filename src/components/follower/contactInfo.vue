<template>
  <div class="txt">
    <b class="contact">Contact Infomation</b>
    <hr />
    <div class="contact row" >
      <div class="col">
        Mobile Phone:
      </div>
      <div class="col">
        +1 644841545
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.details {
  display: flex;
}

.txt {
  font-family: Helvetica;
  font-size: 14px;
}
@media only screen and (max-width: 768px) {
  .contact {
    margin-left: 20px;
  }

  .txt {
    font-family: Helveticaf;
    font-size: 12px;
  }
}
</style>
