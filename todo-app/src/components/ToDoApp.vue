<script setup>
import { ref } from 'vue';

const newTask = ref('')
const tasks = ref([])

const addTask = () => {
    if(newTask.value !== ''){
        newTask.value.trim.push(tasks)
        newTask.value =''
    }
}


</script>

<template>

</template>

<style scoped>

</style>