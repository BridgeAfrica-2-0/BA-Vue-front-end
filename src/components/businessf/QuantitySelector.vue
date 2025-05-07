<template>
  <div class="quantity-selector">
    <button class="btn-decrement" @click="decrement">-</button>
    <input
      type="text"
      class="form-control flex-grow-1 border-top-0 border-bottom-0 font-weight-bold h-100"
      v-model="currentQuantity"
      @input="onInputChange"
    />
    <button class="btn-increment" @click="increment">+</button>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 1,
    },
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 100,
    },
  },
  data() {
    return {
      currentQuantity: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.currentQuantity = newValue;
    },
  },
  methods: {
    increment() {
      if (this.currentQuantity < this.max) {
        this.currentQuantity++;
        this.$emit("input", this.currentQuantity);
      }
    },
    decrement() {
      if (this.currentQuantity > this.min) {
        this.currentQuantity--;
        this.$emit("input", this.currentQuantity);
      }
    },
    onInputChange() {
      let value = parseInt(this.currentQuantity, 10);

      if (isNaN(value) || value < this.min) {
        value = this.min;
      } else if (value > this.max) {
        value = this.max;
      }

      this.currentQuantity = value;
      this.$emit("input", this.currentQuantity);
    },
  },
};
</script>

<style scoped>
.quantity-selector {
  display: flex;
  align-items: center;
  height: 50px;
  width: 170px;
  border: 1px solid #edeaea;
}

input {
  width: 40px;
  font-size: 25px;
  text-align: center;
  border-radius: 0;
  border-inline: 1px solid #edeaea;
}

button {
  background-color: #fff;
  border: none;
  width: 30px;
  height: 100%;
  flex-grow: 1;
  text-align: center;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  font-size: 24px;
}

button:active {
  background-color: #f0f0f0;
}
</style>
