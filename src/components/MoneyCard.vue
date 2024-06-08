<template>
  <div class="money-card">
    <img
      v-if="imageUrl"
      :src="imageUrl"
      alt="Money Card Image"
      class="money-card-image"
      loading="lazy"
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
  font-family: var(--font-family-main);
  border: 1px solid var(--boder-color);
  border-radius: 24px;
  padding: 32px;
  background-color: var(--main-bg-color);
  margin-bottom: 16px;
}

.money-card-content {
  text-align: center;
}

.money-card-title {
  margin-bottom: 10px;
  font-size: 16px;
  color: var(--font-color);
  text-transform: uppercase;
  letter-spacing: 3px;
}

.money-card-amount {
  font-size: 3vw;
  font-weight: bold;
  color: var(--secondary-font-color);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.money-card-image {
  margin-bottom: 16px;
  max-width: 100%;
  max-height: 33px;
}

@media (max-width: 500px) {
  .money-card-title {
    font-size: 14px;
  }
  .money-card-amount {
    font-size: 40px;
  }
}
</style>
