<template>
  <div>
    <b>{{$t("businessfollower.Places_you_lived")}}</b>
    <hr />
    <p><b>{{$t("businessfollower.Cameroon")}}, 
      {{$t("businessfollower.South_Africa")}}</b></p>
    <p>
      {{$t("businessfollower.Current_City")}}
    </p>
    <b-link style="text-decoration: none" class="mt-4" v-b-modal.modal-6>
      <b-icon icon="plus" variant="primary"></b-icon>
      {{$t("businessfollower.Add_Other_Places")}}</b-link
    >
    <b-modal id="modal-6" :title="$t('businessfollower.Add_other_places')">
      <div>
        <div class="row">
          <div class="col">
            <b-form-input v-model="city" :placeholder="$t('businessfollower.City')"></b-form-input>
            <b-form-input class="mt-2" v-model="hometown" :placeholder="$t('businessfollower.Hometown')"></b-form-input>
          </div>
          <div class="col-4">
            <b-form-select class="mb-2" size="sm" v-model="selected" :options="options"></b-form-select>
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
      city: '',
      hometown: '',
      options: [
        { value: null, text: 'Select' },
        { value: 'private', text: 'Private' },
        { value: 'public', text: 'Public' },
      ],
    };
  },
};
</script>

<style></style>
