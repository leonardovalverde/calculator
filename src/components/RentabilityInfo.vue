<template>
  <div class="info-box">
    <div class="rentability-container">
      <div class="rentability">
        <span> Taxa Selic: </span>
        <strong>{{ selicRate }}</strong>
      </div>
      <div>
        <span> Rentabilidade do Arca: </span>
        <strong>{{ archRate }}</strong>
      </div>
    </div>
    <div class="info-text-container">
      <img src="@/assets/svg/help.svg" alt="ícone de ajuda" class="icon" />
      <div>
        <p class="date-info-text">
          Valores utilizados no simulador de investimentos (referentes à data de
          última atualização - esses valores podem alterar de acordo com o
          mercado):
        </p>
        <p>- Data da última atualização: {{ lastUpdatedDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selicRate: String,
    archRate: String,
    lastUpdatedDate: String,
  },
};
</script>

<style scoped>
.info-box {
  strong {
    font-family: var(--font-family-tertiary);
    color: black;
    white-space: nowrap;
    font-size: 18px;
    font-weight: 800;
    text-transform: initial;
  }
}

.rentability-container {
  span {
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    color: var(--font-color);
  }
}

.rentability {
  margin-bottom: 32px;
}

.info-text-container {
  font-family: var(--font-family-main);
  display: flex;
  margin:49px 0 24px 0;
  align-items: start;
}

.date-info-text {
  margin-bottom: 24px;
}

.icon {
  margin-right: 16px;
}
</style>