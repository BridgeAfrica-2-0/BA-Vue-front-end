<template>
  <a class="ly-tab-item bg" style=" color:yellow" @click="onItemClicked">
    <div class="ly-tab-item-icon" v-if="$parent.fixBottom">
      <slot name="icon"></slot>
    </div>
    <div class="ly-tab-item-label"><slot></slot></div>
  </a>
</template>

<script>
export default {
  name: 'LyTabItem',
  computed: {
    activeStyle() {
      return {
        color: this.$parent.activeColor,
      };
    },
  },
  data() {
    return {
      id: (this.$parent.$children.length || 1) - 1,
    };
  },
  methods: {
    onItemClicked() {
      this.$parent.$emit('input', this.id);
    },
  },
};
</script>

<style>
.bg {
  color: black;
}

.ly-tab-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
}

.ly-tab-item-icon {
  margin: 0 auto 5px;
}
</style>
