<script setup>
import { ref } from 'vue';

const newTask = ref('')
const tasks = ref([])

const addTask = () => {
    if(newTask.value.trim() !== ''){
        tasks.value.push(newTask.value)
        newTask.value =''
    }
}

const removeTask = (index) => {
    tasks.value.splice(index, 1)
}



</script>

<template>
<div class="todo-app">
    <div class="task-input">
        <input v-model="newTask" @keyup.enter="addTask" placeholder="add your task here"/>
        <button @click="addTask">Add task</button>
    </div>
    <ul>
        <li v-for="(task, index) in tasks" key="index">
            {{ task }}
        </li>
        <button @click="removeTask">Remove</button>
    </ul>
</div>
</template>

<style scoped>

</style>