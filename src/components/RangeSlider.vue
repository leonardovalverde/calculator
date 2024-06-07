<template>
  <div
    class="slider-container"
    :style="{
      marginTop: sliderMargins.marginTop,
      marginBottom: sliderMargins.marginBottom,
    }"
  >
    <label class="slider-label">{{ label }}</label>
    <input
      type="range"
      :min="min"
      :max="max"
      :step="step"
      v-model="sliderValue"
      @input="updateValue"
      class="styled-slider"
      ref="range"
    />
    <span class="slider-value">{{ sliderValue }}</span>
  </div>
</template>

<script>
export default {
  name: "RangeSlider",
  props: {
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
    step: {
      type: Number,
      default: 1,
    },
    modelValue: {
      type: Number,
      default: 0,
    },
    label: {
      type: String,
      default: "Label",
    },
    sliderMargins: {
      type: Object,
      default: () => ({ marginTop: 0, marginBottom: 0 }),
    },
  },
  data() {
    return {
      sliderValue: this.modelValue,
    };
  },
  watch: {
    modelValue(newValue) {
      this.sliderValue = newValue;
      this.updateSliderBackground();
    },
    sliderValue() {
      this.updateSliderBackground();
    },
  },
  methods: {
    updateValue() {
      this.$emit("update:modelValue", this.sliderValue);
      this.updateSliderBackground();
    },
    updateSliderBackground() {
      const range = this.$refs.range;
      const percentage =
        ((this.sliderValue - this.min) / (this.max - this.min)) * 100;
      range.style.background = `linear-gradient(to right, #54D4A0 ${percentage}%, #ddd ${percentage}%)`;
    },
  },
  mounted() {
    this.updateSliderBackground();
  },
};
</script>

<style scoped>
.slider-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.slider-label {
  align-self: flex-start;
  margin-bottom: 36px;
  font-size: 32px;
  color: #21211f;
}

.styled-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 12px;
  background: #ddd;
  outline: none;
  border-radius: 12px;
  position: relative;
  margin: 0;
}

.styled-slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 12px;
  background: transparent;
  border-radius: 12px;
}

.styled-slider::-moz-range-track {
  width: 100%;
  height: 12px;
  background: transparent;
  border-radius: 12px;
}

.styled-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 39.7px;
  height: 39.7px;
  background: #54D4A0;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  margin-top: -14px;
  position: relative;
  z-index: 1;
}

.styled-slider::-moz-range-thumb {
  width: 39.7px;
  height: 39.7px;
  background: #54D4A0;
  cursor: pointer;
  border-radius: 50%;
  border: none;
  position: relative;
  z-index: 1;
}

.slider-value {
  margin-top: 36px;
  text-align: center;
  width: 100%;
  font-size: 48px;
  font-weight: bold;
  color: #0d0d0d;
}
</style>
