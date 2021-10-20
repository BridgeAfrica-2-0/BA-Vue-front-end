<template>
  <div>
    <b-card class=" border shadow" style="height:100px">
      <b-row>
        <b-col>
          <h4 class="font-weight-bolder text-design">
           {{$t("dashboard.Use_Bridge_Africa_as_Yourself_or_as_one_of_your_businesses")}} 
          </h4>
        </b-col>
        <b-col>
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "selectbusinessh",
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Owner's Name" },
        { value: "a", text: "Business Name 1" },
        { value: "b", text: "Business Name 2" },
        { value: "c", text: "Business Name 3" }
      ]
    };
  }
};
</script>

<style scoped>
.picture {
  border-radius: 10px;
  width: 190px;
}

.colum {
  justify-content: space-around;
}

.text-design {
  line-height: 40px;
}
</style>
