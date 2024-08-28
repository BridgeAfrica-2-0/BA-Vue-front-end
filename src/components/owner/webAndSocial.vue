<template>
  <div>
    <b>{{ $t("profileowner.Web_Soial_Links") }}</b>
    <hr />
    <div>
      <b-link class="text-decoration-none" v-b-modal.modal-7
        ><b-icon icon="globe" variant="primary"></b-icon>
        {{ $t("profileowner.https_www_yourwebsite_com") }}</b-link
      >
    </div>
    <b-link class="text-decoration-none" v-b-modal.modal-7
      ><b-icon icon="plus" variant="primary"></b-icon>
      {{ $t("profileowner.Add_a_Website") }}</b-link
    >
    <b-modal id="modal-7" title="Add a Website">
      <div>
        <div class="row">
          <div class="col">
            <b-form-input
              v-model="business"
              placeholder="$t('profileowner.Your_Website')"
            ></b-form-input>
          </div>
          <div class="col-4">
            <b-form-select
              class="mb-2"
              size="sm"
              v-model="selected"
              :options="options"
            ></b-form-select>
          </div>
        </div>
      </div>
    </b-modal>

    <div>
      <b-link
        class="text-decoration-none position-relative top-10"
        v-b-modal.modal-7
        ><b-icon icon="facebook" variant="primary"></b-icon>
        https://www.facebook.com/yourid</b-link
      >
    </div>
    <b-link class="text-decoration-none" v-b-modal.modal-8
      ><b-icon icon="plus" variant="primary"></b-icon>
      {{ $t("profileowner.Add_a_Social_Link") }}</b-link
    >
    <b-modal id="modal-8" title="Add other Link">
      <div>
        <div class="row">
          <div class="col-4">
            <b-form-select
              class="mb-2"
              size="sm"
              v-model="selected"
              :options="options"
            ></b-form-select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <b-form-input
              v-model="business"
              :placeholder="$t('profileowner.Social_link')"
            ></b-form-input>
          </div>
          <div class="col">
            <b-form-select
              class="mb-2"
              size="sm"
              v-model="socialSelected"
              :options="socials"
            ></b-form-select>
          </div>
        </div>
      </div>
    </b-modal>
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
  position: relative;
  top: 10px;
}
</style>
