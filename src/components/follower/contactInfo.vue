<template>
  <div class="txt">
    <b class="contact">Contact Infomation</b>
    <hr />
    <div class="contact row" >
      <div class="col">
        Mobile Phone:
      </div>
      <div class="col">
       {{info.user.phone}}
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

    computed:{

    info(){
      return this.$store.state.follower.profileIntro;
    }

  },
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
