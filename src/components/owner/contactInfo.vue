<template>
  <div>
    <b>{{ $t('profileowner.') }}{{ $t('profileowner.Contact_Infomation') }}</b>
    <hr />
    <div v-for="(contact, index) in contacts" class="row" :key="index">
      <div class="col">
        {{ $t('profileowner.Mobile_Phone') }}:
      </div>
      <div class="col">
        <div class="row">
          <div class="col-4">
            <b-form-select
              class="mb-2"
              size="sm"
              v-model="contact.code"
              :options="codes"
            ></b-form-select>
          </div>
          <div class="col">
            <b-form-input
              v-model="contact.contact"
              :placeholder="$t('profileowner.Contact')"
            ></b-form-input>
          </div>
        </div>
      </div>
      <b-button
        class="edit-btn mb-2"
        variant="outline-primary"
        v-b-modal.modal-3
        >{{ $t('profileowner.Edit') }}
      </b-button>
    </div>

    <b-link class="text-decoration-none" v-b-modal.modal-4
      ><b-icon icon="plus" variant="primary"></b-icon> {{ $t('profileowner.Add_Other_Phones') }}</b-link
    >

    <b-modal
      ref="add-contact"
      hide-footer
      id="modal-4"
      :title="$t('profileowner.Add_Other_Contact')"
    >
      <b-form @submit="add">
        <div class="row">
          <div class="col-4">
            <b-form-select
              class="mb-2"
              size="sm"
              v-model="addContact.code"
              :options="codes"
              required
            ></b-form-select>
          </div>
          <div class="col">
            <b-form-input
              v-model="addContact.contact"
              :placeholder="$t('profileowner.Contact')"
              required
            ></b-form-input>
          </div>
        </div>
        <b-button class="ml-2 mt-2 position-but" type="submit" variant="primary"
          >{{ $t('profileowner.Add') }}</b-button
        >
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateOfBirth: "",
      gender: null,
      selected: null,
      business: "",
      addContact: {
        code: "",
        contact: ""
      },
      code: null,
      contacts: [],
      options: [
        { value: null, text: "Select" },
        { value: "private", text: "Private" },
        { value: "public", text: "Public" }
      ],
      genders: [
        { value: null, text: "Select" },
        { value: "Male", text: "Male" },
        { value: "Female", text: "Female" }
      ],
      codes: [
        { value: "+1", text: "USA(+1)" },
        { value: "+91", text: "India(+91)" }
      ]
    };
  },
  methods: {
    add(e) {
      e.preventDefault();
      this.contacts.push(this.addContact);
      this.$refs["add-contact"].hide();
    }
  }
};
</script>

<style scoped>
.details {
  display: flex;
}
.position-but {
  position: relative;
  left: 400px;
}
</style>
