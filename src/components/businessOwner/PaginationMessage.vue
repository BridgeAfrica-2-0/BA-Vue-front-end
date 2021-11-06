<template>
    <p class="msg" v-if="hasData">Show more</p>
    <p class="msg" v-else>No data found </p>
</template>

<script>
export default {
  props:{
    hasData:{
      type:Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.msg{
    font-size: 14px;
    color: #e75c18;
    font-weight: bolder;
    text-align: center;
    cursor: pointer;
}
</style>