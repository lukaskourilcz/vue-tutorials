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
    <div class="input-field">
      <input
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="Write your task"
      />
      <button @click="addTask">Add task</button>
    </div>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" class="list-item">
        {{ task }}
        <button @click="removeTask(index)">Remove task</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-app {
  max-width: 400px;
  margin: 50px auto;
  border: 1px solid;
  padding: 20px;
}

.input-field {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
}

ul {
  list-style: none;
  padding: 0;
}

.list-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}
</style>
