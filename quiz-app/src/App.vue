<script setup>
import QuizCard from "./components/QuizCard.vue";
import { ref } from "vue";

const questions = ref([
  {
    text: "K čemu slouží `ref()` ve Vue?",
    options: [
      "K načtení externích dat",
      "K reaktivnímu uchování hodnoty",
      "K definici komponenty",
      "K přístupu k API",
    ],
    correct: 1,
  },
]);
</script>

<template>
  <div class="container mt-5">
    <h1 class="mb-4">Vue & JS Quiz</h1>

    <QuizCard :question="questions[0]" />
  </div>
</template>
