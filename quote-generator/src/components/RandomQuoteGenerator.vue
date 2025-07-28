// 1. Vytvorit consts pro seznam quotes, currentQuote // 2. Vytvorit funkci pro
random quote // 3. Vytvorit html skeleton // 4. Styling

<script setup>
import { ref, onMounted } from "vue";

const quotes = ref([
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work.",
    author: "Thomas Edison",
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky",
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
]);

const currentQuote = ref({ text: "", author: "" });

const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.value.length);
  currentQuote.value = quotes.value[randomIndex];
};

onMounted(getRandomQuote);
</script>

<template>
  <div class="quote-gen">
    <div>
      <blockquote>
        <p>{{ currentQuote.text }}</p>
        <cite>{{ currentQuote.author }}</cite>
      </blockquote>
    </div>
    <button @click="getRandomQuote">Get another quote</button>
  </div>
</template>

<style scoped>
.quote-gen {
  max-width: 400px;
  margin: 50px auto;
  border: 1px solid;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

blockquote {
  margin-bottom: 24px;
}

cite {
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
}
</style>
