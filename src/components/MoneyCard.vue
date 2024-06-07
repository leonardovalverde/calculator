<template>
  <div class="money-card">
    <img
      v-if="imageUrl"
      :src="imageUrl"
      alt="Money Card Image"
      class="money-card-image"
    />
    <div class="money-card-content">
      <h3 class="money-card-title">{{ title }}</h3>
      <p class="money-card-amount">{{ formattedAmount }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MoneyCard",
  props: {
    amount: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      default: "",
    },
  },
  computed: {
    formattedAmount() {
      return this.amount.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },
  },
};
</script>

<style scoped>
.money-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #bfbdb6;
  border-radius: 24px;
  padding: 32px;
  background-color: #f9f9f9;
  margin-bottom: 16px;
}

.money-card-content {
  text-align: center;
}

.money-card-title {
  margin-bottom: 10px;
  font-size: 16px; /* Tamanho da fonte responsiva */
  color: #595855;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.money-card-amount {
  font-size: 3vw; /* Tamanho da fonte responsiva */
  font-weight: bold;
  color: #21211f;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.money-card-image {
  margin-bottom: 16px;
  max-width: 100%;
  max-height: 33px;
}
</style>
