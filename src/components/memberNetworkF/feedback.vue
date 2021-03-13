<template>
  <div>
    <b-card>
      <p><b>Your Feedback is about</b></p>
      <b-form-select
        required
        v-model="selected"
        :options="options"
      ></b-form-select>
      <p class="mt-2"><b>Brief description of your feedback</b></p>
      <b-form-textarea
        id="textarea"
        v-model="description"
        placeholder="Enter something..."
        rows="3"
        max-rows="6"
        required
      ></b-form-textarea>
      <b-button class="float-right mt-2" variant="primary"> Submit</b-button>
    </b-card>

    <fas-icon
      class="primary float-right mt-2 filter"
      :icon="['fas', 'filter']"
      @click="filterFeedback"
    />
    <b-card class="mt-3" v-if="filterData">
      <p class="primary"><strong>Feedback Type</strong></p>
      <b-form-select
        required
        v-model="filter"
        :options="filters"
      ></b-form-select>
      <b-row class="float-right mt-2">
        <b-col>
          <b-button class="reset">Reset</b-button>
        </b-col>
        <b-col>
          <b-button variant="primary" class="apply">Apply</b-button>
        </b-col>
      </b-row>
    </b-card>

    <b-card class="mt-5">
      <b-row>
        <b-col class="col">
          <b-avatar
            class="mt-2"
            src="https://placekitten.com/300/300"
          ></b-avatar>
        </b-col>
        <b-col>
          <div class="detail">
            <strong>
              Mapoure Agrobusiness
            </strong>
            <br />
            <small>
              1 hr ago - <span class="primary">Feedback Type</span>
            </small>
          </div>
        </b-col>
      </b-row>
      <p class="mt-2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quis ad
        assumenda soluta, fuga vel minus pariatur neque, aut doloribus culpa
        ipsum quos facilis sunt. Iusto aliquid dolor repudiandae eum doloremque,
        vero, placeat reiciendis ullam expedita pariatur quae quis
        necessitatibus est minus quasi quibusdam sapiente commodi. Consectetur
        dicta nobis voluptas?
      </p>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: "Improvement",
      filter: "any",
      description: "",
      filterData: false,
      options: [
        { value: "Improvement", text: "Suggestion for Improvement" },
        { value: "Program", text: "Progress to your Program" },
        { value: "Idea", text: "New Idea for PEA-JEUNES" },
      ],
      filters: [
        { value: "any", text: "Any" },
        { value: "Improvement", text: "Suggestion for Improvement" },
        { value: "Program", text: "Progress to your Program" },
        { value: "Idea", text: "New Idea for PEA-JEUNES" },
      ],
    };
  },
  methods: {
    filterFeedback() {
      this.filterData = !this.filterData;
    },
  },
};
</script>

<style scoped>
.filter {
  cursor: pointer;
}
.reset {
  background-color: #bbb;
  border: none;
  color: white;
}
.apply {
  border: none;
}
.detail {
  position: relative;
  left: -197px;
}
@media only screen and (max-width: 768px) {
  .detail {
    position: relative;
    left: -70px;
  }
}
</style>
