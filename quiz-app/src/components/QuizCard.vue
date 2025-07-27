<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  question: Object,
});

const emit = defineEmits(['answered'])


const selected = ref(null);

const isCorrect = computed(() => selected.value === props.question.correct);

const selectOption = (index) => {
  if (selected.value === null) {
    selected.value = index;
    emit("answered", index === props.question.correct);
  }
};

watch(
  () => props.question,
  () => {
    selected.value = null;
  }
);
</script>

<template>
  <div class="card p-3 mb-3">
    <h5>{{ question.text }}</h5>
    <ul class="list-group">
      <li
        v-for="(option, index) in question.options"
        :key="index"
        class="list-group-item"
        :class="{
          'list-group-item-success':
            selected !== null && index === question.correct,
          'list-group-item-danger':
            selected === index && index !== question.correct,
        }"
        @click="selectOption(index)"
      >
        {{ option }}
      </li>
    </ul>

    <div v-if="selected !== null" class="mt-3">
      <strong>{{ isCorrect ? "Správně!" : "Špatně!" }}</strong>
      <p class="mt-2 text-muted">{{ question.explanation }}</p>
    </div>
  </div>
</template>
