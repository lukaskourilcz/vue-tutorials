<script setup>
import { ref, computed } from "vue";
import AddTransaction from "./components/AddTransaction.vue";
import Balance from "./components/Balance.vue";
import Header from "./components/Header.vue";
import IncomeExpenses from "./components/IncomeExpenses.vue";
import TransactionList from "./components/TransactionList.vue";
import { useToast } from "vue-toastification";

const transactions = ref([
  { id: 1, text: "Flower", amount: -9.99 },
  { id: 2, text: "House key", amount: -1.99 },
  { id: 3, text: "Car", amount: -1999.99 },
  { id: 4, text: "Rent", amount: 3800 },
  { id: 5, text: "Birthday money", amount: 200 },
]);

const toast = useToast();

const total = computed(() => {
  return transactions.value.reduce((acc, transaction) => {
    return acc + transaction.amount;
  }, 0);
});

const income = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);
});

const expense = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0);
});

const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount,
  });

  toast.success("Transaction added, mijo.");
};

const handleTransactionDeleted = (id) => {
  const index = transactions.value.findIndex((t) => t.id === id);
  if (index !== -1) {
    transactions.value.splice(index, 1);
    toast.info("Transaction removed, vato.");
  }
};

const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000);
};
</script>

<template>
  <Header />
  <div class="container">
    <Balance :total="total" />
    <IncomeExpenses :income="income" :expense="expense" />
    <TransactionList
      :transactions="transactions"
      @transactionDeleted="handleTransactionDeleted"
    />
    <AddTransaction @transactionSubmitted="handleTransactionSubmitted" />
  </div>
</template>
