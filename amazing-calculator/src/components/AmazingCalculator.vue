<script setup>
import { ref, computed } from "vue";

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
    display.value = "error";
  }
};

const clearDisplay = () => {
  display.value = "0";
};
</script>

<template>
  <div class="calculator-app">
    <input v-model="display" class="display" readonly />
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
input {
  padding: 10px 20px;
  margin-bottom: 20px;
}

.calculator-app {
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.display {
  width: 75%;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 18px;
  text-align: right;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  width: 100%;
  padding: 10px;
  font-size: 18px;
}

.clear-button {
  width: 100%;
  margin-top: 10px;
}
</style>

<!-- <script setup>
import { ref, computed } from "vue";

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
  <div>
    <div class="calculator">
      <input v-model="display" class="displayClass" readonly />
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
  </div>
</template>

<style>
input {
  padding: 10px 20px;
  margin-bottom: 20px;
}

.calculator {
  max-width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.display {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  font-size: 18px;
  text-align: right;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}

button {
  width: 100%;
  padding: 10px;
  font-size: 18px;
}

.clear-button {
  width: 100%;
  margin-top: 10px;
}

</style> -->
