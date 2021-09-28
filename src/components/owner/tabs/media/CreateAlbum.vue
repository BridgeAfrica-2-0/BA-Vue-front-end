<template>
  <div>
    <div class="createp img-gall image-wrapp">
      <div class="">
        <div v-b-modal.createalbumModal>
          <div class="drag-textt">
            <fas-icon :icon="['fas', 'plus']" />
            <h3>Create Album</h3>
          </div>
        </div>
      </div>
    </div>

    <b-modal hide-footer title="Create album" id="createalbumModal">
      <b-form>
        <b-form-input placeholder="Album name" v-model="albumName" />
        <b-button class="mt-2" variant="primary" @click="createAlbum">
          Create</b-button
        >
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
    name:"CreateAlbum",

    data(){
        return{
            albumName:""
        }
    },

    methods:{
        createAlbum(){
         this.$emit("createAlbum", this.albumName);
        }
    }
}
</script>