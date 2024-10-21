<template>
  <div class="screen-sizes mb-3">
    <div
      v-for="size in sizes"
      :key="size.value"
      class="mr-3"
      :class="[
        'btn cursor-pointer px-4 py-3',
        { 'border-primary text-primary': selectedSize === size.value },
      ]"
      @click="selectSize(size)"
    >
      {{ size.label }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sizes: {
      type: Array,
      required: true,
    },
    selectedSize: {
      type: String,
      default: "",
    },
  },
  methods: {
    selectSize(size) {
      this.$emit("size-selected", size);
    },
  },
};
</script>

<style scoped>
.btn {
  outline: none !important;
}
</style>
