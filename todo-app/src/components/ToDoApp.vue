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
        placeholder="Write your task"
      />
      <button @click="addTask">Add task</button>
    </div>
    <ul class="task-list">
      <li v-for="(task, index) in tasks" key="index" class="task-item">
        {{ task }}
        <button @click="removeTask">Remove</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-app {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid;
}

.task-input {
  display: flex;
  gap: 5px;
}

input {
  flex: 1;
}

.task-list {
  padding: 0;
}

.task-item {
  display: flex;
  justify-content: space-between;
}
</style>
