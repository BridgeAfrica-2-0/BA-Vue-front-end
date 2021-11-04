<template>
  <div>
    <b-card>
      <p class="title"><b>Your Feedback is about</b></p>
      <b-form-select required v-model="selected" :options="options"></b-form-select>
      <p class="mt-2 username "><b>Brief description of your feedback</b></p>
      <b-form-textarea
        id="textarea"
        v-model="description"
        placeholder="Enter something..."
        rows="3"
        class="text"
        max-rows="6"
        required
      ></b-form-textarea>
      <b-button class="float-right mt-2" variant="primary"> Submit</b-button>
    </b-card>

    <fas-icon class="primary float-right mt-2 filter" :icon="['fas', 'filter']" @click="filterFeedback" />
    <b-card class="mt-3" v-if="filterData">
      <p class="primary text"><strong>Feedback Type</strong></p>
      <b-form-select required v-model="filter" :options="filters"></b-form-select>
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
      <div style="display:inline-flex">
        <b-avatar variant="primary" class="mt-2 avat" src="https://placekitten.com/300/300"></b-avatar>

        <span class=" username  ml-3 mt-3">
          <strong>
            Mapoure Agrobusiness
          </strong>
          <br />
          <small class="duration"> 1 hr ago - <span class="primary">Feedback Type</span> </small>
        </span>
      </div>

      <p class="mt-2 text ">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quis ad assumenda soluta, fuga vel minus
        pariatur neque, aut doloribus culpa ipsum quos facilis sunt. Iusto aliquid dolor repudiandae eum doloremque,
        vero, placeat reiciendis ullam expedita pariatur quae quis necessitatibus est minus quasi quibusdam sapiente
        commodi. Consectetur dicta nobis voluptas?
      </p>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 'Improvement',
      filter: 'any',
      description: '',
      filterData: false,
      options: [
        { value: 'Improvement', text: 'Suggestion for Improvement' },
        { value: 'complaints', text: 'Complaints' },
      ],
      filters: [
        { value: 'any', text: 'Any' },
        { value: 'Improvement', text: 'Suggestion for Improvement' },
        { value: 'complaints', text: 'Complaints' },
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
  .avat {
    width: 64px;
    height: 64px;
  }

  .detail {
    position: relative;
    left: -70px;
  }
}

@media only screen and (min-width: 768px) {
  .avat {
    width: 64px;
    height: 64px;
  }
}
</style>
