<template>
  <b-row class="progress-content P-0">
    <b-col
      :disable="step.complete"
      class="progress-item-box p-2"
      :class="step.status ? 'progress-item-check' : ''"
      v-for="(step, i) in steps"
      :key="i"
      @click="switchStep(step, i)"
    >
      <div class="d-flex align-items-center flex-row justify-content-start">
        <div
          class="mx-2 progress-item-name d-flex align-items-center flex-row justify-content-start"
        >
          <!-- :variant="step.status ? 'success' : 'secondary'" -->
          <b-avatar
            class="mr-2 avatar-size"
            :class="step.status ? 'avatar-color-success' : 'avatar-color'"
            :text="(i + 1).toString()"
          ></b-avatar>
          <a class="step">
            <span class="label title-font-size font-weight-bold text-black">{{
              step.text
            }}</span>
          </a>
        </div>
        <div class="payment-progress-bar flex-grow-1">
          <b-progress
            class="rounded-pill"
            height="8px"
            width="100%"
            :value="current_step >= i + 1 ? 100 : 0"
            :variant="current_step === i + 1 ? 'success' : 'secondary'"
          ></b-progress>
        </div>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  props: {
    steps: {
      type: Array,
      required: true
    },
    current_step: Number
  },
  data() {
    return {
      next_step: {
        text_color: "text-black",
        avatar: "success",
        progress: "success"
      }
    };
  },
  methods: {
    switchStep(step, i) {
      if (step.complete == true) {
        const goTo = i + 1;
        this.$emit("switchstep", goTo);
      }
    }
  }
};
</script>

<style scoped>
.disable {
  width: 128px;
  height: 128px;
  background-color: gray;
}

.payment-progress-bar {
  display: block;
  width: 100% !important;
}
/* .progress-item-box {
		cursor: pointer;
	} */
.progress-item-name {
  width: fit-content;
}
.step {
  width: 100% !important;
}

.title-font-size {
  font-size: 16px;
  color: #000;
}
.avatar-size {
  height: 40px;
  width: 40px;
}
.avatar-color {
  background-color: #6c757d;
}
.avatar-color-success {
  background-color: #28a745;
}
@media only screen and (max-width: 768px) {
  .title-font-size {
    font-size: 14px !important;
  }
  .avatar-size {
    height: 30px !important;
    width: 30px !important;
    background: #fff;
    color: #000;
  }
  .avatar-color {
    background-color: #fff;
  }
  .avatar-color-success {
    background-color: #fff;
  }
  .payment-progress-bar {
    display: none !important;
  }
  .progress-content {
    background: #bfbfbf;
    /* height: 100% !important; */
  }
  span.label {
    display: inline-block;
    width: 100%;
  }
  .progress-item-box {
    position: relative;
  }
  .progress-item-check {
    background: #28a745;
  }
  .progress-item-box:not(:last-child):after {
    position: absolute;
    top: 0;
    right: -10px;
    content: " ";
    background: #fff;
    height: 100%;
    width: 20px;
    z-index: 12;
    clip-path: polygon(65% 1%, 100% 50%, 66% 100%, 0% 100%, 50% 50%, 0% 0%);
  }
}
@media only screen and (max-width: 420px) {
  .title-font-size {
    font-size: 12px !important;
  }
  .avatar-size {
    height: 25px !important;
    width: 25px !important;
    margin-left: 10px !important;
  }
  .progress-item-box {
    padding: 4px !important;
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .progress-item-name {
    margin: 0 !important;
  }
}

.title-font-size {
  cursor: default !important;
}
</style>
