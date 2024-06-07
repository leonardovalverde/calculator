<template>
  <AppHeader />
  <HeroSection
    bgColor="#0B0B0B"
    textColor="#FFFFFC"
    title="Simulador de investimento"
    subtitle="Descubra o quanto você pode economizar."
  />
  <div class="app-container">
    <div class="grid-left">
      <RangeSlider
        :label="'Quanto gostaria de investir?'"
        v-model="slider1"
        :sliderMargins="{ marginBottom: '80px' }"
        :min="100"
        :max="10000"
        :step="100"
      />
      <RangeSlider
        :label="'Por mês, quanto investiria?'"
        v-model="slider2"
        :sliderMargins="{ marginBottom: '80px' }"
        :min="100"
        :max="10000"
        :step="100"
      />
      <RangeSlider
        :label="'Por quantos meses deixaria seu dinheiro investido?'"
        v-model="slider3"
        :min="1"
        :max="60"
        :step="1"
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
      <div>
        <p>Taxa Selic: <strong>9,25%</strong></p>
        <p>Rentabilidade do Arca: <strong>18% a.a.</strong></p>
      </div>
      <div>
        <div>ícone</div>
        <div>
          <p>
            Valores utilizados no simulador de investimentos (referentes à data
            de última atualização - esses valores podem alterar de acordo com o
            mercado):
          </p>
          <p>- Data da última atualização: 10/01/2024</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import RangeSlider from "./components/RangeSlider.vue";
import AppHeader from "./components/AppHeader.vue";
import HeroSection from "./components/HeroSection.vue";
import MoneyCard from "./components/MoneyCard.vue";
import ColoredDivider from "./components/ColoredDivider.vue";

const slider1 = ref(100);
const slider2 = ref(1000);
const slider3 = ref(12);
const slider4 = ref(0);
const slider5 = ref(0);

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
    montanteSelic += dinheiroMensal / diasNoMes; // Adicionando o investimento diário
    montanteSelic *= 1 + taxaSelicDiaria;
  }

  // Cálculo da rentabilidade para Arca
  let montanteArca = principal;
  for (let i = 0; i < prazoDias; i++) {
    montanteArca += dinheiroMensal / diasNoMes; // Adicionando o investimento diário
    montanteArca *= 1 + taxaArcaDiaria;
  }

  // Atualizar os valores dos MoneyCards
  slider4.value = montanteSelic;
  slider5.value = montanteArca;
};

// Assistir a alterações nos sliders e chamar o método de cálculo
watch([slider1, slider2, slider3], calcularRentabilidade);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.app-container {
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
  color: #21211f;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 32px;
}

.grid-center {
  flex: 0 0 25%;
}
</style>
