// 1. Vytvor const pro items, vytvor funkci pro According toggle, 2. Vytvor html
skeleton 3.

<script setup>
import { ref } from "vue";

const items = ref([
  {
    title: "What is HTML?",
    content:
      "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
    open: false,
  },
  {
    title: "What is CSS?",
    content:
      "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
    open: false,
  },
  {
    title: "What is JS?",
    content:
      "JavaScript, often abbreviated as JS, is a programming language and core technology of the World Wide Web, alongside HTML and CSS. As of 2023, 98.7% of websites use JavaScript on the client side for webpage behavior, often incorporating third-party libraries.",
    open: false,
  },
]);

const toggleAccordion = (index) => {
  items.value = items.value.map((item, i) => ({
    ...item,
    open: i === index ? !item.open : false,
  }));
};
</script>

<template>
  <div class="accordion-container">
    <div v-for="(item, index) in items" :key="index" class="accordion">
      <div class="accordion-header" @click="toggleAccordion(index)">
        {{ item.title }}
        <span class="arrow-icon">{{ item.open ? "🔽" : "▶️" }}</span>
      </div>
      <div v-show="item.open" class="accordion-content">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.accordion-container {
  max-width: 600px;
  margin: 50px auto;
  border: 1px solid;
  padding: 20px;
}

.accordion-header {
  font-size: 20px;
  margin-bottom: 8px;
  font-weight: 600;
}

.accordion-content {
  padding: 8px;
  margin-bottom: 8px;
}
</style>
