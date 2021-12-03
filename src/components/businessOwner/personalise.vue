<template>
  <div>
    <b-card class="text-center mt-2 p-1 item">
      <b-card-text>
        <h5><b>{{ $t('businessowner.Create_your_personalized_website') }}</b></h5>
        <p>
          {{ $t('businessowner.Start_with_a_template_and_make_it_your_own') }}, 
          {{ $t('businessowner.with_easy_drag_and_drop') }} &
          {{ $t('businessowner.1000s_of_design_features') }}
        </p>
        <b-button variant="primary">{{ $t('businessowner.Choose_a_Template') }}</b-button>
      </b-card-text>
      <b-row>
        <b-col>
          <b>{{ $t('businessowner.Current_Plan') }}</b>
        </b-col>
        <b-col>
          <b-button variant="outline-primary">{{ $t('businessowner.Change') }}</b-button>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.item {
  background-color: #ccc;
}
</style>
