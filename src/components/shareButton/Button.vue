<template>
  <div>
    <b-button v-b-modal.modal-1>share peaple</b-button>
    <b-button v-b-modal.modal-2>share netword</b-button>
    <b-button v-b-modal.modal-3>share business</b-button>
    <b-button v-b-modal.modal-4>post</b-button>

    <Box 
      id="modal-1" 
      title="Share people" 
      placeholder="Search for people..."
      subtitle="All peoples" />

    <Box 
      id="modal-2" 
      title="Share network"
      placeholder="Search for network..." 
      subtitle="All networks" >
        <template v-slot:owner>
          
          <div class="d-flex align-items-center py-3 px-2 mb-2 border">
            <b-avatar class="mr-3"></b-avatar>
            <p>
              <span class="mr-auto">Share as</span><br>
              <span class="mr-auto">J. Circlehead</span>
            </p>
          </div>
        </template>
    </Box>

    <Box 
      id="modal-3" 
      title="Share business"
      placeholder="Search for business..." 
      subtitle="All business" >
        <template v-slot:owner>
          
          <div class="d-flex align-items-center py-3 px-2 mb-2 border">
            <b-avatar class="mr-3"></b-avatar>
            <p>
              <span class="mr-auto">Share as</span><br>
              <span class="mr-auto">J. Circlehead</span>
            </p>
          </div>
        </template>
    </Box>

     <Post id="modal-4" />

    <fas-icon
      class="icons cursor"
      :icon="['fas', 'share']"
      size="lg"
    />
  </div>

</template>

<script>
import Box from "./Box"
import Post from "./SharePost"
export default {
  name: "ShareButton",
  components:{
    Box,
    Post
  }
};
</script>

<style scoped>
  .border{
    border-radius: 12px;
  }
  .cursor{
    cursor: pointer;
  }
</style>