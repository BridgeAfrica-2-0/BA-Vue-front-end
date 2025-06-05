<template>
  <div class="custom-tabs">
    <div class="tab-list">
      <button
        v-for="(tab, idx) in tabs"
        :key="tab.title"
        :class="['tab-btn', { active: idx === value }]"
        @click="$emit('input', idx)"
        type="button"
      >
        {{ tab.title }}
      </button>
    </div>
    <div class="tab-content">
      <slot v-if="tabs[value]" :name="tabs[value].slot"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "CustomTabs",
  props: {
    value: { type: Number, required: true },
    tabs: {
      type: Array,
      required: true
      // [{ title: 'Tab Name', slot: 'slotName' }]
    }
  }
};
</script>

<style scoped>
.custom-tabs {
  width: 100%;
}
.tab-list {
  display: flex;
  margin-bottom: 1rem;
}
.tab-btn {
  background: none;
  border: none;
  outline: none;
  font-size: 1rem;
  padding: 10px 18px;
  cursor: pointer;
  color: #333;
  border-bottom: 3px solid transparent;
  font-weight: normal;
  transition: border-color 0.2s, color 0.2s;
}
.tab-btn.active {
  font-weight: bold;
  border-bottom: 3px solid #000;
  color: #000;
  background: none;
}
.tab-btn:not(.active):hover {
  color:  black;
}
.tab-content {
  padding-top: 1rem;
}
</style>
