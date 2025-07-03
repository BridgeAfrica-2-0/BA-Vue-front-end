<template>
  <div class="custom-tabs">
    <div class="tab-list" :style="{ marginLeft: tabListMarginLeft }">
      <button
        v-for="(tab, idx) in tabs"
        :key="tab.title"
        :class="['tab-btn', { active: idx === value }]"
        @click="$emit('input', idx)"
        type="button"
      >
        {{ tab.title }}
      </button>
      <!-- Desktop search/filter -->
      <div v-if="showSearch" class="tab-search-bar desktop-search">
        <input
          class="search-input"
          type="text"
          :placeholder="searchPlaceholder"
          v-model="searchValue"
        />
        <span class="search-icon">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="#888"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="7" />
            <line x1="16.5" y1="16.5" x2="21" y2="21" />
          </svg>
        </span>
      </div>
    </div>
    <!-- Mobile search/filter -->
    <div v-if="showSearch" class="tab-search-bar mobile-search">
      <input
        class="search-input"
        type="text"
        :placeholder="searchPlaceholder"
        v-model="searchValue"
      />
      <span class="search-icon">
        <svg
          width="16"
          height="16"
          fill="none"
          stroke="#888"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="7" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
      </span>
      <button class="filter-btn" type="button">
        <svg
          width="18"
          height="18"
          fill="none"
          stroke="#888"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16M6 12h12M10 18h4" />
        </svg>
        Filter
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
    },
    tabListMarginLeft: {
      type: String,
      default: "-14%"
    },
    showSearch: {
      type: Boolean,
      default: false
    },
    searchPlaceholder: {
      type: String,
      default: "Search..."
    }
  },
  data() {
    return {
      searchValue: ""
    };
  }
};
</script>

<style scoped>
.custom-tabs {
  width: 100%;
}
.tab-list {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: #000 #eee;
  position: relative;
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
  white-space: nowrap;
  flex-shrink: 0;
}
.tab-btn.active {
  font-weight: bold;
  border-bottom: 3px solid #000;
  color: #000;
  background: none;
}
.tab-btn:not(.active):hover {
  color: black;
}
.tab-search-bar {
  display: flex;
  align-items: center;
  background: rgba(250, 250, 250, 1);
  border-radius: 20px;
  padding: 6px 13px;
  min-width: 180px;
  max-width: 580px;
  text-align: center;
  border: 1px solid rgba(204, 204, 204, 1);
  gap: 8px;
}
.desktop-search {
  position: absolute;
  right: 0;
  margin-left: auto;
}
.mobile-search {
  display: none;
  margin-top: 10px;
  width: 100%;
  justify-content: flex-start;
}
.filter-btn {
  background: rgba(204, 204, 204, 1);
  border: none;
  border-radius: 16px;
  padding: 4px 12px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1rem;
  color: #333;
  cursor: pointer;
}
.search-icon {
  display: flex;
  align-items: center;
  margin-right: 4px;
}
.search-input {
  border: none;
  outline: none;
  background: transparent;
  border-radius: 20px;
  padding: 4px 8px;
  font-size: 1rem;
  width: 100%;
}
.tab-content {
  padding-top: 1rem;
}

/* Hide scrollbar for a cleaner look on mobile */
@media (max-width: 768px) {
  .tab-list {
    -ms-overflow-style: none;
    scrollbar-width: none;
    margin-left: -1% !important;
  }
  .tab-list::-webkit-scrollbar {
    display: none;
  }
  .desktop-search {
    display: none !important;
  }
  .mobile-search {
    display: flex !important;
  }
}
</style>
