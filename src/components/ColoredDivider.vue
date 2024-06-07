<template>
  <div :style="dividerStyle"></div>
</template>

<script>
export default {
  name: "ColoredDivider",
  props: {
    color: {
      type: String,
      default: "#000",
    },
  },
  computed: {
    dividerStyle() {
      return {
        height: "6px",
        backgroundColor: this.color,
        margin: "48px 0",
        borderRadius: "25px",
      };
    },
  },
};
</script>
