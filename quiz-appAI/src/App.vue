<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const questions = ref([]);
const currentIndex = ref(0);
const currentQuestion = ref(null);

const userAnswer = ref("");
const feedback = ref("");
const isLoading = ref(false);
const showFeedback = ref(false);
const scoreColor = ref("");

// Načtení otázek z JSON souboru
const loadQuestions = async () => {
  const res = await fetch("/questions.json");
  const data = await res.json();
  questions.value = data;
  currentQuestion.value = questions.value[0];
};

onMounted(() => {
  loadQuestions();
});

const submitAnswer = async () => {
  if (!userAnswer.value.trim()) return;

  isLoading.value = true;
  showFeedback.value = false;
  scoreColor.value = "";

  try {
    const res = await axios.post("http://localhost:3000/evaluate", {
      question: currentQuestion.value.text,
      answer: userAnswer.value,
    });

    feedback.value = res.data.feedback;
    showFeedback.value = true;

    // 🎨 Hodnocení barvou podle skóre
    const score = res.data.score || 0;
    if (score >= 8) scoreColor.value = "alert-success";
    else if (score >= 5) scoreColor.value = "alert-warning";
    else scoreColor.value = "alert-danger";

  } catch (err) {
    feedback.value =
      "❌ AI hodnocení se nepodařilo načíst. Můžeš zkusit alternativní verzi bez AI.";
    showFeedback.value = true;
    console.error("Gemini error:", err);
  }

  isLoading.value = false;
};

const nextQuestion = () => {
  currentIndex.value++;
  if (currentIndex.value < questions.value.length) {
    currentQuestion.value = questions.value[currentIndex.value];
    userAnswer.value = "";
    feedback.value = "";
    showFeedback.value = false;
    scoreColor.value = "";
  }
};
</script>

<template>
  <div class="container mt-5" style="max-width: 700px">
    <h1 class="mb-4">Vue & JS Quiz</h1>

    <p>
      <strong>Otázka {{ currentIndex + 1 }} / {{ questions.length }}</strong>
    </p>
    <div class="card p-4" v-if="currentQuestion">
      <h5>{{ currentQuestion.text }}</h5>

      <input
        v-model="userAnswer"
        type="text"
        class="form-control mt-3"
        placeholder="Napiš svou odpověď sem..."
        :disabled="isLoading || showFeedback"
      />

      <button
        class="btn btn-primary mt-3"
        @click="submitAnswer"
        :disabled="isLoading || showFeedback"
      >
        {{ isLoading ? "Hodnotím..." : "Odeslat" }}
      </button>

      <div
        v-if="showFeedback"
        class="alert mt-4"
        :class="scoreColor"
        role="alert"
      >
        {{ feedback }}
      </div>

      <div v-if="feedback.includes('Nepodařilo')" class="mt-3">
        <a
          href="https://quiz-app-sable-eight-67.vercel.app/"
          target="_blank"
          class="btn btn-outline-secondary"
        >
          Otevřít verzi bez AI
        </a>
      </div>
    </div>

    <button
      class="btn btn-outline-primary mt-3"
      v-if="showFeedback && currentIndex + 1 < questions.length"
      @click="nextQuestion"
    >
      Další otázka
    </button>

    <p v-if="currentIndex + 1 >= questions.length && showFeedback" class="mt-4">
      ✅ Hotovo! Odpověděl jsi na všechny otázky.
    </p>
  </div>
</template>

<style scoped>
input:disabled {
  background-color: #f5f5f5;
}
</style>
