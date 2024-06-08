<template>
  <header class="app-header">
    <div class="logo-container">
      <img :src="logo" alt="Logo" class="logo" />
    </div>
  </header>
</template>

<script>
import logo from "@/assets/svg/logo-grupo-primo.svg";

export default {
  name: "AppHeader",
  data() {
    return {
      logo,
    };
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
  background-color: var(--main-bg-color);
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

@media screen and (max-width: 500px) {
  .app-header {
    height: 24px;
    padding: 32px;
  }

  .app-header .logo {
    max-height: 22px;
  }
}
</style>
