// /^[^\s@]+@[^\s@]+\.[^\s@]+$/

<script setup>

import { ref, computed } from 'vue';

const formData = ref({
    name: '',
    email: '',
    password: ''
})

const isNameValid = computed(() => formData.Data.value.name.trim() !== '')
const isEmailValid = computed(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email))
const isPasswordValid = computed(() => formData.value.password.length >= 8)

const isFormValid = computed(() => isNameValid.value && isEmailValid.value && isPasswordValid.value)

const submitForm = () => {
    if(isFormValid.value){
        console.log('Form Submitted', formData.value)
    } else {
        console.log('Form is invalid')
    }
}

</script>

<template></template>