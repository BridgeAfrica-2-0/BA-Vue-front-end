<template>
  <div>
    <b-img class="image" src="https://picsum.photos/300/150/?image=41" rounded fluid alt="Fluid image" v-b></b-img>

    <b-modal hide-footer id="modal-1" title="BootstrapVue">
      <b-image src="https://picsum.photos/300/150/?image=41"></b-image>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quisquam sequi, ullam aliquam ab illo suscipit,
        earum quam, doloribus id sit consequuntur tempora molestiae blanditiis.
      </p>
    </b-modal>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.image:hover {
  box-shadow: 5px 10px 8px 2px #888888;
}
</style>
