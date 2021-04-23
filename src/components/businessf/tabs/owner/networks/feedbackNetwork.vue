<template>
<div class="mt-3 container">
  <b-row>
    
  </b-row>
  <b-row>
    <b-col cols="12">
      <span class="float-right">

        <b-dropdown size="lg"  variant="link" toggle-class="text-decoration-none pull-left" right  class="pull-left" no-caret>
          <template #button-content>
            <b-icon-filter></b-icon-filter><span class="sr-only">Search</span>
          </template>
          <p class="font-weight-bolder px-3 m-0">Feedbacks Type</p>
          <b-dropdown-item href="#">Any</b-dropdown-item>
          <b-dropdown-item href="#">suggestion for improvement</b-dropdown-item>
          <b-dropdown-item href="#">Progress to your program</b-dropdown-item>
          <b-dropdown-item href="#">New Idea for PEA-JEUNES</b-dropdown-item>
        </b-dropdown>


      </span>



    </b-col>
  </b-row>
  <b-row>
    <b-col cols="12">
      <div v-for="i in 4" :key="i" class="mb-4">
        <b-card
            class="mb-2"
        >
          <b-card-text>
            <b-row class="px-md-3">
              <b-col cols="2" md="1" class="m-0 p-0">
                <b-avatar
                    class="d-inline-block"
                    variant="info"
                    src="https://business.bridgeafrica.info/assets/img/team/3.png"
                    size="3.5rem"
                ></b-avatar>
              </b-col>
              <b-col cols="10" md="11" class="pt-2">
                <h5 class="m-0 font-weight-bolder">
                  Mapoure Agrobusiness
                </h5>
                <p>1h Ago - <span class="text-primary">Feedback Type</span></p>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="12" class="mt-2">
                <p class="text-justify">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  <br>
                  <br>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                </p>
              </b-col>
            </b-row>
          </b-card-text>
        </b-card>
      </div>
    </b-col>
  </b-row>
</div>
</template>

<script>
export default {
name: "feedbackNetwork",
  data() {
    return {
      selected: 1,
      text: '',
      options: [
        { value: '1', text: 'suggestion for improvement' },
        { value: '2', text: 'Progress to your program' },
        { value: '3', text: 'New Idea for PEA-JEUNES' }
      ]
    }
  }
}
</script>

<style scoped>

</style>