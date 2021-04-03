<template>
  <div>
    <b class="social">Web & Soial Links</b>
    <hr />
    <div>
      <b-link class="text-decoration-none" v-b-modal.modal-7
        ><b-icon icon="globe" variant="primary"></b-icon>
        https://www.yourwebsite.com</b-link
      >
    </div>

    <div>
      <b-link
        class="text-decoration-none position-relative top-10"
        v-b-modal.modal-7
        ><b-icon icon="facebook" class="primary"></b-icon>
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
        { value: "public", text: "Public" }
      ],
      socials: [
        { value: null, text: "Select" },
        { value: "instagram", text: "Instagram" },
        { value: "facebook", text: "FaceBook" },
        { value: "twitter", text: "Twitter" },
        { value: "google-plus", text: "Google+" }
      ]
    };
  }
};
</script>

<style scoped>
.link {
  text-decoration: none;
  color: #e75c18;
}
.link-1 {
  text-decoration: none;
  position: relative;
  top: 10px;
}
@media only screen and (max-width: 768px) {
  .social {
    margin-left: 20px;
  }
}
</style>
