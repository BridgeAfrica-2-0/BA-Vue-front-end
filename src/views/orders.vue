<template>
  <div>
    <orders />
    <p class="text-center">
      <span class="display-inline">
        <b-link @click="$i18n.locale = 'en'"> {{ $t("auth.english") }}</b-link>
        <span class="vl"></span>
        <b-link class="ml-2" @click="$i18n.locale = 'fr'">
          {{ $t("auth.french") }}
        </b-link>
      </span>
      Bridge Africa © 2021
    </p>
  </div>
</template>
<script>
import Orders from "@/components/orders.vue";
export default {
  components: { Orders },
};
</script>
<style scoped></style>
