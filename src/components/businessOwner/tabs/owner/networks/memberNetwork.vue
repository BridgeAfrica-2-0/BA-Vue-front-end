<template>
  <div class="mt-3">
    <b-row>
      <b-col cols="12" class="mx-auto">
        <b-input-group class="mb-2 px-md-3 mx-auto">
          <b-input-group-prepend is-text>
            <b-icon-search class="text-primary border-none"></b-icon-search>
          </b-input-group-prepend>
          <b-form-input
            aria-label="Text input with checkbox"
            :placeholder="$t('businessowner.Search_Something')"
          ></b-form-input>
        </b-input-group>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col cols="12">
        <h6 class="font-weight-bolder">
          {{ $t("businessowner.Network_Admins_2") }}
        </h6>
        <hr width="100%" />
        <div v-for="i in 2" :key="i">
          <p class="">
            <span class="">
              <b-avatar
                class="d-inline-block"
                variant="info"
                src="https://business.bridgeafrica.info/assets/img/team/3.png"
                size="3.5rem"
              ></b-avatar>
              <h5 class="m-0 font-weight-bolder d-inline-block ml-2">
                {{ $t("businessowner.Mapoure_Agrobusiness") }}
              </h5>
            </span>
            <span class="float-right mt-1">
              <b-dropdown
                size="lg"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <b-icon-three-dots-vertical></b-icon-three-dots-vertical
                  ><span class="sr-only">{{ $t("businessowner.Settings") }}</span>
                </template>
                <b-dropdown-item href="#">
                  <b-icon-trash-fill></b-icon-trash-fill> {{ $t("businessowner.Remove_as_Admin") }}
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  <b-icon-trash-fill></b-icon-trash-fill> {{ $t("businessowner.Remove_From_Networks") }}
                </b-dropdown-item>
              </b-dropdown>
            </span>
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col cols="12">
        <h6 class="font-weight-bolder">
          {{ $t("businessowner.Bussiness_2") }}
        </h6>
        <hr width="100%" />
        <div v-for="i in 2" :key="i">
          <p class="">
            <span class="">
              <b-avatar
                class="d-inline-block"
                variant="info"
                src="https://business.bridgeafrica.info/assets/img/team/3.png"
                size="3.5rem"
              ></b-avatar>
              <h5 class="m-0 font-weight-bolder d-inline-block ml-2">
                {{ $t("businessowner.Mapoure_Agrobusiness") }}
              </h5>
            </span>
            <span class="float-right mt-1">
              <b-dropdown
                size="lg"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <b-icon-three-dots-vertical></b-icon-three-dots-vertical
                  ><span class="sr-only">{{ $t("businessowner.Settings") }}</span>
                </template>
                <b-dropdown-item href="#">
                  <b-icon-trash-fill></b-icon-trash-fill> {{ $t("businessowner.Remove_From_Networks") }}
                </b-dropdown-item>
              </b-dropdown>
            </span>
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row class="mt-4">
      <b-col cols="12">
        <h6 class="font-weight-bolder">
          {{ $t("businessowner.All_Members_200") }}
        </h6>
        <hr width="100%" />
        <div v-for="i in 6" :key="i">
          <p class="">
            <span class="">
              <b-avatar
                class="d-inline-block"
                variant="info"
                src="https://business.bridgeafrica.info/assets/img/team/3.png"
                size="3.5rem"
              ></b-avatar>
              <h5 class="m-0 font-weight-bolder d-inline-block ml-2">
                {{ $t("businessowner.Mapoure_Agrobusiness") }}
              </h5>
            </span>
            <span class="float-right mt-1">
              <b-dropdown
                size="lg"
                variant="link"
                toggle-class="text-decoration-none"
                no-caret
              >
                <template #button-content>
                  <b-icon-three-dots-vertical></b-icon-three-dots-vertical
                  ><span class="sr-only">{{ $t("businessowner.Settings") }}</span>
                </template>
                <b-dropdown-item href="#">
                  <b-icon-person-plus-fill></b-icon-person-plus-fill> {{ $t("businessowner.Make_Admin") }}
                </b-dropdown-item>
                <b-dropdown-item href="#">
                  <b-icon-trash-fill></b-icon-trash-fill> {{ $t("businessowner.Remove_From_Networks") }}
                </b-dropdown-item>
              </b-dropdown>
            </span>
          </p>
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <span class="float-right">
          <b-pagination
            v-model="currentPage"
            :total-rows="rows"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </span>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "memberNetwork",
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [
        { id: 1, first_name: "Fred", last_name: "Flintstone" },
        { id: 2, first_name: "Wilma", last_name: "Flintstone" },
        { id: 3, first_name: "Barney", last_name: "Rubble" },
        { id: 4, first_name: "Betty", last_name: "Rubble" },
        { id: 5, first_name: "Pebbles", last_name: "Flintstone" },
        { id: 6, first_name: "Bamm Bamm", last_name: "Rubble" },
        { id: 7, first_name: "The Great", last_name: "Gazzoo" },
        { id: 8, first_name: "Rockhead", last_name: "Slate" },
        { id: 9, first_name: "Pearl", last_name: "Slaghoople" }
      ]
    };
  },
  computed: {
    rows() {
      return this.items.length;
    }
  }
};
</script>

<style scoped>
hr {
  border: solid 1px dimgray;
}
</style>
