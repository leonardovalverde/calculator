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
          v-model="slider1"
          :min="100"
          :max="10000"
          :step="100"
          :type="'currency'"
        />
        <RangeSlider
          id="slider2"
          :label="'Por mês, quanto investiria?'"
          v-model="slider2"
          :min="100"
          :max="10000"
          :step="100"
          :type="'currency'"
        />
        <RangeSlider
          id="slider3"
          :label="'Por quantos meses deixaria seu dinheiro investido?'"
          v-model="slider3"
          :min="1"
          :max="60"
          :step="1"
          :type="'month'"
        />
      </div>
      <div class="grid-center"></div>
      <div class="grid-right">
        <p class="grid-right-title">Em 24 meses você teria:</p>
        <MoneyCard :amount="slider4" title="Taxa Selic" />
        <MoneyCard
          :amount="slider5"
          title="Fundo Arca"
          :imageUrl="require('@/assets/svg/logo-arca.svg')"
        />
        <ColoredDivider color="#33E5B0" />
        <RentabilityInfo
          :taxa-selic="taxaSelic"
          :rentabilidade-arca="rentabilidadeArca"
          :data-atualizacao="dataAtualizacao"
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

const slider1 = ref(100);
const slider2 = ref(1000);
const slider3 = ref(12);
const slider4 = ref(0);
const slider5 = ref(0);

const taxaSelic = ref("9,25%");
const rentabilidadeArca = ref("18% a.a.");
const dataAtual = new Date();
const dataAtualizacao = ref(
  `${String(dataAtual.getDate()).padStart(2, "0")}/${String(
    dataAtual.getMonth() + 1
  ).padStart(2, "0")}/${dataAtual.getFullYear()}`
);

const calcularRentabilidade = (): void => {
  // Parâmetros
  const principal = slider1.value;
  const dinheiroMensal = slider2.value;
  const taxaSelicAnual = 9.25 / 100;
  const taxaArcaAnual = 18 / 100;
  const prazoMeses = slider3.value; // Prazo em meses
  const diasNoMes = 252 / 12; // Aproximado

  // Convertendo taxa anual para diária
  const taxaSelicDiaria = Math.pow(1 + taxaSelicAnual, 1 / 252) - 1;
  const taxaArcaDiaria = Math.pow(1 + taxaArcaAnual, 1 / 252) - 1;
  const prazoDias = prazoMeses * diasNoMes; // Convertendo prazo para dias

  // Cálculo da rentabilidade para Selic
  let montanteSelic = principal;
  for (let i = 0; i < prazoDias; i++) {
    montanteSelic *= 1 + taxaSelicDiaria;
    montanteSelic += dinheiroMensal / diasNoMes; // Adicionando o investimento diário
  }

  // Cálculo da rentabilidade para Arca
  let montanteArca = principal;
  for (let i = 0; i < prazoDias; i++) {
    montanteArca *= 1 + taxaArcaDiaria;
    montanteArca += dinheiroMensal / diasNoMes; // Adicionando o investimento diário
  }

  // Atualizar os valores dos MoneyCards
  slider4.value = montanteSelic;
  slider5.value = montanteArca;
};

calcularRentabilidade();
// Assistir a alterações nos sliders e chamar o método de cálculo
watch([slider1, slider2, slider3], () => {
  calcularRentabilidade();
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
