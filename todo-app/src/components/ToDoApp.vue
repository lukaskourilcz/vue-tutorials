<script setup>
import { ref } from "vue";

const newTask = ref("");
const tasks = ref([]);

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    console.log("New task list:", tasks.value);
    newTask.value = "";
  }
};

const removeTask = (index) => {
  tasks.value.splice(index, 1);
  console.log("New task list:", tasks.value);
};
</script>

<template>
  <div class="task-app">
    <div class="task-input">
      <input
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="write task aqui"
      />
      <button @click="addTask">Add task</button>
    </div>
    <ul>
      <li v-for="(task, index) in tasks" :key="index" class="list-item">
        {{ task }}
        <button @click="removeTask(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.task-app {
  max-width: 400px;
  margin: 50px auto;
  border: 1px solid;
  padding: 10px;
}

.task-input {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
}

ul {
  padding: 0;
}

.list-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}
</style>
