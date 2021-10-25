<template>
  <div>
    <b>{{ $t("profileowner.Business_Visited")}}</b>
    <hr />
    <div class="row">
      <div class="col">
        <b-list-group-item class="d-flex align-items-center mb-4 border-0">
          <b-avatar class="mr-3"></b-avatar>
          <div class="datails">
            <div class="row">
              <div class="col">
                <span class="mr-auto"> <b>{{ $t("profileowner.Business_Name_Here")}}</b> </span>
                <p>{{ $t("profileowner.Category_Name_here")}} - {{ $t("profileowner.11M_Followers")}}</p>
              </div>
              <div class="col-1">
                <b-dropdown
                  id="dropdown-dropup"
                  dropdown
                  variant="primary-outline"
                  class="dropdown-style"
                >
                  <b-dropdown-item href="#">{{ $t("profileowner.Edit")}}</b-dropdown-item>
                  <b-dropdown-item href="#">{{ $t("profileowner.Delete")}}</b-dropdown-item>
                </b-dropdown>
              </div>
            </div>
            <b-link class="text-decoration-none">{{ $t("profileowner.Get_Direction")}}</b-link>
          </div>
        </b-list-group-item>
        <b-link class="mt-4 text-decoration-none" v-b-modal.modal-5>
          <b-icon icon="plus" variant="primary"></b-icon>{{ $t("profileowner.Add_Other_Businesses")}}</b-link
        >
        <b-modal
          class="modal w-25"
          hide-footer
          id="modal-5"
          :title="$t('profileowner.Add_other_Business')"
        >
          <b-form>
            <div>
              <div class="row">
                <div class="col">
                  <b-form-input
                    v-model="business"
                    :placeholder="$t('profileowner.Business')"
                    required
                  ></b-form-input>
                </div>
                <div class="col">
                  <b-form-select
                    class="mb-2"
                    size="sm"
                    v-model="selected"
                    :options="options"
                    required
                  ></b-form-select>
                </div>
              </div>
            </div>
            <b-button
              class="ml-2 mt-2 position-relative add-btn"
              type="submit"
              variant="primary"
              >Add</b-button
            >
          </b-form>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      business: "",
      options: [
        { value: null, text: "Select" },
        { value: "private", text: "Private" },
        { value: "public", text: "Public" }
      ]
    };
  }
};
</script>

<style scoped>
.details {
  display: flex;
}

@media only screen and (max-width: 768px) {
}
.dropdown-style {
  position: relative;
  left: 320px;
}
.add-btn {
  position: relative;
}
</style>
