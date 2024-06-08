<template>
  <div class="content-container">
    <AppHeader />
    <HeroSection
      bgColor="#0B0B0B"
      textColor="#FFFFFC"
      title="Simulador de investimento"
      subtitle="Descubra o quanto você pode economizar."
    />
    <div class="invest-container">
      <div class="grid-left">
        <RangeSlider
          id="slider1"
          :label="'Quanto gostaria de investir?'"
          v-model="initialBudget"
          :min="100"
          :max="10000"
          :step="100"
          :type="'currency'"
        />
        <RangeSlider
          id="slider2"
          :label="'Por mês, quanto investiria?'"
          v-model="monthlyBudget"
          :min="100"
          :max="10000"
          :step="100"
          :type="'currency'"
        />
        <RangeSlider
          id="slider3"
          :label="'Por quantos meses deixaria seu dinheiro investido?'"
          v-model="monthsToInvest"
          :min="1"
          :max="60"
          :step="1"
          :type="'month'"
        />
      </div>
      <div class="grid-center"></div>
      <div class="grid-right">
        <p class="grid-right-title">Em 24 meses você teria:</p>
        <MoneyCard :amount="selicResult" title="Taxa Selic" />
        <MoneyCard
          :amount="arcaResult"
          title="Fundo Arca"
          :imageUrl="require('@/assets/svg/logo-arca.svg')"
        />
        <ColoredDivider color="#33E5B0" />
        <RentabilityInfo
          :selic-rate="selicFare"
          :arch-rate="arcaFare"
          :lastUpdated-date="updatedData"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import RangeSlider from "../components/RangeSlider.vue";
import AppHeader from "../components/AppHeader.vue";
import HeroSection from "../components/HeroSection.vue";
import MoneyCard from "../components/MoneyCard.vue";
import ColoredDivider from "../components/ColoredDivider.vue";
import RentabilityInfo from "../components/RentabilityInfo.vue";

const initialBudget = ref(100);
const monthlyBudget = ref(1000);
const monthsToInvest = ref(12);
const selicResult = ref(0);
const arcaResult = ref(0);

const selicFare = ref("9,25%");
const arcaFare = ref("18% a.a.");
const currentDate = new Date();
const updatedData = ref(
  `${String(currentDate.getDate()).padStart(2, "0")}/${String(
    currentDate.getMonth() + 1
  ).padStart(2, "0")}/${currentDate.getFullYear()}`
);

const calculateProfitability = (): void => {
  const investmentAmount = initialBudget.value;
  const monthlyIncome = monthlyBudget.value;
  const annualSelicRate = 9.25 / 100;
  const annualArchRate = 18 / 100;
  const investmentPeriodMonths = monthsToInvest.value;
  const approximateDaysPerMonth = 252 / 12;

  const dailySelicRate = Math.pow(1 + annualSelicRate, 1 / 252) - 1;
  const dailyArchRate = Math.pow(1 + annualArchRate, 1 / 252) - 1;
  const prazoDias = investmentPeriodMonths * approximateDaysPerMonth;

  let selicInvestmentAmount = investmentAmount;
  for (let i = 0; i < prazoDias; i++) {
    selicInvestmentAmount *= 1 + dailySelicRate;
    selicInvestmentAmount += monthlyIncome / approximateDaysPerMonth;
  }

  let archInvestmentAmount = investmentAmount;
  for (let i = 0; i < prazoDias; i++) {
    archInvestmentAmount *= 1 + dailyArchRate;
    archInvestmentAmount += monthlyIncome / approximateDaysPerMonth;
  }

  selicResult.value = selicInvestmentAmount;
  arcaResult.value = archInvestmentAmount;
};

calculateProfitability();

watch([initialBudget, monthlyBudget, monthsToInvest], () => {
  calculateProfitability();
});
</script>

<style>
.invest-container {
  display: flex;
  max-width: 100%;
  padding: 80px 120px;
}

.grid-left,
.grid-right {
  flex: 0 0 37.5%;
  text-align: start;
}

.grid-right-title {
  font-family: var(--font-family-main);
  color: var(--font-color);
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 32px;
}

.grid-center {
  flex: 0 0 25%;
}

@media (max-width: 500px) {
  .invest-container {
    flex-direction: column;
    padding: 32px;
  }

  .grid-left,
  .grid-right {
    flex: 1;
  }

  .grid-center {
    display: none;
  }

  .grid-right-title {
    font-size: 20px;
    margin-bottom: 24px;
  }
}
</style>
