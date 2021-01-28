<template>
  <div>
    <b>Web & Soial Links</b>
    <hr />
    <div>
      <b-link style="text-decoration: none" v-b-modal.modal-7
        ><b-icon icon="globe" variant="primary"></b-icon>
        https://www.yourwebsite.com</b-link
      >
    </div>

      <div>
      <b-link style="text-decoration: none, position:relative; top:10px" v-b-modal.modal-7
        ><b-icon icon="facebook" variant="primary"></b-icon>
        https://www.facebook.com/yourid</b-link
      >
    </div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      socialSelected: null,
      options: [
        { value: null, text: "Select" },
        { value: "private", text: "Private" },
        { value: "public", text: "Public" },
      ],
       socials: [
        { value: null, text: "Select" },
        { value: "instagram", text: "Instagram" },
        { value: "facebook", text: "FaceBook" },
        { value: "twitter", text: "Twitter" },
        { value: "google-plus", text: "Google+" },
      ],
    };
  },
};
</script>

<style></style>
