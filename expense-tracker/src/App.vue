<script setup>
import { ref } from 'vue';
import AddTransaction from './components/AddTransaction.vue';
import Balance from './components/Balance.vue';
import Header from './components/Header.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import TransactionList from './components/TransactionList.vue';


const transactions = ref([
  { id: 1, text: "Flower", amount: -9.99 },
  { id: 2, text: "House key", amount: -1.99 },
  { id: 3, text: "Car", amount: -1999.99 },
  { id: 4, text: "Rent", amount: 8000 },
  { id: 5, text: "Birthday money", amount: 200 },
]);


</script>

<template>
<Header />
<div class="container">
  <Balance />
  <IncomeExpenses />
  <TransactionList :transactions="transactions" />
  <AddTransaction />
</div>
</template>

<style scoped>

</style>
