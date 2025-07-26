// 1. const na newTask, tasks // 2. funkci na addTask a removeTask // 3. html
skeleton na aplikaci // 4. styling

<script setup>
import { ref } from "vue";

const newTask = ref("");
const tasks = ref([]);

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    console.log("tasks:", tasks.value);
    newTask.value = "";
  }
};

const removeTask = (index) => {
  tasks.value.splice(index, 1);
  console.log("tasks:", tasks.value);
};
</script>

<template>
  <div class="todo-app">
    <div class="task-input">
      <input
        v-model="newTask"
        @keyup.enter="addTask"
        placeholder="write your task here"
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
  padding: 20px;
  border: 1px solid;
}

.task-input {
  display: flex;
}

input {
  flex: 1;
}

ul {
  padding: 0
}

.list-item {
  display: flex;
  justify-content: space-between;
}
</style>
