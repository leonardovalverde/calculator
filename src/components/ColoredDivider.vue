<template>
  <div class="divider" :style="dynamicStyles"></div>
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
    dynamicStyles() {
      return {
        backgroundColor: this.color,
      };
    },
  },
};
</script>

<style scoped>
.divider {
  height: 6px;
  margin: 48px 0;
  border-radius: 25px;
}
</style>