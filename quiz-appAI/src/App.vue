<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const questions = ref([]);
const currentIndex = ref(0);
const currentQuestion = ref(null);

const userAnswer = ref("");
const feedback = ref("");
const feedbackScore = ref(0);
const isLoading = ref(false);
const showFeedback = ref(false);
const scoreColor = ref("");
const totalScore = ref(0);
const answeredCount = ref(0);
const aiError = ref(false);

const shuffleArray = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const loadQuestions = async () => {
  try {
    const res = await fetch("/questions.json");
    const data = await res.json();
    questions.value = shuffleArray(data.questions);
    currentIndex.value = 0;
    currentQuestion.value = questions.value[0];
  } catch (error) {
    console.error("Failed to load questions:", error);
    questions.value = [
      { id: 0, question: "Error loading questions. Please try again." },
    ];
    currentQuestion.value = questions.value[0];
  }
};

onMounted(() => {
  loadQuestions();
});

const submitAnswer = async () => {
  if (!userAnswer.value.trim() || isLoading.value) return;

  isLoading.value = true;
  showFeedback.value = false;
  scoreColor.value = "";
  aiError.value = false; 

  try {
    const res = await axios.post("https://quiz-app-backend-1-003c.onrender.com/evaluate", {
      question: currentQuestion.value.question,
      answer: userAnswer.value,
    });

    const score = res.data.score || 0;

    feedback.value = res.data.feedback;
    feedbackScore.value = score;
    showFeedback.value = true;
    totalScore.value += score;
    answeredCount.value += 1;

    if (score >= 8) scoreColor.value = "alert-success";
    else if (score >= 5) scoreColor.value = "alert-warning";
    else scoreColor.value = "alert-danger";
  } catch (err) {
    feedback.value =
      "❌ Failed to get AI evaluation. Please check backend connection.";
    showFeedback.value = true;
    aiError.value = true;
    console.error("API call error:", err);
  } finally {
    isLoading.value = false;
  }
};

const nextQuestion = () => {
  currentIndex.value++;
  if (currentIndex.value < questions.value.length) {
    currentQuestion.value = questions.value[currentIndex.value];
    userAnswer.value = "";
    feedback.value = "";
    feedbackScore.value = 0;
    showFeedback.value = false;
    scoreColor.value = "";
    aiError.value = false;
  } else {
    currentQuestion.value = null;
  }
};
</script>

<template>
  <div class="container mt-5" style="max-width: 700px">
    <h1 class="mb-4">🧠 Vue & JS Quiz (AI powered)</h1>

    <div
      class="d-flex justify-content-between align-items-center mb-2 mx-3"
      v-if="currentQuestion"
    >
      <strong>Question {{ currentIndex + 1 }} / {{ questions.length }}</strong>
      <span>📒 Score: {{ totalScore }} / {{ answeredCount * 10 }} pts</span>
    </div>

    <div class="card p-4" v-if="currentQuestion">
      <h5>{{ currentQuestion.question }}</h5>

      <textarea
        v-model="userAnswer"
        class="form-control mt-3"
        rows="5"
        placeholder="Type your answer here..."
        :disabled="isLoading || showFeedback"
      ></textarea>

      <button
        class="btn btn-primary mt-3"
        @click="submitAnswer"
        :disabled="isLoading || showFeedback || !userAnswer.trim()"
      >
        {{ isLoading ? "Evaluating..." : "Submit" }}
      </button>

      <div
        v-if="showFeedback"
        class="alert mt-4"
        :class="scoreColor"
        role="alert"
      >
        <strong>Score: {{ feedbackScore }}/10</strong><br />
        {{ feedback }}
      </div>

      <div v-if="aiError" class="mt-3">
        <a
          href="https://quiz-app-sable-eight-67.vercel.app/"
          class="btn btn-outline-danger"
          target="_blank"
          rel="noopener"
        >
          👉 Try version without AI
        </a>
      </div>

      <button
        class="btn btn-outline-primary mt-3"
        v-if="showFeedback && currentIndex + 1 < questions.length"
        @click="nextQuestion"
      >
        Next Question
      </button>
    </div>

    <p v-if="!currentQuestion && questions.length > 0" class="mt-4">
      ✅ Done! Final score: {{ totalScore }} / {{ questions.length * 10 }} pts.
    </p>
    <p
      v-else-if="!currentQuestion && questions.length === 0"
      class="mt-4 text-danger"
    >
      ❌ Error: No questions loaded.
    </p>
  </div>
</template>

<style scoped>
textarea:disabled {
  background-color: #f5f5f5;
  cursor: not-allowed;
}
.alert {
  white-space: pre-wrap;
}
</style>
