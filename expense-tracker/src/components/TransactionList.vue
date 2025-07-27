<script setup>
import { ref } from "vue";

const transactions = ref([
  { id: 1, text: "Flower", amount: -9.99 },
  { id: 2, text: "House key", amount: -1.99 },
  { id: 3, text: "Car", amount: -1999.99 },
  { id: 4, text: "Rent", amount: 8000 },
  { id: 5, text: "Birthday money", amount: 200 },
]);
</script>

<template>
  <h3>History</h3>
  <ul id="list" class="list">
    <li
      v-for="transaction in transactions"
      :key="transactions.id"
      :class="transaction.amount < 0 ? 'minus' : 'plus'"
    >
      {{ transaction.text }}
      <span>${{ transaction.amount }}</span>
      <button class="delete-btn">x</button>
    </li>
  </ul>
</template>