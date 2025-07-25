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

</template>

<style scoped>

</style>