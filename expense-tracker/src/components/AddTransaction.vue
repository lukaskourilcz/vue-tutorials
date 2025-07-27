<script setup>
import { ref } from 'vue';
const text = ref("");
const amount = ref("");

const onSubmit = () => {
  
  console.log(text.value, amount.value);
};
</script>

<template>
  <h3>Add new transaction</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" v-model="text" placeholder="Enter text.." />
    </div>
    <div class="amount">
      <label for="amount"
        >Amount <br />
        (Negative - expense, positive - income)
      </label>
      <input
        type="number"
        id="amount"
        v-model="amount"
        placeholder="Enter amount..."
      />
    </div>
    <button class="btn">Add transaction</button>
  </form>
</template>
