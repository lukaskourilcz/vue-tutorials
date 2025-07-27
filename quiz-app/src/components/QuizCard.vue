<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  question: Object,
});

const selected = ref(null);

const isCorrect = computed(() => {
  return selected.value === question.correct;
});

const selectOption = (index) => {
  selected.value = index;
};
</script>

<template></template>
