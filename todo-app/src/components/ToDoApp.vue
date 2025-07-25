<script setup>
import { ref } from "vue";

const newTask = ref("");
const tasks = ref([]);

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const removeTask = (index) => {
  tasks.value.splice(index, 1);
};
</script>

<template>
  <div class="todo-app">
    <div class="task-input">
      <input
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="add your task here"
      />
      <button @click="addTask">Add task</button>
    </div>
    <ul>
      <li v-for="(task, index) in tasks" key="index" class="task-item">
        {{ task }}
        <button @click="removeTask" class="remove-button">Remove</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>

.todo-app {
    max-width: 400px;
    margin: 30px auto;
}

.task-input {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

</style>
