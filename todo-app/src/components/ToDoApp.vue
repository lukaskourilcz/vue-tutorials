// 1. make skeleton, define consts, create functions to additem and to remove
item,

<script setup>
import { ref } from "vue";

const newTask = ref("");
const tasks = ref([]);

const addItem = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};
const removeItem = (index) => {
  tasks.value.splice(index, 1);
};
</script>

<template>
  <div class="todo-app">
    <div class="input">
      <input v-model="newTask" type="text" @keyup.enter="addItem" />
      <button @click="addItem">Add task</button>
    </div>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        {{ task }}
        <button @click="removeItem(index)">Remove task</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.todo-app {
  max-width: 500px;
  margin: 50px auto;
  border: 1px solid;
  padding: 20px;
}

.input {
  display: flex;
  justify-content: center;
}

li {
  display: flex;
  justify-content: space-between;
}
</style>
