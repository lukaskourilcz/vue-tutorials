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

<template>
  <div class="card p-3 mb-3">
    <h5>Question text</h5>
    <ul class="list-group">
      <li
        v-for="(option, index) in question.options"
        @click="selectOption(index)"
        :key="index"
        class="list-group-item"
        :class="{
          'list-group-item-success': selected === index && isCorrect,
          'list-group-item-danger': selected === index && !isCorrect,
        }"
      >
        {{ option }}
      </li>
    </ul>
    <div v-if="selected !== null" class="mt-2">
      <strong>{{ isCorrect ? "Correct" : "Wrong" }}</strong>
    </div>
  </div>
</template>
