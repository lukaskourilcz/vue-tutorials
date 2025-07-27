<script setup>
import AddTransaction from './components/AddTransaction.vue';
import Balance from './components/Balance.vue';
import Header from './components/Header.vue';
import IncomeExpenses from './components/IncomeExpenses.vue';
import TransactionList from './components/TransactionList.vue';
</script>

<template>
<Header />
<div class="container">
  <Balance />
  <IncomeExpenses />
  <TransactionList />
  <AddTransaction />
</div>
</template>

<style scoped>

</style>
