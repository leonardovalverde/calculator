<template>
  <header :class="['app-header', { mobile: isMobile }]">
    <div class="logo-container">
      <img src="@/assets/svg/logo-grupo-primo.svg" alt="Logo" class="logo" />
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isMobile: false,
      resizeListener: null,
    };
  },
  mounted() {
    this.checkMobile();
    this.resizeListener = this.checkMobile;
    window.addEventListener("resize", this.resizeListener);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.resizeListener);
  },
  methods: {
    checkMobile() {
      this.isMobile = window.innerWidth <= 500;
    },
  },
};
</script>

<style scoped>
.app-header {
  height: 60px;
  max-width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #f8f8f8;
  padding: 32px 0 32px 120px;
}

.logo-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  max-width: 100%;
  height: auto;
}

.app-header.mobile {
  height: 66px;
}

.app-header.mobile {
  padding: 32px;
}
</style>
