<template>
  <div
    v-if = "media == 'desktop'"
    class="input-group-append color-sit cursor-pointer"
    style="
      color: white;
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    "
  >
    <span class="input-group-text border-left-0 color-sit" style="width: 56px">
      <b-icon icon="search" style="color: white" font-scale="1.5"></b-icon>
    </span>
  </div>
  <b-icon
    v-else
    icon="search"
    style="color: #e75c18"
    font-scale="1.5"
  ></b-icon>
</template>

<script type="text/javascript">
  
  export default {
    name: "ShareButton",
    props: {
      media: String,
      default : () => 'desktop',
    },
    created(){
      console.log(this.media)
    }
  }

</script>

<style scoped>

.color-sit {
  background-color: #e75c18;
}
</style>
