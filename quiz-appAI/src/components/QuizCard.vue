<script setup>
import { ref, computed, watch } from "vue";
import axios from "axios";

const props = defineProps({
  question: Object,
});

const emit = defineEmits(["answered"]);

const selected = ref(null);
const score = ref(null);
const feedback = ref("");
const isCorrect = computed(() => selected.value === props.question.correct);

const selectOption = async (index) => {
  if (selected.value === null) {
    selected.value = index;
    emit("answered", index === props.question.correct);

    try {
      const res = await axios.post("http://localhost:3000/evaluate", {
        question: props.question.text,
        answer: props.question.options[index],
      });

      score.value = res.data.score;
      feedback.value = res.data.feedback;
    } catch (err) {
      console.error("❌ Chyba při hodnocení:", err);
      score.value = null;
      feedback.value = "Nepodařilo se načíst hodnocení.";
    }
  }
};

watch(
  () => props.question,
  () => {
    selected.value = null;
    score.value = null;
    feedback.value = "";
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
        class="list-group-item user-select-none"
        :class="[
          selected !== null && index === question.correct
            ? 'list-group-item-success'
            : '',
          selected === index && index !== question.correct
            ? 'list-group-item-danger'
            : '',
          selected === null ? 'hoverable-option' : '',
        ]"
        :style="{ cursor: selected === null ? 'pointer' : 'default' }"
        @click="selectOption(index)"
      >
        {{ option }}
      </li>
    </ul>

    <div v-if="selected !== null" class="mt-3">
      <strong>{{ isCorrect ? "Správně!" : "Špatně!" }}</strong>
      <p class="mt-2 text-muted">{{ question.explanation }}</p>

      <div v-if="score !== null" class="mt-3">
        <strong>AI hodnocení: {{ score }} / 10</strong>
        <p class="text-muted">{{ feedback }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hoverable-option:hover {
  background-color: #f0f0f0;
}
</style>
