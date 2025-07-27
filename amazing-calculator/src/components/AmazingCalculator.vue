<script setup>
import { ref } from "vue";

const display = ref("0");

const appendToDisplay = (value) => {
  if (display.value === "0" && value !== ".") {
    display.value = value;
  } else {
    display.value += value;
  }
};

const calculate = () => {
  try {
    display.value = eval(display.value).toString();
  } catch (error) {
    display.value = "Error";
  }
};

const clearDisplay = () => {
  display.value = "0";
};
</script>

<template>
  <div class="calculator">
    <input v-model="display" readonly />
    <div class="buttons">
      <button @click="appendToDisplay('7')">7</button>
      <button @click="appendToDisplay('8')">8</button>
      <button @click="appendToDisplay('9')">9</button>
      <button @click="appendToDisplay('/')">/</button>

      <button @click="appendToDisplay('4')">4</button>
      <button @click="appendToDisplay('5')">5</button>
      <button @click="appendToDisplay('6')">6</button>
      <button @click="appendToDisplay('*')">*</button>

      <button @click="appendToDisplay('1')">1</button>
      <button @click="appendToDisplay('2')">2</button>
      <button @click="appendToDisplay('3')">3</button>
      <button @click="appendToDisplay('-')">-</button>

      <button @click="appendToDisplay('0')">0</button>
      <button @click="appendToDisplay('.')">.</button>
      <button @click="calculate()">=</button>
      <button @click="appendToDisplay('+')">+</button>
    </div>
    <button @click="clearDisplay" class="clear-button">C</button>
  </div>
</template>

<style scoped>
.calculator {
  max-width: 400px;
  border: 1px solid;
  padding: 20px;
  margin: 50px auto;
}

input {
  width: 71%;
  margin-bottom: 5px;
  text-align: right;
  padding: 5px;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5px;
  margin-bottom: 5px;
}

button {
  padding: 5px;
}

.clear-button {
  width: 100%;
}
</style>
