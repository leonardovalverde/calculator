<template>
  <div class="container">
    <p class="text-left">
      Acesse o nosso simulador de investimentos e escolha as melhores opções do
      mercado.
    </p>
    <p class="text-right">
      Conquiste sua liberdade financeira, conheça o Grupo Primo.
    </p>
    <button class="center-button" @click="goToInvestmentSimulator">
      Ir para Simulador de Investimento
    </button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const goToInvestmentSimulator = () => {
  router.push({ name: "InvestmentSimulator" });
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(var(--black-gradient-full), var(--black-gradient)),
    url("~@/assets/images/hero-background.webp");
  background-size: cover;
  height: 100vh;
}

.text-left,
.text-right {
  font-size: 16px;
  color: var(--main-bg-color);
  margin: 20px;
  opacity: 0;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.text-left {
  max-width: 1000px;
  animation-name: slideFromLeft;
  font-size: 3em;
}

.text-right {
  animation-name: slideFromRight;
  font-size: 1.5em;
}

.center-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: var(--main-bg-color);
  color: #0b0b0b;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  opacity: 0;
  animation-name: fadeinButton;
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-delay: 1s;
  font-family: var(--font-family-main);
  font-weight: 500;
}

.center-button:hover {
  background-color: var(--secondary-bg-color);
}

@keyframes fadeinButton {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideFromLeft {
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideFromRight {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 500px) {
  .text-left {
    font-size: 1em;
  }

  .text-right {
    font-size: 0.75em;
  }
}
</style>
