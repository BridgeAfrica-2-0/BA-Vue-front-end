<template>
  <div style="height: 100vh;">
    <form novalidate autocomplete="off" class="md-layout" @submit.prevent="onSubmit" style="height: 100vh;">
      <slot name="main"></slot>
      <div class="md-layout-item md-size-55 md-small-size-100 b-div"></div>
    </form>

  </div>
</template>

<script>

export default {
  name: "AuthLayout",
  props: {
    callback: {
      type: Function,
      required: true
    }
  },
  methods: {
    onSubmit() {
      console.log("on start submit in layout")
      this.callback()
    }
  }
}

</script>

<style>
.b-div {
  background-image: url("/assets/home/login-ban.jpg");
  background-position: center;
  background-size: cover;
}
</style>