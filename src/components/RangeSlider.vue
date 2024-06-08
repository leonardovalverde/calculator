<template>
  <div class="slider-container">
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
    <span class="slider-value">{{ formattedValue }}</span>
  </div>
</template>

<script>
export default {
  name: "RangeSlider",
  props: {
    type: {
      type: String,
      default: "currency",
    },
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
    sliderValue(newValue) {
      this.$emit("update:modelValue", Number(newValue));
      this.updateSliderBackground();
    },
  },
  methods: {
    updateSliderBackground() {
      const range = this.$refs.range;
      const percentage =
        ((this.sliderValue - this.min) / (this.max - this.min)) * 100;
      range.style.background = `linear-gradient(to right, #54D4A0 ${percentage}%, #ddd ${percentage}%)`;
    },
  },
  computed: {
    formattedValue() {
      switch (this.type) {
        case "currency":
          return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(this.sliderValue);
        case "month":
          return `${this.sliderValue} ${
            this.sliderValue > 1 ? "meses" : "mês"
          }`;
        default:
          return this.sliderValue;
      }
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
  margin-bottom: 80px;
}

.slider-label {
  align-self: flex-start;
  margin-bottom: 36px;
  font-size: 32px;
  color: var(--font-color);
  font-weight: 600;
}

.styled-slider {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 12px;
  background: var(--secondary-bg-color);
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
  background: var(--medium-aqua-marine);
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
  background: var(--medium-aqua-marine);
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
  color: var(--secondary-font-color);
  font-family: var(--font-family-main);
}

@media (max-width: 500px) {
  .slider-container {
    margin-bottom: 48px;
  }

  .slider-label {
    font-size: 20px;
    margin-bottom: 32px;
  }

  .slider-value {
    margin-top: 32px;
    font-size: 32px;
  }
}
</style>
