<template>
  <card>
    <b-button
      :class="visible ? null : 'collapsed'"
      :aria-expanded="visible ? 'true' : 'false'"
      aria-controls="collapse-4"
      @click="visible = !visible"
    >
      {{$t("businessowner.Toggle_Collapse")}}
    </b-button>
    <b-collapse id="collapse-4" v-model="visible" class="mt-2">
      <b-card>{{$t("businessowner.I_should_start_open")}}!</b-card>
    </b-collapse>
  </card>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
};
</script>